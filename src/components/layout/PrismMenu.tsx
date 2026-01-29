// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Link from "next/link";
// // // // // // import { usePathname } from "next/navigation";

// // // // // // const MENU_ITEMS = [
// // // // // //   { label: "Stage", path: "/" },
// // // // // //   { label: "Originals", path: "/originals" },
// // // // // //   { label: "Ensemble", path: "/ensemble" },
// // // // // //   { label: "Artist", path: "/artist" },
// // // // // //   { label: "Events", path: "/events" },
// // // // // //   { label: "Join", path: "/join" },
// // // // // //   { label: "About", path: "/about" },
// // // // // //   { label: "Verify", path: "/certificate" },

// // // // // // ];

// // // // // // export default function PrismMenu() {
// // // // // //   const pathname = usePathname();

// // // // // //   return (
// // // // // //     <motion.nav 
// // // // // //       initial={{ y: 100, opacity: 0 }}
// // // // // //       animate={{ y: 0, opacity: 1 }}
// // // // // //       transition={{ delay: 2, duration: 1 }}
// // // // // //       // iOS SAFE AREA FIX: Calculate bottom padding dynamically
// // // // // //       className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]"
// // // // // //       style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
// // // // // //     >
// // // // // //       <div className="flex items-center justify-center gap-1 md:gap-2 px-1 py-1 md:px-2 md:py-2 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
// // // // // //         {MENU_ITEMS.map((item) => {
// // // // // //           const isActive = pathname === item.path;
// // // // // //           return (
// // // // // //             <Link key={item.path} href={item.path} className="relative group">
// // // // // //               {isActive && (
// // // // // //                 <motion.div
// // // // // //                   layoutId="prism-highlight"
// // // // // //                   className="absolute inset-0 bg-white/10 rounded-full"
// // // // // //                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// // // // // //                 />
// // // // // //               )}
// // // // // //               <span className={`
// // // // // //                 relative block px-3 py-2 md:px-4 text-[10px] md:text-xs font-mono uppercase tracking-widest transition-colors
// // // // // //                 ${isActive ? "text-gold-400" : "text-neutral-500 group-hover:text-white"}
// // // // // //               `}>
// // // // // //                 {item.label}
// // // // // //               </span>
// // // // // //             </Link>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>
// // // // // //     </motion.nav>
// // // // // //   );
// // // // // // }

// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Link from "next/link";
// // // // // // import { usePathname } from "next/navigation";
// // // // // // import { Home, Feather, Clock, Clapperboard, Award, Sparkles } from "lucide-react";

// // // // // // // THE MAP
// // // // // // const NAV_ITEMS = [
// // // // // //   { path: "/", label: "STAGE", icon: Home },
// // // // // //   { path: "/about", label: "SOUL", icon: Feather },
// // // // // //   { path: "/events", label: "TIME", icon: Clock },
// // // // // //   { path: "/originals", label: "ART", icon: Clapperboard },
// // // // // //   { path: "/certificate", label: "LEGACY", icon: Award },
// // // // // //   { path: "/join", label: "UNION", icon: Sparkles },
// // // // // // ];

// // // // // // export default function PrismMenu() {
// // // // // //   const pathname = usePathname();

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* --- DESKTOP: THE VERTICAL BLADE (Right Side) --- */}
// // // // // //       <motion.nav 
// // // // // //         initial={{ x: 100, opacity: 0 }}
// // // // // //         animate={{ x: 0, opacity: 1 }}
// // // // // //         transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
// // // // // //         className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4"
// // // // // //       >
// // // // // //         <div className="flex flex-col items-center gap-2 p-2 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
// // // // // //           {NAV_ITEMS.map((item) => {
// // // // // //             const isActive = pathname === item.path;
            
// // // // // //             return (
// // // // // //               <Link 
// // // // // //                 key={item.path} 
// // // // // //                 href={item.path}
// // // // // //                 className="relative group p-3 flex items-center justify-center"
// // // // // //               >
// // // // // //                 {/* Active Light (Vertical Pill) */}
// // // // // //                 {isActive && (
// // // // // //                   <motion.div
// // // // // //                     layoutId="blade-highlight"
// // // // // //                     className="absolute inset-0 bg-white/10 rounded-full"
// // // // // //                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// // // // // //                   />
// // // // // //                 )}

// // // // // //                 {/* Icon */}
// // // // // //                 <item.icon 
// // // // // //                     className={`
// // // // // //                         w-5 h-5 transition-all duration-300 relative z-10
// // // // // //                         ${isActive ? "text-gold-400 scale-110" : "text-neutral-500 group-hover:text-white group-hover:scale-110"}
// // // // // //                     `} 
// // // // // //                     strokeWidth={1.5}
// // // // // //                 />

// // // // // //                 {/* Tooltip Label (Appears on Hover to the Left) */}
// // // // // //                 <span className="absolute right-full mr-4 px-2 py-1 bg-neutral-900 border border-white/10 rounded text-[9px] font-mono uppercase tracking-widest text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
// // // // // //                     {item.label}
// // // // // //                 </span>
// // // // // //               </Link>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>
// // // // // //       </motion.nav>

