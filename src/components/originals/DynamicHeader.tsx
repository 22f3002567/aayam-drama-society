// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

// export default function DynamicHeader() {
//   const { activeRasa, hoveredPlay } = useArchiveAtmosphere();
//   const isDefault = hoveredPlay === null;

//   return (
//     <div className="flex flex-col gap-6 mb-24 border-b border-white/5 pb-12 min-h-[250px] justify-end">
//       <AnimatePresence mode="wait">
        
//         {/* STATE 1: IDLE (The Archive Intro) */}
//         {isDefault ? (
//           <motion.div
//             key="default"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col gap-6"
//           >
//             <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
//               The Fourth Wall
//             </span>
//             <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter">
//               Original Works
//             </h1>
//             <p className="text-neutral-500 max-w-xl text-sm md:text-base leading-relaxed">
//                Hover to uncover the story. Listen to the silence.
//             </p>
//           </motion.div>
//         ) : (
//           /* STATE 2: ACTIVE (The Play Details) */
//           <motion.div
//             key="active"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col gap-4"
//           >
//             {/* The Rasa Badge */}
//             <div className="flex items-center gap-3">
//                 <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeRasa.color }} />
//                 <span className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: activeRasa.color }}>
//                    {activeRasa.label} ({activeRasa.english})
//                 </span>
//             </div>
            
//             {/* The Title */}
//             <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none">
//               {hoveredPlay?.title}
//             </h1>
            
//             {/* The Logline / Description */}
//             <p className="text-neutral-400 max-w-2xl text-sm md:text-lg leading-relaxed font-serif italic border-l-2 pl-4 transition-colors duration-500" style={{ borderColor: activeRasa.color }}>
//                "{hoveredPlay?.description || "A story waiting to be told."}"
//             </p>
//           </motion.div>
//         )}

//       </AnimatePresence>
//     </div>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useArchiveAtmosphere } from "@/components/originals/ArchiveContext";

export default function DynamicHeader() {
  const { activeRasa, hoveredPlay } = useArchiveAtmosphere();
  const isDefault = hoveredPlay === null;

  return (
    // 1. STICKY POSITIONING: It stays with the user
    <div className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl transition-colors duration-700">
        
        {/* The Glow Line at the bottom */}
        <div 
            className="absolute bottom-0 left-0 w-full h-[1px] transition-colors duration-700"
            style={{ backgroundColor: activeRasa.color, opacity: 0.5 }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 min-h-[220px] flex flex-col justify-end">
            <AnimatePresence mode="wait">
                
                {/* STATE 1: IDLE (The Archive Intro) */}
                {isDefault ? (
                <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4"
                >
                    <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                    The Fourth Wall
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tighter">
                    Original Works
                    </h1>
                    <p className="text-neutral-500 max-w-xl text-xs md:text-sm leading-relaxed">
                    The Archive of emotions. Hover to uncover the <span className="text-white/60 italic">Rasa</span> hidden within the silence.
                    </p>
                </motion.div>
                ) : (
                /* STATE 2: ACTIVE (The Play Details) */
                <motion.div
                    key="active"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-2"
                >
                    {/* The Rasa Badge */}
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeRasa.color }} />
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: activeRasa.color }}>
                            {activeRasa.label} // {activeRasa.english}
                        </span>
                    </div>
                    
                    {/* The Title */}
                    <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none line-clamp-1">
                        {hoveredPlay?.title}
                    </h1>
                    
                    {/* The Logline */}
                    <p 
                        className="text-neutral-300 max-w-2xl text-xs md:text-sm leading-relaxed font-serif italic border-l-2 pl-4 transition-colors duration-500 line-clamp-2" 
                        style={{ borderColor: activeRasa.color }}
                    >
                        "{hoveredPlay?.description || "A story waiting to be told."}"
                    </p>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
  );
}