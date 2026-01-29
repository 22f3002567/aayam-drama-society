"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- ICONS ---
const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const PauseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export default function TheSynapse({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // SHARED AUDIO STATE
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  // SCROLL PROGRESS (For global parallax)
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#020202] overflow-hidden pb-40">
      
      {/* 1. ATMOSPHERE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      {/* 2. HEADER (The Source) */}
      <header className="relative w-full h-[50vh] flex flex-col items-center justify-end z-10 pb-20">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
         >
             <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] block mb-4 animate-pulse">
                Neural Network / {currentYear}
             </span>
             <h1 className="text-6xl md:text-8xl font-serif text-white/90">
                 The Synapse
             </h1>
         </motion.div>
         
         {/* The First Nerve Ending (Start Point) */}
         <div className="absolute bottom-0 left-1/2 w-[2px] h-20 bg-gradient-to-b from-transparent to-gold-500 -translate-x-1/2" />
      </header>

      {/* 3. THE NERVE SYSTEM (The List) */}
      <div className="relative z-20 w-full">
          {members.map((member, index) => (
              <SynapseNode 
                key={member.id} 
                member={member} 
                index={index} 
                isLast={index === members.length - 1}
                activeAudioId={activeAudioId}
                setActiveAudioId={setActiveAudioId}
              />
          ))}
      </div>

      {/* 4. FOOTER CONNECTION */}
      <div className="relative z-10 w-full flex justify-center pt-20">
          <div className="h-40 w-px bg-gradient-to-b from-gold-500 to-transparent" />
      </div>

    </div>
  );
}