// // // // // //       {/* --- MOBILE: THE COMPACT CAPSULE (Bottom) --- */}
// // // // // //       <motion.nav 
// // // // // //         initial={{ y: 100, opacity: 0 }}
// // // // // //         animate={{ y: 0, opacity: 1 }}
// // // // // //         transition={{ delay: 1, duration: 1 }}
// // // // // //         className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto"
// // // // // //       >
// // // // // //         <div className="flex items-center gap-1 px-3 py-2 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50">
// // // // // //           {NAV_ITEMS.map((item) => {
// // // // // //             const isActive = pathname === item.path;
// // // // // //             return (
// // // // // //               <Link 
// // // // // //                 key={item.path} 
// // // // // //                 href={item.path} 
// // // // // //                 className="relative group px-3 py-2"
// // // // // //               >
// // // // // //                 {isActive && (
// // // // // //                   <motion.div
// // // // // //                     layoutId="mobile-highlight"
// // // // // //                     className="absolute inset-0 bg-white/10 rounded-full"
// // // // // //                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// // // // // //                   />
// // // // // //                 )}
// // // // // //                 <div className="flex flex-col items-center">
// // // // // //                     <item.icon 
// // // // // //                         className={`w-5 h-5 ${isActive ? "text-gold-400" : "text-neutral-500"}`} 
// // // // // //                         strokeWidth={1.5}
// // // // // //                     />
// // // // // //                 </div>
// // // // // //               </Link>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>
// // // // // //       </motion.nav>
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Link from "next/link";
// // // // // // import { usePathname } from "next/navigation";
// // // // // // import { 
// // // // // //   Home,         // Stage
// // // // // //   Feather,      // Manifesto (About)
// // // // // //   Clock,        // Chronicle (Events)
// // // // // //   Film,         // Cinema (Originals)
// // // // // //   Users,        // Voices (Cast/Ensemble)
// // // // // //   Fingerprint,  // Legacy (Certificates)
// // // // // //   Sparkles      // Union (Join)
// // // // // // } from "lucide-react";

// // // // // // // --- THE MYTHOLOGY (Renaming for Soul) ---
// // // // // // const MENU_ITEMS = [
// // // // // //   // THE IDENTITY
// // // // // //   { label: "STAGE", path: "/", icon: Home },
// // // // // //   { label: "MANIFESTO", path: "/about", icon: Feather }, // Was: About Us
  
// // // // // //   // THE WORK
// // // // // //   { label: "CHRONICLE", path: "/events", icon: Clock }, // Was: Events
// // // // // //   { label: "CINEMA", path: "/originals", icon: Film },  // Was: Originals
  
// // // // // //   // THE HUMANS (Combined Ensemble + Cast concept conceptually, or just link to main)
// // // // // //   { label: "VOICES", path: "/ensemble", icon: Users },  // Was: Ensemble/Cast
  
// // // // // //   // -- SEPARATOR -- 

// // // // // //   // THE ACTION
// // // // // //   { label: "LEGACY", path: "/certificate", icon: Fingerprint, special: true }, // Was: Verify
// // // // // //   { label: "UNION", path: "/join", icon: Sparkles, special: true },            // Was: Join
// // // // // // ];

// // // // // // export default function PrismMenu() {
// // // // // //   const pathname = usePathname();

// // // // // //   return (
// // // // // //     <motion.nav 
// // // // // //       initial={{ y: 100, opacity: 0 }}
// // // // // //       animate={{ y: 0, opacity: 1 }}
// // // // // //       transition={{ 
// // // // // //         type: "spring", 
// // // // // //         stiffness: 200, 
// // // // // //         damping: 20, 
// // // // // //         delay: 1 
// // // // // //       }}
// // // // // //       className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]"
// // // // // //       style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
// // // // // //     >
// // // // // //       {/* THE GLASS CAPSULE */}
// // // // // //       <div className="
// // // // // //         flex items-center gap-1 p-2 
// // // // // //         bg-[#050505]/80 backdrop-blur-2xl 
// // // // // //         border border-white/10 rounded-full 
// // // // // //         shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // // // // //         relative overflow-hidden
// // // // // //       ">
        
// // // // // //         {/* Cinematic Grain Overlay */}
// // // // // //         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

// // // // // //         {MENU_ITEMS.map((item, index) => {
// // // // // //           const isActive = pathname === item.path;
          
// // // // // //           // ADDING A SEPARATOR BEFORE THE LAST TWO ITEMS (Legacy & Union)
// // // // // //           const showSeparator = index === MENU_ITEMS.length - 2;

// // // // // //           return (
// // // // // //             <div key={item.path} className="flex items-center">
              
// // // // // //               {/* THE SEPARATOR LINE */}
// // // // // //               {showSeparator && (
// // // // // //                 <div className="w-px h-6 bg-white/10 mx-2 hidden md:block" />
// // // // // //               )}

// // // // // //               <Link 
// // // // // //                 href={item.path} 
// // // // // //                 className={`
// // // // // //                   relative group px-4 py-3 md:px-5 md:py-3 rounded-full transition-all duration-300
// // // // // //                   flex flex-col items-center justify-center gap-1 min-w-[60px] md:min-w-0
// // // // // //                   ${item.special ? "hover:bg-white/5" : "hover:bg-white/5"}
// // // // // //                 `}
// // // // // //               >
// // // // // //                 {/* ACTIVE BACKGROUND (Divine Light) */}
// // // // // //                 {isActive && (
// // // // // //                   <motion.div
// // // // // //                     layoutId="prism-active"
// // // // // //                     className="absolute inset-0 bg-white/10 rounded-full"
// // // // // //                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// // // // // //                   />
// // // // // //                 )}

// // // // // //                 {/* ACTIVE GLOW DOT (Mobile Only) */}
// // // // // //                 {isActive && (
// // // // // //                   <motion.div 
// // // // // //                     layoutId="prism-dot"
// // // // // //                     className="md:hidden absolute top-1.5 w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_10px_#ffd700]" 
// // // // // //                   />
// // // // // //                 )}

