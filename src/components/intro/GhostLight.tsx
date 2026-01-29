// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { playSound } from "@/lib/audio";

// export default function GhostLight({ onIgnite }: { onIgnite: () => void }) {
//   const [isIgnited, setIsIgnited] = useState(false);

//   const handleIgnition = () => {
//     playSound('click');
//     setIsIgnited(true);
//     // We give the expansion enough time to fill the screen before unmounting
//     setTimeout(onIgnite, 2000); 
//   };

//   return (
//     <AnimatePresence>
//       {!isIgnited && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
//           // CRITICAL FIX: We delay the opacity fade so the Gold Expansion covers the cut
//           exit={{ opacity: 0, transition: { duration: 1, ease: "easeOut", delay: 1.2 } }}
//         >
//           {/* THE TRIGGER */}
//           <div 
//             onClick={handleIgnition}
//             onMouseEnter={() => playSound('hover')}
//             className="group relative cursor-pointer p-20 flex items-center justify-center"
//           >
//             {/* 1. THE FILAMENT (The Source) */}
//             <motion.div 
//               className="relative z-10 h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
//               animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* 2. THE HALO (The Atmosphere) */}
//             <motion.div 
//               className="absolute inset-0 bg-gold-500/10 blur-[60px] rounded-full"
//               animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//             />

//             {/* 3. THE IGNITION WAVE (The Iris Open) */}
//             {isIgnited && (
//               <motion.div
//                 className="absolute inset-0 bg-gold-500 rounded-full"
//                 initial={{ scale: 0, opacity: 1 }}
//                 animate={{ scale: 200, opacity: 1 }} // Scale huge to cover screen
//                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//               />
//             )}

//             {/* 4. THE PROMPT */}
//             {!isIgnited && (
//               <motion.div 
//                 className="absolute top-28 text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-mono"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1, duration: 1 }}
//               >
//                 Ignite
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }




// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { playSound } from "@/lib/audio";

// export default function GhostLight({ onIgnite }: { onIgnite: () => void }) {
//   const [stage, setStage] = useState<'idle' | 'ignited'>('idle');

//   const handleIgnition = () => {
//     playSound('click');
//     setStage('ignited');
    
//     // CRITICAL FIX: We hold the "White Out" state for 2.5 seconds.
//     // This allows the explosion to fully saturate the screen before we swap the page.
//     setTimeout(onIgnite, 2500); 
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
//       // THE FADE OUT: This happens AFTER the parent receives onIgnite
//       // We make this very slow (2s) so the Home Page emerges gently from the light
//       exit={{ opacity: 0, transition: { duration: 2, ease: "easeInOut" } }}
//     >
//       <AnimatePresence>
//         {stage === 'idle' && (
//           <motion.div
//             key="trigger"
//             onClick={handleIgnition}
//             onMouseEnter={() => playSound('hover')}
//             className="group relative cursor-pointer p-20 flex items-center justify-center"
//             exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.5 } }} // Bulb shrinks before bang
//           >
//             {/* 1. THE FILAMENT (Heartbeat) */}
//             <motion.div 
//               className="relative z-10 h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
//               animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* 2. THE HALO (Atmosphere) */}
//             <motion.div 
//               className="absolute inset-0 bg-gold-500/10 blur-[60px] rounded-full"
//               animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//             />

//             {/* 3. THE PROMPT */}
//             <motion.div 
//               className="absolute top-28 text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-mono"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1, duration: 1 }}
//             >
//               Ignite
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* THE BIG BANG (Outside AnimatePresence so it persists) */}
//       {stage === 'ignited' && (
//         <motion.div
//           className="absolute inset-0 bg-gold-500 rounded-full"
//           initial={{ scale: 0, opacity: 1 }}
//           // THE CINEMATIC EXPANSION:
//           // It takes 2.5 seconds to cover the universe.
//           // It holds the user in pure light.
//           animate={{ scale: 300 }} 
//           transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} // Custom "Heavy" easing
//         />
//       )}
//     </motion.div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { playSound } from "@/lib/audio";

// export default function GhostLight({ onIgnite }: { onIgnite: () => void }) {
//   const [isExploding, setIsExploding] = useState(false);

//   const handleIgnition = () => {
//     playSound('click');
//     setIsExploding(true);
    
//     // We wait 2.5 seconds for the expansion to finish before telling the page to load
//     setTimeout(onIgnite, 2500); 
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
//       // The Fade Out of the whole white screen happens AFTER the expansion is done
//       exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
//     >
//       {/* THE SOURCE
//          This is the Dot. It is ALSO the Explosion.
//          We do not swap divs. We transform this one.
//       */}
//       <motion.div 
//         onClick={!isExploding ? handleIgnition : undefined}
//         onMouseEnter={() => !isExploding && playSound('hover')}
//         className={`relative z-10 rounded-full bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.8)] cursor-pointer ${isExploding ? 'cursor-default' : ''}`}
        
