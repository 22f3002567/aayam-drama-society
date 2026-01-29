"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

// --- HELPERS ---
const generateSlug = (title: string) => 
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + "-" + new Date().getFullYear();

// --- 1. CREATE & UPDATE (The Mutator) ---
export async function upsertEvent(formData: FormData) {
  const supabase = createAdminClient();
  
  // Extract ID if it exists (Update Mode)
  const id = formData.get("id") as string | null;
  
  const title = formData.get("title") as string;
  const date = formData.get("date") as string;
  const type = formData.get("type") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;
  const regLink = formData.get("registration_link") as string;
  const posterFile = formData.get("poster") as File | null;

  // BASE PAYLOAD
  const payload: any = {
    title,
    date,
    type,
    location,
    description,
    registration_link: regLink || null,
  };

  // If New Event -> Generate Slug
  if (!id) {
    payload.slug = generateSlug(title);
  }

  // IMAGE UPLOAD LOGIC (Supabase Storage)
  if (posterFile && posterFile.size > 0) {
    const fileExt = posterFile.name.split('.').pop();
    const fileName = `${payload.slug || id}-${Date.now()}.${fileExt}`;
    const filePath = `posters/${fileName}`;

    // Upload
    const { error: uploadError } = await supabase.storage
      .from('events') // Ensure this bucket exists!
      .upload(filePath, posterFile);

    if (uploadError) {
      console.error("Upload Failed:", uploadError);
      // We continue without image or return error based on strictness
    } else {
      // Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('events')
        .getPublicUrl(filePath);
      
      payload.poster_url = publicUrl;
    }
  }

  // DB OPERATION
  let error;
  if (id) {
    // UPDATE
    const { error: updateError } = await supabase
      .from("events")
      .update(payload)
      .eq("id", id);
    error = updateError;
  } else {
    // INSERT
    const { error: insertError } = await supabase
      .from("events")
      .insert(payload);
    error = insertError;
  }

  if (error) {
    console.error("Operation Failed:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/events");
  return { success: true };
}

// --- 2. THE ARCHIVIST (Soft Delete) ---
export async function archiveEvent(id: string) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("events")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin/events");
  return { success: true };
}

// --- 3. THE RESTORER (Undo) ---
export async function restoreEvent(id: string) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("events")
    .update({ deleted_at: null })
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin/events");
  return { success: true };
}

// --- 4. THE SHREDDER (Permanent Delete + Audit) ---
export async function shredEvent(id: string, reason: string = "Admin Action") {
  const supabase = createAdminClient();

  // A. LOG THE DEATH (The Audit Trail)
  // Fetch details first to save in log
  const { data: event } = await supabase.from("events").select("title, slug").eq("id", id).single();
  
  if (event) {
      await supabase.from("audit_logs").insert({
          action: "PERMANENT_DELETE",
          target_table: "events",
          target_id: id,
          details: `Destroyed Event: ${event.title} (${event.slug}). Reason: ${reason}`,
          admin_email: "GOD_MODE_ADMIN" // In real auth, use session user email
      });
  }

  // B. DESTROY
  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin/events");
  return { success: true };
}