// // // // // "use client";

// // // // // import { useRef, useState, useEffect } from "react";
// // // // // import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { MemberProfile } from "@/types/schema";

// // // // // // --- ICONS ---
// // // // // const PlayIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
// // // // // const PauseIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
// // // // // const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>);

// // // // // export default function ProfileArchitect({ member }: { member: MemberProfile }) {
// // // // //   const containerRef = useRef<HTMLDivElement>(null);
  
// // // // //   // NAVARASA: The Divine Color
// // // // //   const RASA = member.color || "#eab308";

// // // // //   // AUDIO STATE
// // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // //   const audioRef = useRef<HTMLAudioElement | null>(null);

// // // // //   useEffect(() => {
// // // // //     if (!audioRef.current) return;
// // // // //     if (isPlaying) audioRef.current.play().catch(() => setIsPlaying(false));
// // // // //     else audioRef.current.pause();
// // // // //   }, [isPlaying]);

// // // // //   return (
// // // // //     <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20">
      
// // // // //       {/* 0. DYNAMIC AMBIENCE (The Glow) */}
// // // // //       <div 
// // // // //         className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-20"
// // // // //         style={{ background: `radial-gradient(circle at 20% 50%, ${RASA}40, transparent 60%)` }}
// // // // //       />
// // // // //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />

// // // // //       {/* 1. NAVIGATION (Back to Lineage) */}
// // // // //       <div className="fixed top-8 left-8 z-50 mix-blend-difference">
// // // // //         <Link href="/ensemble" className="group flex items-center gap-3 text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors">
// // // // //             <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
// // // // //                 <ArrowLeft />
// // // // //             </span>
// // // // //             <span>The Lineage</span>
// // // // //         </Link>
// // // // //       </div>

// // // // //       <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen">

// // // // //         {/* --- LEFT: THE MONOLITH (Sticky Image) --- */}
// // // // //         <div className="relative h-[60vh] md:h-screen md:sticky md:top-0 w-full p-6 md:p-12 flex flex-col justify-center">
            
// // // // //             {/* The Image Frame */}
// // // // //             <motion.div 
// // // // //                 initial={{ opacity: 0, scale: 0.95 }}
// // // // //                 animate={{ opacity: 1, scale: 1 }}
// // // // //                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// // // // //                 className="relative w-full h-full rounded-lg overflow-hidden border border-white/5 group"
// // // // //                 style={{ boxShadow: `0 0 0 1px ${RASA}20` }} // Subtle colored border
// // // // //             >
// // // // //                 {member.image_url ? (
// // // // //                     <Image 
// // // // //                         src={member.image_url} 
// // // // //                         alt={member.name} 
// // // // //                         fill 
// // // // //                         className="object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-105" 
// // // // //                         priority 
// // // // //                     />
// // // // //                 ) : (
// // // // //                     <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
// // // // //                         <span className="text-9xl font-serif text-white/5">{member.name.charAt(0)}</span>
// // // // //                     </div>
// // // // //                 )}
                
// // // // //                 {/* Grading Overlay */}
// // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80" />
// // // // //             </motion.div>

// // // // //         </div>

// // // // //         {/* --- RIGHT: THE CHRONICLE (Scrollable Content) --- */}
// // // // //         <div className="relative w-full px-6 md:px-12 py-20 md:py-32 flex flex-col gap-24">
            
// // // // //             {/* A. IDENTITY */}
// // // // //             <section>
// // // // //                 <motion.div 
// // // // //                     initial={{ opacity: 0, y: 30 }}
// // // // //                     animate={{ opacity: 1, y: 0 }}
// // // // //                     transition={{ duration: 0.8, delay: 0.2 }}
// // // // //                 >
// // // // //                     {/* Role Badge */}
// // // // //                     <div className="flex items-center gap-4 mb-6">
// // // // //                         <div style={{ backgroundColor: RASA }} className="w-12 h-px" />
// // // // //                         <span style={{ color: RASA }} className="text-xs uppercase tracking-[0.4em] font-bold">
// // // // //                             {member.role}
// // // // //                         </span>
// // // // //                     </div>

// // // // //                     {/* Name */}
// // // // //                     <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-12 tracking-tight">
// // // // //                         {member.name}
// // // // //                     </h1>

// // // // //                     {/* Bio (The Quote) */}
// // // // //                     <div className="relative pl-8 border-l border-white/10 mb-12">
// // // // //                          <p className="text-2xl md:text-3xl font-serif italic text-white/80 leading-relaxed">
// // // // //                             "{member.bio}"
// // // // //                          </p>
// // // // //                     </div>

// // // // //                     {/* Audio Player (The Voice) */}
// // // // //                     {member.audio_url && (
// // // // //                         <div className="flex items-center gap-6 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm max-w-md">
// // // // //                             <button 
// // // // //                                 onClick={() => setIsPlaying(!isPlaying)}
// // // // //                                 style={{ backgroundColor: isPlaying ? RASA : '#fff', color: isPlaying ? '#000' : '#000' }}
// // // // //                                 className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
// // // // //                             >
// // // // //                                 {isPlaying ? <PauseIcon /> : <PlayIcon />}
// // // // //                             </button>
// // // // //                             <div className="flex flex-col gap-1 w-full">
// // // // //                                 <span className="text-[10px] uppercase tracking-widest text-white/40">Voice Note</span>
// // // // //                                 {/* Fake Waveform Visualizer */}
// // // // //                                 <div className="flex items-end gap-1 h-6">
// // // // //                                     {[...Array(12)].map((_, i) => (
// // // // //                                         <motion.div 
// // // // //                                             key={i}
// // // // //                                             animate={{ height: isPlaying ? [4, 16, 8, 24, 4][i % 5] : 4 }}
// // // // //                                             transition={{ 
// // // // //                                                 repeat: Infinity, 
// // // // //                                                 duration: 0.8, 
// // // // //                                                 delay: i * 0.05,
// // // // //                                                 ease: "easeInOut" 
// // // // //                                             }}
// // // // //                                             style={{ backgroundColor: isPlaying ? RASA : 'rgba(255,255,255,0.2)' }}
// // // // //                                             className="w-1 rounded-full"
// // // // //                                         />
// // // // //                                     ))}
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                             <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
// // // // //                         </div>
// // // // //                     )}
// // // // //                 </motion.div>
// // // // //             </section>

// // // // //             {/* B. TENURE (The History) */}
// // // // //             <section>
// // // // //                 <h3 className="text-sm uppercase tracking-[0.2em] text-white/30 mb-10 border-b border-white/10 pb-4">
// // // // //                     Tenure History
// // // // //                 </h3>
// // // // //                 <div className="flex flex-col gap-8">
// // // // //                     {member.tenures?.map((tenure, i) => (
// // // // //                         <div key={i} className="group flex items-baseline gap-8">
// // // // //                             <span className={`font-mono text-sm ${tenure.is_current ? 'text-white' : 'text-white/40'}`}>
// // // // //                                 {tenure.year}
// // // // //                             </span>
// // // // //                             <div className="flex flex-col">
// // // // //                                 <span className={`text-2xl font-serif ${tenure.is_current ? 'text-white' : 'text-white/60'} group-hover:text-white transition-colors`}>
// // // // //                                     {tenure.role}
// // // // //                                 </span>
// // // // //                                 {tenure.is_current && (
// // // // //                                     <span style={{ color: RASA }} className="text-[10px] uppercase tracking-widest mt-1">Current Role</span>
// // // // //                                 )}
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     ))}
// // // // //                 </div>
// // // // //             </section>

// // // // //             {/* C. FILMOGRAPHY (The Works) */}
// // // // //             <section className="pb-32">
// // // // //                 <h3 className="text-sm uppercase tracking-[0.2em] text-white/30 mb-10 border-b border-white/10 pb-4">
// // // // //                     Filmography & Plays
// // // // //                 </h3>
// // // // //                 <div className="grid grid-cols-1 gap-4">
// // // // //                     {member.credits?.length > 0 ? member.credits.map((credit, i) => (
// // // // //                         <Link key={credit.id} href={`/originals/${credit.play.slug}`} className="group relative block overflow-hidden rounded-lg border border-white/10 bg-[#050505] hover:border-white/30 transition-all">
// // // // //                             <div className="flex items-center p-6 gap-6">
// // // // //                                 {/* Miniature Poster */}
// // // // //                                 <div className="relative w-16 h-24 shrink-0 bg-white/5 rounded-sm overflow-hidden">
// // // // //                                      {credit.play.poster_url && (
// // // // //                                         <Image src={credit.play.poster_url} alt={credit.play.title} fill className="object-cover" />
// // // // //                                      )}
// // // // //                                 </div>
                                
// // // // //                                 <div className="flex flex-col gap-1 z-10">
// // // // //                                     <span className="text-[10px] uppercase tracking-widest text-white/40">
// // // // //                                         {credit.play.year} — {credit.role}
// // // // //                                     </span>
// // // // //                                     <span className="text-3xl font-serif text-white group-hover:translate-x-2 transition-transform duration-300">
// // // // //                                         {credit.play.title}
// // // // //                                     </span>
// // // // //                                 </div>

// // // // //                                 {/* Hover Reveal Gradient */}
// // // // //                                 <div 
// // // // //                                     className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
// // // // //                                     style={{ background: `linear-gradient(to right, transparent, ${RASA})` }}
// // // // //                                 />
// // // // //                             </div>
// // // // //                         </Link>
// // // // //                     )) : (
// // // // //                         <div className="text-white/20 italic font-serif">No credits archived yet.</div>
// // // // //                     )}
// // // // //                 </div>
// // // // //             </section>

// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { useRef, useState, useEffect } from "react";
// // // // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { MemberProfile } from "@/types/schema";

// // // // // --- ICONS ---
// // // // const PlayIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
// // // // const PauseIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
// // // // const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>);
// // // // const ExternalLink = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>);

// // // // export default function ProfileArchitect({ member }: { member: MemberProfile }) {
// // // //   const containerRef = useRef<HTMLDivElement>(null);
  
// // // //   // 1. THE SOUL COLOR (Navarasa)
// // // //   const RASA = member.color || "#eab308";

// // // //   // 2. SCROLL PHYSICS
// // // //   const { scrollY } = useScroll();
// // // //   const heroParallax = useTransform(scrollY, [0, 1000], [0, 400]); // Slows down the image
// // // //   const textParallax = useTransform(scrollY, [0, 1000], [0, -150]); // Speeds up the text

// // // //   // 3. AUDIO STATE
// // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // //   const audioRef = useRef<HTMLAudioElement | null>(null);

// // // //   useEffect(() => {
// // // //     if (!audioRef.current) return;
// // // //     if (isPlaying) audioRef.current.play().catch(() => setIsPlaying(false));
// // // //     else audioRef.current.pause();
// // // //   }, [isPlaying]);

// // // //   return (
// // // //     <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20 overflow-hidden">
      
// // // //       {/* --- ATMOSPHERE --- */}
// // // //       {/* Dynamic Aura Spotlights */}
// // // //       <div 
// // // //         className="fixed top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full blur-[120px] pointer-events-none opacity-20 mix-blend-screen animate-pulse"
// // // //         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
// // // //       />
// // // //       <div 
// // // //         className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] pointer-events-none opacity-10 mix-blend-screen"
// // // //         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
// // // //       />
// // // //       {/* Film Grain */}
// // // //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06] bg-[url('/noise.png')] mix-blend-overlay" />

