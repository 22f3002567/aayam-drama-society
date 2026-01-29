// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio"; // Import audio for the glitch sound

// export default function HeroStage() {
//   const { scrollY } = useScroll();
  
//   // 1. HYDRATION SAFE CLOCK
//   const [time, setTime] = useState<string | null>(null); // Start null
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     };
//     updateTime();
//     const timer = setInterval(updateTime, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 2. MOUSE PHYSICS
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseX = useSpring(x, { stiffness: 30, damping: 40 });
//   const mouseY = useSpring(y, { stiffness: 30, damping: 40 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX - width / 2) / 50);
//     y.set((clientY - height / 2) / 50);
//   }

//   // 3. SCROLL PHYSICS
//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);
//   const yText = useTransform(scrollY, [0, 500], [0, 100]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//     >
//       {/* A. THE BACKLIGHT (Cinematic) */}
//       <motion.div 
//         style={{ x: mouseX, y: mouseY }}
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//       >
//         <div className="w-[60vw] h-[60vw] bg-gradient-to-tr from-gold-500/10 via-gold-500/5 to-transparent blur-[100px] rounded-full opacity-60" />
//       </motion.div>

//       {/* B. THE CONTENT */}
//       <motion.div 
//         style={{ opacity, y: yText }} 
//         className="relative z-10 text-center space-y-12 px-4 mix-blend-screen"
//       >
//         {/* The Scene Stamp */}
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1.5 }}
//           className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase"
//         >
//           <span>Act I : The Awakening</span>
//           {/* Only show time if loaded to prevent hydration mismatch */}
//           {time && <span className="text-gold-500/40">{time} IST</span>}
//         </motion.div>
        
//         {/* The Barrier */}
//         <h1 className="flex flex-col items-center justify-center cursor-default">
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-300 tracking-tighter"
//           >
//             The Fourth
//           </motion.span>
          
//           {/* THE INTERACTIVE BREACH */}
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ delay: 1.8, duration: 2, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')} // Auditory Feedback
//             whileHover={{ 
//               skewX: -10, 
//               scale: 1.05, 
//               color: "#F0F0F0", // Turns white on touch (Breach)
//               textShadow: "0px 0px 8px rgba(255,255,255,0.5)"
//             }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic text-gold-500 tracking-tight -mt-2 md:-mt-6 transition-colors duration-300"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* The Manifesto */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2.5, duration: 1.5 }}
//             className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase"
//         >
//             <span>The Dimensions</span>
//             <span className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-2" />
//             <span>Are Unfolding</span>
//         </motion.div>
//       </motion.div>

//       {/* C. THE GUIDE (Magnetic Chevron) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 4, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-700 animate-bounce"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M7 13L12 18L17 13" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";

// export default function HeroStage() {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     // Hydration-safe clock
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//         setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // PARALLAX
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseX = useSpring(x, { stiffness: 30, damping: 40 });
//   const mouseY = useSpring(y, { stiffness: 30, damping: 40 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX - width / 2) / 50);
//     y.set((clientY - height / 2) / 50);
//   }

//   // SCROLL FADE
//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);
//   const yText = useTransform(scrollY, [0, 500], [0, 100]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//     >
//       {/* BACKGROUND GLOW */}
//       <motion.div 
//         style={{ x: mouseX, y: mouseY }}
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//       >
//         <div className="w-[60vw] h-[60vw] bg-gradient-to-tr from-gold-500/10 via-gold-500/5 to-transparent blur-[100px] rounded-full opacity-60" />
//       </motion.div>

//       {/* CONTENT */}
//       <motion.div 
//         style={{ opacity, y: yText }} 
//         className="relative z-10 text-center space-y-12 px-4 mix-blend-screen"
//       >
//         {/* SCENE STAMP (Delayed) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           // DELAY INCREASED: Waits for the Gold Explosion to settle
//           transition={{ delay: 2, duration: 1.5 }} 
//           className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase min-h-[20px]"
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-gold-500/40">{time} IST</span>}
//         </motion.div>
        
