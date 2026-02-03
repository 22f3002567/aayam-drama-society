// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { ArtistSummary } from "@/lib/api";

// // // // // const SearchIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);

// // // // // export default function ArtistGrid({ artists }: { artists: ArtistSummary[] }) {
// // // // //   const [query, setQuery] = useState("");

// // // // //   const filtered = artists.filter(a => 
// // // // //     a.name.toLowerCase().includes(query.toLowerCase()) || 
// // // // //     a.label.toLowerCase().includes(query.toLowerCase())
// // // // //   );

// // // // //   return (
// // // // //     <div className="relative min-h-screen w-full px-6 py-32 md:py-48 max-w-[1600px] mx-auto">
      
// // // // //       {/* HEADER */}
// // // // //       <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
// // // // //         <div>
// // // // //             <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-[0.8] mb-6">
// // // // //                 The Cast.
// // // // //             </h1>
// // // // //             <p className="text-white/40 font-mono text-sm uppercase tracking-widest max-w-md">
// // // // //                 The Architects, The Voices, and The Shadows behind the curtain.
// // // // //             </p>
// // // // //         </div>

// // // // //         {/* SEARCH BAR */}
// // // // //         <div className="w-full md:w-auto relative group">
// // // // //             <div className="absolute left-4 top-1/2 -translate-y-1/2">
// // // // //                 <SearchIcon />
// // // // //             </div>
// // // // //             <input 
// // // // //                 type="text" 
// // // // //                 placeholder="Find an Artist..." 
// // // // //                 value={query}
// // // // //                 onChange={(e) => setQuery(e.target.value)}
// // // // //                 className="w-full md:w-80 bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-white/20 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-mono text-xs uppercase tracking-widest"
// // // // //             />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* GRID */}
// // // // //       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-12">
// // // // //         {filtered.map((artist, i) => (
// // // // //             <motion.div
// // // // //                 key={artist.id}
// // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ delay: i * 0.05 }}
// // // // //             >
// // // // //                 <Link href={`/artist/${artist.slug}`} className="group block">
// // // // //                     {/* IMAGE CARD */}
// // // // //                     <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#0a0a0a] mb-6">
// // // // //                         {artist.image_url ? (
// // // // //                             <Image 
// // // // //                                 src={artist.image_url} 
// // // // //                                 alt={artist.name} 
// // // // //                                 fill 
// // // // //                                 className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
// // // // //                             />
// // // // //                         ) : (
// // // // //                             <div className="w-full h-full flex items-center justify-center">
// // // // //                                 <span className="text-white/10 text-4xl font-serif">{artist.name.charAt(0)}</span>
// // // // //                             </div>
// // // // //                         )}
                        
// // // // //                         {/* Hover Border Glow */}
// // // // //                         <div 
// // // // //                             className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-500"
// // // // //                             style={{ borderColor: 'transparent' }} // Dynamic color override below
// // // // //                         />
// // // // //                         <div 
// // // // //                             className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-color"
// // // // //                             style={{ backgroundColor: artist.color }}
// // // // //                         />
// // // // //                     </div>

// // // // //                     {/* TEXT INFO */}
// // // // //                     <div className="flex flex-col gap-1">
// // // // //                         <span className="text-xl md:text-2xl font-serif text-white group-hover:text-white transition-colors leading-none">
// // // // //                             {artist.name}
// // // // //                         </span>
// // // // //                         <div className="flex items-center gap-2">
// // // // //                              <div style={{ backgroundColor: artist.color }} className="w-1.5 h-1.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
// // // // //                              <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors">
// // // // //                                 {artist.label}
// // // // //                              </span>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </Link>
// // // // //             </motion.div>
// // // // //         ))}

// // // // //         {filtered.length === 0 && (
// // // // //             <div className="col-span-full py-20 text-center text-white/30 font-mono text-sm">
// // // // //                 No artists found matching "{query}"
// // // // //             </div>
// // // // //         )}
// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { ArtistSummary } from "@/lib/api";

// // // // // --- ICONS ---
// // // // const SearchIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
// // // // const FilterIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>);

// // // // export default function ArtistGrid({ artists }: { artists: ArtistSummary[] }) {
// // // //   const [query, setQuery] = useState("");
// // // //   const [isClient, setIsClient] = useState(false);

// // // //   // Prevent hydration mismatch for random math
// // // //   useEffect(() => { setIsClient(true) }, []);

// // // //   // SEARCH LOGIC: The "Spotlight"
// // // //   const filtered = artists.filter(a => 
// // // //     a.name.toLowerCase().includes(query.toLowerCase()) || 
// // // //     a.label.toLowerCase().includes(query.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <div className="relative min-h-screen w-full px-6 py-32 md:py-48 max-w-[1800px] mx-auto">
      
// // // //       {/* --- ATMOSPHERE --- */}
// // // //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />
      
// // // //       {/* --- HEADER: "The Dramatis Personae" --- */}
// // // //       <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 border-b border-white/10 pb-12">
// // // //         <div className="relative">
// // // //             <h1 className="text-7xl md:text-[8rem] font-serif text-white tracking-tighter leading-[0.8] mb-8 mix-blend-screen">
// // // //                 Dramatis<br/><span className="text-white/30 italic">Personae.</span>
// // // //             </h1>
// // // //             <p className="text-white/50 font-mono text-xs uppercase tracking-[0.3em] max-w-lg leading-relaxed">
// // // //                 The collective soul of Aayam. From the shadows of the wings to the center stage spotlight.
// // // //                 <span className="block mt-4 text-gold-500">{artists.length} ARCHIVED SOULS</span>
// // // //             </p>
// // // //         </div>

// // // //         {/* --- THE CONTROL DECK --- */}
// // // //         <div className="w-full md:w-auto flex flex-col items-end gap-4">
// // // //             <div className="relative group w-full md:w-[400px]">
// // // //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-gold-500 transition-colors">
// // // //                     <SearchIcon />
// // // //                 </div>
// // // //                 <input 
// // // //                     type="text" 
// // // //                     placeholder="Search the Cast..." 
// // // //                     value={query}
// // // //                     onChange={(e) => setQuery(e.target.value)}
// // // //                     className="w-full bg-[#0a0a0a] border border-white/10 rounded-full py-5 pl-16 pr-8 text-white placeholder-white/20 focus:outline-none focus:border-gold-500/50 focus:bg-[#0f0f0f] transition-all font-mono text-xs uppercase tracking-widest shadow-2xl"
// // // //                 />
// // // //                 {/* Search Glow */}
// // // //                 <div className="absolute inset-0 rounded-full bg-gold-500/5 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity pointer-events-none" />
// // // //             </div>
            
