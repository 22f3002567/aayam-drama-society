// // // // // // import type { Metadata } from "next";
// // // // // // import ClientWrapper from "@/components/layout/ClientWrapper";
// // // // // // import PrismMenu from "@/components/layout/PrismMenu";
// // // // // // import TheCrucible from "@/components/events/TheCrucible";
// // // // // // import TimelineChronicle from "@/components/events/TimelineChronicle";
// // // // // // import { getActiveChallenge, getEvents } from "@/lib/api";

// // // // // // export const metadata: Metadata = {
// // // // // //   title: "Events & The Chronicle | Aayam",
// // // // // //   description: "The living history of Aayam Drama Society. Current signals, upcoming horizons, and the archive of echoes.",
// // // // // // };

// // // // // // export default async function EventsPage() {
// // // // // //   // 1. FETCH DATA (Parallel Fetching for Speed)
// // // // // //   const [activeChallenge, events] = await Promise.all([
// // // // // //     getActiveChallenge(),
// // // // // //     getEvents()
// // // // // //   ]);

// // // // // //   return (
// // // // // //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
// // // // // //       <ClientWrapper>
        
// // // // // //         {/* GLOBAL BACKGROUND NOISE (Consistent with Site) */}
// // // // // //         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />

// // // // // //         {/* --- ZONE 1: THE CRUCIBLE (The Signal) --- */}
// // // // // //         {/* Only renders if there is an active mission */}
// // // // // //         <TheCrucible challenge={activeChallenge} />


// // // // // //         {/* --- ZONE 2 & 3: THE CHRONICLE (The Timeline) --- */}
// // // // // //         {/* If no challenge, add extra padding-top to breathe */}
// // // // // //         <div className={activeChallenge ? "mt-0" : "pt-40"}>
            
// // // // // //             {/* Header (Only show if no active challenge, otherwise Crucible acts as Hero) */}
// // // // // //             {!activeChallenge && (
// // // // // //                 <div className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
// // // // // //                     <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">
// // // // // //                         The Chronicle
// // // // // //                     </span>
// // // // // //                     <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
// // // // // //                         Moments in Time
// // // // // //                     </h1>
// // // // // //                     <p className="text-white/40 mt-6 max-w-xl text-sm leading-relaxed font-serif italic">
// // // // // //                         "Theatre vanishes as soon as it is born. This archive is our attempt to catch the echo."
// // // // // //                     </p>
// // // // // //                 </div>
// // // // // //             )}

// // // // // //             <TimelineChronicle events={events} />
            
// // // // // //         </div>

// // // // // //         {/* FOOTER / NAVIGATION */}
// // // // // //         <PrismMenu />
// // // // // //       </ClientWrapper>
// // // // // //     </main>
// // // // // //   );
// // // // // // }

// // // // // import TheCrucible from "@/components/events/TheCrucible";
// // // // // import ProductionSchedule from "@/components/events/ProductionSchedule";
// // // // // import ArchiveReel from "@/components/events/ArchiveReel";
// // // // // import { getActiveChallenge, getEvents } from "@/lib/api";
// // // // // import ClientWrapper from "@/components/layout/ClientWrapper";
// // // // // import PrismMenu from "@/components/layout/PrismMenu";

// // // // // export default async function EventsPage() {
// // // // //   const activeChallenge = await getActiveChallenge();
// // // // //   const allEvents = await getEvents();
  
// // // // //   const now = new Date();
// // // // //   const futureEvents = allEvents.filter(e => new Date(e.date) >= now);
// // // // //   const pastEvents = allEvents.filter(e => new Date(e.date) < now);

// // // // //   return (
// // // // //     <main className="bg-[#050505] min-h-screen">
// // // // //       <ClientWrapper>
        
// // // // //         {/* PHASE 1: THE AUDITION */}
// // // // //         <TheCrucible challenge={activeChallenge} />

// // // // //         {/* PHASE 2: PRE-PRODUCTION */}
// // // // //         <ProductionSchedule events={futureEvents} />

// // // // //         {/* PHASE 3: THE FINAL CUT (Requires horizontal scroll space) */}
// // // // //         <ArchiveReel events={pastEvents} />

