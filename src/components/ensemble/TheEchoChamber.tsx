"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EnsembleMember } from "@/types/schema";

// --- THE CONSTELLATION MAP ---
// We pre-define positions to ensure a balanced composition (Rule of Thirds), 
// rather than random chaos which might overlap faces.
const POSITIONS = [
    { top: "20%", left: "20%", depth: 1.2, scale: 1.1 }, // Lead (Close)
    { top: "30%", left: "70%", depth: 0.8, scale: 0.9 }, // Support (Mid)
    { top: "60%", left: "40%", depth: 1.0, scale: 1.0 }, // Center (Mid-Close)
    { top: "70%", left: "80%", depth: 0.5, scale: 0.7 }, // Background (Far)
    { top: "75%", left: "15%", depth: 0.6, scale: 0.75 }, // Background (Far)
    { top: "15%", left: "50%", depth: 0.4, scale: 0.6 }, // Deep Background (Very Far)
];

export default function TheEchoChamber({ members }: { members: EnsembleMember[] }) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // --- PHYSICS ENGINE (Mouse Tracking) ---
    // We use MotionValues instead of State for 60fps performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the raw mouse data (The "Steadicam" effect)
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        // Normalize mouse from -1 to 1 (Center is 0)
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth) - 0.5;
        const y = (e.clientY / innerHeight) - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden bg-[#050505] cursor-none" // We hide default cursor
        >
            {/* 1. AMBIENT LIGHTING (The Fog) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gold-500/5 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04]" /> 
            </div>

            {/* 2. THE CUSTOM CURSOR ( The Lantern ) */}
            <CustomLantern mouseX={mouseX} mouseY={mouseY} hoveredId={hoveredId} />

            {/* 3. THE ACTORS (Floating Shards) */}
            <div className="absolute inset-0 w-full h-full perspective-1000">
                {members.map((member, i) => {
                    const pos = POSITIONS[i % POSITIONS.length];
                    return (
                        <FloatingActor 
                            key={member.id}
                            member={member}
                            position={pos}
                            mouseX={smoothX}
                            mouseY={smoothY}
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                    );
                })}
            </div>

            {/* 4. TITLE (Fixed UI) */}
            <div className="absolute bottom-10 left-10 z-50 pointer-events-none">
                 <h1 className="text-white/20 font-serif text-8xl leading-none">The<br/>Ensemble</h1>
            </div>

        </div>
    );
}

// --- SUB-COMPONENT: THE FLOATING ACTOR ---
function FloatingActor({ member, position, mouseX, mouseY, hoveredId, setHoveredId }: any) {
    const isHovered = hoveredId === member.id;
    const isBlurred = hoveredId !== null && !isHovered;

    // PARALLAX MATH:
    // Move opposite to mouse (-50 or -30 pixels based on depth)
    const x = useTransform(mouseX, (val: number) => val * -100 * position.depth);
    const y = useTransform(mouseY, (val: number) => val * -100 * position.depth);

    // AUDIO REF
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (isHovered) {
            audioRef.current?.play().catch(() => {});
        } else {
            audioRef.current?.pause();
            if(audioRef.current) audioRef.current.currentTime = 0;
        }
    }, [isHovered]);

    return (
        <motion.div
            style={{ 
                top: position.top, 
                left: position.left, 
                x, 
                y,
                zIndex: Math.floor(position.depth * 10) // Closer items on top
            }}
            className="absolute"
        >
            <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                    opacity: isBlurred ? 0.3 : 1, 
                    scale: isHovered ? 1.3 : (isBlurred ? position.scale * 0.9 : position.scale),
                    filter: isBlurred ? "blur(8px) grayscale(100%)" : "blur(0px) grayscale(0%)"
                }}
                transition={{ duration: 0.6, ease: "circOut" }}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
            >
                {/* A. THE CARD (Glass Shard) */}
                <div className={`
                    relative w-[240px] h-[320px] overflow-hidden rounded-sm border transition-all duration-500
                    ${isHovered ? 'border-gold-500 shadow-[0_0_50px_rgba(234,179,8,0.3)]' : 'border-white/10 bg-white/5'}
                `}>
                    {member.image_url ? (
                        <Image 
                            src={member.image_url} 
                            alt={member.name} 
                            fill 
                            className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'grayscale scale-100'}`}
                        />
                    ) : (
                        // Fallback Avatar
                        <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900">
                            <span className="text-6xl font-serif text-white/10">{member.name.charAt(0)}</span>
                        </div>
                    )}
                    
                    {/* B. THE OVERLAY INFO (Appears on Hover) */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-gold-500 text-[10px] uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{member.role}</span>
                        <h2 className="text-3xl text-white font-serif leading-none translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{member.name}</h2>
                        <p className="text-white/60 text-xs mt-2 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 italic">"{member.bio}"</p>
                    </div>
                </div>

                {/* C. THE AUDIO */}
                <audio ref={audioRef} src={member.audio_url || "/mock.mp3"} loop />
            </motion.div>
        </motion.div>
    );
}

// --- SUB-COMPONENT: CUSTOM CURSOR ---
function CustomLantern({ mouseX, mouseY, hoveredId }: any) {
    const x = useTransform(mouseX, (val: number) => (val + 0.5) * window.innerWidth);
    const y = useTransform(mouseY, (val: number) => (val + 0.5) * window.innerHeight);

    return (
        <motion.div 
            style={{ x, y, left: -20, top: -20 }} // Offset to center
            className="fixed pointer-events-none z-[100] mix-blend-exclusion"
        >
            <motion.div 
                animate={{ scale: hoveredId ? 3 : 1 }}
                className="w-10 h-10 rounded-full border border-white bg-white/10 backdrop-blur-sm"
            />
        </motion.div>
    )
}