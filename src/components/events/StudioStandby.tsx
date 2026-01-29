// "use client";

// import { motion } from "framer-motion";

// export default function StudioStandby() {
//   return (
//     <section className="h-[60vh] w-full flex flex-col items-center justify-center text-center px-6 border-y border-white/5 bg-[#050505] relative overflow-hidden">
        
//         {/* ATMOSPHERE: A lonely spotlight */}
//         <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[1px] h-[150%] bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm" />
//         <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-white/5 blur-[50px] rounded-[100%]" />

//         <div className="relative z-10">
//             <motion.div 
//                 initial={{ opacity: 0 }} 
//                 animate={{ opacity: 1 }} 
//                 transition={{ duration: 2 }}
//                 className="flex flex-col items-center gap-6"
//             >
//                 <span className="font-mono text-gold-500/50 text-xs uppercase tracking-[0.5em] animate-pulse">
//                     Status: In Development
//                 </span>
                
//                 <h2 className="text-4xl md:text-6xl font-serif text-white/80 tracking-tight">
//                     The Stage is Dark.
//                 </h2>
                
//                 <p className="max-w-md text-white/40 font-serif italic leading-relaxed">
//                     "Great drama is born in the silence. The script is being written. The lights are being rigged. Stand by for the next cue."
//                 </p>

//                 {/* THE TRIGGER: Don't let them leave. Get their email. */}
//                 <div className="mt-8 p-1 pr-1 border border-white/10 rounded-full flex items-center bg-black/50 backdrop-blur-md">
//                     <input 
//                         type="email" 
//                         placeholder="Enter email for Call Sheet..." 
//                         className="bg-transparent border-none outline-none text-white text-xs px-4 w-48 md:w-64 placeholder:text-white/20 font-mono"
//                     />
//                     <button className="px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gold-500 transition-colors">
//                         Notify Me
//                     </button>
//                 </div>
//             </motion.div>
//         </div>
//     </section>
//   );
// }