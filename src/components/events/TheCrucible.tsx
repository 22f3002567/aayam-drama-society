// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // --- TYPES ---
// // // // export interface Challenge {
// // // //   id: string;
// // // //   theme: string;           // e.g. "THE SOUND OF SILENCE"
// // // //   brief: string;           // e.g. "Create a 1-minute video with zero dialogue."
// // // //   deadline: string;        // ISO Date
// // // //   status: 'active' | 'voting' | 'closed';
// // // //   participants_count: number;
// // // // }

// // // // // --- UTILS: TIME REMAINING ---
// // // // const getTimeLeft = (deadline: string) => {
// // // //   const total = Date.parse(deadline) - Date.parse(new Date().toISOString());
// // // //   const seconds = Math.floor((total / 1000) % 60);
// // // //   const minutes = Math.floor((total / 1000 / 60) % 60);
// // // //   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
// // // //   const days = Math.floor(total / (1000 * 60 * 60 * 24));
// // // //   return { total, days, hours, minutes, seconds };
// // // // };

// // // // export default function TheCrucible({ challenge }: { challenge: Challenge | null }) {
// // // //   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
  
// // // //   // THE TICKER ENGINE
// // // //   useEffect(() => {
// // // //     if (!challenge || challenge.status !== 'active') return;
    
// // // //     const interval = setInterval(() => {
// // // //         const t = getTimeLeft(challenge.deadline);
// // // //         setTimeLeft(t);
// // // //     }, 1000);

// // // //     return () => clearInterval(interval);
// // // //   }, [challenge]);

// // // //   if (!challenge) return null; // Or return a "No Active Signal" state

// // // //   return (
// // // //     <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 mb-32 pt-32">
        
// // // //         {/* 1. THE HEADER: "INCOMING TRANSMISSION" */}
// // // //         <div className="flex items-center gap-4 mb-8">
// // // //             <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
// // // //             <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-500">
// // // //                 Live Signal • The Lab
// // // //             </span>
// // // //             <div className="h-px flex-grow bg-gradient-to-r from-red-500/50 to-transparent" />
// // // //         </div>

// // // //         {/* 2. THE CARD: RAW & INDUSTRIAL */}
// // // //         <div className="relative w-full border border-red-500/20 bg-[#080505] overflow-hidden group">
            
// // // //             {/* Background Noise/Glitch */}
// // // //             <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay" />
            
// // // //             {/* Content Container */}
// // // //             <div className="relative z-10 flex flex-col md:flex-row">
                
// // // //                 {/* LEFT: THE BRIEF */}
// // // //                 <div className="w-full md:w-2/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
// // // //                     <span className="block text-white/40 font-mono text-xs uppercase tracking-widest mb-4">
// // // //                         Current Directive
// // // //                     </span>
// // // //                     <h2 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tighter mb-6">
// // // //                         {challenge.theme}
// // // //                     </h2>
// // // //                     <p className="text-white/60 font-serif italic text-lg max-w-xl leading-relaxed">
// // // //                         "{challenge.brief}"
// // // //                     </p>

// // // //                     {/* ACTION BUTTON */}
// // // //                     <div className="mt-12">
// // // //                         <button className="relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-red-500 hover:text-white transition-colors duration-300">
// // // //                             Accept Challenge
// // // //                         </button>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* RIGHT: THE CLOCK (The Pressure) */}
// // // //                 <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-red-950/5">
// // // //                     <span className="block text-red-500/60 font-mono text-xs uppercase tracking-widest mb-6 text-center">
// // // //                         Time Remaining
// // // //                     </span>
                    
// // // //                     <div className="grid grid-cols-4 gap-2 text-center">
// // // //                         <TimeUnit val={timeLeft.days} label="DAYS" />
// // // //                         <TimeUnit val={timeLeft.hours} label="HRS" />
// // // //                         <TimeUnit val={timeLeft.minutes} label="MIN" />
// // // //                         <TimeUnit val={timeLeft.seconds} label="SEC" />
// // // //                     </div>

// // // //                     <div className="mt-8 text-center">
// // // //                         <span className="text-white/20 font-mono text-[10px]">
// // // //                             {challenge.participants_count} Artists in the Arena
// // // //                         </span>
// // // //                     </div>
// // // //                 </div>

