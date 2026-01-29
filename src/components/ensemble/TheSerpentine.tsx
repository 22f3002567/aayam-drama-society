"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- ICONS ---
const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const PauseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export default function TheSerpentine({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#020202] overflow-hidden pb-40">
      
      {/* 1. ATMOSPHERE (Deep Void) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
          {/* Ambient Glows */}
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-gold-500/5 blur-[100px] rounded-full" />
      </div>

      {/* 2. HEADER (The Source) */}
      <header className="relative w-full h-[60vh] flex flex-col items-center justify-center z-10">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center"
         >
             <span className="text-gold-500 uppercase tracking-[0.5em] text-xs block mb-6 animate-pulse">
                The Connection / {currentYear}
             </span>
             <h1 className="text-7xl md:text-9xl font-serif text-white/90">
                 The Nerve.
             </h1>
         </motion.div>
         {/* Start of the Nerve */}
         <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold-500" />
      </header>

      {/* 3. THE SNAKE WALK */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
          {members.map((member, index) => (
              <SerpentineRow 
                key={member.id} 
                member={member} 
                index={index} 
                activeAudioId={activeAudioId}
                setActiveAudioId={setActiveAudioId}
              />
          ))}
      </div>

      {/* 4. FOOTER (The Timeline) */}
      <div className="relative z-20 w-full flex justify-center pt-20">
          <TimeCapsule currentYear={currentYear} />
      </div>

    </div>
  );
}

// --- THE ROW (One Segment of the Snake) ---
function SerpentineRow({ 
    member, index, activeAudioId, setActiveAudioId 
}: { 
    member: EnsembleMember; index: number; 
    activeAudioId: string | null; setActiveAudioId: (id: string | null) => void;
}) {
    const isLeft = index % 2 === 0; // Left side or Right side?
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // 3D LIFT EFFECT (Coming Forward)
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

    const isPlaying = activeAudioId === member.id;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Audio Logic
    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play().catch(() => {});
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [isPlaying]);

    return (
        <motion.div 
            ref={ref}
            style={{ opacity }}
            className="relative w-full h-[600px] md:h-[700px] flex justify-center"
        >
            
            {/* A. THE NERVE SEGMENT (SVG Curve) */}
            {/* This draws the line from Top-Center to the Image, then back to Bottom-Center */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full" preserveAspectRatio="none" overflow="visible">
                    {/* The Glow Layer */}
                    <motion.path 
                        d={isLeft 
                            ? "M 50% 0 Q 50% 10%, 25% 50% T 50% 100%" // Left Curve
                            : "M 50% 0 Q 50% 10%, 75% 50% T 50% 100%" // Right Curve
                        }
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* The Solid Core */}
                    <motion.path 
                         d={isLeft 
                            ? "M 50% 0 Q 50% 10%, 25% 50% T 50% 100%" 
                            : "M 50% 0 Q 50% 10%, 75% 50% T 50% 100%"
                        }
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* B. THE CONTENT LAYER */}
            {/* Positioned absolutely based on Left/Right logic to sit ON the nerve */}
            <div className={`absolute top-1/2 -translate-y-1/2 w-full flex items-center px-6 md:px-12 
                ${isLeft ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} 
            `}>
                
                {/* 1. THE IMAGE (Sits on the Curve) */}
                <div className={`w-full md:w-1/2 flex ${isLeft ? 'justify-start md:justify-end md:pr-12' : 'justify-end md:justify-start md:pl-12'} mb-8 md:mb-0`}>
                    <motion.div 
                        style={{ scale, y }}
                        whileHover={{ z: 50, scale: 1.05 }} // The "Come Forward" Effect
                        className="relative group cursor-pointer perspective-1000"
                        onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
                    >
                        {/* Divine Light Halo */}
                        <div className="absolute -inset-10 bg-gold-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* The Image Container */}
                        <div className={`relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] rounded-sm overflow-hidden border border-white/10 transition-all duration-700 bg-neutral-900 shadow-2xl
                            ${isPlaying ? 'border-gold-500 shadow-[0_0_40px_rgba(234,179,8,0.2)]' : 'group-hover:border-gold-500/40'}
                        `}>
                            {member.image_url ? (
                                <Image 
                                    src={member.image_url} 
                                    alt={member.name} 
                                    fill 
                                    className={`object-cover transition-all duration-700 ${isPlaying ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-8xl font-serif text-white/10 group-hover:text-gold-500/20">{member.name.charAt(0)}</span>
                                </div>
                            )}

                            {/* Audio Play Button Overlay */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                    <PlayIcon />
                                </div>
                            </div>
                            
                            {/* Playing State (Waveform) */}
                            {isPlaying && (
                                <div className="absolute bottom-4 right-4 flex gap-1 h-6 items-end">
                                    {[1,2,3,4].map(i => (
                                        <motion.div 
                                            key={i}
                                            animate={{ height: [4, 24, 4] }}
                                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                                            className="w-1 bg-gold-500"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} onEnded={() => setActiveAudioId(null)} />
                    </motion.div>
                </div>

                {/* 2. THE TEXT (Opposite Side) */}
                <div className={`w-full md:w-1/2 flex flex-col ${isLeft ? 'items-center md:items-start text-center md:text-left md:pl-12' : 'items-center md:items-end text-center md:text-right md:pr-12'}`}>
                    
                    <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}> {/* Parallax Text */}
                        
                        <div className="inline-block px-3 py-1 border border-white/10 rounded-full mb-4 bg-white/5 backdrop-blur-md">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500">{member.role}</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-none mb-6">
                            {member.name}
                        </h2>

                        <p className="font-serif italic text-white/50 text-lg md:text-xl mb-8 max-w-sm">
                            "{member.bio}"
                        </p>

                        {/* Connection Links */}
                        <div className={`flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-neutral-500 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                            <Link href={`/artist/${member.slug}`} className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                                Profile
                            </Link>
                            <button onClick={() => setActiveAudioId(isPlaying ? null : member.id)} className="hover:text-gold-500 transition-colors">
                                {isPlaying ? 'Pause' : 'Listen'}
                            </button>
                        </div>
                    
                    </motion.div>
                </div>

            </div>

        </motion.div>
    );
}

// --- THE TIME CAPSULE ---
function TimeCapsule({ currentYear }: { currentYear: string }) {
    const years = ['2026', '2025', '2024', 'Faculty'];
    return (
        <div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full flex gap-8 shadow-2xl">
             {years.map(year => (
                 <button 
                    key={year}
                    className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${currentYear.includes(year) ? 'text-gold-500 font-bold' : 'text-neutral-500 hover:text-white'}`}
                 >
                     {year}
                 </button>
             ))}
        </div>
    )
}