// // // // //         <PrismMenu />
// // // // //       </ClientWrapper>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // import type { Metadata } from "next";
// // // // import ClientWrapper from "@/components/layout/ClientWrapper";
// // // // import PrismMenu from "@/components/layout/PrismMenu";
// // // // import TheCrucible from "@/components/events/TheCrucible";
// // // // import ProductionSchedule from "@/components/events/ProductionSchedule"; // Make sure this is imported
// // // // import ArchiveReel from "@/components/events/ArchiveReel";
// // // // import { getActiveChallenge, getEvents } from "@/lib/api";

// // // // export const metadata: Metadata = {
// // // //   title: "Events & The Chronicle | Aayam",
// // // //   description: "The living history of Aayam Drama Society. Current signals, upcoming horizons, and the archive of echoes.",
// // // // };

// // // // export default async function EventsPage() {
// // // //   // 1. FETCH DATA (Parallel Fetching for Speed)
// // // //   const [activeChallenge, allEvents] = await Promise.all([
// // // //     getActiveChallenge(),
// // // //     getEvents()
// // // //   ]);

// // // //   const now = new Date();
// // // //   const futureEvents = allEvents.filter(e => new Date(e.date) >= now);
// // // //   const pastEvents = allEvents.filter(e => new Date(e.date) < now);

// // // //   return (
// // // //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
// // // //       <ClientWrapper>
        
// // // //         {/* GLOBAL BACKGROUND NOISE (Consistent with Site) */}
// // // //         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />

// // // //         {/* --- ZONE 1: THE CRUCIBLE (The Signal) --- */}
// // // //         {/* Only renders if there is an active mission */}
// // // //         <TheCrucible challenge={activeChallenge} />


// // // //         {/* --- ZONE 2 & 3: THE CHRONICLE (The Timeline) --- */}
// // // //         {/* If no challenge, add extra padding-top to breathe */}
// // // //         <div className={activeChallenge ? "mt-0" : "pt-40"}>
            
// // // //             {/* Header (Only show if no active challenge, otherwise Crucible acts as Hero) */}
// // // //             {!activeChallenge && (
// // // //                 <div className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
// // // //                     <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">
// // // //                         The Chronicle
// // // //                     </span>
// // // //                     <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
// // // //                         Moments in Time
// // // //                     </h1>
// // // //                     <p className="text-white/40 mt-6 max-w-xl text-sm leading-relaxed font-serif italic">
// // // //                         "Theatre vanishes as soon as it is born. This archive is our attempt to catch the echo."
// // // //                     </p>
// // // //                 </div>
// // // //             )}

// // // //             {/* PHASE 2: PRE-PRODUCTION */}
// // // //             {/* Guard clause handled inside component, but safe to keep */}
// // // //             <ProductionSchedule events={futureEvents} />
            
// // // //             {/* PHASE 3: THE FINAL CUT */}
// // // //             {/* FIX APPLIED HERE: Only render if data exists to prevent Hook Error */}
// // // //             {pastEvents.length > 0 && (
// // // //                 <ArchiveReel events={pastEvents} />
// // // //             )}
            
// // // //         </div>

// // // //         {/* FOOTER / NAVIGATION */}
// // // //         <PrismMenu />
// // // //       </ClientWrapper>
// // // //     </main>
// // // //   );
// // // // }

// // // import type { Metadata } from "next";
// // // import ClientWrapper from "@/components/layout/ClientWrapper";
// // // import PrismMenu from "@/components/layout/PrismMenu";
// // // import TheCrucible from "@/components/events/TheCrucible";
// // // import ProductionSchedule from "@/components/events/ProductionSchedule"; 
// // // import ArchiveReel from "@/components/events/ArchiveReel";
// // // import StudioStandby from "@/components/events/StudioStandby"; // NEW
// // // import { getActiveChallenge, getEvents } from "@/lib/api";

// // // export const metadata: Metadata = {
// // //   title: "Studio Operations | Aayam",
// // //   description: "The Crucible (Active Challenges), The Call Sheet (Upcoming), and The Archive.",
// // // };

// // // export default async function EventsPage() {
// // //   // 1. FETCH DATA
// // //   const [activeChallenge, allEvents] = await Promise.all([
// // //     getActiveChallenge(),
// // //     getEvents()
// // //   ]);

