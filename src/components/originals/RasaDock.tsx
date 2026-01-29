"use client";

import { motion } from "framer-motion";
import { NAVARASA, RasaKey, RasaConfig } from "@/lib/rasa";
import { playSound } from "@/lib/audio";
import Link from "next/link";

interface RasaDockProps {
  activeRasa: RasaKey | 'all';
  onSelect: (id: RasaKey | 'all') => void;
}

export default function RasaDock({ activeRasa, onSelect }: RasaDockProps) {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4"
    >
      
      {/* THE DOCK CONTAINER */}
      <div className="flex items-center gap-1 p-2 rounded-full bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl">
        
        {/* 'ALL' BUTTON */}
        <button
          onClick={() => onSelect('all')}
          className={`
            relative px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300
            ${activeRasa === 'all' ? 'text-black bg-white' : 'text-neutral-500 hover:text-white'}
          `}
        >
          All
        </button>

        <div className="w-[1px] h-4 bg-white/10 mx-2" />

        {/* THE 9 RASAS */}
        {NAVARASA.map((rasa) => {
          const isActive = activeRasa === rasa.id;
          return (
            <button
              key={rasa.id}
              onClick={() => {
                playSound('click');
                onSelect(rasa.id);
              }}
              onMouseEnter={() => playSound('hover')}
              className="group relative px-3 py-2"
            >
              {/* The Text */}
              <span className={`
                relative z-10 text-[10px] uppercase tracking-widest transition-colors duration-300
                ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}
              `}>
                {rasa.label.substring(0, 3)} {/* Short Name (Shr, Has, Kar...) */}
              </span>

              {/* The Dot (Active Indicator) */}
              {isActive && (
                <motion.div 
                    layoutId="rasa-glow"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                    style={{ borderColor: rasa.color, backgroundColor: `${rasa.color}20` }}
                />
              )}
              
              {/* Tooltip (Full Name + English) */}
              <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <div className="px-3 py-1.5 rounded bg-black border border-white/10 text-[9px] uppercase tracking-widest text-neutral-300">
                    <span style={{ color: rasa.color }}>{rasa.label}</span> • {rasa.english}
                 </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* EXIT LINK (Back to Home) */}
      <Link href="/" className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors">
        Exit Archive
      </Link>

    </motion.div>
  );
}