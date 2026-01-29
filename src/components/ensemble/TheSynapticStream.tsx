"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- ICONS ---
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const PauseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

// --- MAIN COMPONENT ---
// Explicit 'export default' to prevent Import Errors
export default function TheSynapticStream({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  // HEIGHT LOGIC: We calculate the exact SVG path length
  const ITEM_HEIGHT = 700; // Taller for cinematic feel
  const totalHeight = members.length * ITEM_HEIGHT + 600; 

  return (
    <div ref={containerRef} className="relative bg-[#020202] overflow-hidden" style={{ height: totalHeight }}>
      
      {/* 1. ATMOSPHERE (The Aayam Void) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
          <div className="absolute top-[-20%] left-[-20%] w-[50vw] h-[50vw] bg-purple-900/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      {/* 2. HEADER */}
      <div className="absolute top-0 w-full h-[500px] flex flex-col items-center justify-center z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
             <span className="text-gold-500 uppercase tracking-[0.6em] text-[10px] block mb-6 animate-pulse">
                Lineage / {currentYear}
             </span>
             <h1 className="text-7xl md:text-9xl font-serif text-white/90 tracking-tight">
                 The Stream.
             </h1>
          </motion.div>
      </div>

      {/* 3. THE NERVE (Background Layer) */}
      <NeuralSpine height={totalHeight} count={members.length} itemHeight={ITEM_HEIGHT} containerRef={containerRef} />

      {/* 4. THE NODES (Content Layer) */}
      <div className="absolute top-[400px] w-full left-0 z-30">
          {members.map((member, index) => (
              <SynapseNode 
                key={member.id} 
                member={member} 
                index={index} 
                itemHeight={ITEM_HEIGHT}
                activeAudioId={activeAudioId}
                setActiveAudioId={setActiveAudioId}
              />
          ))}
      </div>

      {/* 5. THE TIMELINE (Footer) */}
      <div className="absolute bottom-10 w-full flex justify-center z-40">
          <TimelineNav currentYear={currentYear} />
      </div>

    </div>
  );
}

// --- SUB-COMPONENT: THE NEURAL SPINE (SVG) ---
function NeuralSpine({ height, count, itemHeight, containerRef }: { height: number, count: number, itemHeight: number, containerRef: any }) {
    // SCROLL PHYSICS: We track how far down the user is
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const pathLength = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    // DRAW THE SNAKE PATH
    let d = `M 50% 0 L 50% 300 `; // Start Line
    
    for (let i = 0; i < count; i++) {
        const isLeft = i % 2 === 0;
        const yStart = 300 + (i * itemHeight);
        const yMid = yStart + (itemHeight * 0.5);
        const yEnd = yStart + itemHeight;

        if (isLeft) {
            // Curve Left -> Down -> Curve Back
            d += `C 50% ${yStart + 150}, 20% ${yStart}, 20% ${yMid} `; 
            d += `C 20% ${yEnd}, 50% ${yEnd - 150}, 50% ${yEnd} `;
        } else {
            // Curve Right -> Down -> Curve Back
            d += `C 50% ${yStart + 150}, 80% ${yStart}, 80% ${yMid} `; 
            d += `C 80% ${yEnd}, 50% ${yEnd - 150}, 50% ${yEnd} `;
        }
    }
    d += `L 50% ${height}`; // End Line

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
            <svg className="w-full h-full" overflow="visible">
                {/* 1. The Ghost Path (Dim Trail) */}
                <path d={d.replace(/%/g, '%')} fill="none" stroke="#eab308" strokeWidth="2" strokeOpacity="0.1" />
                
                {/* 2. The Liquid Gold (Fills on Scroll) */}
                <motion.path 
                    d={d.replace(/%/g, '%')} 
                    fill="none" 
                    stroke="#eab308" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ pathLength }} // FRAMER MOTION MAGIC
                />

                {/* 3. The Glow Effect */}
                <motion.path 
                    d={d.replace(/%/g, '%')} 
                    fill="none" 
                    stroke="#eab308" 
                    strokeWidth="8"
                    strokeOpacity="0.2"
                    style={{ pathLength }}
                    filter="url(#glow)"
                />
                
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