// // // //       {/* --- NAVIGATION --- */}
// // // //       <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center mix-blend-difference">
// // // //         <Link href="/ensemble" className="group flex items-center gap-3 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors">
// // // //             <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors bg-black/20 backdrop-blur-md">
// // // //                 <ArrowLeft />
// // // //             </span>
// // // //             <span className="hidden md:inline">Back to Ensemble</span>
// // // //         </Link>
// // // //         <div className="flex gap-2">
// // // //             {/* Social Links Badge */}
// // // //             {member.social_links && Object.entries(member.social_links).map(([platform, url]: [string, any]) => (
// // // //                 <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all" title={platform}>
// // // //                     <ExternalLink />
// // // //                 </a>
// // // //             ))}
// // // //         </div>
// // // //       </nav>

// // // //       {/* --- SCENE 1: THE HERO (Cinematic Intro) --- */}
// // // //       <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
// // // //         {/* Background Image (Parallax) */}
// // // //         <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
// // // //              {member.image_url ? (
// // // //                 <Image 
// // // //                     src={member.image_url} 
// // // //                     alt={member.name} 
// // // //                     fill 
// // // //                     className="object-cover opacity-60" 
// // // //                     priority 
// // // //                 />
// // // //              ) : (
// // // //                 <div className="w-full h-full bg-[#0a0a0a]" />
// // // //              )}
// // // //              {/* Gradient Fade to Black at bottom */}
// // // //              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
// // // //              {/* Color Tint Overlay */}
// // // //              <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundColor: RASA }} />
// // // //         </motion.div>

// // // //         {/* Hero Content */}
// // // //         <motion.div 
// // // //             style={{ y: textParallax }}
// // // //             className="relative z-10 text-center flex flex-col items-center px-4"
// // // //         >
// // // //             <motion.div 
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 1, delay: 0.2 }}
// // // //                 className="flex items-center gap-4 mb-6"
// // // //             >
// // // //                 <div style={{ backgroundColor: RASA }} className="w-16 h-px shadow-[0_0_10px_currentColor]" />
// // // //                 <span style={{ color: RASA, textShadow: `0 0 20px ${RASA}` }} className="text-sm md:text-base uppercase tracking-[0.5em] font-bold">
// // // //                     {member.role}
// // // //                 </span>
// // // //                 <div style={{ backgroundColor: RASA }} className="w-16 h-px shadow-[0_0_10px_currentColor]" />
// // // //             </motion.div>

// // // //             <motion.h1 
// // // //                 initial={{ opacity: 0, scale: 0.9 }}
// // // //                 animate={{ opacity: 1, scale: 1 }}
// // // //                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
// // // //                 className="text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mix-blend-screen"
// // // //             >
// // // //                 {member.name}
// // // //             </motion.h1>

// // // //             {/* Audio Voice Note (The Play Button) */}
// // // //             {member.audio_url && (
// // // //                 <motion.button 
// // // //                     initial={{ opacity: 0 }}
// // // //                     animate={{ opacity: 1 }}
// // // //                     transition={{ delay: 0.8 }}
// // // //                     onClick={() => setIsPlaying(!isPlaying)}
// // // //                     className="mt-12 group flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:border-white/50 hover:bg-white/10 transition-all"
// // // //                 >
// // // //                     <div style={{ color: RASA }} className="relative flex items-center justify-center">
// // // //                          {isPlaying ? <PauseIcon /> : <PlayIcon />}
// // // //                          {isPlaying && <span className="absolute inset-0 animate-ping rounded-full border border-current opacity-50" />}
// // // //                     </div>
// // // //                     <span className="text-xs uppercase tracking-widest text-white/80">
// // // //                         {isPlaying ? "Listening..." : "Hear the Artist"}
// // // //                     </span>
// // // //                     <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
// // // //                 </motion.button>
// // // //             )}
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* --- SCENE 2: THE MANIFESTO (Bio & Philosophy) --- */}
// // // //       <section className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 md:py-40">
// // // //           <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
              
// // // //               {/* Left: The Quote */}
// // // //               <div className="w-full md:w-1/2 sticky top-32">
// // // //                   <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-white/90">
// // // //                       "{member.bio}"
// // // //                   </h2>
// // // //                   <div style={{ backgroundColor: RASA }} className="w-24 h-1 mt-8" />
// // // //               </div>

// // // //               {/* Right: The Journey (Tenure Timeline) */}
// // // //               <div className="w-full md:w-1/2 flex flex-col gap-12">
// // // //                   <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-4">
// // // //                       Career Arc
// // // //                   </h3>
                  
// // // //                   {member.tenures?.map((tenure, i) => (
// // // //                       <div key={i} className="relative pl-8 border-l border-white/10 group">
// // // //                           {/* The Dot */}
// // // //                           <span 
// // // //                             style={{ backgroundColor: tenure.is_current ? RASA : '#333' }}
// // // //                             className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full transition-colors duration-500 ${tenure.is_current ? 'shadow-[0_0_10px_currentColor]' : ''}`}
// // // //                           />
                          
// // // //                           <div className="flex flex-col gap-1">
// // // //                               <span className="font-mono text-sm text-white/50">{tenure.year}</span>
// // // //                               <span className="text-2xl font-serif text-white group-hover:text-gold-500 transition-colors">
// // // //                                   {tenure.role}
// // // //                               </span>
// // // //                               {tenure.is_current && <span style={{ color: RASA }} className="text-[10px] uppercase tracking-widest font-bold mt-1">Current</span>}
// // // //                           </div>
// // // //                       </div>
// // // //                   ))}
// // // //               </div>
// // // //           </div>
// // // //       </section>

// // // //       {/* --- SCENE 3: THE REPERTOIRE (Filmography) --- */}
// // // //       <section className="relative z-10 w-full px-6 pb-40">
// // // //            <div className="max-w-7xl mx-auto">
// // // //                 <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
// // // //                     <h3 className="text-5xl md:text-7xl font-serif text-white">
// // // //                         Selected Works
// // // //                     </h3>
// // // //                     <span className="text-xs uppercase tracking-widest text-white/40 mb-2">
// // // //                         {member.credits?.length || 0} Productions
// // // //                     </span>
// // // //                 </div>

// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //                     {member.credits?.length > 0 ? member.credits.map((credit) => (
// // // //                         <Link key={credit.id} href={`/originals/${credit.play.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#0a0a0a] border border-white/5">
                            
// // // //                             {/* Background Poster */}
// // // //                             {credit.play.poster_url ? (
// // // //                                 <Image 
// // // //                                     src={credit.play.poster_url} 
// // // //                                     alt={credit.play.title} 
// // // //                                     fill 
// // // //                                     className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40" 
// // // //                                 />
// // // //                             ) : (
// // // //                                 <div className="w-full h-full bg-neutral-900" />
// // // //                             )}
                            
// // // //                             {/* Overlay Gradient */}
// // // //                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

// // // //                             {/* Hover Color Glow */}
// // // //                             <div 
// // // //                                 className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"
// // // //                                 style={{ backgroundColor: RASA }} 
// // // //                             />

// // // //                             {/* Content */}
// // // //                             <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
// // // //                                 <span style={{ color: RASA }} className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
// // // //                                     {credit.role}
// // // //                                 </span>
// // // //                                 <h4 className="text-3xl font-serif text-white mb-2">
// // // //                                     {credit.play.title}
// // // //                                 </h4>
// // // //                                 <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors">
// // // //                                     {credit.play.year}
// // // //                                 </span>
// // // //                             </div>

// // // //                         </Link>
// // // //                     )) : (
// // // //                         <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-lg">
// // // //                             <span className="text-white/30 italic font-serif text-xl">"The stage is set, but the curtain has not yet risen."</span>
// // // //                         </div>
// // // //                     )}
// // // //                 </div>
// // // //            </div>
// // // //       </section>

// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import { useRef, useState, useEffect } from "react";
// // // import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { MemberProfile } from "@/types/schema";

// // // // --- PURE ICONS ---
// // // const PlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
// // // const PauseIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
// // // const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>);
// // // const ExternalLink = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>);

// // // // --- ANIMATION CONSTANTS ---
// // // const FADE_UP = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// // // };

// // // const STAGGER_CHILDREN = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
// // // };

// // // export default function ProfileArchitect({ member }: { member: MemberProfile }) {
// // //   const containerRef = useRef<HTMLDivElement>(null);
  
// // //   // 1. THE SOUL (Navarasa Color Logic)
// // //   // Default to Gold (#eab308) if no color is assigned.
// // //   const RASA = member.color || "#eab308";

