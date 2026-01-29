"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Pause } from "lucide-react"; 
import Image from "next/image";
import { Member } from "@/lib/team";

export default function SpotlightCard({ member }: { member: Member }) {
  const [isLit, setIsLit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track audio state
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio Object once
  useEffect(() => {
    audioRef.current = new Audio(member.voiceNote);
    audioRef.current.volume = 0.6;
    
    // Auto-reset when audio finishes
    audioRef.current.onended = () => {
       setIsPlaying(false);
       setIsLit(false);
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [member.voiceNote]);

  const toggleSpotlight = () => {
    if (!audioRef.current) return;

    if (!isLit) {
      // TURN ON
      setIsLit(true);
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Audio block:", err));
    } else {
      // TURN OFF
      setIsLit(false);
      setIsPlaying(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative group w-full aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 transition-colors hover:border-white/10">
      
      {/* 1. Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={member.image} 
          alt={member.name}
          fill
          className={`object-cover transition-all duration-700 ${
            isLit ? "grayscale-0 scale-105" : "grayscale opacity-60 group-hover:opacity-80"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* 2. THE VISUAL EQUALIZER BUTTON (The Upgrade) */}
      <button 
        onClick={toggleSpotlight}
        className={`absolute top-4 right-4 z-20 h-10 px-3 rounded-full backdrop-blur-md border transition-all duration-300 flex items-center justify-center gap-2 ${
          isLit 
            ? "bg-amber-500 text-black border-amber-400 w-auto shadow-[0_0_15px_rgba(245,158,11,0.6)]" 
            : "bg-black/40 text-white/50 border-white/10 w-10 hover:bg-black/60 hover:text-white"
        }`}
      >
        {isLit ? (
           // ACTIVE STATE: Dancing Bars
           <div className="flex items-center gap-[2px] h-4">
              {[1, 2, 3, 4].map((bar) => (
                <motion.div
                  key={bar}
                  animate={{ height: [4, 12, 4] }} // Height bounces
                  transition={{ 
                    duration: 0.4, 
                    repeat: Infinity, 
                    delay: bar * 0.1, // Stagger effect
                    ease: "easeInOut" 
                  }}
                  className="w-[3px] bg-black rounded-full"
                />
              ))}
           </div>
        ) : (
           // IDLE STATE: Static Mic
           <Mic className="w-4 h-4" />
        )}
      </button>

      {/* 3. Text Layer */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10">
        <h3 className="text-white text-2xl font-serif font-bold tracking-wide">
          {member.name}
        </h3>
        
        <div className="h-6 mt-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {isLit ? (
              <motion.p
                key="artist"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-amber-400 text-xs font-mono uppercase tracking-widest"
              >
                Now Playing: {member.roleArtist}
              </motion.p>
            ) : (
              <motion.p
                key="student"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-white/50 text-xs font-sans tracking-wide"
              >
                {member.roleStudent}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mic, User } from "lucide-react"; // Icons
// import Image from "next/image";
// import { Member } from "@/lib/team";

// export default function SpotlightCard({ member }: { member: Member }) {
//   const [isLit, setIsLit] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const toggleSpotlight = () => {
//     // If turning ON
//     if (!isLit) {
//       setIsLit(true);
//       // Play Audio (If it exists)
//       if (!audioRef.current) {
//         audioRef.current = new Audio(member.voiceNote);
//         audioRef.current.volume = 0.5; // Gentle volume
//       }
//       audioRef.current.play().catch(() => console.log("Audio interaction needed")); // Handle browser autoplay block
//     } 
//     // If turning OFF
//     else {
//       setIsLit(false);
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }
//     }
//   };

//   return (
//     <div className="relative group w-full aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
      
//       {/* 1. The Image Layer */}
//       <div className="absolute inset-0 z-0">
//         <Image 
//           src={member.image} 
//           alt={member.name}
//           fill
//           className={`object-cover transition-all duration-700 ${
//             isLit ? "grayscale-0 scale-105" : "grayscale opacity-60 group-hover:opacity-80"
//           }`}
//         />
//         {/* Shadow Gradient for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
//       </div>

//       {/* 2. The Spotlight Interaction (Top Right) */}
//       <button 
//         onClick={toggleSpotlight}
//         className={`absolute top-4 right-4 z-20 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
//           isLit 
//             ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)]" 
//             : "bg-black/30 text-white/50 border-white/10 hover:bg-black/50 hover:text-white"
//         }`}
//       >
//         <Mic className={`w-5 h-5 ${isLit ? "animate-pulse" : ""}`} />
//       </button>

//       {/* 3. The Dual-Soul Text (Bottom) */}
//       <div className="absolute bottom-0 left-0 w-full p-6 z-10">
//         <h3 className="text-white text-2xl font-serif font-bold tracking-wide">
//           {member.name}
//         </h3>
        
//         <div className="h-6 mt-1 relative overflow-hidden">
//           <AnimatePresence mode="wait">
//             {isLit ? (
//               // STATE B: THE ARTIST
//               <motion.p
//                 key="artist"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 className="text-amber-400 text-xs font-mono uppercase tracking-widest"
//               >
//                 {member.roleArtist}
//               </motion.p>
//             ) : (
//               // STATE A: THE STUDENT
//               <motion.p
//                 key="student"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 className="text-white/50 text-xs font-sans tracking-wide"
//               >
//                 {member.roleStudent}
//               </motion.p>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Tags */}
//         <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//            {member.tags.map(tag => (
//              <span key={tag} className="text-[9px] px-2 py-1 rounded bg-white/10 text-white/70 border border-white/5">
//                {tag}
//              </span>
//            ))}
//         </div>
//       </div>

//     </div>
//   );
// }