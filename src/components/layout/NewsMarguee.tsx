"use client";

import { motion } from "framer-motion";

export default function NewsMarquee() {
  // In the future, fetch this from Google Sheets
  const NEWS = "AUDITIONS OPEN: 'The Hamlet Project' • Casting Call: 25th Jan • Location: OAT • Contact Secretary for details •";

  if (!NEWS) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-amber-500 text-black overflow-hidden h-6 flex items-center">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} // Infinite scroll loop
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap font-mono text-xs font-bold tracking-widest flex gap-4"
      >
        {/* Repeat text to ensure seamless loop */}
        <span>{NEWS}</span>
        <span>{NEWS}</span>
        <span>{NEWS}</span>
        <span>{NEWS}</span>
      </motion.div>
    </div>
  );
}