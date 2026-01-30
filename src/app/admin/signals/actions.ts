// "use server";

// import { createAdminClient } from "@/lib/supabase/admin";
// import { revalidatePath } from "next/cache";

// export async function broadcastSignal(formData: FormData) {
//   const supabase = createAdminClient();
  
//   const theme = formData.get("theme") as string;
//   const brief = formData.get("brief") as string;
//   const deadline = formData.get("deadline") as string;
  
//   const slug = theme.toLowerCase().replace(/[^a-z0-9]+/g, '-');

//   // 1. ARCHIVE ALL OLD SIGNALS (There can be only one Active)
//   await supabase
//     .from("challenges")
//     .update({ status: "archived" })
//     .eq("status", "active");

//   // 2. LAUNCH NEW SIGNAL
//   const { error } = await supabase.from("challenges").insert({
//     theme,
//     slug,
//     brief,
//     deadline,
//     status: "active" // This lights up The Beacon
//   });

//   if (error) return { success: false, error: error.message };

//   revalidatePath("/events"); // Refresh public page
//   revalidatePath("/admin/signals");
//   return { success: true };
// }

// export async function killSignal(id: string) {
//   const supabase = createAdminClient();
  
//   const { error } = await supabase
//     .from("challenges")
//     .update({ status: "closed" })
//     .eq("id", id);

//   if (error) return { success: false, error: error.message };

//   revalidatePath("/events");
//   revalidatePath("/admin/signals");
//   return { success: true };
// }


"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

// --- 1. INTELLIGENCE (Slug Generator) ---
async function generateUniqueSlug(supabase: any, theme: string) {
  // Base: "The Dark Knight" -> "the-dark-knight"
  let baseSlug = theme.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
    
  // Strategy: Append Year to ensure history (e.g. "noir-2026")
  const yearSlug = `${baseSlug}-${new Date().getFullYear()}`;
  
  // Paranoia: Check DB for collision
  const { data } = await supabase
    .from('challenges')
    .select('slug')
    .eq('slug', yearSlug)
    .maybeSingle(); // Safe check
  
  if (data) {
    // Fallback: Append Timestamp if year exists (Rare)
    return `${yearSlug}-${Date.now()}`; 
  }
  return yearSlug;
}

// --- 2. TRANSMIT (Broadcast) ---
export async function broadcastSignal(formData: FormData) {
  const supabase = createAdminClient();
  
  const theme = formData.get("theme") as string;
  const brief = formData.get("brief") as string;
  const deadlineStr = formData.get("deadline") as string;
  
  // A. VALIDATION (The Bouncer)
  if (!theme || !brief || !deadlineStr) {
    return { success: false, error: "Transmission Error: Missing Frequency Data." };
  }

  const deadline = new Date(deadlineStr);
  if (isNaN(deadline.getTime())) {
     return { success: false, error: "Transmission Error: Invalid Temporal Coordinates." };
  }
  if (deadline < new Date()) {
    return { success: false, error: "Temporal Paradox: Cannot broadcast to the past." };
  }

  try {
    const slug = await generateUniqueSlug(supabase, theme);

    // B. THE HANDOVER (Archive Old -> Launch New)
    
    // 1. Find Current Active Signal
    const { data: currentActive } = await supabase
        .from("challenges")
        .select("id, theme")
        .eq("status", "active")
        .maybeSingle(); // Use maybeSingle to prevent crash if 0 or >1 (DB constraint handles >1)
    
    // 2. Archive it (if exists)
    if (currentActive) {
        await supabase.from("challenges")
            .update({ status: "archived" })
            .eq("id", currentActive.id);
            
        // Log the end of an era
        await supabase.from("audit_logs").insert({
            action: "AUTO_ARCHIVE",
            target_table: "challenges",
            target_id: currentActive.id,
            details: `Archived by new broadcast: ${theme}`,
            admin_email: "GOD_MODE_ADMIN"
        });
    }

    // 3. Launch New Signal
    const { data: newSignal, error } = await supabase.from("challenges").insert({
      theme,
      slug,
      brief,
      deadline: deadline.toISOString(), // Standardize to UTC
      status: "active"
    }).select().single();

    if (error) throw error;

    // C. AUDIT TRAIL
    await supabase.from("audit_logs").insert({
        action: "BROADCAST",
        target_table: "challenges",
        target_id: newSignal.id,
        details: `Signal Live: ${theme} (Deadline: ${deadlineStr})`,
        admin_email: "GOD_MODE_ADMIN"
    });

    // D. REFRESH THE WORLD
    revalidatePath("/events"); 
    revalidatePath("/admin/signals");
    revalidatePath("/"); // Update home if beacon is there
    
    return { success: true };

  } catch (err: any) {
    console.error("Broadcast Failure:", err);
    return { success: false, error: "System Failure: " + err.message };
  }
}

// --- 3. TERMINATE (Kill Switch) ---
export async function killSignal(id: string) {
  const supabase = createAdminClient();
  
  try {
    // 1. Close Channel
    const { error } = await supabase
      .from("challenges")
      .update({ status: "closed" })
      .eq("id", id);

    if (error) throw error;

    // 2. Log Destruction
    await supabase.from("audit_logs").insert({
        action: "KILL_SIGNAL",
        target_table: "challenges",
        target_id: id,
        details: "Emergency Cutoff Initiated.",
        admin_email: "GOD_MODE_ADMIN"
    });

    revalidatePath("/events");
    revalidatePath("/admin/signals");
    return { success: true };

  } catch (err: any) {
    return { success: false, error: err.message };
  }
}