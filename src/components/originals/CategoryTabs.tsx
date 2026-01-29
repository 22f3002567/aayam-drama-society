"use client";

import { motion } from "framer-motion";
import { PlayCategory } from "@/types/schema";
import { playSound } from "@/lib/audio";

interface CategoryTabsProps {
  activeTab: PlayCategory | 'all';
  onChange: (tab: PlayCategory | 'all') => void;
}

const TABS: { id: PlayCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'stage', label: 'Stage Plays' },
  { id: 'street', label: 'Street Plays' },
  { id: 'film', label: 'Short Films' },
  { id: 'short', label: 'Shorts' },
  { id: 'workshop', label: 'The Lab' },
];

export default function CategoryTabs({ activeTab, onChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-16">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              if (!isActive) {
                  playSound('click');
                  onChange(tab.id as PlayCategory | 'all');
              }
            }}
            onMouseEnter={() => playSound('hover')}
            className={`
                relative px-5 py-2 rounded-full transition-colors duration-300
                ${isActive ? 'text-black' : 'text-neutral-500 hover:text-white'}
            `}
          >
            {/* THE SLIDING GOLD PILL (Motion Layout) */}
            {isActive && (
                <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}

            {/* THE LABEL */}
            <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-medium">
                {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}