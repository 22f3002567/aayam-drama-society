// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { EventItem } from "@/types/schema"; // Assume type exists

// // // export default function ProductionSchedule({ events }: { events: EventItem[] }) {
// // //   if (events.length === 0) return null;

// // //   return (
// // //     <section className="w-full max-w-5xl mx-auto px-6 md:px-12 mb-40">
        
// // //         {/* HEADER */}
// // //         <div className="flex items-end gap-4 mb-16 border-b-2 border-white border-dashed pb-4">
// // //             <h3 className="text-4xl md:text-5xl font-mono text-white uppercase tracking-tighter">
// // //                 Call Sheet
// // //             </h3>
// // //             <span className="font-mono text-xs text-gold-500 mb-2 uppercase tracking-widest">
// // //                 // Phase: Pre-Production
// // //             </span>
// // //         </div>

// // //         {/* THE TABLE */}
// // //         <div className="flex flex-col gap-8">
// // //             {events.map((event, i) => {
// // //                 const date = new Date(event.date);
                
// // //                 return (
// // //                     <motion.div 
// // //                         key={event.id}
// // //                         initial={{ opacity: 0, x: -20 }}
// // //                         whileInView={{ opacity: 1, x: 0 }}
// // //                         transition={{ delay: i * 0.1 }}
// // //                         className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 p-6 border border-white/10 bg-[#0a0a0a] hover:border-gold-500/50 transition-colors duration-300"
// // //                     >
// // //                         {/* 1. DATE BLOCK (Col 1-2) */}
// // //                         <div className="md:col-span-2 flex flex-col justify-center border-r border-white/5 pr-6">
// // //                             <span className="text-3xl font-mono text-white font-bold">
// // //                                 {String(date.getDate()).padStart(2, '0')}
// // //                             </span>
// // //                             <span className="text-xs font-mono text-white/40 uppercase">
// // //                                 {date.toLocaleString('default', { month: 'short' }).toUpperCase()}
// // //                             </span>
// // //                         </div>

// // //                         {/* 2. INFO BLOCK (Col 3-9) */}
// // //                         <div className="md:col-span-7 flex flex-col justify-center">
// // //                             <div className="flex items-center gap-3 mb-2">
// // //                                 <span className="px-2 py-0.5 bg-white/10 rounded text-[9px] font-mono text-gold-500 uppercase tracking-wider">
// // //                                     {event.type}
// // //                                 </span>
// // //                                 <span className="text-[10px] font-mono text-white/30 uppercase">
// // //                                     Call Time: {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
// // //                                 </span>
// // //                             </div>
// // //                             <h4 className="text-2xl font-serif text-white group-hover:text-gold-500 transition-colors">
// // //                                 {event.title}
// // //                             </h4>
// // //                             <p className="text-sm text-white/50 font-mono mt-2 line-clamp-1">
// // //                                 Loc: {event.location} // {event.description}
// // //                             </p>
// // //                         </div>

// // //                         {/* 3. ACTION BLOCK (Col 10-12) */}
// // //                         <div className="md:col-span-3 flex items-center justify-end">
// // //                             {event.registration_link ? (
// // //                                 <a 
// // //                                     href={event.registration_link}
// // //                                     target="_blank"
// // //                                     className="w-full text-center py-3 border border-white/20 text-xs font-mono uppercase tracking-widest text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all"
// // //                                 >
// // //                                     Confirm Presence
// // //                                 </a>
// // //                             ) : (
// // //                                 <span className="text-xs font-mono text-white/20 cursor-not-allowed">
// // //                                     CLOSED
// // //                                 </span>
// // //                             )}
// // //                         </div>

// // //                     </motion.div>
// // //                 );
// // //             })}
// // //         </div>

// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { EventItem } from "@/types/schema";

// // export default function ProductionSchedule({ events }: { events: EventItem[] }) {
// //   // If no events, this component essentially vanishes or shows a minimal "No Schedule" line.
// //   // We handle the 'empty everything' case in the parent page.
// //   if (events.length === 0) return null;

