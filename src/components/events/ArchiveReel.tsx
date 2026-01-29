// // // "use client";

// // // import { useRef } from "react";
// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import Image from "next/image";
// // // import { EventItem } from "@/types/schema";

// // // export default function ArchiveReel({ events }: { events: EventItem[] }) {
// // //   const targetRef = useRef<HTMLDivElement>(null);
// // //   const { scrollYProgress } = useScroll({
// // //     target: targetRef,
// // //   });

// // //   // Horizontal Scroll Logic (Desktop)
// // //   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

// // //   if (events.length === 0) return null;

// // //   return (
// // //     <section ref={targetRef} className="relative h-[300vh] bg-[#020202]">
        
// // //         {/* STICKY CONTAINER */}
// // //         <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            
// // //             {/* HEADER */}
// // //             <div className="absolute top-12 left-6 md:left-12 z-20">
// // //                 <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-2">
// // //                     The Final Cut
// // //                 </span>
// // //                 <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
// // //                     Archive Reel
// // //                 </h2>
// // //             </div>

// // //             {/* THE REEL STRIP */}
// // //             <motion.div 
// // //                 style={{ x }} 
// // //                 className="flex gap-12 pl-12 md:pl-32 items-center"
// // //             >
// // //                 {events.map((event) => (
// // //                     <div key={event.id} className="relative group w-[300px] md:w-[500px] flex-shrink-0">
                        
// // //                         {/* 1. THE NEGATIVE (Default State) */}
// // //                         <div className="relative aspect-video overflow-hidden bg-neutral-900 border-y-8 border-black shadow-2xl">
                             
// // //                              {/* Film Holes (Top/Bottom) */}
// // //                              <div className="absolute top-[-6px] left-0 w-full h-1 border-t border-b border-white/20 border-dashed z-20" />
// // //                              <div className="absolute bottom-[-6px] left-0 w-full h-1 border-t border-b border-white/20 border-dashed z-20" />

// // //                              {/* IMAGE LOGIC: 
// // //                                  Default: Inverted & Grayscale (The Negative)
// // //                                  Hover: Normal (The Developed Photo)
// // //                              */}
// // //                              {event.image_url ? (
// // //                                 <Image 
// // //                                     src={event.image_url} 
// // //                                     alt={event.title} 
// // //                                     fill 
// // //                                     className="object-cover transition-all duration-700 ease-out filter invert hue-rotate-180 grayscale group-hover:filter-none group-hover:grayscale-0 group-hover:scale-105"
// // //                                 />
// // //                              ) : (
// // //                                 <div className="w-full h-full flex items-center justify-center bg-white/5">
// // //                                     <span className="font-mono text-xs text-white/20">MISSING REEL</span>
// // //                                 </div>
// // //                              )}

// // //                              {/* The "Development" Flash overlay */}
// // //                              <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
// // //                         </div>

// // //                         {/* 2. THE CAPTION (Appears on Hover) */}
// // //                         <div className="mt-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
// // //                              <div className="flex items-center gap-4 mb-2">
// // //                                 <span className="text-xs font-mono text-gold-500 uppercase">
// // //                                     {new Date(event.date).getFullYear()}
// // //                                 </span>
// // //                                 <div className="h-px w-8 bg-white/20" />
// // //                                 <span className="text-xs font-mono text-white/50 uppercase">
// // //                                     {event.type}
// // //                                 </span>
// // //                              </div>
// // //                              <h3 className="text-3xl font-serif text-white mb-2">
// // //                                 {event.title}
// // //                              </h3>
// // //                         </div>

// // //                     </div>
// // //                 ))}
// // //             </motion.div>
            
// // //             {/* INSTRUCTION */}
// // //             <div className="absolute bottom-12 right-12 text-white/20 font-mono text-xs animate-pulse">
// // //                 SCROLL TO ADVANCE REEL &gt;&gt;&gt;
// // //             </div>

// // //         </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { EventItem } from "@/types/schema";

// // export default function ArchiveReel({ events }: { events: EventItem[] }) {
// //   const targetRef = useRef<HTMLDivElement>(null);
  
// //   // PHYSICS: Map vertical scroll to horizontal movement
// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //   });
  
// //   // This value needs calibration based on number of items. 
// //   // -95% ensures we see the last item.
// //   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

// //   if (events.length === 0) return null;

// //   return (
// //     <section ref={targetRef} className="relative h-[300vh] bg-[#020202]">
        
// //         {/* STICKY CONTAINER: Stays in view while we 'scroll' the timeline */}
// //         <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            
// //             {/* HEADER */}
// //             <div className="absolute top-12 left-6 md:left-12 z-20 mix-blend-difference">
// //                 <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-2">
// //                     The Archive
// //                 </span>
// //                 <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
// //                     The Final Cut
// //                 </h2>
// //             </div>

// //             {/* THE REEL STRIP */}
// //             <motion.div 
// //                 style={{ x }} 
// //                 className="flex gap-0 pl-12 md:pl-32 items-center"
// //             >
// //                 {/* LEAD-IN SPACE */}
// //                 <div className="w-[10vw] flex-shrink-0" />

// //                 {events.map((event, index) => (
// //                     <div key={event.id} className="relative group w-[400px] md:w-[600px] flex-shrink-0 px-4 md:px-8 border-r border-white/10">
                        
// //                         {/* 1. THE NEGATIVE (Film Frame) */}
// //                         <div className="relative aspect-video overflow-hidden bg-neutral-900 shadow-2xl">
                             
