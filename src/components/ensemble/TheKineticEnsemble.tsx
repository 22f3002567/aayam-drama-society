"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- 1. THE PHYSICS CONSTANTS ---
const CONFIG = {
  rowHeight: 800,      
  leftAnchor: 0.15,    // Left Image Anchor (15%)
  rightAnchor: 0.85,   // Right Image Anchor (85%)
  textOffset: 0.35,    // How far text is pushed from center
};

// --- 2. UTILS ---
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function updateSize() { setSize({ width: window.innerWidth, height: window.innerHeight }); }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const PlayIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
const PauseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>;

// --- 3. MAIN COMPONENT ---
export default function TheKineticEnsemble({ members, currentYear }: { members: EnsembleMember[], currentYear: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const { width } = useWindowSize();

  // Scroll Physics: Heavy Mass, High Tension
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const springScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 15, mass: 1 });
  
  const totalHeight = (members.length * CONFIG.rowHeight) + 800; 

  return (
    <div ref={containerRef} className="relative bg-[#020202] overflow-hidden" style={{ height: totalHeight }}>
      
      {/* A. THE QUANTUM FIELD (Background) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      {/* B. THE PLASMA ARC (SVG Layer) */}
      {width > 0 && (
          <PlasmaArc 
             members={members}
             width={width}
             totalHeight={totalHeight} 
             scrollProgress={springScroll} 
          />
      )}

      {/* C. HEADER */}
      <div className="absolute top-0 w-full h-[400px] flex flex-col items-center justify-center z-20 pointer-events-none">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
         >
             <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] block mb-4 animate-pulse">
                System Online / {currentYear}
             </span>
             {/* THE TITLE CUT */}
             <div className="relative inline-block">
                <h1 className="text-7xl md:text-9xl font-serif text-white tracking-tighter mix-blend-difference relative z-10">
                    THE LINKAGE
                </h1>
                {/* Visual "Cut" Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gold-500 blur-[1px]" />
             </div>
         </motion.div>
      </div>

      {/* D. THE NODES */}
      <div className="absolute top-[400px] w-full left-0 z-10">
          {members.map((member, index) => (
              <QuantumNode 
                key={member.id} 
                member={member} 
                index={index} 
                width={width}
                activeAudioId={activeAudioId}
                setActiveAudioId={setActiveAudioId}
                scrollProgress={springScroll}
                totalMembers={members.length}
              />
          ))}
      </div>

      {/* E. FOOTER */}
      <div className="absolute bottom-20 w-full flex justify-center z-40">
          <TimeCapsule currentYear={currentYear} />
      </div>

    </div>
  );
}

// --- 4. THE PLASMA ARC ENGINE ---
interface PlasmaArcProps {
    members: EnsembleMember[];
    width: number;
    totalHeight: number;
    scrollProgress: MotionValue<number>;
}

