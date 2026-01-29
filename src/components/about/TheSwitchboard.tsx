"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";

export default function TheSwitchboard() {
  return (
    <section className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono selection:bg-red-500/30 pt-24 pb-12 px-4 md:px-12 flex flex-col">
      
      {/* 1. HEADER: MANIFESTO TYPEWRITER */}
      <div className="border-b border-white/10 pb-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              <h1 className="text-6xl md:text-[8vw] leading-[0.8] font-serif tracking-tighter mb-8 text-white mix-blend-difference">
                  WE ARE <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">THE SIGNAL.</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
                  <p className="text-sm md:text-lg text-white/50 font-serif italic leading-relaxed">
                      Aayam is an experiment in empathy. Founded in the corridors of IIT Madras, we exist to dismantle the wall between the actor and the audience. We do not perform plays; we engineer experiences.
                  </p>
                  <div className="flex flex-col justify-end items-start md:items-end">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 mb-2 animate-pulse">
                          ● Transmission Active
                      </span>
                      <span className="text-xs text-white/30">
                          LAT: 12.9915° N / LONG: 80.2337° E
                      </span>
                  </div>
              </div>
          </motion.div>
      </div>

      {/* 2. THE CONTROL PANEL (Links) */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 border border-white/10">
          
          {/* BLOCK A: LOCATION */}
          <div className="md:col-span-4 bg-[#0a0a0a] p-8 flex flex-col justify-between group hover:bg-[#111] transition-colors">
              <MapPin className="w-8 h-8 text-white/20 group-hover:text-red-500 transition-colors mb-12" />
              <div>
                  <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Base of Operations</h3>
                  <p className="text-sm leading-relaxed text-white/80">
                      Students Activity Center (SAC)<br/>
                      IIT Madras, Chennai<br/>
                      Tamil Nadu, 600036
                  </p>
              </div>
          </div>

          {/* BLOCK B: DIGITAL FREQUENCIES */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
              
              {/* INSTAGRAM */}
              <a href="https://instagram.com/aayam_iitm" target="_blank" className="bg-[#0a0a0a] p-8 flex items-center justify-between group hover:bg-white hover:text-black transition-all duration-500">
                  <div className="flex items-center gap-4">
                      <Instagram className="w-6 h-6 text-white/40 group-hover:text-black" />
                      <div>
                          <span className="block text-[10px] uppercase tracking-widest opacity-50">Visual Feed</span>
                          <span className="text-xl font-serif">@aayam_iitm</span>
                      </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* EMAIL */}
              <a href="mailto:secretary.aayam@iitm.ac.in" className="bg-[#0a0a0a] p-8 flex items-center justify-between group hover:bg-white hover:text-black transition-all duration-500">
                   <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-white/40 group-hover:text-black" />
                      <div>
                          <span className="block text-[10px] uppercase tracking-widest opacity-50">Direct Line</span>
                          <span className="text-xl font-serif">secretary.aayam</span>
                      </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* YOUTUBE */}
              <a href="https://youtube.com" target="_blank" className="bg-[#0a0a0a] p-8 flex items-center justify-between group hover:bg-white hover:text-black transition-all duration-500">
                   <div className="flex items-center gap-4">
                      <Youtube className="w-6 h-6 text-white/40 group-hover:text-black" />
                      <div>
                          <span className="block text-[10px] uppercase tracking-widest opacity-50">Archives</span>
                          <span className="text-xl font-serif">Aayam Originals</span>
                      </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

               {/* LINKEDIN */}
               <a href="https://linkedin.com" target="_blank" className="bg-[#0a0a0a] p-8 flex items-center justify-between group hover:bg-white hover:text-black transition-all duration-500">
                   <div className="flex items-center gap-4">
                      <Linkedin className="w-6 h-6 text-white/40 group-hover:text-black" />
                      <div>
                          <span className="block text-[10px] uppercase tracking-widest opacity-50">Professional</span>
                          <span className="text-xl font-serif">/company/aayam</span>
                      </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

          </div>
      </div>

      {/* 3. FOOTER: THE CORE TEAM LINK */}
      <div className="mt-12 text-center">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
              Looking for the Architects?
          </p>
          <a href="/join" className="inline-block px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Join The Core</span>
          </a>
      </div>

    </section>
  );
}