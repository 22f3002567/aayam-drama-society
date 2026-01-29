
// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { Mail, Instagram, Youtube, Link, Zap, Database } from "lucide-react";

// // // // export default function TheManifesto() {
// // // //   return (
// // // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] pt-32 pb-40 px-6 md:px-24 flex justify-center relative">
      
// // // //       {/* 1. ATMOSPHERE: THE BALANCE */}
// // // //       {/* Subtle blue (Data) mixing with Red (Passion) */}
// // // //       <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
// // // //       <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

// // // //       <div className="max-w-3xl w-full relative z-10">
          
// // // //           {/* 2. THE HOOK: THE DUALITY */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1.2, ease: "easeOut" }}
// // // //             className="mb-32 text-center"
// // // //           >
// // // //               <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
// // // //                   <div className="flex items-center gap-2">
// // // //                       <Database className="w-3 h-3 text-blue-400" />
// // // //                       <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Data</span>
// // // //                   </div>
// // // //                   <span className="text-white/20">|</span>
// // // //                   <div className="flex items-center gap-2">
// // // //                       <Zap className="w-3 h-3 text-gold-400" />
// // // //                       <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Electronics</span>
// // // //                   </div>
// // // //               </div>
              
// // // //               <h1 className="text-4xl md:text-6xl font-serif leading-[1.2] text-white mb-10">
// // // //                   Code compiles.<br/>
// // // //                   Circuits connect.<br/>
// // // //                   <span className="text-red-500 italic">But Stories change us.</span>
// // // //               </h1>

// // // //               <div className="h-px w-16 bg-white/20 mx-auto mb-10" />

// // // //               <div className="text-lg md:text-xl font-serif leading-relaxed text-white/70 space-y-8 max-w-2xl mx-auto">
// // // //                   <p>
// // // //                       We are the students of the <strong>IIT Madras BS Degree</strong>.
// // // //                   </p>
// // // //                   <p>
// // // //                       We spend our days mastering the logic of the world. We analyze datasets to predict the future. We design systems to power the present.
// // // //                   </p>
// // // //                   <p>
// // // //                       But we know that logic is not enough.
// // // //                   </p>
// // // //                   <p>
// // // //                       <strong>Aayam</strong> is where the logic ends and the magic begins.
// // // //                       It is where we stop being analysts and engineers, and start being <em>Human</em>.
// // // //                       It is where we explore the things that cannot be coded: Anger. Joy. Grief. Love.
// // // //                   </p>
// // // //                   <p className="text-white text-2xl italic pt-4">
// // // //                       "We use our Minds for the degree.<br/> 
// // // //                       We use our Hearts for Aayam."
// // // //                   </p>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 3. THE SIGNATURE (Siddharth) */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             transition={{ duration: 1, delay: 0.2 }}
// // // //             className="mb-32 flex flex-col items-center"
// // // //           >
// // // //               <div className="text-center relative group cursor-default">
// // // //                   <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
// // // //                       From one student to another,
// // // //                   </p>
                  
// // // //                   <h3 className="text-5xl md:text-6xl font-serif text-white mb-2 signature-font">
// // // //                       Siddharth
// // // //                   </h3>
                  
// // // //                   <div className="relative mt-2">
// // // //                       <span className="block text-xs font-mono text-white/20 uppercase tracking-widest group-hover:text-red-500 transition-colors duration-500">
// // // //                           The Secretary
// // // //                       </span>
// // // //                       <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-gold-500 font-serif italic text-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
// // // //                           (Just a believer in Art.)
// // // //                       </span>
// // // //                   </div>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 4. THE CONNECTION */}
// // // //           <div className="border-t border-white/10 pt-16">
// // // //               <div className="text-center mb-12">
// // // //                   <h3 className="font-serif text-2xl text-white mb-2">
// // // //                       This is your home too.
// // // //                   </h3>
// // // //                   <p className="text-white/40 font-serif italic text-sm">
// // // //                       Come say hello.
// // // //                   </p>
// // // //               </div>

// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
// // // //                   {/* EMAIL */}
// // // //                   <a href="mailto:secretary.aayam@iitm.ac.in" className="group p-6 rounded-xl border border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 text-center">
// // // //                       <Mail className="w-5 h-5 text-white/40 mx-auto mb-3 group-hover:text-white transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">Write to me</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block">secretary.aayam@iitm.ac.in</span>
// // // //                   </a>

// // // //                   {/* INSTAGRAM */}
// // // //                   <a href="https://instagram.com/aayam_iitm" target="_blank" className="group p-6 rounded-xl border border-white/5 hover:border-pink-500/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 text-center">
// // // //                       <Instagram className="w-5 h-5 text-white/40 mx-auto mb-3 group-hover:text-pink-500 transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">See the family</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block">@aayam_iitm</span>
// // // //                   </a>

// // // //                   {/* LINKTREE */}
// // // //                   <a href="https://linktr.ee/aayam_iitm" target="_blank" className="group p-6 rounded-xl border border-white/5 hover:border-gold-500/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 text-center">
// // // //                       <Link className="w-5 h-5 text-white/40 mx-auto mb-3 group-hover:text-gold-500 transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">Everything else</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block">The Hub</span>
// // // //                   </a>

