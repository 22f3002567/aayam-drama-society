"use client";

import { useState, useMemo } from "react";
import { Play } from "@/types/schema";
import { NAVARASA, RasaKey } from "@/lib/rasa";
import PlayCard from "@/components/originals/PlayCard";
import RasaDock from "@/components/originals/RasaDock";
import RasaAtmosphere from "@/components/originals/RasaAtmosphere";

export default function ArchiveView({ plays }: { plays: Play[] }) {
  const [activeRasa, setActiveRasa] = useState<RasaKey | 'all'>('all');

  // 1. DETERMINE CURRENT COLOR
  const currentColor = useMemo(() => {
    if (activeRasa === 'all') return '#D4AF37'; // Default Gold
    return NAVARASA.find(r => r.id === activeRasa)?.color || '#D4AF37';
  }, [activeRasa]);

  // 2. FILTER PLAYS
  const filteredPlays = useMemo(() => {
    if (activeRasa === 'all') return plays;
    const rasaConfig = NAVARASA.find(r => r.id === activeRasa);
    if (!rasaConfig) return plays;
    
    // Check if play mood matches any tag in the Rasa config
    return plays.filter(play => 
        rasaConfig.tags.includes(play.mood.toLowerCase())
    );
  }, [activeRasa, plays]);

  return (
    <>
      {/* THE DIVINE LIGHT */}
      <RasaAtmosphere color={currentColor} />

      <div className="relative z-10 pt-32 pb-40 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        
        {/* HEADER (Dynamic Text) */}
        <div className="flex flex-col gap-6 mb-24 border-b border-white/5 pb-12 transition-colors duration-1000">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: currentColor }}>
              {activeRasa === 'all' ? 'The Navrasa Archive' : `Rasa : ${activeRasa}`}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter">
              {activeRasa === 'all' ? 'Original Works' : NAVARASA.find(r => r.id === activeRasa)?.english}
            </h1>
        </div>

        {/* THE GRID */}
        {filteredPlays.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                {filteredPlays.map((play) => (
                    <PlayCard key={play.id} play={play} index={0} />
                ))}
            </div>
        ) : (
            <div className="w-full py-40 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-sm">
                <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
                    No productions found for this Rasa
                </span>
            </div>
        )}

      </div>

      {/* THE NAVIGATOR */}
      <RasaDock activeRasa={activeRasa} onSelect={setActiveRasa} />
    </>
  );
}