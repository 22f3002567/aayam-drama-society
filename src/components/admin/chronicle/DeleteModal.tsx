"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Trash2, Archive, X } from "lucide-react";

type DeleteType = "archive" | "shred";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  eventName: string;
  type: DeleteType;
}

export default function DeleteModal({ isOpen, onClose, onConfirm, eventName, type }: DeleteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* THE DIALOG */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-sm bg-[#0a0a0a] border border-red-900/50 rounded-xl p-6 shadow-[0_0_50px_rgba(220,38,38,0.2)]"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className={`p-4 rounded-full bg-red-900/20 text-red-500 border border-red-500/20`}>
                {type === 'shred' ? <Trash2 className="w-8 h-8" /> : <Archive className="w-8 h-8" />}
              </div>

              <div>
                <h3 className="text-xl font-serif text-white mb-2">
                  {type === 'shred' ? "Permanent Destruction" : "Archive Event"}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  You are about to {type === 'shred' ? "destroy" : "archive"} <strong>"{eventName}"</strong>.
                  {type === 'shred' 
                    ? <span className="block mt-2 text-red-400 font-mono text-xs uppercase">This action cannot be undone.</span>
                    : <span className="block mt-2 text-white/40 font-mono text-xs uppercase">It will be hidden from the public stage.</span>
                  }
                </p>
              </div>

              <div className="flex gap-3 w-full mt-4">
                <button onClick={onClose} className="flex-1 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white/60 text-xs font-mono uppercase tracking-widest transition-colors">
                  Cancel
                </button>
                <button onClick={onConfirm} className="flex-1 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-mono uppercase tracking-widest font-bold shadow-lg shadow-red-900/20 transition-all">
                  {type === 'shred' ? "Shred It" : "Archive It"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}