// // // //                    {/* YOUTUBE */}
// // // //                    <a href="https://youtube.com" target="_blank" className="group p-6 rounded-xl border border-white/5 hover:border-red-600/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 text-center">
// // // //                       <Youtube className="w-5 h-5 text-white/40 mx-auto mb-3 group-hover:text-red-600 transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">Watch our work</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block">Aayam Originals</span>
// // // //                   </a>

// // // //               </div>
// // // //           </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { Mail, Instagram, Youtube, Link, Heart } from "lucide-react";

// // // // export default function TheManifesto() {
// // // //   return (
// // // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] pt-32 pb-40 px-6 md:px-24 flex justify-center relative overflow-hidden">
      
// // // //       {/* 1. THE VISUAL HOOK: A SINGLE BEATING HEART IN THE VOID */}
// // // //       <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1px] h-[100px] bg-gradient-to-b from-transparent via-red-500 to-transparent blur-[1px] opacity-50" />
// // // //       <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

// // // //       <div className="max-w-2xl w-full relative z-10">
          
// // // //           {/* 2. THE TEXTUAL HOOK: THE REALIZATION */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1.5 }}
// // // //             className="text-center mb-32"
// // // //           >
// // // //               <h1 className="text-4xl md:text-6xl font-serif leading-tight text-white mb-8">
// // // //                   The screen is cold.
// // // //               </h1>
              
// // // //               <div className="space-y-8 text-lg md:text-xl font-serif leading-relaxed text-white/60">
// // // //                   <p>
// // // //                       You feel it, don't you?
// // // //                   </p>
// // // //                   <p>
// // // //                       The silence after the lecture ends. The glowing pixels that don't glow back. The feeling that you are building a brilliant mind, but forgetting your soul.
// // // //                   </p>
// // // //                   <p className="text-white text-2xl italic">
// // // //                       We felt it too.
// // // //                   </p>
// // // //                   <p>
// // // //                       That is why Aayam exists. We are the warmth in the digital void. We are the place where "Data Systems" meet "Human Systems."
// // // //                   </p>
// // // //                   <p>
// // // //                       We don't care about your CGPA. We care about what keeps you up at night. 
// // // //                       Come share that with us.
// // // //                   </p>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 3. THE CONFESSION (Siddharth) */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             transition={{ duration: 1, delay: 0.2 }}
// // // //             className="mb-32 flex flex-col items-center"
// // // //           >
// // // //               <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
              
// // // //               <div className="text-center relative group cursor-default">
// // // //                   <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-4">
// // // //                       Written by
// // // //                   </p>
                  
// // // //                   <h3 className="text-5xl md:text-6xl font-serif text-white mb-2 signature-font">
// // // //                       Siddharth
// // // //                   </h3>
                  
// // // //                   {/* The Unmasking */}
// // // //                   <div className="relative inline-block mt-2">
// // // //                       <span className="text-xs font-mono text-white/20 uppercase tracking-widest group-hover:line-through decoration-red-500 decoration-1 transition-all">
// // // //                           The Secretary
// // // //                       </span>
// // // //                       <span className="block text-gold-500 font-serif italic text-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap pt-2">
// // // //                           "Just a friend."
// // // //                       </span>
// // // //                   </div>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 4. THE HANDSHAKE (Contact) */}
// // // //           <div className="border-t border-white/10 pt-16">
// // // //               <div className="text-center mb-12">
// // // //                   <h3 className="font-serif text-2xl text-white mb-2">
// // // //                       You are not alone here.
// // // //                   </h3>
// // // //                   <p className="text-white/40 font-serif italic text-sm">
// // // //                       Reaching out is the first step.
// // // //                   </p>
// // // //               </div>

// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
// // // //                   {/* EMAIL - Personal */}
// // // //                   <a href="mailto:secretary.aayam@iitm.ac.in" className="group relative p-8 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-red-500/20 transition-all duration-500 text-center">
// // // //                       <Mail className="w-6 h-6 text-white/20 mx-auto mb-4 group-hover:text-red-500 transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">Write to me</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block group-hover:text-white/50">secretary.aayam</span>
// // // //                   </a>

// // // //                   {/* INSTAGRAM - Visual */}
// // // //                   <a href="https://instagram.com/aayam_iitm" target="_blank" className="group relative p-8 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-pink-500/20 transition-all duration-500 text-center">
// // // //                       <Instagram className="w-6 h-6 text-white/20 mx-auto mb-4 group-hover:text-pink-500 transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">See the family</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block group-hover:text-white/50">@aayam_iitm</span>
// // // //                   </a>

// // // //                   {/* LINKTREE - Hub */}
// // // //                   <a href="https://linktr.ee/aayam_iitm" target="_blank" className="group relative p-8 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-gold-500/20 transition-all duration-500 text-center">
// // // //                       <Link className="w-6 h-6 text-white/20 mx-auto mb-4 group-hover:text-gold-500 transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">Join the chaos</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block group-hover:text-white/50">The Hub</span>
// // // //                   </a>

