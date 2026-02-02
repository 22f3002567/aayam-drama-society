// // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // // import { Search, CheckCircle, XCircle, Download, Loader2, Award } from "lucide-react";

// // // // // // // // // // // // // // --- MOCK DATABASE (For Demo) ---
// // // // // // // // // // // // // const MOCK_DB: Record<string, { name: string; event: string; position: string; date: string; type: string }> = {
// // // // // // // // // // // // //   "AYM-2026-001": { name: "Aditya Verma", event: "NodaRang Street Play", position: "Best Actor", date: "26 JAN 2026", type: "Merit" },
// // // // // // // // // // // // //   "AYM-2026-002": { name: "Sneha Iyer", event: "Spotlight Monologue", position: "Winner", date: "15 AUG 2025", type: "Excellence" },
// // // // // // // // // // // // //   "AYM-CORE-007": { name: "Siddharth", event: "The Tenure", position: "Secretary", date: "2025-2026", type: "Leadership" },
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default function CertificateVault() {
// // // // // // // // // // // // //   const [query, setQuery] = useState("");
// // // // // // // // // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // // // // // // // // //   const [data, setData] = useState<any>(null);

// // // // // // // // // // // // //   const handleSearch = (e: React.FormEvent) => {
// // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // //     if (!query) return;

// // // // // // // // // // // // //     setStatus("searching");
    
// // // // // // // // // // // // //     // Simulate API Delay for "Cinematic Tension"
// // // // // // // // // // // // //     setTimeout(() => {
// // // // // // // // // // // // //       const result = MOCK_DB[query.toUpperCase()];
// // // // // // // // // // // // //       if (result) {
// // // // // // // // // // // // //         setData(result);
// // // // // // // // // // // // //         setStatus("found");
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         setStatus("error");
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     }, 1500);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
// // // // // // // // // // // // //       {/* BACKGROUND ATMOSPHERE */}
// // // // // // // // // // // // //       <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] animate-grain pointer-events-none" />
// // // // // // // // // // // // //       <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />

// // // // // // // // // // // // //       {/* HEADER */}
// // // // // // // // // // // // //       <div className="text-center mb-12 relative z-10">
// // // // // // // // // // // // //           <div className="flex justify-center mb-4">
// // // // // // // // // // // // //               <div className="p-3 rounded-full bg-gold-500/10 border border-gold-500/20">
// // // // // // // // // // // // //                   <Award className="w-6 h-6 text-gold-500" />
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">
// // // // // // // // // // // // //               The Archives
// // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // //           <p className="font-mono text-xs text-white/40 uppercase tracking-[0.3em]">
// // // // // // // // // // // // //               Verify Authenticity
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* SEARCH INTERFACE */}
// // // // // // // // // // // // //       <div className="w-full max-w-md relative z-10">
// // // // // // // // // // // // //           <form onSubmit={handleSearch} className="relative group">
// // // // // // // // // // // // //               <input 
// // // // // // // // // // // // //                 type="text" 
// // // // // // // // // // // // //                 value={query}
// // // // // // // // // // // // //                 onChange={(e) => {
// // // // // // // // // // // // //                     setQuery(e.target.value);
// // // // // // // // // // // // //                     if(status !== 'searching') setStatus('idle');
// // // // // // // // // // // // //                 }}
// // // // // // // // // // // // //                 placeholder="ENTER CERTIFICATE ID (e.g., AYM-2026-001)"
// // // // // // // // // // // // //                 className="w-full bg-[#0a0a0a] border border-white/10 text-white font-mono text-sm p-4 pl-12 rounded-lg focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-white/20"
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              
// // // // // // // // // // // // //               <button 
// // // // // // // // // // // // //                 type="submit"
// // // // // // // // // // // // //                 disabled={status === 'searching'}
// // // // // // // // // // // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-md text-[10px] font-mono uppercase tracking-wider transition-all disabled:opacity-50"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                   {status === 'searching' ? 'Scanning...' : 'Verify'}
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //           </form>

// // // // // // // // // // // // //           {/* STATUS MESSAGES */}
// // // // // // // // // // // // //           <div className="h-8 mt-2 flex justify-center">
// // // // // // // // // // // // //               {status === 'searching' && (
// // // // // // // // // // // // //                   <div className="flex items-center gap-2 text-gold-500/60 font-mono text-xs animate-pulse">
// // // // // // // // // // // // //                       <Loader2 className="w-3 h-3 animate-spin" />
// // // // // // // // // // // // //                       <span>ACCESSING SECURE DATABASE...</span>
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //               )}
// // // // // // // // // // // // //               {status === 'error' && (
// // // // // // // // // // // // //                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500/60 font-mono text-xs">
// // // // // // // // // // // // //                       <XCircle className="w-3 h-3" />
// // // // // // // // // // // // //                       <span>INVALID CREDENTIALS. NO RECORD FOUND.</span>
// // // // // // // // // // // // //                   </motion.div>
// // // // // // // // // // // // //               )}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* THE RESULT (THE ARTIFACT) */}
// // // // // // // // // // // // //       <AnimatePresence>
// // // // // // // // // // // // //           {status === 'found' && data && (
// // // // // // // // // // // // //               <motion.div 
// // // // // // // // // // // // //                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
// // // // // // // // // // // // //                 animate={{ opacity: 1, scale: 1, y: 0 }}
// // // // // // // // // // // // //                 exit={{ opacity: 0, scale: 0.95 }}
// // // // // // // // // // // // //                 transition={{ duration: 0.5, type: "spring" }}
// // // // // // // // // // // // //                 className="mt-8 w-full max-w-2xl relative"
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                   {/* The Digital Certificate Card */}
// // // // // // // // // // // // //                   <div className="relative bg-[#080808] border border-white/10 p-8 md:p-12 rounded-xl overflow-hidden shadow-2xl">
                      
// // // // // // // // // // // // //                       {/* Decorative Borders */}
// // // // // // // // // // // // //                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
// // // // // // // // // // // // //                       <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-gold-500/10 rounded-br-xl" />
// // // // // // // // // // // // //                       <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-gold-500/10 rounded-tl-xl" />

// // // // // // // // // // // // //                       {/* Content */}
// // // // // // // // // // // // //                       <div className="relative z-10 text-center">
// // // // // // // // // // // // //                           {/* Logo/Seal */}
// // // // // // // // // // // // //                           <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-500/30 flex items-center justify-center bg-gold-500/5">
// // // // // // // // // // // // //                               <CheckCircle className="w-8 h-8 text-gold-500" />
// // // // // // // // // // // // //                           </div>

// // // // // // // // // // // // //                           <div className="font-mono text-[10px] text-gold-500 uppercase tracking-[0.4em] mb-2">
// // // // // // // // // // // // //                               Official Record
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                           <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
// // // // // // // // // // // // //                               Certificate of {data.type}
// // // // // // // // // // // // //                           </h2>

// // // // // // // // // // // // //                           <p className="font-serif text-white/50 italic mb-8">
// // // // // // // // // // // // //                               This authenticates that
// // // // // // // // // // // // //                           </p>

// // // // // // // // // // // // //                           <h3 className="text-2xl md:text-4xl font-serif text-white border-b border-white/10 pb-4 inline-block px-12 mb-8">
// // // // // // // // // // // // //                               {data.name}
// // // // // // // // // // // // //                           </h3>

// // // // // // // // // // // // //                           <p className="font-serif text-white/60 leading-relaxed max-w-lg mx-auto">
// // // // // // // // // // // // //                               has successfully demonstrated excellence in <strong className="text-white">{data.event}</strong> as <strong className="text-white">{data.position}</strong>.
// // // // // // // // // // // // //                           </p>

// // // // // // // // // // // // //                           {/* Footer Data */}
// // // // // // // // // // // // //                           <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-8">
// // // // // // // // // // // // //                               <div className="text-left">
// // // // // // // // // // // // //                                   <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Date</p>
// // // // // // // // // // // // //                                   <p className="font-mono text-sm text-white">{data.date}</p>
// // // // // // // // // // // // //                               </div>
                              
// // // // // // // // // // // // //                               <div className="text-right">
// // // // // // // // // // // // //                                   <div className="h-12 w-32 relative mb-2">
// // // // // // // // // // // // //                                       {/* Signature Image or Font */}
// // // // // // // // // // // // //                                       <span className="font-serif italic text-2xl text-white/80 signature-font">Siddharth</span>
// // // // // // // // // // // // //                                   </div>
// // // // // // // // // // // // //                                   <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Secretary, Aayam</p>
// // // // // // // // // // // // //                               </div>
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                       </div>

// // // // // // // // // // // // //                       {/* Texture Overlay */}
// // // // // // // // // // // // //                       <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')] pointer-events-none" />
// // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // //                   {/* Action Bar */}
// // // // // // // // // // // // //                   <div className="flex justify-center gap-4 mt-8">
// // // // // // // // // // // // //                       <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
// // // // // // // // // // // // //                           <Download className="w-4 h-4" />
// // // // // // // // // // // // //                           Download PDF
// // // // // // // // // // // // //                       </button>
// // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // // //           )}
// // // // // // // // // // // // //       </AnimatePresence>

// // // // // // // // // // // // //     </section>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // // import { Search, ShieldCheck, XCircle, Loader2, Award, Download, Share2 } from "lucide-react";
// // // // // // // // // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // // // // // // // // import html2canvas from "html2canvas";
// // // // // // // // // // // // import { toast } from "sonner";

// // // // // // // // // // // // // --- THE ARTIFACT (Visual Card) ---
// // // // // // // // // // // // export const CertificateCard = ({ data }: { data: any }) => (
// // // // // // // // // // // //     <div id="cert-node" className="relative w-full aspect-[1.414/1] bg-[#080808] text-white overflow-hidden rounded-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 md:p-12 group select-none">
        
// // // // // // // // // // // //         {/* HOLOGRAPHIC LAYERS */}
// // // // // // // // // // // //         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(115deg,transparent_20%,rgba(234,179,8,0.1)_40%,rgba(234,179,8,0.3)_50%,rgba(234,179,8,0.1)_60%,transparent_80%)] bg-[length:200%_200%] animate-shine pointer-events-none" />
// // // // // // // // // // // //         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:4px_4px]" />
// // // // // // // // // // // //         <div className="absolute inset-4 border border-white/10 rounded-lg" />
// // // // // // // // // // // //         <div className="absolute inset-6 border border-gold-500/20 rounded-lg" />

// // // // // // // // // // // //         {/* HEADER */}
// // // // // // // // // // // //         <div className="relative z-10 text-center space-y-2">
// // // // // // // // // // // //             <div className="flex justify-center mb-4">
// // // // // // // // // // // //                 <div className="w-10 h-10 border border-gold-500/50 rotate-45 flex items-center justify-center">
// // // // // // // // // // // //                     <div className="w-6 h-6 bg-gold-500/20 -rotate-45 flex items-center justify-center">
// // // // // // // // // // // //                         <Award className="w-4 h-4 text-gold-500" />
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <h1 className="font-serif text-2xl md:text-4xl tracking-tight text-white uppercase">
// // // // // // // // // // // //                 Certificate of <span className="text-gold-500">Merit</span>
// // // // // // // // // // // //             </h1>
// // // // // // // // // // // //             <p className="font-mono text-[8px] md:text-[9px] text-white/40 uppercase tracking-[0.4em]">
// // // // // // // // // // // //                 Authentic Aayam Legacy Record
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* RECIPIENT & HONOR */}
// // // // // // // // // // // //         <div className="relative z-10 text-center my-6 md:my-10 flex-1 flex flex-col justify-center">
// // // // // // // // // // // //             <p className="font-serif italic text-white/50 text-xs mb-2">Conferred upon</p>
// // // // // // // // // // // //             <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 border-b border-white/10 pb-4 px-8 inline-block">
// // // // // // // // // // // //                 {data.recipient_name}
// // // // // // // // // // // //             </h2>
// // // // // // // // // // // //             <p className="font-serif text-white/70 max-w-lg mx-auto leading-relaxed text-xs md:text-sm">
// // // // // // // // // // // //                 For excellence as <strong className="text-gold-200">{data.award_title}</strong><br/>
// // // // // // // // // // // //                 in the production <strong className="text-white uppercase tracking-wider">{data.play?.title || data.event_name}</strong>
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* FOOTER */}
// // // // // // // // // // // //         <div className="relative z-10 w-full flex justify-between items-end px-4">
// // // // // // // // // // // //             <div className="text-left">
// // // // // // // // // // // //                 <div className="h-px w-24 bg-white/20 mb-2" />
// // // // // // // // // // // //                 <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest">Authority</p>
// // // // // // // // // // // //                 <p className="font-serif italic text-white/60 text-sm">Aayam Secretary</p>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <div className="text-right">
// // // // // // // // // // // //                  <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mb-1">Legacy ID</p>
// // // // // // // // // // // //                  <p className="font-mono text-[10px] md:text-xs text-gold-500 bg-gold-500/10 px-2 py-1 rounded border border-gold-500/20">
// // // // // // // // // // // //                     {data.id}
// // // // // // // // // // // //                  </p>
// // // // // // // // // // // //                  <div className="flex items-center justify-end gap-1 mt-1 text-green-500">
// // // // // // // // // // // //                     <ShieldCheck className="w-3 h-3" />
// // // // // // // // // // // //                     <span className="font-mono text-[8px] uppercase">Verified</span>
// // // // // // // // // // // //                  </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // // );

// // // // // // // // // // // // // --- THE SCANNER INTERFACE ---
// // // // // // // // // // // // export default function CertificateVault() {
// // // // // // // // // // // //   const [query, setQuery] = useState("");
// // // // // // // // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // // // // // // // //   const [data, setData] = useState<any>(null);

// // // // // // // // // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // //     if (!query) return;

// // // // // // // // // // // //     setStatus("searching");
// // // // // // // // // // // //     setData(null);
    
// // // // // // // // // // // //     // Server Call
// // // // // // // // // // // //     const result = await verifyCertificate(query);
    
// // // // // // // // // // // //     if (result.success) {
// // // // // // // // // // // //         setData(result.data);
// // // // // // // // // // // //         setStatus("found");
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //         setStatus("error");
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleDownload = async () => {
// // // // // // // // // // // //       const element = document.getElementById("cert-node");
// // // // // // // // // // // //       if(element) {
// // // // // // // // // // // //           const canvas = await html2canvas(element, { backgroundColor: null, scale: 3 });
// // // // // // // // // // // //           const link = document.createElement("a");
// // // // // // // // // // // //           link.download = `Legacy_Cert_${data.id}.png`;
// // // // // // // // // // // //           link.href = canvas.toDataURL();
// // // // // // // // // // // //           link.click();
// // // // // // // // // // // //           toast.success("Artifact Retrieved");
// // // // // // // // // // // //       }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section className="min-h-screen bg-[#020202] text-[#e0e0e0] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
// // // // // // // // // // // //       {/* ATMOSPHERE */}
// // // // // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.03),transparent_60%)] pointer-events-none" />
// // // // // // // // // // // //       <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')] pointer-events-none" />

// // // // // // // // // // // //       {/* HEADER */}
// // // // // // // // // // // //       <div className="text-center mb-12 relative z-10">
// // // // // // // // // // // //           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
// // // // // // // // // // // //               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
// // // // // // // // // // // //               <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
// // // // // // // // // // // //                   Secure Channel
// // // // // // // // // // // //               </span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 tracking-tight">The Vault</h1>
// // // // // // // // // // // //           <p className="font-mono text-xs text-white/40 uppercase tracking-[0.3em]">
// // // // // // // // // // // //               Verify Aayam Legacy Records
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* SEARCH BAR */}
// // // // // // // // // // // //       <div className="w-full max-w-md relative z-20">
// // // // // // // // // // // //           <form onSubmit={handleSearch} className="relative group">
// // // // // // // // // // // //               <input 
// // // // // // // // // // // //                 type="text" 
// // // // // // // // // // // //                 value={query}
// // // // // // // // // // // //                 onChange={(e) => {
// // // // // // // // // // // //                     setQuery(e.target.value);
// // // // // // // // // // // //                     if(status !== 'searching') setStatus('idle');
// // // // // // // // // // // //                 }}
// // // // // // // // // // // //                 placeholder="ENTER LEGACY ID (e.g. AYM-2025-X92A)"
// // // // // // // // // // // //                 className="w-full bg-[#0a0a0a] border border-white/10 text-white font-mono text-sm p-4 pl-12 rounded-xl focus:outline-none focus:border-gold-500/50 focus:bg-[#0f0f0f] transition-all placeholder:text-white/20 shadow-2xl uppercase"
// // // // // // // // // // // //               />
// // // // // // // // // // // //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-gold-500 transition-colors" />
              
// // // // // // // // // // // //               <button 
// // // // // // // // // // // //                 type="submit"
// // // // // // // // // // // //                 disabled={status === 'searching' || !query}
// // // // // // // // // // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all disabled:opacity-30"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                   {status === 'searching' ? 'Scanning...' : 'Verify'}
// // // // // // // // // // // //               </button>
// // // // // // // // // // // //           </form>

// // // // // // // // // // // //           {/* STATUS MESSAGES */}
// // // // // // // // // // // //           <div className="h-12 mt-4 flex justify-center">
// // // // // // // // // // // //               {status === 'searching' && (
// // // // // // // // // // // //                   <div className="flex items-center gap-2 text-gold-500/60 font-mono text-xs animate-pulse">
// // // // // // // // // // // //                       <Loader2 className="w-3 h-3 animate-spin" />
// // // // // // // // // // // //                       <span>DECRYPTING SECURE LEDGER...</span>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //               )}
// // // // // // // // // // // //               {status === 'error' && (
// // // // // // // // // // // //                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-500/80 font-mono text-xs bg-red-900/10 px-4 py-2 rounded-lg border border-red-900/30">
// // // // // // // // // // // //                       <XCircle className="w-3 h-3" />
// // // // // // // // // // // //                       <span>ACCESS DENIED. ID NOT FOUND.</span>
// // // // // // // // // // // //                   </motion.div>
// // // // // // // // // // // //               )}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* RESULT */}
// // // // // // // // // // // //       <AnimatePresence>
// // // // // // // // // // // //           {status === 'found' && data && (
// // // // // // // // // // // //               <motion.div 
// // // // // // // // // // // //                 initial={{ opacity: 0, scale: 0.95, y: 40 }}
// // // // // // // // // // // //                 animate={{ opacity: 1, scale: 1, y: 0 }}
// // // // // // // // // // // //                 exit={{ opacity: 0, scale: 0.95 }}
// // // // // // // // // // // //                 transition={{ duration: 0.6, type: "spring", damping: 20 }}
// // // // // // // // // // // //                 className="w-full max-w-3xl relative z-10 mt-4"
// // // // // // // // // // // //               >
// // // // // // // // // // // //                   <CertificateCard data={data} />
                  
// // // // // // // // // // // //                   <div className="mt-6 flex justify-center gap-4">
// // // // // // // // // // // //                       <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-500 hover:text-black transition-colors rounded-full">
// // // // // // // // // // // //                           <Download className="w-4 h-4" /> Save Artifact
// // // // // // // // // // // //                       </button>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //               </motion.div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //       </AnimatePresence>

// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }


// // // // // // // // // // // "use client";

// // // // // // // // // // // import { useState } from "react";
// // // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // // import { Search, ShieldCheck, XCircle, Loader2, Award, Download, Feather } from "lucide-react";
// // // // // // // // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // // // // // // // import html2canvas from "html2canvas";
// // // // // // // // // // // import { toast } from "sonner";

// // // // // // // // // // // // --- THE MASTERPIECE (Visual Asset) ---
// // // // // // // // // // // export const CertificateCard = ({ data }: { data: any }) => (
// // // // // // // // // // //     <div 
// // // // // // // // // // //         id="cert-node" 
// // // // // // // // // // //         className="relative w-full aspect-[1.414/1] bg-[#050505] text-[#f4f4f5] overflow-hidden rounded-sm shadow-2xl flex flex-col p-12 group select-none"
// // // // // // // // // // //     >
// // // // // // // // // // //         {/* --- LAYER 1: THE TEXTURE (The Canvas) --- */}
// // // // // // // // // // //         <div className="absolute inset-0 bg-[#0a0a0a]" />
// // // // // // // // // // //         {/* Subtle Paper Grain */}
// // // // // // // // // // //         <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
        
// // // // // // // // // // //         {/* --- LAYER 2: THE MANDALA (The Roots) --- */}
// // // // // // // // // // //         {/* A subtle geometric pattern representing the stage dimensions from Natya Shastra */}
// // // // // // // // // // //         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500 via-transparent to-transparent bg-[size:20px_20px]" />
// // // // // // // // // // //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gold-500/10 rounded-full opacity-20" />
// // // // // // // // // // //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-gold-500/10 rounded-full opacity-20" />

