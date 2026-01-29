"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; 

const ROLES = [
  {
    id: "member",
    title: "THE ARTIST",
    tagline: "PERFORM. DESIGN. BECOME.",
    description: "The stage is empty. It waits for your voice. Join the General Body to access workshops, auditions, and the inner circle of Aayam.",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2000&auto=format&fit=crop",
    color: "#EF4444", // Red
    link: "https://forms.google.com/member"
  },
  {
    id: "visionary",
    title: "THE VISIONARY",
    tagline: "IDEATE. PROPOSE. LEAD.",
    description: "You have a script in your head? A scene? A revolution? We provide the resources. You provide the fire.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2000&auto=format&fit=crop",
    color: "#EAB308", // Gold
    link: "https://forms.google.com/ideas"
  },
  {
    id: "partner",
    title: "THE ALLIANCE",
    tagline: "COLLABORATE. SPONSOR. BUILD.",
    description: "For other universities, brands, and production houses. Let us create a spectacle that defies boundaries.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop",
    color: "#3B82F6", // Blue
    link: "mailto:secretary.aayam@iitm.ac.in"
  },
  {
    id: "core",
    title: "THE ARCHITECT",
    tagline: "ORGANIZE. EXECUTE. GOVERN.",
    description: "The Core Team. The spine of the society. Applications are selective. The responsibility is absolute.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
    color: "#9333EA", // Purple
    link: "https://forms.google.com/core"
  }
];

export default function TheAudition() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-black overflow-hidden">
      
      {/* GLOBAL NOISE OVERLAY */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 bg-[url('/noise.png')] animate-grain" />

      {ROLES.map((role, index) => {
        const isActive = activeId === role.id;
        const isOthersActive = activeId !== null && !isActive;

        return (
          <motion.div
            key={role.id}
            onMouseEnter={() => setActiveId(role.id)}
            onMouseLeave={() => setActiveId(null)}
            className={`
                relative h-[25vh] md:h-full border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer group
                transition-[flex] duration-700 ease-theater
            `}
            // EXPANSION LOGIC: 
            // If active: Flex-grow to 3
            // If inactive but someone else is active: Shrink to 0.5
            // Default: Flex-1
            style={{ flex: isActive ? 4 : isOthersActive ? 0.5 : 1 }}
          >
            
            {/* 1. BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src={role.image} 
                    alt={role.title} 
                    fill 
                    className={`
                        object-cover transition-all duration-1000 ease-out
                        ${isActive ? 'scale-110 grayscale-0 blur-0' : 'scale-100 grayscale brightness-50 blur-sm'}
                    `}
                />
                {/* COLOR OVERLAY (Reveals on Hover) */}
                <div 
                    className="absolute inset-0 transition-opacity duration-700 mix-blend-multiply"
                    style={{ backgroundColor: role.color, opacity: isActive ? 0.6 : 0 }} 
                />
                {/* DARK GRADIENT (Always there for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            </div>

            {/* 2. CONTENT CONTAINER */}
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end md:justify-between">
                
                {/* TOP NUMBER */}
                <span className="font-mono text-xs text-white/50 mb-auto hidden md:block">
                    0{index + 1}
                </span>

                {/* VERTICAL TITLE (When Inactive) */}
                <div className={`
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    transition-opacity duration-500 hidden md:block
                    ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                `}>
                    <h2 className="text-6xl font-serif text-white/40 whitespace-nowrap -rotate-90 tracking-widest uppercase">
                        {role.title.split(" ")[1]} {/* Takes the second word (ARTIST, VISIONARY) */}
                    </h2>
                </div>

                {/* ACTIVE CONTENT (Reveals when expanded) */}
                <div className={`
                    flex flex-col gap-4 transition-all duration-500 transform
                    ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8'}
                `}>
                    {/* TAGLINE */}
                    <div className="overflow-hidden">
                        <span className="inline-block font-mono text-xs md:text-sm text-white font-bold bg-white/10 px-2 py-1 mb-2 tracking-[0.2em] uppercase border border-white/20">
                            {role.tagline}
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2 className="text-4xl md:text-8xl font-serif text-white leading-none tracking-tighter mix-blend-screen">
                        {role.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="font-sans text-white/70 text-sm md:text-xl max-w-lg leading-relaxed border-l-2 border-white/30 pl-4 my-4">
                        {role.description}
                    </p>

                    {/* BUTTON */}
                    <a 
                        href={role.link}
                        target="_blank"
                        className="group/btn flex items-center gap-4 mt-4 w-max"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:scale-110 transition-all duration-300">
                            <ArrowUpRight className="w-6 h-6 text-white group-hover/btn:text-black" />
                        </div>
                        <span className="font-mono text-xs text-white/50 uppercase tracking-widest group-hover/btn:text-white transition-colors">
                            Initialize
                        </span>
                    </a>
                </div>

            </div>

            {/* HOVER BORDER EFFECT */}
            <div className={`absolute inset-0 border-[0.5px] border-white/0 transition-all duration-300 ${isActive ? 'border-white/20 inset-4' : ''}`} />

          </motion.div>
        );
      })}
    </section>
  );
}