// // // //             </div>

// // // //             {/* DECORATIVE CORNERS */}
// // // //             <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-red-500" />
// // // //             <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-red-500" />
// // // //             <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-red-500" />
// // // //             <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-red-500" />

// // // //         </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // // HELPER: TIME UNIT DISPLAY
// // // // function TimeUnit({ val, label }: { val: number, label: string }) {
// // // //     return (
// // // //         <div className="flex flex-col items-center">
// // // //             <span className="text-3xl md:text-4xl font-mono text-white font-light">
// // // //                 {String(val).padStart(2, '0')}
// // // //             </span>
// // // //             <span className="text-[8px] text-white/30 uppercase tracking-widest mt-1">
// // // //                 {label}
// // // //             </span>
// // // //         </div>
// // // //     );
// // // // }

// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { motion } from "framer-motion";

// // // export interface Challenge {
// // //   id: string;
// // //   theme: string;
// // //   brief: string;
// // //   deadline: string;
// // //   status: 'active';
// // // }

// // // export default function TheCrucible({ challenge }: { challenge: Challenge | null }) {
// // //   if (!challenge) return null;

// // //   return (
// // //     <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 mb-40">
        
// // //         {/* 1. THE VIEWFINDER CONTAINER */}
// // //         <div className="relative border-2 border-white/10 bg-[#080808] aspect-video md:aspect-[21/9] overflow-hidden group">
            
// // //             {/* 2. THE BACKGROUND (Static/Noise) */}
// // //             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            
// // //             {/* 3. THE "REC" INDICATOR */}
// // //             <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 z-20">
// // //                 <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_red]" />
// // //                 <span className="font-mono text-red-600 text-xs tracking-widest uppercase">REC • [00:00:00]</span>
// // //             </div>

// // //             {/* 4. THE HUD CORNERS (Camera UI) */}
// // //             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20" />
// // //             <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20" />
// // //             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20" />
// // //             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20" />

// // //             {/* 5. THE CONTENT CENTER */}
// // //             <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                
// // //                 <motion.span 
// // //                     initial={{ opacity: 0 }} 
// // //                     animate={{ opacity: 1 }} 
// // //                     className="font-mono text-gold-500 text-xs md:text-sm uppercase tracking-[0.5em] mb-4"
// // //                 >
// // //                     Current Directive // Open Casting
// // //                 </motion.span>
                
// // //                 <motion.h2 
// // //                     initial={{ scale: 0.9, opacity: 0 }}
// // //                     animate={{ scale: 1, opacity: 1 }}
// // //                     transition={{ duration: 0.8, ease: "circOut" }}
// // //                     className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-none mb-6 mix-blend-difference"
// // //                 >
// // //                     {challenge.theme}
// // //                 </motion.h2>

// // //                 <p className="font-sans text-white/70 max-w-lg text-sm md:text-lg leading-relaxed mb-8">
// // //                     "{challenge.brief}"
// // //                 </p>

// // //                 <motion.button 
// // //                     whileHover={{ scale: 1.05 }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="group relative px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden"
// // //                 >
// // //                     <span className="relative z-10 group-hover:text-white transition-colors duration-300">Submit Audition</span>
// // //                     <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
// // //                 </motion.button>
// // //             </div>

// // //             {/* 6. THE GRID OVERLAY (Cinematic Guide) */}
// // //             <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-5">
// // //                 <div className="border-r border-white" />
// // //                 <div className="border-r border-white" />
// // //             </div>
// // //         </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { Challenge } from "@/types/schema"; // Ensure type is defined

// // export default function TheCrucible({ challenge }: { challenge: Challenge | null }) {
// //   if (!challenge) return null;

// //   return (
// //     <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 mb-40">
        
// //         {/* 1. THE VIEWFINDER FRAME */}
// //         <div className="relative border border-white/10 bg-[#080808] aspect-video md:aspect-[21/9] overflow-hidden group shadow-2xl shadow-red-900/10">
            
// //             {/* 2. THE NOISE & GRAIN (Cinematic Texture) */}
// //             <div className="absolute inset-0 opacity-[0.07] bg-[url('/noise.png')] animate-grain pointer-events-none" />
// //             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

