"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Film, User, ArrowRight } from "lucide-react";
import { PLAY_LIST } from "@/lib/content";
import { TEAM_LIST } from "@/lib/team";

export default function DirectorConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // 1. KEYBOARD SHORTCUT (The "Elite" Touch)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 2. SEARCH LOGIC
  const filteredPlays = PLAY_LIST.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3); // Limit to top 3

  const filteredTeam = TEAM_LIST.filter(t => 
    t.name.toLowerCase().includes(query.toLowerCase()) || 
    t.roleArtist.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  // Scroll to section helper
  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON (Top Right) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 bg-black/50 backdrop-blur-md border border-white/10 text-white/50 px-4 py-2 rounded-full text-xs font-mono hover:text-white hover:border-white/30 transition-all flex items-center gap-2"
      >
        <Search className="w-3 h-3" />
        <span className="hidden md:inline">CMD+K</span>
      </button>

      {/* THE CONSOLE MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* The Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center border-b border-white/5 px-4 py-4">
                <Search className="w-5 h-5 text-white/30 mr-3" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Find a play, actor, or memory..."
                  className="bg-transparent border-none text-white placeholder:text-white/20 focus:ring-0 w-full outline-none text-lg font-serif"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5 text-white/30 hover:text-white transition-colors" />
                </button>
              </div>

              {/* Results List */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                
                {/* SECTION: PLAYS */}
                {filteredPlays.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 px-3 py-2">Repertoire</p>
                    {filteredPlays.map(play => (
                      <button
                        key={play.id}
                        onClick={() => handleNavigate("originals")} // Jumps to grid
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 group transition-colors text-left"
                      >
                        <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white/50 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                           <Film className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-white text-sm group-hover:text-amber-400 transition-colors">{play.title}</p>
                          <p className="text-white/30 text-xs">{play.mood} • {play.director}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/10 ml-auto group-hover:text-amber-500 opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                )}

                {/* SECTION: TEAM */}
                {filteredTeam.length > 0 && (
                  <div className="mb-2">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 px-3 py-2">Ensemble</p>
                    {filteredTeam.map(member => (
                      <button
                        key={member.id}
                        onClick={() => handleNavigate("ensemble")} // Jumps to spotlight cards
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 group transition-colors text-left"
                      >
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                           {/* Using standard img for speed in search */}
                           <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-white text-sm group-hover:text-amber-400 transition-colors">{member.name}</p>
                          <p className="text-white/30 text-xs">{member.roleArtist}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* EMPTY STATE */}
                {query && filteredPlays.length === 0 && filteredTeam.length === 0 && (
                   <div className="p-8 text-center text-white/30 font-mono text-xs">
                      No results found in the archives.
                   </div>
                )}
                
                {/* DEFAULT STATE */}
                {!query && (
                   <div className="p-4 text-center">
                      <p className="text-white/20 text-xs font-mono">Type to search the Aayam Archives</p>
                   </div>
                )}

              </div>
              
              {/* Footer */}
              <div className="bg-white/5 px-4 py-2 flex justify-between items-center text-[10px] text-white/30 font-mono border-t border-white/5">
                <span>Director's Console v1.0</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}