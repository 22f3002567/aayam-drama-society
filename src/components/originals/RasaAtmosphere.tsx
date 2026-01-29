// // // // "use client";

// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

// // // // export default function RasaAtmosphere() {
// // // //   const { activeRasa, hoveredPlayId } = useArchiveAtmosphere();
// // // //   const isDefault = hoveredPlayId === null;

// // // //   return (
// // // //     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-1000">
      
// // // //       {/* 1. The Void */}
// // // //       <div className="absolute inset-0 bg-[#050505]" />

// // // //       {/* 2. The Divine Light (Spotlight) */}
// // // //       <motion.div 
// // // //         className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vh] blur-[150px] opacity-20"
// // // //         animate={{ backgroundColor: activeRasa.color }}
// // // //         transition={{ duration: 1.2, ease: "circOut" }}
// // // //       />

// // // //       {/* 3. THE STORYTELLER (The Giant Watermark) */}
// // // //       <div className="absolute inset-0 flex items-center justify-center opacity-10 mix-blend-overlay overflow-hidden">
// // // //         <AnimatePresence mode="wait">
// // // //             {!isDefault && (
// // // //                 <motion.h1 
// // // //                     key={activeRasa.id} // Re-renders when rasa changes
// // // //                     initial={{ y: 50, opacity: 0, scale: 0.9 }}
// // // //                     animate={{ y: 0, opacity: 1, scale: 1 }}
// // // //                     exit={{ y: -50, opacity: 0, scale: 1.1 }}
// // // //                     transition={{ duration: 0.8, ease: "easeOut" }}
// // // //                     className="text-[15vw] font-serif font-bold text-white tracking-tighter select-none whitespace-nowrap"
// // // //                     style={{ color: activeRasa.color }}
// // // //                 >
// // // //                     {activeRasa.label}
// // // //                 </motion.h1>
// // // //             )}
// // // //         </AnimatePresence>
// // // //       </div>

// // // //       {/* 4. Cinematic Vignette (Crucial for Contrast) */}
// // // //       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      
// // // //       {/* 5. Texture handled globally */}
// // // //     </div>
// // // //   );
// // // // }


// // // // "use client";

// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

// // // // export default function RasaAtmosphere() {
// // // //   const { activeRasa, hoveredPlayId } = useArchiveAtmosphere();
// // // //   const isDefault = hoveredPlayId === null;

// // // //   return (
// // // //     <>
// // // //       {/* LAYER 1: THE VOID (Background Light & Color) - Z-0 */}
// // // //       <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-1000">
// // // //         <div className="absolute inset-0 bg-[#050505]" />

// // // //         {/* The Divine Light */}
// // // //         <motion.div 
// // // //           className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vh] blur-[150px] opacity-20"
// // // //           animate={{ backgroundColor: activeRasa.color }}
// // // //           transition={{ duration: 1.2, ease: "circOut" }}
// // // //         />
        
// // // //         {/* Vignette */}
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
// // // //       </div>

// // // //       {/* LAYER 2: THE STORYTELLER (Foreground Ghost Text) - Z-20 */}
// // // //       {/* This sits ON TOP of the cards (which are Z-10), but is invisible to clicks */}
// // // //       <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
// // // //         <AnimatePresence mode="wait">
// // // //             {!isDefault && (
// // // //                 <motion.h1 
// // // //                     key={activeRasa.id} 
// // // //                     initial={{ y: 50, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
// // // //                     animate={{ y: 0, opacity: 0.3, scale: 1, filter: "blur(0px)" }} // Low opacity + blend
// // // //                     exit={{ y: -50, opacity: 0, scale: 1.1, filter: "blur(20px)" }}
// // // //                     transition={{ duration: 0.8, ease: "easeOut" }}
// // // //                     className="text-[18vw] font-serif font-bold text-white tracking-tighter select-none whitespace-nowrap mix-blend-overlay"
// // // //                     style={{ 
// // // //                         color: activeRasa.color,
// // // //                         textShadow: `0 0 100px ${activeRasa.color}` // Glow
// // // //                     }}
// // // //                 >
// // // //                     {activeRasa.label}
// // // //                 </motion.h1>
// // // //             )}
// // // //         </AnimatePresence>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

// // // export default function RasaAtmosphere() {
// // //   const { activeRasa } = useArchiveAtmosphere();

// // //   return (
// // //     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-1000">
// // //       <div className="absolute inset-0 bg-[#050505]" />

// // //       {/* The Divine Light (Atmosphere only) */}
// // //       <motion.div 
// // //         className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vh] blur-[150px] opacity-20"
// // //         animate={{ backgroundColor: activeRasa.color }}
// // //         transition={{ duration: 1.2, ease: "circOut" }}
// // //       />
      
// // //       {/* Cinematic Vignette */}
// // //       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

// // export default function RasaAtmosphere() {
// //   const { activeRasa } = useArchiveAtmosphere();

// //   return (
// //     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-1000 bg-[#050505]">
      
// //       {/* 1. THE DIVINE LIGHT (The Breathing Soul) */}
// //       <motion.div 
// //         className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[140vw] h-[100vh] blur-[120px] opacity-20"
// //         animate={{ 
// //             backgroundColor: activeRasa.color,
// //             scale: [1, 1.1, 1], // The Breath
// //         }}
// //         transition={{ 
// //             backgroundColor: { duration: 1.2, ease: "circOut" },
// //             scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } // Slow pulse
// //         }}
// //       />
      
// //       {/* 2. CINEMATIC VIGNETTE (Focuses the eye on the center/grid) */}
// //       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />

// //       {/* 3. GLOBAL GRAIN (Unified Texture) */}
// //       {/* This ensures the light interacts with the texture */}
// //       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay" />
// //     </div>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

// export default function RasaAtmosphere() {
//   const { activeRasa } = useArchiveAtmosphere();

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      
//       {/* 1. THE DIVINE LIGHT */}
//       <motion.div 
//         className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[140vw] h-[100vh] blur-[120px] opacity-20"
//         animate={{ 
//             backgroundColor: activeRasa.color,
//             scale: [1, 1.1, 1],
//         }}
//         transition={{ 
//             // INCREASED DURATION: From 1.2s to 2.5s for a 'liquid' feel
//             backgroundColor: { duration: 2.5, ease: "linear" }, 
//             scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
//         }}
//       />
      
//       {/* 2. CINEMATIC VIGNETTE */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />

//       {/* 3. GLOBAL GRAIN */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay" />
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

export default function RasaAtmosphere() {
  const { activeRasa, hoveredPlay, baseRasa } = useArchiveAtmosphere();

  // LOGIC: If hovering a play, use its color. 
  // If NOT hovering, use the Room's Base Color (The Divine Category Color).
  const currentColor = hoveredPlay ? activeRasa.color : baseRasa.color;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      
      {/* 1. THE DIVINE LIGHT */}
      <motion.div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[140vw] h-[100vh] blur-[120px] opacity-20"
        animate={{ 
            backgroundColor: currentColor, // ANIMATES SMOOTHLY BETWEEN CATEGORIES
            scale: [1, 1.1, 1],
        }}
        transition={{ 
            backgroundColor: { duration: 1.5, ease: "easeInOut" }, // Smooth color shift
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* 2. CINEMATIC VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />

      {/* 3. GLOBAL GRAIN */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay" />
    </div>
  );
}