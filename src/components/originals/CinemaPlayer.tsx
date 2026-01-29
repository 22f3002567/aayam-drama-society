"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { playSound } from "@/lib/audio";

interface CinemaPlayerProps {
  youtubeId: string;
  posterUrl: string | null;
  title: string;
}

export default function CinemaPlayer({ youtubeId, posterUrl, title }: CinemaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    playSound('click'); // Mechanical click sound
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/10 bg-black group shadow-2xl shadow-gold-500/5">
      
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            className="absolute inset-0 z-20 cursor-pointer"
            onClick={handlePlay}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {/* 1. THE POSTER COVER */}
            {posterUrl && (
              <Image 
                src={posterUrl} 
                alt={title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
              />
            )}
            
            {/* 2. THE CUSTOM PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border border-gold-500/50 bg-black/50 backdrop-blur-sm transition-colors group-hover:border-gold-500"
              >
                {/* The Triangle */}
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-gold-500 border-b-[10px] border-b-transparent ml-1" />
                
                {/* The Pulse */}
                <div className="absolute inset-0 rounded-full border border-gold-500 opacity-20 animate-ping" />
              </motion.div>
            </div>

            {/* 3. THE TITLE OVERLAY */}
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Watch Production</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. THE ACTUAL PLAYER (Loads only when needed) */}
      {isPlaying && (
        <iframe 
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`} 
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}