// // // // // //                 {/* ICON */}
// // // // // //                 <div className="relative z-10">
// // // // // //                    <item.icon 
// // // // // //                       strokeWidth={1.5}
// // // // // //                       className={`
// // // // // //                         w-5 h-5 transition-all duration-500
// // // // // //                         ${isActive ? "text-gold-500 scale-110" : "text-white/40 group-hover:text-white group-hover:scale-110"}
// // // // // //                         ${item.special && !isActive ? "text-red-500/60 group-hover:text-red-500" : ""}
// // // // // //                       `} 
// // // // // //                    />
// // // // // //                 </div>

// // // // // //                 {/* LABEL (Desktop Only - Slides up on hover) */}
// // // // // //                 <span className={`
// // // // // //                   hidden md:block text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-300
// // // // // //                   ${isActive ? "text-white translate-y-0 opacity-100" : "text-white/40 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}
// // // // // //                   absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 border border-white/10 px-2 py-1 rounded opacity-0 pointer-events-none
// // // // // //                 `}>
// // // // // //                   {item.label}
// // // // // //                 </span>

// // // // // //                 {/* ACTIVE LABEL (In-Dock) - Optional, simpler to just use color */}
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>
// // // // // //     </motion.nav>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import Link from "next/link";
// // // // // import { usePathname } from "next/navigation";
// // // // // import { 
// // // // //   Home,         // Stage
// // // // //   Feather,      // Manifesto (About)
// // // // //   Clock,        // Chronicle (Events)
// // // // //   Film,         // Cinema (Originals)
// // // // //   Users,        // Guild (Ensemble)
// // // // //   Mic2,         // Cast (Artist)
// // // // //   Fingerprint,  // Legacy (Verify)
// // // // //   Sparkles      // Union (Join)
// // // // // } from "lucide-react";

// // // // // // --- THE MYTHOLOGY: 8 NOTES OF THE OCTAVE ---
// // // // // const MENU_ITEMS = [
// // // // //   // ACT I: IDENTITY
// // // // //   { label: "STAGE", path: "/", icon: Home, group: 1 },
// // // // //   { label: "MANIFESTO", path: "/about", icon: Feather, group: 1 },
  
// // // // //   // ACT II: CREATION
// // // // //   { label: "CHRONICLE", path: "/events", icon: Clock, group: 2 },
// // // // //   { label: "CINEMA", path: "/originals", icon: Film, group: 2 },
  
// // // // //   // ACT III: HUMANS
// // // // //   { label: "GUILD", path: "/ensemble", icon: Users, group: 3 }, // Core Team
// // // // //   { label: "CAST", path: "/artist", icon: Mic2, group: 3 },     // Performers
  
// // // // //   // ACT IV: ACTION
// // // // //   { label: "LEGACY", path: "/certificate", icon: Fingerprint, group: 4 },
// // // // //   { label: "UNION", path: "/join", icon: Sparkles, group: 4, special: true },
// // // // // ];

// // // // // export default function PrismMenu() {
// // // // //   const pathname = usePathname();

// // // // //   return (
// // // // //     <motion.nav 
// // // // //       initial={{ y: 100, opacity: 0 }}
// // // // //       animate={{ y: 0, opacity: 1 }}
// // // // //       transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
// // // // //       className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] md:w-auto flex justify-center"
// // // // //       style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
// // // // //     >
// // // // //       {/* THE GLASS INSTRUMENT */}
// // // // //       <div className="
// // // // //         flex items-center gap-1 p-2 md:p-3
// // // // //         bg-[#050505]/80 backdrop-blur-2xl 
// // // // //         border border-white/10 rounded-2xl md:rounded-full
// // // // //         shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // // // //         overflow-x-auto no-scrollbar
// // // // //         max-w-full
// // // // //       ">
        
// // // // //         {/* Cinematic Noise Overlay */}
// // // // //         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none rounded-2xl md:rounded-full" />

// // // // //         {MENU_ITEMS.map((item, index) => {
// // // // //           const isActive = pathname === item.path;
          
// // // // //           // Logic to draw separators between groups
// // // // //           const showSeparator = index > 0 && item.group !== MENU_ITEMS[index - 1].group;

// // // // //           return (
// // // // //             <div key={item.path} className="flex items-center shrink-0">
              
// // // // //               {/* THE DIVIDER (The Silence Between Notes) */}
// // // // //               {showSeparator && (
// // // // //                 <div className="w-px h-4 bg-white/10 mx-1 md:mx-3" />
// // // // //               )}

// // // // //               <Link 
// // // // //                 href={item.path} 
// // // // //                 className={`
// // // // //                   relative group px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-full transition-all duration-300
// // // // //                   flex flex-col items-center justify-center gap-1
// // // // //                   ${item.special ? "hover:bg-white/5" : "hover:bg-white/5"}
// // // // //                 `}
// // // // //               >
// // // // //                 {/* ACTIVE BACKGROUND (Divine Light) */}
// // // // //                 {isActive && (
// // // // //                   <motion.div
// // // // //                     layoutId="prism-active"
// // // // //                     className="absolute inset-0 bg-white/10 rounded-xl md:rounded-full"
// // // // //                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// // // // //                   />
// // // // //                 )}