// // // //             {/* Filter Tags (Optional Visuals) */}
// // // //             <div className="flex gap-4 text-[10px] uppercase tracking-widest text-white/30">
// // // //                 <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white/20" /> All</span>
// // // //                 <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold-500" /> Core</span>
// // // //                 <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-white/20" /> Alumni</span>
// // // //             </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* --- THE GRID: "Indra's Net" --- */}
// // // //       <motion.div 
// // // //         layout 
// // // //         className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-16"
// // // //       >
// // // //         <AnimatePresence>
// // // //             {filtered.map((artist, i) => (
// // // //                 <motion.div
// // // //                     layout
// // // //                     key={artist.id}
// // // //                     initial={{ opacity: 0, scale: 0.9 }}
// // // //                     animate={{ opacity: 1, scale: 1 }}
// // // //                     exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
// // // //                     transition={{ duration: 0.4, delay: i * 0.03 }} // Staggered Entry
// // // //                     className="group"
// // // //                 >
// // // //                     <Link href={`/artist/${artist.slug}`} className="block relative">
                        
// // // //                         {/* 1. THE PORTRAIT CARD */}
// // // //                         <div className="relative aspect-[3/4] overflow-hidden bg-[#050505] mb-6 border border-white/5 group-hover:border-white/20 transition-colors duration-500">
                            
// // // //                             {/* The Image (Grayscale by default -> Color on Hover) */}
// // // //                             {artist.image_url ? (
// // // //                                 <Image 
// // // //                                     src={artist.image_url} 
// // // //                                     alt={artist.name} 
// // // //                                     fill 
// // // //                                     className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[0.8s] ease-out"
// // // //                                 />
// // // //                             ) : (
// // // //                                 <div className="w-full h-full flex items-center justify-center">
// // // //                                     <span className="text-white/10 text-4xl font-serif">{artist.name.charAt(0)}</span>
// // // //                                 </div>
// // // //                             )}

// // // //                             {/* The "Rasa" Tint (Soul Color Wash) */}
// // // //                             <div 
// // // //                                 className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-color"
// // // //                                 style={{ backgroundColor: artist.color }}
// // // //                             />
                            
// // // //                             {/* The Dark Gradient (Bottom Up) */}
// // // //                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

// // // //                         </div>

// // // //                         {/* 2. THE TYPOGRAPHY */}
// // // //                         <div className="relative pl-4 border-l border-white/10 group-hover:border-l-2 transition-all duration-300" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
// // // //                             {/* The Border Color Shift needs inline style handling or specific class logic, sticking to simpler CSS transition for border width */}
// // // //                             <div 
// // // //                                 className="absolute left-[-2px] top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// // // //                                 style={{ backgroundColor: artist.color }}
// // // //                             />
                            
// // // //                             <h2 className="text-lg md:text-xl font-serif text-white/80 group-hover:text-white transition-colors leading-tight mb-2">
// // // //                                 {artist.name}
// // // //                             </h2>
// // // //                             <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors block">
// // // //                                 {artist.label}
// // // //                             </span>
// // // //                         </div>

// // // //                     </Link>
// // // //                 </motion.div>
// // // //             ))}
// // // //         </AnimatePresence>
// // // //       </motion.div>

// // // //       {/* --- EMPTY STATE (The Void) --- */}
// // // //       {filtered.length === 0 && (
// // // //           <div className="w-full h-[50vh] flex flex-col items-center justify-center text-center opacity-0 animate-fadeIn">
// // // //               <span className="text-6xl md:text-8xl font-serif text-white/5 mb-4">Void.</span>
// // // //               <p className="font-mono text-xs uppercase tracking-widest text-white/30">
// // // //                   No artists found matching "{query}"
// // // //               </p>
// // // //           </div>
// // // //       )}

// // // //     </div>
// // // //   );
// // // // }

// // "use client";

// // import { useState, useEffect, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { ArtistSummary } from "@/lib/api";

// // // --- ICONS ---
// // const SearchIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
// // const DownArrow = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>);

// // // CONSTANTS
// // const BATCH_SIZE = 24;
// // // The "Crafts" of Aayam (You can expand this list)
// // const FILTERS = ["All", "Actor", "Director", "Writer", "Music", "Tech", "Alumni"];

// // export default function ArtistGrid({ artists }: { artists: ArtistSummary[] }) {
// //   const [query, setQuery] = useState("");
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
// //   const [isClient, setIsClient] = useState(false);

// //   useEffect(() => { setIsClient(true) }, []);

// //   // 1. FILTER LOGIC (The Sorting Hat)
// //   const filtered = useMemo(() => {
// //     return artists.filter(a => {
// //         const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase());
// //         const matchesFilter = activeFilter === "All" || a.label.includes(activeFilter) || (activeFilter === "Alumni" && a.label === "Alumni");
// //         return matchesQuery && matchesFilter;
// //     });
// //   }, [artists, query, activeFilter]);

// //   // 2. DISPLAY LOGIC
// //   const isSearching = query.length > 0 || activeFilter !== "All";
// //   const displayedArtists = isSearching ? filtered : filtered.slice(0, visibleCount);
// //   const hasMore = !isSearching && visibleCount < filtered.length;

// //   return (
// //     <div className="relative min-h-screen w-full px-6 py-32 md:py-48 max-w-[1800px] mx-auto">
      
// //       {/* ATMOSPHERE */}
// //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />
      
// //       {/* HEADER: "Dramatis Personae" */}
// //       <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-12 border-b border-white/10 pb-12">
// //         <div className="relative z-10">
// //             <h1 className="text-7xl md:text-[9rem] font-serif text-white tracking-tighter leading-[0.8] mb-6 mix-blend-screen">
// //                 Dramatis<br/><span className="text-white/30 italic">Personae.</span>
// //             </h1>
// //             <p className="text-white/50 font-mono text-xs uppercase tracking-[0.3em] max-w-lg leading-relaxed mt-8">
// //                 The Architects, The Voices, and The Shadows.
// //                 <span className="block mt-2 text-gold-500">
// //                     {filtered.length} SOULS IN THE LIGHT
// //                 </span>
// //             </p>
// //         </div>

// //         {/* CONTROL DECK */}
// //         <div className="w-full xl:w-auto flex flex-col items-start xl:items-end gap-6">
            