// --- THE NERVE SEGMENT (The "Snake" Logic) ---
function NerveSegment({ isEven }: { isEven: boolean }) {
    // This SVG draws the curve from Top-Center -> Out to Image -> Back to Bottom-Center
    // It creates the continuous "Snake" effect.
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
            <svg className="w-full h-full" preserveAspectRatio="none">
                <motion.path
                    // The Bezier Logic:
                    // M 50% 0 (Start Top Center)
                    // C 50% 50%, (Control Point 1)
                    //   0% 50% (or 100%), (Target: The Image Side)
                    //   50% 100% (End Bottom Center)
                    d={isEven 
                        ? "M 50 0 C 50 0, 50 200, 15 200 C 15 200, 15 250, 50 500" // Mobile Curve (Simplified)
                        : "M 50 0 C 50 0, 50 200, 85 200 C 85 200, 85 250, 50 500" 
                    }
                    // DESKTOP OVERRIDE (Media Queries in JS/CSS needed for perfect complex curves, 
                    // or we use simple CSS borders for the "Structure" and SVG for the "Glow")
                    // Let's use a simpler visual hack for robustness: A glowing border.
                    fill="none"
                    stroke="none"
                />
                
                {/* THE ACTUAL VISIBLE NERVE (Responsive CSS Implementation below is safer) */}
            </svg>
            
            {/* THE RESPONSIVE NERVE LINE (CSS Implementation) */}
            {/* This draws a line that curves out to the content */}
            <div className={`absolute top-0 w-1/2 h-full border-t border-b-0 border-gold-500/30 rounded-[100px] 
                ${isEven 
                    ? 'left-0 border-r rounded-br-[0px] rounded-tl-[0px] rounded-tr-[100px] border-l-0' // Curves Right
                    : 'right-0 border-l rounded-bl-[0px] rounded-tr-[0px] rounded-tl-[100px] border-r-0' // Curves Left
                }
                hidden md:block
            `} 
            style={{ 
                height: 'calc(100% + 100px)', // Overlap to connect
                top: '-50px',
                width: '40%', // Distance from center
                left: isEven ? '10%' : 'auto',
                right: isEven ? 'auto' : '10%'
            }}
            >
                {/* The Pulse Animation inside the nerve */}
                <div className={`absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-gold-500/50 to-transparent opacity-0 animate-pulse-nerve`} />
            </div>

             {/* CENTER LINE CONNECTORS (To fill gaps) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5 md:hidden" />
        </div>
    )
}

// --- THE NODE (Person + Nerve) ---
function SynapseNode({ 
    member, index, isLast, activeAudioId, setActiveAudioId 
}: { 
    member: EnsembleMember; index: number; isLast: boolean;
    activeAudioId: string | null; setActiveAudioId: (id: string | null) => void;
}) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // ACTIVATION ANIMATIONS
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
    const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

    const isPlaying = activeAudioId === member.id;
    const audioRef = useRef<HTMLAudioElement | null>(null);

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
            className="relative w-full max-w-7xl mx-auto py-24 md:py-32"
        >
            {/* 1. THE NERVE CONNECTION (Background) */}
            <NerveSegment isEven={isEven} />

            <div className={`relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* 2. THE NODE (Image) */}
                <motion.div 
                    style={{ scale }}
                    className="relative w-[300px] h-[300px] md:w-[400px] md:h-[500px] flex-shrink-0 group cursor-pointer"
                    onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
                >
                     {/* The Synapse Spark (Connection Point) */}
                     <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_20px_#eab308] z-50 
                        ${isEven ? '-left-2 md:-left-2' : '-right-2 md:-right-2'}
                     `}>
                        <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-50" />
                     </div>

                     {/* The Halo */}
                     <motion.div 
                        style={{ opacity: glowIntensity }}
                        className="absolute -inset-8 bg-gold-500/10 rounded-full blur-[40px]" 
                     />

                     {/* The Image Container */}
                     <div className={`relative w-full h-full rounded-full md:rounded-sm overflow-hidden border border-white/10 transition-all duration-700 
                        ${isPlaying ? 'border-gold-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]' : 'group-hover:border-gold-500/50'}
                     `}>
                        {member.image_url ? (
                            <Image 
                                src={member.image_url} 
                                alt={member.name} 
                                fill 
                                className={`object-cover transition-all duration-700 ${isPlaying ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0'}`}
                            />
                        ) : (
                            <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                                <span className="text-8xl font-serif text-white/10">{member.name.charAt(0)}</span>
                            </div>
                        )}
                        
                        {/* Audio Waveform Overlay */}
                        {isPlaying && (
                             <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-4 gap-1">
                                {[1,2,3,4,5].map(i => (
                                    <motion.div 
                                        key={i}
                                        animate={{ height: [5, 20, 5] }}
                                        transition={{ repeat: Infinity, duration: 0.4, delay: i * 0.1 }}
                                        className="w-1 bg-gold-500" 
                                    />
                                ))}
                             </div>
                        )}
                     </div>
                     
                     <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} onEnded={() => setActiveAudioId(null)} />
                </motion.div>

                {/* 3. THE SIGNAL (Text) */}
                <div className={`text-center md:text-left w-full max-w-md ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    
                    <div className={`inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 ${isPlaying ? 'border-gold-500/50' : ''}`}>
                         <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">
                            {member.role}
                         </span>
                    </div>

                    <h2 className={`text-5xl md:text-7xl font-serif text-white leading-none mb-6 transition-colors duration-500 ${isPlaying ? 'text-white' : 'text-white/80'}`}>
                        {member.name}
                    </h2>

                    <p className="font-serif italic text-white/50 text-xl leading-relaxed mb-8">
                        "{member.bio}"
                    </p>

                    {/* Links */}
                    <div className={`flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-neutral-500 justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                         <Link href={`/artist/${member.slug}`} className="hover:text-gold-500 transition-colors border-b border-transparent hover:border-gold-500 pb-1">
                            Profile
                         </Link>
                         <button 
                            onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
                            className="hover:text-white transition-colors flex items-center gap-2"
                         >
                            {isPlaying ? 'Pause Signal' : 'Listen'}
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                         </button>
                    </div>

                </div>

            </div>
        </motion.div>
    );
}