// // // // //                 {/* ACTIVE GLOW DOT (Mobile Only) */}
// // // // //                 {isActive && (
// // // // //                   <motion.div 
// // // // //                     layoutId="prism-dot"
// // // // //                     className="md:hidden absolute -bottom-1 w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_10px_#ffd700]" 
// // // // //                   />
// // // // //                 )}

// // // // //                 {/* ICON */}
// // // // //                 <div className="relative z-10">
// // // // //                    <item.icon 
// // // // //                       strokeWidth={1.5}
// // // // //                       className={`
// // // // //                         w-5 h-5 md:w-5 md:h-5 transition-all duration-500
// // // // //                         ${isActive ? "text-gold-500 scale-110" : "text-white/40 group-hover:text-white group-hover:scale-110"}
// // // // //                         ${item.special && !isActive ? "text-red-500/60 group-hover:text-red-500" : ""}
// // // // //                       `} 
// // // // //                    />
// // // // //                 </div>

// // // // //                 {/* TOOLTIP LABEL (Desktop Only - The Whisper) */}
// // // // //                 <span className={`
// // // // //                   hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 
// // // // //                   bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-lg
// // // // //                   text-[9px] font-mono uppercase tracking-[0.2em] text-white
// // // // //                   transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl
// // // // //                   ${isActive ? "opacity-0 translate-y-2" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}
// // // // //                 `}>
// // // // //                   {item.label}
// // // // //                   {/* Tiny triangle pointer */}
// // // // //                   <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a0a]" />
// // // // //                 </span>

// // // // //                 {/* MOBILE LABEL (Optional: if you really want text on mobile, uncomment below, but I recommend icons only for 8 items) */}
// // // // //                 {/* <span className="md:hidden text-[8px] font-mono uppercase tracking-widest text-white/40 mt-1">{item.label.slice(0,3)}</span> */}

// // // // //               </Link>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </motion.nav>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import Link from "next/link";
// // // // import { usePathname } from "next/navigation";
// // // // import { 
// // // //   Home, Feather, Clock, Film, 
// // // //   Users, Mic2, Fingerprint, Sparkles, 
// // // //   Menu, X, ChevronUp 
// // // // } from "lucide-react";

// // // // // --- THE CONSTELLATION (8 Points) ---
// // // // const MENU_ITEMS = [
// // // //   // ROW 1: THE SOUL
// // // //   { label: "STAGE", path: "/", icon: Home },
// // // //   { label: "MANIFESTO", path: "/about", icon: Feather },
// // // //   { label: "CHRONICLE", path: "/events", icon: Clock },
// // // //   { label: "CINEMA", path: "/originals", icon: Film },
  
// // // //   // ROW 2: THE BODY
// // // //   { label: "GUILD", path: "/ensemble", icon: Users },
// // // //   { label: "VOICES", path: "/artist", icon: Mic2 },
// // // //   { label: "LEGACY", path: "/certificate", icon: Fingerprint },
// // // //   { label: "UNION", path: "/join", icon: Sparkles, special: true },
// // // // ];

// // // // export default function PrismMenu() {
// // // //   const pathname = usePathname();
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Find current active label for the closed state
// // // //   const currentItem = MENU_ITEMS.find(item => item.path === pathname) || MENU_ITEMS[0];

// // // //   return (
// // // //     <>
// // // //       {/* --- BACKDROP BLUR (When Open) --- */}
// // // //       <AnimatePresence>
// // // //         {isOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={() => setIsOpen(false)}
// // // //             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
// // // //           />
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* --- THE HUD CONTROLLER --- */}
// // // //       <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-full max-w-[95vw] md:max-w-md">
        
// // // //         {/* THE EXPANDED GRID (The Revelation) */}
// // // //         <AnimatePresence>
// // // //           {isOpen && (
// // // //             <motion.div
// // // //               initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
// // // //               animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
// // // //               exit={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
// // // //               transition={{ type: "spring", stiffness: 300, damping: 25 }}
// // // //               className="
// // // //                 w-full bg-[#0a0a0a]/90 backdrop-blur-2xl 
// // // //                 border border-white/10 rounded-3xl overflow-hidden shadow-2xl
// // // //               "
// // // //             >
// // // //               {/* THE GRID */}
// // // //               <div className="grid grid-cols-4 gap-px bg-white/5">
// // // //                 {MENU_ITEMS.map((item) => {
// // // //                   const isActive = pathname === item.path;
// // // //                   return (
// // // //                     <Link
// // // //                       key={item.path}
// // // //                       href={item.path}
// // // //                       onClick={() => setIsOpen(false)}
// // // //                       className={`
// // // //                         relative group flex flex-col items-center justify-center py-5 gap-2
// // // //                         bg-[#0a0a0a] hover:bg-[#111] transition-colors
// // // //                         ${isActive ? "bg-[#0f0f0f]" : ""}
// // // //                       `}
// // // //                     >
// // // //                       {/* Active Indicator Line */}
// // // //                       {isActive && (
// // // //                         <motion.div 
// // // //                           layoutId="grid-highlight"
// // // //                           className="absolute top-0 left-0 w-full h-0.5 bg-gold-500" 
// // // //                         />
// // // //                       )}

// // // //                       {/* Icon */}
// // // //                       <item.icon 
// // // //                         className={`
// // // //                           w-5 h-5 transition-all duration-300
// // // //                           ${isActive ? "text-gold-500" : "text-white/40 group-hover:text-white"}
// // // //                           ${item.special ? "text-white" : ""}
// // // //                         `}
// // // //                       />