// //             {/* A. Search Bar */}
// //             <div className="relative group w-full md:w-[400px]">
// //                 <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-gold-500 transition-colors">
// //                     <SearchIcon />
// //                 </div>
// //                 <input 
// //                     type="text" 
// //                     placeholder="FIND AN ARTIST..." 
// //                     value={query}
// //                     onChange={(e) => setQuery(e.target.value)}
// //                     className="w-full bg-transparent border-b border-white/20 py-4 pl-10 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold-500 transition-all font-mono text-xl uppercase tracking-widest"
// //                 />
// //             </div>

// //             {/* B. Craft Filters (The Spectrum) */}
// //             <div className="flex flex-wrap gap-2 md:gap-4">
// //                 {FILTERS.map((filter) => (
// //                     <button
// //                         key={filter}
// //                         onClick={() => setActiveFilter(filter)}
// //                         className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-300 ${
// //                             activeFilter === filter 
// //                             ? 'bg-white text-black border-white font-bold' 
// //                             : 'bg-transparent text-white/40 border-white/10 hover:border-white/40 hover:text-white'
// //                         }`}
// //                     >
// //                         {filter}
// //                     </button>
// //                 ))}
// //             </div>
// //         </div>
// //       </div>

// //       {/* THE GRID: "Portraits in the Void" */}
// //       <motion.div 
// //         layout 
// //         className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-16"
// //       >
// //         <AnimatePresence mode="popLayout">
// //             {displayedArtists.map((artist, i) => (
// //                 <motion.div
// //                     layout
// //                     key={artist.id}
// //                     initial={{ opacity: 0, scale: 0.95 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
// //                     transition={{ duration: 0.4, delay: isSearching ? i * 0.02 : 0 }}
// //                     className="group relative"
// //                 >
// //                     <Link href={`/artist/${artist.slug}`} className="block">
                        
// //                         {/* 1. THE PORTRAIT (Borderless) */}
// //                         <div className="relative aspect-[3/4] overflow-hidden bg-[#050505] mb-6">
// //                             {artist.image_url ? (
// //                                 <Image 
// //                                     src={artist.image_url} 
// //                                     alt={artist.name} 
// //                                     fill 
// //                                     className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[0.8s] ease-out"
// //                                     sizes="(max-width: 768px) 50vw, 20vw" 
// //                                 />
// //                             ) : (
// //                                 <div className="w-full h-full flex items-center justify-center">
// //                                     <span className="text-white/10 text-5xl font-serif">{artist.name.charAt(0)}</span>
// //                                 </div>
// //                             )}

// //                             {/* The Soul Wash (Color Overlay) */}
// //                             <div 
// //                                 className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-color"
// //                                 style={{ backgroundColor: artist.color }}
// //                             />
                            
// //                             {/* The Quote Reveal (The Whisper) */}
// //                             {/* This appears over the image on hover */}
// //                             <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-[2px]">
// //                                 <span className="font-serif italic text-white/90 text-center text-sm leading-relaxed">
// //                                     "View Profile"
// //                                 </span>
// //                             </div>
// //                         </div>

// //                         {/* 2. THE SIGNATURE */}
// //                         <div className="flex flex-col items-center text-center">
// //                             <h2 className="text-lg font-serif text-white/60 group-hover:text-white transition-colors duration-300 leading-none mb-2">
// //                                 {artist.name}
// //                             </h2>
                            
// //                             {/* The Role Tag */}
// //                             <div className="relative inline-block">
// //                                 <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-gold-500 transition-colors">
// //                                     {artist.label}
// //                                 </span>
// //                                 {/* Animated Underline */}
// //                                 <div 
// //                                     className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[1px] bg-gold-500 w-0 group-hover:w-full transition-all duration-300"
// //                                 />
// //                             </div>
// //                         </div>

// //                     </Link>
// //                 </motion.div>
// //             ))}
// //         </AnimatePresence>
// //       </motion.div>

// //       {/* LOAD MORE */}
// //       {hasMore && (
// //         <div className="w-full flex justify-center mt-32">
// //             <button 
// //                 onClick={() => setVisibleCount(prev => prev + BATCH_SIZE)}
// //                 className="group relative px-10 py-5 overflow-hidden rounded-full border border-white/10 hover:border-white/30 transition-all"
// //             >
// //                 <span className="relative flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
// //                     Unveil More <DownArrow />
// //                 </span>
// //             </button>
// //         </div>
// //       )}

// //       {/* THE VOID */}
// //       {filtered.length === 0 && (
// //           <div className="w-full h-[40vh] flex flex-col items-center justify-center text-center border border-white/5 rounded-lg mt-12">
// //               <span className="text-4xl md:text-6xl font-serif text-white/10 mb-4">Silence.</span>
// //               <p className="font-mono text-xs uppercase tracking-widest text-white/30">
// //                   No artists found matching that description.
// //               </p>
// //           </div>
// //       )}

// //     </div>
// //   );
// // }


// // "use client";

// // import { useState, useEffect, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { ArtistSummary } from "@/lib/api";

// // // --- ICONS ---
// // const SearchIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
// // const GridIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
// // const ListIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>);
// // const DownArrow = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>);

// // // CONSTANTS
// // const BATCH_SIZE = 24;
// // const FILTERS = ["All", "Actor", "Director", "Writer", "Tech", "Alumni"];

// // export default function ArtistGrid({ artists }: { artists: ArtistSummary[] }) {
// //   const [query, setQuery] = useState("");
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'); // DUAL STATE
// //   const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  
// //   // Phantom Hover State (For List View)
// //   const [hoveredArtist, setHoveredArtist] = useState<ArtistSummary | null>(null);

// //   // 1. FILTER LOGIC
// //   const filtered = useMemo(() => {
// //     return artists.filter(a => {
// //         const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase());
// //         const matchesFilter = activeFilter === "All" || a.label.includes(activeFilter) || (activeFilter === "Alumni" && a.label === "Alumni");
// //         return matchesQuery && matchesFilter;
// //     });
// //   }, [artists, query, activeFilter]);

// //   const isSearching = query.length > 0 || activeFilter !== "All";
// //   const displayedArtists = isSearching ? filtered : filtered.slice(0, visibleCount);
// //   const hasMore = !isSearching && visibleCount < filtered.length;

// //   return (
// //     <div className="relative min-h-screen w-full px-6 py-32 md:py-48 max-w-[1800px] mx-auto">
      
// //       {/* ATMOSPHERE */}
// //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />
      
