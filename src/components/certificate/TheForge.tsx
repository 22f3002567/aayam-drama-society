// // // // // "use client";

// // // // // import { useState, useEffect, useRef } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { Search, ShieldCheck, Download, Copy, RefreshCw, Cpu, Fingerprint } from "lucide-react";
// // // // // import html2canvas from "html2canvas"; // * Requires: npm install html2canvas

// // // // // // --- 1. THE UTILS (The Logic) ---

// // // // // // Generates a "Cryptographic" ID based on name and event
// // // // // const generateHashID = (name: string, event: string) => {
// // // // //   const seed = name + event + new Date().getFullYear();
// // // // //   let hash = 0;
// // // // //   for (let i = 0; i < seed.length; i++) {
// // // // //     hash = Math.imul(31, hash) + seed.charCodeAt(i) | 0;
// // // // //   }
// // // // //   const suffix = Math.abs(hash).toString(16).substring(0, 4).toUpperCase();
// // // // //   const prefix = name.substring(0, 2).toUpperCase();
// // // // //   return `AYM:${prefix}-${suffix}`;
// // // // // };

// // // // // // --- 2. THE ARTIFACT (The Certificate Component) ---
// // // // // const CertificateCard = ({ data, verified = false }: { data: any, verified?: boolean }) => {
// // // // //     return (
// // // // //         <div id="certificate-node" className="relative w-full aspect-[1.414/1] bg-[#050505] text-white overflow-hidden rounded-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 md:p-12">
            
// // // // //             {/* A. THE HOLOGRAPHIC FOIL (Animated Background) */}
// // // // //             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine pointer-events-none" />
            
// // // // //             {/* B. THE GUILLOCHE PATTERN (CSS Grid Noise) */}
// // // // //             <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:4px_4px]" />
// // // // //             <div className="absolute inset-4 border border-white/20 rounded-lg" />
// // // // //             <div className="absolute inset-6 border border-gold-500/20 rounded-lg" />

// // // // //             {/* C. THE HEADER */}
// // // // //             <div className="relative z-10 text-center space-y-2">
// // // // //                 <div className="flex justify-center mb-4">
// // // // //                      {/* The Logo Mark */}
// // // // //                     <div className="w-12 h-12 border border-gold-500/50 rotate-45 flex items-center justify-center">
// // // // //                         <div className="w-8 h-8 bg-gold-500/10 -rotate-45 flex items-center justify-center">
// // // // //                             <span className="font-serif font-bold text-gold-500">A</span>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //                 <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-white uppercase">
// // // // //                     Certificate of <span className="text-gold-500">Excellence</span>
// // // // //                 </h1>
// // // // //                 <p className="font-mono text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.4em]">
// // // // //                     Aayam Drama Society • IIT Madras
// // // // //                 </p>
// // // // //             </div>

// // // // //             {/* D. THE RECIPIENT */}
// // // // //             <div className="relative z-10 text-center my-8 md:my-12">
// // // // //                 <p className="font-serif italic text-white/50 text-sm mb-4">Presented to</p>
// // // // //                 <h2 className="font-serif text-4xl md:text-6xl text-white mb-4 border-b border-white/10 pb-4 px-8 inline-block min-w-[300px]">
// // // // //                     {data.name}
// // // // //                 </h2>
// // // // //                 <p className="font-serif text-white/70 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
// // // // //                     For outstanding contribution as <strong className="text-white">{data.role}</strong> during <br/>
// // // // //                     <strong className="text-gold-200 uppercase tracking-widest text-xs md:text-sm">{data.event}</strong>
// // // // //                 </p>
// // // // //             </div>

// // // // //             {/* E. THE FOOTER (Signatures & ID) */}
// // // // //             <div className="relative z-10 w-full flex justify-between items-end px-4 md:px-12">
// // // // //                 <div className="text-left">
// // // // //                     <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">Authenticated By</p>
// // // // //                     <div className="h-10 flex items-end">
// // // // //                          <span className="font-serif italic text-xl text-white/60 signature-font">Siddharth</span>
// // // // //                     </div>
// // // // //                     <div className="h-px w-32 bg-white/20 mt-1" />
// // // // //                     <p className="font-mono text-[8px] text-white/30 mt-1 uppercase">Secretary, Aayam</p>
// // // // //                 </div>

// // // // //                 <div className="text-right">
// // // // //                      <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">Certificate ID</p>
// // // // //                      <p className="font-mono text-xs md:text-sm text-gold-500">{data.id}</p>
// // // // //                      <div className="flex items-center justify-end gap-1 mt-1 text-green-500/50">
// // // // //                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
// // // // //                         <span className="font-mono text-[8px] uppercase">Secure Hash</span>
// // // // //                      </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             {/* F. THE SEAL (Only appears if verified) */}
// // // // //             {verified && (
// // // // //                 <motion.div 
// // // // //                     initial={{ scale: 2, opacity: 0, rotate: -20 }}
// // // // //                     animate={{ scale: 1, opacity: 1, rotate: 0 }}
// // // // //                     transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
// // // // //                     className="absolute right-8 md:right-20 bottom-20 md:bottom-32 w-24 h-24 md:w-32 md:h-32 border-4 border-gold-500 rounded-full flex items-center justify-center opacity-80 mix-blend-screen pointer-events-none"
// // // // //                 >
// // // // //                     <div className="absolute inset-1 border border-gold-500 rounded-full" />
// // // // //                     <div className="text-center rotate-[-15deg]">
// // // // //                         <span className="block font-mono text-[10px] text-gold-500 uppercase tracking-widest">Verified</span>
// // // // //                         <span className="block font-serif text-xs text-gold-500 font-bold">AAYAM ARCHIVES</span>
// // // // //                     </div>
// // // // //                 </motion.div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };


// // // // // // --- 3. THE MAIN SYSTEM (Forge & Vault) ---
// // // // // export default function TheForge() {
// // // // //     const [mode, setMode] = useState<"verify" | "generate">("verify"); // Toggle for Admin/Student
// // // // //     const [input, setInput] = useState("");
// // // // //     const [loading, setLoading] = useState(false);
// // // // //     const [result, setResult] = useState<any>(null);

// // // // //     // --- GENERATOR LOGIC (Admin Side) ---
// // // // //     const [genName, setGenName] = useState("");
// // // // //     const [genRole, setGenRole] = useState("");
// // // // //     const [genEvent, setGenEvent] = useState("");

// // // // //     const handleGenerate = () => {
// // // // //         setLoading(true);
// // // // //         setTimeout(() => {
// // // // //             const newID = generateHashID(genName, genEvent);
// // // // //             setResult({
// // // // //                 id: newID,
// // // // //                 name: genName,
// // // // //                 role: genRole,
// // // // //                 event: genEvent,
// // // // //                 date: new Date().toLocaleDateString()
// // // // //             });
// // // // //             setLoading(false);
// // // // //         }, 1500);
// // // // //     };