// //   return (
// //     <section className="w-full max-w-5xl mx-auto px-6 md:px-12 mb-40">
        
// //         {/* HEADER: Looking like a document header */}
// //         <div className="flex items-end justify-between gap-4 mb-16 border-b-2 border-white/20 border-dashed pb-4">
// //             <div>
// //                 <h3 className="text-3xl md:text-5xl font-mono text-white uppercase tracking-tighter">
// //                     Call Sheet
// //                 </h3>
// //                 <span className="font-mono text-[10px] text-gold-500 mb-2 uppercase tracking-widest block mt-2">
// //                     // Phase: Pre-Production // Auth: Secretary
// //                 </span>
// //             </div>
// //             <div className="hidden md:block">
// //                  <span className="font-mono text-xs text-white/30">CONFIDENTIAL</span>
// //             </div>
// //         </div>

// //         {/* THE TABLE */}
// //         <div className="flex flex-col gap-6">
// //             {events.map((event, i) => {
// //                 const date = new Date(event.date);
                
// //                 return (
// //                     <motion.div 
// //                         key={event.id}
// //                         initial={{ opacity: 0, x: -20 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ delay: i * 0.1 }}
// //                         className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 p-6 border border-white/10 bg-[#0a0a0a] hover:bg-[#111] hover:border-gold-500/50 transition-all duration-300"
// //                     >
// //                         {/* DECORATIVE CORNER TICK */}
// //                         <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-white/5 border-l-[20px] border-l-transparent group-hover:border-t-gold-500 transition-colors" />

// //                         {/* 1. DATE BLOCK (Col 1-2) */}
// //                         <div className="md:col-span-2 flex flex-col justify-center border-l-2 border-transparent group-hover:border-gold-500 pl-4 md:pl-0 md:border-l-0 md:border-r md:border-white/5 md:pr-6 transition-all">
// //                             <span className="text-4xl font-mono text-white font-bold tracking-tighter">
// //                                 {String(date.getDate()).padStart(2, '0')}
// //                             </span>
// //                             <span className="text-xs font-mono text-white/40 uppercase">
// //                                 {date.toLocaleString('default', { month: 'short' }).toUpperCase()} / {date.getFullYear().toString().slice(-2)}
// //                             </span>
// //                         </div>

// //                         {/* 2. INFO BLOCK (Col 3-9) */}
// //                         <div className="md:col-span-7 flex flex-col justify-center">
// //                             <div className="flex items-center gap-3 mb-3">
// //                                 <span className="px-2 py-0.5 border border-white/10 rounded-sm text-[9px] font-mono text-gold-500 uppercase tracking-wider bg-gold-500/5">
// //                                     {event.type}
// //                                 </span>
// //                                 <span className="text-[10px] font-mono text-white/30 uppercase">
// //                                     @ {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} HRS
// //                                 </span>
// //                             </div>
// //                             <h4 className="text-2xl font-serif text-white group-hover:text-gold-500 transition-colors duration-300">
// //                                 {event.title}
// //                             </h4>
// //                             <p className="text-sm text-white/50 font-mono mt-2 line-clamp-1 group-hover:text-white/70">
// //                                 Location: {event.location}
// //                             </p>
// //                         </div>

// //                         {/* 3. ACTION BLOCK (Col 10-12) */}
// //                         <div className="md:col-span-3 flex items-center justify-end">
// //                             {event.registration_link ? (
// //                                 <a 
// //                                     href={event.registration_link}
// //                                     target="_blank"
// //                                     className="w-full text-center py-4 border border-white/20 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
// //                                 >
// //                                     Report For Duty
// //                                 </a>
// //                             ) : (
// //                                 <span className="text-[10px] font-mono text-white/20 cursor-not-allowed uppercase tracking-widest border border-white/5 w-full text-center py-4">
// //                                     Call Closed
// //                                 </span>
// //                             )}
// //                         </div>

// //                     </motion.div>
// //                 );
// //             })}
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