//         {/* TITLE */}
//         <h1 className="flex flex-col items-center justify-center cursor-default">
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ delay: 2.2, duration: 2, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-300 tracking-tighter"
//           >
//             The Fourth
//           </motion.span>
          
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ delay: 2.8, duration: 2, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             whileHover={{ skewX: -10, scale: 1.05, color: "#F0F0F0", textShadow: "0px 0px 8px rgba(255,255,255,0.5)" }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic text-gold-500 tracking-tight -mt-2 md:-mt-6 transition-colors duration-300"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.5, duration: 1.5 }}
//             className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase"
//         >
//             <span>The Dimensions</span>
//             <span className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-2" />
//             <span>Are Unfolding</span>
//         </motion.div>
//       </motion.div>

//       {/* CHEVRON */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 5, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-700 animate-bounce"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M7 13L12 18L17 13" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";

// export default function HeroStage() {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // PARALLAX
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseX = useSpring(x, { stiffness: 20, damping: 40 }); // Heavier feel
//   const mouseY = useSpring(y, { stiffness: 20, damping: 40 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX - width / 2) / 60);
//     y.set((clientY - height / 2) / 60);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//     >
//       {/* BACKGROUND ATMOSPHERE (Subtle) */}
//       <motion.div 
//         style={{ x: mouseX, y: mouseY }}
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//       >
//         <div className="w-[80vw] h-[80vw] bg-gold-500/5 blur-[120px] rounded-full opacity-40" />
//       </motion.div>

//       {/* CONTENT */}
//       <motion.div 
//         style={{ opacity }} 
//         className="relative z-10 text-center space-y-12 px-4"
//       >
//         {/* SCENE STAMP */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 3, duration: 1 }} // Late arrival
//           className="flex flex-col items-center gap-2 text-neutral-600 font-mono text-[9px] tracking-[0.5em] uppercase"
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-neutral-700">{time} IST</span>}
//         </motion.div>
        
//         {/* THE BARRIER (The Fourth Wall) */}
//         {/* mix-blend-difference makes it interact with the fading white light */}
//         <h1 className="flex flex-col items-center justify-center cursor-default mix-blend-difference">
//           <motion.span 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2, duration: 2, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
//           >
//             The Fourth
//           </motion.span>
          
//           <motion.span 
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 2.5, duration: 2, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             whileHover={{ scale: 1.02, skewX: -5, color: "#D4AF37" }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic text-white/90 tracking-tight -mt-2 md:-mt-6 transition-colors duration-500"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* THE BREACH (Manifesto) */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 4, duration: 1 }}
//             className="flex flex-col gap-1 text-neutral-600 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase"
//         >
//             <span>The Dimensions</span>
//             <span className="h-[1px] w-full bg-neutral-800 my-2" />
//             <span>Are Unfolding</span>
//         </motion.div>
//       </motion.div>

//       {/* MAGNETIC CHEVRON */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 5, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-800 animate-bounce"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M7 13L12 18L17 13" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";

// export default function HeroStage() {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 3D PARALLAX PHYSICS
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 50, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 50, damping: 30 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     // Normalize -0.5 to 0.5
//     x.set((clientX / width) - 0.5);
//     y.set((clientY / height) - 0.5);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] perspective-1000"
//     >
//       {/* ATMOSPHERE */}
//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         style={{ rotateX, rotateY }} // The fog moves in 3D
//       >
//         <div className="w-[70vw] h-[70vw] bg-gold-500/5 blur-[100px] rounded-full opacity-50" />
//       </motion.div>

//       {/* 3D CONTENT CONTAINER */}
//       <motion.div 
//         style={{ opacity, rotateX, rotateY }} 
//         className="relative z-10 text-center space-y-12 px-4 transform-style-3d"
//       >
//         {/* SCENE STAMP */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           className="flex flex-col items-center gap-2 text-neutral-600 font-mono text-[9px] tracking-[0.5em] uppercase"
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-neutral-700">{time} IST</span>}
//         </motion.div>
        
//         {/* THE FOURTH WALL */}
//         <h1 className="flex flex-col items-center justify-center cursor-default">
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
//             animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//             transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
//           >
//             The Fourth
//           </motion.span>
          
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
//             animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
//             transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             whileHover={{ scale: 1.05, color: "#D4AF37", textShadow: "0 0 30px rgba(212,175,55,0.3)" }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic text-white tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.5, duration: 1 }}
//             className="flex flex-col gap-1 text-neutral-600 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase"
//         >
//             <span>The Dimensions</span>
//             <span className="h-[1px] w-full bg-neutral-800 my-2" />
//             <span>Are Unfolding</span>
//         </motion.div>
//       </motion.div>

//       {/* MAGNETIC CHEVRON */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 4.5, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-800 animate-bounce"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M7 13L12 18L17 13" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";

// export default function HeroStage() {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 1. MOUSE PHYSICS (Aggressive & Smooth)
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Increased tilt range (15 deg) for visible 3D effect
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX / width) - 0.5);
//     y.set((clientY / height) - 0.5);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//       // CRITICAL: Set the camera distance
//       style={{ perspective: "1000px" }}
//     >
//       {/* ATMOSPHERE (Deep Background) */}
//       {/* We push this BACK in Z-space so it feels far away */}
//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         style={{ 
//             rotateX, 
//             rotateY,
//             transformStyle: "preserve-3d",
//             z: -100 // Push background away
//         }} 
//       >
//         <div className="w-[70vw] h-[70vw] bg-gold-500/5 blur-[100px] rounded-full opacity-50" />
//       </motion.div>