// // // // //     const handleDownload = async () => {
// // // // //         const element = document.getElementById("certificate-node");
// // // // //         if(element) {
// // // // //             const canvas = await html2canvas(element);
// // // // //             const data = canvas.toDataURL("image/png");
// // // // //             const link = document.createElement("a");
// // // // //             link.href = data;
// // // // //             link.download = `Aayam_Cert_${result.id}.png`;
// // // // //             link.click();
// // // // //         }
// // // // //     };

// // // // //     // --- VERIFICATION LOGIC (Student Side) ---
// // // // //     // In a real app, this fetches from Supabase/Firebase
// // // // //     const handleVerify = () => {
// // // // //         if(!input) return;
// // // // //         setLoading(true);
// // // // //         // MOCK DATABASE CHECK
// // // // //         setTimeout(() => {
// // // // //             // Simulator: Only works if input looks like an ID
// // // // //             if(input.includes("AYM")) {
// // // // //                 setResult({
// // // // //                     id: input,
// // // // //                     name: "Aditya Verma", // Mock Data
// // // // //                     role: "Best Actor",
// // // // //                     event: "NodaRang 2026"
// // // // //                 });
// // // // //             } else {
// // // // //                 alert("ACCESS DENIED: Invalid Hash Identifier.");
// // // // //             }
// // // // //             setLoading(false);
// // // // //         }, 2000);
// // // // //     };

// // // // //     return (
// // // // //         <section className="min-h-screen bg-[#020202] text-[#e0e0e0] font-sans selection:bg-gold-500/30 flex flex-col items-center py-24 px-4 relative">
            
// // // // //             {/* Grid Background */}
// // // // //             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

// // // // //             {/* HEADER */}
// // // // //             <div className="relative z-10 text-center mb-12">
// // // // //                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setMode(mode === 'verify' ? 'generate' : 'verify')}>
// // // // //                     <div className={`w-2 h-2 rounded-full ${mode === 'verify' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
// // // // //                     <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
// // // // //                         System: {mode === 'verify' ? 'The Vault (Public)' : 'The Forge (Admin)'}
// // // // //                     </span>
// // // // //                 </div>
                
// // // // //                 <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 tracking-tight">
// // // // //                     {mode === 'verify' ? 'Authenticate Asset' : 'Mint Credentials'}
// // // // //                 </h1>
// // // // //                 <p className="font-mono text-xs text-white/40 uppercase tracking-[0.3em]">
// // // // //                     Aayam Secure Archives
// // // // //                 </p>
// // // // //             </div>

// // // // //             {/* INPUT TERMINAL */}
// // // // //             {!result && (
// // // // //                 <div className="w-full max-w-lg relative z-10">
// // // // //                     <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden group">
                        
// // // // //                         {/* Scanning Bar Animation */}
// // // // //                         {loading && <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 animate-scan-fast shadow-[0_0_20px_#ffd700]" />}

// // // // //                         {mode === 'verify' ? (
// // // // //                             <div className="flex flex-col gap-4">
// // // // //                                 <div className="flex items-center gap-3 text-white/50 mb-2">
// // // // //                                     <Fingerprint className="w-5 h-5" />
// // // // //                                     <span className="font-mono text-xs uppercase tracking-widest">Enter Secure Hash</span>
// // // // //                                 </div>
// // // // //                                 <input 
// // // // //                                     type="text" 
// // // // //                                     value={input}
// // // // //                                     onChange={(e) => setInput(e.target.value)}
// // // // //                                     placeholder="AYM:XX-XXXX"
// // // // //                                     className="w-full bg-black/50 border-b border-white/20 text-2xl font-mono text-gold-500 placeholder:text-white/10 focus:outline-none focus:border-gold-500 py-2 transition-all"
// // // // //                                 />
// // // // //                                 <button 
// // // // //                                     onClick={handleVerify}
// // // // //                                     disabled={loading}
// // // // //                                     className="mt-6 w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-500 hover:text-black transition-all disabled:opacity-50"
// // // // //                                 >
// // // // //                                     {loading ? 'Decrypting...' : 'Verify Authenticity'}
// // // // //                                 </button>
// // // // //                             </div>
// // // // //                         ) : (
// // // // //                             <div className="flex flex-col gap-4">
// // // // //                                 <div className="flex items-center gap-3 text-white/50 mb-4">
// // // // //                                     <Cpu className="w-5 h-5" />
// // // // //                                     <span className="font-mono text-xs uppercase tracking-widest">Recipient Data</span>
// // // // //                                 </div>
// // // // //                                 <input 
// // // // //                                     type="text" placeholder="Full Name" value={genName} onChange={(e) => setGenName(e.target.value)}
// // // // //                                     className="bg-black/50 border border-white/10 rounded p-3 text-white focus:border-red-500 focus:outline-none transition-colors"
// // // // //                                 />
// // // // //                                 <input 
// // // // //                                     type="text" placeholder="Role / Position" value={genRole} onChange={(e) => setGenRole(e.target.value)}
// // // // //                                     className="bg-black/50 border border-white/10 rounded p-3 text-white focus:border-red-500 focus:outline-none transition-colors"
// // // // //                                 />
// // // // //                                 <input 
// // // // //                                     type="text" placeholder="Event Name" value={genEvent} onChange={(e) => setGenEvent(e.target.value)}
// // // // //                                     className="bg-black/50 border border-white/10 rounded p-3 text-white focus:border-red-500 focus:outline-none transition-colors"
// // // // //                                 />
// // // // //                                 <button 
// // // // //                                     onClick={handleGenerate}
// // // // //                                     disabled={loading}
// // // // //                                     className="mt-4 w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-500 transition-all disabled:opacity-50"
// // // // //                                 >
// // // // //                                     {loading ? 'Minting...' : 'Generate Asset'}
// // // // //                                 </button>
// // // // //                             </div>
// // // // //                         )}
// // // // //                     </div>
// // // // //                 </div>
// // // // //             )}

// // // // //             {/* THE REVEAL */}
// // // // //             <AnimatePresence>
// // // // //                 {result && (
// // // // //                     <motion.div 
// // // // //                         initial={{ opacity: 0, y: 50 }}
// // // // //                         animate={{ opacity: 1, y: 0 }}
// // // // //                         transition={{ type: "spring", damping: 20 }}
// // // // //                         className="w-full max-w-4xl relative z-20"
// // // // //                     >
// // // // //                          {/* Control Bar */}
// // // // //                          <div className="flex justify-between items-center mb-6">
// // // // //                              <button onClick={() => setResult(null)} className="flex items-center gap-2 text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest">
// // // // //                                  <RefreshCw className="w-4 h-4" /> Reset System
// // // // //                              </button>
// // // // //                              <div className="flex gap-4">
// // // // //                                  <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-2 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-sm">
// // // // //                                      <Download className="w-4 h-4" /> Download Asset
// // // // //                                  </button>
// // // // //                              </div>
// // // // //                          </div>

