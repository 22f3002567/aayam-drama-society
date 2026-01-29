import ClientWrapper from "@/components/layout/ClientWrapper";
import PrismMenu from "@/components/layout/PrismMenu";
import RasaAtmosphere from "@/components/originals/RasaAtmosphere"; 
import ArchiveFeed from "@/components/originals/ArchiveFeed";
import { ArchiveProvider } from "@/components/originals/ArchiveContext";
import { getPlays } from "@/lib/api";
import { PlayCategory } from "@/types/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Originals | Aayam Archive",
  description: "The complete collection of productions by Aayam Drama Society.",
};

// Next.js 15: props.searchParams is a Promise
export default async function OriginalsArchive({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  
  // 1. EXTRACT CATEGORY FROM URL (Default to 'all')
  const categoryRaw = params.category;
  const category: PlayCategory | 'all' = 
    (typeof categoryRaw === 'string' && ['stage','street','film','short','workshop'].includes(categoryRaw))
    ? (categoryRaw as PlayCategory) 
    : 'all';

  // 2. SERVER FETCH (Pre-load the correct data for SEO) (Fetch with 'all' or specific category)
  const initialPlays = await getPlays(1, 12, category);

  return (
    <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
      <ArchiveProvider>
        <ClientWrapper>
            
            <RasaAtmosphere />

            {/* <div className="relative z-10 pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto"> */}
            <div className="relative z-10 pt-32 pb-32 px-4 md:px-8 max-w-[1600px] mx-auto">
                {/* We pass the initial data AND the initial category.
                   The Feed component handles the Header and Tabs internally 
                   to ensure they sync with the state.
                */}
                <ArchiveFeed 
                    initialPlays={initialPlays} 
                    initialCategory={category} 
                />
            </div>

            <PrismMenu />
            
        </ClientWrapper>
      </ArchiveProvider>
    </main>
  );
}

// import ClientWrapper from "@/components/layout/ClientWrapper";
// import PrismMenu from "@/components/layout/PrismMenu";
// import PlayCard from "@/components/originals/PlayCard";
// import RasaAtmosphere from "@/components/originals/RasaAtmosphere"; 
// import { ArchiveProvider } from "@/components/originals/ArchiveContext";
// import { getAllPlays } from "@/lib/api";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Originals | Aayam Archive",
//   description: "The complete collection of productions by Aayam Drama Society.",
// };

// export default async function OriginalsArchive() {
//   const plays = await getAllPlays();

//   return (
//     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
      
//       <ArchiveProvider>
//         <ClientWrapper>
            
//             <RasaAtmosphere />

//             <div className="relative z-10 pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
                
//                 {/* HEADER */}
//                 <div className="flex flex-col gap-8 mb-20 border-b border-white/5 pb-16">
//                     <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
//                     The Fourth Wall
//                     </span>
//                     <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter">
//                     Original Works
//                     </h1>
//                     <p className="text-neutral-500 max-w-xl text-sm md:text-base leading-relaxed">
//                         The Archive of emotions. Hover over a memory to reveal its <span className="text-white/60 italic">Soul</span>.
//                     </p>
//                 </div>

//                 {/* THE STAGGERED GALLERY */}
//                 {plays.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
//                         {plays.map((play, index) => {
//                             // LOGIC: Shift the middle column down to create a "Waterfall" look
//                             // In a 3-col grid, the index % 3 === 1 is the middle column
//                             // On mobile (1 col), we ignore this.
//                             const isMiddleColumn = index % 3 === 1;
                            
//                             return (
//                                 <div 
//                                     key={play.id} 
//                                     className={`${isMiddleColumn ? 'lg:translate-y-24' : ''} transition-transform duration-700`}
//                                 >
//                                     <PlayCard play={play} index={index} />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ) : (
//                     <div className="w-full py-40 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-sm">
//                         <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest">
//                             The Void is Empty
//                         </span>
//                     </div>
//                 )}

//             </div>

//             <PrismMenu />
            
//         </ClientWrapper>
//       </ArchiveProvider>

//     </main>
//   );
// }

// import ClientWrapper from "@/components/layout/ClientWrapper";
// import PrismMenu from "@/components/layout/PrismMenu";
// import PlayCard from "@/components/originals/PlayCard";
// import RasaAtmosphere from "@/components/originals/RasaAtmosphere"; 
// import { ArchiveProvider } from "@/components/originals/ArchiveContext";
// import { getAllPlays } from "@/lib/api";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Originals | Aayam Archive",
//   description: "The complete collection of productions by Aayam Drama Society.",
// };

// export default async function OriginalsArchive() {
//   const plays = await getAllPlays();

//   return (
//     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
      
//       <ArchiveProvider>
//         <ClientWrapper>
            
//             {/* 1. THE REACTIVE ATMOSPHERE */}
//             <RasaAtmosphere />

//             <div className="relative z-10 pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
                
//                 {/* 2. THE INTRODUCTION */}
//                 <div className="flex flex-col gap-8 mb-32 border-b border-white/5 pb-16">
//                     <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
//                     The Fourth Wall
//                     </span>
//                     <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter">
//                     Original Works
//                     </h1>
//                     <p className="text-neutral-500 max-w-xl text-sm md:text-base leading-relaxed">
//                         The Archive of emotions. Hover over a memory to reveal its <span className="text-white/60 italic">Soul</span>.
//                     </p>
//                 </div>

//                 {/* 3. THE GALLERY */}
//                 {plays.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
//                         {plays.map((play, index) => (
//                             <PlayCard key={play.id} play={play} index={index} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="w-full py-40 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-sm">
//                         <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest">
//                             The Void is Empty
//                         </span>
//                     </div>
//                 )}

//             </div>

//             <PrismMenu />
            
//         </ClientWrapper>
//       </ArchiveProvider>

//     </main>
//   );
// }

// // import ClientWrapper from "@/components/layout/ClientWrapper";
// // import PrismMenu from "@/components/layout/PrismMenu";
// // import PlayCard from "@/components/originals/PlayCard";
// // import RasaAtmosphere from "@/components/originals/RasaAtmosphere"; 
// // import { ArchiveProvider } from "@/components/originals/ArchiveContext";
// // import { getAllPlays } from "@/lib/api";
// // import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Originals | Aayam Archive",
// //   description: "The complete collection of productions by Aayam Drama Society.",
// // };

// // export default async function OriginalsArchive() {
// //   const plays = await getAllPlays();

// //   return (
// //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
      
// //       <ArchiveProvider>
// //         <ClientWrapper>
            
// //             {/* 1. BACKGROUND (Keep the Divine Light) */}
// //             <RasaAtmosphere />

// //             <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                
// //                 {/* 2. HEADER (Simple, Static, Majestic) */}
// //                 {/* No sticky logic. Just pure introduction. */}
// //                 <div className="flex flex-col gap-6 mb-24 border-b border-white/5 pb-12">
// //                     <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
// //                     The Fourth Wall
// //                     </span>
// //                     <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter">
// //                     Original Works
// //                     </h1>
// //                     <p className="text-neutral-500 max-w-xl text-sm md:text-base leading-relaxed">
// //                         The Archive of emotions. Hover over a memory to reveal its <span className="text-white/60 italic">Soul</span>.
// //                     </p>
// //                 </div>

// //                 {/* 3. GRID */}
// //                 {plays.length > 0 ? (
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
// //                         {plays.map((play, index) => (
// //                             <PlayCard key={play.id} play={play} index={index} />
// //                         ))}
// //                     </div>
// //                 ) : (
// //                     <div className="w-full py-40 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-sm">
// //                         <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest">
// //                             The Void is Empty
// //                         </span>
// //                     </div>
// //                 )}

// //             </div>

// //             <PrismMenu />
            
// //         </ClientWrapper>
// //       </ArchiveProvider>

// //     </main>
// //   );
// // }

// // import ClientWrapper from "@/components/layout/ClientWrapper";
// // import PrismMenu from "@/components/layout/PrismMenu";
// // import PlayCard from "@/components/originals/PlayCard";
// // import RasaAtmosphere from "@/components/originals/RasaAtmosphere"; 
// // import DynamicHeader from "@/components/originals/DynamicHeader"; // NEW IMPORT
// // import { ArchiveProvider } from "@/components/originals/ArchiveContext";
// // import { getAllPlays } from "@/lib/api";
// // import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Originals | Aayam Archive",
// //   description: "The complete collection of productions by Aayam Drama Society.",
// // };

// // export default async function OriginalsArchive() {
// //   const plays = await getAllPlays();

// //   return (
// //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
      
// //       <ArchiveProvider>
// //         <ClientWrapper>
            
// //             {/* Background */}
// //             <RasaAtmosphere />

// //             <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                
// //                 {/* THE NEW STORYTELLER */}
// //                 <DynamicHeader />

// //                 {/* THE GRID */}
// //                 {plays.length > 0 ? (
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
// //                         {plays.map((play, index) => (
// //                             <PlayCard key={play.id} play={play} index={index} />
// //                         ))}
// //                     </div>
// //                 ) : (
// //                     <div className="w-full py-40 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-sm">
// //                         <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest">
// //                             The Void is Empty
// //                         </span>
// //                     </div>
// //                 )}

// //             </div>

// //             <PrismMenu />
            
// //         </ClientWrapper>
// //       </ArchiveProvider>

// //     </main>
// //   );
// // }

// // import ClientWrapper from "@/components/layout/ClientWrapper";
// // import PrismMenu from "@/components/layout/PrismMenu";
// // import PlayCard from "@/components/originals/PlayCard";
// // import RasaAtmosphere from "@/components/originals/RasaAtmosphere"; // Background
// // import { ArchiveProvider } from "@/components/originals/ArchiveContext"; // Nervous System
// // import { getAllPlays } from "@/lib/api";
// // import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Originals | Aayam Archive",
// //   description: "The complete collection of productions by Aayam Drama Society.",
// // };

// // export default async function OriginalsArchive() {
// //   const plays = await getAllPlays();

// //   return (
// //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
      
// //       {/* 1. WRAP THE PAGE IN THE CONTEXT PROVIDER */}
// //       <ArchiveProvider>
// //         <ClientWrapper>
            
// //             {/* 2. THE REACTIVE BACKGROUND */}
// //             <RasaAtmosphere />

// //             <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                
// //                 {/* HEADER - CLEAN & PHILOSOPHICAL */}
// //                 <div className="flex flex-col gap-6 mb-24 border-b border-white/5 pb-12">
// //                     <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
// //                     The Fourth Wall
// //                     </span>
// //                     <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter">
// //                     Original Works
// //                     </h1>
// //                     <p className="text-neutral-500 max-w-xl text-sm md:text-base leading-relaxed">
// //                         The Archive of emotions. Hover to uncover the <span className="text-white/60 italic">Rasa</span> hidden within the silence.
// //                     </p>
// //                 </div>

// //                 {/* THE GRID */}
// //                 {plays.length > 0 ? (
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
// //                         {plays.map((play, index) => (
// //                             <PlayCard key={play.id} play={play} index={index} />
// //                         ))}
// //                     </div>
// //                 ) : (
// //                     <div className="w-full py-40 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-sm">
// //                         <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest">
// //                             The Void is Empty
// //                         </span>
// //                     </div>
// //                 )}

// //             </div>

// //             {/* 3. MENU IS BACK (Because we removed the Dock) */}
// //             <PrismMenu />
            
// //         </ClientWrapper>
// //       </ArchiveProvider>

// //     </main>
// //   );
// // }

// // import ClientWrapper from "@/components/layout/ClientWrapper";
// // import ArchiveView from "@/components/originals/ArchiveView"; // Import the new View
// // import { getAllPlays } from "@/lib/api";
// // import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Originals | Aayam",
// //   description: "The Navrasa Archive.",
// // };

// // export default async function OriginalsArchive() {
// //   const plays = await getAllPlays();

// //   return (
// //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
// //       <ClientWrapper>
// //          {/* We DO NOT use PrismMenu here. The ArchiveView handles navigation. */}
// //          <ArchiveView plays={plays} />
// //       </ClientWrapper>
// //     </main>
// //   );
// // }

// // "use client"; // MUST BE CLIENT TO HANDLE STATE

// // import { useState, useEffect } from "react";
// // import { getAllPlays } from "@/lib/api"; // We will need to adjust this since 'page' is client now
// // import { Play } from "@/types/schema";
// // import { NAVARASA, RasaKey } from "@/lib/rasa";
// // import PlayCard from "@/components/originals/PlayCard";
// // import RasaDock from "@/components/originals/RasaDock";
// // import RasaAtmosphere from "@/components/originals/RasaAtmosphere";
// // import ClientWrapper from "@/components/layout/ClientWrapper";

// // // NOTE: Since this is a Client Component, we fetch data inside useEffect 
// // // OR we keep the page server and pass data to a wrapper.
// // // LET'S DO THE WRAPPER PATTERN to keep SEO.
// // // ... Wait, for simplicity in this turn, I will create a Client View component.

// // export default function OriginalsPage() {
// //     // We need to fetch data. Since we can't do async await at top level of client component:
// //     // We will assume the data is passed or fetched. 
// //     // FOR ROBUSTNESS: Let's refactor into Parent (Server) -> Child (Client).
// //     return <OriginalsArchiveServer />; 
// // }

// // // ------------------------------------------------------------------
// // // FILE SPLIT SIMULATION (Put this in the same file for now)
// // // ------------------------------------------------------------------

// // function OriginalsArchiveServer() {
// //     // This is a trick. In Next 13+, we usually separate files.
// //     // I will write the Server Component fetching logic here, 
// //     // but in reality, you should just copy the logic below into your actual export.
// // }

// // // import ClientWrapper from "@/components/layout/ClientWrapper";
// // // import PrismMenu from "@/components/layout/PrismMenu";
// // // import PlayCard from "@/components/originals/PlayCard";
// // // import { getAllPlays } from "@/lib/api";
// // // import type { Metadata } from "next";

// // // export const metadata: Metadata = {
// // //   title: "Originals | Aayam Archive",
// // //   description: "The complete collection of productions by Aayam Drama Society.",
// // // };

// // // export default async function OriginalsArchive() {
// // //   const plays = await getAllPlays();

// // //   return (
// // //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
// // //       <ClientWrapper>
        
// // //         {/* Subtle Background Grain */}
// // //         <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
// // //            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
// // //         </div>

// // //         <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            
// // //             {/* HEADER - NAVRASA EXPLANATION */}
// // //             <div className="flex flex-col gap-6 mb-24 border-b border-white/5 pb-12">
// // //                 <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
// // //                   The Navrasa Archive
// // //                 </span>
// // //                 <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter">
// // //                   Original Works
// // //                 </h1>
// // //                 <p className="text-neutral-500 max-w-xl text-sm md:text-base leading-relaxed">
// // //                     We do not just tell stories; we engineer emotions. 
// // //                     Explore the spectrum of the nine rasas, from the fury of 
// // //                     <span className="text-red-500/80 mx-1">Raudra</span> 
// // //                     to the peace of 
// // //                     <span className="text-blue-300/80 mx-1">Shanta</span>.
// // //                 </p>
// // //             </div>

// // //             {/* THE GRID */}
// // //             {plays.length > 0 ? (
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
// // //                     {plays.map((play, index) => (
// // //                         <PlayCard key={play.id} play={play} index={index} />
// // //                     ))}
// // //                 </div>
// // //             ) : (
// // //                 <div className="w-full py-40 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-sm">
// // //                     <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest animate-pulse">
// // //                         Signal Lost / Archives Empty
// // //                     </span>
// // //                 </div>
// // //             )}

// // //         </div>

// // //         <PrismMenu />
// // //       </ClientWrapper>
// // //     </main>
// // //   );
// // // }