// // // // // // // // // // //         {/* --- LAYER 3: THE PROSCENIUM (The Border) --- */}
// // // // // // // // // // //         <div className="absolute inset-4 border-2 border-gold-500/20" />
// // // // // // // // // // //         <div className="absolute inset-6 border border-gold-500/10" />
// // // // // // // // // // //         {/* Corner Ornaments */}
// // // // // // // // // // //         <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-gold-500/40" />
// // // // // // // // // // //         <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-gold-500/40" />
// // // // // // // // // // //         <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-gold-500/40" />
// // // // // // // // // // //         <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-gold-500/40" />

// // // // // // // // // // //         {/* --- LAYER 4: THE CONTENT (The Script) --- */}
// // // // // // // // // // //         <div className="relative z-10 flex flex-col h-full items-center text-center justify-between py-4">
            
// // // // // // // // // // //             {/* A. HEADER: The Authority */}
// // // // // // // // // // //             <div className="flex flex-col items-center gap-4">
// // // // // // // // // // //                 {/* AAYAM EMBLEM */}
// // // // // // // // // // //                 <div className="relative w-16 h-16 flex items-center justify-center">
// // // // // // // // // // //                     <div className="absolute inset-0 border border-gold-500/30 rotate-45 transform" />
// // // // // // // // // // //                     <div className="absolute inset-2 border border-gold-500/30 -rotate-45 transform" />
// // // // // // // // // // //                     <span className="font-serif text-3xl font-bold text-gold-500 relative z-10">A</span>
// // // // // // // // // // //                 </div>
                
// // // // // // // // // // //                 <div className="space-y-1">
// // // // // // // // // // //                     <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-white uppercase" style={{ textShadow: '0 2px 10px rgba(234,179,8,0.2)' }}>
// // // // // // // // // // //                         Certificate of Honor
// // // // // // // // // // //                     </h1>
// // // // // // // // // // //                     <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mx-auto" />
// // // // // // // // // // //                     <p className="font-mono text-[10px] text-gold-500/60 uppercase tracking-[0.3em]">
// // // // // // // // // // //                         Aayam Drama Society • IIT Madras
// // // // // // // // // // //                     </p>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* B. THE RECIPIENT: The Protagonist */}
// // // // // // // // // // //             <div className="flex-1 flex flex-col justify-center w-full max-w-3xl">
// // // // // // // // // // //                 <p className="font-serif italic text-white/40 text-sm md:text-base mb-6">
// // // // // // // // // // //                     This accolade is hereby conferred upon
// // // // // // // // // // //                 </p>
                
// // // // // // // // // // //                 <div className="relative mb-6">
// // // // // // // // // // //                     <h2 className="font-serif text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 pb-2">
// // // // // // // // // // //                         {data.recipient_name}
// // // // // // // // // // //                     </h2>
// // // // // // // // // // //                     {/* Underline Flourish */}
// // // // // // // // // // //                     <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mx-auto mt-2" />
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 <p className="font-serif text-white/70 leading-relaxed text-sm md:text-lg">
// // // // // // // // // // //                     For displaying exceptional artistry and dedication as <br/>
// // // // // // // // // // //                     <span className="text-gold-400 font-bold uppercase tracking-widest text-base md:text-xl mt-2 block">
// // // // // // // // // // //                         {data.award_title}
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                     <span className="block mt-2 text-white/50 text-xs md:text-sm uppercase tracking-wide">
// // // // // // // // // // //                         in the production
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                     <span className="text-white font-semibold text-lg md:text-2xl mt-1 block">
// // // // // // // // // // //                         "{data.event_name}"
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                 </p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* C. THE FOOTER: The Seal & Signature */}
// // // // // // // // // // //             <div className="w-full flex justify-between items-end px-4 md:px-12 pt-8">
                
// // // // // // // // // // //                 {/* 1. SIGNATURE */}
// // // // // // // // // // //                 <div className="text-left relative">
// // // // // // // // // // //                     <div className="absolute -top-10 left-0 w-40 h-20 opacity-80 pointer-events-none">
// // // // // // // // // // //                         {/* Simulated Signature SVG/Path */}
// // // // // // // // // // //                         <svg viewBox="0 0 200 100" className="w-full h-full stroke-white fill-none stroke-2">
// // // // // // // // // // //                             <path d="M10,80 Q50,10 90,80 T180,80" strokeDasharray="300" strokeDashoffset="0" className="opacity-50" />
// // // // // // // // // // //                             <text x="20" y="70" fontFamily="cursive" fontSize="30" fill="white" className="italic">Siddharth</text>
// // // // // // // // // // //                         </svg>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <div className="h-px w-40 bg-white/30 mb-2 mt-8" />
// // // // // // // // // // //                     <p className="font-serif font-bold text-white text-sm">Siddharth</p>
// // // // // // // // // // //                     <p className="font-mono text-[9px] text-gold-500/60 uppercase tracking-widest">General Secretary</p>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* 2. THE GOLDEN SEAL */}
// // // // // // // // // // //                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
// // // // // // // // // // //                     <div className="w-24 h-24 border-2 border-gold-500/30 rounded-full flex items-center justify-center p-1">
// // // // // // // // // // //                         <div className="w-full h-full border border-gold-500/20 rounded-full flex items-center justify-center bg-gold-500/5 backdrop-blur-sm">
// // // // // // // // // // //                             <Award className="w-8 h-8 text-gold-500 opacity-80" />
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* 3. VERIFICATION DATA */}
// // // // // // // // // // //                 <div className="text-right">
// // // // // // // // // // //                     <div className="flex flex-col items-end">
// // // // // // // // // // //                         <div className="mb-2 p-2 bg-white rounded-sm">
// // // // // // // // // // //                             {/* QR Code Placeholder */}
// // // // // // // // // // //                             <div className="w-12 h-12 bg-black opacity-10 pattern-grid-lg" />
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                         <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Asset ID</p>
// // // // // // // // // // //                         <p className="font-mono text-xs text-gold-500 bg-gold-500/10 px-2 py-1 rounded border border-gold-500/20 tracking-wider">
// // // // // // // // // // //                             {data.id}
// // // // // // // // // // //                         </p>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // // );

// // // // // // // // // // // // --- THE PUBLIC SCANNER INTERFACE (Logic Wrapper) ---
// // // // // // // // // // // export default function CertificateVault() {
// // // // // // // // // // //   const [query, setQuery] = useState("");
// // // // // // // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // // // // // // //   const [data, setData] = useState<any>(null);

// // // // // // // // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     if (!query) return;

// // // // // // // // // // //     setStatus("searching");
// // // // // // // // // // //     setData(null);
    
// // // // // // // // // // //     // Server Call
// // // // // // // // // // //     const result = await verifyCertificate(query);
    
// // // // // // // // // // //     if (result.success) {
// // // // // // // // // // //         setData(result.data);
// // // // // // // // // // //         setStatus("found");
// // // // // // // // // // //     } else {
// // // // // // // // // // //         setStatus("error");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleDownload = async () => {
// // // // // // // // // // //       const element = document.getElementById("cert-node");
// // // // // // // // // // //       if(element) {
// // // // // // // // // // //           const canvas = await html2canvas(element, { 
// // // // // // // // // // //               backgroundColor: null, 
// // // // // // // // // // //               scale: 3, // High Resolution for Print
// // // // // // // // // // //               useCORS: true 
// // // // // // // // // // //           });
// // // // // // // // // // //           const link = document.createElement("a");
// // // // // // // // // // //           link.download = `Aayam_Legacy_${data.id}.png`;
// // // // // // // // // // //           link.href = canvas.toDataURL("image/png");
// // // // // // // // // // //           link.click();
// // // // // // // // // // //           toast.success("Masterpiece Retrieved");
// // // // // // // // // // //       }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <section className="min-h-screen bg-[#020202] text-[#e0e0e0] flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">
      
// // // // // // // // // // //       {/* ATMOSPHERE: THEATRE DARKNESS */}
// // // // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1a,transparent_80%)] pointer-events-none" />
      
// // // // // // // // // // //       {/* HEADER */}
// // // // // // // // // // //       <div className="text-center mb-12 relative z-10">
// // // // // // // // // // //           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md">
// // // // // // // // // // //               <ShieldCheck className="w-3 h-3 text-gold-500" />
// // // // // // // // // // //               <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
// // // // // // // // // // //                   Secure Legacy Vault
// // // // // // // // // // //               </span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tighter">The Archives</h1>
// // // // // // // // // // //           <p className="font-mono text-xs text-white/30 uppercase tracking-[0.4em]">
// // // // // // // // // // //               Verify • Authenticate • Immortalize
// // // // // // // // // // //           </p>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* SEARCH INTERFACE */}
// // // // // // // // // // //       <div className="w-full max-w-md relative z-20">
// // // // // // // // // // //           <form onSubmit={handleSearch} className="relative group">
// // // // // // // // // // //               <div className="absolute inset-0 bg-gold-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              
// // // // // // // // // // //               <input 
// // // // // // // // // // //                 type="text" 
// // // // // // // // // // //                 value={query}
// // // // // // // // // // //                 onChange={(e) => {
// // // // // // // // // // //                     setQuery(e.target.value);
// // // // // // // // // // //                     if(status !== 'searching') setStatus('idle');
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 placeholder="ENTER LEGACY ID (e.g. AYM-2025-X92A)"
// // // // // // // // // // //                 className="relative w-full bg-[#0a0a0a] border border-white/10 text-white font-mono text-sm p-5 pl-14 rounded-xl focus:outline-none focus:border-gold-500/50 focus:bg-[#0f0f0f] transition-all placeholder:text-white/10 shadow-2xl uppercase tracking-widest"
// // // // // // // // // // //               />
// // // // // // // // // // //               <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-gold-500 transition-colors z-10" />
              
// // // // // // // // // // //               <button 
// // // // // // // // // // //                 type="submit"
// // // // // // // // // // //                 disabled={status === 'searching' || !query}
// // // // // // // // // // //                 className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all disabled:opacity-30 z-10"
// // // // // // // // // // //               >
// // // // // // // // // // //                   {status === 'searching' ? 'Scanning...' : 'Verify'}
// // // // // // // // // // //               </button>
// // // // // // // // // // //           </form>

// // // // // // // // // // //           {/* STATUS INDICATORS */}
// // // // // // // // // // //           <div className="h-16 mt-6 flex justify-center">
// // // // // // // // // // //               {status === 'searching' && (
// // // // // // // // // // //                   <div className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-xs animate-pulse">
// // // // // // // // // // //                       <Loader2 className="w-4 h-4 animate-spin" />
// // // // // // // // // // //                       <span className="tracking-widest">DECRYPTING LEDGER...</span>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //               )}
// // // // // // // // // // //               {status === 'error' && (
// // // // // // // // // // //                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-red-400 font-mono text-xs bg-red-900/10 px-6 py-3 rounded-full border border-red-500/20">
// // // // // // // // // // //                       <XCircle className="w-4 h-4" />
// // // // // // // // // // //                       <span className="tracking-widest">ACCESS DENIED. ID INVALID.</span>
// // // // // // // // // // //                   </motion.div>
// // // // // // // // // // //               )}
// // // // // // // // // // //           </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* RESULT REVEAL */}
// // // // // // // // // // //       <AnimatePresence>
// // // // // // // // // // //           {status === 'found' && data && (
// // // // // // // // // // //               <motion.div 
// // // // // // // // // // //                 initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
// // // // // // // // // // //                 animate={{ opacity: 1, scale: 1, rotateX: 0 }}
// // // // // // // // // // //                 exit={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // // //                 transition={{ duration: 0.8, type: "spring", damping: 25 }}
// // // // // // // // // // //                 className="w-full max-w-4xl relative z-10 perspective-1000"
// // // // // // // // // // //               >
// // // // // // // // // // //                   {/* The Certificate Display */}
// // // // // // // // // // //                   <div className="transform transition-transform hover:scale-[1.01] duration-500">
// // // // // // // // // // //                       <CertificateCard data={data} />
// // // // // // // // // // //                   </div>
                  
// // // // // // // // // // //                   {/* Actions */}
// // // // // // // // // // //                   <div className="mt-8 flex justify-center gap-6">
// // // // // // // // // // //                       <button onClick={handleDownload} className="group flex items-center gap-3 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-500 transition-all rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]">
// // // // // // // // // // //                           <Download className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
// // // // // // // // // // //                           Claim Artifact
// // // // // // // // // // //                       </button>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //               </motion.div>
// // // // // // // // // // //           )}
// // // // // // // // // // //       </AnimatePresence>

// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // }


// // // // // // // // // // "use client";

// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // // import { Search, ShieldCheck, XCircle, Loader2, Award, Download, Feather } from "lucide-react";
// // // // // // // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // // // // // // import html2canvas from "html2canvas";
// // // // // // // // // // import { toast } from "sonner";

// // // // // // // // // // // --- THE MASTERPIECE: "THE ETERNAL STAGE" ---
// // // // // // // // // // export const CertificateCard = ({ data }: { data: any }) => (
// // // // // // // // // //     <div 
// // // // // // // // // //         id="cert-node" 
// // // // // // // // // //         className="relative w-full aspect-[1.414/1] bg-[#020202] text-[#e4e4e7] overflow-hidden flex flex-col p-8 md:p-12 shadow-2xl selection:bg-gold-500/30 font-serif"
// // // // // // // // // //     >
// // // // // // // // // //         {/* --- LAYER 1: THE TEXTURE (Aged Stage Floor) --- */}
// // // // // // // // // //         <div className="absolute inset-0 bg-[#050505]" />
// // // // // // // // // //         {/* Deep Grain Noise */}
// // // // // // // // // //         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
// // // // // // // // // //         {/* --- LAYER 2: THE CURTAIN (Velvet Gradients) --- */}
// // // // // // // // // //         {/* Left Curtain */}
// // // // // // // // // //         <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-950/20 to-transparent opacity-40 pointer-events-none" />
// // // // // // // // // //         {/* Right Curtain */}
// // // // // // // // // //         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-950/20 to-transparent opacity-40 pointer-events-none" />
// // // // // // // // // //         {/* Spotlight Top */}
// // // // // // // // // //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-gradient-to-b from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

// // // // // // // // // //         {/* --- LAYER 3: THE PROSCENIUM (Ornamental Border) --- */}
// // // // // // // // // //         <div className="absolute inset-4 border border-gold-500/30 rounded-sm z-10" />
// // // // // // // // // //         <div className="absolute inset-6 border-[3px] border-double border-gold-500/10 rounded-sm z-10" />
        
// // // // // // // // // //         {/* Corner Motifs (The Mask Geometry) */}
// // // // // // // // // //         <svg className="absolute top-6 left-6 w-12 h-12 text-gold-500/40 z-10" viewBox="0 0 100 100">
// // // // // // // // // //             <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" />
// // // // // // // // // //             <circle cx="10" cy="10" r="2" fill="#D4AF37" />
// // // // // // // // // //         </svg>
// // // // // // // // // //         <svg className="absolute top-6 right-6 w-12 h-12 text-gold-500/40 rotate-90 z-10" viewBox="0 0 100 100">
// // // // // // // // // //             <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" />
// // // // // // // // // //             <circle cx="10" cy="10" r="2" fill="#D4AF37" />
// // // // // // // // // //         </svg>
// // // // // // // // // //         <svg className="absolute bottom-6 left-6 w-12 h-12 text-gold-500/40 -rotate-90 z-10" viewBox="0 0 100 100">
// // // // // // // // // //             <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" />
// // // // // // // // // //             <circle cx="10" cy="10" r="2" fill="#D4AF37" />
// // // // // // // // // //         </svg>
// // // // // // // // // //         <svg className="absolute bottom-6 right-6 w-12 h-12 text-gold-500/40 rotate-180 z-10" viewBox="0 0 100 100">
// // // // // // // // // //             <path d="M0,0 L40,0 L0,40 Z" fill="currentColor" />
// // // // // // // // // //             <circle cx="10" cy="10" r="2" fill="#D4AF37" />
// // // // // // // // // //         </svg>

// // // // // // // // // //         {/* --- LAYER 4: THE SCRIPT (Content) --- */}
// // // // // // // // // //         <div className="relative z-20 flex flex-col h-full items-center text-center justify-between py-6">
            
// // // // // // // // // //             {/* A. THE CROWN (Header) */}
// // // // // // // // // //             <div className="flex flex-col items-center gap-4">
// // // // // // // // // //                 <div className="relative">
// // // // // // // // // //                     {/* The Aayam Crest */}
// // // // // // // // // //                     <div className="w-16 h-16 border border-gold-500/40 rotate-45 flex items-center justify-center bg-black">
// // // // // // // // // //                         <div className="w-12 h-12 border border-gold-500/20 -rotate-45 flex items-center justify-center">
// // // // // // // // // //                             <span className="font-serif text-3xl text-gold-500 font-bold">A</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     {/* Golden Rays */}
// // // // // // // // // //                     <div className="absolute inset-0 bg-gold-500/20 blur-xl -z-10" />
// // // // // // // // // //                 </div>
                
// // // // // // // // // //                 <div className="space-y-2">
// // // // // // // // // //                     <h1 className="text-4xl md:text-5xl tracking-[0.1em] text-white uppercase font-serif border-b border-gold-500/30 pb-2">
// // // // // // // // // //                         Certificate of Honor
// // // // // // // // // //                     </h1>
// // // // // // // // // //                     <p className="font-mono text-[9px] text-gold-500/70 uppercase tracking-[0.4em]">
// // // // // // // // // //                         The Aayam Drama Society • Archives
// // // // // // // // // //                     </p>
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* B. THE PROTAGONIST (Name & Role) */}
// // // // // // // // // //             <div className="flex-1 flex flex-col justify-center w-full max-w-4xl space-y-6">
// // // // // // // // // //                 <p className="font-serif italic text-white/40 text-sm md:text-base">
// // // // // // // // // //                     This testament is hereby conferred upon
// // // // // // // // // //                 </p>
                
// // // // // // // // // //                 <div className="relative">
// // // // // // // // // //                     <h2 className="text-5xl md:text-7xl text-white font-medium tracking-tight drop-shadow-2xl font-serif">
// // // // // // // // // //                         {data.recipient_name}
// // // // // // // // // //                     </h2>
// // // // // // // // // //                     {/* Flourish Underline */}
// // // // // // // // // //                     <div className="w-64 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="space-y-2">
// // // // // // // // // //                     <p className="font-serif text-white/60 text-lg">
// // // // // // // // // //                         In recognition of outstanding artistry as
// // // // // // // // // //                     </p>
// // // // // // // // // //                     <p className="text-2xl md:text-3xl text-gold-400 uppercase tracking-widest font-serif">
// // // // // // // // // //                         {data.award_title}
// // // // // // // // // //                     </p>
// // // // // // // // // //                     <p className="font-serif text-white/50 text-sm italic pt-2">
// // // // // // // // // //                         presented during the production of <br/>
// // // // // // // // // //                         <span className="text-white not-italic uppercase tracking-wider text-lg border-b border-white/10 pb-1 inline-block mt-1">
// // // // // // // // // //                             {data.event_name}
// // // // // // // // // //                         </span>
// // // // // // // // // //                     </p>
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* C. THE SEAL (Footer) */}
// // // // // // // // // //             <div className="w-full flex justify-between items-end px-4 md:px-8">
                
// // // // // // // // // //                 {/* 1. The Authority */}
// // // // // // // // // //                 <div className="text-left">
// // // // // // // // // //                     <div className="w-32 h-12 flex items-end justify-start mb-2 opacity-80">
// // // // // // // // // //                        {/* Simulated Signature */}
// // // // // // // // // //                        <span className="font-cursive text-3xl text-white italic transform -rotate-2" style={{ fontFamily: 'cursive' }}>Siddharth</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div className="h-px w-40 bg-gold-500/30 mb-2" />
// // // // // // // // // //                     <p className="font-serif text-xs text-white">Siddharth</p>
// // // // // // // // // //                     <p className="font-mono text-[8px] text-gold-500/60 uppercase tracking-widest">General Secretary</p>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* 2. The Golden Stamp */}
// // // // // // // // // //                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
// // // // // // // // // //                     <div className="w-24 h-24 rounded-full border-2 border-gold-500/40 flex items-center justify-center opacity-80">
// // // // // // // // // //                         <div className="w-20 h-20 rounded-full border border-gold-500/20 flex items-center justify-center bg-gold-500/5">
// // // // // // // // // //                             <Award className="w-8 h-8 text-gold-500" />
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* 3. The Ledger ID */}
// // // // // // // // // //                 <div className="text-right">
// // // // // // // // // //                     <div className="flex flex-col items-end gap-1">
// // // // // // // // // //                         <ShieldCheck className="w-4 h-4 text-green-500/80 mb-1" />
// // // // // // // // // //                         <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest">Legacy Hash</p>
// // // // // // // // // //                         <p className="font-mono text-[10px] text-gold-500 border border-gold-500/20 px-2 py-1 rounded bg-gold-500/5">
// // // // // // // // // //                             {data.id}
// // // // // // // // // //                         </p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //             </div>
// // // // // // // // // //         </div>
// // // // // // // // // //     </div>
// // // // // // // // // // );