// // // //                       {/* Label */}
// // // //                       <span className={`
// // // //                         text-[8px] font-mono uppercase tracking-widest
// // // //                         ${isActive ? "text-white" : "text-white/30 group-hover:text-white/60"}
// // // //                       `}>
// // // //                         {item.label}
// // // //                       </span>
                      
// // // //                       {/* Special Glow for Join */}
// // // //                       {item.special && (
// // // //                          <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
// // // //                       )}
// // // //                     </Link>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>

// // // //         {/* --- THE TRIGGER BUTTON (The Command) --- */}
// // // //         <motion.button
// // // //           whileTap={{ scale: 0.95 }}
// // // //           onClick={() => setIsOpen(!isOpen)}
// // // //           className={`
// // // //             relative flex items-center gap-4 px-6 py-3 
// // // //             backdrop-blur-xl border 
// // // //             rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]
// // // //             transition-all duration-500
// // // //             ${isOpen 
// // // //               ? "bg-white text-black border-white" 
// // // //               : "bg-[#050505]/80 text-white border-white/10 hover:border-white/30"
// // // //             }
// // // //           `}
// // // //         >
// // // //           {/* 1. CURRENT PAGE INDICATOR (Only visible when closed) */}
// // // //           <AnimatePresence mode="wait">
// // // //             {!isOpen && (
// // // //               <motion.div 
// // // //                 initial={{ opacity: 0, width: 0 }}
// // // //                 animate={{ opacity: 1, width: "auto" }}
// // // //                 exit={{ opacity: 0, width: 0 }}
// // // //                 className="flex items-center gap-3 overflow-hidden"
// // // //               >
// // // //                 <currentItem.icon className="w-4 h-4 text-gold-500" />
// // // //                 <span className="font-mono text-xs uppercase tracking-[0.2em] whitespace-nowrap">
// // // //                   {currentItem.label}
// // // //                 </span>
// // // //                 <div className="w-px h-3 bg-white/20" />
// // // //               </motion.div>
// // // //             )}
// // // //           </AnimatePresence>

// // // //           {/* 2. THE MENU ICON (Morphs) */}
// // // //           <div className="relative w-4 h-4 flex items-center justify-center">
// // // //             <AnimatePresence mode="popLayout">
// // // //               {isOpen ? (
// // // //                 <motion.div 
// // // //                   key="close"
// // // //                   initial={{ rotate: -90, opacity: 0 }}
// // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // //                   exit={{ rotate: 90, opacity: 0 }}
// // // //                 >
// // // //                   <ChevronUp className="w-4 h-4" />
// // // //                 </motion.div>
// // // //               ) : (
// // // //                 <motion.div 
// // // //                   key="open"
// // // //                   initial={{ rotate: 90, opacity: 0 }}
// // // //                   animate={{ rotate: 0, opacity: 1 }}
// // // //                   exit={{ rotate: -90, opacity: 0 }}
// // // //                 >
// // // //                   <Menu className="w-4 h-4" />
// // // //                 </motion.div>
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </div>

// // // //         </motion.button>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import { 
// // //   Home,         // Stage
// // //   Feather,      // Manifesto
// // //   Clock,        // Chronicle
// // //   Film,         // Cinema
// // //   Users,        // Guild
// // //   Mic2,         // Voices
// // //   Fingerprint,  // Legacy
// // //   Sparkles      // Union
// // // } from "lucide-react";

// // // // --- THE ARCHITECTURE (8 Pillars) ---
// // // const MENU_ITEMS = [
// // //   { label: "STAGE", path: "/", icon: Home },
// // //   { label: "MANIFESTO", path: "/about", icon: Feather },
// // //   { label: "CHRONICLE", path: "/events", icon: Clock },
// // //   { label: "CINEMA", path: "/originals", icon: Film },
// // //   { label: "GUILD", path: "/ensemble", icon: Users },
// // //   { label: "VOICES", path: "/artist", icon: Mic2 },
// // //   { label: "LEGACY", path: "/certificate", icon: Fingerprint },
// // //   { label: "UNION", path: "/join", icon: Sparkles, special: true },
// // // ];

// // // export default function PrismMenu() {
// // //   const pathname = usePathname();

// // //   return (
// // //     <>
// // //       {/* =========================================================
// // //           DESKTOP: THE VERTICAL SPINE (Left Side)
// // //           "Make one side all, so no content overlapped"
// // //       ========================================================= */}
// // //       <motion.nav 
// // //         initial={{ x: -100, opacity: 0 }}
// // //         animate={{ x: 0, opacity: 1 }}
// // //         transition={{ delay: 1, type: "spring", stiffness: 200, damping: 25 }}
// // //         className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6"
// // //       >
// // //         {/* The Glass Blade */}
// // //         <div className="
// // //           flex flex-col items-center py-6 gap-5
// // //           bg-[#050505]/80 backdrop-blur-2xl 
// // //           border border-white/10 rounded-full 
// // //           shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // //           relative overflow-hidden
// // //         ">
          
// // //           {/* Noise Texture */}
// // //           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

// // //           {MENU_ITEMS.map((item) => {
// // //             const isActive = pathname === item.path;
            
// // //             return (
// // //               <Link 
// // //                 key={item.path} 
// // //                 href={item.path}
// // //                 className="relative group px-4 flex items-center justify-center"
// // //               >
// // //                 {/* 1. ACTIVE GLOW (Behind) */}
// // //                 {isActive && (
// // //                   <motion.div
// // //                     layoutId="spine-active"
// // //                     className="absolute inset-0 bg-white/10"
// // //                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// // //                   />
// // //                 )}