// // //   const now = new Date();
// // //   const futureEvents = allEvents.filter(e => new Date(e.date) >= now);
// // //   const pastEvents = allEvents.filter(e => new Date(e.date) < now);

// // //   // 2. CHECK FOR TOTAL SILENCE (The Empty State)
// // //   const isStudioQuiet = !activeChallenge && futureEvents.length === 0 && pastEvents.length === 0;

// // //   return (
// // //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
// // //       <ClientWrapper>
        
// // //         {/* GLOBAL NOISE */}
// // //         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />

// // //         {/* --- SCENARIO A: THE STUDIO IS EMPTY --- */}
// // //         {isStudioQuiet ? (
// // //            <div className="flex items-center justify-center min-h-screen">
// // //               <StudioStandby />
// // //            </div>
// // //         ) : (
// // //            /* --- SCENARIO B: THE STUDIO IS LIVE --- */
// // //            <>
// // //               {/* ZONE 1: THE CRUCIBLE (Active Challenge) */}
// // //               <TheCrucible challenge={activeChallenge} />

// // //               <div className={activeChallenge ? "mt-0" : "pt-40"}>
                  
// // //                   {/* ZONE 2: PRE-PRODUCTION (Future) */}
// // //                   {/* Render only if there are future events */}
// // //                   {futureEvents.length > 0 && (
// // //                       <ProductionSchedule events={futureEvents} />
// // //                   )}
                  
// // //                   {/* FALLBACK: If no active challenge AND no future events, show Standby here? 
// // //                       No, we let the Archive take over if history exists. */}
// // //                   {!activeChallenge && futureEvents.length === 0 && pastEvents.length > 0 && (
// // //                       <div className="h-[40vh] flex flex-col items-center justify-center text-center">
// // //                           <span className="text-white/30 font-mono text-xs uppercase tracking-widest mb-4">Current Status</span>
// // //                           <h1 className="text-5xl font-serif text-white">Production Break</h1>
// // //                           <p className="text-white/40 mt-2">Exploring the Archives...</p>
// // //                       </div>
// // //                   )}

// // //                   {/* ZONE 3: THE ARCHIVE REEL (Past) */}
// // //                   {pastEvents.length > 0 && (
// // //                       <ArchiveReel events={pastEvents} />
// // //                   )}
// // //               </div>
// // //            </>
// // //         )}

// // //         <PrismMenu />
// // //       </ClientWrapper>
// // //     </main>
// // //   );
// // // }


// // import type { Metadata } from "next";
// // import ClientWrapper from "@/components/layout/ClientWrapper";
// // import PrismMenu from "@/components/layout/PrismMenu";
// // import TheCrucible from "@/components/events/TheCrucible";
// // import ProductionSchedule from "@/components/events/ProductionSchedule"; 
// // import ArchiveReel from "@/components/events/ArchiveReel";
// // import StudioStandby from "@/components/events/StudioStandby";
// // import { getActiveChallenge, getEvents } from "@/lib/api";

// // export const metadata: Metadata = {
// //   title: "Studio Operations | Aayam",
// //   description: "The Crucible (Active Challenges), The Call Sheet (Upcoming), and The Archive.",
// // };

// // export default async function EventsPage() {
// //   const [activeChallenge, allEvents] = await Promise.all([
// //     getActiveChallenge(),
// //     getEvents()
// //   ]);

// //   const now = new Date();
// //   const futureEvents = allEvents.filter(e => new Date(e.date) >= now);
// //   const pastEvents = allEvents.filter(e => new Date(e.date) < now);

// //   const isStudioQuiet = !activeChallenge && futureEvents.length === 0 && pastEvents.length === 0;

// //   return (
// //     // FIX 1: REMOVED 'overflow-x-hidden' FROM THIS LINE
// //     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] selection:bg-gold-500/30">
// //       <ClientWrapper>
        
// //         <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />

// //         {isStudioQuiet ? (
// //            <div className="flex items-center justify-center min-h-screen">
// //               <StudioStandby />
// //            </div>
// //         ) : (
// //            <>
// //               <TheCrucible challenge={activeChallenge} />