// // // // // // // // // // // --- THE PUBLIC SCANNER INTERFACE ---
// // // // // // // // // // export default function CertificateVault() {
// // // // // // // // // //   const [query, setQuery] = useState("");
// // // // // // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // // // // // //   const [data, setData] = useState<any>(null);

// // // // // // // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //     if (!query) return;

// // // // // // // // // //     setStatus("searching");
// // // // // // // // // //     setData(null);
    
// // // // // // // // // //     // Server Call
// // // // // // // // // //     const result = await verifyCertificate(query);
    
// // // // // // // // // //     if (result.success) {
// // // // // // // // // //         setData(result.data);
// // // // // // // // // //         setStatus("found");
// // // // // // // // // //     } else {
// // // // // // // // // //         setStatus("error");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleDownload = async () => {
// // // // // // // // // //       const element = document.getElementById("cert-node");
// // // // // // // // // //       if(element) {
// // // // // // // // // //           const canvas = await html2canvas(element, { 
// // // // // // // // // //               backgroundColor: null, 
// // // // // // // // // //               scale: 3, // Print Quality
// // // // // // // // // //               useCORS: true 
// // // // // // // // // //           });
// // // // // // // // // //           const link = document.createElement("a");
// // // // // // // // // //           link.download = `Aayam_Legacy_${data.id}.png`;
// // // // // // // // // //           link.href = canvas.toDataURL("image/png");
// // // // // // // // // //           link.click();
// // // // // // // // // //           toast.success("Masterpiece Retrieved");
// // // // // // // // // //       }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <section className="min-h-screen bg-[#020202] text-[#e0e0e0] flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">
      
// // // // // // // // // //       {/* ATMOSPHERE */}
// // // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1a,transparent_80%)] pointer-events-none" />
// // // // // // // // // //       <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')] pointer-events-none" />

// // // // // // // // // //       {/* HEADER */}
// // // // // // // // // //       <div className="text-center mb-12 relative z-10">
// // // // // // // // // //           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md">
// // // // // // // // // //               <ShieldCheck className="w-3 h-3 text-gold-500" />
// // // // // // // // // //               <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
// // // // // // // // // //                   Secure Legacy Vault
// // // // // // // // // //               </span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tighter">The Archives</h1>
// // // // // // // // // //           <p className="font-mono text-xs text-white/30 uppercase tracking-[0.4em]">
// // // // // // // // // //               Verify • Authenticate • Immortalize
// // // // // // // // // //           </p>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* SEARCH BAR */}
// // // // // // // // // //       <div className="w-full max-w-md relative z-20">
// // // // // // // // // //           <form onSubmit={handleSearch} className="relative group">
// // // // // // // // // //               <div className="absolute inset-0 bg-gold-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              
// // // // // // // // // //               <input 
// // // // // // // // // //                 type="text" 
// // // // // // // // // //                 value={query}
// // // // // // // // // //                 onChange={(e) => {
// // // // // // // // // //                     setQuery(e.target.value);
// // // // // // // // // //                     if(status !== 'searching') setStatus('idle');
// // // // // // // // // //                 }}
// // // // // // // // // //                 placeholder="ENTER LEGACY ID (e.g. AYM-2025-X92A)"
// // // // // // // // // //                 className="relative w-full bg-[#0a0a0a] border border-white/10 text-white font-mono text-sm p-5 pl-14 rounded-xl focus:outline-none focus:border-gold-500/50 focus:bg-[#0f0f0f] transition-all placeholder:text-white/10 shadow-2xl uppercase tracking-widest"
// // // // // // // // // //               />
// // // // // // // // // //               <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-gold-500 transition-colors z-10" />
              
// // // // // // // // // //               <button 
// // // // // // // // // //                 type="submit"
// // // // // // // // // //                 disabled={status === 'searching' || !query}
// // // // // // // // // //                 className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all disabled:opacity-30 z-10"
// // // // // // // // // //               >
// // // // // // // // // //                   {status === 'searching' ? 'Scanning...' : 'Verify'}
// // // // // // // // // //               </button>
// // // // // // // // // //           </form>

// // // // // // // // // //           {/* STATUS */}
// // // // // // // // // //           <div className="h-16 mt-6 flex justify-center">
// // // // // // // // // //               {status === 'searching' && (
// // // // // // // // // //                   <div className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-xs animate-pulse">
// // // // // // // // // //                       <Loader2 className="w-4 h-4 animate-spin" />
// // // // // // // // // //                       <span className="tracking-widest">DECRYPTING LEDGER...</span>
// // // // // // // // // //                   </div>
// // // // // // // // // //               )}
// // // // // // // // // //               {status === 'error' && (
// // // // // // // // // //                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-red-400 font-mono text-xs bg-red-900/10 px-6 py-3 rounded-full border border-red-500/20">
// // // // // // // // // //                       <XCircle className="w-4 h-4" />
// // // // // // // // // //                       <span className="tracking-widest">ACCESS DENIED. ID INVALID.</span>
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //               )}
// // // // // // // // // //           </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* RESULT */}
// // // // // // // // // //       <AnimatePresence>
// // // // // // // // // //           {status === 'found' && data && (
// // // // // // // // // //               <motion.div 
// // // // // // // // // //                 initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
// // // // // // // // // //                 animate={{ opacity: 1, scale: 1, rotateX: 0 }}
// // // // // // // // // //                 exit={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // //                 transition={{ duration: 0.8, type: "spring", damping: 25 }}
// // // // // // // // // //                 className="w-full max-w-4xl relative z-10 perspective-1000"
// // // // // // // // // //               >
// // // // // // // // // //                   <div className="transform transition-transform hover:scale-[1.01] duration-500">
// // // // // // // // // //                       <CertificateCard data={data} />
// // // // // // // // // //                   </div>
                  
// // // // // // // // // //                   <div className="mt-8 flex justify-center gap-6">
// // // // // // // // // //                       <button onClick={handleDownload} className="group flex items-center gap-3 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-500 transition-all rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]">
// // // // // // // // // //                           <Download className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
// // // // // // // // // //                           Claim Artifact
// // // // // // // // // //                       </button>
// // // // // // // // // //                   </div>
// // // // // // // // // //               </motion.div>
// // // // // // // // // //           )}
// // // // // // // // // //       </AnimatePresence>

// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // "use client";

// // // // // // // // // import { useState } from "react";
// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // import { Search, Loader2, Download, ShieldCheck, XCircle } from "lucide-react";
// // // // // // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // // // // // import html2canvas from "html2canvas";
// // // // // // // // // import { toast } from "sonner";

// // // // // // // // // // --- ASSET: THE AAYAM EMBLEM (SVG Construction) ---
// // // // // // // // // const AayamCrest = ({ className }: { className?: string }) => (
// // // // // // // // //   <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
// // // // // // // // //     {/* The Mask (Drama) */}
// // // // // // // // //     <path d="M20,30 Q50,5 80,30 Q90,60 50,95 Q10,60 20,30 Z" strokeWidth="2" fill="none" />
// // // // // // // // //     <path d="M35,40 Q40,35 45,40" strokeWidth="2" strokeLinecap="round" />
// // // // // // // // //     <path d="M55,40 Q60,35 65,40" strokeWidth="2" strokeLinecap="round" />
// // // // // // // // //     <path d="M35,65 Q50,75 65,65" strokeWidth="2" strokeLinecap="round" />
// // // // // // // // //     {/* The 'A' (Identity) */}
// // // // // // // // //     <path d="M50,20 L30,80 M50,20 L70,80 M38,60 L62,60" strokeWidth="3" className="text-maroon-700" />
// // // // // // // // //   </svg>
// // // // // // // // // );

// // // // // // // // // // --- THE MASTERPIECE: "SANSKRITI" DESIGN ---
// // // // // // // // // export const CertificateCard = ({ data }: { data: any }) => (
// // // // // // // // //     <div 
// // // // // // // // //         id="cert-node" 
// // // // // // // // //         className="relative w-full aspect-[1.414/1] bg-[#F9F7F1] text-[#1a1a1a] overflow-hidden flex flex-col p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-serif select-none"
// // // // // // // // //     >
// // // // // // // // //         {/* --- LAYER 1: THE PARCHMENT TEXTURE --- */}
// // // // // // // // //         <div className="absolute inset-0 bg-[#F9F7F1]" />
// // // // // // // // //         <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        
// // // // // // // // //         {/* --- LAYER 2: THE WATERMARK (The Soul) --- */}
// // // // // // // // //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] opacity-[0.03] pointer-events-none grayscale">
// // // // // // // // //             <AayamCrest className="w-full h-full text-maroon-900" />
// // // // // // // // //         </div>

// // // // // // // // //         {/* --- LAYER 3: THE BORDER (The Frame) --- */}
// // // // // // // // //         <div className="absolute inset-3 border-2 border-maroon-900/80" />
// // // // // // // // //         <div className="absolute inset-5 border border-gold-600/60" />
        
// // // // // // // // //         {/* Corner Ornaments (Indian Motif) */}
// // // // // // // // //         <svg className="absolute top-5 left-5 w-16 h-16 text-maroon-900" viewBox="0 0 100 100">
// // // // // // // // //             <path d="M10,10 L40,10 Q25,25 10,40 Z" fill="currentColor" />
// // // // // // // // //             <path d="M15,15 L90,15" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //             <path d="M15,15 L15,90" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //         </svg>
// // // // // // // // //         <svg className="absolute top-5 right-5 w-16 h-16 text-maroon-900 rotate-90" viewBox="0 0 100 100">
// // // // // // // // //             <path d="M10,10 L40,10 Q25,25 10,40 Z" fill="currentColor" />
// // // // // // // // //             <path d="M15,15 L90,15" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //             <path d="M15,15 L15,90" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //         </svg>
// // // // // // // // //         <svg className="absolute bottom-5 left-5 w-16 h-16 text-maroon-900 -rotate-90" viewBox="0 0 100 100">
// // // // // // // // //             <path d="M10,10 L40,10 Q25,25 10,40 Z" fill="currentColor" />
// // // // // // // // //             <path d="M15,15 L90,15" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //             <path d="M15,15 L15,90" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //         </svg>
// // // // // // // // //         <svg className="absolute bottom-5 right-5 w-16 h-16 text-maroon-900 rotate-180" viewBox="0 0 100 100">
// // // // // // // // //             <path d="M10,10 L40,10 Q25,25 10,40 Z" fill="currentColor" />
// // // // // // // // //             <path d="M15,15 L90,15" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //             <path d="M15,15 L15,90" stroke="currentColor" strokeWidth="1" />
// // // // // // // // //         </svg>

// // // // // // // // //         {/* --- LAYER 4: THE CONTENT (The Decree) --- */}
// // // // // // // // //         <div className="relative z-10 flex flex-col h-full items-center text-center justify-between py-6">
            
// // // // // // // // //             {/* A. HEADER: INSTITUTION */}
// // // // // // // // //             <div className="flex flex-col items-center gap-2">
// // // // // // // // //                 <div className="flex items-center gap-4 mb-2">
// // // // // // // // //                     {/* Placeholder for REAL IITM Logo if available, else decorative */}
// // // // // // // // //                     <div className="w-10 h-10 opacity-80 bg-contain bg-no-repeat bg-center bg-[url('https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg')]" />
                    
// // // // // // // // //                     <div className="h-8 w-px bg-maroon-900/30" />
                    
// // // // // // // // //                     <AayamCrest className="w-10 h-10 text-maroon-900" />
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <h2 className="font-serif text-sm md:text-base font-bold text-maroon-900 tracking-widest uppercase">
// // // // // // // // //                     Aayam Drama Society
// // // // // // // // //                 </h2>
// // // // // // // // //                 <p className="font-sans text-[10px] text-gray-600 uppercase tracking-wider">
// // // // // // // // //                     Indian Institute of Technology, Madras
// // // // // // // // //                 </p>
// // // // // // // // //             </div>

// // // // // // // // //             {/* B. TITLE: THE HONOR */}
// // // // // // // // //             <div className="mt-2 mb-2">
// // // // // // // // //                 <h1 className="font-serif text-3xl md:text-5xl text-maroon-950 font-medium uppercase tracking-wide border-b-2 border-double border-gold-600/50 pb-2 px-8">
// // // // // // // // //                     Certificate of Merit
// // // // // // // // //                 </h1>
// // // // // // // // //                 {/* Sanskrit Motto */}
// // // // // // // // //                 <p className="font-serif italic text-gold-700 text-xs mt-2">
// // // // // // // // //                     "Naatyasya Gaanam Anantham"
// // // // // // // // //                 </p>
// // // // // // // // //             </div>

// // // // // // // // //             {/* C. BODY: THE NARRATIVE */}
// // // // // // // // //             <div className="flex-1 flex flex-col justify-center w-full max-w-3xl space-y-4">
// // // // // // // // //                 <p className="font-serif text-gray-600 text-sm md:text-base italic">
// // // // // // // // //                     This is to certify that
// // // // // // // // //                 </p>
                
// // // // // // // // //                 <div className="relative py-2">
// // // // // // // // //                     <h2 className="font-cursive text-4xl md:text-6xl text-black py-2" style={{ fontFamily: '"Great Vibes", cursive, serif' }}>
// // // // // // // // //                         {data.recipient_name}
// // // // // // // // //                     </h2>
// // // // // // // // //                 </div>

// // // // // // // // //                 <p className="font-serif text-gray-800 leading-relaxed text-sm md:text-lg">
// // // // // // // // //                     has successfully exemplified artistic excellence as 
// // // // // // // // //                     <span className="font-bold text-maroon-900 mx-2 block md:inline text-xl">
// // // // // // // // //                         {data.award_title}
// // // // // // // // //                     </span>
// // // // // // // // //                     <br className="hidden md:block"/>
// // // // // // // // //                     during the production of
// // // // // // // // //                     <span className="font-bold text-maroon-900 mx-2 uppercase tracking-wide">
// // // // // // // // //                         "{data.event_name}"
// // // // // // // // //                     </span>
// // // // // // // // //                 </p>
// // // // // // // // //             </div>

// // // // // // // // //             {/* D. FOOTER: AUTHENTICATION */}
// // // // // // // // //             <div className="w-full flex justify-between items-end px-8 md:px-16 pt-8">
                
// // // // // // // // //                 {/* 1. DATE */}
// // // // // // // // //                 <div className="text-left w-1/3">
// // // // // // // // //                     <p className="font-serif text-sm text-black border-b border-gray-400 inline-block pb-1 min-w-[100px]">
// // // // // // // // //                         {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
// // // // // // // // //                     </p>
// // // // // // // // //                     <p className="font-sans text-[9px] text-gray-500 uppercase tracking-widest mt-1">Date of Issue</p>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* 2. THE SEAL (Wax Style) */}
// // // // // // // // //                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
// // // // // // // // //                     <div className="w-24 h-24 rounded-full bg-red-900 shadow-lg flex items-center justify-center border-4 border-red-800 opacity-90">
// // // // // // // // //                         <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center">
// // // // // // // // //                             <span className="text-white/20 font-serif text-[8px] uppercase tracking-widest rotate-[-15deg] text-center leading-tight">
// // // // // // // // //                                 Official<br/>Seal<br/>IITM
// // // // // // // // //                             </span>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* 3. SIGNATURE (The Authority) */}
// // // // // // // // //                 <div className="text-right w-1/3 flex flex-col items-end">
// // // // // // // // //                     <div className="w-32 h-12 flex items-end justify-end mb-1">
// // // // // // // // //                        {/* Realistic Signature Path */}
// // // // // // // // //                        <svg viewBox="0 0 150 60" className="w-full h-full stroke-black fill-none stroke-2">
// // // // // // // // //                            <path d="M10,50 Q40,10 60,40 T110,30 T140,50" className="opacity-80" />
// // // // // // // // //                        </svg>
// // // // // // // // //                     </div>
// // // // // // // // //                     <div className="h-px w-40 bg-gray-800 mb-1" />
// // // // // // // // //                     <p className="font-serif font-bold text-sm text-black">Siddharth</p>
// // // // // // // // //                     <p className="font-sans text-[9px] text-gray-500 uppercase tracking-widest">General Secretary, Aayam</p>
// // // // // // // // //                 </div>
// // // // // // // // //             </div>
            
// // // // // // // // //             {/* E. VERIFICATION ID (Subtle) */}
// // // // // // // // //             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-50">
// // // // // // // // //                 <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.2em]">
// // // // // // // // //                     Legacy Hash: {data.id}
// // // // // // // // //                 </p>
// // // // // // // // //             </div>
// // // // // // // // //         </div>
// // // // // // // // //     </div>
// // // // // // // // // );

// // // // // // // // // // --- PAGE WRAPPER ---
// // // // // // // // // export default function CertificateVault() {
// // // // // // // // //   const [query, setQuery] = useState("");
// // // // // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // // // // //   const [data, setData] = useState<any>(null);

// // // // // // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (!query) return;
// // // // // // // // //     setStatus("searching");
// // // // // // // // //     const result = await verifyCertificate(query);
// // // // // // // // //     if (result.success) {
// // // // // // // // //         setData(result.data);
// // // // // // // // //         setStatus("found");
// // // // // // // // //     } else {
// // // // // // // // //         setStatus("error");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleDownload = async () => {
// // // // // // // // //       const element = document.getElementById("cert-node");
// // // // // // // // //       if(element) {
// // // // // // // // //           const canvas = await html2canvas(element, { backgroundColor: null, scale: 3 });
// // // // // // // // //           const link = document.createElement("a");
// // // // // // // // //           link.download = `Aayam_Cert_${data.id}.png`;
// // // // // // // // //           link.href = canvas.toDataURL("image/png");
// // // // // // // // //           link.click();
// // // // // // // // //           toast.success("Certificate Retrieved");
// // // // // // // // //       }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-4 relative font-serif">
// // // // // // // // //       {/* Background Texture */}
// // // // // // // // //       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />

// // // // // // // // //       <div className="text-center mb-10 relative z-10">
// // // // // // // // //           <h1 className="text-4xl md:text-6xl text-gold-500 mb-2 tracking-tight">The Legacy Vault</h1>
// // // // // // // // //           <p className="font-sans text-xs text-white/40 uppercase tracking-[0.3em]">Official Aayam Archives</p>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Search Bar */}
// // // // // // // // //       <div className="w-full max-w-md relative z-20 mb-8">
// // // // // // // // //           <form onSubmit={handleSearch} className="relative group">
// // // // // // // // //               <input 
// // // // // // // // //                 type="text" 
// // // // // // // // //                 value={query}
// // // // // // // // //                 onChange={(e) => setQuery(e.target.value)}
// // // // // // // // //                 placeholder="ENTER CERTIFICATE ID"
// // // // // // // // //                 className="w-full bg-white/5 border border-white/10 text-white font-mono text-sm p-4 pl-12 rounded-lg focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-white/20 uppercase tracking-widest"
// // // // // // // // //               />
// // // // // // // // //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
// // // // // // // // //               <button 
// // // // // // // // //                 type="submit"
// // // // // // // // //                 disabled={status === 'searching' || !query}
// // // // // // // // //                 className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white/10 hover:bg-gold-500 hover:text-black text-white/60 rounded text-[10px] font-sans uppercase tracking-wider transition-all disabled:opacity-30"
// // // // // // // // //               >
// // // // // // // // //                   {status === 'searching' ? 'Verifying...' : 'Verify'}
// // // // // // // // //               </button>
// // // // // // // // //           </form>
          
// // // // // // // // //           {status === 'error' && (
// // // // // // // // //               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mt-4 text-red-400 text-xs justify-center font-sans">
// // // // // // // // //                   <XCircle className="w-4 h-4" />
// // // // // // // // //                   <span>Record not found in the archives.</span>
// // // // // // // // //               </motion.div>
// // // // // // // // //           )}
// // // // // // // // //       </div>

// // // // // // // // //       <AnimatePresence>
// // // // // // // // //           {status === 'found' && data && (
// // // // // // // // //               <motion.div 
// // // // // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // // // // //                 exit={{ opacity: 0, y: 20 }}
// // // // // // // // //                 transition={{ duration: 0.5 }}
// // // // // // // // //                 className="w-full max-w-4xl relative z-10"
// // // // // // // // //               >
// // // // // // // // //                   <div className="shadow-2xl border-[8px] border-[#1a1a1a] rounded-sm">
// // // // // // // // //                       <CertificateCard data={data} />
// // // // // // // // //                   </div>
                  