// //       {/* --- PHANTOM BACKGROUND (Only for List View) --- */}
// //       {/* When hovering a name in List Mode, their face appears largely in the background */}
// //       <AnimatePresence>
// //         {viewMode === 'list' && hoveredArtist && hoveredArtist.image_url && (
// //             <motion.div 
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 0.2 }}
// //                 exit={{ opacity: 0 }}
// //                 className="fixed inset-0 z-0 pointer-events-none"
// //             >
// //                 <Image src={hoveredArtist.image_url} alt="Ghost" fill className="object-cover grayscale blur-sm" />
// //                 <div className="absolute inset-0 bg-[#020202]/80" />
// //             </motion.div>
// //         )}
// //       </AnimatePresence>


// //       {/* --- HEADER --- */}
// //       <div className="relative z-10 flex flex-col xl:flex-row justify-between items-end mb-24 gap-12 border-b border-white/10 pb-12">
// //         <div className="relative w-full">
// //             <h1 className="text-7xl md:text-[9rem] font-serif text-white tracking-tighter leading-[0.8] mb-6 mix-blend-screen">
// //                 Dramatis<br/><span className="text-white/30 italic">Personae.</span>
// //             </h1>
            
// //             <div className="flex flex-col md:flex-row md:items-center justify-between mt-12 gap-8">
// //                 {/* STATS */}
// //                 <p className="text-white/50 font-mono text-xs uppercase tracking-[0.3em]">
// //                     {filtered.length} SOULS IN THE ARCHIVE
// //                 </p>

// //                 {/* VIEW TOGGLE (The Switch) */}
// //                 <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
// //                     <button 
// //                         onClick={() => setViewMode('grid')}
// //                         className={`p-3 rounded-full transition-all ${viewMode === 'grid' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
// //                     >
// //                         <GridIcon />
// //                     </button>
// //                     <button 
// //                         onClick={() => setViewMode('list')}
// //                         className={`p-3 rounded-full transition-all ${viewMode === 'list' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
// //                     >
// //                         <ListIcon />
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //       </div>

// //       {/* --- CONTROL DECK --- */}
// //       <div className="relative z-10 flex flex-col md:flex-row gap-8 mb-20 sticky top-4 bg-[#020202]/80 backdrop-blur-md p-4 -mx-4 rounded-xl border border-white/5 md:border-none md:bg-transparent md:backdrop-blur-none">
// //           {/* SEARCH */}
// //           <div className="relative group w-full md:w-[400px]">
// //                 <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-gold-500 transition-colors">
// //                     <SearchIcon />
// //                 </div>
// //                 <input 
// //                     type="text" 
// //                     placeholder="SEARCH ARTISTS..." 
// //                     value={query}
// //                     onChange={(e) => setQuery(e.target.value)}
// //                     className="w-full bg-transparent border-b border-white/20 py-2 pl-10 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-gold-500 transition-all font-mono text-sm uppercase tracking-widest"
// //                 />
// //           </div>
          
// //           {/* FILTERS */}
// //           <div className="flex flex-wrap gap-2 items-center">
// //                 {FILTERS.map((filter) => (
// //                     <button
// //                         key={filter}
// //                         onClick={() => setActiveFilter(filter)}
// //                         className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-300 ${
// //                             activeFilter === filter 
// //                             ? 'bg-white text-black border-white font-bold' 
// //                             : 'bg-transparent text-white/40 border-white/10 hover:border-white/40 hover:text-white'
// //                         }`}
// //                     >
// //                         {filter}
// //                     </button>
// //                 ))}
// //           </div>
// //       </div>


// //       {/* --- MODE 1: THE GRID (Visual) --- */}
// //       {viewMode === 'grid' && (
// //           <motion.div 
// //             layout 
// //             className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-16 relative z-10"
// //           >
// //             <AnimatePresence mode="popLayout">
// //                 {displayedArtists.map((artist, i) => (
// //                     <motion.div
// //                         layout
// //                         key={artist.id}
// //                         initial={{ opacity: 0, scale: 0.9 }}
// //                         animate={{ opacity: 1, scale: 1 }}
// //                         exit={{ opacity: 0, scale: 0.9 }}
// //                         transition={{ duration: 0.4, delay: isSearching ? i * 0.02 : 0 }}
// //                         className="group relative"
// //                     >
// //                         <Link href={`/artist/${artist.slug}`} className="block">
// //                             {/* Portrait */}
// //                             <div className="relative aspect-[3/4] overflow-hidden bg-[#050505] mb-6">
// //                                 {artist.image_url ? (
// //                                     <Image 
// //                                         src={artist.image_url} alt={artist.name} fill 
// //                                         className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[0.8s] ease-out"
// //                                         sizes="(max-width: 768px) 50vw, 20vw" 
// //                                     />
// //                                 ) : (
// //                                     <div className="w-full h-full flex items-center justify-center text-white/10 text-5xl font-serif">{artist.name.charAt(0)}</div>
// //                                 )}
// //                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-color" style={{ backgroundColor: artist.color }} />
// //                             </div>
                            
// //                             {/* Info */}
// //                             <div className="flex flex-col items-center text-center">
// //                                 <h2 className="text-lg font-serif text-white/60 group-hover:text-white transition-colors duration-300 leading-none mb-2">{artist.name}</h2>
// //                                 <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-gold-500 transition-colors">{artist.label}</span>
// //                             </div>
// //                         </Link>
// //                     </motion.div>
// //                 ))}
// //             </AnimatePresence>
// //           </motion.div>
// //       )}


// //       {/* --- MODE 2: THE LIST (Typographic) --- */}
// //       {viewMode === 'list' && (
// //           <motion.div 
// //             initial={{ opacity: 0 }} 
// //             animate={{ opacity: 1 }} 
// //             exit={{ opacity: 0 }} 
// //             className="relative z-10 flex flex-col max-w-4xl mx-auto"
// //           >
// //              {displayedArtists.map((artist, i) => (
// //                  <motion.div 
// //                     key={artist.id}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: i * 0.02 }}
// //                     onMouseEnter={() => setHoveredArtist(artist)}
// //                     onMouseLeave={() => setHoveredArtist(null)}
// //                     className="group border-b border-white/5 hover:border-white/20 transition-colors"
// //                  >
// //                      <Link href={`/artist/${artist.slug}`} className="flex items-center justify-between py-6 md:py-8 px-4">
                        
// //                         {/* Name & Avatar */}
// //                         <div className="flex items-center gap-6 md:gap-12">
// //                             <span className="font-mono text-xs text-white/20 w-8">{(i + 1).toString().padStart(2, '0')}</span>
// //                             <h2 className="text-3xl md:text-5xl font-serif text-white/60 group-hover:text-white transition-all group-hover:translate-x-4 duration-300">
// //                                 {artist.name}
// //                             </h2>
// //                         </div>