// // // // //                          {/* The Rendered Certificate */}
// // // // //                          <div className="p-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl">
// // // // //                             <CertificateCard data={result} verified={mode === 'verify'} />
// // // // //                          </div>
// // // // //                     </motion.div>
// // // // //                 )}
// // // // //             </AnimatePresence>

// // // // //         </section>
// // // // //     );
// // // // // }


// // // // "use client";

// // // // import { useState } from "react";
// // // // import { Download, RefreshCw, Cpu, Check, AlertCircle } from "lucide-react";
// // // // import { mintCertificate } from "@/app/certificate/actions";
// // // // import { CertificateCard } from "./CertificateVault"; // Resuse visual component
// // // // import html2canvas from "html2canvas";
// // // // import { toast } from "sonner";

// // // // export default function TheForge() {
// // // //     const [recipientName, setRecipientName] = useState("");
// // // //     const [awardTitle, setAwardTitle] = useState("");
// // // //     const [eventName, setEventName] = useState("");
    
// // // //     const [isMinting, setIsMinting] = useState(false);
// // // //     const [mintedData, setMintedData] = useState<any>(null);

// // // //     // 1. MINT PROCESS
// // // //     const handleMint = async () => {
// // // //         if(!recipientName || !awardTitle || !eventName) {
// // // //             toast.error("MISSING DATA: All fields required.");
// // // //             return;
// // // //         }

// // // //         setIsMinting(true);
        
// // // //         // Call Server Action
// // // //         const result = await mintCertificate({ 
// // // //             recipient_name: recipientName, 
// // // //             award_title: awardTitle, 
// // // //             event_name: eventName 
// // // //         });
        
// // // //         if (result.success) {
// // // //             setMintedData({
// // // //                 id: result.id,
// // // //                 recipient_name: recipientName,
// // // //                 award_title: awardTitle,
// // // //                 event_name: eventName
// // // //             });
// // // //             toast.success(`LEGACY MINTED: ${result.id}`);
// // // //         } else {
// // // //             toast.error(result.error);
// // // //         }
        
// // // //         setIsMinting(false);
// // // //     };

// // // //     // 2. EXPORT PROCESS
// // // //     const handleDownload = async () => {
// // // //         const element = document.getElementById("forge-preview");
// // // //         const target = element?.querySelector('#cert-node') as HTMLElement;
        
// // // //         if(target) {
// // // //             const canvas = await html2canvas(target, { backgroundColor: null, scale: 3 });
// // // //             const link = document.createElement("a");
// // // //             link.download = `AYM-MINT-${mintedData.id}.png`;
// // // //             link.href = canvas.toDataURL();
// // // //             link.click();
// // // //             toast.success("Artifact Exported");
// // // //         }
// // // //     };

// // // //     const reset = () => {
// // // //         setMintedData(null);
// // // //         setRecipientName("");
// // // //         setAwardTitle("");
// // // //         setEventName("");
// // // //     };

// // // //     return (
// // // //         <section className="min-h-screen bg-[#020202] text-[#e0e0e0] flex flex-col md:flex-row gap-8 p-8 relative">
            
// // // //             {/* LEFT: CONTROL PANEL */}
// // // //             <div className="w-full md:w-1/3 bg-[#0a0a0a] border border-white/10 rounded-xl p-8 flex flex-col h-fit sticky top-8">
// // // //                 <div className="mb-8">
// // // //                     <h1 className="text-3xl font-serif text-white mb-2 flex items-center gap-3">
// // // //                         The Forge <Cpu className="w-6 h-6 text-red-500 animate-pulse" />
// // // //                     </h1>
// // // //                     <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
// // // //                         Admin Minting Terminal
// // // //                     </p>
// // // //                 </div>

// // // //                 {!mintedData ? (
// // // //                     <div className="space-y-6">
// // // //                         <div className="space-y-2">
// // // //                             <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Recipient</label>
// // // //                             <input value={recipientName} onChange={e => setRecipientName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-red-500 transition-colors" placeholder="Full Name" />
// // // //                         </div>
// // // //                         <div className="space-y-2">
// // // //                             <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Award Title</label>
// // // //                             <input value={awardTitle} onChange={e => setAwardTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-red-500 transition-colors" placeholder="e.g. Best Actor, Secretary" />
// // // //                         </div>
// // // //                         <div className="space-y-2">
// // // //                             <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Context / Event</label>
// // // //                             <input value={eventName} onChange={e => setEventName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-red-500 transition-colors" placeholder="e.g. NodaRang 2026" />
// // // //                         </div>

// // // //                         <button 
// // // //                             onClick={handleMint} 
// // // //                             disabled={isMinting}
// // // //                             className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-red-500 hover:text-white transition-all rounded-lg disabled:opacity-50 mt-4"
// // // //                         >
// // // //                             {isMinting ? "Writing to Ledger..." : "Mint Legacy Asset"}
// // // //                         </button>
// // // //                     </div>
// // // //                 ) : (
// // // //                     <div className="space-y-6">
// // // //                         <div className="p-4 bg-green-900/10 border border-green-500/20 rounded-lg flex items-start gap-3">
// // // //                             <Check className="w-5 h-5 text-green-500 mt-0.5" />
// // // //                             <div>
// // // //                                 <h3 className="text-sm font-bold text-green-500 uppercase tracking-wide">Mint Successful</h3>
// // // //                                 <p className="text-xs text-white/60 mt-1 font-mono">ID: {mintedData.id}</p>
// // // //                             </div>
// // // //                         </div>

// // // //                         <button onClick={handleDownload} className="w-full py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all rounded-lg flex items-center justify-center gap-2">
// // // //                             <Download className="w-4 h-4" /> Download PNG
// // // //                         </button>

// // // //                         <button onClick={reset} className="w-full py-3 border border-white/10 text-white/50 font-mono uppercase tracking-widest text-[10px] hover:text-white hover:bg-white/5 transition-all rounded-lg flex items-center justify-center gap-2">
// // // //                             <RefreshCw className="w-3 h-3" /> Mint Another
// // // //                         </button>
// // // //                     </div>
// // // //                 )}
// // // //             </div>

// // // //             {/* RIGHT: PREVIEW DECK */}
// // // //             <div className="flex-1 flex items-center justify-center bg-white/5 rounded-xl border border-white/5 relative overflow-hidden min-h-[600px]">
// // // //                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
                
// // // //                 {/* THE LIVE PREVIEW */}
// // // //                 <div className="w-full max-w-3xl p-8" id="forge-preview">
// // // //                     <CertificateCard 
// // // //                         data={mintedData || { 
// // // //                             recipient_name: recipientName || "RECIPIENT", 
// // // //                             award_title: awardTitle || "AWARD TITLE", 
// // // //                             event_name: eventName || "EVENT CONTEXT", 
// // // //                             id: "AYM-PREVIEW-MODE" 
// // // //                         }} 
// // // //                     />
// // // //                 </div>
// // // //             </div>