// // // // // // // // //                   <div className="mt-8 flex justify-center">
// // // // // // // // //                       <button onClick={handleDownload} className="flex items-center gap-3 px-8 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all rounded-sm shadow-lg">
// // // // // // // // //                           <Download className="w-4 h-4" /> 
// // // // // // // // //                           Download High-Res
// // // // // // // // //                       </button>
// // // // // // // // //                   </div>
// // // // // // // // //               </motion.div>
// // // // // // // // //           )}
// // // // // // // // //       </AnimatePresence>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // "use client";

// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // import { Search, Loader2, Download, ShieldCheck, XCircle, Feather } from "lucide-react";
// // // // // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // // // // import html2canvas from "html2canvas";
// // // // // // // // import { toast } from "sonner";

// // // // // // // // // --- ART ASSET: THE AAYAM MUDRA (Clay Seal) ---
// // // // // // // // const AayamMudra = () => (
// // // // // // // //   <div className="relative w-24 h-24 rounded-full bg-[#8B3A3A] shadow-inner flex items-center justify-center border-4 border-[#682a2a] opacity-90 rotate-[-10deg]">
// // // // // // // //     {/* Inner Clay Texture */}
// // // // // // // //     <div className="absolute inset-0 rounded-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-multiply" />
// // // // // // // //     <div className="absolute inset-2 rounded-full border border-[#a85555] opacity-50" />
    
// // // // // // // //     <div className="relative z-10 flex flex-col items-center justify-center transform rotate-[10deg]">
// // // // // // // //         <span className="font-serif text-3xl font-bold text-[#E8C39E] drop-shadow-md">A</span>
// // // // // // // //         <span className="font-mono text-[6px] uppercase tracking-widest text-[#d4a88c] mt-1">
// // // // // // // //             EST. 2026
// // // // // // // //         </span>
// // // // // // // //     </div>
// // // // // // // //   </div>
// // // // // // // // );

// // // // // // // // // --- ART ASSET: THE NAVARASA MANDALA (Background Art) ---
// // // // // // // // const NavarasaMandala = () => (
// // // // // // // //     <svg className="absolute inset-0 w-full h-full text-maroon-900/5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
// // // // // // // //         <defs>
// // // // // // // //             <pattern id="mandala" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
// // // // // // // //                 <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.2" />
// // // // // // // //                 <path d="M10,2 L12,10 L18,10 L14,14 L16,20 L10,16 L4,20 L6,14 L2,10 L8,10 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
// // // // // // // //             </pattern>
// // // // // // // //         </defs>
// // // // // // // //         <rect width="100" height="100" fill="url(#mandala)" />
// // // // // // // //         {/* Central Burst */}
// // // // // // // //         <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
// // // // // // // //         <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
// // // // // // // //     </svg>
// // // // // // // // );

// // // // // // // // // --- THE MASTERPIECE: "THE NATYAVEDA CANVAS" ---
// // // // // // // // export const CertificateCard = ({ data }: { data: any }) => (
// // // // // // // //     <div 
// // // // // // // //         id="cert-node" 
// // // // // // // //         className="relative w-full aspect-[1.414/1] bg-[#F2EFE9] text-[#2c2420] overflow-hidden flex flex-col p-12 shadow-2xl font-serif select-none"
// // // // // // // //     >
// // // // // // // //         {/* --- LAYER 1: THE LIVING CANVAS --- */}
// // // // // // // //         {/* Handmade Paper Texture */}
// // // // // // // //         <div className="absolute inset-0 bg-[#F2EFE9]" />
// // // // // // // //         <div className="absolute inset-0 opacity-[0.6] bg-[url('https://www.transparenttextures.com/patterns/rough-cloth.png')] mix-blend-multiply" />
// // // // // // // //         <div className="absolute inset-0 opacity-[0.2] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
        
// // // // // // // //         {/* Old Paper Vignette */}
// // // // // // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_50%,rgba(139,69,19,0.1)_100%)] pointer-events-none" />

// // // // // // // //         {/* --- LAYER 2: THE SOUL (Background Art) --- */}
// // // // // // // //         <div className="absolute inset-0 opacity-40 mix-blend-multiply">
// // // // // // // //             <NavarasaMandala />
// // // // // // // //         </div>
        
// // // // // // // //         {/* --- LAYER 3: THE FRAME (Ornamental) --- */}
// // // // // // // //         <div className="absolute inset-6 border-[1px] border-[#8B3A3A]/30 rounded-sm z-10" />
// // // // // // // //         <div className="absolute inset-8 border-[2px] border-[#8B3A3A]/10 border-dashed rounded-sm z-10" />
        
// // // // // // // //         {/* Corner Flourishes (Kalamkari Style) */}
// // // // // // // //         <div className="absolute top-6 left-6 w-24 h-24 opacity-60 z-10">
// // // // // // // //             <svg viewBox="0 0 100 100" className="text-[#8B3A3A] fill-current">
// // // // // // // //                 <path d="M0,0 Q50,0 50,50 Q50,0 100,0 L0,0 Z" />
// // // // // // // //                 <circle cx="20" cy="20" r="2" className="text-gold-500 fill-current" />
// // // // // // // //             </svg>
// // // // // // // //         </div>
// // // // // // // //         <div className="absolute bottom-6 right-6 w-24 h-24 opacity-60 rotate-180 z-10">
// // // // // // // //             <svg viewBox="0 0 100 100" className="text-[#8B3A3A] fill-current">
// // // // // // // //                 <path d="M0,0 Q50,0 50,50 Q50,0 100,0 L0,0 Z" />
// // // // // // // //             </svg>
// // // // // // // //         </div>

// // // // // // // //         {/* --- LAYER 4: THE NARRATIVE (Content) --- */}
// // // // // // // //         <div className="relative z-20 flex flex-col h-full items-center text-center justify-between py-8">
            
// // // // // // // //             {/* A. INVOCATION */}
// // // // // // // //             <div className="space-y-4 w-full">
// // // // // // // //                 <div className="flex justify-between items-start px-8">
// // // // // // // //                     <div className="text-left opacity-60">
// // // // // // // //                         <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8B3A3A]">Ref. No</p>
// // // // // // // //                         <p className="font-mono text-xs text-black">{data.id}</p>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="text-right opacity-60">
// // // // // // // //                         <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8B3A3A]">Date</p>
// // // // // // // //                         <p className="font-mono text-xs text-black">
// // // // // // // //                             {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
// // // // // // // //                         </p>
// // // // // // // //                     </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="flex flex-col items-center mt-4">
// // // // // // // //                     <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-tight uppercase" style={{ letterSpacing: '0.1em' }}>
// // // // // // // //                         Aayam
// // // // // // // //                     </h1>
// // // // // // // //                     <p className="font-sans text-[10px] text-[#8B3A3A] uppercase tracking-[0.4em] mt-2 border-b border-[#8B3A3A]/20 pb-2">
// // // // // // // //                         The Drama Society • IIT Madras
// // // // // // // //                     </p>
// // // // // // // //                 </div>
// // // // // // // //             </div>

// // // // // // // //             {/* B. THE PROCLAMATION */}
// // // // // // // //             <div className="flex-1 flex flex-col justify-center w-full max-w-4xl relative">
// // // // // // // //                 {/* Background wash behind name */}
// // // // // // // //                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gold-500/10 blur-3xl rounded-full" />

// // // // // // // //                 <p className="font-serif italic text-[#5a4a42] text-lg mb-6">
// // // // // // // //                     In deep appreciation of the art and soul of
// // // // // // // //                 </p>
                
// // // // // // // //                 <h2 className="font-cursive text-6xl md:text-8xl text-[#1a1a1a] mb-6 transform -rotate-1 drop-shadow-sm" style={{ fontFamily: 'cursive' }}>
// // // // // // // //                     {data.recipient_name}
// // // // // // // //                 </h2>

// // // // // // // //                 <p className="font-serif text-[#2c2420] text-xl leading-relaxed max-w-2xl mx-auto">
// // // // // // // //                     Who brought life to the stage as <br/>
// // // // // // // //                     <span className="font-bold text-[#8B3A3A] text-2xl block my-3 uppercase tracking-wide">
// // // // // // // //                         {data.award_title}
// // // // // // // //                     </span>
// // // // // // // //                     in the timeless production <br/>
// // // // // // // //                     <span className="font-bold text-[#1a1a1a] text-xl italic border-b border-black/10">
// // // // // // // //                         "{data.event_name}"
// // // // // // // //                     </span>
// // // // // // // //                 </p>
// // // // // // // //             </div>

// // // // // // // //             {/* C. THE COVENANT (Footer) */}
// // // // // // // //             <div className="w-full flex justify-between items-end px-12 pt-12">
                
// // // // // // // //                 {/* 1. Signature */}
// // // // // // // //                 <div className="text-center relative">
// // // // // // // //                     {/* Ink Splatter */}
// // // // // // // //                     <div className="absolute -top-12 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] mix-blend-multiply pointer-events-none" />
                    
// // // // // // // //                     <div className="w-48 h-16 flex items-end justify-center mb-2">
// // // // // // // //                        {/* SVG Signature simulating real ink pressure */}
// // // // // // // //                        <svg viewBox="0 0 200 80" className="w-full h-full fill-none stroke-[#1a1a1a] stroke-[2]">
// // // // // // // //                            <path d="M20,60 C50,10 80,70 120,40 S180,60 190,50" className="opacity-90" strokeLinecap="round" />
// // // // // // // //                        </svg>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="h-px w-48 bg-[#2c2420] mb-2" />
// // // // // // // //                     <p className="font-sans text-xs font-bold text-[#1a1a1a] uppercase tracking-wider">Siddharth</p>
// // // // // // // //                     <p className="font-mono text-[9px] text-[#8B3A3A] uppercase tracking-widest">Secretary</p>
// // // // // // // //                 </div>

// // // // // // // //                 {/* 2. The Mudra (Seal) */}
// // // // // // // //                 <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
// // // // // // // //                     <AayamMudra />
// // // // // // // //                 </div>

// // // // // // // //                 {/* 3. The Motto */}
// // // // // // // //                 <div className="text-center w-48 opacity-80">
// // // // // // // //                     <Feather className="w-6 h-6 text-[#8B3A3A] mx-auto mb-3 opacity-50" />
// // // // // // // //                     <p className="font-serif italic text-xs text-[#5a4a42]">
// // // // // // // //                         "Naatyasya Gaanam Anantham"
// // // // // // // //                     </p>
// // // // // // // //                     <p className="font-mono text-[8px] text-[#8B3A3A]/60 uppercase tracking-widest mt-1">
// // // // // // // //                         (Art is Eternal)
// // // // // // // //                     </p>
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     </div>
// // // // // // // // );

// // // // // // // // // --- THE INTERFACE (Logic) ---
// // // // // // // // export default function CertificateVault() {
// // // // // // // //   const [query, setQuery] = useState("");
// // // // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // // // //   const [data, setData] = useState<any>(null);

// // // // // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (!query) return;
// // // // // // // //     setStatus("searching");
// // // // // // // //     const result = await verifyCertificate(query);
// // // // // // // //     if (result.success) {
// // // // // // // //         setData(result.data);
// // // // // // // //         setStatus("found");
// // // // // // // //     } else {
// // // // // // // //         setStatus("error");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleDownload = async () => {
// // // // // // // //       const element = document.getElementById("cert-node");
// // // // // // // //       if(element) {
// // // // // // // //           const canvas = await html2canvas(element, { backgroundColor: null, scale: 3, useCORS: true });
// // // // // // // //           const link = document.createElement("a");
// // // // // // // //           link.download = `Aayam_Art_${data.id}.png`;
// // // // // // // //           link.href = canvas.toDataURL("image/png");
// // // // // // // //           link.click();
// // // // // // // //           toast.success("Masterpiece Saved");
// // // // // // // //       }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">
      
// // // // // // // //       {/* ATMOSPHERE: MUSEUM LIGHTING */}
// // // // // // // //       <div className="absolute inset-0 bg-[#050505]" />
// // // // // // // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/5 blur-[120px] pointer-events-none" />

// // // // // // // //       {/* HEADER */}
// // // // // // // //       <div className="text-center mb-12 relative z-10">
// // // // // // // //           <h1 className="text-4xl md:text-6xl font-serif text-white/90 mb-3 tracking-tight">The Art Gallery</h1>
// // // // // // // //           <p className="font-mono text-xs text-white/30 uppercase tracking-[0.4em]">
// // // // // // // //               Aayam Legacy Archives
// // // // // // // //           </p>
// // // // // // // //       </div>

// // // // // // // //       {/* SEARCH */}
// // // // // // // //       <div className="w-full max-w-md relative z-20 mb-8">
// // // // // // // //           <form onSubmit={handleSearch} className="relative group">
// // // // // // // //               <input 
// // // // // // // //                 type="text" 
// // // // // // // //                 value={query}
// // // // // // // //                 onChange={(e) => setQuery(e.target.value)}
// // // // // // // //                 placeholder="ENTER ART ID"
// // // // // // // //                 className="w-full bg-white/5 border border-white/10 text-white font-mono text-sm p-4 pl-12 rounded-full focus:outline-none focus:border-gold-500/30 transition-all placeholder:text-white/20 uppercase tracking-widest text-center"
// // // // // // // //               />
// // // // // // // //               <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
// // // // // // // //           </form>
          
// // // // // // // //           {status === 'error' && (
// // // // // // // //               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 mt-4 text-red-400/60 text-xs font-mono">
// // // // // // // //                   <XCircle className="w-3 h-3" />
// // // // // // // //                   <span>Art piece not found.</span>
// // // // // // // //               </motion.div>
// // // // // // // //           )}
// // // // // // // //       </div>

// // // // // // // //       {/* REVEAL */}
// // // // // // // //       <AnimatePresence>
// // // // // // // //           {status === 'found' && data && (
// // // // // // // //               <motion.div 
// // // // // // // //                 initial={{ opacity: 0, y: 40, rotateX: 10 }}
// // // // // // // //                 animate={{ opacity: 1, y: 0, rotateX: 0 }}
// // // // // // // //                 exit={{ opacity: 0, y: 40 }}
// // // // // // // //                 transition={{ duration: 0.8, type: "spring", damping: 20 }}
// // // // // // // //                 className="w-full max-w-4xl relative z-10 perspective-1000"
// // // // // // // //               >
// // // // // // // //                   {/* FRAME THE ART */}
// // // // // // // //                   <div className="p-4 bg-[#1a1a1a] rounded-sm shadow-2xl border border-white/5">
// // // // // // // //                       <div className="border border-white/5">
// // // // // // // //                           <CertificateCard data={data} />
// // // // // // // //                       </div>
// // // // // // // //                   </div>
                  
// // // // // // // //                   <div className="mt-8 flex justify-center">
// // // // // // // //                       <button onClick={handleDownload} className="flex items-center gap-3 px-8 py-3 bg-white/10 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full border border-white/10">
// // // // // // // //                           <Download className="w-4 h-4" /> 
// // // // // // // //                           Acquire Digital Print
// // // // // // // //                       </button>
// // // // // // // //                   </div>
// // // // // // // //               </motion.div>
// // // // // // // //           )}
// // // // // // // //       </AnimatePresence>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // import { Search, Loader2, Download, ShieldCheck, XCircle, Upload, Palette, Layout } from "lucide-react";
// // // // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // // // import html2canvas from "html2canvas";
// // // // // // // import { toast } from "sonner";

// // // // // // // // --- THE CONFIGURABLE MASTERPIECE ---
// // // // // // // export const CertificateCard = ({ 
// // // // // // //     data, 
// // // // // // //     designConfig 
// // // // // // // }: { 
// // // // // // //     data: any; 
// // // // // // //     designConfig?: {
// // // // // // //         logo?: string | null;
// // // // // // //         signature?: string | null;
// // // // // // //         accentColor?: string;
// // // // // // //         texture?: string;
// // // // // // //         borderStyle?: 'ornate' | 'minimal' | 'classic';
// // // // // // //     } 
// // // // // // // }) => {
// // // // // // //     // Defaults if no config provided (for Public View)
// // // // // // //     const config = {
// // // // // // //         logo: designConfig?.logo || null, // If null, shows placeholder text
// // // // // // //         signature: designConfig?.signature || null,
// // // // // // //         accentColor: designConfig?.accentColor || '#D4AF37', // Gold default
// // // // // // //         texture: designConfig?.texture || 'paper',
// // // // // // //         borderStyle: designConfig?.borderStyle || 'ornate'
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div 
// // // // // // //             id="cert-node" 
// // // // // // //             className="relative w-full aspect-[1.414/1] bg-[#FDFBF7] text-[#1a1a1a] overflow-hidden flex flex-col p-12 shadow-2xl font-serif select-none"
// // // // // // //             style={{ color: '#1a1a1a' }}
// // // // // // //         >
// // // // // // //             {/* --- 1. DYNAMIC TEXTURE --- */}
// // // // // // //             <div className="absolute inset-0 bg-[#FDFBF7]" />
// // // // // // //             {config.texture === 'paper' && (
// // // // // // //                 <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />
// // // // // // //             )}
// // // // // // //             {config.texture === 'canvas' && (
// // // // // // //                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/rough-cloth.png')] mix-blend-multiply pointer-events-none" />
// // // // // // //             )}
            
// // // // // // //             {/* --- 2. DYNAMIC BORDER --- */}
// // // // // // //             {config.borderStyle === 'ornate' && (
// // // // // // //                 <>
// // // // // // //                     <div className="absolute inset-4 border-2 opacity-80" style={{ borderColor: config.accentColor }} />
// // // // // // //                     <div className="absolute inset-6 border border-dashed opacity-40" style={{ borderColor: config.accentColor }} />
// // // // // // //                     {/* Corners */}
// // // // // // //                     <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4" style={{ borderColor: config.accentColor }} />
// // // // // // //                     <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4" style={{ borderColor: config.accentColor }} />
// // // // // // //                     <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4" style={{ borderColor: config.accentColor }} />
// // // // // // //                     <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4" style={{ borderColor: config.accentColor }} />
// // // // // // //                 </>
// // // // // // //             )}
// // // // // // //             {config.borderStyle === 'classic' && (
// // // // // // //                 <div className="absolute inset-6 border-4 border-double" style={{ borderColor: config.accentColor }} />
// // // // // // //             )}
// // // // // // //              {config.borderStyle === 'minimal' && (
// // // // // // //                 <div className="absolute left-8 top-8 bottom-8 w-1 bg-black/10" />
// // // // // // //             )}

// // // // // // //             {/* --- 3. THE CONTENT --- */}
// // // // // // //             <div className="relative z-10 flex flex-col h-full items-center text-center justify-between py-6">
                
// // // // // // //                 {/* HEADER */}
// // // // // // //                 <div className="flex flex-col items-center gap-4">
// // // // // // //                     {/* LOGO SLOT */}
// // // // // // //                     <div className="w-20 h-20 relative flex items-center justify-center">
// // // // // // //                         {config.logo ? (
// // // // // // //                             <img src={config.logo} alt="Logo" className="w-full h-full object-contain drop-shadow-md" />
// // // // // // //                         ) : (
// // // // // // //                             // Placeholder if no logo uploaded
// // // // // // //                             <div className="w-16 h-16 border-2 border-dashed border-black/20 rounded-full flex items-center justify-center">
// // // // // // //                                 <span className="text-[8px] uppercase font-mono text-black/40">Logo</span>
// // // // // // //                             </div>
// // // // // // //                         )}
// // // // // // //                     </div>

// // // // // // //                     <div className="space-y-1">
// // // // // // //                         <h1 className="font-serif text-5xl uppercase tracking-widest text-black/90 scale-y-90">
// // // // // // //                             Certificate
// // // // // // //                         </h1>
// // // // // // //                         <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: config.accentColor }}>
// // // // // // //                             OF APPRECIATION
// // // // // // //                         </p>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 {/* BODY */}
// // // // // // //                 <div className="flex-1 flex flex-col justify-center w-full max-w-4xl">
// // // // // // //                     <p className="font-serif italic text-black/50 text-lg mb-2">
// // // // // // //                         Presented to
// // // // // // //                     </p>
                    
// // // // // // //                     <h2 className="font-cursive text-7xl text-black mb-6 leading-tight py-2" style={{ fontFamily: 'cursive' }}>
// // // // // // //                         {data.recipient_name || "Recipient Name"}
// // // // // // //                     </h2>

// // // // // // //                     <p className="font-serif text-black/70 text-xl leading-relaxed">
// // // // // // //                         For outstanding contribution as <br/>
// // // // // // //                         <span className="font-bold text-2xl uppercase tracking-wide block mt-2" style={{ color: config.accentColor }}>
// // // // // // //                             {data.award_title || "Role / Title"}
// // // // // // //                         </span>
// // // // // // //                         <span className="text-base italic text-black/40 mt-1 block">
// // // // // // //                             in the production "{data.event_name || "Event Name"}"
// // // // // // //                         </span>
// // // // // // //                     </p>
// // // // // // //                 </div>

