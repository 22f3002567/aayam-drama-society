"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, XCircle, Download, Loader2, Award } from "lucide-react";

// --- MOCK DATABASE (For Demo) ---
const MOCK_DB: Record<string, { name: string; event: string; position: string; date: string; type: string }> = {
  "AYM-2026-001": { name: "Aditya Verma", event: "NodaRang Street Play", position: "Best Actor", date: "26 JAN 2026", type: "Merit" },
  "AYM-2026-002": { name: "Sneha Iyer", event: "Spotlight Monologue", position: "Winner", date: "15 AUG 2025", type: "Excellence" },
  "AYM-CORE-007": { name: "Siddharth", event: "The Tenure", position: "Secretary", date: "2025-2026", type: "Leadership" },
};

export default function CertificateVault() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
  const [data, setData] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setStatus("searching");
    
    // Simulate API Delay for "Cinematic Tension"
    setTimeout(() => {
      const result = MOCK_DB[query.toUpperCase()];
      if (result) {
        setData(result);
        setStatus("found");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] animate-grain pointer-events-none" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="text-center mb-12 relative z-10">
          <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gold-500/10 border border-gold-500/20">
                  <Award className="w-6 h-6 text-gold-500" />
              </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">
              The Archives
          </h1>
          <p className="font-mono text-xs text-white/40 uppercase tracking-[0.3em]">
              Verify Authenticity
          </p>
      </div>

      {/* SEARCH INTERFACE */}
      <div className="w-full max-w-md relative z-10">
          <form onSubmit={handleSearch} className="relative group">
              <input 
                type="text" 
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    if(status !== 'searching') setStatus('idle');
                }}
                placeholder="ENTER CERTIFICATE ID (e.g., AYM-2026-001)"
                className="w-full bg-[#0a0a0a] border border-white/10 text-white font-mono text-sm p-4 pl-12 rounded-lg focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-white/20"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              
              <button 
                type="submit"
                disabled={status === 'searching'}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-md text-[10px] font-mono uppercase tracking-wider transition-all disabled:opacity-50"
              >
                  {status === 'searching' ? 'Scanning...' : 'Verify'}
              </button>
          </form>

          {/* STATUS MESSAGES */}
          <div className="h-8 mt-2 flex justify-center">
              {status === 'searching' && (
                  <div className="flex items-center gap-2 text-gold-500/60 font-mono text-xs animate-pulse">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>ACCESSING SECURE DATABASE...</span>
                  </div>
              )}
              {status === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500/60 font-mono text-xs">
                      <XCircle className="w-3 h-3" />
                      <span>INVALID CREDENTIALS. NO RECORD FOUND.</span>
                  </motion.div>
              )}
          </div>
      </div>

      {/* THE RESULT (THE ARTIFACT) */}
      <AnimatePresence>
          {status === 'found' && data && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mt-8 w-full max-w-2xl relative"
              >
                  {/* The Digital Certificate Card */}
                  <div className="relative bg-[#080808] border border-white/10 p-8 md:p-12 rounded-xl overflow-hidden shadow-2xl">
                      
                      {/* Decorative Borders */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
                      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-gold-500/10 rounded-br-xl" />
                      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-gold-500/10 rounded-tl-xl" />

                      {/* Content */}
                      <div className="relative z-10 text-center">
                          {/* Logo/Seal */}
                          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-500/30 flex items-center justify-center bg-gold-500/5">
                              <CheckCircle className="w-8 h-8 text-gold-500" />
                          </div>

                          <div className="font-mono text-[10px] text-gold-500 uppercase tracking-[0.4em] mb-2">
                              Official Record
                          </div>
                          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                              Certificate of {data.type}
                          </h2>

                          <p className="font-serif text-white/50 italic mb-8">
                              This authenticates that
                          </p>

                          <h3 className="text-2xl md:text-4xl font-serif text-white border-b border-white/10 pb-4 inline-block px-12 mb-8">
                              {data.name}
                          </h3>

                          <p className="font-serif text-white/60 leading-relaxed max-w-lg mx-auto">
                              has successfully demonstrated excellence in <strong className="text-white">{data.event}</strong> as <strong className="text-white">{data.position}</strong>.
                          </p>

                          {/* Footer Data */}
                          <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-8">
                              <div className="text-left">
                                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Date</p>
                                  <p className="font-mono text-sm text-white">{data.date}</p>
                              </div>
                              
                              <div className="text-right">
                                  <div className="h-12 w-32 relative mb-2">
                                      {/* Signature Image or Font */}
                                      <span className="font-serif italic text-2xl text-white/80 signature-font">Siddharth</span>
                                  </div>
                                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Secretary, Aayam</p>
                              </div>
                          </div>
                      </div>

                      {/* Texture Overlay */}
                      <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')] pointer-events-none" />
                  </div>

                  {/* Action Bar */}
                  <div className="flex justify-center gap-4 mt-8">
                      <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                          <Download className="w-4 h-4" />
                          Download PDF
                      </button>
                  </div>

              </motion.div>
          )}
      </AnimatePresence>

    </section>
  );
}