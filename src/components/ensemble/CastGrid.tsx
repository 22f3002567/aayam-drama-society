"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/types/schema";

export default function CastGrid({ members }: { members: TeamMember[] }) {
  // Filter out the Secretary (since they get their own section)
  const cast = members.filter(m => m.role_student !== 'Secretary');

  if (cast.length === 0) return null;

  return (
    <section className="w-full px-6 md:px-24 py-24 bg-[#050505]">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-24">
        <span className="text-gold-500 font-mono text-[10px] uppercase tracking-[0.4em]">
          The Collective
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-white">
          Dramatis Personae
        </h2>
      </div>

      {/* THE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
        {cast.map((member, index) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group flex flex-col gap-6"
          >
            {/* IMAGE FRAME */}
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-white/5 bg-neutral-900">
               {member.image_url ? (
                  <img 
                    src={member.image_url} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
               ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                     <span className="text-neutral-600 font-mono text-[10px]">NO IMAGE</span>
                  </div>
               )}
               
               {/* Overlay Name on Hover */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* TEXT INFO */}
            <div className="flex flex-col gap-1 border-l border-gold-500/30 pl-4 transition-all duration-500 group-hover:border-gold-500">
               <h3 className="text-xl text-white font-serif tracking-wide group-hover:text-gold-500 transition-colors">
                 {member.name}
               </h3>
               <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                 {member.role_student}
               </span>
               <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                 {member.department}
               </span>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}