// // // // // // //                 {/* FOOTER */}
// // // // // // //                 <div className="w-full flex justify-between items-end px-12 pt-8">
// // // // // // //                     {/* SIGNATURE SLOT */}
// // // // // // //                     <div className="text-center">
// // // // // // //                         <div className="h-16 flex items-end justify-center mb-2">
// // // // // // //                             {config.signature ? (
// // // // // // //                                 <img src={config.signature} alt="Sign" className="h-full object-contain" />
// // // // // // //                             ) : (
// // // // // // //                                 <span className="font-cursive text-3xl text-black/30">Signature</span>
// // // // // // //                             )}
// // // // // // //                         </div>
// // // // // // //                         <div className="h-px w-48 bg-black/20 mb-2" />
// // // // // // //                         <p className="font-sans text-xs font-bold uppercase tracking-wider text-black/80">Authority</p>
// // // // // // //                     </div>

// // // // // // //                     {/* SEAL/ID */}
// // // // // // //                     <div className="text-right opacity-60">
// // // // // // //                          <ShieldCheck className="w-6 h-6 ml-auto mb-2" style={{ color: config.accentColor }} />
// // // // // // //                          <p className="font-mono text-[9px] uppercase tracking-widest">
// // // // // // //                             ID: {data.id || "PREVIEW"}
// // // // // // //                          </p>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // // --- PUBLIC VAULT (Unchanged, just renders the card) ---
// // // // // // // export default function CertificateVault() {
// // // // // // //   const [query, setQuery] = useState("");
// // // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // // //   const [data, setData] = useState<any>(null);

// // // // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (!query) return;
// // // // // // //     setStatus("searching");
// // // // // // //     const result = await verifyCertificate(query);
// // // // // // //     if (result.success) {
// // // // // // //         setData(result.data);
// // // // // // //         setStatus("found");
// // // // // // //     } else {
// // // // // // //         setStatus("error");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDownload = async () => {
// // // // // // //       const element = document.getElementById("cert-node");
// // // // // // //       if(element) {
// // // // // // //           const canvas = await html2canvas(element, { scale: 3, useCORS: true });
// // // // // // //           const link = document.createElement("a");
// // // // // // //           link.download = `Certificate_${data.id}.png`;
// // // // // // //           link.href = canvas.toDataURL("image/png");
// // // // // // //           link.click();
// // // // // // //           toast.success("Downloaded");
// // // // // // //       }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-4">
// // // // // // //       <div className="w-full max-w-md mb-8">
// // // // // // //           <form onSubmit={handleSearch} className="relative">
// // // // // // //               <input 
// // // // // // //                 value={query} onChange={(e) => setQuery(e.target.value)}
// // // // // // //                 placeholder="ENTER ID (e.g. AYM-2026-X92)"
// // // // // // //                 className="w-full bg-white/10 p-4 rounded-lg text-center font-mono uppercase focus:outline-none focus:ring-2 ring-gold-500"
// // // // // // //               />
// // // // // // //           </form>
// // // // // // //       </div>
// // // // // // //       {status === 'found' && data && (
// // // // // // //           <div className="w-full max-w-4xl">
// // // // // // //               <CertificateCard data={data} />
// // // // // // //               <button onClick={handleDownload} className="mt-4 px-6 py-2 bg-white text-black rounded-full font-bold mx-auto block">Download</button>
// // // // // // //           </div>
// // // // // // //       )}
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { Search, Loader2, Download, XCircle } from "lucide-react";
// // // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // // import html2canvas from "html2canvas";
// // // // // // import { toast } from "sonner";

// // // // // // // --- THE VISUAL ASSETS (SVG) ---

// // // // // // // 1. The Vermilion Wax Seal (Mudra)
// // // // // // const WaxSeal = () => (
// // // // // //   <div className="relative w-28 h-28 flex items-center justify-center">
// // // // // //     {/* The Wax Body */}
// // // // // //     <div className="absolute inset-0 bg-[#8B2500] rounded-full shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.5),4px_4px_10px_rgba(0,0,0,0.4)] border-4 border-[#681800]" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }} />
// // // // // //     <div className="absolute inset-2 rounded-full border-2 border-[#ff5e5e]/20" />
    
// // // // // //     {/* The Embossing */}
// // // // // //     <div className="relative z-10 text-[#d65c5c] font-serif flex flex-col items-center opacity-90" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.3)' }}>
// // // // // //         <span className="text-[8px] uppercase tracking-widest border-b border-[#a83232] pb-1 mb-1">Estd. 2026</span>
// // // // // //         <span className="text-4xl font-bold">A</span>
// // // // // //         <span className="text-[6px] uppercase tracking-[0.2em] mt-1">Aayam Drama</span>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // );

// // // // // // // 2. The Sanskrit Shloka (Watermark & Header)
// // // // // // const NatyaShloka = () => (
// // // // // //     <div className="text-center opacity-80">
// // // // // //         <p className="font-serif text-[#8B3A3A] text-sm font-bold tracking-widest uppercase">
// // // // // //             || न हि रसादृते कश्चिदर्थः प्रवर्तते ||
// // // // // //         </p>
// // // // // //         <p className="font-serif text-[#5a4a42] text-[8px] uppercase tracking-widest mt-1">
// // // // // //             "No meaning proceeds without Rasa" — Natya Shastra
// // // // // //         </p>
// // // // // //     </div>
// // // // // // );

// // // // // // // --- THE ARTIFACT COMPONENT ---
// // // // // // export const CertificateCard = ({ data }: { data: any }) => (
// // // // // //     <div 
// // // // // //         id="cert-node" 
// // // // // //         className="relative w-full aspect-[1.414/1] overflow-hidden flex flex-col shadow-2xl select-none"
// // // // // //     >
// // // // // //         {/* --- GLOBAL STYLES (Embedded Fonts) --- */}
// // // // // //         <style jsx global>{`
// // // // // //             @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&display=swap');
// // // // // //         `}</style>

// // // // // //         {/* --- LAYER 1: THE PAPER (Ivory Parchment) --- */}
// // // // // //         <div className="absolute inset-0 bg-[#F9F5EB]" />
// // // // // //         {/* Paper Grain Texture */}
// // // // // //         <div className="absolute inset-0 opacity-[0.5] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
// // // // // //         {/* Aged Vignette */}
// // // // // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(139,69,19,0.15)_100%)] pointer-events-none" />

// // // // // //         {/* --- LAYER 2: THE BORDER (The Royal Frame) --- */}
// // // // // //         {/* Outer Maroon Band */}
// // // // // //         <div className="absolute top-4 bottom-4 left-4 right-4 border-[16px] border-[#581c1c] z-10" />
// // // // // //         {/* Inner Gold Line */}
// // // // // //         <div className="absolute top-9 bottom-9 left-9 right-9 border-[2px] border-[#b4833e] z-10" />
        
// // // // // //         {/* Corner Motifs (The Jaali) */}
// // // // // //         <svg className="absolute top-4 left-4 w-24 h-24 text-[#b4833e] z-20 mix-blend-multiply" viewBox="0 0 100 100">
// // // // // //             <path d="M0,0 L100,0 L0,100 Z" fill="#581c1c" />
// // // // // //             <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
// // // // // //             <path d="M20,5 L20,35 M5,20 L35,20" stroke="currentColor" strokeWidth="2" />
// // // // // //         </svg>
// // // // // //         <svg className="absolute top-4 right-4 w-24 h-24 text-[#b4833e] z-20 mix-blend-multiply rotate-90" viewBox="0 0 100 100">
// // // // // //             <path d="M0,0 L100,0 L0,100 Z" fill="#581c1c" />
// // // // // //             <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
// // // // // //             <path d="M20,5 L20,35 M5,20 L35,20" stroke="currentColor" strokeWidth="2" />
// // // // // //         </svg>
// // // // // //         <svg className="absolute bottom-4 left-4 w-24 h-24 text-[#b4833e] z-20 mix-blend-multiply -rotate-90" viewBox="0 0 100 100">
// // // // // //             <path d="M0,0 L100,0 L0,100 Z" fill="#581c1c" />
// // // // // //             <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
// // // // // //             <path d="M20,5 L20,35 M5,20 L35,20" stroke="currentColor" strokeWidth="2" />
// // // // // //         </svg>
// // // // // //         <svg className="absolute bottom-4 right-4 w-24 h-24 text-[#b4833e] z-20 mix-blend-multiply rotate-180" viewBox="0 0 100 100">
// // // // // //             <path d="M0,0 L100,0 L0,100 Z" fill="#581c1c" />
// // // // // //             <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
// // // // // //             <path d="M20,5 L20,35 M5,20 L35,20" stroke="currentColor" strokeWidth="2" />
// // // // // //         </svg>

// // // // // //         {/* --- LAYER 3: THE CONTENT (The Decree) --- */}
// // // // // //         <div className="relative z-30 flex flex-col h-full items-center text-center pt-16 pb-12 px-20">
            
// // // // // //             {/* A. HEADER */}
// // // // // //             <div className="space-y-4">
// // // // // //                 <NatyaShloka />
                
// // // // // //                 <div className="mt-6">
// // // // // //                     <h1 className="text-5xl md:text-6xl text-[#2c1a1a]" style={{ fontFamily: 'Cinzel Decorative, serif', letterSpacing: '0.05em' }}>
// // // // // //                         Certificate of Honor
// // // // // //                     </h1>
// // // // // //                     <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#b4833e] to-transparent mt-2 opacity-60" />
// // // // // //                     <p className="text-[#581c1c] text-[10px] uppercase tracking-[0.4em] mt-2 font-bold font-serif">
// // // // // //                         Conferred by The Aayam Drama Society
// // // // // //                     </p>
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             {/* B. THE RECIPIENT */}
// // // // // //             <div className="flex-1 flex flex-col justify-center w-full relative">
// // // // // //                 {/* Background Watermark (The Mask) */}
// // // // // //                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none">
// // // // // //                     <svg viewBox="0 0 200 200" fill="currentColor" className="text-black">
// // // // // //                         <path d="M100,20 C50,20 20,60 20,100 C20,150 50,180 100,180 C150,180 180,150 180,100 C180,60 150,20 100,20 Z M70,80 C75,80 80,85 80,90 C80,95 75,100 70,100 C65,100 60,95 60,90 C60,85 65,80 70,80 Z M130,80 C135,80 140,85 140,90 C140,95 135,100 130,100 C125,100 120,95 120,90 C120,85 125,80 130,80 Z M100,150 C80,150 60,130 60,130 L140,130 C140,130 120,150 100,150 Z" />
// // // // // //                     </svg>
// // // // // //                 </div>

// // // // // //                 <p className="text-[#5a4a42] text-xl italic mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// // // // // //                     This accolade is presented to
// // // // // //                 </p>
                
// // // // // //                 <h2 className="text-7xl md:text-8xl text-[#1a1a1a] mb-6 leading-tight" style={{ fontFamily: 'Pinyon Script, cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
// // // // // //                     {data.recipient_name}
// // // // // //                 </h2>

// // // // // //                 <div className="text-[#2c1a1a] text-2xl leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// // // // // //                     For their exceptional portrayal as <br/>
// // // // // //                     <span className="text-[#8B2500] font-bold text-3xl uppercase tracking-wide block my-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// // // // // //                         {data.award_title}
// // // // // //                     </span>
// // // // // //                     <span className="block text-xl italic text-[#5a4a42] mt-1">
// // // // // //                         in the production <span className="font-bold text-[#1a1a1a] not-italic border-b border-[#1a1a1a]/20">"{data.event_name}"</span>
// // // // // //                     </span>
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             {/* C. FOOTER */}
// // // // // //             <div className="w-full flex justify-between items-end pt-8 px-4">
                
// // // // // //                 {/* Authority Signature */}
// // // // // //                 <div className="text-center w-1/3">
// // // // // //                     <div className="h-16 flex items-end justify-center mb-2">
// // // // // //                         {/* Simulated Ink Signature */}
// // // // // //                         <svg viewBox="0 0 200 60" className="w-40 h-full fill-none stroke-[#000000] stroke-[2] opacity-80" style={{ transform: 'rotate(-2deg)' }}>
// // // // // //                             <path d="M20,40 Q50,10 80,40 T140,30 T180,40" strokeLinecap="round" />
// // // // // //                         </svg>
// // // // // //                     </div>
// // // // // //                     <div className="h-[1px] w-full bg-[#5a4a42] mb-2 opacity-50" />
// // // // // //                     <p className="font-bold text-[#1a1a1a] uppercase text-xs tracking-widest">Siddharth</p>
// // // // // //                     <p className="text-[10px] text-[#8B2500] uppercase tracking-widest font-serif">Secretary, Aayam</p>
// // // // // //                 </div>

// // // // // //                 {/* The Seal */}
// // // // // //                 <div className="mb-[-20px]">
// // // // // //                     <WaxSeal />
// // // // // //                 </div>

// // // // // //                 {/* Verification Date */}
// // // // // //                 <div className="text-center w-1/3">
// // // // // //                     <p className="text-[#1a1a1a] text-lg font-serif border-b border-[#5a4a42]/50 pb-1 inline-block min-w-[120px]">
// // // // // //                         {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
// // // // // //                     </p>
// // // // // //                     <p className="text-[10px] text-[#8B2500] uppercase tracking-widest font-serif mt-2">Date of Issue</p>
// // // // // //                     <p className="text-[8px] text-[#5a4a42] font-mono mt-1 opacity-60">ID: {data.id}</p>
// // // // // //                 </div>

// // // // // //             </div>
// // // // // //         </div>
// // // // // //     </div>
// // // // // // );

// // // // // // // --- THE WRAPPER (Public View) ---
// // // // // // export default function CertificateVault() {
// // // // // //   const [query, setQuery] = useState("");
// // // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // // //   const [data, setData] = useState<any>(null);

// // // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!query) return;
// // // // // //     setStatus("searching");
// // // // // //     const result = await verifyCertificate(query);
// // // // // //     if (result.success) {
// // // // // //         setData(result.data);
// // // // // //         setStatus("found");
// // // // // //     } else {
// // // // // //         setStatus("error");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDownload = async () => {
// // // // // //       const element = document.getElementById("cert-node");
// // // // // //       if(element) {
// // // // // //           const canvas = await html2canvas(element, { backgroundColor: null, scale: 3, useCORS: true });
// // // // // //           const link = document.createElement("a");
// // // // // //           link.download = `Aayam_Decree_${data.id}.png`;
// // // // // //           link.href = canvas.toDataURL("image/png");
// // // // // //           link.click();
// // // // // //           toast.success("Artifact Secured");
// // // // // //       }
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col items-center justify-center px-4 relative font-serif">
// // // // // //       {/* Museum Lighting */}
// // // // // //       <div className="absolute inset-0 bg-[#0a0a0a]" />
// // // // // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#b4833e]/10 blur-[100px] pointer-events-none" />

// // // // // //       <div className="text-center mb-10 relative z-10">
// // // // // //           <div className="inline-block border border-[#b4833e]/30 px-4 py-1 rounded-full mb-4 bg-[#b4833e]/5">
// // // // // //             <span className="text-[10px] text-[#b4833e] uppercase tracking-[0.3em]">
// // // // // //                 The Royal Archives
// // // // // //             </span>
// // // // // //           </div>
// // // // // //           <h1 className="text-5xl md:text-6xl text-[#f4f4f5] tracking-tight" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// // // // // //               The Legacy Vault
// // // // // //           </h1>
// // // // // //       </div>

// // // // // //       <div className="w-full max-w-md relative z-20 mb-12">
// // // // // //           <form onSubmit={handleSearch} className="relative">
// // // // // //               <input 
// // // // // //                 type="text" 
// // // // // //                 value={query}
// // // // // //                 onChange={(e) => setQuery(e.target.value)}
// // // // // //                 placeholder="ENTER SCROLL ID"
// // // // // //                 className="w-full bg-[#1a1a1a] border border-[#b4833e]/30 text-[#b4833e] font-mono text-sm p-4 pl-12 rounded-sm focus:outline-none focus:border-[#b4833e] transition-all placeholder:text-[#b4833e]/20 uppercase tracking-widest text-center"
// // // // // //               />
// // // // // //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b4833e]/40" />
// // // // // //           </form>
// // // // // //           {status === 'error' && (
// // // // // //               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-4 text-red-400 text-xs font-serif tracking-widest">
// // // // // //                   Record not found in the archives.
// // // // // //               </motion.div>
// // // // // //           )}
// // // // // //       </div>

// // // // // //       <AnimatePresence>
// // // // // //           {status === 'found' && data && (
// // // // // //               <motion.div 
// // // // // //                 initial={{ opacity: 0, y: 40 }}
// // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // //                 exit={{ opacity: 0, y: 40 }}
// // // // // //                 transition={{ duration: 0.8, type: "spring", damping: 20 }}
// // // // // //                 className="w-full max-w-4xl relative z-10"
// // // // // //               >
// // // // // //                   {/* The Frame */}
// // // // // //                   <div className="p-4 bg-[#1a1a1a] border border-[#b4833e]/20 shadow-2xl rounded-sm">
// // // // // //                       <CertificateCard data={data} />
// // // // // //                   </div>
                  
// // // // // //                   <div className="mt-8 flex justify-center">
// // // // // //                       <button onClick={handleDownload} className="flex items-center gap-3 px-8 py-3 bg-[#b4833e] text-[#1a1a1a] font-bold uppercase tracking-widest text-xs hover:bg-[#d4a858] transition-all rounded-sm shadow-[0_0_20px_rgba(180,131,62,0.3)]">
// // // // // //                           <Download className="w-4 h-4" /> 
// // // // // //                           Claim Scroll
// // // // // //                       </button>
// // // // // //                   </div>
// // // // // //               </motion.div>
// // // // // //           )}
// // // // // //       </AnimatePresence>
// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { Search, Loader2, Download, ShieldCheck, XCircle } from "lucide-react";
// // // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // // import html2canvas from "html2canvas";
// // // // // import { toast } from "sonner";

// // // // // // --- THE VISUAL COMPONENT ---
// // // // // export const CertificateCard = ({ 
// // // // //     data, 
// // // // //     designConfig 
// // // // // }: { 
// // // // //     data: any; 
// // // // //     designConfig?: {
// // // // //         logo?: string | null;
// // // // //         signature1?: string | null;
// // // // //         signature2?: string | null;
// // // // //     } 
// // // // // }) => {
// // // // //     // Default Fallbacks
// // // // //     const logoUrl = designConfig?.logo || null; 
// // // // //     const sig1Url = designConfig?.signature1 || null;
// // // // //     const sig2Url = designConfig?.signature2 || null;

// // // // //     return (
// // // // //         <div 
// // // // //             id="cert-node" 
// // // // //             className="relative w-full aspect-[1.414/1] overflow-hidden flex flex-col shadow-2xl select-none bg-[#F9F5EB] text-[#1a1a1a]"
// // // // //         >
// // // // //             {/* --- FONTS INJECTION --- */}
// // // // //             <style jsx global>{`
// // // // //                 @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Gotu&display=swap');
// // // // //             `}</style>

// // // // //             {/* --- LAYER 1: TEXTURE & ATMOSPHERE --- */}
// // // // //             {/* Parchment Base */}
// // // // //             <div className="absolute inset-0 bg-[#F9F5EB]" />
// // // // //             <div className="absolute inset-0 opacity-[0.5] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
// // // // //             <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
// // // // //             {/* Vignette */}
// // // // //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(88,28,28,0.1)_100%)] pointer-events-none" />

// // // // //             {/* --- LAYER 2: THE CENTRAL WATERMARK (Dynamic) --- */}
// // // // //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] opacity-[0.08] pointer-events-none flex items-center justify-center">
// // // // //                 {logoUrl ? (
// // // // //                     <img src={logoUrl} alt="Watermark" className="w-full h-full object-contain grayscale contrast-150" />
// // // // //                 ) : (
// // // // //                     // Default Mandala if no logo
// // // // //                     <svg viewBox="0 0 100 100" className="w-full h-full text-[#581c1c] animate-slow-spin">
// // // // //                         <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4,2" fill="none"/>
// // // // //                         <path d="M50,10 L90,50 L50,90 L10,50 Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
// // // // //                         <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
// // // // //                     </svg>
// // // // //                 )}
// // // // //             </div>

// // // // //             {/* --- LAYER 3: THE ROYAL BORDER (Maroon & Gold) --- */}
// // // // //             {/* Outer Band */}
// // // // //             <div className="absolute top-3 bottom-3 left-3 right-3 border-[8px] border-[#581c1c] z-10" />
// // // // //             {/* Inner Gold Inlay */}
// // // // //             <div className="absolute top-6 bottom-6 left-6 right-6 border border-[#b4833e] z-10" />
            
