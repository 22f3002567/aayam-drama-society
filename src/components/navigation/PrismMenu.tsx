"use client";

import { motion } from "framer-motion";
import { NAVARASA_MOODS, Mood } from "@/lib/constants";
import { cn } from "@/lib/utils"; // Assuming you have a standard clsx merger

interface PrismMenuProps {
  currentMood: Mood;
  onMoodChange: (mood: Mood) => void;
}

export default function PrismMenu({ currentMood, onMoodChange }: PrismMenuProps) {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center px-4">
      {/* The Glass Container */}
      <div className="
        flex items-center gap-2 p-2 rounded-full 
        bg-black/40 backdrop-blur-xl border border-white/10 
        shadow-2xl shadow-black/50 overflow-x-auto no-scrollbar
        max-w-full
      ">
        {NAVARASA_MOODS.map((mood) => {
          const isActive = currentMood.id === mood.id;

          return (
            <button
              key={mood.id}
              onClick={() => onMoodChange(mood)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap",
                isActive ? "text-black" : "text-white/60 hover:text-white"
              )}
            >
              {/* The "Sliding" Active Background (The Soul) */}
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: mood.color }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* The Text (z-index ensures it sits ON TOP of the background) */}
              <span className="relative z-10 flex items-center gap-2">
                {mood.label}
                {/* Optional: Show Sanskrit name on hover or desktop only */}
                {/* <span className="hidden md:inline text-[10px] opacity-50 uppercase tracking-widest">{mood.sanskrit}</span> */}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}