// // //   // 2. SCROLL PHYSICS (Parallax Engine)
// // //   const { scrollY } = useScroll();
// // //   // Image moves slower than scroll (0.5x speed) creating depth
// // //   const heroParallax = useTransform(scrollY, [0, 1000], [0, 500]); 
// // //   // Text moves slightly faster to separate from image
// // //   const textParallax = useTransform(scrollY, [0, 1000], [0, -200]);
// // //   // Navbar glass effect triggers after 100px scroll
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useMotionValueEvent(scrollY, "change", (latest) => {
// // //     setIsScrolled(latest > 100);
// // //   });

// // //   // 3. AUDIO ENGINE
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const audioRef = useRef<HTMLAudioElement | null>(null);
// // //   const [audioProgress, setAudioProgress] = useState(0);

// // //   // Sync Audio Progress for the Visualizer
// // //   useEffect(() => {
// // //     const audio = audioRef.current;
// // //     if (!audio) return;

// // //     const updateProgress = () => setAudioProgress((audio.currentTime / audio.duration) * 100);
    
// // //     if (isPlaying) {
// // //         audio.play().catch(() => setIsPlaying(false));
// // //         audio.addEventListener('timeupdate', updateProgress);
// // //     } else {
// // //         audio.pause();
// // //         audio.removeEventListener('timeupdate', updateProgress);
// // //     }

// // //     return () => audio.removeEventListener('timeupdate', updateProgress);
// // //   }, [isPlaying]);


// // //   return (
// // //     <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-black overflow-hidden font-sans">
      
// // //       {/* --- LAYER 0: THE ATMOSPHERE --- */}
// // //       {/* Dynamic Aura: Spots of colored light that drift in the background */}
// // //       <div 
// // //         className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] pointer-events-none opacity-20 mix-blend-screen animate-pulse-slow"
// // //         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
// // //       />
// // //       <div 
// // //         className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] pointer-events-none opacity-10 mix-blend-screen"
// // //         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
// // //       />
// // //       {/* Film Grain Texture: Adds the "Cinema" feel */}
// // //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-overlay" />


// // //       {/* --- LAYER 1: SMART NAVIGATION --- */}
// // //       <nav 
// // //         className={`fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
// // //       >
// // //         <Link href="/ensemble" className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
// // //             <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
// // //                 <ArrowLeft />
// // //             </span>
// // //             <span className="hidden md:inline group-hover:translate-x-1 transition-transform">The Lineage</span>
// // //         </Link>
        
// // //         {/* Social Satellites */}
// // //         <div className="flex gap-3">
// // //             {member.social_links && Object.entries(member.social_links).map(([platform, url]: [string, any]) => (
// // //                 <a 
// // //                     key={platform} 
// // //                     href={url} 
// // //                     target="_blank" 
// // //                     rel="noopener noreferrer" 
// // //                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300" 
// // //                     title={platform}
// // //                     style={{ boxShadow: `0 0 0 0px ${RASA}` }} // Hover hint
// // //                 >
// // //                     <ExternalLink />
// // //                 </a>
// // //             ))}
// // //         </div>
// // //       </nav>


// // //       {/* --- LAYER 2: THE HERO (The Protagonist) --- */}
// // //       <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        
// // //         {/* PARALLAX IMAGE BACKDROP */}
// // //         <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
// // //              {member.image_url ? (
// // //                 <Image 
// // //                     src={member.image_url} 
// // //                     alt={member.name} 
// // //                     fill 
// // //                     className="object-cover opacity-50 grayscale transition-all duration-[2s]" 
// // //                     priority 
// // //                 />
// // //              ) : (
// // //                 <div className="w-full h-full bg-[#080808]" />
// // //              )}
             
// // //              {/* The "Cinematic Fade" - Ensures text is readable at the bottom */}
// // //              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent" />
             
// // //              {/* The "Soul Tint" - Subtly colors the image with RASA */}
// // //              <div className="absolute inset-0 mix-blend-color opacity-40" style={{ backgroundColor: RASA }} />
// // //         </motion.div>

// // //         {/* HERO TYPOGRAPHY */}
// // //         <motion.div 
// // //             style={{ y: textParallax }}
// // //             className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6"
// // //         >
// // //             {/* The Badge */}
// // //             <motion.div 
// // //                 initial={{ opacity: 0, width: 0 }}
// // //                 animate={{ opacity: 1, width: "auto" }}
// // //                 transition={{ duration: 1, delay: 0.5 }}
// // //                 className="flex items-center gap-4 mb-8 overflow-hidden"
// // //             >
// // //                 <div style={{ backgroundColor: RASA }} className="w-12 md:w-24 h-px shadow-[0_0_15px_currentColor]" />
// // //                 <span style={{ color: RASA, textShadow: `0 0 30px ${RASA}` }} className="text-xs md:text-sm uppercase tracking-[0.6em] font-bold whitespace-nowrap">
// // //                     {member.role}
// // //                 </span>
// // //                 <div style={{ backgroundColor: RASA }} className="w-12 md:w-24 h-px shadow-[0_0_15px_currentColor]" />
// // //             </motion.div>

// // //             {/* The Name - Massive & Tight */}
// // //             <motion.h1 
// // //                 initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
// // //                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
// // //                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
// // //                 className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter mix-blend-lighten text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
// // //             >
// // //                 {member.name}
// // //             </motion.h1>

// // //             {/* The Voice Button */}
// // //             {member.audio_url && (
// // //                 <motion.button 
// // //                     initial={{ opacity: 0, scale: 0.8 }}
// // //                     animate={{ opacity: 1, scale: 1 }}
// // //                     transition={{ delay: 1.2, type: "spring" }}
// // //                     onClick={() => setIsPlaying(!isPlaying)}
// // //                     className="mt-16 group relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:border-white/30"
// // //                 >
// // //                     {/* Progress Fill Background */}
// // //                     <div 
// // //                         className="absolute inset-0 bg-white/10 z-0 transition-all duration-300 origin-left"
// // //                         style={{ width: `${audioProgress}%`, backgroundColor: RASA, opacity: 0.2 }}
// // //                     />

// // //                     <div style={{ color: RASA }} className="relative z-10 w-8 h-8 flex items-center justify-center">
// // //                          {isPlaying ? <PauseIcon /> : <PlayIcon />}
// // //                     </div>
                    
// // //                     <div className="relative z-10 flex flex-col items-start text-left">
// // //                         <span className="text-[10px] uppercase tracking-widest text-white/60">Voice Note</span>
// // //                         <span className="text-xs font-medium text-white group-hover:text-white transition-colors">
// // //                             {isPlaying ? "Playing..." : "Listen to the Artist"}
// // //                         </span>
// // //                     </div>

// // //                     <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
// // //                 </motion.button>
// // //             )}
// // //         </motion.div>
// // //       </section>


// // //       {/* --- LAYER 3: THE MANIFESTO (Scroll Content) --- */}
// // //       <motion.section 
// // //         variants={STAGGER_CHILDREN}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, margin: "-100px" }}
// // //         className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32"
// // //       >
// // //           <div className="flex flex-col md:flex-row gap-20 md:gap-40 items-start">
              
// // //               {/* LEFT COLUMN: The Quote (Sticky) */}
// // //               <div className="w-full md:w-1/2 md:sticky md:top-40">
// // //                   <motion.div variants={FADE_UP}>
// // //                       <span className="text-9xl font-serif text-white/10 absolute -top-12 -left-8">“</span>
// // //                       <h2 className="text-3xl md:text-5xl font-serif italic leading-tight text-white/90 relative z-10">
// // //                           {member.bio}
// // //                       </h2>
// // //                       <div style={{ backgroundColor: RASA }} className="w-32 h-1 mt-12 shadow-[0_0_20px_currentColor]" />
// // //                   </motion.div>
// // //               </div>

// // //               {/* RIGHT COLUMN: The Timeline */}
// // //               <div className="w-full md:w-1/2 flex flex-col gap-16">
// // //                   <motion.div variants={FADE_UP}>
// // //                       <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-6 mb-8">
// // //                           The Career Arc
// // //                       </h3>
                      
// // //                       <div className="flex flex-col gap-0 border-l border-white/10 ml-3">
// // //                           {member.tenures?.map((tenure, i) => (
// // //                               <div key={i} className="relative pl-10 pb-12 last:pb-0 group">
// // //                                   {/* Timeline Dot */}
// // //                                   <span 
// // //                                     style={{ 
// // //                                         backgroundColor: tenure.is_current ? RASA : '#222',
// // //                                         borderColor: tenure.is_current ? RASA : '#444'
// // //                                     }}
// // //                                     className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 group-hover:scale-125 ${tenure.is_current ? 'shadow-[0_0_15px_currentColor]' : ''}`}
// // //                                   />
                                  
// // //                                   <div className="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-x-2">
// // //                                       <span className="font-mono text-xs text-white/40">{tenure.year}</span>
// // //                                       <span className="text-2xl font-serif text-white group-hover:text-white transition-colors">
// // //                                           {tenure.role}
// // //                                       </span>
// // //                                       {tenure.is_current && (
// // //                                           <span style={{ color: RASA }} className="text-[10px] uppercase tracking-widest font-bold inline-block border border-current px-2 py-1 rounded w-fit mt-1">
// // //                                               Current Role
// // //                                           </span>
// // //                                       )}
// // //                                   </div>
// // //                               </div>
// // //                           ))}
// // //                       </div>
// // //                   </motion.div>
// // //               </div>
// // //           </div>
// // //       </motion.section>


// // //       {/* --- LAYER 4: THE REPERTOIRE (Gallery) --- */}
// // //       <section className="relative z-10 w-full px-6 pb-40">
// // //            <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
                
// // //                 {/* Section Header */}
// // //                 <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
// // //                     <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">
// // //                         Selected Works
// // //                     </h3>
// // //                     <div className="flex items-center gap-4">
// // //                         <span className="h-px w-12 bg-white/20" />
// // //                         <span className="text-xs uppercase tracking-widest text-white/50">
// // //                             {member.credits?.length || 0} ARCHIVED PRODUCTIONS
// // //                         </span>
// // //                     </div>
// // //                 </div>

// // //                 {/* The Grid */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //                     {member.credits?.length > 0 ? member.credits.map((credit, i) => (
// // //                         <motion.div
// // //                             key={credit.id}
// // //                             initial={{ opacity: 0, y: 50 }}
// // //                             whileInView={{ opacity: 1, y: 0 }}
// // //                             transition={{ duration: 0.8, delay: i * 0.1 }}
// // //                             viewport={{ once: true }}
// // //                         >
// // //                             <Link href={`/originals/${credit.play.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-[#050505] border border-white/5 hover:border-white/20 transition-colors">
                                
// // //                                 {/* Poster Image */}
// // //                                 {credit.play.poster_url ? (
// // //                                     <Image 
// // //                                         src={credit.play.poster_url} 
// // //                                         alt={credit.play.title} 
// // //                                         fill 
// // //                                         className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" 
// // //                                     />
// // //                                 ) : (
// // //                                     <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
// // //                                         <span className="text-white/10 font-mono text-xs">NO POSTER</span>
// // //                                     </div>
// // //                                 )}
                                
// // //                                 {/* Overlay Gradient */}
// // //                                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />

// // //                                 {/* Color Wash on Hover */}
// // //                                 <div 
// // //                                     className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-color"
// // //                                     style={{ backgroundColor: RASA }} 
// // //                                 />

// // //                                 {/* Card Content */}
// // //                                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
// // //                                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// // //                                         <span style={{ color: RASA }} className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
// // //                                             {credit.role}
// // //                                         </span>
// // //                                         <h4 className="text-3xl font-serif text-white mb-2 leading-none">
// // //                                             {credit.play.title}
// // //                                         </h4>
// // //                                         <span className="font-mono text-xs text-white/40 block">
// // //                                             {credit.play.year}
// // //                                         </span>
// // //                                     </div>
// // //                                 </div>

// // //                             </Link>
// // //                         </motion.div>
// // //                     )) : (
// // //                         <div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-lg">
// // //                             <span className="text-white/20 italic font-serif text-2xl block mb-4">"Silence."</span>
// // //                             <span className="text-xs uppercase tracking-widest text-white/40">No productions found in the archive.</span>
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //            </div>
// // //       </section>

// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useRef, useState, useEffect } from "react";
// // import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { MemberProfile } from "@/types/schema";

// // // --- SPECIFIC ICONS ---
// // const PlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
// // const PauseIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
// // const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>);

// // // Social Icons Logic
// // const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
// // const LinkedinIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
// // const TwitterIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 6.6 4.5c2.1-.2 3.8.4 4.8 1.4l1-1h6.2z" /></svg>); // Simplified X/Bird
// // const MailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
// // const LinkIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>);

// // // Helper to pick the icon
// // const getSocialIcon = (platform: string) => {
// //     const p = platform.toLowerCase();
// //     if (p.includes('insta')) return <InstagramIcon />;
// //     if (p.includes('linkedin')) return <LinkedinIcon />;
// //     if (p.includes('twitter') || p.includes('x.com')) return <TwitterIcon />;
// //     return <LinkIcon />;
// // };

// // // --- ANIMATION CONSTANTS ---
// // const FADE_UP = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// // };
// // const STAGGER_CHILDREN = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
// // };

// // export default function ProfileArchitect({ member }: { member: MemberProfile }) {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const RASA = member.color || "#eab308";

// //   // SCROLL PHYSICS
// //   const { scrollY } = useScroll();
// //   const heroParallax = useTransform(scrollY, [0, 1000], [0, 500]); 
// //   const textParallax = useTransform(scrollY, [0, 1000], [0, -200]);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useMotionValueEvent(scrollY, "change", (latest) => {
// //     setIsScrolled(latest > 100);
// //   });

// //   // AUDIO ENGINE
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const audioRef = useRef<HTMLAudioElement | null>(null);
// //   const [audioProgress, setAudioProgress] = useState(0);

// //   useEffect(() => {
// //     const audio = audioRef.current;
// //     if (!audio) return;
// //     const updateProgress = () => setAudioProgress((audio.currentTime / audio.duration) * 100);
// //     if (isPlaying) {
// //         audio.play().catch(() => setIsPlaying(false));
// //         audio.addEventListener('timeupdate', updateProgress);
// //     } else {
// //         audio.pause();
// //         audio.removeEventListener('timeupdate', updateProgress);
// //     }
// //     return () => audio.removeEventListener('timeupdate', updateProgress);
// //   }, [isPlaying]);

// //   return (
// //     <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-black overflow-hidden font-sans">
      
// //       {/* ATMOSPHERE */}
// //       <div 
// //         className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] pointer-events-none opacity-20 mix-blend-screen animate-pulse-slow"
// //         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
// //       />
// //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-overlay" />

// //       {/* NAVIGATION */}
// //       <nav 
// //         className={`fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
// //       >
// //         <Link href="/ensemble" className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
// //             <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
// //                 <ArrowLeft />
// //             </span>
// //             <span className="hidden md:inline group-hover:translate-x-1 transition-transform">The Lineage</span>
// //         </Link>
        
// //         {/* SOCIAL ORBIT (Top Right) */}
// //         <div className="flex gap-3">
// //             {member.social_links && Object.entries(member.social_links).map(([platform, url]: [string, any]) => (
// //                 <a 
// //                     key={platform} 
// //                     href={url} 
// //                     target="_blank" 
// //                     rel="noopener noreferrer" 
// //                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70" 
// //                     title={platform}
// //                     style={{ boxShadow: `0 0 0 0px ${RASA}` }} 
// //                 >
// //                     {getSocialIcon(platform)}
// //                 </a>
// //             ))}
// //             {/* Contact Button in Nav (always visible) */}
// //             {member.email && (
// //                  <a 
// //                     href={`mailto:${member.email}`}
// //                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70"
// //                     title="Send Email"
// //                  >
// //                     <MailIcon />
// //                  </a>
// //             )}
// //         </div>
// //       </nav>


// //       {/* HERO SECTION */}
// //       <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        
// //         {/* IMAGE BACKDROP (Fixed Opacity Issue) */}
// //         <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
// //              {member.image_url ? (
// //                 <Image 
// //                     src={member.image_url} 
// //                     alt={member.name} 
// //                     fill 
// //                     // REMOVED grayscale, INCREASED opacity
// //                     className="object-cover opacity-80 transition-all duration-[2s]" 
// //                     priority 
// //                 />
// //              ) : (
// //                 <div className="w-full h-full bg-[#080808] flex items-center justify-center">
// //                     <span className="text-white/10 text-9xl font-serif">?</span>
// //                 </div>
// //              )}
             
// //              {/* Gradient for Text Readability */}
// //              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent" />
// //              <div className="absolute inset-0 mix-blend-color opacity-20" style={{ backgroundColor: RASA }} />
// //         </motion.div>

// //         {/* HERO CONTENT */}
// //         <motion.div 
// //             style={{ y: textParallax }}
// //             className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6"
// //         >
// //             {/* Badge */}
// //             <motion.div 
// //                 initial={{ opacity: 0, width: 0 }}
// //                 animate={{ opacity: 1, width: "auto" }}
// //                 transition={{ duration: 1, delay: 0.5 }}
// //                 className="flex items-center gap-4 mb-8 overflow-hidden"
// //             >
// //                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
// //                 <span style={{ color: RASA, textShadow: `0 0 30px ${RASA}` }} className="text-xs md:text-sm uppercase tracking-[0.6em] font-bold whitespace-nowrap">
// //                     {member.role}
// //                 </span>
// //                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
// //             </motion.div>

// //             {/* Name */}
// //             <motion.h1 
// //                 initial={{ opacity: 0, y: 100 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
// //                 className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
// //             >
// //                 {member.name}
// //             </motion.h1>

// //             {/* ACTION BAR (Voice + Contact) */}
// //             <motion.div 
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 1.2 }}
// //                 className="mt-16 flex flex-wrap justify-center gap-6"
// //             >
// //                 {member.audio_url && (
// //                     <button 
// //                         onClick={() => setIsPlaying(!isPlaying)}
// //                         className="group relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:border-white/30"
// //                     >
// //                         <div className="absolute inset-0 bg-white/10 z-0 transition-all duration-300 origin-left" style={{ width: `${audioProgress}%`, backgroundColor: RASA, opacity: 0.2 }} />
// //                         <div style={{ color: RASA }} className="relative z-10 w-6 h-6 flex items-center justify-center">
// //                             {isPlaying ? <PauseIcon /> : <PlayIcon />}
// //                         </div>
// //                         <div className="relative z-10 text-left">
// //                             <span className="block text-[10px] uppercase tracking-widest text-white/60">Voice Note</span>
// //                             <span className="block text-xs font-medium text-white">{isPlaying ? "Playing..." : "Listen to Artist"}</span>
// //                         </div>
// //                         <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
// //                     </button>
// //                 )}

// //                 {member.email && (
// //                     <a 
// //                         href={`mailto:${member.email}`}
// //                         className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
// //                     >
// //                         <MailIcon />
// //                         <div className="text-left">
// //                              <span className="block text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100">Get in Touch</span>
// //                              <span className="block text-xs font-medium">Contact Me</span>
// //                         </div>
// //                     </a>
// //                 )}
// //             </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* MANIFESTO & CAREER */}
// //       <motion.section 
// //         variants={STAGGER_CHILDREN}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, margin: "-100px" }}
// //         className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32"
// //       >
// //           <div className="flex flex-col md:flex-row gap-20 md:gap-40 items-start">
// //               {/* Quote */}
// //               <div className="w-full md:w-1/2 md:sticky md:top-40">
// //                   <motion.div variants={FADE_UP}>
// //                       <span className="text-9xl font-serif text-white/10 absolute -top-12 -left-8">“</span>
// //                       <h2 className="text-3xl md:text-5xl font-serif italic leading-tight text-white/90 relative z-10">
// //                           {member.bio}
// //                       </h2>
// //                       <div style={{ backgroundColor: RASA }} className="w-32 h-1 mt-12 shadow-[0_0_20px_currentColor]" />
// //                   </motion.div>
// //               </div>

// //               {/* Career Timeline */}
// //               <div className="w-full md:w-1/2 flex flex-col gap-16">
// //                   <motion.div variants={FADE_UP}>
// //                       <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-6 mb-8">
// //                           The Career Arc
// //                       </h3>
// //                       <div className="flex flex-col gap-0 border-l border-white/10 ml-3">
// //                           {member.tenures?.map((tenure, i) => (
// //                               <div key={i} className="relative pl-10 pb-12 last:pb-0 group">
// //                                   <span 
// //                                     style={{ backgroundColor: tenure.is_current ? RASA : '#222' }}
// //                                     className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#020202] transition-all duration-500 group-hover:scale-125 ${tenure.is_current ? 'shadow-[0_0_15px_currentColor]' : ''}`}
// //                                   />
// //                                   <div className="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-x-2">
// //                                       <span className="font-mono text-xs text-white/40">{tenure.year}</span>
// //                                       <span className="text-2xl font-serif text-white group-hover:text-white transition-colors">
// //                                           {tenure.role}
// //                                       </span>
// //                                   </div>
// //                               </div>
// //                           ))}
// //                       </div>
// //                   </motion.div>
// //               </div>
// //           </div>
// //       </motion.section>

// //       {/* REPERTOIRE (Gallery) */}
// //       <section className="relative z-10 w-full px-6 pb-40">
// //            <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
// //                 <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
// //                     <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Selected Works</h3>
// //                     <div className="flex items-center gap-4">
// //                         <span className="h-px w-12 bg-white/20" />
// //                         <span className="text-xs uppercase tracking-widest text-white/50">{member.credits?.length || 0} ARCHIVED PRODUCTIONS</span>
// //                     </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                     {member.credits?.length > 0 ? member.credits.map((credit, i) => (
// //                         <motion.div key={credit.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }}>
// //                             <Link href={`/originals/${credit.play.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-[#050505] border border-white/5 hover:border-white/20 transition-colors">
// //                                 {credit.play.poster_url ? (
// //                                     <Image src={credit.play.poster_url} alt={credit.play.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />
// //                                 ) : (
// //                                     <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]"><span className="text-white/10 font-mono text-xs">NO POSTER</span></div>
// //                                 )}
// //                                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
// //                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-color" style={{ backgroundColor: RASA }} />
// //                                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
// //                                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// //                                         <span style={{ color: RASA }} className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{credit.role}</span>
// //                                         <h4 className="text-3xl font-serif text-white mb-2 leading-none">{credit.play.title}</h4>
// //                                         <span className="font-mono text-xs text-white/40 block">{credit.play.year}</span>
// //                                     </div>
// //                                 </div>
// //                             </Link>
// //                         </motion.div>
// //                     )) : (
// //                         <div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-lg">
// //                             <span className="text-white/20 italic font-serif text-2xl block mb-4">"Silence."</span>
// //                             <span className="text-xs uppercase tracking-widest text-white/40">No productions found in the archive.</span>
// //                         </div>
// //                     )}
// //                 </div>
// //            </div>
// //       </section>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useRef, useState, useEffect, useMemo } from "react";
// // import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { MemberProfile } from "@/types/schema";

// // // --- SPECIFIC ICONS ---
// // const PlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
// // const PauseIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
// // const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>);

// // // Social Icons Logic
// // const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
// // const LinkedinIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
// // const TwitterIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 6.6 4.5c2.1-.2 3.8.4 4.8 1.4l1-1h6.2z" /></svg>);
// // const MailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
// // const LinkIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>);

// // const getSocialIcon = (platform: string) => {
// //     const p = platform.toLowerCase();
// //     if (p.includes('insta')) return <InstagramIcon />;
// //     if (p.includes('linkedin')) return <LinkedinIcon />;
// //     if (p.includes('twitter') || p.includes('x.com')) return <TwitterIcon />;
// //     return <LinkIcon />;
// // };

// // // --- ANIMATION CONSTANTS ---
// // const FADE_UP = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// // };
// // const STAGGER_CHILDREN = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
// // };

// // export default function ProfileArchitect({ member }: { member: MemberProfile }) {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const RASA = member.color || "#eab308";

// //   // SCROLL PHYSICS
// //   const { scrollY } = useScroll();
// //   const heroParallax = useTransform(scrollY, [0, 1000], [0, 500]); 
// //   const textParallax = useTransform(scrollY, [0, 1000], [0, -200]);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useMotionValueEvent(scrollY, "change", (latest) => {
// //     setIsScrolled(latest > 100);
// //   });

// //   // AUDIO ENGINE
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const audioRef = useRef<HTMLAudioElement | null>(null);
// //   const [audioProgress, setAudioProgress] = useState(0);

// //   useEffect(() => {
// //     const audio = audioRef.current;
// //     if (!audio) return;
// //     const updateProgress = () => setAudioProgress((audio.currentTime / audio.duration) * 100);
// //     if (isPlaying) {
// //         audio.play().catch(() => setIsPlaying(false));
// //         audio.addEventListener('timeupdate', updateProgress);
// //     } else {
// //         audio.pause();
// //         audio.removeEventListener('timeupdate', updateProgress);
// //     }
// //     return () => audio.removeEventListener('timeupdate', updateProgress);
// //   }, [isPlaying]);


// //   // --- NEW: UNIFIED TIMELINE LOGIC ---
// //   const timeline = useMemo(() => {
// //     const list = [];
    
// //     // 1. Add Tenures (Office Roles)
// //     member.tenures?.forEach(t => {
// //         list.push({
// //             type: 'tenure',
// //             year: t.year,
// //             title: t.role,
// //             subtitle: t.is_current ? 'Current Office' : 'Office Bearer',
// //             isCurrent: t.is_current
// //         });
// //     });

// //     // 2. Add Credits (Creative Roles)
// //     member.credits?.forEach(c => {
// //         list.push({
// //             type: 'credit',
// //             year: c.play.year,
// //             title: c.role,
// //             subtitle: c.play.title, // "Director • Shor"
// //             isCurrent: false
// //         });
// //     });

// //     // 3. Sort by Year (Descending - Newest First)
// //     // We assume '2025-26' can be sorted by the first 4 digits
// //     return list.sort((a, b) => parseInt(b.year) - parseInt(a.year));
// //   }, [member]);


// //   return (
// //     <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-black overflow-hidden font-sans">
      
// //       {/* ATMOSPHERE */}
// //       <div 
// //         className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] pointer-events-none opacity-20 mix-blend-screen animate-pulse-slow"
// //         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
// //       />
// //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-overlay" />

// //       {/* NAVIGATION */}
// //       <nav 
// //         className={`fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
// //       >
// //         <Link href="/ensemble" className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
// //             <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
// //                 <ArrowLeft />
// //             </span>
// //             <span className="hidden md:inline group-hover:translate-x-1 transition-transform">The Lineage</span>
// //         </Link>
        
// //         {/* SOCIAL ORBIT */}
// //         <div className="flex gap-3">
// //             {member.social_links && Object.entries(member.social_links).map(([platform, url]: [string, any]) => (
// //                 <a 
// //                     key={platform} 
// //                     href={url} 
// //                     target="_blank" 
// //                     rel="noopener noreferrer" 
// //                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70" 
// //                     title={platform}
// //                     style={{ boxShadow: `0 0 0 0px ${RASA}` }} 
// //                 >
// //                     {getSocialIcon(platform)}
// //                 </a>
// //             ))}
// //             {member.email && (
// //                  <a 
// //                     href={`mailto:${member.email}`}
// //                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70"
// //                     title="Send Email"
// //                  >
// //                     <MailIcon />
// //                  </a>
// //             )}
// //         </div>
// //       </nav>

// //       {/* HERO SECTION */}
// //       <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
// //         <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
// //              {member.image_url ? (
// //                 <Image 
// //                     src={member.image_url} 
// //                     alt={member.name} 
// //                     fill 
// //                     className="object-cover opacity-80 transition-all duration-[2s]" 
// //                     priority 
// //                 />
// //              ) : (
// //                 <div className="w-full h-full bg-[#080808] flex items-center justify-center">
// //                     <span className="text-white/10 text-9xl font-serif">?</span>
// //                 </div>
// //              )}
// //              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent" />
// //              <div className="absolute inset-0 mix-blend-color opacity-20" style={{ backgroundColor: RASA }} />
// //         </motion.div>

// //         <motion.div 
// //             style={{ y: textParallax }}
// //             className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6"
// //         >
// //             <motion.div 
// //                 initial={{ opacity: 0, width: 0 }}
// //                 animate={{ opacity: 1, width: "auto" }}
// //                 transition={{ duration: 1, delay: 0.5 }}
// //                 className="flex items-center gap-4 mb-8 overflow-hidden"
// //             >
// //                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
// //                 <span style={{ color: RASA, textShadow: `0 0 30px ${RASA}` }} className="text-xs md:text-sm uppercase tracking-[0.6em] font-bold whitespace-nowrap">
// //                     {member.role}
// //                 </span>
// //                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
// //             </motion.div>

// //             <motion.h1 
// //                 initial={{ opacity: 0, y: 100 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
// //                 className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
// //             >
// //                 {member.name}
// //             </motion.h1>

// //             <motion.div 
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 1.2 }}
// //                 className="mt-16 flex flex-wrap justify-center gap-6"
// //             >
// //                 {member.audio_url && (
// //                     <button 
// //                         onClick={() => setIsPlaying(!isPlaying)}
// //                         className="group relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:border-white/30"
// //                     >
// //                         <div className="absolute inset-0 bg-white/10 z-0 transition-all duration-300 origin-left" style={{ width: `${audioProgress}%`, backgroundColor: RASA, opacity: 0.2 }} />
// //                         <div style={{ color: RASA }} className="relative z-10 w-6 h-6 flex items-center justify-center">
// //                             {isPlaying ? <PauseIcon /> : <PlayIcon />}
// //                         </div>
// //                         <div className="relative z-10 text-left">
// //                             <span className="block text-[10px] uppercase tracking-widest text-white/60">Voice Note</span>
// //                             <span className="block text-xs font-medium text-white">{isPlaying ? "Playing..." : "Listen to Artist"}</span>
// //                         </div>
// //                         <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
// //                     </button>
// //                 )}
// //             </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* MANIFESTO & UNIFIED CAREER ARC */}
// //       <motion.section 
// //         variants={STAGGER_CHILDREN}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, margin: "-100px" }}
// //         className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32"
// //       >
// //           <div className="flex flex-col md:flex-row gap-20 md:gap-40 items-start">
              
// //               {/* QUOTE */}
// //               <div className="w-full md:w-1/2 md:sticky md:top-40">
// //                   <motion.div variants={FADE_UP}>
// //                       <span className="text-9xl font-serif text-white/10 absolute -top-12 -left-8">“</span>
// //                       <h2 className="text-3xl md:text-5xl font-serif italic leading-tight text-white/90 relative z-10">
// //                           {member.bio}
// //                       </h2>
// //                       <div style={{ backgroundColor: RASA }} className="w-32 h-1 mt-12 shadow-[0_0_20px_currentColor]" />
// //                   </motion.div>
// //               </div>

// //               {/* TIMELINE (MERGED) */}
// //               <div className="w-full md:w-1/2 flex flex-col gap-16">
// //                   <motion.div variants={FADE_UP}>
// //                       <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-6 mb-8">
// //                           The Complete Journey
// //                       </h3>
// //                       <div className="flex flex-col gap-0 border-l border-white/10 ml-3">
// //                           {timeline.map((item: any, i) => (
// //                               <div key={i} className="relative pl-10 pb-12 last:pb-0 group">
// //                                   {/* Dot Color: Gold for Tenure, Grey for Credit */}
// //                                   <span 
// //                                     style={{ backgroundColor: item.type === 'tenure' ? RASA : '#444' }}
// //                                     className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#020202] transition-all duration-500 group-hover:scale-125 ${item.isCurrent ? 'shadow-[0_0_15px_currentColor]' : ''}`}
// //                                   />
                                  
// //                                   <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2">
// //                                       <span className="font-mono text-xs text-white/40">{item.year}</span>
// //                                       <span className="text-2xl font-serif text-white group-hover:text-white transition-colors">
// //                                           {item.title}
// //                                       </span>
                                      
// //                                       {/* Subtitle: "Current Office" vs "Play Name" */}
// //                                       <span style={{ color: item.type === 'tenure' ? RASA : 'rgba(255,255,255,0.4)' }} className="text-[10px] uppercase tracking-widest font-bold">
// //                                           {item.subtitle}
// //                                       </span>
// //                                   </div>
// //                               </div>
// //                           ))}
                          
// //                           {timeline.length === 0 && (
// //                             <div className="text-white/20 italic">No timeline data available.</div>
// //                           )}
// //                       </div>
// //                   </motion.div>
// //               </div>
// //           </div>
// //       </motion.section>

// //       {/* SELECTED WORKS (Gallery) */}
// //       <section className="relative z-10 w-full px-6 pb-40">
// //            <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
// //                 <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
// //                     <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Selected Works</h3>
// //                     <div className="flex items-center gap-4">
// //                         <span className="h-px w-12 bg-white/20" />
// //                         <span className="text-xs uppercase tracking-widest text-white/50">{member.credits?.length || 0} ARCHIVED PRODUCTIONS</span>
// //                     </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                     {member.credits?.length > 0 ? member.credits.map((credit, i) => (
// //                         <motion.div key={credit.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }}>
// //                             <Link href={`/originals/${credit.play.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-[#050505] border border-white/5 hover:border-white/20 transition-colors">
// //                                 {credit.play.poster_url ? (
// //                                     <Image src={credit.play.poster_url} alt={credit.play.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />
// //                                 ) : (
// //                                     <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]"><span className="text-white/10 font-mono text-xs">NO POSTER</span></div>
// //                                 )}
// //                                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
// //                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-color" style={{ backgroundColor: RASA }} />
// //                                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
// //                                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// //                                         <span style={{ color: RASA }} className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{credit.role}</span>
// //                                         <h4 className="text-3xl font-serif text-white mb-2 leading-none">{credit.play.title}</h4>
// //                                         <span className="font-mono text-xs text-white/40 block">{credit.play.year}</span>
// //                                     </div>
// //                                 </div>
// //                             </Link>
// //                         </motion.div>
// //                     )) : (
// //                         <div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-lg">
// //                             <span className="text-white/20 italic font-serif text-2xl block mb-4">"Silence."</span>
// //                             <span className="text-xs uppercase tracking-widest text-white/40">No productions found in the archive.</span>
// //                         </div>
// //                     )}
// //                 </div>
// //            </div>
// //       </section>
// //     </div>
// //   );
// // }



// // "use client";

// // import { useRef, useState, useEffect, useMemo } from "react";
// // import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { MemberProfile } from "@/types/schema";

// // // --- ICONS ---
// // const PlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
// // const PauseIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
// // const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>);
// // const DownArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>);
// // const UpArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>);

// // // Social Icons Logic
// // const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
// // const LinkedinIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
// // const TwitterIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 6.6 4.5c2.1-.2 3.8.4 4.8 1.4l1-1h6.2z" /></svg>);
// // const MailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
// // const LinkIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>);

// // const getSocialIcon = (platform: string) => {
// //     const p = platform.toLowerCase();
// //     if (p.includes('insta')) return <InstagramIcon />;
// //     if (p.includes('linkedin')) return <LinkedinIcon />;
// //     if (p.includes('twitter') || p.includes('x.com')) return <TwitterIcon />;
// //     return <LinkIcon />;
// // };

// // // --- CONSTANTS ---
// // const TIMELINE_LIMIT = 6; // Show top 6 by default

// // const FADE_UP = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// // };
// // const STAGGER_CHILDREN = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
// // };

// // export default function ProfileArchitect({ member }: { member: MemberProfile }) {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const RASA = member.color || "#eab308";

// //   // SCROLL PHYSICS
// //   const { scrollY } = useScroll();
// //   const heroParallax = useTransform(scrollY, [0, 1000], [0, 500]); 
// //   const textParallax = useTransform(scrollY, [0, 1000], [0, -200]);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isExpanded, setIsExpanded] = useState(false); // STATE FOR TIMELINE EXPANSION

// //   useMotionValueEvent(scrollY, "change", (latest) => {
// //     setIsScrolled(latest > 100);
// //   });

// //   // AUDIO ENGINE
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const audioRef = useRef<HTMLAudioElement | null>(null);
// //   const [audioProgress, setAudioProgress] = useState(0);

// //   useEffect(() => {
// //     const audio = audioRef.current;
// //     if (!audio) return;
// //     const updateProgress = () => setAudioProgress((audio.currentTime / audio.duration) * 100);
// //     if (isPlaying) {
// //         audio.play().catch(() => setIsPlaying(false));
// //         audio.addEventListener('timeupdate', updateProgress);
// //     } else {
// //         audio.pause();
// //         audio.removeEventListener('timeupdate', updateProgress);
// //     }
// //     return () => audio.removeEventListener('timeupdate', updateProgress);
// //   }, [isPlaying]);


// //   // --- UNIFIED TIMELINE LOGIC ---
// //   const timeline = useMemo(() => {
// //     const list = [];
    
// //     // 1. Add Tenures (Office Roles)
// //     member.tenures?.forEach(t => {
// //         list.push({
// //             type: 'tenure',
// //             year: t.year,
// //             title: t.role,
// //             subtitle: t.is_current ? 'Current Office' : 'Office Bearer',
// //             isCurrent: t.is_current
// //         });
// //     });

// //     // 2. Add Credits (Creative Roles)
// //     member.credits?.forEach(c => {
// //         list.push({
// //             type: 'credit',
// //             year: c.play.year,
// //             title: c.role,
// //             subtitle: c.play.title, 
// //             isCurrent: false
// //         });
// //     });

// //     // 3. Sort by Year (Descending)
// //     return list.sort((a, b) => parseInt(b.year) - parseInt(a.year));
// //   }, [member]);

// //   // Determine which items to show
// //   const visibleTimeline = isExpanded ? timeline : timeline.slice(0, TIMELINE_LIMIT);
// //   const showExpandButton = timeline.length > TIMELINE_LIMIT;


// //   return (
// //     <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-black overflow-hidden font-sans">
      
// //       {/* ATMOSPHERE */}
// //       <div 
// //         className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] pointer-events-none opacity-20 mix-blend-screen animate-pulse-slow"
// //         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
// //       />
// //       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-overlay" />

// //       {/* NAVIGATION */}
// //       <nav 
// //         className={`fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
// //       >
// //         <Link href="/ensemble" className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
// //             <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
// //                 <ArrowLeft />
// //             </span>
// //             <span className="hidden md:inline group-hover:translate-x-1 transition-transform">The Lineage</span>
// //         </Link>
        
// //         {/* SOCIAL ORBIT */}
// //         <div className="flex gap-3">
// //             {member.social_links && Object.entries(member.social_links).map(([platform, url]: [string, any]) => (
// //                 <a 
// //                     key={platform} 
// //                     href={url} 
// //                     target="_blank" 
// //                     rel="noopener noreferrer" 
// //                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70" 
// //                     title={platform}
// //                     style={{ boxShadow: `0 0 0 0px ${RASA}` }} 
// //                 >
// //                     {getSocialIcon(platform)}
// //                 </a>
// //             ))}
// //             {member.email && (
// //                  <a 
// //                     href={`mailto:${member.email}`}
// //                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70"
// //                     title="Send Email"
// //                  >
// //                     <MailIcon />
// //                  </a>
// //             )}
// //         </div>
// //       </nav>

// //       {/* HERO SECTION */}
// //       <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
// //         <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
// //              {member.image_url ? (
// //                 <Image 
// //                     src={member.image_url} 
// //                     alt={member.name} 
// //                     fill 
// //                     className="object-cover opacity-80 transition-all duration-[2s]" 
// //                     priority 
// //                 />
// //              ) : (
// //                 <div className="w-full h-full bg-[#080808] flex items-center justify-center">
// //                     <span className="text-white/10 text-9xl font-serif">?</span>
// //                 </div>
// //              )}
// //              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent" />
// //              <div className="absolute inset-0 mix-blend-color opacity-20" style={{ backgroundColor: RASA }} />
// //         </motion.div>

// //         <motion.div 
// //             style={{ y: textParallax }}
// //             className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6"
// //         >
// //             <motion.div 
// //                 initial={{ opacity: 0, width: 0 }}
// //                 animate={{ opacity: 1, width: "auto" }}
// //                 transition={{ duration: 1, delay: 0.5 }}
// //                 className="flex items-center gap-4 mb-8 overflow-hidden"
// //             >
// //                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
// //                 <span style={{ color: RASA, textShadow: `0 0 30px ${RASA}` }} className="text-xs md:text-sm uppercase tracking-[0.6em] font-bold whitespace-nowrap">
// //                     {member.role}
// //                 </span>
// //                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
// //             </motion.div>

// //             <motion.h1 
// //                 initial={{ opacity: 0, y: 100 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
// //                 className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
// //             >
// //                 {member.name}
// //             </motion.h1>

// //             <motion.div 
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 1.2 }}
// //                 className="mt-16 flex flex-wrap justify-center gap-6"
// //             >
// //                 {member.audio_url && (
// //                     <button 
// //                         onClick={() => setIsPlaying(!isPlaying)}
// //                         className="group relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:border-white/30"
// //                     >
// //                         <div className="absolute inset-0 bg-white/10 z-0 transition-all duration-300 origin-left" style={{ width: `${audioProgress}%`, backgroundColor: RASA, opacity: 0.2 }} />
// //                         <div style={{ color: RASA }} className="relative z-10 w-6 h-6 flex items-center justify-center">
// //                             {isPlaying ? <PauseIcon /> : <PlayIcon />}
// //                         </div>
// //                         <div className="relative z-10 text-left">
// //                             <span className="block text-[10px] uppercase tracking-widest text-white/60">Voice Note</span>
// //                             <span className="block text-xs font-medium text-white">{isPlaying ? "Playing..." : "Listen to Artist"}</span>
// //                         </div>
// //                         <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
// //                     </button>
// //                 )}
// //             </motion.div>
// //         </motion.div>
// //       </section>
// // {/* ... (Previous Sections: Atmosphere, Nav, Hero) ... */}

// // // ... (Previous sections remain unchanged)

// //       {/* MANIFESTO & UNIFIED CAREER ARC */}
// //       <motion.section 
// //         variants={STAGGER_CHILDREN}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, margin: "-100px" }}
// //         className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 md:py-48"
// //       >
// //           <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
              
// //               {/* LEFT COLUMN: The Artist Statement (Long Form) */}
// //               <div className="w-full lg:w-3/5">
// //                   <motion.div variants={FADE_UP} className="relative">
                      
// //                       {/* Decorative Quote Mark */}
// //                       <span className="text-[12rem] leading-none font-serif text-white/5 absolute -top-24 -left-12 select-none">“</span>
                      
// //                       {/* Editorial Layout Logic */}
// //                       {(() => {
// //                         const bioText = member.bio || "An artist of the Aayam Ensemble.";
// //                         const splitIndex = bioText.indexOf('.') + 1 || bioText.indexOf('\n') + 1 || bioText.length;
// //                         const headline = bioText.slice(0, splitIndex);
// //                         const body = bioText.slice(splitIndex);

// //                         return (
// //                             <div>
// //                                 <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-8 relative z-10">
// //                                     {headline}
// //                                 </h2>
// //                                 <div style={{ backgroundColor: RASA }} className="w-24 h-1 mb-10 shadow-[0_0_20px_currentColor]" />
// //                                 {body && (
// //                                     <div className="prose prose-lg prose-invert text-white/70 font-sans leading-relaxed whitespace-pre-wrap">
// //                                         {body.trim()}
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         );
// //                       })()}
                      
// //                   </motion.div>
// //               </div>

// //               {/* RIGHT COLUMN: The Unified Timeline */}
// //               <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
// //                   <motion.div variants={FADE_UP} className="relative">
                       
// //                       <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
// //                           <span className="text-xs uppercase tracking-[0.3em] text-white/40">The Journey</span>
// //                           <span className="text-xs font-mono text-gold-500">
// //                              {timeline.length} MILESTONES
// //                           </span>
// //                       </div>

// //                       {/* THE LIST */}
// //                       <div className="flex flex-col gap-0 border-l border-white/10 ml-3">
// //                           <AnimatePresence initial={false}>
// //                               {visibleTimeline.map((item: any, i) => (
// //                                   <motion.div 
// //                                     key={`${item.title}-${item.year}-${i}`}
// //                                     initial={{ opacity: 0, height: 0 }}
// //                                     animate={{ opacity: 1, height: "auto" }}
// //                                     exit={{ opacity: 0, height: 0 }}
// //                                     transition={{ duration: 0.3 }}
// //                                     // FIX APPLIED HERE:
// //                                     // 1. -ml-4 pulls the box 16px to the LEFT (covering the border area)
// //                                     // 2. pl-14 pushes content back (40px + 16px = 56px) so text aligns perfectly
// //                                     // 3. overflow-hidden no longer clips the dot because the box is wider
// //                                     className="relative -ml-4 pl-14 pb-12 last:pb-0 group overflow-hidden"
// //                                   >
// //                                       {/* Dot */}
// //                                       <span 
// //                                         style={{ backgroundColor: item.type === 'tenure' ? RASA : '#333' }}
// //                                         // FIX APPLIED HERE:
// //                                         // left-[11px] centers it exactly on the visual border line
// //                                         // (16px margin - 5px offset = 11px)
// //                                         className={`absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#020202] transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_currentColor]`}
// //                                       />
                                      
// //                                       {/* Content */}
// //                                       <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2">
// //                                           <span className="font-mono text-xs text-white/30">{item.year}</span>
// //                                           <span className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-white transition-colors">
// //                                               {item.title}
// //                                           </span>
// //                                           <span className={`text-[10px] uppercase tracking-widest font-bold ${item.type === 'tenure' ? 'text-white/60' : 'text-white/40'}`}>
// //                                               {item.subtitle}
// //                                           </span>
// //                                       </div>
// //                                   </motion.div>
// //                               ))}
// //                           </AnimatePresence>

// //                           {/* Expand Button */}
// //                           {showExpandButton && (
// //                             <div className="relative pt-6 pl-10">
// //                                 <button 
// //                                     onClick={() => setIsExpanded(!isExpanded)}
// //                                     className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2"
// //                                 >
// //                                     {isExpanded ? "Collapse" : "View Full History"}
// //                                     {isExpanded ? <UpArrow /> : <DownArrow />}
// //                                 </button>
// //                             </div>
// //                           )}
// //                       </div>

// //                   </motion.div>
// //               </div>
// //           </div>
// //       </motion.section>

// //       {/* ... (Next Section: Selected Works) ... */}
// //       {/* SELECTED WORKS (Gallery) */}
// //       <section className="relative z-10 w-full px-6 pb-40">
// //            <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
// //                 <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
// //                     <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Selected Works</h3>
// //                     <div className="flex items-center gap-4">
// //                         <span className="h-px w-12 bg-white/20" />
// //                         <span className="text-xs uppercase tracking-widest text-white/50">{member.credits?.length || 0} ARCHIVED PRODUCTIONS</span>
// //                     </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                     {member.credits?.length > 0 ? member.credits.map((credit, i) => (
// //                         <motion.div key={credit.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }}>
// //                             <Link href={`/originals/${credit.play.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-[#050505] border border-white/5 hover:border-white/20 transition-colors">
// //                                 {credit.play.poster_url ? (
// //                                     <Image src={credit.play.poster_url} alt={credit.play.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />
// //                                 ) : (
// //                                     <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]"><span className="text-white/10 font-mono text-xs">NO POSTER</span></div>
// //                                 )}
// //                                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
// //                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-color" style={{ backgroundColor: RASA }} />
// //                                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
// //                                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// //                                         <span style={{ color: RASA }} className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{credit.role}</span>
// //                                         <h4 className="text-3xl font-serif text-white mb-2 leading-none">{credit.play.title}</h4>
// //                                         <span className="font-mono text-xs text-white/40 block">{credit.play.year}</span>
// //                                     </div>
// //                                 </div>
// //                             </Link>
// //                         </motion.div>
// //                     )) : (
// //                         <div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-lg">
// //                             <span className="text-white/20 italic font-serif text-2xl block mb-4">"Silence."</span>
// //                             <span className="text-xs uppercase tracking-widest text-white/40">No productions found in the archive.</span>
// //                         </div>
// //                     )}
// //                 </div>
// //            </div>
// //       </section>
// //     </div>
// //   );
// // }
// "use client";

// import { useRef, useState, useEffect, useMemo } from "react";
// import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, Variants } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { MemberProfile } from "@/types/schema";

// // ... (Icons remain the same) ...
// const PlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
// const PauseIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
// const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>);
// const DownArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>);
// const UpArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>);
// const MailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);

// // Social Icons
// const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
// const LinkedinIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
// const TwitterIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 6.6 4.5c2.1-.2 3.8.4 4.8 1.4l1-1h6.2z" /></svg>);
// const LinkIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>);

// const getSocialIcon = (platform: string) => {
//     const p = platform.toLowerCase();
//     if (p.includes('insta')) return <InstagramIcon />;
//     if (p.includes('linkedin')) return <LinkedinIcon />;
//     if (p.includes('twitter') || p.includes('x.com')) return <TwitterIcon />;
//     return <LinkIcon />;
// };

// // --- TYPES ---
// // FIX: Define the shape of a Timeline Item to satisfy TypeScript
// interface TimelineItem {
//     type: 'tenure' | 'credit';
//     year: string;
//     title: string;
//     subtitle: string;
//     isCurrent: boolean;
// }

// // --- CONSTANTS ---
// const TIMELINE_LIMIT = 6;

// const FADE_UP: Variants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// };
// const STAGGER_CHILDREN: Variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
// };

// export default function ProfileArchitect({ member }: { member: MemberProfile }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const RASA = member.color || "#eab308";

//   // SCROLL PHYSICS
//   const { scrollY } = useScroll();
//   const heroParallax = useTransform(scrollY, [0, 1000], [0, 500]); 
//   const textParallax = useTransform(scrollY, [0, 1000], [0, -200]);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 100);
//   });

//   // AUDIO ENGINE
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [audioProgress, setAudioProgress] = useState(0);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     const updateProgress = () => setAudioProgress((audio.currentTime / audio.duration) * 100);
//     if (isPlaying) {
//         audio.play().catch(() => setIsPlaying(false));
//         audio.addEventListener('timeupdate', updateProgress);
//     } else {
//         audio.pause();
//         audio.removeEventListener('timeupdate', updateProgress);
//     }
//     return () => audio.removeEventListener('timeupdate', updateProgress);
//   }, [isPlaying]);


//   // --- UNIFIED TIMELINE LOGIC ---
//   const timeline = useMemo(() => {
//     // FIX: Typed Array
//     const list: TimelineItem[] = []; 
    
//     // 1. Tenures
//     member.tenures?.forEach(t => {
//         list.push({
//             type: 'tenure',
//             year: t.year,
//             title: t.role,
//             subtitle: t.is_current ? 'Current Office' : 'Office Bearer',
//             isCurrent: t.is_current
//         });
//     });

//     // 2. Credits
//     member.credits?.forEach(c => {
//         list.push({
//             type: 'credit',
//             year: c.play.year,
//             title: c.role,
//             subtitle: c.play.title, 
//             isCurrent: false
//         });
//     });

//     return list.sort((a, b) => parseInt(b.year) - parseInt(a.year));
//   }, [member]);

//   const visibleTimeline = isExpanded ? timeline : timeline.slice(0, TIMELINE_LIMIT);
//   const showExpandButton = timeline.length > TIMELINE_LIMIT;


//   return (
//     <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-black overflow-hidden font-sans">
      
//       {/* ATMOSPHERE */}
//       <div 
//         className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] pointer-events-none opacity-20 mix-blend-screen animate-pulse-slow"
//         style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
//       />
//       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-overlay" />

//       {/* NAVIGATION */}
//       <nav 
//         className={`fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
//       >
//         <Link href="/ensemble" className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
//             <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
//                 <ArrowLeft />
//             </span>
//             <span className="hidden md:inline group-hover:translate-x-1 transition-transform">The Lineage</span>
//         </Link>
//         <div className="flex gap-3">
//             {member.social_links && Object.entries(member.social_links).map(([platform, url]: [string, any]) => (
//                 <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70" style={{ boxShadow: `0 0 0 0px ${RASA}` }}>{getSocialIcon(platform)}</a>
//             ))}
//             {member.email && (
//                  <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70"><MailIcon /></a>
//             )}
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
//         <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
//              {member.image_url ? (
//                 <Image src={member.image_url} alt={member.name} fill className="object-cover opacity-80 transition-all duration-[2s]" priority />
//              ) : (
//                 <div className="w-full h-full bg-[#080808] flex items-center justify-center"><span className="text-white/10 text-9xl font-serif">?</span></div>
//              )}
//              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent" />
//              <div className="absolute inset-0 mix-blend-color opacity-20" style={{ backgroundColor: RASA }} />
//         </motion.div>

//         <motion.div style={{ y: textParallax }} className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6">
//             <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} transition={{ duration: 1, delay: 0.5 }} className="flex items-center gap-4 mb-8 overflow-hidden">
//                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
//                 <span style={{ color: RASA, textShadow: `0 0 30px ${RASA}` }} className="text-xs md:text-sm uppercase tracking-[0.6em] font-bold whitespace-nowrap">{member.role}</span>
//                 <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
//             </motion.div>
//             <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{member.name}</motion.h1>
            
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-16 flex flex-wrap justify-center gap-6">
//                 {member.audio_url && (
//                     <button onClick={() => setIsPlaying(!isPlaying)} className="group relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:border-white/30">
//                         <div className="absolute inset-0 bg-white/10 z-0 transition-all duration-300 origin-left" style={{ width: `${audioProgress}%`, backgroundColor: RASA, opacity: 0.2 }} />
//                         <div style={{ color: RASA }} className="relative z-10 w-6 h-6 flex items-center justify-center">{isPlaying ? <PauseIcon /> : <PlayIcon />}</div>
//                         <div className="relative z-10 text-left">
//                             <span className="block text-[10px] uppercase tracking-widest text-white/60">Voice Note</span>
//                             <span className="block text-xs font-medium text-white">{isPlaying ? "Playing..." : "Listen to Artist"}</span>
//                         </div>
//                         <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
//                     </button>
//                 )}
//             </motion.div>
//         </motion.div>
//       </section>

//       {/* MANIFESTO & TIMELINE */}
//       <motion.section 
//         variants={STAGGER_CHILDREN}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 md:py-48"
//       >
//           <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
              
//               {/* LEFT: ARTIST STATEMENT */}
//               <div className="w-full lg:w-3/5">
//                   <motion.div variants={FADE_UP} className="relative">
//                       <span className="text-[12rem] leading-none font-serif text-white/5 absolute -top-24 -left-12 select-none">“</span>
//                       {(() => {
//                         const bioText = member.bio || "An artist of the Aayam Ensemble.";
//                         const splitIndex = bioText.indexOf('.') + 1 || bioText.indexOf('\n') + 1 || bioText.length;
//                         const headline = bioText.slice(0, splitIndex);
//                         const body = bioText.slice(splitIndex);

//                         return (
//                             <div>
//                                 <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-8 relative z-10">{headline}</h2>
//                                 <div style={{ backgroundColor: RASA }} className="w-24 h-1 mb-10 shadow-[0_0_20px_currentColor]" />
//                                 {body && <div className="prose prose-lg prose-invert text-white/70 font-sans leading-relaxed whitespace-pre-wrap">{body.trim()}</div>}
//                             </div>
//                         );
//                       })()}
//                   </motion.div>
//               </div>

//               {/* RIGHT: TIMELINE */}
//               <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
//                   <motion.div variants={FADE_UP} className="relative">
                       
//                       <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
//                           <span className="text-xs uppercase tracking-[0.3em] text-white/40">The Journey</span>
//                           <span className="text-xs font-mono text-gold-500">{timeline.length} MILESTONES</span>
//                       </div>

//                       {/* THE TIMELINE CONTAINER */}
//                       <div className="flex flex-col gap-0 border-l border-white/10 ml-3">
//                           <AnimatePresence initial={false}>
//                               {visibleTimeline.map((item, i) => {
//                                   // Determine Dot Color
//                                   const dotColor = item.type === 'tenure' ? RASA : '#444';
//                                   // Determine Shadow for Current Role
//                                   const dotShadow = item.isCurrent ? `0 0 15px ${RASA}` : 'none';

//                                   return (
//                                       <motion.div 
//                                         key={`${item.title}-${item.year}-${i}`}
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: "auto" }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="relative -ml-[20px] pl-[60px] pb-12 last:pb-0 group overflow-hidden"
//                                       >
//                                           {/* THE DOT */}
//                                           <span 
//                                             style={{ backgroundColor: dotColor, boxShadow: dotShadow }}
//                                             className="absolute left-[15px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#020202] transition-all duration-500 group-hover:scale-125"
//                                           />
                                          
//                                           {/* THE CONTENT */}
//                                           <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2">
//                                               <span className="font-mono text-xs text-white/30">{item.year}</span>
//                                               <span className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-white transition-colors">
//                                                   {item.title}
//                                               </span>
//                                               <span 
//                                                 style={{ color: item.type === 'tenure' ? RASA : 'rgba(255,255,255,0.4)' }}
//                                                 className="text-[10px] uppercase tracking-widest font-bold"
//                                               >
//                                                   {item.subtitle}
//                                               </span>
//                                           </div>
//                                       </motion.div>
//                                   );
//                               })}
//                           </AnimatePresence>

//                           {/* EXPAND BUTTON */}
//                           {showExpandButton && (
//                             <div className="relative pt-6 pl-10">
//                                 <button 
//                                     onClick={() => setIsExpanded(!isExpanded)}
//                                     className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2"
//                                 >
//                                     {isExpanded ? "Collapse" : "View Full History"}
//                                     {isExpanded ? <UpArrow /> : <DownArrow />}
//                                 </button>
//                             </div>
//                           )}
//                       </div>

//                   </motion.div>
//               </div>
//           </div>
//       </motion.section>

//       {/* SELECTED WORKS */}
//       <section className="relative z-10 w-full px-6 pb-40">
//            <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
//                 <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
//                     <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Selected Works</h3>
//                     <div className="flex items-center gap-4"><span className="h-px w-12 bg-white/20" /><span className="text-xs uppercase tracking-widest text-white/50">{member.credits?.length || 0} ARCHIVED PRODUCTIONS</span></div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {member.credits?.length > 0 ? member.credits.map((credit, i) => (
//                         <motion.div key={credit.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }}>
//                             <Link href={`/originals/${credit.play.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-[#050505] border border-white/5 hover:border-white/20 transition-colors">
//                                 {credit.play.poster_url ? (<Image src={credit.play.poster_url} alt={credit.play.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />) : (<div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]"><span className="text-white/10 font-mono text-xs">NO POSTER</span></div>)}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
//                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-color" style={{ backgroundColor: RASA }} />
//                                 <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
//                                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                                         <span style={{ color: RASA }} className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{credit.role}</span>
//                                         <h4 className="text-3xl font-serif text-white mb-2 leading-none">{credit.play.title}</h4>
//                                         <span className="font-mono text-xs text-white/40 block">{credit.play.year}</span>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </motion.div>
//                     )) : (<div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-lg"><span className="text-white/20 italic font-serif text-2xl block mb-4">"Silence."</span><span className="text-xs uppercase tracking-widest text-white/40">No productions found in the archive.</span></div>)}
//                 </div>
//            </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MemberProfile } from "@/types/schema";

