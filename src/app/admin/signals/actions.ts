"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function broadcastSignal(formData: FormData) {
  const supabase = createAdminClient();
  
  const theme = formData.get("theme") as string;
  const brief = formData.get("brief") as string;
  const deadline = formData.get("deadline") as string;
  
  const slug = theme.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  // 1. ARCHIVE ALL OLD SIGNALS (There can be only one Active)
  await supabase
    .from("challenges")
    .update({ status: "archived" })
    .eq("status", "active");

  // 2. LAUNCH NEW SIGNAL
  const { error } = await supabase.from("challenges").insert({
    theme,
    slug,
    brief,
    deadline,
    status: "active" // This lights up The Beacon
  });

  if (error) return { success: false, error: error.message };

  revalidatePath("/events"); // Refresh public page
  revalidatePath("/admin/signals");
  return { success: true };
}

export async function killSignal(id: string) {
  const supabase = createAdminClient();
  
  const { error } = await supabase
    .from("challenges")
    .update({ status: "closed" })
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/events");
  revalidatePath("/admin/signals");
  return { success: true };
}