// // // //         </section>
// // // //     );
// // // // }

// // // "use client";

// // // import { useState, useRef } from "react";
// // // import { Download, RefreshCw, Cpu, Check, Upload, Palette, Layout, Type } from "lucide-react";
// // // import { mintCertificate } from "@/app/certificate/actions";
// // // import { CertificateCard } from "./CertificateVault";
// // // import html2canvas from "html2canvas";
// // // import { toast } from "sonner";

// // // export default function TheForge() {
// // //     // --- CONTENT STATE ---
// // //     const [recipientName, setRecipientName] = useState("");
// // //     const [awardTitle, setAwardTitle] = useState("");
// // //     const [eventName, setEventName] = useState("");
    
// // //     // --- DESIGN STATE (The Canva Part) ---
// // //     const [logoPreview, setLogoPreview] = useState<string | null>(null);
// // //     const [signPreview, setSignPreview] = useState<string | null>(null);
// // //     const [accentColor, setAccentColor] = useState("#D4AF37"); // Gold Default
// // //     const [borderStyle, setBorderStyle] = useState<'ornate' | 'minimal' | 'classic'>('ornate');
// // //     const [texture, setTexture] = useState('paper');
    
// // //     // --- PROCESS STATE ---
// // //     const [isMinting, setIsMinting] = useState(false);
// // //     const [mintedData, setMintedData] = useState<any>(null);
// // //     const [activeTab, setActiveTab] = useState<'content' | 'design'>('content');

// // //     // FILE HANDLERS
// // //     const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'sign') => {
// // //         const file = e.target.files?.[0];
// // //         if (file) {
// // //             const url = URL.createObjectURL(file);
// // //             if(type === 'logo') setLogoPreview(url);
// // //             if(type === 'sign') setSignPreview(url);
// // //         }
// // //     };

// // //     // MINT
// // //     const handleMint = async () => {
// // //         if(!recipientName || !awardTitle || !eventName) {
// // //             toast.error("Fill in the content details first.");
// // //             return;
// // //         }
// // //         setIsMinting(true);
// // //         const result = await mintCertificate({ recipient_name: recipientName, award_title: awardTitle, event_name: eventName });
        
// // //         if (result.success) {
// // //             setMintedData({ id: result.id, recipient_name: recipientName, award_title: awardTitle, event_name: eventName });
// // //             toast.success(`Minted: ${result.id}`);
// // //         } else {
// // //             toast.error(result.error);
// // //         }
// // //         setIsMinting(false);
// // //     };

// // //     // DOWNLOAD
// // //     const handleDownload = async () => {
// // //         const element = document.getElementById("cert-node");
// // //         if(element) {
// // //             const canvas = await html2canvas(element, { backgroundColor: null, scale: 3, useCORS: true });
// // //             const link = document.createElement("a");
// // //             link.download = `Aayam_${mintedData ? mintedData.id : 'Preview'}.png`;
// // //             link.href = canvas.toDataURL("image/png");
// // //             link.click();
// // //         }
// // //     };

// // //     return (
// // //         <section className="min-h-screen bg-[#09090b] text-gray-200 flex flex-col xl:flex-row">
            
// // //             {/* --- LEFT: THE CONTROL STUDIO --- */}
// // //             <div className="w-full xl:w-[400px] bg-[#121214] border-r border-white/5 p-6 flex flex-col h-screen overflow-y-auto z-20 shadow-2xl">
                
// // //                 <div className="mb-8 flex items-center gap-3">
// // //                     <div className="p-2 bg-red-900/20 rounded-lg text-red-500"><Cpu className="w-6 h-6" /></div>
// // //                     <div>
// // //                         <h1 className="font-serif text-2xl text-white">The Studio</h1>
// // //                         <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Certificate Architect</p>
// // //                     </div>
// // //                 </div>

// // //                 {/* TABS */}
// // //                 <div className="flex bg-white/5 p-1 rounded-lg mb-6">
// // //                     <button onClick={() => setActiveTab('content')} className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab === 'content' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}>
// // //                         Content
// // //                     </button>
// // //                     <button onClick={() => setActiveTab('design')} className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab === 'design' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}>
// // //                         Design
// // //                     </button>
// // //                 </div>

// // //                 {/* --- TAB: CONTENT --- */}
// // //                 {activeTab === 'content' && (
// // //                     <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
// // //                         <div className="space-y-2">
// // //                             <label className="text-[10px] font-mono uppercase text-white/40">Recipient Name</label>
// // //                             <input value={recipientName} onChange={e => setRecipientName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-red-500 outline-none" placeholder="e.g. Siddharth" />
// // //                         </div>
// // //                         <div className="space-y-2">
// // //                             <label className="text-[10px] font-mono uppercase text-white/40">Award Title</label>
// // //                             <input value={awardTitle} onChange={e => setAwardTitle(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-red-500 outline-none" placeholder="e.g. Best Director" />
// // //                         </div>
// // //                         <div className="space-y-2">
// // //                             <label className="text-[10px] font-mono uppercase text-white/40">Event Context</label>
// // //                             <input value={eventName} onChange={e => setEventName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-red-500 outline-none" placeholder="e.g. NodaRang 2026" />
// // //                         </div>
                        
// // //                         <div className="pt-4 border-t border-white/5">
// // //                             {!mintedData ? (
// // //                                 <button onClick={handleMint} disabled={isMinting} className="w-full py-4 bg-white text-black font-bold uppercase text-xs hover:bg-red-500 hover:text-white transition-all rounded-lg">
// // //                                     {isMinting ? "Minting..." : "Mint Certificate"}
// // //                                 </button>
// // //                             ) : (
// // //                                 <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-center">
// // //                                     <Check className="w-6 h-6 text-green-500 mx-auto mb-2" />
// // //                                     <p className="text-sm font-bold text-green-500">MINTED SUCCESSFULLY</p>
// // //                                     <p className="text-xs text-white/40 font-mono mt-1">{mintedData.id}</p>
// // //                                     <button onClick={() => { setMintedData(null); setRecipientName(""); }} className="mt-3 text-[10px] underline text-white/50 hover:text-white">Create New</button>
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     </div>
// // //                 )}

// // //                 {/* --- TAB: DESIGN (THE CANVA PART) --- */}
// // //                 {activeTab === 'design' && (
// // //                     <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        
// // //                         {/* 1. ASSETS */}
// // //                         <div className="space-y-3">
// // //                             <p className="text-[10px] font-mono uppercase text-white/40 flex items-center gap-2"><Upload className="w-3 h-3" /> Custom Assets</p>
                            