// //             {/* 3. THE "REC" INDICATOR */}
// //             <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 z-20">
// //                 <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_15px_red]" />
// //                 <span className="font-mono text-red-600 text-[10px] md:text-xs tracking-widest uppercase glow-text-red">
// //                     LIVE SIGNAL • {new Date(challenge.deadline).toLocaleDateString()}
// //                 </span>
// //             </div>

// //             {/* 4. CAMERA UI MARKERS */}
// //             <div className="absolute top-8 right-8 z-20">
// //                 <div className="flex flex-col gap-1 items-end">
// //                     <div className="w-16 h-[1px] bg-white/20" />
// //                     <div className="w-1 h-1 bg-white/40" />
// //                 </div>
// //             </div>

// //             {/* 5. CENTER CONTENT */}
// //             <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                
// //                 <motion.span 
// //                     initial={{ opacity: 0, y: -10 }} 
// //                     whileInView={{ opacity: 1, y: 0 }} 
// //                     className="font-mono text-gold-500 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 border border-gold-500/30 px-3 py-1 rounded-full bg-gold-500/5 backdrop-blur-md"
// //                 >
// //                     Incoming Directive
// //                 </motion.span>
                
// //                 <motion.h2 
// //                     initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
// //                     whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
// //                     transition={{ duration: 0.8, ease: "circOut" }}
// //                     className="text-5xl md:text-8xl lg:text-9xl font-serif text-white tracking-tighter leading-none mb-8 mix-blend-screen"
// //                 >
// //                     {challenge.theme}
// //                 </motion.h2>

// //                 <p className="font-sans text-white/60 max-w-lg text-sm md:text-lg leading-relaxed mb-10 border-l-2 border-red-500 pl-4 text-left md:text-center md:border-l-0">
// //                     {challenge.brief}
// //                 </p>

// //                 {/* THE TRIGGER BUTTON */}
// //                 <motion.button 
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden"
// //                 >
// //                     <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
// //                         <span>Accept Mission</span>
// //                         <span className="group-hover:translate-x-1 transition-transform">→</span>
// //                     </span>
// //                     <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
// //                 </motion.button>
// //             </div>
// //         </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { Challenge } from "@/types/schema";

// export default function TheCrucible({ challenge }: { challenge: Challenge | null }) {
//   if (!challenge) return null;

//   return (
//     <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        
//         {/* 1. THE ATMOSPHERE (Breathing Void) */}
//         {/* A subtle, moving spotlight behind the text. No cheap noise textures. */}
//         <div className="absolute inset-0 bg-[#050505]" />
//         <motion.div 
//             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"
//         />

//         {/* 2. THE COUNTDOWN (Small, Top Center - The only 'UI') */}
//         <div className="absolute top-32 flex flex-col items-center gap-2">
//              <span className="w-px h-12 bg-gradient-to-b from-transparent to-red-500" />
//              <span className="font-mono text-red-500 text-[10px] uppercase tracking-[0.3em]">
//                 Deadline: {new Date(challenge.deadline).toLocaleDateString()}
//              </span>
//         </div>

//         {/* 3. THE MONOLITH (Pure Typography) */}
//         <div className="relative z-10 text-center mix-blend-screen">
//             <motion.span 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 className="block font-mono text-white/40 text-xs md:text-sm uppercase tracking-[0.6em] mb-6"
//             >
//                 The Current Directive
//             </motion.span>
            
//             <h2 className="text-[12vw] leading-[0.8] font-serif font-medium text-white tracking-tighter mb-8">
//                 {challenge.theme}
//             </h2>

//             <p className="max-w-xl mx-auto text-white/60 font-serif italic text-lg md:text-xl leading-relaxed">
//                 "{challenge.brief}"
//             </p>
//         </div>

//         {/* 4. THE INTERACTION (Minimalist Button) */}
//         <div className="mt-16">
//             <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full hover:border-red-500 transition-colors duration-500"
//             >
//                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//                 <span className="font-mono text-xs text-white uppercase tracking-widest group-hover:text-red-500 transition-colors">
//                     Accept Mission
//                 </span>
//             </motion.button>
//         </div>

//     </section>
//   );
// }