// //                         {/* Role & Color */}
// //                         <div className="flex items-center gap-4 md:gap-8">
// //                             <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-gold-500 transition-colors text-right">
// //                                 {artist.label}
// //                             </span>
// //                             <div 
// //                                 className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
// //                                 style={{ backgroundColor: artist.color }} 
// //                             />
// //                             {/* Mobile Arrow */}
// //                             <span className="text-white/20 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300">
// //                                 <DownArrow /> {/* Reusing arrow as right arrow */}
// //                             </span>
// //                         </div>

// //                      </Link>
// //                  </motion.div>
// //              ))}
// //           </motion.div>
// //       )}


// //       {/* --- LOAD MORE --- */}
// //       {hasMore && (
// //         <div className="relative z-10 w-full flex justify-center mt-32">
// //             <button 
// //                 onClick={() => setVisibleCount(prev => prev + BATCH_SIZE)}
// //                 className="group relative px-10 py-5 overflow-hidden rounded-full border border-white/10 hover:border-white/30 transition-all bg-black"
// //             >
// //                 <span className="relative flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
// //                     Unveil More <DownArrow />
// //                 </span>
// //             </button>
// //         </div>
// //       )}

// //       {/* --- THE VOID --- */}
// //       {filtered.length === 0 && (
// //           <div className="w-full h-[40vh] flex flex-col items-center justify-center text-center border border-white/5 rounded-lg mt-12">
// //               <span className="text-4xl md:text-6xl font-serif text-white/10 mb-4">Silence.</span>
// //               <p className="font-mono text-xs uppercase tracking-widest text-white/30">
// //                   No artists found.
// //               </p>
// //           </div>
// //       )}

// //     </div>
// //   );
// // }

// // "use client";

// // import { useState, useEffect, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { ArtistSummary } from "@/lib/api";

// // // --- ICONS ---
// // const SearchIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
// // const DownArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>);

// // // CONSTANTS
// // const BATCH_SIZE = 24;
// // const FILTERS = ["All", "Actor", "Director", "Writer", "Music", "Tech", "Alumni"];

// // export default function ArtistGrid({ artists }: { artists: ArtistSummary[] }) {
// //   const [query, setQuery] = useState("");
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
// //   const [hoveredArtist, setHoveredArtist] = useState<string | null>(null); // NEW: The Spotlight ID
// //   const [isClient, setIsClient] = useState(false);

// //   useEffect(() => { setIsClient(true) }, []);

// //   // 1. FILTER LOGIC
// //   const filtered = useMemo(() => {
// //     return artists.filter(a => {
// //         const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase());
// //         const matchesFilter = activeFilter === "All" || a.label.includes(activeFilter) || (activeFilter === "Alumni" && a.label === "Alumni");
// //         return matchesQuery && matchesFilter;
// //     });
// //   }, [artists, query, activeFilter]);

// //   // 2. DISPLAY LOGIC
// //   const isSearching = query.length > 0 || activeFilter !== "All";
// //   const displayedArtists = isSearching ? filtered : filtered.slice(0, visibleCount);
// //   const hasMore = !isSearching && visibleCount < filtered.length;

// //   return (
// //     <div className="relative min-h-screen w-full px-6 py-32 md:py-48 max-w-[1800px] mx-auto">
      
// //       {/* ATMOSPHERE */}
// //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06] bg-[url('/noise.png')] mix-blend-overlay" />
      
// //       {/* HEADER: "The Call Sheet" */}
// //       <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-12 border-b border-white/5 pb-12">
// //         <div className="relative z-10">
// //             <h1 className="text-8xl md:text-[10rem] font-serif text-white tracking-tighter leading-[0.8] mb-8 mix-blend-screen opacity-90">
// //                 The<br/><span className="text-white/20 italic">Cast.</span>
// //             </h1>
// //             <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] max-w-lg leading-relaxed mt-4 pl-2 border-l border-white/20">
// //                 A living archive of performances.
// //                 <span className="block mt-2 text-gold-500">
// //                     {filtered.length} ARTISTS IN SCRIPT
// //                 </span>
// //             </p>
// //         </div>

// //         {/* CONTROL DECK */}
// //         <div className="w-full xl:w-auto flex flex-col items-start xl:items-end gap-8">
            
// //             {/* SEARCH */}
// //             <div className="relative group w-full md:w-[320px]">
// //                 <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors">
// //                     <SearchIcon />
// //                 </div>
// //                 <input 
// //                     type="text" 
// //                     placeholder="FIND TALENT..." 
// //                     value={query}
// //                     onChange={(e) => setQuery(e.target.value)}
// //                     className="w-full bg-transparent border-b border-white/10 py-4 pl-10 pr-4 text-white placeholder-white/10 focus:outline-none focus:border-white transition-all font-mono text-sm uppercase tracking-widest"
// //                 />
// //             </div>

// //             {/* CRAFT FILTERS (Minimalist) */}
// //             <div className="flex flex-wrap gap-x-6 gap-y-2">
// //                 {FILTERS.map((filter) => (
// //                     <button
// //                         key={filter}
// //                         onClick={() => setActiveFilter(filter)}
// //                         className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group ${
// //                             activeFilter === filter ? 'text-white font-bold' : 'text-white/30 hover:text-white'
// //                         }`}
// //                     >
// //                         {filter}
// //                         {activeFilter === filter && (
// //                             <motion.div layoutId="filterDot" className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-gold-500 rounded-full" />
// //                         )}
// //                     </button>
// //                 ))}
// //             </div>
// //         </div>
// //       </div>

// //       {/* --- THE SPOTLIGHT GRID --- */}
// //       <motion.div 
// //         layout 
// //         className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-12 md:gap-y-24"
// //         onMouseLeave={() => setHoveredArtist(null)} // Reset spotlight when leaving grid
// //       >
// //         <AnimatePresence mode="popLayout">
// //             {displayedArtists.map((artist, i) => {
// //                 // LIGHTING LOGIC:
// //                 // If NO ONE is hovered -> Everyone is opacity 1 (Normal)
// //                 // If I am hovered -> I am opacity 1 (Spotlight)
// //                 // If SOMEONE ELSE is hovered -> I am opacity 0.2 (Dimmed)
// //                 const isDimmed = hoveredArtist !== null && hoveredArtist !== artist.id;

// //                 return (
// //                     <motion.div
// //                         layout
// //                         key={artist.id}
// //                         initial={{ opacity: 0, scale: 0.95 }}
// //                         animate={{ opacity: isDimmed ? 0.2 : 1, scale: isDimmed ? 0.98 : 1 }}
// //                         exit={{ opacity: 0, scale: 0.95 }}
// //                         transition={{ duration: 0.4 }}
// //                         className="group relative"
// //                         onMouseEnter={() => setHoveredArtist(artist.id)}
// //                     >
// //                         <Link href={`/artist/${artist.slug}`} className="block w-full h-full">
                            