// // //                             <div className="grid grid-cols-2 gap-3">
// // //                                 <label className="cursor-pointer group relative h-24 bg-black/40 border border-white/10 border-dashed rounded-lg flex flex-col items-center justify-center hover:border-white/40 transition-all">
// // //                                     <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileUpload(e, 'logo')} />
// // //                                     {logoPreview ? <img src={logoPreview} className="h-16 w-16 object-contain" /> : <span className="text-[9px] uppercase text-white/30">Upload Logo</span>}
// // //                                 </label>
// // //                                 <label className="cursor-pointer group relative h-24 bg-black/40 border border-white/10 border-dashed rounded-lg flex flex-col items-center justify-center hover:border-white/40 transition-all">
// // //                                     <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileUpload(e, 'sign')} />
// // //                                     {signPreview ? <img src={signPreview} className="h-12 w-full object-contain px-2" /> : <span className="text-[9px] uppercase text-white/30">Upload Sign</span>}
// // //                                 </label>
// // //                             </div>
// // //                         </div>

// // //                         {/* 2. STYLE */}
// // //                         <div className="space-y-3">
// // //                             <p className="text-[10px] font-mono uppercase text-white/40 flex items-center gap-2"><Layout className="w-3 h-3" /> Layout Style</p>
// // //                             <div className="flex gap-2">
// // //                                 {['ornate', 'classic', 'minimal'].map((s) => (
// // //                                     <button 
// // //                                         key={s} 
// // //                                         onClick={() => setBorderStyle(s as any)}
// // //                                         className={`flex-1 py-2 text-[10px] uppercase border rounded hover:bg-white/5 transition-all ${borderStyle === s ? 'border-red-500 text-red-500' : 'border-white/10 text-white/40'}`}
// // //                                     >
// // //                                         {s}
// // //                                     </button>
// // //                                 ))}
// // //                             </div>
// // //                         </div>

// // //                         {/* 3. COLORS & TEXTURE */}
// // //                         <div className="space-y-3">
// // //                             <p className="text-[10px] font-mono uppercase text-white/40 flex items-center gap-2"><Palette className="w-3 h-3" /> Aesthetics</p>
                            
// // //                             <div className="flex items-center gap-3">
// // //                                 <input 
// // //                                     type="color" 
// // //                                     value={accentColor} 
// // //                                     onChange={(e) => setAccentColor(e.target.value)}
// // //                                     className="w-8 h-8 rounded cursor-pointer bg-transparent border-none"
// // //                                 />
// // //                                 <span className="text-xs font-mono text-white/60">{accentColor}</span>
// // //                             </div>

// // //                             <div className="flex gap-2 mt-2">
// // //                                 {['paper', 'canvas', 'none'].map((t) => (
// // //                                     <button 
// // //                                         key={t}
// // //                                         onClick={() => setTexture(t)}
// // //                                         className={`px-3 py-1 text-[10px] uppercase rounded border ${texture === t ? 'bg-white text-black border-white' : 'border-white/10 text-white/40'}`}
// // //                                     >
// // //                                         {t}
// // //                                     </button>
// // //                                 ))}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}
// // //             </div>

// // //             {/* --- RIGHT: THE LIVE PREVIEW --- */}
// // //             <div className="flex-1 bg-[#050505] flex flex-col items-center justify-center p-8 relative overflow-hidden">
// // //                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
                
// // //                 {/* TOOLBAR */}
// // //                 <div className="absolute top-8 right-8 flex gap-3">
// // //                     <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform shadow-lg">
// // //                         <Download className="w-4 h-4" /> Download
// // //                     </button>
// // //                 </div>

// // //                 <div className="w-full max-w-5xl transform scale-90 xl:scale-100 transition-transform">
// // //                     <CertificateCard 
// // //                         data={mintedData || { 
// // //                             recipient_name: recipientName || "YOUR NAME HERE", 
// // //                             award_title: awardTitle || "AWARD TITLE", 
// // //                             event_name: eventName || "EVENT NAME",
// // //                             id: mintedData?.id || "PREVIEW-ID"
// // //                         }} 
// // //                         designConfig={{
// // //                             logo: logoPreview,
// // //                             signature: signPreview,
// // //                             accentColor: accentColor,
// // //                             borderStyle: borderStyle,
// // //                             texture: texture
// // //                         }}
// // //                     />
// // //                 </div>
// // //             </div>

// // //         </section>
// // //     );
// // // }

// // "use client";

// // import { useState } from "react";
// // import { Download, Cpu, Check, Users, Upload, Type } from "lucide-react";
// // import { mintCertificate } from "@/app/certificate/actions";
// // import { CertificateCard } from "./CertificateVault";
// // import html2canvas from "html2canvas";
// // import { toast } from "sonner";

// // export default function TheForge() {
// //     // CONTENT
// //     const [recipientName, setRecipientName] = useState("");
// //     const [awardTitle, setAwardTitle] = useState("");
// //     const [eventName, setEventName] = useState("");
    
// //     // AUTHORITIES (Text)
// //     const [auth1Name, setAuth1Name] = useState("Siddharth");
// //     const [auth1Title, setAuth1Title] = useState("Secretary");
// //     const [auth2Name, setAuth2Name] = useState("Aditya");
// //     const [auth2Title, setAuth2Title] = useState("Dy. Secretary");

// //     // ASSETS (Images)
// //     const [logoPreview, setLogoPreview] = useState<string | null>(null);
// //     const [sign1Preview, setSign1Preview] = useState<string | null>(null);
// //     const [sign2Preview, setSign2Preview] = useState<string | null>(null);

// //     const [isMinting, setIsMinting] = useState(false);
// //     const [mintedData, setMintedData] = useState<any>(null);

// //     // File Handler
// //     const handleFile = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'sign1' | 'sign2') => {
// //         const file = e.target.files?.[0];
// //         if(file) {
// //             const url = URL.createObjectURL(file);
// //             if(type === 'logo') setLogoPreview(url);
// //             if(type === 'sign1') setSign1Preview(url);
// //             if(type === 'sign2') setSign2Preview(url);
// //         }
// //     };

// //     const handleMint = async () => {
// //         if(!recipientName || !awardTitle) { toast.error("Details required."); return; }
// //         setIsMinting(true);
// //         // Note: We currently don't save the images to DB in this demo, just text data.
// //         // In a real app, you'd upload these images to Supabase Storage first.
// //         // For the certificate generation (PNG), the client-side previews work perfectly.
// //         const payload = {
// //             recipient_name: recipientName,
// //             award_title: awardTitle,
// //             event_name: eventName,
// //         };
// //         const result = await mintCertificate(payload);
// //         if (result.success) {
// //             setMintedData({ id: result.id, ...payload, auth_1_name: auth1Name, auth_1_title: auth1Title, auth_2_name: auth2Name, auth_2_title: auth2Title });
// //             toast.success(`Minted: ${result.id}`);
// //         } else {
// //             toast.error(result.error);
// //         }
// //         setIsMinting(false);
// //     };

// //     const handleDownload = async () => {
// //         const element = document.getElementById("cert-node");
// //         if(element) {
// //             const canvas = await html2canvas(element, { scale: 3, useCORS: true });
// //             const link = document.createElement("a");
// //             link.download = `Aayam_Cert_${mintedData?.id || 'Preview'}.png`;
// //             link.href = canvas.toDataURL("image/png");
// //             link.click();
// //         }
// //     };

