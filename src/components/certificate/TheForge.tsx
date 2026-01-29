"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, Download, Copy, RefreshCw, Cpu, Fingerprint } from "lucide-react";
import html2canvas from "html2canvas"; // * Requires: npm install html2canvas

// --- 1. THE UTILS (The Logic) ---

// Generates a "Cryptographic" ID based on name and event
const generateHashID = (name: string, event: string) => {
  const seed = name + event + new Date().getFullYear();
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = Math.imul(31, hash) + seed.charCodeAt(i) | 0;
  }
  const suffix = Math.abs(hash).toString(16).substring(0, 4).toUpperCase();
  const prefix = name.substring(0, 2).toUpperCase();
  return `AYM:${prefix}-${suffix}`;
};

// --- 2. THE ARTIFACT (The Certificate Component) ---
const CertificateCard = ({ data, verified = false }: { data: any, verified?: boolean }) => {
    return (
        <div id="certificate-node" className="relative w-full aspect-[1.414/1] bg-[#050505] text-white overflow-hidden rounded-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 md:p-12">
            
            {/* A. THE HOLOGRAPHIC FOIL (Animated Background) */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine pointer-events-none" />
            
            {/* B. THE GUILLOCHE PATTERN (CSS Grid Noise) */}
            <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:4px_4px]" />
            <div className="absolute inset-4 border border-white/20 rounded-lg" />
            <div className="absolute inset-6 border border-gold-500/20 rounded-lg" />

            {/* C. THE HEADER */}
            <div className="relative z-10 text-center space-y-2">
                <div className="flex justify-center mb-4">
                     {/* The Logo Mark */}
                    <div className="w-12 h-12 border border-gold-500/50 rotate-45 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gold-500/10 -rotate-45 flex items-center justify-center">
                            <span className="font-serif font-bold text-gold-500">A</span>
                        </div>
                    </div>
                </div>
                <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-white uppercase">
                    Certificate of <span className="text-gold-500">Excellence</span>
                </h1>
                <p className="font-mono text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.4em]">
                    Aayam Drama Society • IIT Madras
                </p>
            </div>

            {/* D. THE RECIPIENT */}
            <div className="relative z-10 text-center my-8 md:my-12">
                <p className="font-serif italic text-white/50 text-sm mb-4">Presented to</p>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-4 border-b border-white/10 pb-4 px-8 inline-block min-w-[300px]">
                    {data.name}
                </h2>
                <p className="font-serif text-white/70 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                    For outstanding contribution as <strong className="text-white">{data.role}</strong> during <br/>
                    <strong className="text-gold-200 uppercase tracking-widest text-xs md:text-sm">{data.event}</strong>
                </p>
            </div>

            {/* E. THE FOOTER (Signatures & ID) */}
            <div className="relative z-10 w-full flex justify-between items-end px-4 md:px-12">
                <div className="text-left">
                    <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">Authenticated By</p>
                    <div className="h-10 flex items-end">
                         <span className="font-serif italic text-xl text-white/60 signature-font">Siddharth</span>
                    </div>
                    <div className="h-px w-32 bg-white/20 mt-1" />
                    <p className="font-mono text-[8px] text-white/30 mt-1 uppercase">Secretary, Aayam</p>
                </div>

                <div className="text-right">
                     <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-1">Certificate ID</p>
                     <p className="font-mono text-xs md:text-sm text-gold-500">{data.id}</p>
                     <div className="flex items-center justify-end gap-1 mt-1 text-green-500/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-mono text-[8px] uppercase">Secure Hash</span>
                     </div>
                </div>
            </div>

            {/* F. THE SEAL (Only appears if verified) */}
            {verified && (
                <motion.div 
                    initial={{ scale: 2, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="absolute right-8 md:right-20 bottom-20 md:bottom-32 w-24 h-24 md:w-32 md:h-32 border-4 border-gold-500 rounded-full flex items-center justify-center opacity-80 mix-blend-screen pointer-events-none"
                >
                    <div className="absolute inset-1 border border-gold-500 rounded-full" />
                    <div className="text-center rotate-[-15deg]">
                        <span className="block font-mono text-[10px] text-gold-500 uppercase tracking-widest">Verified</span>
                        <span className="block font-serif text-xs text-gold-500 font-bold">AAYAM ARCHIVES</span>
                    </div>
                </motion.div>
            )}
        </div>
    );
};


// --- 3. THE MAIN SYSTEM (Forge & Vault) ---
export default function TheForge() {
    const [mode, setMode] = useState<"verify" | "generate">("verify"); // Toggle for Admin/Student
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    // --- GENERATOR LOGIC (Admin Side) ---
    const [genName, setGenName] = useState("");
    const [genRole, setGenRole] = useState("");
    const [genEvent, setGenEvent] = useState("");

    const handleGenerate = () => {
        setLoading(true);
        setTimeout(() => {
            const newID = generateHashID(genName, genEvent);
            setResult({
                id: newID,
                name: genName,
                role: genRole,
                event: genEvent,
                date: new Date().toLocaleDateString()
            });
            setLoading(false);
        }, 1500);
    };

    const handleDownload = async () => {
        const element = document.getElementById("certificate-node");
        if(element) {
            const canvas = await html2canvas(element);
            const data = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = data;
            link.download = `Aayam_Cert_${result.id}.png`;
            link.click();
        }
    };

    // --- VERIFICATION LOGIC (Student Side) ---
    // In a real app, this fetches from Supabase/Firebase
    const handleVerify = () => {
        if(!input) return;
        setLoading(true);
        // MOCK DATABASE CHECK
        setTimeout(() => {
            // Simulator: Only works if input looks like an ID
            if(input.includes("AYM")) {
                setResult({
                    id: input,
                    name: "Aditya Verma", // Mock Data
                    role: "Best Actor",
                    event: "NodaRang 2026"
                });
            } else {
                alert("ACCESS DENIED: Invalid Hash Identifier.");
            }
            setLoading(false);
        }, 2000);
    };

    return (
        <section className="min-h-screen bg-[#020202] text-[#e0e0e0] font-sans selection:bg-gold-500/30 flex flex-col items-center py-24 px-4 relative">
            
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

            {/* HEADER */}
            <div className="relative z-10 text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setMode(mode === 'verify' ? 'generate' : 'verify')}>
                    <div className={`w-2 h-2 rounded-full ${mode === 'verify' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                        System: {mode === 'verify' ? 'The Vault (Public)' : 'The Forge (Admin)'}
                    </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 tracking-tight">
                    {mode === 'verify' ? 'Authenticate Asset' : 'Mint Credentials'}
                </h1>
                <p className="font-mono text-xs text-white/40 uppercase tracking-[0.3em]">
                    Aayam Secure Archives
                </p>
            </div>

            {/* INPUT TERMINAL */}
            {!result && (
                <div className="w-full max-w-lg relative z-10">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden group">
                        
                        {/* Scanning Bar Animation */}
                        {loading && <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 animate-scan-fast shadow-[0_0_20px_#ffd700]" />}

                        {mode === 'verify' ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-white/50 mb-2">
                                    <Fingerprint className="w-5 h-5" />
                                    <span className="font-mono text-xs uppercase tracking-widest">Enter Secure Hash</span>
                                </div>
                                <input 
                                    type="text" 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="AYM:XX-XXXX"
                                    className="w-full bg-black/50 border-b border-white/20 text-2xl font-mono text-gold-500 placeholder:text-white/10 focus:outline-none focus:border-gold-500 py-2 transition-all"
                                />
                                <button 
                                    onClick={handleVerify}
                                    disabled={loading}
                                    className="mt-6 w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-500 hover:text-black transition-all disabled:opacity-50"
                                >
                                    {loading ? 'Decrypting...' : 'Verify Authenticity'}
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-white/50 mb-4">
                                    <Cpu className="w-5 h-5" />
                                    <span className="font-mono text-xs uppercase tracking-widest">Recipient Data</span>
                                </div>
                                <input 
                                    type="text" placeholder="Full Name" value={genName} onChange={(e) => setGenName(e.target.value)}
                                    className="bg-black/50 border border-white/10 rounded p-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                                />
                                <input 
                                    type="text" placeholder="Role / Position" value={genRole} onChange={(e) => setGenRole(e.target.value)}
                                    className="bg-black/50 border border-white/10 rounded p-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                                />
                                <input 
                                    type="text" placeholder="Event Name" value={genEvent} onChange={(e) => setGenEvent(e.target.value)}
                                    className="bg-black/50 border border-white/10 rounded p-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                                />
                                <button 
                                    onClick={handleGenerate}
                                    disabled={loading}
                                    className="mt-4 w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-500 transition-all disabled:opacity-50"
                                >
                                    {loading ? 'Minting...' : 'Generate Asset'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* THE REVEAL */}
            <AnimatePresence>
                {result && (
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="w-full max-w-4xl relative z-20"
                    >
                         {/* Control Bar */}
                         <div className="flex justify-between items-center mb-6">
                             <button onClick={() => setResult(null)} className="flex items-center gap-2 text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest">
                                 <RefreshCw className="w-4 h-4" /> Reset System
                             </button>
                             <div className="flex gap-4">
                                 <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-2 bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-sm">
                                     <Download className="w-4 h-4" /> Download Asset
                                 </button>
                             </div>
                         </div>

                         {/* The Rendered Certificate */}
                         <div className="p-1 bg-gradient-to-br from-white/20 to-transparent rounded-xl">
                            <CertificateCard data={result} verified={mode === 'verify'} />
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}