// // // // //             {/* Corner Jaali Patterns */}
// // // // //             <svg className="absolute top-3 left-3 w-24 h-24 text-[#581c1c] z-20" viewBox="0 0 100 100">
// // // // //                 <path d="M0,0 L60,0 L0,60 Z" fill="currentColor" />
// // // // //                 <path d="M5,5 L40,5 M5,40 L5,5" stroke="#b4833e" strokeWidth="2" />
// // // // //             </svg>
// // // // //             <svg className="absolute top-3 right-3 w-24 h-24 text-[#581c1c] z-20 rotate-90" viewBox="0 0 100 100">
// // // // //                 <path d="M0,0 L60,0 L0,60 Z" fill="currentColor" />
// // // // //                 <path d="M5,5 L40,5 M5,40 L5,5" stroke="#b4833e" strokeWidth="2" />
// // // // //             </svg>
// // // // //             <svg className="absolute bottom-3 left-3 w-24 h-24 text-[#581c1c] z-20 -rotate-90" viewBox="0 0 100 100">
// // // // //                 <path d="M0,0 L60,0 L0,60 Z" fill="currentColor" />
// // // // //                 <path d="M5,5 L40,5 M5,40 L5,5" stroke="#b4833e" strokeWidth="2" />
// // // // //             </svg>
// // // // //             <svg className="absolute bottom-3 right-3 w-24 h-24 text-[#581c1c] z-20 rotate-180" viewBox="0 0 100 100">
// // // // //                 <path d="M0,0 L60,0 L0,60 Z" fill="currentColor" />
// // // // //                 <path d="M5,5 L40,5 M5,40 L5,5" stroke="#b4833e" strokeWidth="2" />
// // // // //             </svg>

// // // // //             {/* --- LAYER 4: THE DECREE (Content) --- */}
// // // // //             <div className="relative z-30 flex flex-col h-full items-center text-center justify-between py-12 px-16">
                
// // // // //                 {/* A. HEADER (The Invocation) */}
// // // // //                 <div className="flex flex-col items-center gap-4 w-full">
// // // // //                     {/* The Shloka */}
// // // // //                     <div className="border-b border-[#b4833e]/40 pb-2 px-8">
// // // // //                         <p className="font-serif text-[#8B2500] text-sm font-bold tracking-[0.15em] uppercase" style={{ fontFamily: 'Gotu, sans-serif' }}>
// // // // //                             || न हि रसादृते कश्चिदर्थः प्रवर्तते ||
// // // // //                         </p>
// // // // //                     </div>

// // // // //                     {/* Institution Title */}
// // // // //                     <div className="mt-2 space-y-1">
// // // // //                         <h1 className="text-5xl md:text-6xl text-[#2c1a1a] tracking-wider" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// // // // //                             CERTIFICATE
// // // // //                         </h1>
// // // // //                         <p className="text-[#b4833e] text-lg tracking-[0.3em] uppercase font-serif">
// // // // //                             OF HONOR
// // // // //                         </p>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* B. THE RECIPIENT (The Art) */}
// // // // //                 <div className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl relative">
// // // // //                     <p className="text-[#5a4a42] text-xl italic font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// // // // //                         This accolade is reverently conferred upon
// // // // //                     </p>
                    
// // // // //                     <div className="relative py-4 w-full">
// // // // //                         {/* Name */}
// // // // //                         <h2 className="text-7xl md:text-8xl text-[#1a1a1a] leading-none drop-shadow-sm py-2" 
// // // // //                             style={{ fontFamily: 'Pinyon Script, cursive' }}>
// // // // //                             {data.recipient_name}
// // // // //                         </h2>
// // // // //                         {/* Underline Flourish */}
// // // // //                         <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-[#8B2500] to-transparent mx-auto mt-2 opacity-50" />
// // // // //                     </div>

// // // // //                     <div className="text-[#2c1a1a] text-2xl leading-relaxed mt-4 max-w-3xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// // // // //                         For embodying the spirit of art as <br/>
// // // // //                         <span className="text-[#8B2500] font-bold text-3xl uppercase tracking-wide block my-3" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// // // // //                             {data.award_title}
// // // // //                         </span>
// // // // //                         <span className="block text-xl italic text-[#5a4a42]">
// // // // //                             in the production <span className="font-bold text-[#1a1a1a] border-b border-[#1a1a1a]/20 px-2">"{data.event_name}"</span>
// // // // //                         </span>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* C. FOOTER (Signatories) */}
// // // // //                 <div className="w-full flex justify-between items-end mt-4 pt-8 px-8">
                    
// // // // //                     {/* LEFT SIGNATURE (Auth 2) */}
// // // // //                     <div className="flex flex-col items-center w-1/3">
// // // // //                         <div className="h-16 w-40 flex items-end justify-center mb-1">
// // // // //                             {sig2Url ? (
// // // // //                                 <img src={sig2Url} alt="Sign" className="h-full object-contain filter contrast-125 sepia" />
// // // // //                             ) : (
// // // // //                                 <span className="font-cursive text-3xl opacity-30 rotate-[-2deg]">Signature</span>
// // // // //                             )}
// // // // //                         </div>
// // // // //                         <div className="h-px w-full bg-[#581c1c]/40 mb-1" />
// // // // //                         <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{data.auth_2_name || "Authority Name"}</p>
// // // // //                         <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{data.auth_2_title || "Position"}</p>
// // // // //                     </div>

// // // // //                     {/* CENTER BADGE */}
// // // // //                     <div className="flex flex-col items-center justify-end mb-1 opacity-80">
// // // // //                         <ShieldCheck className="w-8 h-8 text-[#8B2500] mb-1" />
// // // // //                         <p className="font-mono text-[8px] uppercase tracking-widest text-[#5a4a42]">
// // // // //                             ID: {data.id}
// // // // //                         </p>
// // // // //                     </div>

// // // // //                     {/* RIGHT SIGNATURE (Auth 1) */}
// // // // //                     <div className="flex flex-col items-center w-1/3">
// // // // //                         <div className="h-16 w-40 flex items-end justify-center mb-1">
// // // // //                             {sig1Url ? (
// // // // //                                 <img src={sig1Url} alt="Sign" className="h-full object-contain filter contrast-125 sepia" />
// // // // //                             ) : (
// // // // //                                 <span className="font-cursive text-3xl opacity-30 rotate-[2deg]">Signature</span>
// // // // //                             )}
// // // // //                         </div>
// // // // //                         <div className="h-px w-full bg-[#581c1c]/40 mb-1" />
// // // // //                         <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{data.auth_1_name || "Siddharth"}</p>
// // // // //                         <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{data.auth_1_title || "Secretary"}</p>
// // // // //                     </div>

// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // // --- PUBLIC VAULT ---
// // // // // export default function CertificateVault() {
// // // // //   const [query, setQuery] = useState("");
// // // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // // //   const [data, setData] = useState<any>(null);

// // // // //   const handleSearch = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     if (!query) return;
// // // // //     setStatus("searching");
// // // // //     const result = await verifyCertificate(query);
// // // // //     if (result.success) {
// // // // //         setData(result.data);
// // // // //         setStatus("found");
// // // // //     } else {
// // // // //         setStatus("error");
// // // // //     }
// // // // //   };

// // // // //   const handleDownload = async () => {
// // // // //       const element = document.getElementById("cert-node");
// // // // //       if(element) {
// // // // //           const canvas = await html2canvas(element, { scale: 3, useCORS: true });
// // // // //           const link = document.createElement("a");
// // // // //           link.download = `Aayam_Decree_${data.id}.png`;
// // // // //           link.href = canvas.toDataURL("image/png");
// // // // //           link.click();
// // // // //       }
// // // // //   };

// // // // //   return (
// // // // //     <section className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col items-center justify-center px-4 font-serif">
// // // // //       <div className="text-center mb-8 relative z-10">
// // // // //           <h1 className="text-4xl text-[#b4833e] font-serif mb-2" style={{ fontFamily: 'Cinzel Decorative' }}>The Legacy Vault</h1>
// // // // //           <p className="text-xs text-white/30 uppercase tracking-[0.3em]">Official Verification</p>
// // // // //       </div>
// // // // //       <div className="w-full max-w-md relative z-20 mb-8">
// // // // //           <form onSubmit={handleSearch} className="relative">
// // // // //               <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ENTER ID" className="w-full bg-[#151515] border border-[#b4833e]/30 text-[#b4833e] p-3 text-center uppercase tracking-widest focus:outline-none" />
// // // // //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b4833e]/50" />
// // // // //           </form>
// // // // //           {status === 'error' && <p className="text-center text-red-400 text-xs mt-2">Invalid ID.</p>}
// // // // //       </div>
// // // // //       <AnimatePresence>
// // // // //           {status === 'found' && data && (
// // // // //               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl relative z-10">
// // // // //                   <div className="p-1 bg-[#b4833e] rounded shadow-2xl">
// // // // //                       <CertificateCard data={data} />
// // // // //                   </div>
// // // // //                   <button onClick={handleDownload} className="mt-6 mx-auto flex items-center gap-2 px-6 py-2 bg-[#b4833e] text-black font-bold uppercase text-xs hover:bg-white transition-colors">
// // // // //                       <Download className="w-4 h-4" /> Download
// // // // //                   </button>
// // // // //               </motion.div>
// // // // //           )}
// // // // //       </AnimatePresence>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Search, Loader2, Download, ShieldCheck, XCircle } from "lucide-react";
// // // // import { verifyCertificate } from "@/app/certificate/actions";
// // // // import html2canvas from "html2canvas";
// // // // import { toast } from "sonner";

// // // // // --- THE ARTIFACT: "THE GOLDEN STAGE" ---
// // // // export const CertificateCard = ({ 
// // // //     data, 
// // // //     designConfig 
// // // // }: { 
// // // //     data: any; 
// // // //     designConfig?: {
// // // //         logo?: string | null;
// // // //         signature1?: string | null;
// // // //         signature2?: string | null;
// // // //     } 
// // // // }) => {
// // // //     const logoUrl = designConfig?.logo || null; 
// // // //     const sig1Url = designConfig?.signature1 || null;
// // // //     const sig2Url = designConfig?.signature2 || null;

// // // //     return (
// // // //         <div 
// // // //             id="cert-node" 
// // // //             className="relative w-full aspect-[1.414/1] overflow-hidden flex flex-col shadow-2xl select-none bg-[#020202] text-[#e4e4e7]"
// // // //         >
// // // //             {/* --- FONTS --- */}
// // // //             <style jsx global>{`
// // // //                 @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Great+Vibes&family=Cinzel:wght@400;700&display=swap');
// // // //             `}</style>

// // // //             {/* --- LAYER 1: THE VOID (Texture) --- */}
// // // //             <div className="absolute inset-0 bg-[#050505]" />
// // // //             {/* Fine Grain - The "Noise" of the Theatre */}
// // // //             <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
// // // //             {/* Velvet Gradient */}
// // // //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15)_0%,transparent_60%)] pointer-events-none" />

// // // //             {/* --- LAYER 2: THE SOUL (Dynamic Watermark) --- */}
// // // //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] opacity-[0.05] pointer-events-none flex items-center justify-center grayscale mix-blend-screen">
// // // //                 {logoUrl ? (
// // // //                     <img src={logoUrl} alt="Watermark" className="w-full h-full object-contain" />
// // // //                 ) : (
// // // //                     // Default Abstract if no logo
// // // //                     <div className="w-full h-full border-[20px] border-white/10 rounded-full" />
// // // //                 )}
// // // //             </div>

// // // //             {/* --- LAYER 3: THE GOLDEN FRAME --- */}
// // // //             <div className="absolute top-6 bottom-6 left-6 right-6 border border-[#D4AF37] opacity-60 z-10" />
// // // //             <div className="absolute top-8 bottom-8 left-8 right-8 border border-[#D4AF37] opacity-30 z-10" />
            
// // // //             {/* Corner Flourishes (Minimalist) */}
// // // //             <div className="absolute top-6 left-6 w-32 h-32 border-t-[2px] border-l-[2px] border-[#D4AF37] opacity-80" />
// // // //             <div className="absolute bottom-6 right-6 w-32 h-32 border-b-[2px] border-r-[2px] border-[#D4AF37] opacity-80" />

// // // //             {/* --- LAYER 4: THE SCRIPT --- */}
// // // //             <div className="relative z-30 flex flex-col h-full items-center text-center justify-between py-16 px-20">
                
// // // //                 {/* A. INVOCATION */}
// // // //                 <div className="flex flex-col items-center gap-4 w-full">
// // // //                     {/* The Sanskrit Soul */}
// // // //                     <p className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase opacity-90" style={{ fontFamily: 'Cinzel, serif' }}>
// // // //                         || Na Hi Rasadrte Kascid-Arthah Pravartate ||
// // // //                     </p>
                    
// // // //                     {/* The Institution */}
// // // //                     <div className="mt-4">
// // // //                         <h1 className="text-5xl text-white tracking-widest uppercase font-bold" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 0 20px rgba(212,175,55,0.3)' }}>
// // // //                             AAYAM
// // // //                         </h1>
// // // //                         <p className="text-white/40 text-[9px] uppercase tracking-[0.5em] mt-2">
// // // //                             The Drama Society • IIT Madras
// // // //                         </p>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* B. THE PROTAGONIST */}
// // // //                 <div className="flex-1 flex flex-col justify-center items-center w-full relative">
// // // //                     <p className="text-[#D4AF37]/80 text-lg italic mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
// // // //                         This testament of art is conferred upon
// // // //                     </p>
                    
// // // //                     {/* NAME - The Star */}
// // // //                     <h2 className="text-7xl md:text-8xl text-white py-4 transform -rotate-1" 
// // // //                         style={{ fontFamily: 'Great Vibes, cursive', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
// // // //                         {data.recipient_name}
// // // //                     </h2>

// // // //                     {/* DETAILS */}
// // // //                     <div className="text-white/80 text-xl leading-relaxed mt-4 font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
// // // //                         For their timeless portrayal as <br/>
// // // //                         <span className="text-[#D4AF37] font-bold text-3xl uppercase tracking-wide block my-3 scale-y-110">
// // // //                             {data.award_title}
// // // //                         </span>
// // // //                         <span className="block text-lg italic text-white/50">
// // // //                             in the production "{data.event_name}"
// // // //                         </span>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* C. THE AUTHORITY */}
// // // //                 <div className="w-full flex justify-between items-end mt-4 pt-10 border-t border-[#D4AF37]/20">
                    
// // // //                     {/* AUTH 2 (Guest/Deputy) */}
// // // //                     <div className="flex flex-col items-center min-w-[160px]">
// // // //                         <div className="h-16 w-48 flex items-end justify-center mb-2">
// // // //                             {sig2Url ? (
// // // //                                 // Mix Blend Mode: Screen makes black ink disappear on dark bg, or we use filter to make it gold/white
// // // //                                 <img src={sig2Url} alt="Sign" className="h-full object-contain filter invert brightness-0 sepia hue-rotate-10 saturate-200" style={{ opacity: 0.9 }} />
// // // //                             ) : (
// // // //                                 <span className="font-cursive text-3xl text-white/20 rotate-[-2deg]" style={{ fontFamily: 'Great Vibes, cursive' }}>Signature</span>
// // // //                             )}
// // // //                         </div>
// // // //                         <p className="text-white uppercase text-[10px] tracking-widest font-bold">{data.auth_2_name}</p>
// // // //                         <p className="text-[#D4AF37] uppercase text-[8px] tracking-widest mt-1">{data.auth_2_title}</p>
// // // //                     </div>

// // // //                     {/* THE SEAL (Minimalist) */}
// // // //                     <div className="flex flex-col items-center justify-end mb-2 opacity-50">
// // // //                         <div className="w-12 h-12 border border-[#D4AF37] rotate-45 flex items-center justify-center">
// // // //                             <div className="w-8 h-8 border border-[#D4AF37] -rotate-45 flex items-center justify-center">
// // // //                                 <span className="text-[#D4AF37] font-serif font-bold text-xl">A</span>
// // // //                             </div>
// // // //                         </div>
// // // //                         <p className="font-mono text-[8px] uppercase tracking-widest text-[#D4AF37] mt-4">
// // // //                             ID: {data.id}
// // // //                         </p>
// // // //                     </div>

// // // //                     {/* AUTH 1 (Secretary) */}
// // // //                     <div className="flex flex-col items-center min-w-[160px]">
// // // //                         <div className="h-16 w-48 flex items-end justify-center mb-2">
// // // //                             {sig1Url ? (
// // // //                                 <img src={sig1Url} alt="Sign" className="h-full object-contain filter invert brightness-0 sepia hue-rotate-10 saturate-200" style={{ opacity: 0.9 }} />
// // // //                             ) : (
// // // //                                 <span className="font-cursive text-3xl text-white/20 rotate-[2deg]" style={{ fontFamily: 'Great Vibes, cursive' }}>Signature</span>
// // // //                             )}
// // // //                         </div>
// // // //                         <p className="text-white uppercase text-[10px] tracking-widest font-bold">{data.auth_1_name}</p>
// // // //                         <p className="text-[#D4AF37] uppercase text-[8px] tracking-widest mt-1">{data.auth_1_title}</p>
// // // //                     </div>

// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // // --- PUBLIC WRAPPER ---
// // // // export default function CertificateVault() {
// // // //   const [query, setQuery] = useState("");
// // // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // // //   const [data, setData] = useState<any>(null);

// // // //   const handleSearch = async (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     if (!query) return;
// // // //     setStatus("searching");
// // // //     const result = await verifyCertificate(query);
// // // //     if (result.success) {
// // // //         setData(result.data);
// // // //         setStatus("found");
// // // //     } else {
// // // //         setStatus("error");
// // // //     }
// // // //   };

// // // //   const handleDownload = async () => {
// // // //       const element = document.getElementById("cert-node");
// // // //       if(element) {
// // // //           const canvas = await html2canvas(element, { scale: 3, useCORS: true, backgroundColor: "#020202" });
// // // //           const link = document.createElement("a");
// // // //           link.download = `Aayam_${data.id}.png`;
// // // //           link.href = canvas.toDataURL("image/png");
// // // //           link.click();
// // // //       }
// // // //   };

// // // //   return (
// // // //     <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 font-serif">
// // // //       <div className="text-center mb-12 relative z-10">
// // // //           <h1 className="text-5xl text-[#D4AF37] mb-2 tracking-tight" style={{ fontFamily: 'Cinzel, serif' }}>THE ARCHIVES</h1>
// // // //           <p className="text-[10px] text-white/40 uppercase tracking-[0.5em]">Legacy Verification</p>
// // // //       </div>
// // // //       <div className="w-full max-w-md relative z-20 mb-8">
// // // //           <form onSubmit={handleSearch} className="relative">
// // // //               <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ENTER ID" className="w-full bg-[#111] border border-[#D4AF37]/30 text-[#D4AF37] p-4 text-center uppercase tracking-widest focus:outline-none focus:border-[#D4AF37] rounded-none" />
// // // //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50" />
// // // //           </form>
// // // //           {status === 'error' && <p className="text-center text-red-500 text-xs mt-4 tracking-widest">RECORD NOT FOUND</p>}
// // // //       </div>
// // // //       <AnimatePresence>
// // // //           {status === 'found' && data && (
// // // //               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl relative z-10">
// // // //                   <div className="border border-[#D4AF37]/20 p-2 bg-[#050505] shadow-[0_0_50px_rgba(212,175,55,0.1)]">
// // // //                       <CertificateCard data={data} />
// // // //                   </div>
// // // //                   <button onClick={handleDownload} className="mt-8 mx-auto flex items-center gap-3 px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase text-xs hover:bg-white transition-colors tracking-widest">
// // // //                       <Download className="w-4 h-4" /> Claim Artifact
// // // //                   </button>
// // // //               </motion.div>
// // // //           )}
// // // //       </AnimatePresence>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Search, Loader2, Download, ShieldCheck, XCircle } from "lucide-react";
// // // import { verifyCertificate } from "@/app/certificate/actions";
// // // import html2canvas from "html2canvas";
// // // import { toast } from "sonner";

// // // // --- THE VISUAL COMPONENT ---
// // // export const CertificateCard = ({ 
// // //     data, 
// // //     designConfig 
// // // }: { 
// // //     data: any; 
// // //     designConfig?: {
// // //         logo?: string | null;
// // //         signature1?: string | null;
// // //         signature2?: string | null;
// // //     } 
// // // }) => {
// // //     // Assets (Fallbacks if not uploaded)
// // //     const logoUrl = designConfig?.logo || null; 
// // //     const sig1Url = designConfig?.signature1 || null;
// // //     const sig2Url = designConfig?.signature2 || null;

// // //     return (
// // //         <div 
// // //             id="cert-node" 
// // //             className="relative w-full aspect-[1.414/1] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none bg-[#F9F5EB] text-[#2c1a1a]"
// // //         >
// // //             {/* --- FONTS & STYLES --- */}
// // //             <style jsx global>{`
// // //                 @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Gotu&display=swap');
// // //             `}</style>

