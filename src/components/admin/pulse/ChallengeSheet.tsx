"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Zap, FileText, Save, AlertCircle } from "lucide-react";
import { upsertChallenge } from "@/app/admin/challenges/actions";

interface ChallengeSheetProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any | null;
}

export default function ChallengeSheet({ isOpen, onClose, initialData }: ChallengeSheetProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    if (initialData?.id) formData.append("id", initialData.id);

    const result = await upsertChallenge(formData);
    
    setIsSubmitting(false);
    if (result.success) onClose();
    else alert("Signal Error: " + result.error);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-[#0a0a0a] border-l border-white/10 z-50 flex flex-col shadow-2xl"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-8 border-b border-white/5 bg-[#0a0a0a]">
              <div>
                <h2 className="font-serif text-2xl text-white">{initialData ? "Modulate Signal" : "New Broadcast"}</h2>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">Pulse Control</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
            </div>

            {/* FORM */}
            <div className="flex-1 overflow-y-auto p-8">
              <form id="challenge-form" onSubmit={handleSubmit} className="space-y-8">
                
                {/* --- SIGNAL STATUS --- */}
                <div className="p-4 border border-white/5 rounded-xl bg-white/[0.02] space-y-3">
                    <label className="text-[10px] font-mono uppercase text-gold-500 tracking-widest flex items-center gap-2">
                        <Zap className="w-3 h-3"/> Signal Status
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                        {['active', 'voting', 'closed', 'archived'].map((status) => (
                            <label key={status} className="cursor-pointer">
                                <input type="radio" name="status" value={status} defaultChecked={initialData?.status === status || (!initialData && status === 'active')} className="peer sr-only" />
                                <div className="text-center py-2 rounded border border-white/10 text-[10px] uppercase text-white/40 peer-checked:bg-gold-500 peer-checked:text-black peer-checked:border-gold-500 transition-all">
                                    {status}
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* --- DATA --- */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Theme (Title)</label>
                    <input required name="theme" defaultValue={initialData?.theme} placeholder="e.g. ECHOES IN THE DARK" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none placeholder:text-white/20" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><Clock className="w-3 h-3"/> Deadline</label>
                    <input required name="deadline" defaultValue={initialData?.deadline ? new Date(initialData.deadline).toISOString().slice(0, 16) : ''} type="datetime-local" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:border-gold-500 focus:outline-none" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><FileText className="w-3 h-3"/> Brief (The Directive)</label>
                    <textarea required name="brief" defaultValue={initialData?.brief} rows={6} placeholder="Describe the challenge rules..." className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none resize-none placeholder:text-white/20" />
                  </div>
                </div>

              </form>
            </div>

            {/* FOOTER */}
            <div className="p-6 border-t border-white/10 bg-[#0a0a0a] flex gap-4">
              <button onClick={onClose} type="button" className="flex-1 py-4 border border-white/10 rounded-lg text-white/50 font-mono text-xs uppercase tracking-widest hover:bg-white/5">Cancel</button>
              <button form="challenge-form" disabled={isSubmitting} className="flex-[2] bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg text-xs hover:bg-gold-500 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? "Transmitting..." : (initialData ? "Update Signal" : "Broadcast")}
                {!isSubmitting && <Save className="w-4 h-4" />}
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}