//       {/* 3D CONTENT CONTAINER */}
//       <motion.div 
//         style={{ opacity, rotateX, rotateY, transformStyle: "preserve-3d" }} 
//         className="relative z-10 text-center space-y-12 px-4"
//       >
//         {/* SCENE STAMP (Layer 0 - Base) */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           className="flex flex-col items-center gap-2 text-neutral-600 font-mono text-[9px] tracking-[0.5em] uppercase"
//           style={{ transform: "translateZ(20px)" }} // Floats slightly above base
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-neutral-700">{time} IST</span>}
//         </motion.div>
        
//         {/* THE FOURTH WALL (The 3D Structure) */}
//         <h1 className="flex flex-col items-center justify-center cursor-default" style={{ transformStyle: "preserve-3d" }}>
          
//           {/* LAYER 1: "The Fourth" (Mid Ground) */}
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(10px)", z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", z: 30 }} // Pushed forward 30px
//             transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-500 tracking-tighter"
//             style={{ transform: "translateZ(30px)" }} 
//           >
//             The Fourth
//           </motion.span>
          
//           {/* LAYER 2: "Wall" (Foreground - The Breach) */}
//           {/* This sits 80px closer to the user than the background. True Depth. */}
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", scale: 1, z: 80 }} // Pushed forward 80px
//             transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             whileHover={{ scale: 1.05, color: "#D4AF37", textShadow: "0 0 30px rgba(212,175,55,0.3)" }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic text-white tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
//             style={{ transform: "translateZ(80px)" }}
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO (Layer 0 - Base) */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.5, duration: 1 }}
//             className="flex flex-col gap-1 text-neutral-600 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase"
//         >
//             <span>The Dimensions</span>
//             <span className="h-[1px] w-full bg-neutral-800 my-2" />
//             <span>Are Unfolding</span>
//         </motion.div>
//       </motion.div>

//       {/* CHEVRON (Fixed to screen, no 3D) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 4.5, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-800 animate-bounce"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M7 13L12 18L17 13" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";

// export default function HeroStage() {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 1. MOUSE PHYSICS (The 3D Weight)
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // 15deg tilt for that "Floating Tablet" feel
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX / width) - 0.5);
//     y.set((clientY / height) - 0.5);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//       style={{ perspective: "1000px" }} // The Camera Lens
//     >
//       {/* ATMOSPHERE (Deep Background) */}
//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         style={{ 
//             rotateX, 
//             rotateY,
//             transformStyle: "preserve-3d",
//             z: -100 
//         }} 
//       >
//         {/* A Gold Nebula */}
//         <div className="w-[70vw] h-[70vw] bg-gold-500/10 blur-[120px] rounded-full opacity-60" />
//       </motion.div>

//       {/* 3D CONTENT CONTAINER */}
//       <motion.div 
//         style={{ opacity, rotateX, rotateY, transformStyle: "preserve-3d" }} 
//         className="relative z-10 text-center space-y-12 px-4"
//       >
//         {/* SCENE STAMP (Restored Gold) */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           // RESTORED: text-gold-500/60 instead of neutral-600
//           className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase"
//           style={{ transform: "translateZ(20px)" }} 
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-gold-500/40">{time} IST</span>}
//         </motion.div>
        
//         {/* THE FOURTH WALL */}
//         <h1 className="flex flex-col items-center justify-center cursor-default" style={{ transformStyle: "preserve-3d" }}>
          
