"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, ExternalLink } from "lucide-react";
import { CERTIFICATE_DATABASE, Certificate } from "@/lib/certificates";

export default function CertificateSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [error, setError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = CERTIFICATE_DATABASE.find(c => c.id === query.trim());
    
    if (found) {
      setResult(found);
      setError(false);
    } else {
      setResult(null);
      setError(true);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-neutral-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif text-white">The Archives</h3>
        <p className="text-white/40 text-sm mt-1">Verify a certificate ID to see the proof of work.</p>
      </div>

      {/* The Search Input */}
      <form onSubmit={handleSearch} className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-white/30" />
        <input 
          type="text" 
          placeholder="Enter Certificate ID (e.g., AAYAM-2025-001)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-black/50 border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/50 transition-colors font-mono"
        />
        <button 
          type="submit"
          className="absolute right-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors"
        >
          Verify
        </button>
      </form>

      {/* Error State */}
      {error && (
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-red-400 text-xs mt-3 text-center font-mono"
        >
          Error: ID not found in the archives.
        </motion.p>
      )}

      {/* The Result Card (The "Vault Open" Animation) */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-6"
          >
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 relative overflow-hidden">
              {/* Decorative Watermark */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full" />

              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">
                    Verified Authentic
                  </p>
                  <h4 className="text-white text-xl font-serif">{result.recipientName}</h4>
                  <p className="text-white/60 text-sm">
                    Awarded <span className="text-white">{result.awardTitle}</span> at {result.eventName}
                  </p>
                  <p className="text-white/30 text-xs font-mono mt-2">{result.date} • ID: {result.id}</p>
                </div>
              </div>

              {/* The "Proof of Work" Link */}
              {result.linkedVideoId && (
                <div className="mt-6 pt-4 border-t border-white/5">
                   <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">
                     Evidence from the Archives
                   </p>
                   <a 
                     href={`https://youtube.com/watch?v=${result.linkedVideoId}`}
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 hover:underline"
                   >
                     Watch Performance <ExternalLink className="w-3 h-3" />
                   </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}