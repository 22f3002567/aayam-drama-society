// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// // --- TYPES ---
// export interface EventItem {
//   id: string;
//   title: string;
//   date: string; // ISO String
//   type: 'workshop' | 'show' | 'meetup' | 'fest';
//   location: string;
//   description: string;
//   image_url: string | null;
//   registration_link?: string; // For Future
//   gallery_link?: string;      // For Past
// }

// export default function TimelineChronicle({ events }: { events: EventItem[] }) {
//   // Sort Events: Future events first (ascending), then Past events (descending)
//   const now = new Date();
//   const futureEvents = events.filter(e => new Date(e.date) >= now).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
//   const pastEvents = events.filter(e => new Date(e.date) < now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

//   return (
//     <div className="w-full max-w-5xl mx-auto px-6 md:px-12 pb-32">
        
//         {/* --- SECTION 1: THE HORIZON (FUTURE) --- */}
//         {futureEvents.length > 0 && (
//             <div className="mb-32">
//                  <div className="flex items-center gap-4 mb-12">
//                     <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.3em]">
//                         Upcoming
//                     </span>
//                     <div className="h-px flex-grow bg-white/10" />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {futureEvents.map(event => (
//                         <FutureEventCard key={event.id} event={event} />
//                     ))}
//                 </div>
//             </div>
//         )}


//         {/* --- SECTION 2: THE ARCHIVE (PAST) --- */}
//         <div className="relative">
//              <div className="flex items-center gap-4 mb-16">
//                 <span className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em]">
//                     The Archive
//                 </span>
//                 <div className="h-px flex-grow bg-white/5" />
//             </div>

//             {/* THE CENTER LINE */}
//             <div className="absolute left-[20px] md:left-1/2 top-20 bottom-0 w-px bg-white/10" />

//             <div className="flex flex-col gap-24">
//                 {pastEvents.map((event, index) => (
//                     <PastEventRow key={event.id} event={event} index={index} />
//                 ))}
//             </div>
//         </div>

//     </div>
//   );
// }

// // --- COMPONENT: FUTURE EVENT CARD (The Golden Ticket) ---
// function FutureEventCard({ event }: { event: EventItem }) {
//     const dateObj = new Date(event.date);
    
//     return (
//         <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="group relative bg-[#0a0a0a] border border-white/10 hover:border-gold-500/50 transition-colors duration-500 overflow-hidden"
//         >
//             <div className="p-8 flex flex-col h-full">
//                 {/* DATE BADGE */}
//                 <div className="flex justify-between items-start mb-6">
//                     <div className="flex flex-col">
//                         <span className="text-gold-500 font-bold text-xl font-mono">
//                             {dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()} {dateObj.getDate()}
//                         </span>
//                         <span className="text-white/40 text-[10px] uppercase tracking-widest">
//                             {dateObj.getFullYear()}
//                         </span>
//                     </div>
//                     <span className="px-3 py-1 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-white/60">
//                         {event.type}
//                     </span>
//                 </div>

//                 {/* INFO */}
//                 <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">
//                     {event.title}
//                 </h3>
//                 <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-2">
//                     {event.description}
//                 </p>

//                 {/* FOOTER */}
//                 <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
//                     <span className="text-[10px] text-white/30 uppercase tracking-widest flex items-center gap-2">
//                         📍 {event.location}
//                     </span>
//                     <span className="text-gold-500 text-[10px] uppercase tracking-widest font-bold group-hover:translate-x-1 transition-transform cursor-pointer">
//                         Register →
//                     </span>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }

// // --- COMPONENT: PAST EVENT ROW (The Memory) ---
// function PastEventRow({ event, index }: { event: EventItem, index: number }) {
//     const isEven = index % 2 === 0;
//     const dateObj = new Date(event.date);

//     return (
//         <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
//         >
//             {/* 1. THE DOT (Center) */}
//             <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-[#050505] border border-white/40 z-10" />

//             {/* 2. THE DATE (Side A) */}
//             <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
//                 <span className="font-mono text-gold-500 text-sm md:text-base block mb-1">
//                     {dateObj.toLocaleString('default', { month: 'long', year: 'numeric' })}
//                 </span>
//                 <span className="text-white/30 text-[10px] uppercase tracking-widest">
//                     {event.location}
//                 </span>
//             </div>

//             {/* 3. THE CONTENT CARD (Side B) */}
//             <div className="w-full md:w-1/2 pl-12 md:pl-0">
//                 <div className="group relative cursor-pointer">
//                     {/* Hover Image Reveal could go here */}
//                     <h4 className="text-2xl md:text-3xl font-serif text-white/80 group-hover:text-white transition-colors">
//                         {event.title}
//                     </h4>
//                     <p className="text-white/40 text-sm mt-2 max-w-sm leading-relaxed">
//                         {event.description}
//                     </p>
                    
//                     {event.image_url && (
//                         <div className="mt-4 w-24 h-16 relative rounded-sm overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
//                             <Image src={event.image_url} alt={event.title} fill className="object-cover" />
//                         </div>
//                     )}
//                 </div>
//             </div>

//         </motion.div>
//     );
// }