//           {/* LAYER 1: "The Fourth" (Neutral Base) */}
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(10px)", z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", z: 30 }} 
//             transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
//             style={{ transform: "translateZ(30px)" }} 
//           >
//             The Fourth
//           </motion.span>
          
//           {/* LAYER 2: "Wall" (THE GOLD STANDARD) */}
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", scale: 1, z: 80 }} 
//             transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             // RESTORED: Default color is Gold (#D4AF37). Hover is White (Breach).
//             style={{ color: "#D4AF37", transform: "translateZ(80px)" }} 
//             whileHover={{ 
//               scale: 1.05, 
//               color: "#FFFFFF", // Turns White when touched
//               textShadow: "0 0 40px rgba(255,255,255,0.6)" // The Glow
//             }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO (Restored Shine) */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.5, duration: 1 }}
//             className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase"
//         >
//             <span>The Dimensions</span>
//             {/* RESTORED: The Gold Gradient Line */}
//             <span className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent my-2" />
//             <span>Are Unfolding</span>
//         </motion.div>
//       </motion.div>

//       {/* CHEVRON */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 4.5, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold-500/50 animate-bounce"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M7 13L12 18L17 13" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";

// export default function HeroStage() {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 3D PHYSICS
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX / width) - 0.5);
//     y.set((clientY / height) - 0.5);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//       style={{ perspective: "1000px" }}
//     >
//       {/* ATMOSPHERE */}
//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         style={{ 
//             rotateX, 
//             rotateY,
//             transformStyle: "preserve-3d",
//             z: -100 
//         }} 
//       >
//         <div className="w-[70vw] h-[70vw] bg-gold-500/10 blur-[120px] rounded-full opacity-60" />
//       </motion.div>

//       {/* 3D CONTENT CONTAINER */}
//       <motion.div 
//         style={{ opacity, rotateX, rotateY, transformStyle: "preserve-3d" }} 
//         className="relative z-10 text-center space-y-12 px-4"
//       >
//         {/* SCENE STAMP */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase"
//           style={{ transform: "translateZ(20px)" }} 
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-gold-500/40">{time} IST</span>}
//         </motion.div>
        
//         {/* THE FOURTH WALL */}
//         <h1 className="flex flex-col items-center justify-center cursor-default" style={{ transformStyle: "preserve-3d" }}>
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(10px)", z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", z: 30 }} 
//             transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
//             style={{ transform: "translateZ(30px)" }} 
//           >
//             The Fourth
//           </motion.span>
          
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", scale: 1, z: 80 }} 
//             transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             style={{ color: "#D4AF37", transform: "translateZ(80px)" }} 
//             whileHover={{ 
//               scale: 1.05, 
//               color: "#FFFFFF",
//               textShadow: "0 0 40px rgba(255,255,255,0.6)"
//             }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO (The Shiny Metal Update) */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.5, duration: 1 }}
//             className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase items-center"
//         >
//             <span>The Dimensions</span>
            
//             {/* THE METALLIC SHEEN SWEEP */}
//             <div className="relative h-[1px] w-full overflow-hidden bg-gradient-to-r from-transparent via-gold-500/20 to-transparent">
//               {/* The Photon Traveller */}
//               <motion.div 
//                 className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
//                 initial={{ x: "-150%" }}
//                 animate={{ x: "150%" }}
//                 transition={{ 
//                   repeat: Infinity, 
//                   duration: 1.5, 
//                   ease: "easeInOut", 
//                   repeatDelay: 0.5 // Pause briefly to let the metal cool down
//                 }}
//               />
//             </div>

//             <span>Are Unfolding</span>
//         </motion.div>
//       </motion.div>

//       {/* CHEVRON */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 4.5, duration: 1 }}
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold-500/50 animate-bounce"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M7 13L12 18L17 13" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";
// import { Play } from "@/types/schema"; // Import Type
// import Link from "next/link"; // For the link

// // Accept the Play prop
// export default function HeroStage({ play }: { play: Play | null }) {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 3D PHYSICS (Unchanged)
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX / width) - 0.5);
//     y.set((clientY / height) - 0.5);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//       style={{ perspective: "1000px" }}
//     >
//       {/* ATMOSPHERE (Unchanged) */}
//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d", z: -100 }} 
//       >
//         <div className="w-[70vw] h-[70vw] bg-gold-500/10 blur-[120px] rounded-full opacity-60" />
//       </motion.div>