// // //                 {/* 2. THE GOLD LINE (The Trace) */}
// // //                 {isActive && (
// // //                   <motion.div 
// // //                     layoutId="spine-line"
// // //                     className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-full bg-gold-500 shadow-[0_0_15px_#ffd700]" 
// // //                   />
// // //                 )}

// // //                 {/* 3. ICON */}
// // //                 <item.icon 
// // //                   strokeWidth={1.5}
// // //                   className={`
// // //                     w-5 h-5 transition-all duration-300 relative z-10
// // //                     ${isActive ? "text-gold-500 scale-110" : "text-white/40 group-hover:text-white group-hover:scale-110"}
// // //                     ${item.special && !isActive ? "text-red-500/80 group-hover:text-red-500" : ""}
// // //                   `} 
// // //                 />

// // //                 {/* 4. LABEL (Slides out from Left) */}
// // //                 <span className={`
// // //                   absolute left-full ml-6 px-3 py-1.5 
// // //                   bg-[#0a0a0a] border border-white/10 rounded-lg
// // //                   text-[10px] font-mono uppercase tracking-[0.2em] text-white
// // //                   whitespace-nowrap shadow-xl opacity-0 -translate-x-2 pointer-events-none
// // //                   transition-all duration-300 z-50
// // //                   ${isActive ? "opacity-0" : "group-hover:opacity-100 group-hover:translate-x-0"}
// // //                 `}>
// // //                   {item.label}
// // //                   {/* Arrow pointing left */}
// // //                   <div className="absolute top-1/2 -translate-y-1/2 right-full border-4 border-transparent border-r-[#0a0a0a]" />
// // //                 </span>
// // //               </Link>
// // //             );
// // //           })}
// // //         </div>
// // //       </motion.nav>

// // //       {/* =========================================================
// // //           MOBILE: THE PANORAMA DECK (Bottom)
// // //           All 8 items visible. No scrolling. No hiding.
// // //       ========================================================= */}
// // //       <motion.nav 
// // //         initial={{ y: 100, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ delay: 1, type: "spring", stiffness: 200, damping: 25 }}
// // //         className="md:hidden fixed bottom-6 left-4 right-4 z-50"
// // //         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
// // //       >
// // //         <div className="
// // //           flex items-center justify-between px-2 py-3
// // //           bg-[#050505]/90 backdrop-blur-3xl 
// // //           border border-white/10 rounded-2xl
// // //           shadow-[0_0_40px_rgba(0,0,0,0.6)]
// // //         ">
// // //           {MENU_ITEMS.map((item) => {
// // //             const isActive = pathname === item.path;
            
// // //             return (
// // //               <Link 
// // //                 key={item.path} 
// // //                 href={item.path}
// // //                 className="relative group flex-1 flex flex-col items-center justify-center gap-1"
// // //               >
// // //                 {/* TOUCH TARGET (Invisible but large) */}
// // //                 <div className="absolute inset-0 -top-4 -bottom-4 z-0" />

// // //                 {/* ICON */}
// // //                 <item.icon 
// // //                   strokeWidth={1.5}
// // //                   className={`
// // //                     w-5 h-5 transition-all duration-300 z-10
// // //                     ${isActive ? "text-gold-500 -translate-y-1" : "text-white/30"}
// // //                     ${item.special && !isActive ? "text-red-500/60" : ""}
// // //                   `} 
// // //                 />

// // //                 {/* ACTIVE DOT (The Anchor) */}
// // //                 {isActive && (
// // //                   <motion.div 
// // //                     layoutId="mobile-dot"
// // //                     className="absolute -bottom-1.5 w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_10px_#ffd700]" 
// // //                   />
// // //                 )}
// // //               </Link>
// // //             );
// // //           })}
// // //         </div>
// // //       </motion.nav>
// // //     </>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { 
// //   Home,         // Stage
// //   Feather,      // Manifesto
// //   Clock,        // Chronicle
// //   Film,         // Cinema
// //   Users,        // Guild
// //   Mic2,         // Voices
// //   Fingerprint,  // Legacy
// //   Sparkles      // Union
// // } from "lucide-react";

// // // --- THE MYTHOLOGY ---
// // const MENU_ITEMS = [
// //   { label: "STAGE", path: "/", icon: Home },
// //   { label: "MANIFESTO", path: "/about", icon: Feather },
// //   { label: "CHRONICLE", path: "/events", icon: Clock },
// //   { label: "CINEMA", path: "/originals", icon: Film },
// //   { label: "GUILD", path: "/ensemble", icon: Users },
// //   { label: "VOICES", path: "/artist", icon: Mic2 },
// //   { label: "LEGACY", path: "/certificate", icon: Fingerprint },
// //   { label: "UNION", path: "/join", icon: Sparkles, special: true },
// // ];

// // export default function PrismMenu() {
// //   const pathname = usePathname();

// //   return (
// //     <>
// //       {/* =========================================================
// //           DESKTOP: THE RIGHT WING (Vertical, Floating)
// //           Why Right? Because the Right is the "Future".
// //           It feels like a bookmark in a beautiful novel.
// //       ========================================================= */}
// //       <motion.nav 
// //         initial={{ x: 100, opacity: 0 }}
// //         animate={{ x: 0, opacity: 1 }}
// //         transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
// //         className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4"
// //       >
// //         <div className="
// //           flex flex-col items-center py-4 gap-3
// //           bg-[#0a0a0a]/60 backdrop-blur-xl 
// //           border border-white/10 rounded-full 
// //           shadow-[0_0_30px_rgba(0,0,0,0.5)]
// //           relative overflow-visible
// //         ">
          
