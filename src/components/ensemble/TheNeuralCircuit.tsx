"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- CONFIGURATION ---
const CONFIG = {
  rowHeight: 800,      // Height of one section in pixels
  buffer: 600,         // Header/Footer space
};

// --- HOOK: GET WINDOW SIZE ---
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

// --- ICONS ---
const PlayIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
const PauseIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>;

export default function TheNeuralCircuit({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const { width } = useWindowSize(); // Real-time Width

  // SCROLL PHYSICS
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  
  // We need to wait for client-side width to draw the SVG correctly
  const [isReady, setIsReady] = useState(false);
  useEffect(() => setIsReady(true), []);

  const totalHeight = (members.length * CONFIG.rowHeight) + CONFIG.buffer;

  return (
    <div ref={containerRef} className="relative bg-[#020202] overflow-hidden" style={{ height: totalHeight }}>
      
      {/* 1. HEADER */}
      <div className="absolute top-0 w-full h-[400px] flex flex-col items-center justify-center z-20">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
         >
             <span className="text-gold-500 uppercase tracking-[0.5em] text-xs block mb-4 animate-pulse">
                The Network / {currentYear}
             </span>
             <h1 className="text-6xl md:text-9xl font-serif text-white/90 tracking-tighter">
                 THE SIGNAL
             </h1>
         </motion.div>
      </div>

      {/* 2. THE PIXEL-PERFECT SVG (The Nerve) */}
      {isReady && width > 0 && (
          <NeuralSVG 
             members={members}
             width={width}
             totalHeight={totalHeight} 
             pathLength={pathLength} 
          />
      )}

      {/* 3. THE CONTENT NODES (The Organs) */}
      <div className="absolute top-[400px] w-full left-0 z-30">
          {members.map((member, index) => (
              <CircuitNode 
                key={member.id} 
                member={member} 
                index={index} 
                width={width} // Pass width to align HTML with SVG
                activeAudioId={activeAudioId}
                setActiveAudioId={setActiveAudioId}
              />
          ))}
      </div>

      {/* 4. FOOTER TIMELINE */}
      <div className="absolute bottom-20 w-full flex justify-center z-40">
          <TimeCapsule currentYear={currentYear} />
      </div>

    </div>
  );
}

// --- COMPONENT: THE SVG ENGINE ---
function NeuralSVG({ members, width, totalHeight, pathLength }: { members: EnsembleMember[], width: number, totalHeight: number, pathLength: any }) {
    
    // CALCULATE PIXEL COORDINATES
    const center = width / 2;
    const leftX = width * 0.20;  // 20%
    const rightX = width * 0.80; // 80%

    // Text & Image Offsets (Must match HTML CSS)
    const textOffsetY = 300; 
    const imgOffsetY = 450; 

    // BUILD THE PATH
    let d = `M ${center} 0 L ${center} 150 `; 

    members.forEach((_, i) => {
        const isLeft = i % 2 === 0;
        const rowStart = 150 + (i * CONFIG.rowHeight);
        
        // Define Targets
        const textX = isLeft ? leftX : rightX;  // Text position
        const imgX = isLeft ? leftX : rightX;   // Image position (Same side or cross? Let's Cross)
        
        // Wait, "Live Wire" cuts Text (Left) then Image (Right) or vice versa.
        // Let's alternate:
        // Left Row: Text is Left (20%), Image is Left (20%)? No, they overlap.
        // Let's do: Left Row = Image Left (20%), Text Right (80%).
        
        const targetTextX = isLeft ? rightX : leftX; // Text on opposite side of Image
        const targetImgX = isLeft ? leftX : rightX;  // Image on primary side
        
        const absTextY = (i * CONFIG.rowHeight) + textOffsetY;
        const absImgY = (i * CONFIG.rowHeight) + imgOffsetY;
        
        // DRAW THE CUT
        // 1. Slash to Text Center
        d += `L ${targetTextX} ${absTextY} `;
        
        // 2. Slash to Image Center
        d += `L ${targetImgX} ${absImgY} `;
        
        // 3. Drop to Center (Reset for next row)
        d += `L ${center} ${absImgY + 300} `;
    });
    
    // End line
    d += `L ${center} ${totalHeight}`;

    return (
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible" 
            style={{ width: '100%', height: '100%' }}
        >
            {/* 1. Ghost Path (Visible Track) */}
            <path 
                d={d} 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1" 
                strokeOpacity="0.3" 
            />
            
            {/* 2. The Gold Nerve (Fills on Scroll) */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="3" // THICKER LINE
                strokeLinecap="square"
                style={{ pathLength }}
                className="mix-blend-exclusion" // THE CUT EFFECT
            />
            
            {/* 3. The Pulse Beam (White Energy) */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="white" 
                strokeWidth="4"
                strokeOpacity="1"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: [0, 0.2, 0], pathOffset: [0, 1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                filter="url(#glow)"
                className="mix-blend-screen"
            />
            
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" />
                </filter>
            </defs>
        </svg>
    )
}

// --- COMPONENT: THE NODE ---
function CircuitNode({ member, index, width, activeAudioId, setActiveAudioId }: any) {
    const isLeft = index % 2 === 0;
    const isPlaying = activeAudioId === member.id;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Coordinate Math (Must match SVG)
    // Left Row: Image Left (20%), Text Right (80%)
    const imgX = isLeft ? (width * 0.20) : (width * 0.80);
    const textX = isLeft ? (width * 0.80) : (width * 0.20);
    
    // Vertical offsets within the 800px row
    const textY = 300 - 50; // -50 to center text on line
    const imgY = 450 - 175; // -175 to center image on line

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.play().catch(() => {});
        else { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    }, [isPlaying]);

    return (
        <div 
            className="absolute w-full"
            style={{ 
                top: `${index * CONFIG.rowHeight}px`, 
                height: `${CONFIG.rowHeight}px` 
            }}
        >
            {/* 1. TEXT NODE */}
            <div 
                className={`absolute w-[400px] flex flex-col ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}
                style={{ 
                    top: `${textY}px`,
                    left: `${textX}px`,
                    transform: 'translateX(-50%)', // Center on the Coordinate
                    zIndex: 20
                }}
            >
                <div className={`inline-block px-3 py-1 border border-gold-500/30 bg-black/80 backdrop-blur-md mb-4`}>
                     <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">{member.role}</span>
                </div>
                
                {/* The Text Cut Effect */}
                <h2 className="text-6xl md:text-8xl font-serif text-white leading-none mix-blend-difference relative z-10">
                    {member.name}
                </h2>

                <p className="font-serif italic text-white/50 text-xl leading-relaxed mt-6">
                    "{member.bio}"
                </p>
                <Link href={`/artist/${member.slug}`} className="mt-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white border-b border-transparent hover:border-white pb-1 transition-colors">
                    View Profile
                </Link>
            </div>

            {/* 2. IMAGE NODE */}
            <div 
                className="absolute"
                style={{ 
                    top: `${imgY}px`,
                    left: `${imgX}px`,
                    transform: 'translateX(-50%)',
                    zIndex: 30
                }}
            >
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group cursor-pointer"
                    onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
                >
                    {/* Image Frame */}
                    <div className={`relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] overflow-hidden border-2 bg-neutral-900 transition-all duration-300
                        ${isPlaying ? 'border-gold-500 shadow-[0_0_40px_#eab308] scale-105' : 'border-transparent group-hover:border-gold-500/50'}
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
                                <span className="text-8xl font-serif text-white/10">{member.name.charAt(0)}</span>
                            </div>
                        )}

                        <div className={`absolute bottom-6 right-6 w-12 h-12 bg-black/80 flex items-center justify-center text-white border border-white/20 transition-all duration-300 ${isPlaying ? 'bg-gold-500 text-black' : 'group-hover:scale-110'}`}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>
                    </div>
                    <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} onEnded={() => setActiveAudioId(null)} />
                </motion.div>
            </div>

        </div>
    );
}

// --- TIMELINE ---
function TimeCapsule({ currentYear }: { currentYear: string }) {
    const years = ['2026', '2025', '2024', 'Faculty'];
    return (
        <div className="bg-[#0A0A0A] border border-white/20 px-10 py-4 flex gap-8 shadow-2xl pointer-events-auto">
             {years.map(year => (
                 <button 
                    key={year} 
                    className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${currentYear.includes(year) ? 'text-gold-500 font-bold' : 'text-neutral-500 hover:text-white'}`}
                 >
                     {year}
                 </button>
             ))}
        </div>
    )
}