//       {/* 3D CONTENT CONTAINER */}
//       <motion.div 
//         style={{ opacity, rotateX, rotateY, transformStyle: "preserve-3d" }} 
//         className="relative z-10 text-center space-y-12 px-4"
//       >
//         {/* SCENE STAMP */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase"
//           style={{ transform: "translateZ(20px)" }} 
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-gold-500/40">{time} IST</span>}
//         </motion.div>
        
//         {/* THE FOURTH WALL */}
//         <h1 className="flex flex-col items-center justify-center cursor-default" style={{ transformStyle: "preserve-3d" }}>
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(10px)", z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", z: 30 }} 
//             transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
//             style={{ transform: "translateZ(30px)" }} 
//           >
//             The Fourth
//           </motion.span>
          
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", scale: 1, z: 80 }} 
//             transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             style={{ color: "#D4AF37", transform: "translateZ(80px)" }} 
//             whileHover={{ scale: 1.05, color: "#FFFFFF", textShadow: "0 0 40px rgba(255,255,255,0.6)" }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO with SHEEN SWEEP (Unchanged) */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.5, duration: 1 }}
//             className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase items-center"
//         >
//             <span>The Dimensions</span>
//             <div className="relative h-[1px] w-full overflow-hidden bg-gradient-to-r from-transparent via-gold-500/20 to-transparent">
//               <motion.div 
//                 className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
//                 initial={{ x: "-150%" }}
//                 animate={{ x: "150%" }}
//                 transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", repeatDelay: 0.5 }}
//               />
//             </div>
//             <span>Are Unfolding</span>
//         </motion.div>

//         {/* --- THE NEW INTEGRATION: THE "NOW SHOWING" TICKER --- */}
//         {/* Only appears if we successfully fetched a play from the DB */}
//         {play && (
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 4.5, duration: 1 }}
//                 className="pt-12"
//                 style={{ transform: "translateZ(40px)" }} // Floats forward
//             >
//                 <Link 
//                     href={`/originals/${play.slug}`}
//                     className="group flex flex-col items-center gap-2 cursor-pointer"
//                     onMouseEnter={() => playSound('hover')}
//                 >
//                     <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 group-hover:text-gold-500 transition-colors">
//                         Now Showing
//                     </span>
//                     <div className="flex items-center gap-2">
//                         <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> {/* The LIVE Dot */}
//                         <span className="text-xs md:text-sm font-serif italic text-neutral-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-gold-500/50 pb-1">
//                             {play.title}
//                         </span>
//                     </div>
//                 </Link>
//             </motion.div>
//         )}

//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";
// import { Play } from "@/types/schema";
// import Link from "next/link";

// export default function HeroStage({ play }: { play: Play | null }) {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 3D PHYSICS (High Fidelity)
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX / width) - 0.5);
//     y.set((clientY / height) - 0.5);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
//       style={{ perspective: "1000px" }}
//     >
//       {/* ATMOSPHERE (Background) */}
//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none"
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d", z: -100 }} 
//       >
//         <div className="w-[70vw] h-[70vw] bg-gold-500/10 blur-[120px] rounded-full opacity-60" />
//       </motion.div>

//       {/* 3D CONTENT CONTAINER */}
//       <motion.div 
//         style={{ opacity, rotateX, rotateY, transformStyle: "preserve-3d" }} 
//         className="relative z-10 text-center space-y-12 px-4"
//       >
//         {/* SCENE STAMP */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase"
//           style={{ transform: "translateZ(20px)" }} 
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-gold-500/40">{time} IST</span>}
//         </motion.div>
        
//         {/* THE FOURTH WALL */}
//         <h1 className="flex flex-col items-center justify-center cursor-default" style={{ transformStyle: "preserve-3d" }}>
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(10px)", z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", z: 30 }} 
//             transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
//             style={{ transform: "translateZ(30px)" }} 
//           >
//             The Fourth
//           </motion.span>
          
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, z: 0 }}
//             animate={{ opacity: 1, filter: "blur(0px)", scale: 1, z: 80 }} 
//             transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" }}
//             onMouseEnter={() => playSound('hover')}
//             style={{ color: "#D4AF37", transform: "translateZ(80px)" }} 
//             whileHover={{ scale: 1.05, color: "#FFFFFF", textShadow: "0 0 40px rgba(255,255,255,0.6)" }}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO (Sheen Sweep) */}
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 3.5, duration: 1 }}
//             className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase items-center"
//         >
//             <span>The Dimensions</span>
//             <div className="relative h-[1px] w-full overflow-hidden bg-gradient-to-r from-transparent via-gold-500/20 to-transparent">
//               <motion.div 
//                 className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
//                 initial={{ x: "-150%" }}
//                 animate={{ x: "150%" }}
//                 transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", repeatDelay: 0.5 }}
//               />
//             </div>
//             <span>Are Unfolding</span>
//         </motion.div>