function PlasmaArc({ members, width, totalHeight, scrollProgress }: PlasmaArcProps) {
    
    // --- TOPOLOGY: THE "STITCH" ---
    // Instead of loops, we stitch directly through the content centers.
    
    let d = `M ${width * 0.5} 0 `; // Start Top Center

    members.forEach((_, i) => {
        const isLeft = i % 2 === 0;
        
        // Define coordinates
        const rowTop = 200 + (i * CONFIG.rowHeight);
        const rowCenter = rowTop + (CONFIG.rowHeight / 2);
        
        // Target 1: The Text Center (We cut through it)
        // If Image is Left, Text is Right.
        const textX = isLeft ? (width * (1 - CONFIG.leftAnchor)) : (width * CONFIG.leftAnchor);
        const textY = rowCenter - 50; // Text is slightly above image center
        
        // Target 2: The Image Center (We anchor to it)
        const imgX = isLeft ? (width * CONFIG.leftAnchor) : (width * CONFIG.rightAnchor);
        const imgY = rowCenter;

        if (i === 0) {
            // First drop: Center -> Text -> Image
            d += `L ${width * 0.5} ${textY - 100} `; // Drop
            d += `C ${width * 0.5} ${textY}, ${textX} ${textY - 50}, ${textX} ${textY} `; // Curve to Text
            d += `L ${imgX} ${imgY} `; // SLASH to Image
        } else {
            // Subsequent stitches: Previous Image -> Next Text -> Next Image
            const prevImgX = !isLeft ? (width * CONFIG.leftAnchor) : (width * CONFIG.rightAnchor);
            const prevImgY = 200 + ((i - 1) * CONFIG.rowHeight) + (CONFIG.rowHeight / 2);
            
            // The "Cross-Thread" Curve
            // Pull control points to create tension
            d += `C ${prevImgX} ${prevImgY + 300}, ${textX} ${textY - 300}, ${textX} ${textY} `;
            d += `L ${imgX} ${imgY} `; // SLASH to Image
        }
    });
    
    // Tail
    d += `C ${width * 0.5} ${totalHeight - 300}, ${width * 0.5} ${totalHeight - 100}, ${width * 0.5} ${totalHeight}`;

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible">
            <defs>
                {/* THE "QUANTUM" FILTER 
                   This uses feTurbulence to displace the stroke, making it look like electricity/plasma
                */}
                <filter id="plasma-arc" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                    <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
                    <feDisplacementMap in="blur" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode />
                    </feMerge>
                </filter>
                
                {/* GLOW BLOOM */}
                <filter id="bloom">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* 1. GHOST LINE (The Guide) */}
            <path d={d} fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

            {/* 2. THE CORE (White Hot) */}
            {/* mix-blend-difference is key for the "Cut" effect over text */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="white" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: scrollProgress }}
                className="mix-blend-difference" 
            />
            
            {/* 3. THE PLASMA SHEATH (Gold Energy) */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="#eab308" 
                strokeWidth="6"
                strokeLinecap="round"
                strokeOpacity="0.8"
                style={{ pathLength: scrollProgress }}
                filter="url(#plasma-arc)" // Applies the turbulence
                className="mix-blend-screen"
            />
            
            {/* 4. THE PULSE (Moving Data) */}
            <motion.path 
                d={d} 
                fill="none" 
                stroke="white" 
                strokeWidth="4"
                strokeDasharray="0 1" // Creates a 'dot'
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: [0, 0.05, 0], pathOffset: [0, 1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                filter="url(#bloom)"
                className="mix-blend-overlay"
            />
        </svg>
    )
}

