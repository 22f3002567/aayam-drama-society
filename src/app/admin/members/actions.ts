// // "use server";

// // import { createAdminClient } from "@/lib/supabase/admin";
// // import { revalidatePath } from "next/cache";

// // // --- HELPER: Auto-Ranker (The Hierarchy Logic) ---
// // const getHierarchy = (role: string) => {
// //     const r = role.toLowerCase();
    
// //     // 1. ZENITH (Faculty)
// //     if (r.includes('faculty') || r.includes('mentor')) 
// //         return { rank: 'ZENITH', sort: 0 };
    
// //     // 2. CROWN (High Command)
// //     if (r.includes('secretary') && !r.includes('deputy')) 
// //         return { rank: 'CROWN', sort: 1 };
// //     if (r.includes('deputy secretary') || r.includes('joint secretary')) 
// //         return { rank: 'CROWN', sort: 2 };
        
// //     // 3. ORBIT (Department Leads)
// //     if (r.includes('head') && !r.includes('deputy') && !r.includes('co-')) 
// //         return { rank: 'ORBIT', sort: 10 };
// //     if (r.includes('deputy head') || r.includes('co-head')) 
// //         return { rank: 'ORBIT', sort: 11 };
        
// //     // 4. CLOUD (The Corps)
// //     if (r.includes('coordinator')) return { rank: 'CLOUD', sort: 20 };
    
// //     return { rank: 'CLOUD', sort: 99 }; // General Member
// // };

// // const generateSlug = (name: string) => 
// //   name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

// // // --- UPSERT ACTION ---
// // export async function upsertMember(formData: FormData) {
// //   const supabase = createAdminClient();
  
// //   const id = formData.get("id") as string | null;
// //   const name = formData.get("name") as string;
// //   const email = formData.get("email") as string;
// //   const bio = formData.get("bio") as string;
// //   const color = formData.get("color") as string || '#eab308';
// //   const imageFile = formData.get("image_file") as File | null;
  
// //   // Tenure Specifics
// //   const role = formData.get("role") as string; 
// //   const department = formData.get("department") as string;
// //   const year = formData.get("year") as string || "2025-2026";
// //   const is_alumni = formData.get("is_alumni") === 'true';

// //   if (!name || !role) return { success: false, error: "Name and Role are required." };

// //   // 1. IDENTITY (team_members)
// //   const memberPayload: any = {
// //     name,
// //     email,
// //     bio,
// //     color, // Navarasa Aura
// //     is_alumni
// //   };

// //   if (!id) memberPayload.slug = generateSlug(name);

// //   // Image Upload Logic
// //   if (imageFile && imageFile.size > 0) {
// //     const fileExt = imageFile.name.split('.').pop();
// //     const fileName = `${memberPayload.slug || id}-${Date.now()}.${fileExt}`;
// //     const { error: uploadError } = await supabase.storage
// //       .from('avatars')
// //       .upload(fileName, imageFile, { upsert: true });

// //     if (!uploadError) {
// //         const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(fileName);
// //         memberPayload.image_url = publicUrl;
// //     }
// //   }

// //   // Upsert Identity
// //   let memberId = id;
// //   if (id) {
// //     await supabase.from("team_members").update(memberPayload).eq("id", id);
// //   } else {
// //     const { data, error } = await supabase.from("team_members").insert(memberPayload).select("id").single();
// //     if (error) return { success: false, error: error.message };
// //     memberId = data.id;
// //   }

// //   // 2. HIERARCHY (tenures)
// //   // We calculate the rank automatically so you don't have to guess
// //   const { rank, sort } = getHierarchy(role);

// //   const tenurePayload = {
// //       member_id: memberId,
// //       role_student: role,
// //       department,
// //       year,
// //       rank, // 'CROWN', 'ORBIT', etc.
// //       sort_order: sort,
// //       is_current: !is_alumni // If alumni, it's not current
// //   };

// //   // Check for existing tenure in this year to update instead of insert
// //   const { data: existingTenure } = await supabase
// //     .from("tenures")
// //     .select("id")
// //     .eq("member_id", memberId)
// //     .eq("year", year)
// //     .maybeSingle();