//         {/* --- THE ARTIFACT (The New Data Integration) --- */}
//         {play && (
//             <motion.div
//                 initial={{ opacity: 0, y: 40, rotateX: 20 }}
//                 animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                 transition={{ delay: 4.5, duration: 1.5, ease: "easeOut" }}
//                 className="pt-16"
//                 // This Z-index separates it from the text. It floats closer to the user.
//                 style={{ transform: "translateZ(60px)" }} 
//             >
//                 <Link 
//                     href={`/originals/${play.slug}`}
//                     className="group relative inline-flex items-center gap-4 px-6 py-3 rounded-full bg-neutral-900/40 border border-white/5 backdrop-blur-md hover:border-gold-500/30 transition-all duration-500"
//                     onMouseEnter={() => playSound('hover')}
//                 >
//                     {/* The Glow Behind */}
//                     <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500 rounded-full" />
                    
//                     {/* The Live Pulse (Aayam Gold) */}
//                     <div className="relative flex h-2 w-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
//                     </div>

//                     <div className="flex flex-col items-start gap-0.5">
//                         <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-gold-400 transition-colors">
//                             Now Premiering
//                         </span>
//                         <span className="text-xs font-serif text-neutral-200 group-hover:text-white transition-colors">
//                             {play.title}
//                         </span>
//                     </div>

//                     {/* The Arrow (Subtle Guide) */}
//                     <svg className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                 </Link>
//             </motion.div>
//         )}

//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
// import { useEffect, useState } from "react";
// import { playSound } from "@/lib/audio";
// import { Play } from "@/types/schema";
// import Link from "next/link";

// export default function HeroStage({ play }: { play: Play | null }) {
//   const { scrollY } = useScroll();
//   const [time, setTime] = useState<string | null>(null);
//   const [isHoveringPlay, setIsHoveringPlay] = useState(false); // NEW STATE

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
//     }, 1000 * 60);
//     return () => clearInterval(timer);
//   }, []);

//   // 3D PHYSICS
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

//   function handleMouseMove(e: React.MouseEvent) {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height } = currentTarget.getBoundingClientRect();
//     x.set((clientX / width) - 0.5);
//     y.set((clientY / height) - 0.5);
//   }

//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);

//   return (
//     <section 
//       onMouseMove={handleMouseMove}
//       className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] transition-colors duration-1000"
//       style={{ perspective: "1000px" }}
//     >
//       {/* --- LAYER 0: THE DYNAMIC POSTER REVEAL (The Cultural/Cinematic Layer) --- */}
//       {play?.poster_url && (
//         <motion.div 
//           className="absolute inset-0 z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isHoveringPlay ? 0.4 : 0 }} // Reveal on hover
//           transition={{ duration: 0.8 }}
//         >
//             <img 
//                 src={play.poster_url} 
//                 alt="Atmosphere" 
//                 className="w-full h-full object-cover blur-sm grayscale opacity-50"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
//         </motion.div>
//       )}

//       {/* --- LAYER 1: THE FOG (Atmosphere) --- */}
//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d", z: -100 }} 
//       >
//         <div className="w-[70vw] h-[70vw] bg-gold-500/10 blur-[120px] rounded-full opacity-60" />
//       </motion.div>

//       {/* --- LAYER 2: THE CONTENT --- */}
//       <motion.div 
//         style={{ opacity, rotateX, rotateY, transformStyle: "preserve-3d" }} 
//         className="relative z-10 text-center space-y-12 px-4"
//       >
//         {/* SCENE STAMP */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5, duration: 1 }}
//           className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase"
//           style={{ transform: "translateZ(20px)" }} 
//         >
//           <span>Act I : The Awakening</span>
//           {time && <span className="text-gold-500/40">{time} IST</span>}
//         </motion.div>
        
