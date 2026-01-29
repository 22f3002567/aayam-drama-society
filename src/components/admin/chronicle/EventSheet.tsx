// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Calendar, MapPin, Link as LinkIcon, FileText, Plus } from "lucide-react";
// import { createEvent } from "@/app/admin/events/actions";

// export default function EventSheet() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     const formData = new FormData(e.currentTarget);
//     const result = await createEvent(formData);
    
//     setIsSubmitting(false);
//     if (result.success) setIsOpen(false);
//     else alert("Error: " + result.error);
//   };

//   return (
//     <>
//       {/* TRIGGER BUTTON */}
//       <button 
//         onClick={() => setIsOpen(true)}
//         className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest hover:bg-gold-500 transition-colors font-bold"
//       >
//         <Plus className="w-4 h-4" /> Add Event
//       </button>

//       {/* THE DRAWER */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* BACKDROP */}
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
//             />

//             {/* PANEL */}
//             <motion.div
//               initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-50 p-8 overflow-y-auto shadow-2xl"
//             >
              
//               {/* HEADER */}
//               <div className="flex justify-between items-center mb-10">
//                 <h2 className="font-serif text-2xl text-white">New Entry</h2>
//                 <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors">
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* FORM */}
//               <form onSubmit={handleSubmit} className="space-y-6">
                
//                 {/* TITLE */}
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Event Title</label>
//                   <input required name="title" type="text" placeholder="e.g. The Crucible Premiere" 
//                     className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
//                   />
//                 </div>

//                 {/* DATE & TYPE */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><Calendar className="w-3 h-3"/> Date</label>
//                     <input required name="date" type="datetime-local" 
//                       className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:border-gold-500 focus:outline-none transition-colors"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Type</label>
//                     <select name="type" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:border-gold-500 focus:outline-none appearance-none">
//                       <option value="show">Production</option>
//                       <option value="workshop">Workshop</option>
//                       <option value="meetup">Meetup</option>
//                       <option value="fest">Fest</option>
//                       <option value="screening">Screening</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* LOCATION */}
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><MapPin className="w-3 h-3"/> Location</label>
//                   <input required name="location" type="text" placeholder="e.g. CLT, IIT Madras" 
//                     className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
//                   />
//                 </div>

//                 {/* REGISTRATION LINK */}
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><LinkIcon className="w-3 h-3"/> Reg Link (Optional)</label>
//                   <input name="registration_link" type="url" placeholder="https://..." 
//                     className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
//                   />
//                 </div>

//                 {/* DESCRIPTION */}
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><FileText className="w-3 h-3"/> Brief</label>
//                   <textarea name="description" rows={4} placeholder="Description..." 
//                     className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors resize-none"
//                   />
//                 </div>

//                 {/* SUBMIT */}
//                 <div className="pt-4 border-t border-white/10">
//                   <button disabled={isSubmitting} className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg text-xs hover:bg-gold-500 transition-colors disabled:opacity-50">
//                     {isSubmitting ? "Processing..." : "Commit to Timeline"}
//                   </button>
//                 </div>

//               </form>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Link as LinkIcon, FileText, Upload, Save, Trash } from "lucide-react";
import { upsertEvent } from "@/app/admin/events/actions";

interface EventSheetProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any | null; // If passed, we are in EDIT mode
}

export default function EventSheet({ isOpen, onClose, initialData }: EventSheetProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  // RESET FORM ON OPEN
  useEffect(() => {
    if (isOpen && initialData?.poster_url) {
      setPreview(initialData.poster_url);
    } else if (!isOpen) {
      setPreview(null);
    }
  }, [isOpen, initialData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    if (initialData?.id) {
        formData.append("id", initialData.id); // Append ID for update
    }

    const result = await upsertEvent(formData);
    
    setIsSubmitting(false);
    if (result.success) onClose();
    else alert("Error: " + result.error);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-[#0a0a0a] border-l border-white/10 z-50 flex flex-col shadow-2xl"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-8 border-b border-white/5 bg-[#0a0a0a]">
              <div>
                <h2 className="font-serif text-2xl text-white">{initialData ? "Edit Protocol" : "New Entry"}</h2>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
                  {initialData ? `Updating: ${initialData.slug}` : "Initialize Sequence"}
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SCROLLABLE FORM AREA */}
            <div className="flex-1 overflow-y-auto p-8">
              <form id="event-form" onSubmit={handleSubmit} className="space-y-8">
                
                {/* POSTER UPLOAD (Visual) */}
                <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Event Poster</label>
                    <div className="relative group w-full aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors flex items-center justify-center cursor-pointer">
                        <input type="file" name="poster" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*" />
                        
                        {preview ? (
                            <img src={preview} alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-white/30 group-hover:text-white transition-colors">
                                <Upload className="w-6 h-6" />
                                <span className="text-[10px] font-mono uppercase">Upload Asset</span>
                            </div>
                        )}
                        
                        {/* Overlay Hint */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                             <span className="text-xs font-mono text-white">CHANGE IMAGE</span>
                        </div>
                    </div>
                </div>

                {/* BASIC INFO */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Title</label>
                    <input required name="title" defaultValue={initialData?.title} type="text" placeholder="e.g. The Crucible Premiere" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><Calendar className="w-3 h-3"/> Date</label>
                        {/* Note: Date formatting for input requires strict format */}
                        <input required name="date" defaultValue={initialData?.date ? new Date(initialData.date).toISOString().slice(0, 16) : ''} type="datetime-local" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:border-gold-500 focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Type</label>
                        <select name="type" defaultValue={initialData?.type || 'show'} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm focus:border-gold-500 focus:outline-none appearance-none">
                        <option value="show">Production</option>
                        <option value="workshop">Workshop</option>
                        <option value="meetup">Meetup</option>
                        <option value="fest">Fest</option>
                        <option value="screening">Screening</option>
                        </select>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><MapPin className="w-3 h-3"/> Location</label>
                    <input required name="location" defaultValue={initialData?.location} type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><LinkIcon className="w-3 h-3"/> Reg Link (Optional)</label>
                    <input name="registration_link" defaultValue={initialData?.registration_link} type="url" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest flex items-center gap-2"><FileText className="w-3 h-3"/> Brief</label>
                    <textarea name="description" defaultValue={initialData?.description} rows={5} 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-gold-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="p-6 border-t border-white/10 bg-[#0a0a0a] flex gap-4">
              <button onClick={onClose} type="button" className="flex-1 py-4 border border-white/10 rounded-lg text-white/50 font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
                Cancel
              </button>
              <button form="event-form" disabled={isSubmitting} className="flex-[2] bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg text-xs hover:bg-gold-500 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? "Processing..." : (initialData ? "Save Changes" : "Commit Entry")}
                {!isSubmitting && <Save className="w-4 h-4" />}
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}