// //   if (existingTenure) {
// //       await supabase.from("tenures").update(tenurePayload).eq("id", existingTenure.id);
// //   } else {
// //       await supabase.from("tenures").insert(tenurePayload);
// //   }

// //   revalidatePath("/admin/members");
// //   return { success: true };
// // }

// // // --- DELETE ACTION ---
// // export async function deleteMember(id: string) {
// //   const supabase = createAdminClient();
// //   const { error } = await supabase.from("team_members").delete().eq("id", id);
// //   if (error) return { success: false, error: error.message };
// //   revalidatePath("/admin/members");
// //   return { success: true };
// // }

// "use server";

// import { createAdminClient } from "@/lib/supabase/admin";
// import { revalidatePath } from "next/cache";

// const generateSlug = (name: string) => 
//   name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

// const getHierarchy = (role: string) => {
//     const r = role.toLowerCase();
//     if (r.includes('faculty') || r.includes('mentor')) return { rank: 'ZENITH', sort: 0 };
//     if (r.includes('secretary') && !r.includes('deputy')) return { rank: 'CROWN', sort: 1 };
//     if (r.includes('deputy secretary') || r.includes('joint')) return { rank: 'CROWN', sort: 2 };
//     if (r.includes('head') && !r.includes('deputy') && !r.includes('co-')) return { rank: 'ORBIT', sort: 10 };
//     if (r.includes('deputy head') || r.includes('co-head')) return { rank: 'ORBIT', sort: 11 };
//     if (r.includes('coordinator')) return { rank: 'CLOUD', sort: 20 };
//     return { rank: 'CLOUD', sort: 99 };
// };

// export async function upsertMember(formData: FormData) {
//   const supabase = createAdminClient();
  
//   const id = formData.get("id") as string | null;
//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const bio = formData.get("bio") as string;
//   const color = formData.get("color") as string || '#eab308';
//   const is_alumni = formData.get("is_alumni") === 'true';
  
//   // Files
//   const imageFile = formData.get("image_file") as File | null;
//   const voiceFile = formData.get("voice_file") as File | null; // <--- NEW

//   // Socials (Pack into JSON)
//   const social_links = {
//       instagram: formData.get("instagram") as string,
//       linkedin: formData.get("linkedin") as string,
//       portfolio: formData.get("portfolio") as string
//   };

//   if (!name) return { success: false, error: "Name is required." };

//   // 1. PREPARE IDENTITY (team_members)
//   const memberPayload: any = {
//     name,
//     email,
//     bio,
//     color,
//     is_alumni,
//     social_links // <--- CORRECTED: Sending JSONB
//   };

//   // Generate slug only if new
//   if (!id) memberPayload.slug = generateSlug(name);

//   // --- IMAGE UPLOAD ---
//   if (imageFile && imageFile.size > 0) {
//     const fileName = `img-${memberPayload.slug || id}-${Date.now()}.${imageFile.name.split('.').pop()}`;
//     const { error } = await supabase.storage.from('avatars').upload(fileName, imageFile, { upsert: true });
//     if (!error) {
//         const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
//         memberPayload.image_url = data.publicUrl;
//     }
//   }

//   // --- VOICE UPLOAD ---
//   if (voiceFile && voiceFile.size > 0) {
//     const fileName = `voice-${memberPayload.slug || id}-${Date.now()}.${voiceFile.name.split('.').pop()}`;
//     const { error } = await supabase.storage.from('avatars').upload(fileName, voiceFile, { upsert: true });
//     if (!error) {
//         const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
//         memberPayload.voice_note_url = data.publicUrl; // <--- MAPPED TO CORRECT COLUMN
//     }
//   }

//   // UPSERT IDENTITY
//   let memberId = id;
//   if (id) {
//     const { error } = await supabase.from("team_members").update(memberPayload).eq("id", id);
//     if (error) return { success: false, error: "Member Update Failed: " + error.message };
//   } else {
//     const { data, error } = await supabase.from("team_members").insert(memberPayload).select("id").single();
//     if (error) return { success: false, error: "Member Create Failed: " + error.message };
//     memberId = data.id;
//   }