//         {/* THE FOURTH WALL (Reacts to Hover) */}
//         <h1 className="flex flex-col items-center justify-center cursor-default" style={{ transformStyle: "preserve-3d" }}>
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(10px)", z: 0 }}
//             animate={{ 
//                 opacity: isHoveringPlay ? 0.3 : 1, // Fades out when play is revealed
//                 filter: "blur(0px)", 
//                 z: 30 
//             }} 
//             transition={{ duration: 0.5 }}
//             className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
//             style={{ transform: "translateZ(30px)" }} 
//           >
//             The Fourth
//           </motion.span>
          
//           <motion.span 
//             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, z: 0 }}
//             animate={{ 
//                 opacity: 1, 
//                 filter: "blur(0px)", 
//                 scale: 1, 
//                 z: 80,
//                 // If hovering play, turn the text into an Outline (Ghost)
//                 color: isHoveringPlay ? "transparent" : "#D4AF37",
//                 WebkitTextStroke: isHoveringPlay ? "1px #D4AF37" : "0px transparent"
//             } as any} 
//             transition={{ duration: 0.5 }}
//             onMouseEnter={() => playSound('hover')}
//             className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
//             style={{ transform: "translateZ(80px)" }}
//           >
//             Wall
//           </motion.span>
//         </h1>

//         {/* MANIFESTO (Sheen Sweep) */}
//         <motion.div 
//             animate={{ opacity: isHoveringPlay ? 0 : 1 }} // Hide when focused on play
//             transition={{ duration: 0.5 }}
//             className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase items-center"
//         >
//             <span>The Dimensions</span>
//             <div className="relative h-[1px] w-full overflow-hidden bg-gradient-to-r from-transparent via-gold-500/20 to-transparent">
//               <motion.div 
//                 className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
//                 initial={{ x: "-150%" }}
//                 animate={{ x: "150%" }}
//                 transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", repeatDelay: 0.5 }}
//               />
//             </div>
//             <span>Are Unfolding</span>
//         </motion.div>

//         {/* --- THE ARTIFACT (The Trigger) --- */}
//         {play && (
//             <motion.div
//                 initial={{ opacity: 0, y: 40, rotateX: 20 }}
//                 animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                 transition={{ delay: 4.5, duration: 1.5, ease: "easeOut" }}
//                 className="pt-16"
//                 style={{ transform: "translateZ(60px)" }} 
//             >
//                 <Link 
//                     href={`/originals/${play.slug}`}
//                     className="group relative inline-flex items-center gap-4 px-6 py-3 rounded-full bg-neutral-900/40 border border-white/5 backdrop-blur-md hover:border-gold-500/50 transition-all duration-500"
//                     // TRIGGER THE IMMERSION
//                     onMouseEnter={() => {
//                         playSound('hover');
//                         setIsHoveringPlay(true);
//                     }}
//                     onMouseLeave={() => setIsHoveringPlay(false)}
//                 >
//                     {/* The Glow */}
//                     <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-500 rounded-full" />
                    
//                     {/* The Live Pulse */}
//                     <div className="relative flex h-2 w-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
//                     </div>

//                     <div className="flex flex-col items-start gap-0.5">
//                         <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-gold-400 transition-colors">
//                             Now Premiering
//                         </span>
//                         <span className="text-xs font-serif text-neutral-200 group-hover:text-white transition-colors">
//                             {play.title}
//                         </span>
//                     </div>

//                     {/* Arrow */}
//                     <svg className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                 </Link>
//             </motion.div>
//         )}

//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { playSound } from "@/lib/audio";
import { Play } from "@/types/schema";
import Link from "next/link";
import Image from "next/image"; // 1. UPGRADE: Use Next.js Image Optimization

