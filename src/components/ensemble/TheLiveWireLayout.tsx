// "use client";

// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { EnsembleMember } from "@/types/schema";
// import { LiveWireProvider } from "./LiveWireContext";
// import LiveWireRow from "./LiveWireRow";
// import LiveWireSVG from "./LiveWireSVG";
// import { useState } from "react";

// // TIMELINE NAV
// const YEARS = ['2026', '2025', '2024', 'Faculty'];

// export default function TheLiveWireLayout({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

//   // Buffer height for header/footer
//   const totalHeight = (members.length * 800) + 600; 

//   return (
//     <LiveWireProvider>
//         <div ref={containerRef} className="relative bg-[#020202] overflow-hidden" style={{ minHeight: totalHeight }}>
        
//         {/* 1. HEADER */}
//         <header className="relative w-full h-[400px] flex flex-col items-center justify-center z-20">
//             <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center"
//             >
//                 <span className="text-gold-500 uppercase tracking-[0.5em] text-xs block mb-4 animate-pulse">
//                     Live Wire / {currentYear}
//                 </span>
//                 <h1 className="text-6xl md:text-9xl font-serif text-white/90 tracking-tighter">
//                     THE SIGNAL
//                 </h1>
//             </motion.div>
//         </header>

//         {/* 2. THE CONTENT */}
//         <div className="relative z-10 max-w-7xl mx-auto w-full">
//             {members.map((member, index) => (
//                 <LiveWireRow 
//                     key={member.id} 
//                     member={member} 
//                     index={index}
//                     activeAudioId={activeAudioId}
//                     setActiveAudioId={setActiveAudioId}
//                 />
//             ))}
//         </div>

//         {/* 3. THE SVG OVERLAY (Sits on top) */}
//         {/* We pass totalHeight to help drawing */}
//         <LiveWireSVG members={members} totalHeight={totalHeight} />

//         {/* 4. FOOTER */}
//         <div className="relative z-20 w-full flex justify-center py-20">
//             <div className="bg-neutral-900 border border-white/20 px-8 py-3 flex gap-8 shadow-2xl">
//                 {YEARS.map(year => (
//                     <button 
//                         key={year}
//                         className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${currentYear.includes(year) ? 'text-gold-500 font-bold' : 'text-neutral-500 hover:text-white'}`}
//                     >
//                         {year}
//                     </button>
//                 ))}
//             </div>
//         </div>

//         </div>
//     </LiveWireProvider>
//   );
// }