//   // 2. PREPARE TENURE (tenures)
//   const role = formData.get("role") as string; 
//   const department = formData.get("department") as string;
//   const year = formData.get("year") as string || "2025-2026";
//   const { rank, sort } = getHierarchy(role);

//   const tenurePayload = {
//       member_id: memberId,
//       role_student: role, // <--- CORRECTED: Mapped to role_student
//       department,
//       year,
//       rank,
//       sort_order: sort,
//       is_current: !is_alumni
//   };

//   // Check existing tenure for this year/member
//   const { data: existingTenure } = await supabase
//     .from("tenures")
//     .select("id")
//     .eq("member_id", memberId)
//     .eq("year", year)
//     .maybeSingle();

//   if (existingTenure) {
//       await supabase.from("tenures").update(tenurePayload).eq("id", existingTenure.id);
//   } else {
//       await supabase.from("tenures").insert(tenurePayload);
//   }

//   revalidatePath("/admin/members");
//   return { success: true };
// }

// export async function deleteMember(id: string) {
//   const supabase = createAdminClient();
//   const { error } = await supabase.from("team_members").delete().eq("id", id);
//   if (error) return { success: false, error: error.message };
//   revalidatePath("/admin/members");
//   return { success: true };
// }

"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

const generateSlug = (name: string) => 
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export async function upsertMember(formData: FormData) {
  const supabase = createAdminClient();
  
  const id = formData.get("id") as string | null;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const bio = formData.get("bio") as string;
  const color = formData.get("color") as string || '#eab308';
  const is_alumni = formData.get("is_alumni") === 'true';
  const imageFile = formData.get("image_file") as File | null;
  const voiceFile = formData.get("voice_file") as File | null;

  if (!name) return { success: false, error: "Name is required." };

  // 1. IDENTITY (team_members)
  // Pack socials into JSON
  const social_links = {
      instagram: formData.get("instagram"),
      linkedin: formData.get("linkedin")
  };

  const memberPayload: any = {
    name,
    email,
    bio,
    color,
    is_alumni,
    social_links // JSONB
  };

  if (!id) memberPayload.slug = generateSlug(name);

  // UPLOAD IMAGES/AUDIO
  if (imageFile && imageFile.size > 0) {
    const fileName = `img-${Date.now()}-${imageFile.name}`;
    const { error } = await supabase.storage.from('avatars').upload(fileName, imageFile);
    if (!error) {
        const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
        memberPayload.image_url = data.publicUrl;
    }
  }
  if (voiceFile && voiceFile.size > 0) {
    const fileName = `voice-${Date.now()}-${voiceFile.name}`;
    const { error } = await supabase.storage.from('avatars').upload(fileName, voiceFile);
    if (!error) {
        const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
        memberPayload.voice_note_url = data.publicUrl;
    }
  }

  // UPSERT MEMBER
  let memberId = id;
  if (id) {
    const { error } = await supabase.from("team_members").update(memberPayload).eq("id", id);
    if (error) return { success: false, error: error.message };
  } else {
    const { data, error } = await supabase.from("team_members").insert(memberPayload).select("id").single();
    if (error) return { success: false, error: error.message };
    memberId = data.id;
  }

  // 2. HIERARCHY (tenures)
  // We use the Explicit values from the form
  const role_student = formData.get("role") as string; 
  const department = formData.get("department") as string;
  const year = formData.get("year") as string || "2025-2026";
  const rank = formData.get("rank") as string; // Explicit
  const sort_order = parseInt(formData.get("sort_order") as string) || 99; // Explicit

  const tenurePayload = {
      member_id: memberId,
      role_student,
      department,
      year,
      rank,
      sort_order,
      is_current: !is_alumni
  };

  const { data: existingTenure } = await supabase.from("tenures").select("id").eq("member_id", memberId).eq("year", year).maybeSingle();

  if (existingTenure) {
      await supabase.from("tenures").update(tenurePayload).eq("id", existingTenure.id);
  } else {
      await supabase.from("tenures").insert(tenurePayload);
  }

  revalidatePath("/admin/members");
  revalidatePath("/ensemble"); // REFRESH PUBLIC PAGE
  return { success: true };
}

export async function deleteMember(id: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) return { success: false, error: error.message };
  revalidatePath("/admin/members");
  return { success: true };
}