// //     return (
// //         <section className="min-h-screen bg-[#09090b] text-gray-200 flex flex-col xl:flex-row font-sans">
            
// //             {/* CONTROLS */}
// //             <div className="w-full xl:w-[450px] bg-[#121214] border-r border-white/5 p-6 flex flex-col h-screen overflow-y-auto z-20 shadow-2xl">
// //                 <div className="mb-6 border-b border-white/5 pb-4">
// //                     <h1 className="font-serif text-2xl text-white flex items-center gap-2">The Forge <Cpu className="w-5 h-5 text-maroon-500" /></h1>
// //                     <p className="text-[10px] text-white/40 uppercase tracking-widest">Certificate Studio</p>
// //                 </div>

// //                 <div className="space-y-8">
// //                     {/* 1. UPLOADS */}
// //                     <div className="space-y-3">
// //                         <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Upload className="w-3 h-3"/> Identity Assets</p>
// //                         <div className="grid grid-cols-3 gap-2">
// //                             <label className="h-20 bg-black/30 border border-dashed border-white/10 rounded hover:border-white/40 flex flex-col items-center justify-center cursor-pointer">
// //                                 <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'logo')} />
// //                                 {logoPreview ? <img src={logoPreview} className="h-12 w-12 object-contain"/> : <span className="text-[8px] uppercase text-white/40">Logo</span>}
// //                             </label>
// //                             <label className="h-20 bg-black/30 border border-dashed border-white/10 rounded hover:border-white/40 flex flex-col items-center justify-center cursor-pointer">
// //                                 <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'sign1')} />
// //                                 {sign1Preview ? <img src={sign1Preview} className="h-12 w-full object-contain"/> : <span className="text-[8px] uppercase text-white/40">Sign 1</span>}
// //                             </label>
// //                             <label className="h-20 bg-black/30 border border-dashed border-white/10 rounded hover:border-white/40 flex flex-col items-center justify-center cursor-pointer">
// //                                 <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'sign2')} />
// //                                 {sign2Preview ? <img src={sign2Preview} className="h-12 w-full object-contain"/> : <span className="text-[8px] uppercase text-white/40">Sign 2</span>}
// //                             </label>
// //                         </div>
// //                     </div>

// //                     {/* 2. RECIPIENT */}
// //                     <div className="space-y-3">
// //                         <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Type className="w-3 h-3"/> Recipient Data</p>
// //                         <input value={recipientName} onChange={e => setRecipientName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Name (e.g. Rahul)" />
// //                         <input value={awardTitle} onChange={e => setAwardTitle(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Award (e.g. Best Actor)" />
// //                         <input value={eventName} onChange={e => setEventName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Event (e.g. Stage Play 2026)" />
// //                     </div>

// //                     {/* 3. AUTHORITIES */}
// //                     <div className="space-y-3">
// //                         <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Users className="w-3 h-3"/> Signatories</p>
// //                         <div className="grid grid-cols-2 gap-3">
// //                             <div className="space-y-1">
// //                                 <p className="text-[9px] uppercase text-gold-500/80">Right (Primary)</p>
// //                                 <input value={auth1Name} onChange={e => setAuth1Name(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Name" />
// //                                 <input value={auth1Title} onChange={e => setAuth1Title(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Title" />
// //                             </div>
// //                             <div className="space-y-1">
// //                                 <p className="text-[9px] uppercase text-gold-500/80">Left (Secondary)</p>
// //                                 <input value={auth2Name} onChange={e => setAuth2Name(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Name" />
// //                                 <input value={auth2Title} onChange={e => setAuth2Title(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Title" />
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* ACTION */}
// //                     <button onClick={handleMint} disabled={isMinting} className="w-full py-4 bg-white text-black font-bold uppercase text-xs hover:bg-gold-500 hover:text-white transition-all rounded shadow-lg flex items-center justify-center gap-2">
// //                         {isMinting ? "Minting..." : "Mint Certificate"}
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* PREVIEW */}
// //             <div className="flex-1 bg-[#050505] flex flex-col items-center justify-center p-8 relative overflow-hidden">
// //                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />
                
// //                 <div className="w-full max-w-5xl shadow-2xl border border-white/10 transform transition-transform duration-500">
// //                     <CertificateCard 
// //                         data={mintedData || { 
// //                             recipient_name: recipientName || "Recipient Name", 
// //                             award_title: awardTitle || "Award Title", 
// //                             event_name: eventName || "Event Name",
// //                             id: mintedData?.id || "PREVIEW-ID",
// //                             auth_1_name: auth1Name,
// //                             auth_1_title: auth1Title,
// //                             auth_2_name: auth2Name,
// //                             auth_2_title: auth2Title
// //                         }} 
// //                         designConfig={{
// //                             logo: logoPreview,
// //                             signature1: sign1Preview,
// //                             signature2: sign2Preview
// //                         }}
// //                     />
// //                 </div>

// //                 {mintedData && (
// //                     <button onClick={handleDownload} className="mt-8 px-8 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white rounded-full shadow-xl z-50 animate-bounce">
// //                         Download High-Res
// //                     </button>
// //                 )}
// //             </div>

// //         </section>
// //     );
// // }

// "use client";

// import { useState } from "react";
// import { Download, Cpu, Check, Users, Upload, Type } from "lucide-react";
// import { mintCertificate } from "@/app/certificate/actions";
// import { CertificateCard } from "./CertificateVault";
// import html2canvas from "html2canvas";
// import { toast } from "sonner";

// export default function TheForge() {
//     // CONTENT
//     const [recipientName, setRecipientName] = useState("");
//     const [awardTitle, setAwardTitle] = useState("");
//     const [eventName, setEventName] = useState("");
    
//     // AUTHORITIES (Editable Text)
//     const [auth1Name, setAuth1Name] = useState("Siddharth");
//     const [auth1Title, setAuth1Title] = useState("Secretary");
//     const [auth2Name, setAuth2Name] = useState("Aditya");
//     const [auth2Title, setAuth2Title] = useState("Dy. Secretary");

//     // VISUAL ASSETS (Uploads)
//     const [logoPreview, setLogoPreview] = useState<string | null>(null);
//     const [sign1Preview, setSign1Preview] = useState<string | null>(null);
//     const [sign2Preview, setSign2Preview] = useState<string | null>(null);

//     const [isMinting, setIsMinting] = useState(false);
//     const [mintedData, setMintedData] = useState<any>(null);

//     // Image Handler
//     const handleFile = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'sign1' | 'sign2') => {
//         const file = e.target.files?.[0];
//         if(file) {
//             const url = URL.createObjectURL(file);
//             if(type === 'logo') setLogoPreview(url);
//             if(type === 'sign1') setSign1Preview(url);
//             if(type === 'sign2') setSign2Preview(url);
//         }
//     };

