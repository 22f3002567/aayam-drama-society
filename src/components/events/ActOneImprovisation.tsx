// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Challenge } from "@/types/schema";

// const BlinkingCursor = () => (
//   <motion.span
//     animate={{ opacity: [0, 1, 0] }}
//     transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
//     className="inline-block w-2 h-5 md:w-3 md:h-8 bg-red-500 ml-1 align-middle"
//   />
// );

// export default function ActOneImprovisation({ challenge }: { challenge: Challenge | null }) {
//   if (!challenge) return null;

//   const deadline = new Date(challenge.deadline);
//   const timeLeft = Math.max(0, deadline.getTime() - new Date().getTime());
//   const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

//   return (
//     <section className="min-h-[90vh] w-full flex flex-col justify-center px-6 md:px-24 relative overflow-hidden bg-[#050505] border-b border-white/5">
        
//         {/* 1. THE RED THREAD (Connecting Element) */}
//         <div className="absolute left-6 md:left-24 top-0 bottom-0 w-px bg-white/10 z-0">
//              <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-red-500 to-transparent" />
//         </div>

//         {/* 2. META DATA (The Script Header) */}
//         <div className="font-mono text-[10px] md:text-xs text-white/30 mb-16 pl-8 md:pl-12 relative z-10">
//             <span className="block mb-1">SCENE 1: THE OPENING</span>
//             <span className="block mb-1">INT. WRITER'S ROOM - NIGHT</span>
//             <span className="flex items-center gap-2 text-red-500 mt-4">
//                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//                 [ DEADLINE: {daysLeft} DAYS REMAINING ]
//             </span>
//         </div>

//         {/* 3. THE SCRIPT BODY */}
//         <div className="max-w-5xl pl-8 md:pl-12 relative z-10">
            
//             {/* The Prompt */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="mb-8"
//             >
//                 <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-[0.9] mb-6">
//                     {challenge.theme}
//                 </h2>
                
//                 <div className="text-lg md:text-2xl text-white/60 font-serif italic leading-relaxed max-w-2xl">
//                     <span className="not-italic font-mono text-xs text-gold-500 uppercase tracking-widest mr-4">
//                         DIRECTIVE:
//                     </span>
//                     {challenge.brief}
//                     <BlinkingCursor />
//                 </div>
//             </motion.div>

//             {/* 4. THE ACTION (The Signature) */}
//             <div className="mt-20 group">
//                 <div className="font-mono text-xs text-white/30 mb-2">
//                     PLAYER ACTION:
//                 </div>
//                 <button className="relative text-left">
//                     <span className="text-3xl md:text-5xl font-serif text-white/40 group-hover:text-white transition-colors duration-300">
//                         "I accept the role."
//                     </span>
                    
//                     {/* The Pen Stroke Animation */}
//                     <span className="absolute -bottom-2 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                    
//                     <span className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-500 font-mono text-sm">
//                         [ENTER]
//                     </span>
//                 </button>
//             </div>

//         </div>
//     </section>
//   );
// }