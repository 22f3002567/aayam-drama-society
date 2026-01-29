"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- GEOMETRY CONFIGURATION ---
// We define exactly where the "Organs" are so the Nerve strikes them perfectly.
const CONFIG = {
  itemHeight: 700,     // Height of one section
  center: 50,          // Center line
  textLeftX: 25,       // Where Left Text sits
  imageLeftX: 25,      // Where Left Image sits
  textRightX: 75,      // Where Right Text sits
  imageRightX: 75,     // Where Right Image sits
};

// --- ICONS ---
const PlayIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
const PauseIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>;

export default function TheSerpentineLayout({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  // SCROLL PHYSICS
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 }); // Stiffer spring = Faster feel

  const totalHeight = (members.length * CONFIG.itemHeight) + 500; 

  return (
    <div ref={containerRef} className="relative bg-[#020202] overflow-hidden" style={{ height: totalHeight }}>
      
      {/* 1. HEADER */}
      <div className="absolute top-0 w-full h-[300px] flex flex-col items-center justify-center z-20">
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
         >
             <span className="text-gold-500 uppercase tracking-[0.5em] text-xs block mb-4 animate-pulse">
                Neural Link / {currentYear}
             </span>
             <h1 className="text-6xl md:text-9xl font-serif text-white/90 tracking-tighter">
                 THE NERVE
             </h1>
         </motion.div>
      </div>

      {/* 2. THE STRIKER SVG (The Nerve) */}
      <StrikerSVG 
         count={members.length} 
         totalHeight={totalHeight} 
         pathLength={pathLength} 
      />

      {/* 3. THE CONTENT NODES */}
      <div className="absolute top-[300px] w-full left-0 z-30">
          {members.map((member, index) => (
              <StrikerNode 
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

// --- THE NERVE ENGINE (The "Cut" Logic) ---
function StrikerSVG({ count, totalHeight, pathLength }: { count: number, totalHeight: number, pathLength: any }) {
    
    // GENERATE THE "STRIKE" PATH
    // The path must: Center -> Slash to Name -> Slash to Profile -> Drop -> Repeat
    
    let d = "";
    
    // Start at Top Center
    d += `M ${CONFIG.center} 0 L ${CONFIG.center} 100 `; 

    for (let i = 0; i < count; i++) {
        const isLeftImage = i % 2 === 0; // Standard ZigZag: Left Image / Right Text
        const topY = 100 + (i * CONFIG.itemHeight);
        
        // Logic: The "Nerve" cuts the Name first, then the Profile.
        
        if (isLeftImage) {
            // Layout: Image is LEFT. Text is RIGHT.
            // Sequence: Cut Right (Name) -> Cut Left (Image)
            const nameY = topY + 200; // Text is usually higher/centered
            const imageY = topY + 350; // Image is centered
            
            // 1. Strike from Center to Right Text
            d += `L ${CONFIG.textRightX} ${nameY} `; 
            // 2. Strike across screen to Left Image
            d += `L ${CONFIG.imageLeftX} ${imageY} `; 
            // 3. Return to Center for next loop (or stay left? Let's go to center to reset)
            d += `L ${CONFIG.center} ${topY + CONFIG.itemHeight} `; 

        } else {
            // Layout: Image is RIGHT. Text is LEFT.
            // Sequence: Cut Left (Name) -> Cut Right (Image)
            const nameY = topY + 200;
            const imageY = topY + 350;

            // 1. Strike from Center to Left Text
            d += `L ${CONFIG.textLeftX} ${nameY} `;
            // 2. Strike across screen to Right Image
            d += `L ${CONFIG.imageRightX} ${imageY} `;
            // 3. Return to Center
            d += `L ${CONFIG.center} ${topY + CONFIG.itemHeight} `; 
        }
    }
    
    // Final Line to Bottom
    d += `L ${CONFIG.center} ${totalHeight}`;

    return (
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10" 
            viewBox={`0 0 100 ${totalHeight}`} 
            preserveAspectRatio="none" 
            overflow="visible"
        >
            {/* 1. Ghost Path (The "Scar") */}
            <path 
                d={d} 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="0.5" 
                strokeOpacity="0.2" 
                vectorEffect="non-scaling-stroke"
            />
            
            {/* 2. The Gold Nerve (Fills on Scroll) */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="1.5" 
                strokeLinecap="square" // Square caps for "sharp" feel
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
            />
            
            {/* 3. The "Pulse Beam" (The Fast Moving Energy) */}
            {/* This simulates a signal firing down the nerve repeatedly */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="white" 
                strokeWidth="2"
                strokeOpacity="0.8"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: [0, 0.1, 0], pathOffset: [0, 1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }} // Fast repeating pulse
                vectorEffect="non-scaling-stroke"
                filter="url(#glow)"
            />
            
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" />
                </filter>
            </defs>
        </svg>
    )
}

// --- THE NODE ---
function StrikerNode({ member, index, activeAudioId, setActiveAudioId }: any) {
    const isLeftImage = index % 2 === 0; // Left Image / Right Text
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
            className="absolute w-full flex items-center justify-center px-4 md:px-0"
            style={{ 
                top: `${index * CONFIG.itemHeight}px`, 
                height: `${CONFIG.itemHeight}px` 
            }}
        >
            <div className={`relative w-full max-w-6xl flex ${isLeftImage ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} items-center`}>
                
                {/* 1. THE IMAGE SIDE */}
                <div className={`w-1/2 flex ${isLeftImage ? 'justify-start md:pl-[12%]' : 'justify-end md:pr-[12%]'}`}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative group cursor-pointer z-20"
                        onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
                    >
                        {/* The Cut Line (Visual Only - Makes it look like line goes THROUGH) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gold-500/50 z-50 mix-blend-overlay" />

                        {/* Image Frame */}
                        <div className={`relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] overflow-hidden border-2 border-transparent bg-neutral-900 transition-all duration-300
                            ${isPlaying ? 'border-gold-500 shadow-[0_0_30px_#eab308]' : 'group-hover:border-gold-500/50'}
                        `}>
                            {/* Glitch Effect on Hover */}
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

                            {/* Play Icon */}
                            <div className={`absolute bottom-6 right-6 w-12 h-12 bg-black/80 flex items-center justify-center text-white border border-white/20 transition-all duration-300 ${isPlaying ? 'bg-gold-500 text-black' : 'group-hover:scale-110'}`}>
                                {isPlaying ? <PauseIcon /> : <PlayIcon />}
                            </div>
                        </div>
                        
                        <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} onEnded={() => setActiveAudioId(null)} />
                    </motion.div>
                </div>

                {/* 2. THE TEXT SIDE */}
                <div className={`w-1/2 flex flex-col ${isLeftImage ? 'items-end text-right pr-12' : 'items-start text-left pl-12'} z-10`}>
                    
                    {/* The Cut Line (Visual) */}
                    <div className={`relative w-max mb-6`}>
                         <div className="absolute top-1/2 -left-10 -right-10 h-[1px] bg-gold-500/30" /> {/* Strike through text area */}
                         <div className={`inline-block px-3 py-1 border border-gold-500/30 bg-black/50 backdrop-blur-sm`}>
                             <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">{member.role}</span>
                         </div>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-serif text-white leading-none mb-6 mix-blend-difference relative">
                        {member.name}
                        {/* A slash behind the name */}
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-gold-500/50 -rotate-2" />
                    </h2>

                    <p className="font-serif italic text-white/50 text-xl leading-relaxed mb-8 max-w-sm">
                        "{member.bio}"
                    </p>

                    <Link href={`/artist/${member.slug}`} className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white border-b border-transparent hover:border-white pb-1 transition-colors">
                        View Profile
                    </Link>

                </div>

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