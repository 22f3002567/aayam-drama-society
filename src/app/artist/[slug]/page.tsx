// // src/app/ensemble/[slug]/page.tsx

// import { getMemberProfile, getEnsemble } from "@/lib/api";
// import ClientWrapper from "@/components/layout/ClientWrapper";
// import PrismMenu from "@/components/layout/PrismMenu";
// import ProfileArchitect from "@/components/profile/ProfileArchitect";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { createStaticClient } from "@/lib/supabase/server";

// // 1. STATIC PARAMS (Keep this, it's correct)
// export async function generateStaticParams() {
//   const supabase = createStaticClient(); // Use static client for build-time data fetching  
//   const members = await getEnsemble('2025-26', supabase);
  
//   return members.map((member) => ({
//     slug: member.slug,
//   }));
// }

// // 2. METADATA (Updated for Async Params)
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params; // <--- AWAIT THIS
//   const member = await getMemberProfile(slug);
//   if (!member) return { title: "Artist Not Found" };
  
//   return {
//     title: `${member.name} | The Lineage`,
//     description: member.bio || "An artist of the Aayam Ensemble.",
//   };
// }

// // 3. THE PAGE (Updated for Async Params)
// export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params; // <--- AWAIT THIS
  
//   // Fetch Data
//   const member = await getMemberProfile(slug);

//   // Debugging: If this logs NULL in your terminal, check your Database Slugs!
//   console.log(`[ProfilePage] Fetching slug: ${slug} -> Result:`, member ? "Found" : "NULL");

//   if (!member) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen w-full bg-[#020202] text-[#F0F0F0] selection:bg-white/20">
//       <ClientWrapper>
//         <ProfileArchitect member={member} />
//         <PrismMenu />
//       </ClientWrapper>
//     </main>
//   );
// }


import { getMemberProfile, getEnsemble } from "@/lib/api";
import { createStaticClient } from "@/lib/supabase/server"; // The Build-Time Fix
import ClientWrapper from "@/components/layout/ClientWrapper";
import PrismMenu from "@/components/layout/PrismMenu";
import ProfileArchitect from "@/components/profile/ProfileArchitect";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// --- 1. THE STATIC BUILDER (Speed) ---
// This tells Next.js: "Find every member in the DB and build their page NOW."
// No loading spinners. Instant access.
export async function generateStaticParams() {
  const supabase = createStaticClient();
  const members = await getEnsemble('2025-26', supabase);
  
  return members.map((member) => ({
    slug: member.slug,
  }));
}

// --- 2. THE META ARCHITECT (SEO) ---
// This ensures when you share the link on WhatsApp/LinkedIn, 
// it shows the Artist's Face and Bio, not generic text.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = await getMemberProfile(slug);
  
  if (!member) {
    return {
      title: "Artist Not Found | Aayam",
      description: "The requested artist profile does not exist in the archive."
    };
  }
  
  return {
    title: `${member.name} | The Lineage`,
    description: member.bio || `Explore the artistic journey of ${member.name} at Aayam.`,
    openGraph: {
      title: `${member.name} | The Lineage`,
      description: member.bio || "Aayam Drama Society",
      images: member.image_url ? [member.image_url] : [],
    }
  };
}

// --- 3. THE MAIN PAGE (The Stage) ---
export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch the full "Protagonist" data
  const member = await getMemberProfile(slug);

  // If they don't exist, show the 404 Curtain
  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-[#020202] text-[#F0F0F0] selection:bg-white/20">
      <ClientWrapper>
        
        {/* THE MASTERPIECE COMPONENT */}
        <ProfileArchitect member={member} />

        {/* The Navigation Prism (Always accessible) */}
        <PrismMenu />
        
      </ClientWrapper>
    </main>
  );
}