// //                             {/* 1. THE IMAGE (Cinematic & Raw) */}
// //                             <div className="relative aspect-[2/3] overflow-hidden bg-[#050505] mb-4">
// //                                 {artist.image_url ? (
// //                                     <Image 
// //                                         src={artist.image_url} 
// //                                         alt={artist.name} 
// //                                         fill 
// //                                         className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[0.6s] ease-out"
// //                                         sizes="(max-width: 768px) 50vw, 15vw" 
// //                                     />
// //                                 ) : (
// //                                     <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] border border-white/5">
// //                                         <span className="text-white/10 text-6xl font-serif opacity-50">{artist.name.charAt(0)}</span>
// //                                     </div>
// //                                 )}

// //                                 {/* RASA GLARE: A flash of color that moves across on hover */}
// //                                 <div 
// //                                     className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"
// //                                     style={{ 
// //                                         background: `linear-gradient(45deg, ${artist.color} 0%, transparent 100%)` 
// //                                     }}
// //                                 />
                                
// //                                 {/* THE ROLE TAG (Floating on Image) */}
// //                                 <div className="absolute top-4 left-4 z-20 overflow-hidden">
// //                                     <span className="inline-block px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[8px] uppercase tracking-widest text-white/80 translate-y-[-200%] group-hover:translate-y-0 transition-transform duration-300">
// //                                         {artist.label}
// //                                     </span>
// //                                 </div>
// //                             </div>

// //                             {/* 2. THE TYPOGRAPHY (The Credits) */}
// //                             <div className="relative flex flex-col items-start pl-2 border-l border-transparent group-hover:border-gold-500/50 transition-colors duration-300">
// //                                 <h2 className="text-xl md:text-2xl font-serif text-white/50 group-hover:text-white transition-colors duration-300 leading-[0.9]">
// //                                     {artist.name.split(' ')[0]}<br/>
// //                                     <span className="text-white/30 group-hover:text-white/80">{artist.name.split(' ').slice(1).join(' ')}</span>
// //                                 </h2>
                                
// //                                 {/* Hidden Line that appears */}
// //                                 <div 
// //                                     className="h-px bg-gold-500 w-0 group-hover:w-12 mt-3 transition-all duration-500"
// //                                     style={{ backgroundColor: artist.color }}
// //                                 />
// //                             </div>

// //                         </Link>
// //                     </motion.div>
// //                 );
// //             })}
// //         </AnimatePresence>
// //       </motion.div>

// //       {/* LOAD MORE (Minimalist) */}
// //       {hasMore && (
// //         <div className="w-full flex justify-center mt-32">
// //             <button 
// //                 onClick={() => setVisibleCount(prev => prev + BATCH_SIZE)}
// //                 className="group relative px-8 py-4 overflow-hidden"
// //             >
// //                 <div className="absolute inset-0 border border-white/10 skew-x-[-10deg] group-hover:bg-white/5 transition-all" />
// //                 <span className="relative flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
// //                     Expand Cast <DownArrow />
// //                 </span>
// //             </button>
// //         </div>
// //       )}

// //       {/* THE GHOST LIGHT (Void) */}
// //       {filtered.length === 0 && (
// //           <div className="w-full h-[40vh] flex flex-col items-center justify-center text-center mt-12 border-t border-b border-white/5">
// //               <span className="text-5xl md:text-7xl font-serif text-white/10 mb-4 mix-blend-difference">Ghost Light.</span>
// //               <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
// //                   No players found in the wings.
// //               </p>
// //           </div>
// //       )}

// //     </div>
// //   );
// // }


// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ArtistSummary } from "@/lib/api";

// const SearchIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
// const DownArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>);

// const BATCH_SIZE = 24;
// // "Alumni" and "Core" are calculated logic, rest are string matches
// const FILTERS = ["All", "Core", "Actor", "Director", "Writer", "Backend", "Alumni"];

// export default function ArtistGrid({ artists }: { artists: ArtistSummary[] }) {
//   const [query, setQuery] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
//   const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => { setIsClient(true) }, []);

//   // 1. FILTER LOGIC (The "Recruiter's Lens")
//   const filtered = useMemo(() => {
//     return artists.filter(a => {
//         // Search Match
//         const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase()) || 
//                              a.roles.some(r => r.toLowerCase().includes(query.toLowerCase()));
        
//         // Filter Match
//         let matchesFilter = false;
//         if (activeFilter === "All") matchesFilter = true;
//         else if (activeFilter === "Core") matchesFilter = ["Secretary", "Creative Head", "Tech Lead", "Treasurer", "Joint Secretary"].includes(a.primary_role); // Add your core roles
//         else if (activeFilter === "Alumni") matchesFilter = a.primary_role === "Alumni";
//         else matchesFilter = a.roles.some(r => r.includes(activeFilter)); // Checks if they HAVE the role "Actor" even if primary is "Secretary"

//         return matchesQuery && matchesFilter;
//     });
//   }, [artists, query, activeFilter]);

//   // 2. DISPLAY LOGIC
//   const isSearching = query.length > 0 || activeFilter !== "All";
//   const displayedArtists = isSearching ? filtered : filtered.slice(0, visibleCount);
//   const hasMore = !isSearching && visibleCount < filtered.length;

//   return (
//     <div className="relative min-h-screen w-full px-6 py-32 md:py-48 max-w-[1800px] mx-auto">
      
//       {/* ATMOSPHERE */}
//       {/* <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06] bg-[url('/noise.png')] mix-blend-overlay" />
//        */}
//       {/* HEADER */}
//       {/* <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-12 border-b border-white/5 pb-12">
//         <div className="relative z-10">
//             <h1 className="text-8xl md:text-[10rem] font-serif text-white tracking-tighter leading-[0.8] mb-8 mix-blend-screen opacity-90">
//                 The<br/><span className="text-white/20 italic">Cast.</span>
//             </h1>
//             <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] max-w-lg leading-relaxed mt-4 pl-2 border-l border-white/20">
//                 The Architects, Voices, and Shadows.
//                 <span className="block mt-2 text-gold-500">
//                     {filtered.length} {activeFilter === 'All' ? 'ARCHIVED' : activeFilter.toUpperCase()} SOULS
//                 </span>
//             </p>
//         </div> */}

//         {/* ATMOSPHERE */}
//       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />
      