// //                              {/* IMAGE LOGIC: 
// //                                  Default: High Contrast, Inverted (Negative)
// //                                  Hover: Full Color (Developed)
// //                              */}
// //                              {event.featured_image_url ? (
// //                                 <Image 
// //                                     src={event.featured_image_url} 
// //                                     alt={event.title} 
// //                                     fill 
// //                                     className="object-cover transition-all duration-700 ease-out filter invert contrast-125 grayscale group-hover:filter-none group-hover:grayscale-0 group-hover:scale-105"
// //                                 />
// //                              ) : (
// //                                 <div className="w-full h-full flex items-center justify-center bg-white/5 border border-white/10">
// //                                     <span className="font-mono text-xs text-white/20">REEL MISSING</span>
// //                                 </div>
// //                              )}

// //                              {/* Overlays */}
// //                              <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
// //                         </div>

// //                         {/* 2. THE CAPTION (Appears on Hover) */}
// //                         <div className="mt-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transform">
// //                              <div className="flex items-center gap-4 mb-3">
// //                                 <span className="text-xs font-mono text-gold-500 uppercase">
// //                                     {new Date(event.date).getFullYear()}
// //                                 </span>
// //                                 <div className="h-px w-8 bg-white/20" />
// //                                 <span className="text-xs font-mono text-white/50 uppercase border border-white/20 px-2 py-0.5 rounded-full">
// //                                     {event.type}
// //                                 </span>
// //                              </div>
// //                              <h3 className="text-3xl font-serif text-white mb-2 leading-none">
// //                                 {event.title}
// //                              </h3>
// //                              <p className="text-white/40 text-sm max-w-sm font-serif italic">
// //                                 {event.description}
// //                              </p>
// //                         </div>

// //                     </div>
// //                 ))}
// //             </motion.div>
            
// //             {/* FOOTER INSTRUCTION */}
// //             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 font-mono text-[10px] animate-pulse uppercase tracking-widest">
// //                 Scroll to Advance Reel
// //             </div>

// //         </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { EventItem } from "@/types/schema";

// export default function ArchiveReel({ events }: { events: EventItem[] }) {
//   const targetRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   // LOGIC ADJUSTMENT:
//   // Instead of a hard -90%, we calculate roughly how much we need to slide.
//   // We slide enough to ensure the LAST item enters the screen.
//   // Using "-75%" is usually safer to prevent the list from disappearing too early.
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

//   if (events.length === 0) return null;

//   return (
//     // Height 300vh gives us plenty of "Track" to scroll through
//     <section ref={targetRef} className="relative h-[300vh] bg-[#020202]">
        
//         {/* STICKY CONTAINER: This MUST have overflow-hidden to prevent horizontal scrollbars on the body */}
//         <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            
//             <div className="absolute top-12 left-6 md:left-12 z-20 mix-blend-difference">
//                 <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em] block mb-2">
//                     The Archive
//                 </span>
//                 <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
//                     The Final Cut
//                 </h2>
//             </div>

//             <motion.div 
//                 style={{ x }} 
//                 className="flex gap-0 pl-12 md:pl-32 items-center w-max" // w-max ensures it doesn't wrap
//             >
//                 {/* LEAD-IN SPACE */}
//                 <div className="w-[5vw] flex-shrink-0" />

//                 {events.map((event) => (
//                     <div key={event.id} className="relative group w-[85vw] md:w-[600px] flex-shrink-0 px-4 md:px-8 border-r border-white/10">
                        
//                         {/* THE NEGATIVE FRAME */}
//                         {/* <div className="relative aspect-video overflow-hidden bg-neutral-900 shadow-2xl border-y-8 border-black"> */}
//                         <div className="relative aspect-video overflow-hidden bg-neutral-900 shadow-2xl">     
//                              {/* Film Perforations */}
//                              <div className="absolute top-[-6px] left-0 w-full h-1 border-t border-b border-white/20 border-dashed z-20 opacity-50" />
//                              <div className="absolute bottom-[-6px] left-0 w-full h-1 border-t border-b border-white/20 border-dashed z-20 opacity-50" />

//                              {/* IMAGE */}
//                              {event.featured_image_url ? (
//                                 <Image 
//                                     src={event.featured_image_url} 
//                                     alt={event.title} 
//                                     fill 
//                                     className="object-cover transition-all duration-700 ease-out filter invert contrast-125 grayscale group-hover:filter-none group-hover:grayscale-0 group-hover:scale-105"
//                                 />
//                              ) : (
//                                 <div className="w-full h-full flex items-center justify-center bg-white/5 border border-white/10">
//                                     <span className="font-mono text-xs text-white/20">REEL MISSING</span>
//                                 </div>
//                              )}

//                              {/* Flash Effect */}
//                              <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none" />
//                         </div>

//                         {/* CAPTION */}
//                         <div className="mt-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transform">
//                              <div className="flex items-center gap-4 mb-3">
//                                 <span className="text-xs font-mono text-gold-500 uppercase">
//                                     {new Date(event.date).getFullYear()}
//                                 </span>
//                                 <div className="h-px w-8 bg-white/20" />
//                                 <span className="text-xs font-mono text-white/50 uppercase border border-white/20 px-2 py-0.5 rounded-full">
//                                     {event.type}
//                                 </span>
//                              </div>
//                              <h3 className="text-3xl font-serif text-white mb-2 leading-none">
//                                 {event.title}
//                              </h3>
//                         </div>

//                     </div>
//                 ))}
//             </motion.div>
            
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 font-mono text-[10px] animate-pulse uppercase tracking-widest">
//                 Scroll Down to Advance Film
//             </div>

//         </div>
//     </section>
//   );
// }