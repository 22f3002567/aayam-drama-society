// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { EventItem } from "@/types/schema";

// export default function ActThreeMemory({ events }: { events: EventItem[] }) {
//   const [activeEventId, setActiveEventId] = useState<string | null>(null);

//   // Helper to find image
//   const activeImage = events.find(e => e.id === activeEventId)?.featured_image_url;

//   if (events.length === 0) return null;

//   return (
//     <section className="relative min-h-screen bg-black py-24 px-6 md:px-24">
        
//         {/* 1. THE STAGE (Background) */}
//         {/* We use 'fixed' so the image stays put while text scrolls over it */}
//         <div className="fixed inset-0 z-0 pointer-events-none">
//             {/* Base Noise Texture (So it's never fully black) */}
//             <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
            
//             {/* The Ghost Image */}
//             <AnimatePresence mode="wait">
//                 {activeImage && (
//                     <motion.div
//                         key={activeImage}
//                         initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
//                         animate={{ opacity: 0.3, scale: 1, filter: "blur(0px)" }}
//                         exit={{ opacity: 0, filter: "blur(10px)" }}
//                         transition={{ duration: 1 }}
//                         className="absolute inset-0"
//                     >
//                         <Image src={activeImage} alt="Memory" fill className="object-cover grayscale" />
//                         <div className="absolute inset-0 bg-black/40" />
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>

//         {/* 2. THE RED THREAD */}
//         <div className="absolute left-6 md:left-24 top-0 bottom-0 w-px bg-white/10 z-10" />

//         {/* 3. THE HEADER */}
//         <div className="pl-8 md:pl-12 mb-24 relative z-20">
//              <span className="font-mono text-[10px] text-white/30 block mb-2">SCENE 3: THE ARCHIVE</span>
//              <h3 className="text-4xl font-mono text-white uppercase tracking-tighter">
//                 THE ECHOES
//              </h3>
//         </div>

//         {/* 4. THE LIST (Interactive) */}
//         <div className="relative z-20 pl-8 md:pl-12 max-w-4xl">
//             {events.map((event) => (
//                 <MemoryItem 
//                     key={event.id} 
//                     event={event} 
//                     onActivate={() => setActiveEventId(event.id)}
//                 />
//             ))}
//         </div>

//         {/* FOOTER FADE */}
//         <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

//     </section>
//   );
// }

// // --- SUB-COMPONENT: MEMORY ITEM (With Mobile Detection) ---
// import { useEffect, useRef } from "react";
// import { useInView } from "framer-motion";

// function MemoryItem({ event, onActivate }: { event: EventItem, onActivate: () => void }) {
//     const ref = useRef(null);
//     // Trigger when element is in center of viewport
//     const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

//     useEffect(() => {
//         if (isInView) {
//             onActivate();
//         }
//     }, [isInView, onActivate]);

//     return (
//         <motion.div 
//             ref={ref}
//             className="group py-12 md:py-16 border-b border-white/5 cursor-pointer"
//             onMouseEnter={onActivate} // Desktop Backup
//             initial={{ opacity: 0.3 }}
//             animate={{ opacity: isInView ? 1 : 0.3 }} // Highlight active item
//             whileHover={{ opacity: 1 }}
//         >
//             <div className="flex flex-col md:flex-row md:items-baseline gap-4">
//                 <span className="font-mono text-xs text-gold-500 uppercase tracking-widest w-24">
//                     {new Date(event.date).getFullYear()}
//                 </span>
                
//                 <div className="flex-1">
//                     <h4 className="text-4xl md:text-7xl font-serif text-white group-hover:text-gold-500 transition-colors duration-500">
//                         {event.title}
//                     </h4>
//                     {/* Description reveals when active */}
//                     <motion.div 
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: isInView ? "auto" : 0, opacity: isInView ? 1 : 0 }}
//                         className="overflow-hidden"
//                     >
//                         <p className="mt-4 font-serif italic text-white/60 text-lg max-w-xl">
//                             {event.description}
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }