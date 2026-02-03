// "use client";

// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { EnsembleMember } from "@/types/schema";
// import { useLiveWire } from "./LiveWireContext";

// // ICONS
// const PlayIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
// const PauseIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>;

// export default function LiveWireRow({ 
//     member, index, activeAudioId, setActiveAudioId 
// }: { 
//     member: EnsembleMember; index: number; 
//     activeAudioId: string | null; setActiveAudioId: (id: string | null) => void;
// }) {
//     const isLeft = index % 2 === 0;
//     const isPlaying = activeAudioId === member.id;
//     const { registerTarget } = useLiveWire();
    
//     const textRef = useRef<HTMLDivElement>(null);
//     const imageRef = useRef<HTMLDivElement>(null);
//     const audioRef = useRef<HTMLAudioElement | null>(null);

//     // REGISTER POSITIONS
//     useEffect(() => {
//         if (textRef.current) registerTarget(member.id, "text", textRef.current);
//         if (imageRef.current) registerTarget(member.id, "image", imageRef.current);
//     }, [registerTarget, member.id]);

//     // AUDIO SYNC
//     useEffect(() => {
//         if (!audioRef.current) return;
//         if (isPlaying) {
//             audioRef.current.play().catch(() => {});
//         } else {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0;
//         }
//     }, [isPlaying]);

//     return (
//         <div className={`relative w-full flex ${isLeft ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} items-center justify-center py-32 gap-12 md:gap-24`}>
            
//             {/* 1. THE IMAGE NODE */}
//             <div 
//                 ref={imageRef} // <-- The Registry Point
//                 className={`relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] group cursor-pointer z-20`}
//                 onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
//             >
//                 {/* The "Impact" Flash (White Flash on Hover/Active) */}
//                 <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-100" />
                
//                 <div className={`relative w-full h-full overflow-hidden border-2 bg-neutral-900 transition-all duration-200
//                     ${isPlaying ? 'border-gold-500 shadow-[0_0_50px_rgba(234,179,8,0.5)] scale-105' : 'border-white/10 group-hover:border-gold-500'}
//                 `}>
//                     {member.image_url ? (
//                         <Image 
//                             src={member.image_url} 
//                             alt={member.name} 
//                             fill 
//                             className={`object-cover transition-all duration-700 ${isPlaying ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
//                         />
//                     ) : (
//                         <div className="w-full h-full flex items-center justify-center">
//                             <span className="text-9xl font-serif text-white/10 group-hover:text-gold-500">{member.name.charAt(0)}</span>
//                         </div>
//                     )}

//                     {/* Tech UI Corners */}
//                     <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />

//                     {/* Play Button */}
//                     <div className={`absolute bottom-6 right-6 w-12 h-12 bg-black flex items-center justify-center text-white border border-white/20 transition-all duration-300 ${isPlaying ? 'bg-gold-500 text-black' : 'group-hover:bg-white group-hover:text-black'}`}>
//                         {isPlaying ? <PauseIcon /> : <PlayIcon />}
//                     </div>
//                 </div>
//                 <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} onEnded={() => setActiveAudioId(null)} />
//             </div>

//             {/* 2. THE TEXT NODE */}
//             <div 
//                 ref={textRef} // <-- The Registry Point
//                 className={`w-full md:w-1/3 flex flex-col ${isLeft ? 'items-start text-left' : 'items-end text-right'} z-10`}
//             >
//                 <div className="inline-block px-2 py-1 bg-gold-500/10 border border-gold-500/30 mb-4">
//                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">{member.role}</span>
//                 </div>

//                 <h2 className="text-6xl md:text-8xl font-serif text-white leading-none mb-6 relative mix-blend-exclusion">
//                     {member.name}
//                 </h2>

//                 <p className="font-serif italic text-white/50 text-xl leading-relaxed mb-8 max-w-sm">
//                     "{member.bio}"
//                 </p>

//                 <Link href={`/artist/${member.slug}`} className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white border-b border-transparent hover:border-white pb-1 transition-colors">
//                     View Profile
//                 </Link>
//             </div>

//         </div>
//     );
// }