// // //             {/* --- LAYER 1: THE PAPER (Bhojpatra) --- */}
// // //             <div className="absolute inset-0 bg-[#F9F5EB]" />
// // //             <div className="absolute inset-0 opacity-[0.6] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
// // //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(88,28,28,0.08)_100%)] pointer-events-none" />

// // //             {/* --- LAYER 2: THE WATERMARK (The Soul) --- */}
// // //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] opacity-[0.08] pointer-events-none flex items-center justify-center mix-blend-multiply">
// // //                 {logoUrl ? (
// // //                     <img src={logoUrl} alt="Watermark" className="w-full h-full object-contain grayscale" />
// // //                 ) : (
// // //                     // Default Sacred Geometry if no logo
// // //                     <svg viewBox="0 0 100 100" className="w-full h-full text-[#8B2500] animate-[spin_60s_linear_infinite]">
// // //                         <path d="M50,0 L65,35 L100,50 L65,65 L50,100 L35,65 L0,50 L35,35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
// // //                         <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
// // //                     </svg>
// // //                 )}
// // //             </div>

// // //             {/* --- LAYER 3: THE ROYAL BORDER (The Frame) --- */}
// // //             {/* The Heavy Maroon Inlay */}
// // //             <div className="absolute top-4 bottom-4 left-4 right-4 border-[4px] border-[#581c1c] z-10" />
// // //             <div className="absolute top-5 bottom-5 left-5 right-5 border-[1px] border-[#b4833e] z-10" />
            
// // //             {/* The Ornamental Corners (SVG) */}
// // //             <svg className="absolute top-4 left-4 w-32 h-32 text-[#581c1c] z-20" viewBox="0 0 100 100">
// // //                 <path d="M0,0 L40,0 Q20,20 0,40 Z" fill="currentColor" />
// // //                 <path d="M5,5 L90,5 M5,5 L5,90" stroke="#b4833e" strokeWidth="1" />
// // //             </svg>
// // //             <svg className="absolute top-4 right-4 w-32 h-32 text-[#581c1c] z-20 rotate-90" viewBox="0 0 100 100">
// // //                 <path d="M0,0 L40,0 Q20,20 0,40 Z" fill="currentColor" />
// // //                 <path d="M5,5 L90,5 M5,5 L5,90" stroke="#b4833e" strokeWidth="1" />
// // //             </svg>
// // //             <svg className="absolute bottom-4 left-4 w-32 h-32 text-[#581c1c] z-20 -rotate-90" viewBox="0 0 100 100">
// // //                 <path d="M0,0 L40,0 Q20,20 0,40 Z" fill="currentColor" />
// // //                 <path d="M5,5 L90,5 M5,5 L5,90" stroke="#b4833e" strokeWidth="1" />
// // //             </svg>
// // //             <svg className="absolute bottom-4 right-4 w-32 h-32 text-[#581c1c] z-20 rotate-180" viewBox="0 0 100 100">
// // //                 <path d="M0,0 L40,0 Q20,20 0,40 Z" fill="currentColor" />
// // //                 <path d="M5,5 L90,5 M5,5 L5,90" stroke="#b4833e" strokeWidth="1" />
// // //             </svg>

// // //             {/* --- LAYER 4: THE SCRIPT (Content) --- */}
// // //             <div className="relative z-30 flex flex-col h-full items-center text-center justify-between py-16 px-20">
                
// // //                 {/* A. THE INVOCATION (Sanskrit) */}
// // //                 <div className="flex flex-col items-center gap-2 w-full border-b border-[#b4833e]/30 pb-4">
// // //                     <p className="font-bold text-[#8B2500] text-sm tracking-[0.2em] uppercase" style={{ fontFamily: 'Gotu, sans-serif' }}>
// // //                         || न हि रसादृते कश्चिदर्थः प्रवर्तते ||
// // //                     </p>
// // //                     <p className="text-[9px] text-[#5a4a42] uppercase tracking-widest font-serif">
// // //                         "No meaning proceeds without Essence"
// // //                     </p>
// // //                 </div>

// // //                 {/* B. THE PROCLAMATION */}
// // //                 <div className="flex-1 flex flex-col justify-center items-center w-full relative space-y-6">
                    
// // //                     {/* The Header */}
// // //                     <div className="space-y-1">
// // //                         <h1 className="text-5xl md:text-6xl text-[#2c1a1a] tracking-wider uppercase" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// // //                             Certificate
// // //                         </h1>
// // //                         <p className="text-[#b4833e] text-lg tracking-[0.4em] uppercase font-bold" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// // //                             Of Distinction
// // //                         </p>
// // //                     </div>

// // //                     {/* The Recipient */}
// // //                     <div className="relative py-4 w-full">
// // //                         <p className="text-[#5a4a42] text-xl italic font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// // //                             Conferred upon
// // //                         </p>
// // //                         <h2 className="text-7xl md:text-8xl text-[#1a1a1a] leading-tight drop-shadow-sm py-2" 
// // //                             style={{ fontFamily: 'Pinyon Script, cursive' }}>
// // //                             {data.recipient_name}
// // //                         </h2>
// // //                     </div>

// // //                     {/* The Context */}
// // //                     <div className="text-[#2c1a1a] text-2xl leading-relaxed max-w-4xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// // //                         For their sublime contribution as <br/>
// // //                         <span className="text-[#8B2500] font-bold text-3xl uppercase tracking-wide block my-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// // //                             {data.award_title}
// // //                         </span>
// // //                         <span className="block text-xl italic text-[#5a4a42]">
// // //                             in the production <span className="font-bold text-[#1a1a1a] border-b border-[#1a1a1a]/20 px-2">"{data.event_name}"</span>
// // //                         </span>
// // //                     </div>
// // //                 </div>

// // //                 {/* C. THE AUTHORITY (Signatures) */}
// // //                 <div className="w-full flex justify-between items-end pt-8 px-8">
                    
// // //                     {/* LEFT SIGNATURE (Deputy/Guest) */}
// // //                     <div className="flex flex-col items-center w-48">
// // //                         <div className="h-20 w-full flex items-end justify-center mb-1">
// // //                             {sig2Url ? (
// // //                                 <img src={sig2Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply" />
// // //                             ) : (
// // //                                 <span className="font-cursive text-3xl opacity-30 text-[#2c1a1a] rotate-[-2deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
// // //                             )}
// // //                         </div>
// // //                         <div className="h-[2px] w-full bg-[#2c1a1a] mb-1 opacity-80" />
// // //                         <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{data.auth_2_name}</p>
// // //                         <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{data.auth_2_title}</p>
// // //                     </div>

// // //                     {/* CENTER SEAL (Verification) */}
// // //                     <div className="flex flex-col items-center justify-end mb-2 opacity-80">
// // //                         <div className="w-16 h-16 border-2 border-[#8B2500] rounded-full flex items-center justify-center p-1">
// // //                             <div className="w-full h-full border border-[#8B2500] rounded-full flex items-center justify-center bg-[#8B2500]/10">
// // //                                 <ShieldCheck className="w-6 h-6 text-[#8B2500]" />
// // //                             </div>
// // //                         </div>
// // //                         <p className="font-mono text-[8px] uppercase tracking-widest text-[#5a4a42] mt-2">
// // //                             ID: {data.id}
// // //                         </p>
// // //                     </div>

// // //                     {/* RIGHT SIGNATURE (Secretary) */}
// // //                     <div className="flex flex-col items-center w-48">
// // //                         <div className="h-20 w-full flex items-end justify-center mb-1">
// // //                             {sig1Url ? (
// // //                                 <img src={sig1Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply" />
// // //                             ) : (
// // //                                 <span className="font-cursive text-3xl opacity-30 text-[#2c1a1a] rotate-[2deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
// // //                             )}
// // //                         </div>
// // //                         <div className="h-[2px] w-full bg-[#2c1a1a] mb-1 opacity-80" />
// // //                         <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{data.auth_1_name}</p>
// // //                         <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{data.auth_1_title}</p>
// // //                     </div>

// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // --- PUBLIC VAULT WRAPPER (Data Fetching) ---
// // // export default function CertificateVault() {
// // //   const [query, setQuery] = useState("");
// // //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// // //   const [data, setData] = useState<any>(null);

// // //   const handleSearch = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (!query) return;
// // //     setStatus("searching");
    
// // //     // REAL DATABASE CALL
// // //     const result = await verifyCertificate(query);
    
// // //     if (result.success) {
// // //         setData(result.data);
// // //         setStatus("found");
// // //     } else {
// // //         setStatus("error");
// // //     }
// // //   };

// // //   const handleDownload = async () => {
// // //       const element = document.getElementById("cert-node");
// // //       if(element) {
// // //           const canvas = await html2canvas(element, { scale: 3, useCORS: true });
// // //           const link = document.createElement("a");
// // //           link.download = `Aayam_Decree_${data.id}.png`;
// // //           link.href = canvas.toDataURL("image/png");
// // //           link.click();
// // //       }
// // //   };

// // //   return (
// // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col items-center justify-center px-4 relative font-serif">
// // //       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
      
// // //       <div className="text-center mb-8 relative z-10">
// // //           <div className="inline-block border border-[#b4833e] px-4 py-1 rounded-full mb-3 bg-[#b4833e]/10">
// // //             <span className="text-[10px] text-[#b4833e] uppercase tracking-[0.3em] font-bold">The Archives</span>
// // //           </div>
// // //           <h1 className="text-4xl text-white font-serif tracking-tight">Legacy Verification</h1>
// // //       </div>

// // //       <div className="w-full max-w-md relative z-20 mb-10">
// // //           <form onSubmit={handleSearch} className="relative group">
// // //               <input 
// // //                 value={query} onChange={(e) => setQuery(e.target.value)}
// // //                 placeholder="ENTER SCROLL ID"
// // //                 className="w-full bg-[#111] border border-[#b4833e]/30 text-[#b4833e] p-4 pl-12 text-center uppercase tracking-widest focus:outline-none focus:border-[#b4833e] transition-all"
// // //               />
// // //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b4833e]/50 group-focus-within:text-[#b4833e]" />
// // //           </form>
// // //           {status === 'error' && (
// // //               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center gap-2 mt-4 text-red-400 text-xs tracking-widest">
// // //                   <XCircle className="w-3 h-3" /> RECORD NOT FOUND
// // //               </motion.div>
// // //           )}
// // //       </div>

// // //       <AnimatePresence>
// // //           {status === 'found' && data && (
// // //               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl relative z-10">
// // //                   <div className="p-2 bg-[#b4833e] rounded shadow-[0_0_60px_rgba(180,131,62,0.2)]">
// // //                       <CertificateCard data={data} />
// // //                   </div>
// // //                   <button onClick={handleDownload} className="mt-8 mx-auto flex items-center gap-2 px-8 py-3 bg-[#b4833e] text-black font-bold uppercase text-xs hover:bg-white transition-all rounded shadow-lg tracking-widest">
// // //                       <Download className="w-4 h-4" /> Download Artifact
// // //                   </button>
// // //               </motion.div>
// // //           )}
// // //       </AnimatePresence>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Search, Loader2, Download, ShieldCheck, XCircle } from "lucide-react";
// // import { verifyCertificate } from "@/app/certificate/actions";
// // import html2canvas from "html2canvas";
// // import { toast } from "sonner";

// // // --- THE REFINED ARTIFACT ---
// // export const CertificateCard = ({ 
// //     data, 
// //     designConfig 
// // }: { 
// //     data: any; 
// //     designConfig?: {
// //         logo?: string | null;
// //         signature1?: string | null;
// //         signature2?: string | null;
// //     } 
// // }) => {
// //     // Assets (Fallbacks)
// //     const logoUrl = designConfig?.logo || null; 
// //     const sig1Url = designConfig?.signature1 || null;
// //     const sig2Url = designConfig?.signature2 || null;

// //     return (
// //         <div 
// //             id="cert-node" 
// //             className="relative w-full aspect-[1.414/1] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none bg-[#F9F5EB] text-[#2c1a1a]"
// //         >
// //             {/* --- FONTS --- */}
// //             <style jsx global>{`
// //                 @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Pinyon+Script&family=Gotu&display=swap');
// //             `}</style>

// //             {/* --- LAYER 1: THE PAPER (Texture) --- */}
// //             <div className="absolute inset-0 bg-[#F9F5EB]" />
// //             <div className="absolute inset-0 opacity-[0.5] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
// //             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_50%,rgba(88,28,28,0.06)_100%)] pointer-events-none" />

// //             {/* --- LAYER 2: THE WATERMARK (Centered & Sized) --- */}
// //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] opacity-[0.08] pointer-events-none flex items-center justify-center mix-blend-multiply">
// //                 {logoUrl ? (
// //                     <img src={logoUrl} alt="Watermark" className="w-full h-full object-contain grayscale contrast-125" />
// //                 ) : (
// //                     // Default Mandala
// //                     <svg viewBox="0 0 100 100" className="w-full h-full text-[#8B2500] animate-[spin_120s_linear_infinite]">
// //                         <path d="M50,0 L60,40 L100,50 L60,60 L50,100 L40,60 L0,50 L40,40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
// //                         <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
// //                         <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
// //                     </svg>
// //                 )}
// //             </div>

// //             {/* --- LAYER 3: THE BORDER (Refined Thickness) --- */}
// //             {/* Outer Maroon Band */}
// //             <div className="absolute top-5 bottom-5 left-5 right-5 border-[3px] border-[#581c1c] z-10" />
// //             {/* Inner Gold Hairline */}
// //             <div className="absolute top-7 bottom-7 left-7 right-7 border-[1px] border-[#b4833e]/60 z-10" />
            
// //             {/* Corner Ornaments (Scaled Down) */}
// //             <svg className="absolute top-5 left-5 w-20 h-20 text-[#581c1c] z-20" viewBox="0 0 100 100">
// //                 <path d="M0,0 L30,0 Q15,15 0,30 Z" fill="currentColor" />
// //                 <path d="M5,5 L60,5 M5,5 L5,60" stroke="#b4833e" strokeWidth="1" />
// //             </svg>
// //             <svg className="absolute top-5 right-5 w-20 h-20 text-[#581c1c] z-20 rotate-90" viewBox="0 0 100 100">
// //                 <path d="M0,0 L30,0 Q15,15 0,30 Z" fill="currentColor" />
// //                 <path d="M5,5 L60,5 M5,5 L5,60" stroke="#b4833e" strokeWidth="1" />
// //             </svg>
// //             <svg className="absolute bottom-5 left-5 w-20 h-20 text-[#581c1c] z-20 -rotate-90" viewBox="0 0 100 100">
// //                 <path d="M0,0 L30,0 Q15,15 0,30 Z" fill="currentColor" />
// //                 <path d="M5,5 L60,5 M5,5 L5,60" stroke="#b4833e" strokeWidth="1" />
// //             </svg>
// //             <svg className="absolute bottom-5 right-5 w-20 h-20 text-[#581c1c] z-20 rotate-180" viewBox="0 0 100 100">
// //                 <path d="M0,0 L30,0 Q15,15 0,30 Z" fill="currentColor" />
// //                 <path d="M5,5 L60,5 M5,5 L5,60" stroke="#b4833e" strokeWidth="1" />
// //             </svg>

// //             {/* --- LAYER 4: THE CONTENT (Balanced Typography) --- */}
// //             <div className="relative z-30 flex flex-col h-full items-center text-center justify-between py-12 px-16">
                
// //                 {/* A. HEADER */}
// //                 <div className="flex flex-col items-center gap-2 w-full pt-4">
// //                     {/* Sanskrit Shloka */}
// //                     <p className="font-bold text-[#8B2500] text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-90" style={{ fontFamily: 'Gotu, sans-serif' }}>
// //                         || न हि रसादृते कश्चिदर्थः प्रवर्तते ||
// //                     </p>
                    
// //                     {/* Institution */}
// //                     <div className="mt-1 relative">
// //                         <h1 className="text-3xl md:text-4xl text-[#2c1a1a] tracking-widest uppercase font-bold" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// //                             Certificate
// //                         </h1>
// //                         <p className="text-[#b4833e] text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold mt-1 text-center" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// //                             of Honor
// //                         </p>
// //                         {/* Decorative line */}
// //                         <div className="w-16 h-[1px] bg-[#581c1c] mx-auto mt-3 opacity-40" />
// //                     </div>
// //                 </div>

// //                 {/* B. THE RECIPIENT (The Art) */}
// //                 <div className="flex-1 flex flex-col justify-center items-center w-full max-w-4xl relative -mt-4">
// //                     <p className="text-[#5a4a42] text-sm md:text-base italic font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// //                         This accolade is presented to
// //                     </p>
                    
// //                     {/* NAME - Perfectly Sized */}
// //                     <div className="relative py-2 w-full">
// //                         <h2 className="text-5xl md:text-6xl text-[#1a1a1a] leading-none py-2 drop-shadow-sm" 
// //                             style={{ fontFamily: 'Pinyon Script, cursive' }}>
// //                             {data.recipient_name}
// //                         </h2>
// //                     </div>

// //                     {/* CONTEXT - Literary Flow */}
// //                     <div className="text-[#2c1a1a] text-lg md:text-xl leading-relaxed max-w-2xl mt-4 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
// //                         For their exceptional artistry as <br/>
// //                         <span className="text-[#8B2500] font-bold text-xl md:text-2xl uppercase tracking-wide block my-2" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
// //                             {data.award_title}
// //                         </span>
// //                         <span className="block text-base md:text-lg italic text-[#5a4a42]">
// //                             in the production <span className="font-semibold text-[#1a1a1a] border-b border-[#1a1a1a]/20 px-1">"{data.event_name}"</span>
// //                         </span>
// //                     </div>
// //                 </div>

// //                 {/* C. FOOTER (Signatories) */}
// //                 <div className="w-full flex justify-between items-end pb-4 px-4">
                    
// //                     {/* LEFT SIGNATURE */}
// //                     <div className="flex flex-col items-center w-40">
// //                         <div className="h-16 w-full flex items-end justify-center mb-1 relative">
// //                             {sig2Url ? (
// //                                 <img src={sig2Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply" />
// //                             ) : (
// //                                 <span className="font-cursive text-2xl opacity-20 text-[#2c1a1a] rotate-[-2deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
// //                             )}
// //                         </div>
// //                         <div className="h-[1px] w-full bg-[#2c1a1a]/40 mb-1" />
// //                         <p className="font-bold text-[#1a1a1a] uppercase text-[9px] tracking-wider">{data.auth_2_name}</p>
// //                         <p className="text-[8px] text-[#8B2500] uppercase tracking-widest font-serif">{data.auth_2_title}</p>
// //                     </div>

// //                     {/* CENTER SEAL (Verified Badge) */}
// //                     <div className="flex flex-col items-center justify-end mb-1 opacity-70">
// //                         <div className="relative">
// //                             <ShieldCheck className="w-8 h-8 text-[#8B2500]" />
// //                         </div>
// //                         <p className="font-mono text-[7px] uppercase tracking-widest text-[#5a4a42] mt-1">
// //                             {data.id}
// //                         </p>
// //                     </div>

// //                     {/* RIGHT SIGNATURE */}
// //                     <div className="flex flex-col items-center w-40">
// //                         <div className="h-16 w-full flex items-end justify-center mb-1 relative">
// //                             {sig1Url ? (
// //                                 <img src={sig1Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply" />
// //                             ) : (
// //                                 <span className="font-cursive text-2xl opacity-20 text-[#2c1a1a] rotate-[2deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
// //                             )}
// //                         </div>
// //                         <div className="h-[1px] w-full bg-[#2c1a1a]/40 mb-1" />
// //                         <p className="font-bold text-[#1a1a1a] uppercase text-[9px] tracking-wider">{data.auth_1_name}</p>
// //                         <p className="text-[8px] text-[#8B2500] uppercase tracking-widest font-serif">{data.auth_1_title}</p>
// //                     </div>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // // --- PUBLIC VAULT WRAPPER ---
// // export default function CertificateVault() {
// //   const [query, setQuery] = useState("");
// //   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
// //   const [data, setData] = useState<any>(null);

// //   const handleSearch = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!query) return;
// //     setStatus("searching");
// //     const result = await verifyCertificate(query);
// //     if (result.success) {
// //         setData(result.data);
// //         setStatus("found");
// //     } else {
// //         setStatus("error");
// //     }
// //   };

// //   const handleDownload = async () => {
// //       const element = document.getElementById("cert-node");
// //       if(element) {
// //           const canvas = await html2canvas(element, { scale: 3, useCORS: true });
// //           const link = document.createElement("a");
// //           link.download = `Aayam_Cert_${data.id}.png`;
// //           link.href = canvas.toDataURL("image/png");
// //           link.click();
// //       }
// //   };

