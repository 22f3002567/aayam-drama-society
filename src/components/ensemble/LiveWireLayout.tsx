"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- THE IRONCLAD CONFIGURATION ---
// We define the geometry here. HTML and SVG both obey this.
const CONFIG = {
  rowHeight: 800,      // Total height of one member's section
  center: 50,          // 50% (Center of screen)
  
  // Left Layout (Image Left / Text Right)
  leftImgX: 20,        // 20% width
  leftTextX: 70,       // 70% width
  
  // Right Layout (Text Left / Image Right)
  rightTextX: 30,      // 30% width
  rightImgX: 80,       // 80% width

  // Vertical Offsets within the row (0 to 800)
  textY: 300,          // Text sits at 300px from top of row
  imgY: 450,           // Image sits at 450px from top of row
};

// --- ICONS ---
const PlayIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
const PauseIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>;

export default function TheLiveWireLayout({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  // SCROLL PHYSICS
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // CALCULATE HEIGHT
  const totalHeight = (members.length * CONFIG.rowHeight) + 600; // Buffer

  return (
    <div ref={containerRef} className="relative bg-[#020202] overflow-hidden" style={{ height: totalHeight }}>
      
      {/* 1. HEADER */}
      <div className="absolute top-0 w-full h-[400px] flex flex-col items-center justify-center z-20">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
         >
             <span className="text-gold-500 uppercase tracking-[0.5em] text-xs block mb-4 animate-pulse">
                Live Wire / {currentYear}
             </span>
             <h1 className="text-6xl md:text-9xl font-serif text-white/90 tracking-tighter">
                 THE SIGNAL
             </h1>
         </motion.div>
      </div>

      {/* 2. THE LIVE WIRE SVG (The Nerve) */}
      <LiveWireSVG 
         count={members.length} 
         totalHeight={totalHeight} 
         pathLength={pathLength} 
      />

      {/* 3. THE CONTENT NODES (The Organs) */}
      <div className="absolute top-[400px] w-full left-0 z-30">
          {members.map((member, index) => (
              <LiveWireNode 
                key={member.id} 
                member={member} 
                index={index} 
                activeAudioId={activeAudioId}
                setActiveAudioId={setActiveAudioId}
              />
          ))}
      </div>

      {/* 4. FOOTER */}
      <div className="absolute bottom-20 w-full flex justify-center z-40">
          <TimeCapsule currentYear={currentYear} />
      </div>

    </div>
  );
}

// --- COMPONENT: THE SVG ENGINE ---
function LiveWireSVG({ count, totalHeight, pathLength }: { count: number, totalHeight: number, pathLength: any }) {
    
    // BUILD THE PATH STRING
    // Logic: Center -> Slash to Text -> Slash to Image -> Drop to Center
    let d = `M ${CONFIG.center} 0 L ${CONFIG.center} 150 `; 

    for (let i = 0; i < count; i++) {
        const isLeft = i % 2 === 0;
        const startY = 150 + (i * CONFIG.rowHeight); // Visual start of section
        
        // Coordinates for this row
        const textX = isLeft ? CONFIG.rightTextX : CONFIG.rightTextX; // Text is always on Right? No, alternating.
        // Wait, standard zig zag: 
        // Left Layout: Image Left (20), Text Right (70)
        // Right Layout: Text Left (30), Image Right (80)
        
        const targetTextX = isLeft ? CONFIG.leftTextX : CONFIG.rightTextX;
        const targetImgX = isLeft ? CONFIG.leftImgX : CONFIG.rightImgX;
        
        // Y Positions relative to the loop
        const absTextY = (i * CONFIG.rowHeight) + CONFIG.textY;
        const absImgY = (i * CONFIG.rowHeight) + CONFIG.imgY;
        
        // DRAWING COMMANDS
        
        // 1. Drop from Center
        // d += `L ${CONFIG.center} ${absTextY - 50} `; 
        
        // 2. Slash to Text
        d += `L ${targetTextX} ${absTextY} `;
        
        // 3. Slash to Image
        d += `L ${targetImgX} ${absImgY} `;
        
        // 4. Return to Center (below image)
        d += `L ${CONFIG.center} ${absImgY + 200} `;
    }
    
    // End line
    d += `L ${CONFIG.center} ${totalHeight}`;

    return (
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10" 
            viewBox={`0 0 100 ${totalHeight}`} // 0-100 Width Coordinate System
            preserveAspectRatio="none" 
            overflow="visible"
        >
            {/* 1. Ghost Path (The "Scar") */}
            <path 
                d={d} 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="0.3" 
                strokeOpacity="0.2" 
                vectorEffect="non-scaling-stroke"
            />
            
            {/* 2. The Gold Nerve (Fills on Scroll) */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1.5" 
                strokeLinecap="square"
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
            />
            
            {/* 3. The Pulse Beam (Fast White Energy) */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="white" 
                strokeWidth="3"
                strokeOpacity="0.8"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: [0, 0.2, 0], pathOffset: [0, 1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                filter="url(#glow)"
                vectorEffect="non-scaling-stroke"
                style={{ mixBlendMode: "overlay" }}
            />
            
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" />
                </filter>
            </defs>
        </svg>
    )
}

// --- COMPONENT: THE NODE ---
function LiveWireNode({ member, index, activeAudioId, setActiveAudioId }: any) {
    const isLeft = index % 2 === 0;
    const isPlaying = activeAudioId === member.id;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Audio Sync
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
        <div 
            className="absolute w-full px-4 md:px-0"
            // DETERMINISTIC POSITIONING (Matches SVG Config exactly)
            style={{ 
                top: `${index * CONFIG.rowHeight}px`, 
                height: `${CONFIG.rowHeight}px` 
            }}
        >
            {/* We use a relative grid inside this absolute row.
               Text is at CONFIG.textY. Image is at CONFIG.imgY.
            */}
            
            {/* 1. TEXT NODE */}
            <div 
                className={`absolute w-[40%] ${isLeft ? 'text-right' : 'text-left'}`}
                style={{ 
                    top: `${CONFIG.textY - 50}px`, // Slight offset to center vertically on the line 
                    left: isLeft ? `${CONFIG.leftTextX - 40}%` : `${CONFIG.rightTextX}%`, // Align roughly
                    zIndex: 20
                }}
            >
                <div className={`inline-block px-3 py-1 border border-gold-500/30 bg-black/80 backdrop-blur-md mb-4`}>
                     <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">{member.role}</span>
                </div>
                
                {/* Visual "Cut" Line through Name */}
                <div className="relative inline-block">
                    <h2 className="text-6xl md:text-8xl font-serif text-white leading-none relative z-10 mix-blend-difference">
                        {member.name}
                    </h2>
                </div>

                <p className="font-serif italic text-white/50 text-xl leading-relaxed mt-6">
                    "{member.bio}"
                </p>
            </div>

            {/* 2. IMAGE NODE */}
            <div 
                className="absolute"
                style={{ 
                    top: `${CONFIG.imgY - 175}px`, // Centered on the line (450 - half height)
                    left: isLeft ? `${CONFIG.leftImgX}%` : `${CONFIG.rightImgX}%`,
                    transform: 'translateX(-50%)', // Center the div on the coordinate
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
                    {/* The "Cut" Line Visual */}
                    <div className="absolute top-1/2 -left-10 -right-10 h-[2px] bg-gold-500/50 z-50 mix-blend-overlay rotate-12" />

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