// // // //                    {/* YOUTUBE - Art */}
// // // //                    <a href="https://youtube.com" target="_blank" className="group relative p-8 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-red-600/20 transition-all duration-500 text-center">
// // // //                       <Youtube className="w-6 h-6 text-white/20 mx-auto mb-4 group-hover:text-red-600 transition-colors" />
// // // //                       <span className="font-serif text-lg text-white block">Watch us bleed</span>
// // // //                       <span className="text-xs text-white/30 font-mono mt-1 block group-hover:text-white/50">Originals</span>
// // // //                   </a>

// // // //               </div>
// // // //           </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { Mail, Instagram, Youtube, Link, Zap, Binary } from "lucide-react";

// // // // export default function TheManifesto() {
// // // //   return (
// // // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] pt-32 pb-32 px-6 md:px-24 flex justify-center relative overflow-hidden">
      
// // // //       {/* 1. ATMOSPHERE: THE CIRCUIT & THE SOUL */}
// // // //       {/* A faint grid (Logic) fading into a soft glow (Emotion) */}
// // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />
      
// // // //       <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

// // // //       <div className="max-w-3xl w-full relative z-10">
          
// // // //           {/* 2. THE HOOK: THE INTELLECTUAL CHALLENGE */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1.2, ease: "easeOut" }}
// // // //             className="mb-32 text-center md:text-left"
// // // //           >
// // // //               <div className="flex items-center justify-center md:justify-start gap-3 mb-8 opacity-50">
// // // //                   <Binary className="w-4 h-4" />
// // // //                   <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
// // // //                       Input / Output
// // // //                   </span>
// // // //               </div>
              
// // // //               <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] text-white mb-10">
// // // //                   You are learning the language of <span className="text-white/40">Machines.</span><br/>
// // // //                   <span className="text-red-500 italic">Do not forget your own.</span>
// // // //               </h1>

// // // //               <div className="h-px w-24 bg-gradient-to-r from-red-500/50 to-transparent mx-auto md:mx-0 mb-10" />

// // // //               <div className="text-lg md:text-xl font-serif leading-relaxed text-white/70 space-y-8">
// // // //                   <p>
// // // //                       In <strong>Data Science</strong>, we look for the pattern. In <strong>Electronics</strong>, we look for the signal. We spend our days trying to make the world predictable, efficient, and logical.
// // // //                   </p>
// // // //                   <p>
// // // //                       But you are not a line of code. You are not a circuit board.
// // // //                   </p>
// // // //                   <p className="text-white text-2xl italic">
// // // //                       You are the glitch.
// // // //                   </p>
// // // //                   <p>
// // // //                       You are the part of the system that feels joy, anger, grief, and love. The part that cannot be optimized.
// // // //                   </p>
// // // //                   <p>
// // // //                       <strong>Aayam is where we go to be human.</strong> It is the sanctuary where we stop analyzing the world and start <em>feeling</em> it. Whether you act, write, design, or just watch—this is where you find the signal in the noise.
// // // //                   </p>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 3. THE VULNERABILITY (The Secretary's Confession) */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             transition={{ duration: 1, delay: 0.2 }}
// // // //             className="mb-40 pl-0 md:pl-12 border-l-0 md:border-l border-white/10"
// // // //           >
// // // //               <p className="font-serif italic text-white/40 mb-6 text-center md:text-left">
// // // //                   "Why does an online degree need a theater group?"
// // // //               </p>
              
// // // //               <div className="space-y-4 text-center md:text-left">
// // // //                   <p className="text-white/80 font-serif text-lg">
// // // //                       Because the screen is cold. And we need warmth.
// // // //                   </p>
// // // //                   <p className="text-white/60 font-serif">
// // // //                       I built this because I refused to let my degree be just a certificate. I wanted it to be a memory.
// // // //                   </p>
// // // //               </div>

// // // //               <div className="mt-12 flex flex-col items-center md:items-start">
// // // //                   <div className="relative group">
// // // //                       <h3 className="text-4xl md:text-5xl font-serif text-white mb-2 signature-font">
// // // //                           Siddharth
// // // //                       </h3>
// // // //                       <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-1">
// // // //                           <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest line-through decoration-red-500 decoration-1 opacity-50">
// // // //                               The Secretary
// // // //                           </span>
// // // //                           <span className="text-gold-500 font-serif italic text-sm">
// // // //                               "Just a student, like you."
// // // //                           </span>
// // // //                       </div>
// // // //                   </div>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 4. THE CONNECTION (The Human Handshake) */}
// // // //           <div className="border-t border-white/10 pt-20">
// // // //               <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
// // // //                   <div>
// // // //                       <h3 className="font-serif text-3xl text-white mb-2 text-center md:text-left">
// // // //                           I am listening.
// // // //                       </h3>
// // // //                       <p className="text-white/40 font-serif italic text-sm text-center md:text-left">
// // // //                           Real people read these emails. Not bots.
// // // //                       </p>
// // // //                   </div>
// // // //               </div>

// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
                  
