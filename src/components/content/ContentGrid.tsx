"use client";

import { motion } from "framer-motion";
import { Video } from "@/lib/content";
import PhantomPlayer from "./PhantomPlayer";

interface ContentGridProps {
  videos: Video[];
  currentMoodId: string;
}

export default function ContentGrid({ videos, currentMoodId }: ContentGridProps) {
  // ELITE LOGIC: Filter the content
  const filteredVideos = currentMoodId === "all" 
    ? videos 
    : videos.filter(v => v.mood === currentMoodId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredVideos.map((video, index) => (
        <motion.div
          key={video.id}
          layout // FRAMER MAGIC: Animates the reshuffling when filter changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, delay: index * 0.1 }} // Staggered entrance
        >
          {/* The Player */}
          <PhantomPlayer 
            youtubeId={video.youtubeId} 
            thumbnail={video.thumbnail} 
            title={video.title}
          />

          {/* Metadata Bar (The IITM Student Touch) */}
          <div className="flex justify-between items-start mt-3 px-1">
            <div>
               <p className="text-white/40 text-[10px] uppercase tracking-widest">
                 Directed by {video.director}
               </p>
               <p className="text-amber-500/60 text-[10px] uppercase tracking-widest mt-0.5">
                 {video.mood} • {video.duration}
               </p>
            </div>
            {/* Share Button Placeholder */}
            <button className="text-white/20 hover:text-white transition-colors">
               <span className="sr-only">Share</span>
               {/* Simple Share Icon SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
          </div>
        </motion.div>
      ))}

      {/* Empty State Handling */}
      {filteredVideos.length === 0 && (
        <div className="col-span-full py-20 text-center text-white/30 font-serif italic">
           No stories found in this dimension yet...
        </div>
      )}
    </div>
  );
}