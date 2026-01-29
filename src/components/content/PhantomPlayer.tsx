"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Youtube } from "lucide-react"; 
import Image from "next/image";
import YouTube from "react-youtube"; // The wrapper

interface PhantomPlayerProps {
  youtubeId: string;
  thumbnail: string;
  title: string;
}

export default function PhantomPlayer({ youtubeId, thumbnail, title }: PhantomPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  // YouTube Player Options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const handleEnd = () => {
    setIsEnded(true);
  };

  const handleReplay = () => {
    setIsEnded(false);
    setIsPlaying(true); // Triggers re-render of player
  };

  return (
    <div className="relative w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden group shadow-2xl">
      
      {/* 1. THE CURTAIN (Poster) */}
      <AnimatePresence>
        {!isPlaying && !isEnded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <Image src={thumbnail} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(251,191,36,0.2)] group-hover:bg-amber-500/90 transition-colors"
              >
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white text-xl font-serif">{title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE ENGINE (YouTube) */}
      {isPlaying && !isEnded && (
        <div className="absolute inset-0">
             <YouTube 
                videoId={youtubeId} 
                opts={opts} 
                className="w-full h-full" 
                onEnd={handleEnd} // <--- The Magic Hook
            />
        </div>
      )}

      {/* 3. THE END SCREEN (The Upgrade) */}
      {isEnded && (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="absolute inset-0 z-20 bg-black/90 flex flex-col items-center justify-center gap-6"
        >
            <div className="text-center">
                <p className="text-white/50 text-xs font-mono uppercase tracking-widest mb-2">Did you enjoy the show?</p>
                <h3 className="text-white text-2xl font-serif italic">"Applause is the only truth."</h3>
            </div>

            <div className="flex gap-4">
                {/* Replay Button */}
                <button 
                    onClick={handleReplay}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    Replay
                </button>

                {/* Conversion Button: Subscribe */}
                <a 
                    href="https://youtube.com/@AayamIITM" // Your Channel Link
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] text-white hover:bg-red-600 transition-colors shadow-lg"
                >
                    <Youtube className="w-4 h-4" />
                    Subscribe to Aayam
                </a>
            </div>
        </motion.div>
      )}
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play } from "lucide-react"; // Icon library we installed
// import Image from "next/image";

// interface PhantomPlayerProps {
//   youtubeId: string;
//   thumbnail: string;
//   title: string;
// }

// export default function PhantomPlayer({ youtubeId, thumbnail, title }: PhantomPlayerProps) {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div className="relative w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden group shadow-2xl">
      
//       <AnimatePresence>
//         {!isPlaying && (
//           <motion.div
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }} // Slow curtain fade
//             className="absolute inset-0 z-10 cursor-pointer"
//             onClick={() => setIsPlaying(true)}
//           >
//             {/* Layer 1: The High-Res Poster */}
//             <Image 
//               src={thumbnail} 
//               alt={title} 
//               fill 
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//             />
            
//             {/* Layer 2: The Cinematic Vignette (Gradient) */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//             {/* Layer 3: The Custom Play Button */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(251,191,36,0.2)] group-hover:bg-amber-500/90 transition-colors"
//               >
//                 <Play className="w-6 h-6 text-white fill-white ml-1" />
//               </motion.div>
//             </div>

//             {/* Layer 4: Title Overlay */}
//             <div className="absolute bottom-0 left-0 p-6">
//               <p className="text-white/60 text-xs font-mono tracking-widest uppercase mb-1">Watch Now</p>
//               <h3 className="text-white text-xl font-serif">{title}</h3>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* THE ENGINE: Hidden YouTube Player */}
//       {isPlaying && (
//         <iframe
//           src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&modestbranding=1&rel=0&controls=1`}
//           title={title}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="absolute inset-0 w-full h-full"
//         />
//       )}
//     </div>
//   );
// }