// //           {MENU_ITEMS.map((item) => {
// //             const isActive = pathname === item.path;
            
// //             return (
// //               <Link 
// //                 key={item.path} 
// //                 href={item.path}
// //                 className="relative group p-3 flex items-center justify-center"
// //               >
// //                 {/* 1. ACTIVE ORBIT (The Selection) */}
// //                 {isActive && (
// //                   <motion.div
// //                     layoutId="wing-active"
// //                     className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
// //                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// //                   />
// //                 )}

// //                 {/* 2. ICON */}
// //                 <item.icon 
// //                   strokeWidth={1.5}
// //                   className={`
// //                     w-5 h-5 transition-all duration-300 relative z-10
// //                     ${isActive ? "text-gold-500 scale-110" : "text-white/40 group-hover:text-white group-hover:scale-110"}
// //                     ${item.special && !isActive ? "text-red-500/80 group-hover:text-red-500" : ""}
// //                   `} 
// //                 />

// //                 {/* 3. TOOLTIP (Whispers from the Left) */}
// //                 <div className="absolute right-full mr-6 pointer-events-none">
// //                   <span className={`
// //                     block px-3 py-1.5 
// //                     bg-[#0a0a0a] border border-white/10 rounded-lg
// //                     text-[9px] font-mono uppercase tracking-[0.2em] text-white
// //                     whitespace-nowrap shadow-xl 
// //                     transition-all duration-300 transform
// //                     ${isActive 
// //                       ? "opacity-0 translate-x-2" 
// //                       : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
// //                     }
// //                   `}>
// //                     {item.label}
// //                     {/* Tiny line connecting tooltip to menu */}
// //                     <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-1 h-px bg-white/20" />
// //                   </span>
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </div>
// //       </motion.nav>

// //       {/* =========================================================
// //           MOBILE: THE INFINITY SCROLL (Bottom)
// //           We add "Padding" to the container so the first/last items 
// //           aren't stuck to the edge. We use "Snap" scrolling.
// //       ========================================================= */}
// //       <motion.nav 
// //         initial={{ y: 100, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ delay: 1, type: "spring", stiffness: 200, damping: 25 }}
// //         className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center"
// //         style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
// //       >
// //         <div className="
// //           w-[90vw] max-w-[400px]
// //           bg-[#050505]/80 backdrop-blur-2xl 
// //           border border-white/10 rounded-2xl
// //           shadow-[0_0_40px_rgba(0,0,0,0.6)]
// //           overflow-hidden relative
// //         ">
          
// //           {/* FADE MASKS (To show it scrolls) */}
// //           <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/50 to-transparent z-20 pointer-events-none" />
// //           <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/50 to-transparent z-20 pointer-events-none" />

// //           {/* SCROLL CONTAINER */}
// //           <div className="
// //             flex items-center overflow-x-auto no-scrollbar 
// //             px-2 py-3 gap-1 snap-x snap-mandatory
// //           ">
// //             {MENU_ITEMS.map((item) => {
// //               const isActive = pathname === item.path;
              
// //               return (
// //                 <Link 
// //                   key={item.path} 
// //                   href={item.path}
// //                   className="
// //                     relative group flex-shrink-0 w-14 h-12 
// //                     flex flex-col items-center justify-center 
// //                     snap-center
// //                   "
// //                 >
// //                   {/* ICON */}
// //                   <item.icon 
// //                     strokeWidth={1.5}
// //                     className={`
// //                       w-5 h-5 transition-all duration-300 z-10
// //                       ${isActive ? "text-gold-500 -translate-y-1" : "text-white/30"}
// //                       ${item.special && !isActive ? "text-red-500/60" : ""}
// //                     `} 
// //                   />

// //                   {/* ACTIVE DOT */}
// //                   {isActive && (
// //                     <motion.div 
// //                       layoutId="mobile-dot"
// //                       className="absolute bottom-2 w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_10px_#ffd700]" 
// //                     />
// //                   )}
// //                 </Link>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </motion.nav>
// //     </>
// //   );
// // }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { 
//   Home,         // Stage
//   Feather,      // Manifesto
//   Clock,        // Chronicle
//   Film,         // Cinema
//   Users,        // Guild
//   Mic2,         // Voices
//   Fingerprint,  // Legacy
//   Sparkles      // Union
// } from "lucide-react";

// // --- THE CONSTELLATION ---
// const MENU_ITEMS = [
//   { label: "STAGE", path: "/", icon: Home },
//   { label: "MANIFESTO", path: "/about", icon: Feather },
//   { label: "CHRONICLE", path: "/events", icon: Clock },
//   { label: "CINEMA", path: "/originals", icon: Film },
//   { label: "GUILD", path: "/ensemble", icon: Users },
//   { label: "VOICES", path: "/artist", icon: Mic2 },
//   { label: "LEGACY", path: "/certificate", icon: Fingerprint },
//   { label: "UNION", path: "/join", icon: Sparkles, special: true },
// ];

// export default function PrismMenu() {
//   const pathname = usePathname();

//   return (
//     <motion.nav 
//       initial={{ y: 100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
//       // POSITIONING: Bottom Right, with safe padding
//       className="fixed bottom-6 right-6 z-50 max-w-[calc(100vw-3rem)]"
//       style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
//     >
//       {/* THE GLASS STRIP */}
//       <div className="
//         flex items-center gap-1 p-2
//         bg-[#050505]/80 backdrop-blur-2xl 
//         border border-white/10 rounded-2xl
//         shadow-[0_0_40px_rgba(0,0,0,0.5)]
//         overflow-x-auto no-scrollbar
//         mask-image: linear-gradient(to right, transparent, black 10px)
//       ">
        