export default function HeroStage({ play }: { play: Play | null }) {
  const { scrollY } = useScroll();
  const [time, setTime] = useState<string | null>(null);
  const [isHoveringPlay, setIsHoveringPlay] = useState(false);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  // 3D PHYSICS
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX / width) - 0.5);
    y.set((clientY / height) - 0.5);
  }

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] transition-colors duration-1000"
      style={{ perspective: "1000px" }}
    >
      {/* --- LAYER 0: THE DYNAMIC POSTER REVEAL --- */}
      {play?.poster_url && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHoveringPlay ? 1 : 0 }} // Full opacity of the container
          transition={{ duration: 0.8 }}
        >
            {/* 2. UPGRADE: Next/Image for Instant Loading */}
            <div className="relative w-full h-full">
              <Image 
                  src={play.poster_url} 
                  alt="Production Atmosphere" 
                  fill
                  priority // Downloads immediately, even if invisible
                  className="object-cover blur-sm opacity-60 grayscale" 
                  sizes="100vw"
              />
              {/* 3. UPGRADE: Heavy Vignette for Text Safety */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]" />
              <div className="absolute inset-0 bg-black/20" /> 
            </div>
        </motion.div>
      )}

      {/* --- LAYER 1: THE FOG (Atmosphere) --- */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", z: -100 }} 
      >
        <div className="w-[70vw] h-[70vw] bg-gold-500/10 blur-[120px] rounded-full opacity-60" />
      </motion.div>

      {/* --- LAYER 2: THE CONTENT --- */}
      <motion.div 
        style={{ opacity, rotateX, rotateY, transformStyle: "preserve-3d" }} 
        className="relative z-10 text-center space-y-12 px-4"
      >
        {/* SCENE STAMP */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-col items-center gap-2 text-gold-500/60 font-mono text-[9px] tracking-[0.5em] uppercase"
          style={{ transform: "translateZ(20px)" }} 
        >
          <span>Act I : The Awakening</span>
          {time && <span className="text-gold-500/40">{time} IST</span>}
        </motion.div>
        
        {/* THE FOURTH WALL */}
        <h1 className="flex flex-col items-center justify-center cursor-default" style={{ transformStyle: "preserve-3d" }}>
          <motion.span 
            initial={{ opacity: 0, filter: "blur(10px)", z: 0 }}
            animate={{ 
                opacity: isHoveringPlay ? 0.3 : 1, 
                filter: "blur(0px)", 
                z: 30 
            }} 
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif text-neutral-400 tracking-tighter"
            style={{ transform: "translateZ(30px)" }} 
          >
            The Fourth
          </motion.span>
          
          <motion.span 
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, z: 0 }}
            animate={{ 
                opacity: 1, 
                filter: "blur(0px)", 
                scale: 1, 
                z: 80,
                color: isHoveringPlay ? "transparent" : "#D4AF37",
                WebkitTextStroke: isHoveringPlay ? "1px #D4AF37" : "0px transparent"
            } as any} 
            transition={{ duration: 0.5 }}
            onMouseEnter={() => playSound('hover')}
            className="text-6xl md:text-9xl lg:text-[10rem] font-serif italic tracking-tight -mt-2 md:-mt-6 transition-all duration-500"
            style={{ transform: "translateZ(80px)" }}
          >
            Wall
          </motion.span>
        </h1>

        {/* MANIFESTO */}
        <motion.div 
            animate={{ opacity: isHoveringPlay ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1 text-neutral-500 font-sans text-xs max-w-sm mx-auto tracking-widest uppercase items-center"
        >
            <span>The Dimensions</span>
            <div className="relative h-[1px] w-full overflow-hidden bg-gradient-to-r from-transparent via-gold-500/20 to-transparent">
              <motion.div 
                className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", repeatDelay: 0.5 }}
              />
            </div>
            <span>Are Unfolding</span>
        </motion.div>

        {/* --- THE ARTIFACT (The Trigger) --- */}
        {play && (
            <motion.div
                initial={{ opacity: 0, y: 40, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 4.5, duration: 1.5, ease: "easeOut" }}
                className="pt-16"
                style={{ transform: "translateZ(60px)" }} 
            >
                <Link 
                    href={`/originals/${play.slug}`}
                    className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-neutral-900/40 border border-white/5 backdrop-blur-md hover:border-gold-500/50 transition-all duration-500"
                    onMouseEnter={() => {
                        playSound('hover');
                        setIsHoveringPlay(true);
                    }}
                    onMouseLeave={() => setIsHoveringPlay(false)}
                >
                    {/* The Glow */}
                    <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-500 rounded-full" />
                    
                    {/* The Live Pulse */}
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                        {/* 4. UPGRADE: Readable Text Sizes */}
                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-gold-400 transition-colors font-mono">
                            Now Premiering
                        </span>
                        <span className="text-sm font-serif text-neutral-200 group-hover:text-white transition-colors italic">
                            {play.title}
                        </span>
                    </div>

                    {/* Arrow */}
                    <svg className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </motion.div>
        )}

      </motion.div>
    </section>
  );
}