// //   return (
// //     <section className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col items-center justify-center px-4 font-serif">
// //       <div className="text-center mb-10 relative z-10">
// //           <h1 className="text-4xl text-[#b4833e] font-serif mb-2" style={{ fontFamily: 'Cinzel Decorative' }}>THE VAULT</h1>
// //           <p className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Aayam Archives</p>
// //       </div>
// //       <div className="w-full max-w-md relative z-20 mb-8">
// //           <form onSubmit={handleSearch} className="relative">
// //               <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="CERTIFICATE ID" className="w-full bg-[#111] border border-[#b4833e]/30 text-[#b4833e] p-3 text-center uppercase tracking-widest focus:outline-none focus:border-[#b4833e] text-sm" />
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b4833e]/50" />
// //           </form>
// //           {status === 'error' && <p className="text-center text-red-400 text-[10px] mt-2 tracking-widest">INVALID ID</p>}
// //       </div>
// //       <AnimatePresence>
// //           {status === 'found' && data && (
// //               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl relative z-10">
// //                   <div className="p-1 bg-[#b4833e] rounded shadow-2xl">
// //                       <CertificateCard data={data} />
// //                   </div>
// //                   <button onClick={handleDownload} className="mt-6 mx-auto flex items-center gap-2 px-6 py-2 bg-[#b4833e] text-black font-bold uppercase text-[10px] hover:bg-white transition-colors tracking-widest">
// //                       <Download className="w-4 h-4" /> DOWNLOAD
// //                   </button>
// //               </motion.div>
// //           )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Loader2, Download, ShieldCheck, XCircle } from "lucide-react";
// import { verifyCertificate } from "@/app/certificate/actions";
// import html2canvas from "html2canvas";
// import { toast } from "sonner";

// // --- THE VISUAL ARTIFACT ---
// export const CertificateCard = ({ 
//     data, 
//     designConfig 
// }: { 
//     data: any; 
//     designConfig?: {
//         logo?: string | null;
//         signature1?: string | null;
//         signature2?: string | null;
//     } 
// }) => {
//     const logoUrl = designConfig?.logo || null; 
//     const sig1Url = designConfig?.signature1 || null;
//     const sig2Url = designConfig?.signature2 || null;

//     // Default Titles if missing
//     const title1 = data.auth_1_title || "Secretary";
//     const name1 = data.auth_1_name || "Siddharth";
//     const title2 = data.auth_2_title || "Dy. Secretary";
//     const name2 = data.auth_2_name || "Aditya";

//     return (
//         <div 
//             id="cert-node" 
//             className="relative w-full aspect-[1.414/1] overflow-hidden flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.6)] select-none bg-[#F7F2E8] text-[#2c1a1a]"
//         >
//             {/* --- 1. THE FOUNDATION (Fonts & Texture) --- */}
//             <style jsx global>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Gotu&display=swap');
//             `}</style>

//             {/* Paper Texture */}
//             <div className="absolute inset-0 bg-[#F7F2E8]" />
//             <div className="absolute inset-0 opacity-[0.6] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
//             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]" />
//             {/* Vignette (Age) */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(88,28,28,0.12)_100%)] pointer-events-none" />

//             {/* --- 2. THE WATERMARK (The Deity) --- */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] pointer-events-none flex items-center justify-center opacity-[0.07] mix-blend-multiply">
//                 {logoUrl ? (
//                     <img src={logoUrl} alt="Watermark" className="w-full h-full object-contain grayscale contrast-125" />
//                 ) : (
//                     // Fallback Sacred Geometry
//                     <svg viewBox="0 0 100 100" className="w-full h-full text-[#581c1c] animate-[spin_120s_linear_infinite]">
//                         <path d="M50,0 L62,38 L100,50 L62,62 L50,100 L38,62 L0,50 L38,38 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
//                         <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
//                         <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1,2" />
//                     </svg>
//                 )}
//             </div>

//             {/* --- 3. THE BORDER (The Fortress) --- */}
//             {/* Heavy Maroon Band */}
//             <div className="absolute top-4 bottom-4 left-4 right-4 border-[6px] border-[#581c1c] z-10" />
//             {/* Delicate Gold Inlay */}
//             <div className="absolute top-6 bottom-6 left-6 right-6 border-[1px] border-[#b4833e] z-10" />
            
//             {/* Corner Ornaments (Jaali) */}
//             {[0, 90, 180, 270].map((deg, i) => (
//                 <svg key={i} className="absolute w-24 h-24 text-[#581c1c] z-20" 
//                      style={{ 
//                          top: deg < 180 ? '1rem' : 'auto', 
//                          bottom: deg >= 180 ? '1rem' : 'auto',
//                          left: deg === 0 || deg === 270 ? '1rem' : 'auto',
//                          right: deg === 90 || deg === 180 ? '1rem' : 'auto',
//                          transform: `rotate(${deg}deg)` 
//                      }} 
//                      viewBox="0 0 100 100">
//                     <path d="M0,0 L50,0 Q25,25 0,50 Z" fill="currentColor" />
//                     <path d="M5,5 L80,5 M5,5 L5,80" stroke="#b4833e" strokeWidth="1.5" />
//                     <circle cx="15" cy="15" r="3" fill="#b4833e" />
//                 </svg>
//             ))}

//             {/* --- 4. THE CONTENT (The Scripture) --- */}
//             <div className="relative z-30 flex flex-col h-full items-center text-center justify-between py-12 px-16">
                
//                 {/* A. HEADER (Invocation) */}
//                 <div className="flex flex-col items-center gap-3 w-full border-b border-[#b4833e]/30 pb-4 mt-4">
//                     {/* SANSKRIT */}
//                     <p className="font-bold text-[#8B2500] text-sm tracking-[0.2em] uppercase drop-shadow-sm" style={{ fontFamily: 'Gotu, sans-serif' }}>
//                         || न हि रसादृते कश्चिदर्थः प्रवर्तते ||
//                     </p>
                    
//                     {/* ENGLISH */}
//                     <div className="mt-2 space-y-1">
//                         <h1 className="text-5xl md:text-6xl text-[#2c1a1a] tracking-widest uppercase" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
//                             Certificate
//                         </h1>
//                         <p className="text-[#b4833e] text-[10px] tracking-[0.5em] uppercase font-bold" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
//                             Of Excellence
//                         </p>
//                     </div>
//                 </div>

//                 {/* B. BODY (The Narrative) */}
//                 <div className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl relative">
//                     <p className="text-[#5a4a42] text-lg italic font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
//                         This honor is bestowed upon
//                     </p>
                    
//                     {/* RECIPIENT NAME */}
//                     <div className="relative w-full py-4">
//                         <h2 className="text-7xl md:text-8xl text-[#1a1a1a] leading-none drop-shadow-md py-2 scale-110" 
//                             style={{ fontFamily: 'Pinyon Script, cursive' }}>
//                             {data.recipient_name}
//                         </h2>
//                     </div>

//                     {/* CITATION */}
//                     <div className="text-[#2c1a1a] text-xl leading-relaxed max-w-3xl mt-4 font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
//                         For their sublime artistic contribution as <br/>
//                         <span className="text-[#8B2500] font-bold text-3xl uppercase tracking-wide block my-3 scale-y-105" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
//                             {data.award_title}
//                         </span>
//                         <span className="block text-lg italic text-[#5a4a42]">
//                             in the production <span className="font-bold text-[#1a1a1a] border-b border-[#1a1a1a]/20 px-2">"{data.event_name}"</span>
//                         </span>
//                     </div>
//                 </div>

//                 {/* C. FOOTER (The Authority) */}
//                 <div className="w-full flex justify-between items-end pb-2 px-6">
                    
//                     {/* SIGNATURE 1 (Left - Deputy/Guest) */}
//                     <div className="flex flex-col items-center w-48">
//                         <div className="h-20 w-full flex items-end justify-center mb-1 relative">
//                             {sig2Url ? (
//                                 <img src={sig2Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply opacity-90" />
//                             ) : (
//                                 <span className="font-cursive text-3xl opacity-20 text-[#2c1a1a] rotate-[-3deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
//                             )}
//                         </div>
//                         <div className="h-[2px] w-32 bg-[#2c1a1a]/80 mb-1" />
//                         <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{name2}</p>
//                         <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{title2}</p>
//                     </div>

//                     {/* CENTER SEAL (Official) */}
//                     <div className="flex flex-col items-center justify-end mb-1 opacity-90">
//                         <div className="relative">
//                             <ShieldCheck className="w-10 h-10 text-[#8B2500]" />
//                         </div>
//                         <p className="font-mono text-[7px] uppercase tracking-widest text-[#5a4a42] mt-2 border border-[#5a4a42]/30 px-2 py-0.5 rounded">
//                             {data.id}
//                         </p>
//                     </div>

//                     {/* SIGNATURE 2 (Right - Secretary) */}
//                     <div className="flex flex-col items-center w-48">
//                         <div className="h-20 w-full flex items-end justify-center mb-1 relative">
//                             {sig1Url ? (
//                                 <img src={sig1Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply opacity-90" />
//                             ) : (
//                                 <span className="font-cursive text-3xl opacity-20 text-[#2c1a1a] rotate-[2deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
//                             )}
//                         </div>
//                         <div className="h-[2px] w-32 bg-[#2c1a1a]/80 mb-1" />
//                         <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{name1}</p>
//                         <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{title1}</p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- PUBLIC VAULT (Database Connected) ---
// export default function CertificateVault() {
//   const [query, setQuery] = useState("");
//   const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
//   const [data, setData] = useState<any>(null);

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query) return;
//     setStatus("searching");
    
//     // REAL DB CALL
//     const result = await verifyCertificate(query);
    
//     if (result.success) {
//         setData(result.data);
//         setStatus("found");
//     } else {
//         setStatus("error");
//     }
//   };

//   const handleDownload = async () => {
//       const element = document.getElementById("cert-node");
//       if(element) {
//           const canvas = await html2canvas(element, { scale: 3, useCORS: true });
//           const link = document.createElement("a");
//           link.download = `Aayam_Art_${data.id}.png`;
//           link.href = canvas.toDataURL("image/png");
//           link.click();
//       }
//   };

//   return (
//     <section className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col items-center justify-center px-4 font-serif">
//       <div className="text-center mb-10 relative z-10">
//           <h1 className="text-4xl text-[#b4833e] font-serif mb-2" style={{ fontFamily: 'Cinzel Decorative' }}>THE ARCHIVES</h1>
//           <p className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Official Verification</p>
//       </div>
      
//       <div className="w-full max-w-md relative z-20 mb-8">
//           <form onSubmit={handleSearch} className="relative">
//               <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ENTER ID" className="w-full bg-[#111] border border-[#b4833e]/30 text-[#b4833e] p-3 text-center uppercase tracking-widest focus:outline-none focus:border-[#b4833e]" />
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b4833e]/50" />
//           </form>
//           {status === 'error' && <p className="text-center text-red-400 text-xs mt-2">RECORD NOT FOUND</p>}
//       </div>

//       <AnimatePresence>
//           {status === 'found' && data && (
//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl relative z-10">
//                   <div className="p-1 bg-[#b4833e] rounded shadow-2xl">
//                       <CertificateCard data={data} />
//                   </div>
//                   <button onClick={handleDownload} className="mt-6 mx-auto flex items-center gap-2 px-6 py-2 bg-[#b4833e] text-black font-bold uppercase text-[10px] hover:bg-white transition-colors tracking-widest">
//                       <Download className="w-4 h-4" /> DOWNLOAD
//                   </button>
//               </motion.div>
//           )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, Download, ShieldCheck, XCircle } from "lucide-react";
import { verifyCertificate } from "@/app/certificate/actions";
import html2canvas from "html2canvas";
import { toast } from "sonner";

// --- THE VISUAL COMPONENT ---
export const CertificateCard = ({ 
    data, 
    designConfig 
}: { 
    data: any; 
    designConfig?: {
        logo?: string | null;
        signature1?: string | null;
        signature2?: string | null;
    } 
}) => {
    // Assets (Fallbacks if not uploaded)
    const logoUrl = designConfig?.logo || null; 
    const sig1Url = designConfig?.signature1 || null;
    const sig2Url = designConfig?.signature2 || null;

    // Data Fallbacks
    const title1 = data.auth_1_title || "Secretary";
    const name1 = data.auth_1_name || "Siddharth";
    const title2 = data.auth_2_title || "Dy. Secretary";
    const name2 = data.auth_2_name || "Aditya";

    return (
        <div 
            id="cert-node" 
            className="relative w-full aspect-[1.414/1] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none bg-[#F9F5EB] text-[#2c1a1a]"
        >
            {/* --- FONTS & STYLES --- */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Gotu&display=swap');
            `}</style>

            {/* --- LAYER 1: THE PAPER (Bhojpatra) --- */}
            <div className="absolute inset-0 bg-[#F9F5EB]" />
            <div className="absolute inset-0 opacity-[0.6] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(88,28,28,0.08)_100%)] pointer-events-none" />

            {/* --- LAYER 2: THE WATERMARK (The Soul) --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] pointer-events-none flex items-center justify-center opacity-[0.08] mix-blend-multiply">
                {logoUrl ? (
                    <img src={logoUrl} alt="Watermark" className="w-full h-full object-contain grayscale contrast-125" />
                ) : (
                    // Default Mandala if no logo
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#581c1c] animate-[spin_120s_linear_infinite]">
                        <path d="M50,0 L65,35 L100,50 L65,65 L50,100 L35,65 L0,50 L35,35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                )}
            </div>

            {/* --- LAYER 3: THE ROYAL BORDER (The Frame) --- */}
            {/* The Heavy Maroon Inlay */}
            <div className="absolute top-4 bottom-4 left-4 right-4 border-[6px] border-[#581c1c] z-10" />
            {/* The Delicate Gold Inlay */}
            <div className="absolute top-6 bottom-6 left-6 right-6 border-[1px] border-[#b4833e] z-10" />
            
            {/* Corner Ornaments (Jaali) */}
            {[0, 90, 180, 270].map((deg, i) => (
                <svg key={i} className="absolute w-24 h-24 text-[#581c1c] z-20" 
                     style={{ 
                         top: deg < 180 ? '1rem' : 'auto', 
                         bottom: deg >= 180 ? '1rem' : 'auto',
                         left: deg === 0 || deg === 270 ? '1rem' : 'auto',
                         right: deg === 90 || deg === 180 ? '1rem' : 'auto',
                         transform: `rotate(${deg}deg)` 
                     }} 
                     viewBox="0 0 100 100">
                    <path d="M0,0 L50,0 Q25,25 0,50 Z" fill="currentColor" />
                    <path d="M5,5 L80,5 M5,5 L5,80" stroke="#b4833e" strokeWidth="1.5" />
                    <circle cx="15" cy="15" r="3" fill="#b4833e" />
                </svg>
            ))}

            {/* --- LAYER 4: THE CONTENT (The Scripture) --- */}
            <div className="relative z-30 flex flex-col h-full items-center text-center justify-between py-12 px-16">
                
                {/* A. HEADER (Invocation) */}
                <div className="flex flex-col items-center gap-3 w-full border-b border-[#b4833e]/30 pb-4 mt-4">
                    {/* SANSKRIT */}
                    <p className="font-bold text-[#8B2500] text-sm tracking-[0.2em] uppercase drop-shadow-sm" style={{ fontFamily: 'Gotu, sans-serif' }}>
                        || न हि रसादृते कश्चिदर्थः प्रवर्तते ||
                    </p>
                    
                    {/* ENGLISH */}
                    <div className="mt-2 space-y-1">
                        <h1 className="text-5xl md:text-6xl text-[#2c1a1a] tracking-widest uppercase" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                            Certificate
                        </h1>
                        <p className="text-[#b4833e] text-[10px] tracking-[0.5em] uppercase font-bold" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                            Of Excellence
                        </p>
                    </div>
                </div>

                {/* B. BODY (The Narrative) */}
                <div className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl relative">
                    <p className="text-[#5a4a42] text-lg italic font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        This honor is bestowed upon
                    </p>
                    
                    {/* RECIPIENT NAME */}
                    <div className="relative w-full py-4">
                        <h2 className="text-6xl md:text-8xl text-[#1a1a1a] leading-none drop-shadow-md py-2 scale-110" 
                            style={{ fontFamily: 'Pinyon Script, cursive' }}>
                            {data.recipient_name}
                        </h2>
                    </div>

                    {/* CITATION */}
                    <div className="text-[#2c1a1a] text-xl leading-relaxed max-w-3xl mt-4 font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        For their sublime artistic contribution as <br/>
                        <span className="text-[#8B2500] font-bold text-3xl uppercase tracking-wide block my-3 scale-y-105" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
                            {data.award_title}
                        </span>
                        <span className="block text-lg italic text-[#5a4a42]">
                            in the production <span className="font-bold text-[#1a1a1a] border-b border-[#1a1a1a]/20 px-2">"{data.event_name}"</span>
                        </span>
                    </div>
                </div>

                {/* C. FOOTER (The Authority) */}
                <div className="w-full flex justify-between items-end pb-2 px-6">
                    
                    {/* SIGNATURE 1 (Left - Deputy/Guest) */}
                    <div className="flex flex-col items-center w-48">
                        <div className="h-20 w-full flex items-end justify-center mb-1 relative">
                            {sig2Url ? (
                                <img src={sig2Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply opacity-90" />
                            ) : (
                                <span className="font-cursive text-3xl opacity-20 text-[#2c1a1a] rotate-[-3deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
                            )}
                        </div>
                        <div className="h-[2px] w-32 bg-[#2c1a1a]/80 mb-1" />
                        <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{name2}</p>
                        <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{title2}</p>
                    </div>

                    {/* CENTER SEAL (Verified Badge) */}
                    <div className="flex flex-col items-center justify-end mb-1 opacity-90">
                        <div className="relative">
                            <ShieldCheck className="w-10 h-10 text-[#8B2500]" />
                        </div>
                        <p className="font-mono text-[7px] uppercase tracking-widest text-[#5a4a42] mt-2 border border-[#5a4a42]/30 px-2 py-0.5 rounded">
                            {data.id}
                        </p>
                    </div>

                    {/* SIGNATURE 2 (Right - Secretary) */}
                    <div className="flex flex-col items-center w-48">
                        <div className="h-20 w-full flex items-end justify-center mb-1 relative">
                            {sig1Url ? (
                                <img src={sig1Url} alt="Sign" className="h-full object-contain filter sepia contrast-125 mix-blend-multiply opacity-90" />
                            ) : (
                                <span className="font-cursive text-3xl opacity-20 text-[#2c1a1a] rotate-[2deg]" style={{ fontFamily: 'Pinyon Script' }}>Signature</span>
                            )}
                        </div>
                        <div className="h-[2px] w-32 bg-[#2c1a1a]/80 mb-1" />
                        <p className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider">{name1}</p>
                        <p className="text-[9px] text-[#8B2500] uppercase tracking-widest font-serif">{title1}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- PUBLIC VAULT (Database Connected) ---
export default function CertificateVault() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");
  const [data, setData] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setStatus("searching");
    
    // REAL DB CALL
    const result = await verifyCertificate(query);
    
    if (result.success) {
        setData(result.data);
        setStatus("found");
    } else {
        setStatus("error");
    }
  };

  const handleDownload = async () => {
      const element = document.getElementById("cert-node");
      if(element) {
          const canvas = await html2canvas(element, { scale: 3, useCORS: true });
          const link = document.createElement("a");
          link.download = `Aayam_Art_${data.id}.png`;
          link.href = canvas.toDataURL("image/png");
          link.click();
      }
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col items-center justify-center px-4 font-serif">
      <div className="text-center mb-10 relative z-10">
          <h1 className="text-4xl text-[#b4833e] font-serif mb-2" style={{ fontFamily: 'Cinzel Decorative' }}>THE ARCHIVES</h1>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Official Verification</p>
      </div>
      
      <div className="w-full max-w-md relative z-20 mb-8">
          <form onSubmit={handleSearch} className="relative">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ENTER ID" className="w-full bg-[#111] border border-[#b4833e]/30 text-[#b4833e] p-3 text-center uppercase tracking-widest focus:outline-none focus:border-[#b4833e] text-sm" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b4833e]/50" />
          </form>
          {status === 'error' && <p className="text-center text-red-400 text-xs mt-2">RECORD NOT FOUND</p>}
      </div>

      <AnimatePresence>
          {status === 'found' && data && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl relative z-10">
                  <div className="p-1 bg-[#b4833e] rounded shadow-2xl">
                      <CertificateCard data={data} />
                  </div>
                  <button onClick={handleDownload} className="mt-6 mx-auto flex items-center gap-2 px-6 py-2 bg-[#b4833e] text-black font-bold uppercase text-[10px] hover:bg-white transition-colors tracking-widest">
                      <Download className="w-4 h-4" /> DOWNLOAD
                  </button>
              </motion.div>
          )}
      </AnimatePresence>
    </section>
  );
}