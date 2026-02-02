"use server";

import { createClient } from "@/lib/supabase/client";
import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

// --- 1. THE ALCHEMIST (ID & Hash Generator) ---
function generateCredentials(name: string, event: string) {
  const timestamp = Date.now().toString();
  const seed = `${name}-${event}-${timestamp}`;
  
  // 1. Generate Secure Verification Hash (SHA-256)
  const verification_hash = crypto.createHash('sha256').update(seed).digest('hex');
  
  // 2. Generate Human-Readable Public ID (AYM-YEAR-HEX)
  // Example: AYM-2026-A7B2
  const year = new Date().getFullYear();
  const shortHash = verification_hash.substring(0, 4).toUpperCase();
  const id = `AYM-${year}-${shortHash}`;

  return { id, verification_hash };
}

// --- 2. THE VAULT (Public Verification) ---
export async function verifyCertificate(queryId: string) {
  const supabase = createClient();
  
  // Normalize Input (Trim, Uppercase)
  const cleanId = queryId.trim().toUpperCase();

  const { data, error } = await supabase
    .from("certificates")
    .select(`
      *,
      play:plays ( title, slug )
    `)
    .eq("id", cleanId)
    .single();

  if (error || !data) {
    return { success: false, error: "ACCESS DENIED: Certificate invalid or revoked." };
  }

  return { success: true, data };
}

// --- 3. THE FORGE (Admin Minting) ---
export async function mintCertificate(payload: { 
    recipient_name: string; 
    award_title: string; 
    event_name: string; 
    play_id?: string 
}) {
  const supabase = createAdminClient();

  // Generate Credentials
  const { id, verification_hash } = generateCredentials(payload.recipient_name, payload.event_name);

  // DB Insert
  const { error } = await supabase.from("certificates").insert({
    id,
    recipient_name: payload.recipient_name,
    award_title: payload.award_title,
    event_name: payload.event_name,
    play_id: payload.play_id || null, // Handle optional play
    verification_hash
  });

  if (error) return { success: false, error: "Minting Error: " + error.message };

  // Audit Log
  await supabase.from("audit_logs").insert({
      action: "MINT_LEGACY",
      target_table: "certificates",
      target_id: id,
      details: `Minted for ${payload.recipient_name}: ${payload.award_title}`,
      admin_email: "GOD_MODE_ADMIN"
  });

  revalidatePath("/certificate");
  return { success: true, id };
}