// --- 1. ICONOGRAPHY (Pure SVG Geometry) ---
const PlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
const PauseIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>);
const DownArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>);
const UpArrow = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>);
const MailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);

// Socials
const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const LinkedinIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);
const TwitterIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 6.6 4.5c2.1-.2 3.8.4 4.8 1.4l1-1h6.2z" /></svg>);
const LinkIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>);

const getSocialIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('insta')) return <InstagramIcon />;
    if (p.includes('linkedin')) return <LinkedinIcon />;
    if (p.includes('twitter') || p.includes('x.com')) return <TwitterIcon />;
    return <LinkIcon />;
};

// --- 2. TYPES & LOGIC ---
interface TimelineItem {
    type: 'tenure' | 'credit';
    year: string;
    title: string;
    subtitle: string;
    isCurrent: boolean;
    slug?: string; // Added Slug for future linking of plays
}

const TIMELINE_LIMIT = 6;

const FADE_UP: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};
const STAGGER_CHILDREN: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function ProfileArchitect({ member }: { member: MemberProfile }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // THE SOUL (Navarasa Logic)
  const RASA = member.color || "#eab308";

  // SCROLL PHYSICS
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 1000], [0, 500]); 
  const textParallax = useTransform(scrollY, [0, 1000], [0, -200]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  // AUDIO ENGINE
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioProgress, setAudioProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => setAudioProgress((audio.currentTime / audio.duration) * 100);
    if (isPlaying) {
        audio.play().catch(() => setIsPlaying(false));
        audio.addEventListener('timeupdate', updateProgress);
    } else {
        audio.pause();
        audio.removeEventListener('timeupdate', updateProgress);
    }
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, [isPlaying]);


  // --- 3. THE UNIFIED TIMELINE ENGINE ---
  const timeline = useMemo(() => {
    const list: TimelineItem[] = [];
    
    // A. Tenures (The Hierarchy)
    member.tenures?.forEach(t => {
        list.push({
            type: 'tenure',
            year: t.year,
            title: t.role,
            subtitle: t.is_current ? 'Current Office' : 'Office Bearer',
            isCurrent: t.is_current
        });
    });

    // B. Credits (The Art)
    member.credits?.forEach(c => {
        list.push({
            type: 'credit',
            year: c.play.year,
            title: c.role,
            subtitle: c.play.title, 
            isCurrent: false,
            slug: c.play.slug
        });
    });

    // C. Chronological Sort (Newest First)
    return list.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, [member]);

  const visibleTimeline = isExpanded ? timeline : timeline.slice(0, TIMELINE_LIMIT);
  const showExpandButton = timeline.length > TIMELINE_LIMIT;


  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#020202] text-white selection:bg-white/20 selection:text-black overflow-hidden font-sans">
      
      {/* LAYER 0: THE ATMOSPHERE */}
      <div 
        className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] pointer-events-none opacity-20 mix-blend-screen animate-pulse-slow"
        style={{ background: `radial-gradient(circle, ${RASA}, transparent 70%)` }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-overlay" />

      {/* LAYER 1: NAVIGATION */}
      <nav 
        className={`fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}
      >
        <Link href="/ensemble" className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowLeft />
            </span>
            <span className="hidden md:inline group-hover:translate-x-1 transition-transform">The Lineage</span>
        </Link>
        <div className="flex gap-3">
            {member.social_links && Object.entries(member.social_links).map(([platform, url]: [string, any]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70" style={{ boxShadow: `0 0 0 0px ${RASA}` }}>{getSocialIcon(platform)}</a>
            ))}
            {member.email && (
                 <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white/70"><MailIcon /></a>
            )}
        </div>
      </nav>

      {/* LAYER 2: THE HERO (Cinematic) */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
             {member.image_url ? (
                <Image src={member.image_url} alt={member.name} fill className="object-cover opacity-80 transition-all duration-[2s]" priority />
             ) : (
                <div className="w-full h-full bg-[#080808] flex items-center justify-center"><span className="text-white/10 text-9xl font-serif">?</span></div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent" />
             <div className="absolute inset-0 mix-blend-color opacity-20" style={{ backgroundColor: RASA }} />
        </motion.div>

        <motion.div style={{ y: textParallax }} className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6">
            <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} transition={{ duration: 1, delay: 0.5 }} className="flex items-center gap-4 mb-8 overflow-hidden">
                <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
                <span style={{ color: RASA, textShadow: `0 0 30px ${RASA}` }} className="text-xs md:text-sm uppercase tracking-[0.6em] font-bold whitespace-nowrap">{member.role}</span>
                <div style={{ backgroundColor: RASA }} className="w-12 h-px shadow-[0_0_15px_currentColor]" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="text-[15vw] md:text-[9rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{member.name}</motion.h1>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-16 flex flex-wrap justify-center gap-6">
                {member.audio_url && (
                    <button onClick={() => setIsPlaying(!isPlaying)} className="group relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:border-white/30">
                        <div className="absolute inset-0 bg-white/10 z-0 transition-all duration-300 origin-left" style={{ width: `${audioProgress}%`, backgroundColor: RASA, opacity: 0.2 }} />
                        <div style={{ color: RASA }} className="relative z-10 w-6 h-6 flex items-center justify-center">{isPlaying ? <PauseIcon /> : <PlayIcon />}</div>
                        <div className="relative z-10 text-left">
                            <span className="block text-[10px] uppercase tracking-widest text-white/60">Voice Note</span>
                            <span className="block text-xs font-medium text-white">{isPlaying ? "Playing..." : "Listen to Artist"}</span>
                        </div>
                        <audio ref={audioRef} src={member.audio_url} onEnded={() => setIsPlaying(false)} />
                    </button>
                )}
            </motion.div>
        </motion.div>
      </section>

      {/* LAYER 3: MANIFESTO & TIMELINE (The Core) */}
      <motion.section 
        variants={STAGGER_CHILDREN}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-32 md:py-48"
      >
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
              
              {/* LEFT: ARTIST STATEMENT (Editorial) */}
              <div className="w-full lg:w-3/5">
                  <motion.div variants={FADE_UP} className="relative">
                      <span className="text-[12rem] leading-none font-serif text-white/5 absolute -top-24 -left-12 select-none">“</span>
                      {(() => {
                        const bioText = member.bio || "An artist of the Aayam Ensemble.";
                        const splitIndex = bioText.indexOf('.') + 1 || bioText.indexOf('\n') + 1 || bioText.length;
                        const headline = bioText.slice(0, splitIndex);
                        const body = bioText.slice(splitIndex);

                        return (
                            <div>
                                <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-8 relative z-10">{headline}</h2>
                                <div style={{ backgroundColor: RASA }} className="w-24 h-1 mb-10 shadow-[0_0_20px_currentColor]" />
                                {body && <div className="prose prose-lg prose-invert text-white/70 font-sans leading-relaxed whitespace-pre-wrap">{body.trim()}</div>}
                            </div>
                        );
                      })()}
                  </motion.div>
              </div>

              {/* RIGHT: TIMELINE (Perfected Geometry) */}
              <div className="w-full lg:w-2/5 lg:sticky lg:top-32">
                  <motion.div variants={FADE_UP} className="relative">
                       
                      <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                          <span className="text-xs uppercase tracking-[0.3em] text-white/40">The Journey</span>
                          <span className="text-xs font-mono text-gold-500">{timeline.length} MILESTONES</span>
                      </div>

                      {/* THE LIST CONTAINER */}
                      <div className="flex flex-col gap-0 border-l border-white/10 ml-3">
                          <AnimatePresence initial={false}>
                              {visibleTimeline.map((item, i) => {
                                  // --- LOGIC: DYNAMIC STYLING ---
                                  // 1. Color: If Tenure -> RASA (Gold). If Credit -> Grey (#444).
                                  const dotColor = item.type === 'tenure' ? RASA : '#444';
                                  // 2. Shadow: Only for Current Office.
                                  const dotShadow = item.isCurrent ? `0 0 15px ${RASA}` : 'none';
                                  // 3. Subtitle Color: Tenure -> RASA. Credit -> White/40.
                                  const subtitleColor = item.type === 'tenure' ? RASA : 'rgba(255,255,255,0.4)';

                                  return (
                                      <motion.div 
                                        key={`${item.title}-${item.year}-${i}`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        // --- GEOMETRY FIX (THE 110% SOLUTION) ---
                                        // Problem: overflow-hidden clips the dot on the left edge.
                                        // Solution: Shift the visual box LEFT (-ml-6) so the border line is "inside" the box.
                                        // Then shift the content RIGHT (pl-16) so it aligns visually with the header.
                                        className="relative -ml-6 pl-16 pb-12 last:pb-0 group overflow-hidden"
                                      >
                                          {/* THE DOT */}
                                          <span 
                                            style={{ backgroundColor: dotColor, boxShadow: dotShadow }}
                                            // left-[19px] positions it exactly on the visual border line.
                                            // Math: 24px (margin) - 5px (half dot width) = 19px
                                            className="absolute left-[19px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#020202] transition-all duration-500 group-hover:scale-125"
                                          />
                                          
                                          {/* THE CONTENT */}
                                          <div className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2">
                                              <span className="font-mono text-xs text-white/30">{item.year}</span>
                                              <span className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-white transition-colors">
                                                  {item.title}
                                              </span>
                                              <span 
                                                style={{ color: subtitleColor }}
                                                className="text-[10px] uppercase tracking-widest font-bold"
                                              >
                                                  {item.subtitle}
                                              </span>
                                          </div>
                                      </motion.div>
                                  );
                              })}
                          </AnimatePresence>

                          {/* EXPAND BUTTON */}
                          {showExpandButton && (
                            <div className="relative pt-6 pl-10">
                                <button 
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2"
                                >
                                    {isExpanded ? "Collapse" : "View Full History"}
                                    {isExpanded ? <UpArrow /> : <DownArrow />}
                                </button>
                            </div>
                          )}
                      </div>

                  </motion.div>
              </div>
          </div>
      </motion.section>

      {/* LAYER 4: SELECTED WORKS */}
      <section className="relative z-10 w-full px-6 pb-40">
           <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
                    <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Selected Works</h3>
                    <div className="flex items-center gap-4"><span className="h-px w-12 bg-white/20" /><span className="text-xs uppercase tracking-widest text-white/50">{member.credits?.length || 0} ARCHIVED PRODUCTIONS</span></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {member.credits?.length > 0 ? member.credits.map((credit, i) => (
                        <motion.div key={credit.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }}>
                            <Link href={`/originals/${credit.play.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-[#050505] border border-white/5 hover:border-white/20 transition-colors">
                                {credit.play.poster_url ? (<Image src={credit.play.poster_url} alt={credit.play.title} fill className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />) : (<div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]"><span className="text-white/10 font-mono text-xs">NO POSTER</span></div>)}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-color" style={{ backgroundColor: RASA }} />
                                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span style={{ color: RASA }} className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{credit.role}</span>
                                        <h4 className="text-3xl font-serif text-white mb-2 leading-none">{credit.play.title}</h4>
                                        <span className="font-mono text-xs text-white/40 block">{credit.play.year}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )) : (<div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-lg"><span className="text-white/20 italic font-serif text-2xl block mb-4">"Silence."</span><span className="text-xs uppercase tracking-widest text-white/40">No productions found in the archive.</span></div>)}
                </div>
           </div>
      </section>
    </div>
  );
}