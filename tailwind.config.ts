// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   // content: [
//   //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   // ],
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/lib/**/*.{js,ts,jsx,tsx,mdx}", // Added this just in case
//   ],
//   theme: {
//     extend: {
//       // 1. THE COLOR PSYCHOLOGY
//       colors: {
//         // THE VOID (Base Stage)
//         background: "#050505", // Deep Charcoal, not flat black
//         foreground: "#F0F0F0", // Off-white script paper
        
//         // THE GLORY (Brand Identity)
//         gold: {
//           400: "#FACC15",
//           500: "#D4AF37", // The "Aayam Gold"
//           600: "#A16207",
//           glow: "rgba(212, 175, 55, 0.5)",
//         },

//         // THE NAVARASA (Emotion System)
//         navarasa: {
//           comedy: "#FBBF24",   // Hasya (Amber)
//           street: "#EF4444",   // Raudra (Red)
//           drama: "#60A5FA",    // Karuna (Blue)
//           thriller: "#A855F7", // Bhayanaka (Purple)
//           musical: "#EC4899",  // Shringara (Pink)
//           peace: "#10B981",    // Shanta (Green - for Workshops)
//         },
//       },

//       // 2. THE TYPOGRAPHY MAPPING
//       fontFamily: {
//         serif: ["var(--font-serif)"], 
//         sans: ["var(--font-sans)"],
//         mono: ["var(--font-mono)"],
//       },

//       // 3. THEATER PHYSICS (Animation)
//       transitionTimingFunction: {
//         "theater": "cubic-bezier(0.25, 1, 0.5, 1)", // Starts fast, lands soft
//       },
//       animation: {
//         "spotlight": "spotlight 2s ease .75s 1 forwards",
//         "fade-up": "fadeUp 1s cubic-bezier(0.25, 1, 0.5, 1) forwards",
//         "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         "fade-in": "fadeIn 1s ease-in-out",
//         // "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         "slow-zoom": "zoom 20s ease-in-out infinite alternate"  , // NEW

//       },
//       keyframes: {
//         spotlight: {
//           "0%": { opacity: "0", transform: "translate(-50%, -150%) scale(0.5)" },
//           "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
//         },
//         fadeUp: {
//             "0%": { opacity: "0", transform: "translateY(20px)" },
//             "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         zoom: { // NEW
//           '0%': { transform: 'scale(1)' },
//           '100%': { transform: 'scale(1.2)' },
//         }
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };
// export default config;


import { Scan } from "lucide-react";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. THE COLOR PSYCHOLOGY
      colors: {
        background: "#050505",
        foreground: "#F0F0F0",
        gold: {
          400: "#FACC15",
          500: "#D4AF37",
          600: "#A16207",
          glow: "rgba(212, 175, 55, 0.5)",
        },
        navarasa: {
          comedy: "#FBBF24",
          street: "#EF4444",
          drama: "#60A5FA",
          thriller: "#A855F7",
          musical: "#EC4899",
          peace: "#10B981",
        },
      },

      // 2. THE TYPOGRAPHY MAPPING
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },

      // 3. THEATER PHYSICS (Animation)
      transitionTimingFunction: {
        "theater": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      
      // --- ADDED HERE: ANIMATION DEFINITIONS ---
      animation: {
        "spotlight": "spotlight 2s ease .75s 1 forwards",
        "fade-up": "fadeUp 1s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 1s ease-in-out",
        "slow-zoom": "zoom 20s ease-in-out infinite alternate",
        
        // NEW: The Film Grain Animation
        "grain": "grain 8s steps(10) infinite", 
        "scan": "scan 3s linear infinite", // New : Faster, linear scanline
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite", //New: Urgent Pulse
      },

      // --- ADDED HERE: KEYFRAMES ---
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-50%, -150%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        fadeUp: {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        
        // NEW: The Grain Movement Logic
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        Scan:{
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }, //MOves the beam down full height
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;