// // // //                   {/* DIRECT LINE */}
// // // //                   <a href="mailto:secretary.aayam@iitm.ac.in" className="group bg-[#080808] p-10 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
// // // //                       <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
// // // //                       <Mail className="w-6 h-6 text-white/30 mb-6 group-hover:text-red-500 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2">
// // // //                           Personal
// // // //                       </span>
// // // //                       <span className="font-serif text-xl text-white">
// // // //                           Write to me
// // // //                       </span>
// // // //                       <span className="text-xs text-white/40 mt-2 font-mono">
// // // //                           secretary.aayam@iitm.ac.in
// // // //                       </span>
// // // //                   </a>

// // // //                   {/* VISUAL DIARY */}
// // // //                   <a href="https://instagram.com/aayam_iitm" target="_blank" className="group bg-[#080808] p-10 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
// // // //                       <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
// // // //                       <Instagram className="w-6 h-6 text-white/30 mb-6 group-hover:text-pink-500 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2">
// // // //                           Visual
// // // //                       </span>
// // // //                       <span className="font-serif text-xl text-white">
// // // //                           See our world
// // // //                       </span>
// // // //                       <span className="text-xs text-white/40 mt-2 font-mono">
// // // //                           @aayam_iitm
// // // //                       </span>
// // // //                   </a>

// // // //                   {/* THE ARCHIVE */}
// // // //                   <a href="https://youtube.com" target="_blank" className="group bg-[#080808] p-10 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
// // // //                       <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
// // // //                       <Youtube className="w-6 h-6 text-white/30 mb-6 group-hover:text-red-600 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2">
// // // //                           Performance
// // // //                       </span>
// // // //                       <span className="font-serif text-xl text-white">
// // // //                           Watch us bleed
// // // //                       </span>
// // // //                       <span className="text-xs text-white/40 mt-2 font-mono">
// // // //                           Aayam Originals
// // // //                       </span>
// // // //                   </a>

// // // //                    {/* THE HUB */}
// // // //                    <a href="https://linktr.ee/aayam_iitm" target="_blank" className="group bg-[#080808] p-10 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
// // // //                       <div className="absolute top-0 left-0 w-1 h-full bg-gold-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
// // // //                       <Link className="w-6 h-6 text-white/30 mb-6 group-hover:text-gold-500 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2">
// // // //                           Everything Else
// // // //                       </span>
// // // //                       <span className="font-serif text-xl text-white">
// // // //                           The Aayam Hub
// // // //                       </span>
// // // //                       <span className="text-xs text-white/40 mt-2 font-mono">
// // // //                           Groups, Events & More
// // // //                       </span>
// // // //                   </a>

// // // //               </div>
// // // //           </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { Mail, Instagram, Youtube, Link, Heart } from "lucide-react";

// // // // export default function TheManifesto() {
// // // //   return (
// // // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] pt-32 pb-40 px-6 md:px-24 flex justify-center relative overflow-hidden">
      
// // // //       {/* ATMOSPHERE: The Pulse of a Distant Star */}
// // // //       <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
// // // //       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-900/5 blur-[100px] rounded-full pointer-events-none" />

// // // //       <div className="max-w-3xl w-full relative z-10">
          
// // // //           {/* 1. THE OPENING: THE ACKNOWLEDGEMENT */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1.2, ease: "easeOut" }}
// // // //             className="space-y-12 mb-32 text-center md:text-left"
// // // //           >
// // // //               <div className="inline-flex items-center gap-3 opacity-60 mx-auto md:mx-0">
// // // //                   <span className="w-1 h-1 bg-red-500 rounded-full" />
// // // //                   <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
// // // //                       A Letter to the Isolated
// // // //                   </span>
// // // //               </div>
              
// // // //               <h1 className="text-3xl md:text-5xl font-serif leading-[1.2] text-white/90">
// // // //                   We have taught ourselves to think in <span className="text-white">Binary</span>.<br/>
// // // //                   Zeros and Ones. True and False. Pass and Fail.
// // // //               </h1>
              
// // // //               <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent mx-auto md:mx-0 my-8" />

// // // //               <div className="text-lg md:text-xl font-serif leading-relaxed text-white/70 space-y-8">
// // // //                   <p>
// // // //                       But the human heart is not binary. It does not fit into a row of data. It cannot be debugged.
// // // //                   </p>
// // // //                   <p>
// // // //                       I know the silence of this degree. I know what it is to be a ghost in a lecture hall of thousands. I know the feeling of staring at a screen until the pixels blur, wondering if you are building a future or just losing the present.
// // // //                   </p>
// // // //                   <p className="text-white text-2xl italic">
// // // //                       Aayam is the rebellion against that silence.
// // // //                   </p>
// // // //                   <p>
// // // //                       It is the promise that even in this digital void, we can still touch each other. We can still scream, laugh, cry, and create something that is messy, imperfect, and <span className="text-red-500">beautifully human.</span>
// // // //                   </p>
// // // //                   <p>
// // // //                       Here, you are not a Roll Number. You are a Voice.
// // // //                   </p>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 2. THE CONFESSION (Siddharth) */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             transition={{ duration: 1, delay: 0.2 }}
// // // //             className="mb-40 pl-0 md:pl-12 border-l-0 md:border-l border-white/10"
// // // //           >
// // // //               <p className="font-serif italic text-white/40 mb-6 text-center md:text-left">
// // // //                   "Why do I do this? Why do I lead this?"
// // // //               </p>
              
