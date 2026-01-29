"use client";

import { motion } from "framer-motion";
import { Play } from "@/types/schema";
import Link from "next/link";

export default function OriginalsSection({ play }: { play: Play | null }) {
  // If the database is empty, we don't crash. We show nothing (or a 'Coming Soon').
  if (!play) return null;

  return (
    <section className="relative w-full py-24 px-4 md:px-12 flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      
      {/* 1. THE SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-4 mb-16 z-10"
      >
        <span className="h-[1px] w-12 bg-gold-500/50" />
        <h2 className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
          Aayam Originals
        </h2>
      </motion.div>

      {/* 2. THE FEATURE CARD */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        // className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-sm overflow-hidden group border border-white/5"
        className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-sm overflow-hidden group border border-white/5 hover:border-gold-500/30 transition-colors duration-500"
      >
        {/* // Add this BEHIND the content: */}
<div className="absolute -inset-4 bg-gold-500/20 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
        {/* BACKGROUND (The Poster or Fallback Gradient) */}
        <div className="absolute inset-0 bg-neutral-900">
           {play.poster_url ? (
             // Ideally use Next/Image here, but standard img is fine for v1
             <img 
               src={play.poster_url} 
               alt={play.title} 
               className="w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105"
             />
           ) : (
             <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black opacity-50" />
           )}
           {/* Cinematic Overlay (Vignette) */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* CONTENT (The Text) */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col items-start gap-4 md:gap-6">
          
          {/* Tags (e.g., THRILLER) */}
          <div className="flex gap-3">
             <span className="px-3 py-1 border border-gold-500/30 text-[9px] uppercase tracking-widest text-gold-500/80 rounded-full">
               {play.mood}
             </span>
             <span className="px-3 py-1 border border-white/10 text-[9px] uppercase tracking-widest text-neutral-400 rounded-full">
               {new Date(play.release_date).getFullYear()}
             </span>
          </div>

          {/* Title */}
          <h3 className="text-4xl md:text-6xl font-serif text-white max-w-2xl leading-tight">
            {play.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-400 text-xs md:text-sm max-w-xl leading-relaxed line-clamp-2 md:line-clamp-3">
            {play.description || "A masterclass in emotion and engineering."}
          </p>

          {/* Action Button */}
          <Link 
            href={`/originals/${play.slug}`}
            className="mt-4 px-8 py-3 bg-white text-black font-mono text-[10px] uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-colors duration-300"
          >
            Watch Production
          </Link>
        </div>
      </motion.div>

    </section>
  );
}