//         // 1. DIMENSIONS
//         initial={{ width: 12, height: 12 }} 
//         animate={isExploding 
//           ? { scale: 300, backgroundColor: "#F0F0F0" } // Explode to White/Gold
//           : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] } // Heartbeat
//         }
        
//         // 2. TIMING
//         transition={isExploding 
//           ? { duration: 2.5, ease: [0.22, 1, 0.36, 1] } // The Explosion (Slow & Heavy)
//           : { duration: 3, repeat: Infinity, ease: "easeInOut" } // The Heartbeat
//         }
//       >
//         {/* The Halo (Only visible before explosion) */}
//         {!isExploding && (
//           <motion.div 
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gold-500/10 blur-[30px] rounded-full pointer-events-none"
//           />
//         )}
//       </motion.div>

//       {/* The Text Prompt (Fades out instantly on click) */}
//       {!isExploding && (
//         <motion.div 
//           className="absolute mt-32 text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-mono pointer-events-none"
//           exit={{ opacity: 0 }}
//         >
//           Ignite
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { playSound } from "@/lib/audio";

// export default function GhostLight({ onIgnite }: { onIgnite: () => void }) {
//   const [isExploding, setIsExploding] = useState(false);

//   const handleIgnition = () => {
//     playSound('click');
//     setIsExploding(true);
    
//     // DELAY: We keep the screen blindingly white for 2.5 seconds.
//     // This creates the "Suspense" before the reveal.
//     setTimeout(onIgnite, 2500); 
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
//       // THE EXIT: This is the fade from White -> Transparent (Revealing the Stage)
//       exit={{ opacity: 0, transition: { duration: 2.5, ease: "easeIn" } }}
//     >
//       {/* 1. THE TRIGGER (The Heartbeat) */}
//       <AnimatePresence>
//         {!isExploding && (
//           <motion.div
//             className="relative cursor-pointer p-20 flex items-center justify-center z-10"
//             onClick={handleIgnition}
//             onMouseEnter={() => playSound('hover')}
//             exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }} // Vanish instantly on flash
//           >
//             {/* The Dot */}
//             <motion.div 
//               className="h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,1)]"
//               animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
//               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//             />
//             {/* The Atmosphere */}
//             <motion.div 
//               className="absolute inset-0 bg-gold-500/10 blur-[50px] rounded-full"
//               animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//             />
//             {/* The Prompt */}
//             <motion.div 
//               className="absolute top-28 text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-mono"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               Ignite
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 2. THE FLASHBANG (The Physics) */}
//       {/* This layer sits on top. It is invisible until clicked. 
//           When clicked, it turns PURE WHITE instantly. */}
//       <motion.div
//         className="fixed inset-0 bg-white z-50 pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={isExploding ? { opacity: 1 } : { opacity: 0 }}
//         transition={isExploding 
//           ? { duration: 0.1, ease: "linear" } // INSTANT BLINDNESS
//           : { duration: 0 }
//         }
//       />
      
//       {/* 3. THE AFTERIMAGE (Gold Burn) */}
//       {/* A subtle gold tint that lingers inside the white flash */}
//       <motion.div
//         className="fixed inset-0 bg-gold-500 z-40 pointer-events-none mix-blend-overlay"
//         initial={{ opacity: 0 }}
//         animate={isExploding ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       />
//     </motion.div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playSound } from "@/lib/audio";

export default function GhostLight({ onIgnite }: { onIgnite: () => void }) {
  const [isExploding, setIsExploding] = useState(false);

  const handleIgnition = () => {
    playSound('click');
    setIsExploding(true);
    // The "Burn" lasts 2.5 seconds
    setTimeout(onIgnite, 2500); 
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
      // The Fade Out: Like smoke clearing
      exit={{ opacity: 0, transition: { duration: 2, ease: "easeInOut" } }}
    >
      <AnimatePresence>
        {!isExploding && (
          <motion.div
            className="relative cursor-pointer p-24 flex items-center justify-center z-20"
            onClick={handleIgnition}
            onMouseEnter={() => playSound('hover')}
            exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* The Heartbeat Filament */}
            <motion.div 
              className="h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_25px_rgba(212,175,55,1)]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* The Atmosphere */}
            <motion.div 
              className="absolute inset-0 bg-gold-500/5 blur-[50px] rounded-full"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            {/* The Prompt */}
            <motion.div 
              className="absolute top-32 text-[9px] uppercase tracking-[0.4em] text-neutral-700 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Ignite
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE FLASH (Celluloid Burn) */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ backgroundColor: "#FFF9E5" }} // Warm White, not harsh digital white
        initial={{ opacity: 0 }}
        animate={isExploding ? { opacity: 1 } : { opacity: 0 }}
        transition={isExploding 
          ? { duration: 0.05, ease: "linear" } // Instant Flash
          : { duration: 0 }
        }
      >
        {/* FILM GRAIN OVERLAY (Texture) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200" />
      </motion.div>
      
    </motion.div>
  );
}