// // // //               <div className="space-y-4 text-center md:text-left">
// // // //                   <p className="text-white/80 font-serif text-lg">
// // // //                       Because I need this just as much as you do.
// // // //                   </p>
// // // //                   <p className="text-white/60 font-serif">
// // // //                       I am building this home so that neither of us has to be alone.
// // // //                   </p>
// // // //               </div>

// // // //               <div className="mt-12 flex flex-col items-center md:items-start">
// // // //                   <div className="relative group">
// // // //                       <h3 className="text-4xl md:text-5xl font-serif text-white mb-1 signature-font">
// // // //                           Siddharth
// // // //                       </h3>
// // // //                       <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2">
// // // //                           <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest line-through decoration-red-500 decoration-1 opacity-50">
// // // //                               The Secretary
// // // //                           </span>
// // // //                           <span className="text-gold-500 font-serif italic text-sm">
// // // //                               Just a fellow dreamer.
// // // //                           </span>
// // // //                       </div>
// // // //                   </div>
// // // //               </div>
// // // //           </motion.div>

// // // //           {/* 3. THE INVITATION (The Handshake) */}
// // // //           <div className="border-t border-white/10 pt-20">
// // // //               <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
// // // //                   <h3 className="font-serif text-3xl text-white">
// // // //                       The door is open.
// // // //                   </h3>
// // // //                   <p className="text-white/40 font-serif italic text-sm">
// // // //                       (No auditions required to say hello.)
// // // //                   </p>
// // // //               </div>

// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
                  
// // // //                   {/* EMAIL */}
// // // //                   <a href="mailto:secretary.aayam@iitm.ac.in" className="group bg-[#080808] p-8 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left">
// // // //                       <Mail className="w-6 h-6 text-white/30 mb-4 group-hover:text-red-500 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">
// // // //                           For the long stories
// // // //                       </span>
// // // //                       <span className="font-serif text-lg text-white group-hover:translate-x-1 transition-transform">
// // // //                           secretary.aayam
// // // //                       </span>
// // // //                   </a>

// // // //                   {/* INSTAGRAM */}
// // // //                   <a href="https://instagram.com/aayam_iitm" target="_blank" className="group bg-[#080808] p-8 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left">
// // // //                       <Instagram className="w-6 h-6 text-white/30 mb-4 group-hover:text-pink-500 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">
// // // //                           For the memories
// // // //                       </span>
// // // //                       <span className="font-serif text-lg text-white group-hover:translate-x-1 transition-transform">
// // // //                           @aayam_iitm
// // // //                       </span>
// // // //                   </a>

// // // //                   {/* LINKTREE */}
// // // //                   <a href="https://linktr.ee/aayam_iitm" target="_blank" className="group bg-[#080808] p-8 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left">
// // // //                       <Link className="w-6 h-6 text-white/30 mb-4 group-hover:text-gold-500 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">
// // // //                           For everything else
// // // //                       </span>
// // // //                       <span className="font-serif text-lg text-white group-hover:translate-x-1 transition-transform">
// // // //                           The Hub
// // // //                       </span>
// // // //                   </a>

// // // //                    {/* YOUTUBE */}
// // // //                    <a href="https://youtube.com" target="_blank" className="group bg-[#080808] p-8 hover:bg-[#0f0f0f] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left">
// // // //                       <Youtube className="w-6 h-6 text-white/30 mb-4 group-hover:text-red-600 transition-colors" />
// // // //                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">
// // // //                           For the art
// // // //                       </span>
// // // //                       <span className="font-serif text-lg text-white group-hover:translate-x-1 transition-transform">
// // // //                           Originals
// // // //                       </span>
// // // //                   </a>

// // // //               </div>
// // // //           </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { ArrowRight, Mail, Instagram, Youtube, Link } from "lucide-react";

// // // export default function TheManifesto() {
// // //   return (
// // //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] pt-32 pb-32 px-6 md:px-24 flex justify-center">
      
// // //       <div className="max-w-4xl w-full relative">
          
// // //           {/* THE HEARTBEAT (Background) */}
// // //           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none opacity-60 animate-pulse-slow" />

// // //           {/* 1. THE LETTER */}
// // //           <motion.div 
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 1 }}
// // //             className="space-y-12 mb-24 text-center md:text-left"
// // //           >
// // //               <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 justify-center md:justify-start">
// // //                 <span className="font-mono text-xs text-red-500 uppercase tracking-widest">
// // //                     To the Student Behind the Screen,
// // //                 </span>
// // //                 <div className="h-px w-12 bg-red-500/30" />
// // //               </div>
              
// // //               <h1 className="text-3xl md:text-5xl font-serif leading-tight text-white/90">
// // //                   We spend our days finding patterns in <span className="text-white">Data</span>.<br/>
// // //                   We spend our nights building <span className="text-white">Systems</span> that work perfectly.
// // //               </h1>
              