// --- SUB-COMPONENT: THE NODE (Person) ---
function SynapseNode({ member, index, itemHeight, activeAudioId, setActiveAudioId }: any) {
    const isLeft = index % 2 === 0;
    const isPlaying = activeAudioId === member.id;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // AUDIO MANAGEMENT
    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play().catch(e => console.log("Audio play error", e));
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [isPlaying]);

    return (
        <div 
            className={`absolute w-full flex items-center px-6 md:px-24 perspective-1000 ${isLeft ? 'justify-start' : 'justify-end'}`}
            style={{ top: `${index * itemHeight}px`, height: `${itemHeight}px` }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative w-full md:w-[45%] flex ${isLeft ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} items-center gap-8 md:gap-12 group`}
            >
                {/* A. THE AVATAR (Interactive) */}
                <div 
                    className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 cursor-pointer z-20"
                    onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
                >
                    {/* The "Ignition" Flash */}
                    <div className="absolute inset-0 bg-gold-500 rounded-sm blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* The Connection Dot */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_20px_#eab308] z-50 animate-pulse
                        ${isLeft ? '-right-14 md:-right-14' : '-left-14 md:-left-14'}
                    `} />
                    
                    {/* The Frame */}
                    <div className={`relative w-full h-full rounded-sm overflow-hidden border border-white/10 bg-neutral-900 transition-all duration-700 shadow-2xl
                        ${isPlaying ? 'border-gold-500 scale-105 shadow-[0_0_50px_rgba(234,179,8,0.2)]' : 'group-hover:border-gold-500/50'}
                    `}>
                        {member.image_url ? (
                            <Image 
                                src={member.image_url} 
                                alt={member.name} 
                                fill 
                                className={`object-cover transition-all duration-1000 ${isPlaying ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-9xl font-serif text-white/5 group-hover:text-gold-500/10 transition-colors">{member.name.charAt(0)}</span>
                            </div>
                        )}

                        {/* Play Button Overlay */}
                        <div className={`absolute bottom-6 right-6 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${isPlaying ? 'bg-gold-500 text-black border-gold-500' : 'group-hover:scale-110'}`}>
                             {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>

                        {/* Audio Waveform (Visual) */}
                        {isPlaying && (
                             <div className="absolute bottom-6 left-6 flex items-end gap-1 h-6">
                                {[1,2,3,4,5].map(i => (
                                    <motion.div 
                                        key={i}
                                        animate={{ height: [4, 24, 4] }}
                                        transition={{ repeat: Infinity, duration: 0.4, delay: i * 0.1 }}
                                        className="w-1 bg-black/80" 
                                    />
                                ))}
                             </div>
                        )}
                    </div>

                    <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} onEnded={() => setActiveAudioId(null)} />
                </div>

                {/* B. THE DATA (Text) */}
                <div className={`text-center ${isLeft ? 'md:text-left' : 'md:text-right'} flex-1 z-10`}>
                    
                    {/* Role Pill */}
                    <div className={`inline-block px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md rounded-full mb-6 ${isPlaying ? 'border-gold-500/50' : ''}`}>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-bold">{member.role}</span>
                    </div>

                    {/* Name */}
                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-none mb-6">
                        {member.name}
                    </h2>

                    {/* Bio / Quote */}
                    <p className="font-serif italic text-white/50 text-xl leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
                        "{member.bio}"
                    </p>

                    {/* Profile Link */}
                    <Link href={`/artist/${member.slug}`} className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
                        <span>Profile</span>
                        <span className="w-8 h-px bg-neutral-700 group-hover:bg-white transition-colors" />
                    </Link>

                </div>

            </motion.div>
        </div>
    );
}

// --- SUB-COMPONENT: TIMELINE ---
function TimelineNav({ currentYear }: { currentYear: string }) {
    const years = ['2026', '2025', '2024', 'Faculty'];
    return (
        <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 px-10 py-4 rounded-full flex gap-8 shadow-2xl pointer-events-auto hover:border-gold-500/30 transition-colors">
             {years.map(year => (
                 <button 
                    key={year} 
                    className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${currentYear.includes(year) ? 'text-gold-500 font-bold scale-110' : 'text-neutral-500 hover:text-white'}`}
                 >
                     {year}
                 </button>
             ))}
        </div>
    )
}