//     // Database Write
//     const handleMint = async () => {
//         if(!recipientName || !awardTitle) { toast.error("Data incomplete."); return; }
//         setIsMinting(true);
        
//         // Note: For a production app, you would upload the images to Supabase Storage here.
//         // For this generated certificate, the local preview works for the PNG export.
//         const payload = { recipient_name: recipientName, award_title: awardTitle, event_name: eventName };
//         const result = await mintCertificate(payload);
        
//         if (result.success) {
//             setMintedData({ 
//                 id: result.id, 
//                 ...payload, 
//                 auth_1_name: auth1Name, auth_1_title: auth1Title, 
//                 auth_2_name: auth2Name, auth_2_title: auth2Title 
//             });
//             toast.success(`Minted: ${result.id}`);
//         } else {
//             toast.error(result.error);
//         }
//         setIsMinting(false);
//     };

//     const handleDownload = async () => {
//         const element = document.getElementById("cert-node");
//         if(element) {
//             const canvas = await html2canvas(element, { scale: 3, useCORS: true });
//             const link = document.createElement("a");
//             link.download = `Aayam_Legacy_${mintedData?.id || 'Preview'}.png`;
//             link.href = canvas.toDataURL("image/png");
//             link.click();
//         }
//     };

//     return (
//         <section className="min-h-screen bg-[#09090b] text-gray-200 flex flex-col xl:flex-row font-sans">
            
//             {/* --- LEFT: CONTROLS --- */}
//             <div className="w-full xl:w-[450px] bg-[#121214] border-r border-white/5 p-6 flex flex-col h-screen overflow-y-auto z-20 shadow-2xl">
//                 <div className="mb-6 border-b border-white/5 pb-4">
//                     <h1 className="font-serif text-2xl text-white flex items-center gap-2">The Studio <Cpu className="w-5 h-5 text-maroon-500" /></h1>
//                     <p className="text-[10px] text-white/40 uppercase tracking-widest">Certificate Architect</p>
//                 </div>

//                 <div className="space-y-8">
//                     {/* 1. ASSETS */}
//                     <div className="space-y-3">
//                         <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Upload className="w-3 h-3"/> 1. Upload Assets</p>
//                         <div className="grid grid-cols-3 gap-2">
//                             <label className="h-24 bg-black/40 border border-dashed border-white/10 rounded hover:border-gold-500/50 flex flex-col items-center justify-center cursor-pointer transition-colors group">
//                                 <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'logo')} />
//                                 {logoPreview ? <img src={logoPreview} className="h-12 w-12 object-contain" /> : <span className="text-[8px] uppercase text-white/40 group-hover:text-white">Logo</span>}
//                             </label>
//                             <label className="h-24 bg-black/40 border border-dashed border-white/10 rounded hover:border-gold-500/50 flex flex-col items-center justify-center cursor-pointer transition-colors group">
//                                 <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'sign1')} />
//                                 {sign1Preview ? <img src={sign1Preview} className="h-10 w-full object-contain px-2" /> : <span className="text-[8px] uppercase text-white/40 group-hover:text-white">Sign 1</span>}
//                             </label>
//                             <label className="h-24 bg-black/40 border border-dashed border-white/10 rounded hover:border-gold-500/50 flex flex-col items-center justify-center cursor-pointer transition-colors group">
//                                 <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'sign2')} />
//                                 {sign2Preview ? <img src={sign2Preview} className="h-10 w-full object-contain px-2" /> : <span className="text-[8px] uppercase text-white/40 group-hover:text-white">Sign 2</span>}
//                             </label>
//                         </div>
//                     </div>

//                     {/* 2. DETAILS */}
//                     <div className="space-y-3">
//                         <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Type className="w-3 h-3"/> 2. Recipient</p>
//                         <input value={recipientName} onChange={e => setRecipientName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Name" />
//                         <input value={awardTitle} onChange={e => setAwardTitle(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Award Title" />
//                         <input value={eventName} onChange={e => setEventName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Event Name" />
//                     </div>

//                     {/* 3. AUTHORITIES */}
//                     <div className="space-y-3">
//                         <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Users className="w-3 h-3"/> 3. Signatories</p>
//                         <div className="grid grid-cols-2 gap-3">
//                             <div className="space-y-1">
//                                 <p className="text-[9px] uppercase text-gold-500/80">Right (Primary)</p>
//                                 <input value={auth1Name} onChange={e => setAuth1Name(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Name" />
//                                 <input value={auth1Title} onChange={e => setAuth1Title(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Title" />
//                             </div>
//                             <div className="space-y-1">
//                                 <p className="text-[9px] uppercase text-gold-500/80">Left (Secondary)</p>
//                                 <input value={auth2Name} onChange={e => setAuth2Name(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Name" />
//                                 <input value={auth2Title} onChange={e => setAuth2Title(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Title" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* ACTION */}
//                     <button onClick={handleMint} disabled={isMinting} className="w-full py-4 bg-white text-black font-bold uppercase text-xs hover:bg-gold-500 hover:text-white transition-all rounded shadow-lg flex items-center justify-center gap-2">
//                         {isMinting ? "Minting..." : "Mint Certificate"}
//                     </button>
//                 </div>
//             </div>

//             {/* --- RIGHT: PREVIEW --- */}
//             <div className="flex-1 bg-[#050505] flex flex-col items-center justify-center p-8 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />
                
//                 <div className="w-full max-w-5xl shadow-2xl border border-white/10 transform transition-transform duration-500">
//                     <CertificateCard 
//                         data={mintedData || { 
//                             recipient_name: recipientName || "Recipient Name", 
//                             award_title: awardTitle || "Award Title", 
//                             event_name: eventName || "Event Name",
//                             id: mintedData?.id || "PREVIEW-ID",
//                             auth_1_name: auth1Name, auth_1_title: auth1Title,
//                             auth_2_name: auth2Name, auth_2_title: auth2Title
//                         }} 
//                         designConfig={{
//                             logo: logoPreview,
//                             signature1: sign1Preview,
//                             signature2: sign2Preview
//                         }}
//                     />
//                 </div>

//                 {mintedData && (
//                     <button onClick={handleDownload} className="mt-8 px-8 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white rounded-full shadow-xl z-50 animate-bounce">
//                         Download Artifact
//                     </button>
//                 )}
//             </div>

//         </section>
//     );
// }

"use client";

import { useState } from "react";
import { Download, Cpu, Check, Users, Upload, Type } from "lucide-react";
import { mintCertificate } from "@/app/certificate/actions";
import { CertificateCard } from "./CertificateVault";
import html2canvas from "html2canvas";
import { toast } from "sonner";