// // //               <h2 className="text-2xl md:text-4xl font-serif leading-tight text-white/60">
// // //                   But life is not perfect. <span className="italic text-gold-500">And that is beautiful.</span>
// // //               </h2>

// // //               <div className="text-lg md:text-xl font-serif leading-relaxed text-white/70 space-y-8 max-w-3xl mx-auto md:mx-0">
// // //                   <p>
// // //                       The <strong>IIT Madras BS Degree</strong> taught us to look at the world through logic. But there are things that cannot be coded. The feeling of a breathless silence in a room. The rage of a character who has lost everything. The laughter that hurts your stomach.
// // //                   </p>
// // //                   <p>
// // //                       Aayam is where we stop calculating and start feeling.
// // //                   </p>
// // //                   <p>
// // //                       We know it can be lonely studying online. We know the screen can feel like a wall. <strong>Aayam is the door.</strong> It is the place where we meet—not as roll numbers, but as humans.
// // //                   </p>
// // //                   <p>
// // //                       You don't need to be an actor. You don't need to be a writer. You just need to be willing to feel.
// // //                   </p>
// // //               </div>
// // //           </motion.div>

// // //           {/* 2. THE SIGNATURE (The Human Touch) */}
// // //           <motion.div 
// // //             initial={{ opacity: 0 }}
// // //             whileInView={{ opacity: 1 }}
// // //             transition={{ duration: 1, delay: 0.2 }}
// // //             className="mb-32 flex flex-col items-center md:items-start"
// // //           >
// // //               <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">
// // //                   Yours truly,
// // //               </p>
              
// // //               <div className="relative group cursor-default text-center md:text-left">
// // //                   <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">
// // //                       Siddharth
// // //                   </h3>
                  
// // //                   {/* The Unmasking */}
// // //                   <div className="relative inline-block">
// // //                       <span className="text-sm font-mono text-white/30 uppercase tracking-widest group-hover:line-through decoration-red-500 decoration-2 transition-all">
// // //                           The Secretary
// // //                       </span>
// // //                       <span className="block text-gold-500 font-serif italic text-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 whitespace-nowrap pt-2">
// // //                           Just a believer.
// // //                       </span>
// // //                   </div>
// // //               </div>
// // //           </motion.div>

// // //           {/* 3. THE INVITATION (Contact) */}
// // //           <div className="border-t border-white/10 pt-16">
// // //               <h3 className="font-serif text-3xl text-white mb-4 text-center md:text-left">
// // //                   Come say hello.
// // //               </h3>
// // //               <p className="text-white/40 mb-12 text-center md:text-left font-serif italic">
// // //                   No formalities. No agendas. Just us.
// // //               </p>

// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
// // //                   {/* EMAIL */}
// // //                   <a href="mailto:secretary.aayam@iitm.ac.in" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// // //                       <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// // //                       <div className="flex items-center gap-4 mb-4">
// // //                           <Mail className="w-5 h-5 text-red-500" />
// // //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Write to me</span>
// // //                       </div>
// // //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// // //                           secretary.aayam@iitm.ac.in
// // //                       </p>
// // //                   </a>

// // //                   {/* INSTAGRAM */}
// // //                   <a href="https://instagram.com/aayam_iitm" target="_blank" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// // //                       <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// // //                       <div className="flex items-center gap-4 mb-4">
// // //                           <Instagram className="w-5 h-5 text-pink-500" />
// // //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">See our memories</span>
// // //                       </div>
// // //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// // //                           @aayam_iitm
// // //                       </p>
// // //                   </a>

// // //                   {/* LINKTREE */}
// // //                   <a href="https://linktr.ee/aayam_iitm" target="_blank" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// // //                       <div className="absolute top-0 left-0 w-1 h-full bg-gold-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// // //                       <div className="flex items-center gap-4 mb-4">
// // //                           <Link className="w-5 h-5 text-gold-500" />
// // //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">The Hub</span>
// // //                       </div>
// // //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// // //                           Join Groups & Events
// // //                       </p>
// // //                   </a>

// // //                    {/* YOUTUBE */}
// // //                    <a href="https://youtube.com" target="_blank" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// // //                       <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// // //                       <div className="flex items-center gap-4 mb-4">
// // //                           <Youtube className="w-5 h-5 text-red-600" />
// // //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Our Stories</span>
// // //                       </div>
// // //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// // //                           Aayam Originals
// // //                       </p>
// // //                   </a>

// // //               </div>
// // //           </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import { ArrowRight, Mail, Instagram, Youtube, Link } from "lucide-react";

// // export default function TheManifesto() {
// //   return (
// //     <section className="min-h-screen bg-[#050505] text-[#e0e0e0] pt-32 pb-32 px-6 md:px-24 flex justify-center">
      
// //       <div className="max-w-4xl w-full relative">
          
// //           {/* BACKGROUND AMBIANCE (The Heartbeat) */}
// //           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-900/20 blur-[150px] rounded-full pointer-events-none opacity-50 animate-pulse-slow" />

