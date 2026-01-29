"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/types/schema";

export default function SecretaryDesk({ secretary }: { secretary: TeamMember | null }) {
  if (!secretary) return null;

  return (
    <section className="relative w-full py-40 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between bg-[#050505] overflow-hidden">
      
      {/* 1. ATMOSPHERE: The Spotlight */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      {/* 2. TEXTURE: Global Grain (Optional, if not applied globally) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

      {/* 3. THE VISUAL (Left) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full md:w-5/12 aspect-[3/4] md:aspect-[4/5] z-10 group"
      >
        {/* The Frame */}
        <div className="absolute inset-0 border border-white/5 z-20 transition-all duration-700 group-hover:border-gold-500/30" />
        
        {/* The Image */}
        <div className="absolute inset-2 bg-neutral-900 overflow-hidden">
             {secretary.image_url ? (
                <img 
                  src={secretary.image_url} 
                  alt={secretary.name} 
                  className="w-full h-full object-cover opacity-60 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                    <span className="text-neutral-700 font-mono text-[10px]">NO SIGNAL</span>
                </div>
            )}
        </div>
      </motion.div>

      {/* 4. THE VOICE (Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full md:w-1/2 mt-16 md:mt-0 flex flex-col items-start z-10"
      >
        {/* The Label */}
        <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-8 bg-gold-500" />
            <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.3em]">
                The Leadership
            </span>
        </div>

        {/* The Name */}
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tighter">
            {secretary.name}
        </h2>

        {/* The Quote / Bio */}
        <blockquote className="text-neutral-400 text-sm md:text-lg leading-loose font-sans max-w-lg mb-12 border-l-2 border-neutral-800 pl-6">
          "{secretary.bio || "In the theater of engineering, we do not just build sets; we build realities."}"
        </blockquote>

        {/* The Signature */}
        <div className="flex flex-col gap-2">
            <span className="text-white font-mono text-xs tracking-widest uppercase">
                Secretary, {new Date().getFullYear()}
            </span>
            <span className="text-neutral-600 text-[10px] tracking-widest uppercase">
                {secretary.department}
            </span>
        </div>
      </motion.div>

    </section>
  );
}