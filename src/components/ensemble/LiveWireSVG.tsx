// "use client";

// import { motion, useScroll, useSpring } from "framer-motion";
// import { useLiveWire } from "./LiveWireContext";
// import { EnsembleMember } from "@/types/schema";

// export default function LiveWireSVG({ members, totalHeight }: { members: EnsembleMember[], totalHeight: number }) {
//   const { targets } = useLiveWire();
  
//   // SCROLL PHYSICS (The Impulse)
//   const { scrollYProgress } = useScroll();
//   const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 }); // Fast response

//   // GENERATE THE ANGLED PATH
//   let d = `M 50% 0 L 50% 100 `; // Start at top center

//   // We iterate through members and connect Text -> Image -> Next Text...
//   // BUT: We rely on the targets being present. If they aren't loaded yet, we wait.
  
//   const points: string[] = [];
//   const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;

//   members.forEach((member, i) => {
//       const text = targets[`${member.id}-text`];
//       const image = targets[`${member.id}-image`];
      
//       if (text && image) {
//           const isLeft = i % 2 === 0;
          
//           // LOGIC: Vertical Drop -> Horizontal Slash to Text -> Horizontal Slash to Image -> Vertical Drop
//           // 1. Drop from previous point (or center) to Text Y level
//           // 2. Cut to Text Center
//           // 3. Cut to Image Center
          
//           // Since we are inside an SVG that spans the whole container, coordinates are absolute pixels.
          
//           // Move to Text Y level (Center spine)
//           // d += `L ${centerX} ${text.y} `; 
          
//           // Slash to Text
//           d += `L ${text.x} ${text.y} `;
          
//           // Slash to Image
//           d += `L ${image.x} ${image.y} `;
          
//           // Return to Center Spine below image
//           d += `L ${centerX} ${image.y + (image.height/2) + 50} `;
//       }
//   });
  
//   // End line
//   d += `L 50% ${totalHeight}`;

//   return (
//       <svg className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible">
//           {/* 1. The Wire (Gold) */}
//           <motion.path 
//             d={d} 
//             fill="none" 
//             stroke="#eab308" 
//             strokeWidth="2" 
//             strokeLinejoin="round"
//             style={{ pathLength }}
//             className="mix-blend-exclusion" // THE CUT EFFECT
//           />
          
//           {/* 2. The Pulse (White Energy Bolt) */}
//           <motion.path 
//             d={d} 
//             fill="none" 
//             stroke="white" 
//             strokeWidth="4" 
//             strokeOpacity="1"
//             initial={{ pathLength: 0, pathOffset: 0 }}
//             animate={{ pathLength: [0, 0.2, 0], pathOffset: [0, 1, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//             filter="url(#glow)"
//             className="mix-blend-screen"
//           />

//           <defs>
//             <filter id="glow">
//                 <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//                 <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//             </filter>
//           </defs>
//       </svg>
//   );
// }