// //           {/* 1. THE LETTER */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //             className="space-y-12 mb-24 text-center md:text-left"
// //           >
// //               <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 justify-center md:justify-start">
// //                 <span className="font-mono text-xs text-red-500 uppercase tracking-widest">
// //                     To the Dreamers of IIT Madras,
// //                 </span>
// //                 <div className="h-px w-12 bg-red-500/30" />
// //               </div>
              
// //               <h1 className="text-4xl md:text-6xl font-serif leading-tight text-white">
// //                   Engineering tells us <span className="italic text-white/50">how</span> the world works.<br/>
// //                   Stories tell us <span className="italic text-gold-500">why</span> it matters.
// //               </h1>

// //               <div className="text-lg md:text-xl font-serif leading-relaxed text-white/70 space-y-8 max-w-3xl">
// //                   <p>
// //                       We know what it's like. You are sitting behind a screen, solving problems, chasing deadlines, building a degree byte by byte. It is brilliant. But sometimes, it is quiet.
// //                   </p>
// //                   <p>
// //                       <strong>Aayam is the noise.</strong>
// //                   </p>
// //                   <p>
// //                       We are the sudden burst of laughter in a Zoom call. We are the script written at 3 AM. We are the feeling that you are not just a roll number, but a soul with something to say.
// //                   </p>
// //                   <p>
// //                       We don't care if you've never acted before. We don't care if you're shy. We care about your <span className="text-white">truth</span>. Whether we are meeting in the SAC building or collaborating across servers, we are building a home.
// //                   </p>
// //               </div>
// //           </motion.div>

// //           {/* 2. THE SIGNATURE (The Vulnerability) */}
// //           <motion.div 
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             transition={{ duration: 1, delay: 0.2 }}
// //             className="mb-32 flex flex-col items-center md:items-start"
// //           >
// //               <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">
// //                   Ideally yours,
// //               </p>
              
// //               <div className="relative group cursor-default">
// //                   <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">
// //                       Siddharth
// //                   </h3>
                  
// //                   {/* The Unmasking Animation */}
// //                   <div className="relative inline-block">
// //                       <span className="text-sm font-mono text-white/30 uppercase tracking-widest group-hover:line-through decoration-red-500 decoration-2 transition-all">
// //                           The Secretary
// //                       </span>
// //                       <span className="block text-gold-500 font-serif italic text-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 absolute top-full left-0 whitespace-nowrap">
// //                           Just a believer.
// //                       </span>
// //                   </div>
// //               </div>
// //           </motion.div>

// //           {/* 3. THE CONNECTION (The Handshake) */}
// //           <div className="border-t border-white/10 pt-16">
// //               <h3 className="font-serif text-3xl text-white mb-12 text-center md:text-left">
// //                   Find us in the noise.
// //               </h3>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
// //                   {/* EMAIL - The Direct Line */}
// //                   <a href="mailto:secretary.aayam@iitm.ac.in" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// //                       <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// //                       <div className="flex items-center gap-4 mb-4">
// //                           <Mail className="w-5 h-5 text-red-500" />
// //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Write to me</span>
// //                       </div>
// //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// //                           secretary.aayam@iitm.ac.in
// //                       </p>
// //                   </a>

// //                   {/* INSTAGRAM - The Visuals */}
// //                   <a href="https://instagram.com/aayam_iitm" target="_blank" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// //                       <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// //                       <div className="flex items-center gap-4 mb-4">
// //                           <Instagram className="w-5 h-5 text-pink-500" />
// //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">See our world</span>
// //                       </div>
// //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// //                           @aayam_iitm
// //                       </p>
// //                   </a>

// //                   {/* LINKTREE - The Hub */}
// //                   <a href="https://linktr.ee/aayam_iitm" target="_blank" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// //                       <div className="absolute top-0 left-0 w-1 h-full bg-gold-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// //                       <div className="flex items-center gap-4 mb-4">
// //                           <Link className="w-5 h-5 text-gold-500" />
// //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Everything else</span>
// //                       </div>
// //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// //                           The Aayam Hub
// //                       </p>
// //                   </a>

// //                    {/* YOUTUBE - The Archives */}
// //                    <a href="https://youtube.com" target="_blank" className="group relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
// //                       <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
// //                       <div className="flex items-center gap-4 mb-4">
// //                           <Youtube className="w-5 h-5 text-red-600" />
// //                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Watch us perform</span>
// //                       </div>
// //                       <p className="text-xl font-serif text-white group-hover:translate-x-2 transition-transform duration-500">
// //                           Aayam Originals
// //                       </p>
// //                   </a>

// //               </div>
// //           </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { Mail, Instagram, Youtube, Link, ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function TheManifesto() {
//   return (
//     <section className="min-h-screen bg-[#050505] text-[#f0f0f0] pt-32 pb-24 px-6 md:px-24">
      
//       <div className="max-w-6xl mx-auto">
          
//           {/* 1. THE STORY */}
//           <div className="mb-32">
//               <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white/60 mb-8">
//                   The Philosophy
//               </span>
              