export default function TheForge() {
    // --- 1. CONTENT (The Data) ---
    const [recipientName, setRecipientName] = useState("");
    const [awardTitle, setAwardTitle] = useState("");
    const [eventName, setEventName] = useState("");
    
    // --- 2. AUTHORITY (The Hierarchy - Editable) ---
    const [auth1Name, setAuth1Name] = useState("Siddharth");
    const [auth1Title, setAuth1Title] = useState("Secretary");
    const [auth2Name, setAuth2Name] = useState("Aditya");
    const [auth2Title, setAuth2Title] = useState("Dy. Secretary");

    // --- 3. ASSETS (The Visuals - Uploadable) ---
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [sign1Preview, setSign1Preview] = useState<string | null>(null);
    const [sign2Preview, setSign2Preview] = useState<string | null>(null);

    const [isMinting, setIsMinting] = useState(false);
    const [mintedData, setMintedData] = useState<any>(null);

    // Helper: Handle File Uploads
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'sign1' | 'sign2') => {
        const file = e.target.files?.[0];
        if(file) {
            const url = URL.createObjectURL(file);
            if(type === 'logo') setLogoPreview(url);
            if(type === 'sign1') setSign1Preview(url);
            if(type === 'sign2') setSign2Preview(url);
        }
    };

    // Helper: Mint to DB
    const handleMint = async () => {
        if(!recipientName || !awardTitle) { toast.error("Details required."); return; }
        setIsMinting(true);
        
        // Pass all data to backend (ensure backend action accepts metadata or handles it)
        const payload = { 
            recipient_name: recipientName, 
            award_title: awardTitle, 
            event_name: eventName 
        };
        
        const result = await mintCertificate(payload);
        
        if (result.success) {
            setMintedData({ 
                id: result.id, 
                ...payload, 
                auth_1_name: auth1Name, auth_1_title: auth1Title, 
                auth_2_name: auth2Name, auth_2_title: auth2Title 
            });
            toast.success(`Minted: ${result.id}`);
        } else {
            toast.error(result.error);
        }
        setIsMinting(false);
    };

    // Helper: Download High Res
    const handleDownload = async () => {
        const element = document.getElementById("cert-node");
        if(element) {
            const canvas = await html2canvas(element, { scale: 3, useCORS: true });
            const link = document.createElement("a");
            link.download = `Aayam_Cert_${mintedData?.id || 'Preview'}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        }
    };

    return (
        <section className="min-h-screen bg-[#09090b] text-gray-200 flex flex-col xl:flex-row font-serif">
            
            {/* --- LEFT: CONTROL PANEL --- */}
            <div className="w-full xl:w-[450px] bg-[#121214] border-r border-white/5 p-6 flex flex-col h-screen overflow-y-auto z-20 shadow-2xl">
                <div className="mb-6 border-b border-white/5 pb-4">
                    <h1 className="font-serif text-2xl text-white flex items-center gap-2">The Studio <Cpu className="w-5 h-5 text-maroon-500" /></h1>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Master Control</p>
                </div>

                <div className="space-y-8">
                    {/* A. VISUAL ASSETS */}
                    <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Upload className="w-3 h-3"/> 1. Upload Assets</p>
                        <div className="grid grid-cols-3 gap-2">
                            <label className="h-24 bg-black/40 border border-dashed border-white/10 rounded hover:border-gold-500/50 flex flex-col items-center justify-center cursor-pointer transition-colors group">
                                <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'logo')} />
                                {logoPreview ? <img src={logoPreview} className="h-12 w-12 object-contain" /> : <span className="text-[8px] uppercase text-white/40 group-hover:text-white text-center">Aayam<br/>Logo</span>}
                            </label>
                            <label className="h-24 bg-black/40 border border-dashed border-white/10 rounded hover:border-gold-500/50 flex flex-col items-center justify-center cursor-pointer transition-colors group">
                                <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'sign1')} />
                                {sign1Preview ? <img src={sign1Preview} className="h-10 w-full object-contain px-2" /> : <span className="text-[8px] uppercase text-white/40 group-hover:text-white text-center">Secretary<br/>Sign</span>}
                            </label>
                            <label className="h-24 bg-black/40 border border-dashed border-white/10 rounded hover:border-gold-500/50 flex flex-col items-center justify-center cursor-pointer transition-colors group">
                                <input type="file" hidden accept="image/*" onChange={(e) => handleFile(e, 'sign2')} />
                                {sign2Preview ? <img src={sign2Preview} className="h-10 w-full object-contain px-2" /> : <span className="text-[8px] uppercase text-white/40 group-hover:text-white text-center">Deputy<br/>Sign</span>}
                            </label>
                        </div>
                    </div>

                    {/* B. RECIPIENT DATA */}
                    <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Type className="w-3 h-3"/> 2. Recipient Data</p>
                        <input value={recipientName} onChange={e => setRecipientName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Name (e.g. Rahul)" />
                        <input value={awardTitle} onChange={e => setAwardTitle(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Award (e.g. Best Actor)" />
                        <input value={eventName} onChange={e => setEventName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white text-sm focus:border-gold-500 outline-none" placeholder="Event (e.g. NodaRang 2026)" />
                    </div>

                    {/* C. AUTHORITY DATA */}
                    <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest flex items-center gap-2"><Users className="w-3 h-3"/> 3. Authority Titles</p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <p className="text-[9px] uppercase text-gold-500/80">Right (Primary)</p>
                                <input value={auth1Name} onChange={e => setAuth1Name(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Name" />
                                <input value={auth1Title} onChange={e => setAuth1Title(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Title" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] uppercase text-gold-500/80">Left (Secondary)</p>
                                <input value={auth2Name} onChange={e => setAuth2Name(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Name" />
                                <input value={auth2Title} onChange={e => setAuth2Title(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded p-2 text-xs text-white" placeholder="Title" />
                            </div>
                        </div>
                    </div>

                    {/* D. ACTION */}
                    <button onClick={handleMint} disabled={isMinting} className="w-full py-4 bg-white text-black font-bold uppercase text-xs hover:bg-gold-500 hover:text-white transition-all rounded shadow-lg flex items-center justify-center gap-2">
                        {isMinting ? "Minting..." : "Mint Certificate"}
                    </button>
                </div>
            </div>

            {/* --- RIGHT: LIVE PREVIEW --- */}
            <div className="flex-1 bg-[#050505] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />
                
                <div className="w-full max-w-5xl shadow-2xl border border-white/10 transform transition-transform duration-500">
                    <CertificateCard 
                        data={mintedData || { 
                            recipient_name: recipientName || "Recipient Name", 
                            award_title: awardTitle || "Award Title", 
                            event_name: eventName || "Event Name",
                            id: mintedData?.id || "PREVIEW-ID",
                            auth_1_name: auth1Name, auth_1_title: auth1Title,
                            auth_2_name: auth2Name, auth_2_title: auth2Title
                        }} 
                        designConfig={{
                            logo: logoPreview,
                            signature1: sign1Preview,
                            signature2: sign2Preview
                        }}
                    />
                </div>

                {mintedData && (
                    <button onClick={handleDownload} className="mt-8 px-8 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white rounded-full shadow-xl z-50 animate-bounce">
                        Download Artifact
                    </button>
                )}
            </div>

        </section>
    );
}