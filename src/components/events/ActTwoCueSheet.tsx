// "use client";

// import { motion } from "framer-motion";
// import { EventItem } from "@/types/schema";

// export default function ActTwoCueSheet({ events }: { events: EventItem[] }) {
//   if (events.length === 0) return null;

//   return (
//     <section className="relative w-full py-24 px-6 md:px-24 bg-[#050505] border-b border-white/5">
        
//         {/* THE RED THREAD (Connecting Line) */}
//         <div className="absolute left-6 md:left-24 top-0 bottom-0 w-px bg-white/10 z-0" />

//         {/* HEADER */}
//         <div className="pl-8 md:pl-12 mb-16 relative z-10">
//             <span className="font-mono text-[10px] text-white/30 block mb-2">SCENE 2: THE PREPARATION</span>
//             <h3 className="text-4xl font-mono text-white uppercase tracking-tighter">
//                 CUE SHEET
//             </h3>
//         </div>

//         {/* THE GRID */}
//         <div className="pl-8 md:pl-12 relative z-10 flex flex-col gap-px bg-white/10 border border-white/10">
//             {events.map((event, i) => {
//                 const date = new Date(event.date);
//                 const isEven = i % 2 === 0;

//                 return (
//                     <motion.div 
//                         key={event.id}
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: i * 0.1 }}
//                         className="group relative bg-[#0a0a0a] hover:bg-white text-white hover:text-black transition-colors duration-300 p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
//                     >
//                         {/* 1. TIME CODE */}
//                         <div className="md:col-span-2 font-mono text-xs opacity-50">
//                             {date.getDate()}/{date.getMonth() + 1} — {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
//                         </div>

//                         {/* 2. EVENT DETAILS */}
//                         <div className="md:col-span-7">
//                              <div className="flex items-center gap-3 mb-2">
//                                 <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border border-current rounded-full opacity-50">
//                                     {event.type}
//                                 </span>
//                              </div>
//                              <h4 className="text-2xl md:text-3xl font-serif font-medium leading-tight">
//                                 {event.title}
//                              </h4>
//                              <p className="mt-2 font-serif italic opacity-60 max-w-lg text-sm">
//                                 {event.location} // {event.description}
//                              </p>
//                         </div>

//                         {/* 3. STATUS INDICATOR */}
//                         <div className="md:col-span-3 text-right">
//                              {event.registration_link ? (
//                                 <a 
//                                     href={event.registration_link} 
//                                     target="_blank"
//                                     className="inline-block font-mono text-[10px] uppercase tracking-widest border-b border-current pb-1 hover:opacity-50 transition-opacity"
//                                 >
//                                     CONFIRM PRESENCE ↗
//                                 </a>
//                              ) : (
//                                 <span className="font-mono text-[10px] uppercase tracking-widest opacity-30 line-through">
//                                     CUE EXPIRED
//                                 </span>
//                              )}
//                         </div>

//                     </motion.div>
//                 );
//             })}
//         </div>
//     </section>
//   );
// }