//               <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-12 text-white">
//                   We are a group of engineers<br/> 
//                   who fell in love with <span className="text-red-500 italic">Storytelling.</span>
//               </h1>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg md:text-xl font-serif leading-relaxed text-white/70">
//                   <div className="space-y-6">
//                       <p>
//                           The <strong>IIT Madras BS Degree</strong> is a revolution in education. And Aayam is the heartbeat of that revolution. We are trying to understand what it means to be human in a digital world.
//                       </p>
//                       <p>
//                           We don't just put on plays. We build families across time zones. We spend late nights rewriting scripts and rehearsing lines until they feel like the truth.
//                       </p>
//                   </div>
//                   <div className="space-y-6">
//                       <p>
//                           Whether it's a street play that makes you question society, or a film that makes you cry in the dark—we do it because we love it. 
//                       </p>
//                       <p className="text-white font-medium">
//                           And we want you to be a part of it.
//                       </p>

//                       {/* --- THE SIGNATURE (The Heart) --- */}
//                       <div className="mt-16 pt-8 border-t border-white/10">
//                           <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">
//                               From the core of my heart,
//                           </p>
                          
//                           <div className="relative inline-block">
//                               {/* The Name */}
//                               <span className="block text-3xl md:text-4xl font-serif text-white mb-1">
//                                   Siddharth
//                               </span>
                              
//                               {/* The Title (Struck Through) */}
//                               <div className="relative inline-block">
//                                   <span className="text-sm font-mono text-white/30 uppercase tracking-widest">
//                                       The Secretary
//                                   </span>
//                                   {/* The Red Strike Line */}
//                                   <motion.div 
//                                     initial={{ width: 0 }}
//                                     whileInView={{ width: "100%" }}
//                                     transition={{ duration: 1, delay: 0.5 }}
//                                     className="absolute top-1/2 left-0 h-[1px] bg-red-500 -rotate-2"
//                                   />
//                               </div>

//                               {/* The Real Identity */}
//                               <motion.span 
//                                 initial={{ opacity: 0, y: 5 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 1, delay: 1.5 }}
//                                 className="block mt-2 font-serif italic text-gold-500 text-lg"
//                               >
//                                   "Just a Believer."
//                               </motion.span>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>

//           {/* 2. THE CONTACT GRID */}
//           <div className="border-t border-white/10 pt-16">
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
//                   <h2 className="text-3xl md:text-4xl font-serif text-white">
//                       Let's Connect.
//                   </h2>
//                   <p className="text-white/50 mt-2 md:mt-0">
//                       We reply to every message.
//                   </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
//                   {/* INSTAGRAM */}
//                   <a href="https://instagram.com/aayam_iitm" target="_blank" className="group bg-[#0a0a0a] p-8 rounded-xl border border-white/5 hover:border-red-500/50 hover:bg-[#0f0f0f] transition-all duration-300">
//                       <div className="flex justify-between items-start mb-8">
//                           <Instagram className="w-8 h-8 text-white/40 group-hover:text-red-500 transition-colors" />
//                           <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
//                       </div>
//                       <h3 className="text-xl font-serif text-white mb-1">Instagram</h3>
//                       <p className="text-sm text-white/40">@aayam_iitm</p>
//                   </a>

//                   {/* EMAIL */}
//                   <a href="mailto:secretary.aayam@iitm.ac.in" className="group bg-[#0a0a0a] p-8 rounded-xl border border-white/5 hover:border-red-500/50 hover:bg-[#0f0f0f] transition-all duration-300">
//                       <div className="flex justify-between items-start mb-8">
//                           <Mail className="w-8 h-8 text-white/40 group-hover:text-red-500 transition-colors" />
//                           <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
//                       </div>
//                       <h3 className="text-xl font-serif text-white mb-1">Email</h3>
//                       <p className="text-sm text-white/40">secretary.aayam@iitm.ac.in</p>
//                   </a>

//                   {/* YOUTUBE */}
//                   <a href="https://youtube.com" target="_blank" className="group bg-[#0a0a0a] p-8 rounded-xl border border-white/5 hover:border-red-500/50 hover:bg-[#0f0f0f] transition-all duration-300">
//                       <div className="flex justify-between items-start mb-8">
//                           <Youtube className="w-8 h-8 text-white/40 group-hover:text-red-500 transition-colors" />
//                           <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
//                       </div>
//                       <h3 className="text-xl font-serif text-white mb-1">YouTube</h3>
//                       <p className="text-sm text-white/40">Watch our performances</p>
//                   </a>

//                   {/* THE HUB (LINKTREE) */}
//                   <a href="https://linktr.ee/aayam_iitm" target="_blank" className="group bg-[#0a0a0a] p-8 rounded-xl border border-white/5 hover:border-gold-500/50 hover:bg-[#0f0f0f] transition-all duration-300">
//                       <div className="flex justify-between items-start mb-8">
//                           <Link className="w-8 h-8 text-white/40 group-hover:text-gold-500 transition-colors" />
//                           <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
//                       </div>
//                       <h3 className="text-xl font-serif text-white mb-1">The Hub</h3>
//                       <p className="text-sm text-white/40">
//                           Merch. Tickets. Hidden Files.<br/>
//                           Everything else is here.
//                       </p>
//                   </a>

//               </div>
//           </div>

//       </div>
//     </section>
//   );
// }