//         {/* Cinematic Noise Overlay */}
//         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none rounded-2xl" />

//         {MENU_ITEMS.map((item) => {
//           const isActive = pathname === item.path;
          
//           return (
//             <Link 
//               key={item.path} 
//               href={item.path}
//               className="relative group p-2 rounded-xl transition-all duration-300 flex-shrink-0"
//             >
//               {/* 1. ACTIVE HIGHLIGHT (Subtle Glass Block) */}
//               {isActive && (
//                 <motion.div
//                   layoutId="ghost-active"
//                   className="absolute inset-0 bg-white/10 rounded-xl border border-white/5"
//                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                 />
//               )}

//               {/* 2. ICON */}
//               <div className="relative z-10 p-1">
//                  <item.icon 
//                     strokeWidth={1.5}
//                     className={`
//                       w-5 h-5 transition-all duration-300
//                       ${isActive ? "text-gold-500 scale-110" : "text-white/40 group-hover:text-white group-hover:scale-110"}
//                       ${item.special && !isActive ? "text-red-500/80 group-hover:text-red-500" : ""}
//                     `} 
//                  />
//               </div>

//               {/* 3. TOOLTIP LABEL (Floats Up on Hover) */}
//               {/* Using group-hover to reveal. Absolute positioning relative to the icon. */}
//               <div className="
//                 absolute bottom-full mb-4 left-1/2 -translate-x-1/2 
//                 pointer-events-none opacity-0 translate-y-2 scale-90
//                 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
//                 transition-all duration-200 ease-out z-50
//               ">
//                 <div className="
//                   bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-lg
//                   text-[10px] font-mono uppercase tracking-[0.2em] text-white
//                   whitespace-nowrap shadow-xl flex flex-col items-center
//                 ">
//                   {item.label}
//                   {/* Tiny arrow pointing down */}
//                   <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#0a0a0a]" />
//                 </div>
//               </div>

//               {/* MOBILE ACTIVE DOT (Since hover doesn't exist on touch) */}
//               {isActive && (
//                 <motion.div 
//                   layoutId="ghost-dot"
//                   className="md:hidden absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full" 
//                 />
//               )}
//             </Link>
//           );
//         })}
//       </div>
//     </motion.nav>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home,         // Stage
  Feather,      // Manifesto
  Clock,        // Chronicle
  Film,         // Cinema
  Users,        // Guild
  Mic2,         // Voices
  Fingerprint,  // Legacy
  Sparkles      // Union
} from "lucide-react";

// THE OCTAVE (8 Notes)
const MENU_ITEMS = [
  { label: "STAGE", path: "/", icon: Home },
  { label: "Originals", path: "/originals", icon: Film },
  
  { label: "Events", path: "/events", icon: Clock },
  
  { label: "Ensemble", path: "/ensemble", icon: Users },
  { label: "Artists", path: "/artist", icon: Mic2 },
  // { label: "LEGACY", path: "/certificate", icon: Fingerprint },
  { label: "About-Us", path: "/about", icon: Feather },
  { label: "Join", path: "/join", icon: Sparkles, special: true },
];

export default function PrismMenu() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      // ANCHOR: Bottom Right
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 max-w-[calc(100vw-2rem)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} 
    >
      {/* THE GLASS CAPSULE */}
      <div className="
        flex items-center gap-1 p-2
        bg-[#0a0a0a]/80 backdrop-blur-2xl 
        border border-white/10 rounded-full
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
        overflow-x-auto no-scrollbar
      ">
        
        {/* Cinematic Grain */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none rounded-full" />

        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className="relative group flex items-center justify-center outline-none rounded-full"
            >
              {/* 1. ACTIVE HIGHLIGHT (The Glow) */}
              {isActive && (
                <motion.div
                  layoutId="kinetic-active"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* 2. THE CONTENT CONTAINER (Icon + Text) */}
              <div className="
                flex items-center px-3 py-2 md:py-3
                transition-all duration-500 ease-out
              ">
                
                {/* ICON */}
                <item.icon 
                  strokeWidth={1.5}
                  className={`
                    w-5 h-5 flex-shrink-0 transition-all duration-300
                    ${isActive ? "text-gold-500" : "text-white/40 group-hover:text-white"}
                    ${item.special && !isActive ? "text-red-500/80 group-hover:text-red-500" : ""}
                  `} 
                />

                {/* TEXT (The Kinetic Reveal) */}
                {/* Desktop: Reveals on Hover. Mobile: Hidden to save space, relies on active state or icon */}
                <div className="
                  relative overflow-hidden w-0 
                  group-hover:w-auto group-focus:w-auto
                  transition-[width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                ">
                  <span className={`
                    block pl-2 pr-1
                    text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75
                    ${isActive ? "text-white" : "text-white/60"}
                  `}>
                    {item.label}
                  </span>
                </div>

                {/* 3. ACTIVE TEXT (Always visible IF active? Optional. Let's keep it kinetic for drama) */}
                {/* If you want the Active tab to ALWAYS show text, uncomment below and adjust logic above.
                    But "Kinetic" usually means only expand on interaction. */}

              </div>

              {/* MOBILE DOT (Since hover is hard on phones) */}
              {isActive && (
                <motion.div 
                  layoutId="kinetic-dot"
                  className="md:hidden absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_10px_#ffd700]" 
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}