// //               <div className={activeChallenge ? "mt-0" : "pt-40"}>
                  
// //                   {futureEvents.length > 0 && (
// //                       <ProductionSchedule events={futureEvents} />
// //                   )}
                  
// //                   {!activeChallenge && futureEvents.length === 0 && pastEvents.length > 0 && (
// //                       <div className="h-[40vh] flex flex-col items-center justify-center text-center">
// //                           <span className="text-white/30 font-mono text-xs uppercase tracking-widest mb-4">Current Status</span>
// //                           <h1 className="text-5xl font-serif text-white">Production Break</h1>
// //                           <p className="text-white/40 mt-2">Exploring the Archives...</p>
// //                       </div>
// //                   )}

// //                   {pastEvents.length > 0 && (
// //                       <ArchiveReel events={pastEvents} />
// //                   )}
// //               </div>
// //            </>
// //         )}

// //         <PrismMenu />
// //       </ClientWrapper>
// //     </main>
// //   );
// // }


// import type { Metadata } from "next";
// import ClientWrapper from "@/components/layout/ClientWrapper";
// import PrismMenu from "@/components/layout/PrismMenu";
// import ActOneImprovisation from "@/components/events/ActOneImprovisation";
// import ActTwoCueSheet from "@/components/events/ActTwoCueSheet";
// import ActThreeMemory from "@/components/events/ActThreeMemory";
// import { getActiveChallenge, getEvents } from "@/lib/api";

// export const metadata: Metadata = {
//   title: "The Living Script | Aayam",
//   description: "A continuous production. Challenges, Schedules, and Memories.",
// };

// export default async function EventsPage() {
//   const [activeChallenge, allEvents] = await Promise.all([
//     getActiveChallenge(),
//     getEvents()
//   ]);

//   const now = new Date();
//   const futureEvents = allEvents.filter(e => new Date(e.date) >= now);
//   const pastEvents = allEvents.filter(e => new Date(e.date) < now);

//   return (
//     <main className="min-h-screen w-full bg-[#050505] text-[#F0F0F0] selection:bg-red-500/30">
//       <ClientWrapper>
        
//         {/* ACT I: THE CHALLENGE (Writer's Room) */}
//         {activeChallenge ? (
//             <ActOneImprovisation challenge={activeChallenge} />
//         ) : (
//             // Fallback Intro if no challenge
//             <div className="h-[50vh] flex items-center justify-center font-mono text-xs text-white/20 uppercase tracking-widest">
//                 [ SCENE MISSING: WAITING FOR DIRECTOR ]
//             </div>
//         )}

//         {/* ACT II: THE CUE SHEET (Backstage) */}
//         {/* Only show if cues exist */}
//         {futureEvents.length > 0 && <ActTwoCueSheet events={futureEvents} />}

//         {/* ACT III: THE MEMORY (The Archive) */}
//         {pastEvents.length > 0 && <ActThreeMemory events={pastEvents} />}

//         <PrismMenu />
//       </ClientWrapper>
//     </main>
//   );
// }


import type { Metadata } from "next";
import ClientWrapper from "@/components/layout/ClientWrapper";
import PrismMenu from "@/components/layout/PrismMenu";
import LuminousTimeline from "@/components/events/LuminousTimeline";
import { getActiveChallenge, getEvents } from "@/lib/api";

export const metadata: Metadata = {
  title: "Timeline | Aayam",
  description: "The Luminous Path. Active signals, upcoming horizons, and the archive of echoes.",
};

export default async function EventsPage() {
  // 1. FETCH
  const [activeChallenge, allEvents] = await Promise.all([
    getActiveChallenge(),
    getEvents()
  ]);

  // 2. SORT & FILTER
  const now = new Date();
  // Future events: Ascending (Soonest first)
  const futureEvents = allEvents
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  // Past events: Descending (Most recent first)
  const pastEvents = allEvents
    .filter(e => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="w-full bg-[#020202] selection:bg-red-500/30">
      <ClientWrapper>
        
        <LuminousTimeline 
            challenge={activeChallenge}
            futureEvents={futureEvents}
            pastEvents={pastEvents}
        />

        <PrismMenu />
      </ClientWrapper>
    </main>
  );
}