// --- 5. THE NODE (Text & Image) ---
function QuantumNode({ member, index, width, activeAudioId, setActiveAudioId, scrollProgress, totalMembers }: any) {
    const isLeft = index % 2 === 0;
    const isPlaying = activeAudioId === member.id;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // --- COORDINATES ---
    // Text on the opposite side of image
    // Image at 15% (Left) or 85% (Right)
    const imgX = isLeft ? (width * CONFIG.leftAnchor) : (width * CONFIG.rightAnchor);
    // Text pushes towards center but keeps gap
    const textX = isLeft ? (width * (1 - CONFIG.leftAnchor)) : (width * CONFIG.leftAnchor);
    
    const rowCenter = 400; // Half of 800 rowHeight
    const textY = rowCenter - 50; 
    const imgY = rowCenter;

    // --- "WAKE UP" LOGIC ---
    // Calculate if the "Energy" has reached this node based on scroll
    const triggerPoint = (index + 0.5) / totalMembers;
    const isActive = useTransform(scrollProgress, [triggerPoint - 0.05, triggerPoint], [0, 1]);
    
    const textGlitch = useTransform(isActive, [0, 1], [-20, 0]);
    const imgBloom = useTransform(isActive, [0, 1], [0, 1]);

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.play().catch(() => {});
        else { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    }, [isPlaying]);

    return (
        <div className="absolute w-full" style={{ top: `${index * CONFIG.rowHeight}px`, height: `${CONFIG.rowHeight}px` }}>
            
            {/* A. TEXT BLOCK (The Target) */}
            <motion.div 
                className={`absolute w-[400px] flex flex-col ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}
                style={{ 
                    top: `${textY}px`, 
                    left: `${textX}px`, 
                    transform: 'translateX(-50%)', 
                    zIndex: 20,
                    x: textGlitch, // Slide in on energy hit
                    opacity: isActive // Fade in on energy hit
                }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className={`h-[1px] w-12 bg-gold-500/50 ${isLeft ? 'order-last' : 'order-first'}`} />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold">{member.role}</span>
                </div>
                
                {/* THE CUT EFFECT:
                   We put a black block BEHIND the text. 
                   The White SVG Line (mix-blend-difference) crosses the White Text.
                   White on White (Difference) = Black.
                   This creates the "Negative Space" cut through the letters.
                */}
                <h2 className="text-6xl md:text-8xl font-serif text-white leading-none relative z-10 mix-blend-difference">
                    {member.name}
                </h2>
                
                <p className="font-serif italic text-white/50 text-xl leading-relaxed mt-6">
                    "{member.bio}"
                </p>
                
                <Link href={`/artist/${member.slug}`} className="mt-8 group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
                    <span>Data Profile</span>
                    <span className="block w-2 h-2 border border-neutral-600 group-hover:bg-gold-500 transition-colors" />
                </Link>
            </motion.div>

            {/* B. IMAGE BLOCK (The Anchor) */}
            <div className="absolute" style={{ top: `${imgY}px`, left: `${imgX}px`, transform: 'translateX(-50%)', zIndex: 30 }}>
                <motion.div 
                    style={{ 
                        opacity: isActive, // Light up on energy hit
                        filter: useTransform(imgBloom, v => `brightness(${0.5 + (v as number * 0.5)}) grayscale(${1 - (v as number)})`) // Bloom from dark B&W to Color
                    }}
                    whileHover={{ scale: 1.05 }} 
                    className="relative group cursor-pointer" 
                    onClick={() => setActiveAudioId(isPlaying ? null : member.id)}
                >
                    <div className={`relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] overflow-hidden bg-black transition-all duration-300 ${isPlaying ? 'border border-gold-500 shadow-[0_0_100px_#eab308]' : ''}`}>
                        
                        {/* THE PORT EFFECT: The line essentially "feeds" into this image. */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gold-500 shadow-[0_0_20px_#eab308] z-20 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />

                        {member.image_url ? (
                            <Image src={member.image_url} alt={member.name} fill className={`object-cover transition-all duration-1000`} />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center border border-white/10"><span className="text-9xl font-serif text-white/10">{member.name.charAt(0)}</span></div>
                        )}
                        
                        {/* Audio Pulse */}
                        {isPlaying && <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay animate-pulse" />}
                        
                        <div className={`absolute bottom-6 right-6 w-12 h-12 bg-black/80 flex items-center justify-center text-white border border-white/20 transition-all duration-300 ${isPlaying ? 'bg-gold-500 text-black' : 'group-hover:bg-white group-hover:text-black'}`}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>
                    </div>
                    <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} onEnded={() => setActiveAudioId(null)} />
                </motion.div>
            </div>
        </div>
    );
}

// --- 6. TIMELINE ---
function TimeCapsule({ currentYear }: { currentYear: string }) {
    const years = ['2026', '2025', '2024', 'Faculty'];
    return (
        <div className="bg-black border border-white/20 px-10 py-4 flex gap-8 shadow-2xl pointer-events-auto z-50">
             {years.map(year => (
                 <button key={year} className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${currentYear.includes(year) ? 'text-gold-500 font-bold' : 'text-neutral-500 hover:text-white'}`}>{year}</button>
             ))}
        </div>
    )
}