//       {/* HEADER: "Dramatis Personae" */}
//       <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-12 border-b border-white/10 pb-12">
//         <div className="relative z-10">
//             <h1 className="text-7xl md:text-[9rem] font-serif text-white tracking-tighter leading-[0.8] mb-6 mix-blend-screen">
//                 Dramatis<br/><span className="text-white/30 italic">Personae.</span>
//             </h1>
//             <p className="text-white/50 font-mono text-xs uppercase tracking-[0.3em] max-w-lg leading-relaxed mt-8">
//                 The Architects, The Voices, and The Shadows.
//                 <span className="block mt-2 text-gold-500">
//                     {filtered.length} SOULS IN THE LIGHT
//                 </span>
//             </p>
//         </div>

//         {/* CONTROL DECK */}
//         <div className="w-full xl:w-auto flex flex-col items-start xl:items-end gap-8">
//             {/* SEARCH */}
//             <div className="relative group w-full md:w-[320px]">
//                 <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors">
//                     <SearchIcon />
//                 </div>
//                 <input 
//                     type="text" 
//                     placeholder="FIND TALENT..." 
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     className="w-full bg-transparent border-b border-white/10 py-4 pl-10 pr-4 text-white placeholder-white/10 focus:outline-none focus:border-white transition-all font-mono text-sm uppercase tracking-widest"
//                 />
//             </div>

//             {/* FILTERS */}
//             <div className="flex flex-wrap gap-x-6 gap-y-2">
//                 {FILTERS.map((filter) => (
//                     <button
//                         key={filter}
//                         onClick={() => setActiveFilter(filter)}
//                         className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group ${
//                             activeFilter === filter ? 'text-white font-bold' : 'text-white/30 hover:text-white'
//                         }`}
//                     >
//                         {filter}
//                         {activeFilter === filter && (
//                             <motion.div layoutId="filterDot" className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-gold-500 rounded-full" />
//                         )}
//                     </button>
//                 ))}
//             </div>
//         </div>
//       </div>

//       {/* GRID */}
//       <motion.div 
//         layout 
//         className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-12 md:gap-y-24"
//         onMouseLeave={() => setHoveredArtist(null)} 
//       >
//         <AnimatePresence mode="popLayout">
//             {displayedArtists.map((artist, i) => {
                
//                 // INTELLIGENT LABELING:
//                 // If filter is "Director", show "Director" on the card.
//                 // Else show their Primary Role (e.g. Secretary).
//                 let displayLabel = artist.primary_role;
//                 if (activeFilter !== "All" && activeFilter !== "Core" && activeFilter !== "Alumni") {
//                     // Check if they have the specific role we filtered for
//                     const specificRole = artist.roles.find(r => r.includes(activeFilter));
//                     if (specificRole) displayLabel = specificRole;
//                 }

//                 const isDimmed = hoveredArtist !== null && hoveredArtist !== artist.id;

//                 return (
//                     <motion.div
//                         layout
//                         key={artist.id}
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: isDimmed ? 0.2 : 1, scale: isDimmed ? 0.98 : 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.4 }}
//                         className="group relative"
//                         onMouseEnter={() => setHoveredArtist(artist.id)}
//                     >
//                         <Link href={`/artist/${artist.slug}`} className="block w-full h-full">
                            
//                             {/* IMAGE CARD */}
//                             <div className="relative aspect-[2/3] overflow-hidden bg-[#050505] mb-4">
//                                 {artist.image_url ? (
//                                     <Image 
//                                         src={artist.image_url} 
//                                         alt={artist.name} 
//                                         fill 
//                                         className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[0.6s] ease-out"
//                                         sizes="(max-width: 768px) 50vw, 15vw" 
//                                     />
//                                 ) : (
//                                     <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] border border-white/5">
//                                         <span className="text-white/10 text-6xl font-serif opacity-50">{artist.name.charAt(0)}</span>
//                                     </div>
//                                 )}

//                                 {/* RASA GLARE */}
//                                 <div 
//                                     className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"
//                                     style={{ background: `linear-gradient(45deg, ${artist.color} 0%, transparent 100%)` }}
//                                 />

//                                 {/* HOVER STATE: THE SKILL STACK (Recruiter View) */}
//                                 {/* This reveals ALL their roles on hover */}
//                                 <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
//                                     <div className="flex flex-col gap-2">
//                                         <span className="text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-2 mb-1">
//                                             Competencies
//                                         </span>
//                                         {artist.roles.slice(0, 4).map((role, idx) => (
//                                             <span key={idx} className="font-serif text-white text-sm leading-tight">
//                                                 {role}
//                                             </span>
//                                         ))}
//                                         {artist.roles.length > 4 && (
//                                             <span className="text-[9px] text-gold-500 mt-1">+{artist.roles.length - 4} More</span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* CREDITS (The Label) */}
//                             <div className="relative flex flex-col items-start pl-2 border-l border-transparent group-hover:border-gold-500/50 transition-colors duration-300">
//                                 <h2 className="text-xl md:text-2xl font-serif text-white/50 group-hover:text-white transition-colors duration-300 leading-[0.9]">
//                                     {artist.name.split(' ')[0]}<br/>
//                                     <span className="text-white/30 group-hover:text-white/80">{artist.name.split(' ').slice(1).join(' ')}</span>
//                                 </h2>
                                
//                                 {/* DYNAMIC ROLE: Shows what the user is LOOKING for */}
//                                 <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-gold-500 transition-colors mt-2 block">
//                                     {displayLabel}
//                                 </span>
//                             </div>

//                         </Link>
//                     </motion.div>
//                 );
//             })}
//         </AnimatePresence>
//       </motion.div>

//       {/* LOAD MORE */}
//       {hasMore && (
//         <div className="w-full flex justify-center mt-32">
//             <button 
//                 onClick={() => setVisibleCount(prev => prev + BATCH_SIZE)}
//                 className="group relative px-8 py-4 overflow-hidden"
//             >
//                 <div className="absolute inset-0 border border-white/10 skew-x-[-10deg] group-hover:bg-white/5 transition-all" />
//                 <span className="relative flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
//                     Expand Cast <DownArrow />
//                 </span>
//             </button>
//         </div>
//       )}

//       {/* GHOST LIGHT */}
//       {filtered.length === 0 && (
//           <div className="w-full h-[40vh] flex flex-col items-center justify-center text-center mt-12 border-t border-b border-white/5">
//               <span className="text-5xl md:text-7xl font-serif text-white/10 mb-4 mix-blend-difference">Ghost Light.</span>
//               <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
//                   No players found in the wings.
//               </p>
//           </div>
//       )}

//     </div>
//   );
// }


"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// FIX: Correct Import Source
import { ArtistSummary } from "@/types/schema"; 

const SearchIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const DownArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>);

const BATCH_SIZE = 24;
const FILTERS = ["All", "Core", "Actor", "Director", "Writer", "Tech", "Alumni"];

export default function ArtistGrid({ artists }: { artists: ArtistSummary[] }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true) }, []);

  // 1. FILTER LOGIC
  const filtered = useMemo(() => {
    return artists.filter((a: ArtistSummary) => {
        // Search Match
        const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase()) || 
                             a.roles.some((r) => r.toLowerCase().includes(query.toLowerCase()));
        
        // Filter Match
        let matchesFilter = false;
        
        if (activeFilter === "All") {
            matchesFilter = true;
        } 
        else if (activeFilter === "Core") {
            // Rank-Based Logic
            matchesFilter = a.rank === 'CROWN' || a.rank === 'ORBIT';
        } 
        else if (activeFilter === "Alumni") {
            matchesFilter = a.rank === 'ALUMNI';
        } 
        else {
            // Role-Based Logic
            matchesFilter = a.roles.some((r) => r.includes(activeFilter)); 
        }

        return matchesQuery && matchesFilter;
    });
  }, [artists, query, activeFilter]);

  const isSearching = query.length > 0 || activeFilter !== "All";
  const displayedArtists = isSearching ? filtered : filtered.slice(0, visibleCount);
  const hasMore = !isSearching && visibleCount < filtered.length;

  return (
    <div className="relative min-h-screen w-full px-6 py-32 md:py-48 max-w-[1800px] mx-auto">
      
      {/* ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-12 border-b border-white/10 pb-12">
        <div className="relative z-10">
            <h1 className="text-7xl md:text-[9rem] font-serif text-white tracking-tighter leading-[0.8] mb-6 mix-blend-screen">
                Dramatis<br/><span className="text-white/30 italic">Personae.</span>
            </h1>
            <p className="text-white/50 font-mono text-xs uppercase tracking-[0.3em] max-w-lg leading-relaxed mt-8">
                The Architects, The Voices, and The Shadows.
                <span className="block mt-2 text-gold-500">
                    {filtered.length} SOULS IN THE LIGHT
                </span>
            </p>
        </div>

        {/* CONTROL DECK */}
        <div className="w-full xl:w-auto flex flex-col items-start xl:items-end gap-8">
            {/* SEARCH */}
            <div className="relative group w-full md:w-[320px]">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors">
                    <SearchIcon />
                </div>
                <input 
                    type="text" 
                    placeholder="FIND TALENT..." 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-10 pr-4 text-white placeholder-white/10 focus:outline-none focus:border-white transition-all font-mono text-sm uppercase tracking-widest"
                />
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                            activeFilter === filter ? 'text-white font-bold' : 'text-white/30 hover:text-white'
                        }`}
                    >
                        {filter}
                        {activeFilter === filter && (
                            <motion.div layoutId="filterDot" className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-gold-500 rounded-full" />
                        )}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* GRID */}
      <motion.div 
        layout 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-12 md:gap-y-24"
        onMouseLeave={() => setHoveredArtist(null)} 
      >
        <AnimatePresence mode="popLayout">
            {displayedArtists.map((artist, i) => {
                
                // INTELLIGENT LABELING
                let displayLabel = artist.primary_role;
                if (activeFilter !== "All" && activeFilter !== "Core" && activeFilter !== "Alumni") {
                    const specificRole = artist.roles.find(r => r.includes(activeFilter));
                    if (specificRole) displayLabel = specificRole;
                }

                const isDimmed = hoveredArtist !== null && hoveredArtist !== artist.id;

                return (
                    <motion.div
                        layout
                        key={artist.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: isDimmed ? 0.2 : 1, scale: isDimmed ? 0.98 : 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="group relative"
                        onMouseEnter={() => setHoveredArtist(artist.id)}
                    >
                        <Link href={`/artist/${artist.slug}`} className="block w-full h-full">
                            
                            {/* IMAGE CARD */}
                            <div className="relative aspect-[2/3] overflow-hidden bg-[#050505] mb-4">
                                {artist.image_url ? (
                                    <Image 
                                        src={artist.image_url} 
                                        alt={artist.name} 
                                        fill 
                                        className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[0.6s] ease-out"
                                        sizes="(max-width: 768px) 50vw, 15vw" 
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] border border-white/5">
                                        <span className="text-white/10 text-6xl font-serif opacity-50">{artist.name.charAt(0)}</span>
                                    </div>
                                )}

                                {/* RASA GLARE */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"
                                    style={{ background: `linear-gradient(45deg, ${artist.color} 0%, transparent 100%)` }}
                                />

                                {/* HOVER STATE */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-2 mb-1">
                                            Competencies
                                        </span>
                                        {artist.roles.slice(0, 4).map((role, idx) => (
                                            <span key={idx} className="font-serif text-white text-sm leading-tight">
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CREDITS */}
                            <div className="relative flex flex-col items-start pl-2 border-l border-transparent group-hover:border-gold-500/50 transition-colors duration-300">
                                <h2 className="text-xl md:text-2xl font-serif text-white/50 group-hover:text-white transition-colors duration-300 leading-[0.9]">
                                    {artist.name.split(' ')[0]}<br/>
                                    <span className="text-white/30 group-hover:text-white/80">{artist.name.split(' ').slice(1).join(' ')}</span>
                                </h2>
                                
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-gold-500 transition-colors mt-2 block">
                                    {displayLabel}
                                </span>
                            </div>

                        </Link>
                    </motion.div>
                );
            })}
        </AnimatePresence>
      </motion.div>

      {/* LOAD MORE */}
      {hasMore && (
        <div className="w-full flex justify-center mt-32">
            <button 
                onClick={() => setVisibleCount(prev => prev + BATCH_SIZE)}
                className="group relative px-8 py-4 overflow-hidden"
            >
                <div className="absolute inset-0 border border-white/10 skew-x-[-10deg] group-hover:bg-white/5 transition-all" />
                <span className="relative flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                    Expand Cast <DownArrow />
                </span>
            </button>
        </div>
      )}

      {/* GHOST LIGHT */}
      {filtered.length === 0 && (
          <div className="w-full h-[40vh] flex flex-col items-center justify-center text-center mt-12 border-t border-b border-white/5">
              <span className="text-5xl md:text-7xl font-serif text-white/10 mb-4 mix-blend-difference">Ghost Light.</span>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                  No players found in the wings.
              </p>
          </div>
      )}

    </div>
  );
}