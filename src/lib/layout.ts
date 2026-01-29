// // src/lib/layout.ts
// import { Play } from "@/types/schema";

// export type CardSize = 'titan' | 'portrait' | 'landscape' | 'standard';

// export function getCardSize(score: number): CardSize {
//   if (score >= 90) return 'titan';      // Massive (2x2)
//   if (score >= 80) return 'portrait';   // Tall (1x2)
//   if (score >= 70) return 'landscape';  // Wide (2x1)
//   return 'standard';                    // Normal (1x1)
// }

// export function getGridClasses(size: CardSize): string {
//   switch (size) {
//     case 'titan': return 'md:col-span-2 md:row-span-2';
//     case 'portrait': return 'md:col-span-1 md:row-span-2';
//     case 'landscape': return 'md:col-span-2 md:row-span-1';
//     default: return 'md:col-span-1 md:row-span-1';
//   }
// }

// // src/lib/layout.ts
// import { Play } from "@/types/schema";

// export type CardSize = 'titan' | 'portrait' | 'landscape';

// export function getCardSize(play: Play): CardSize {
//   // 1. THE EXCEPTION (The Premiere)
//   // Only the absolute highest priority item (e.g. 100) gets the Spotlight.
//   // This is for "New Releases" or "Admin Focus", not judgment.
//   if (play.featured_score === 100) return 'titan';

//   // 2. THE GEOMETRY (Form Follows Function)
//   // If we lack a poster, we MUST show the video thumbnail.
//   // Video thumbnails are 16:9. We respect the frame.
//   if (!play.poster_url && play.youtube_id) {
//      return 'landscape';
//   }

//   // 3. THE STANDARD (The Poster)
//   // If a poster exists, it was designed for Portrait. We respect the canvas.
//   return 'portrait';
// }

// export function getGridClasses(size: CardSize): string {
//   switch (size) {
//     case 'titan': 
//       // Spans 2x2. The Showstopper.
//       return 'md:col-span-2 md:row-span-2 h-[600px]';
    
//     case 'landscape': 
//       // Spans 2 wide. Respects the Cinematic Ratio.
//       return 'md:col-span-2 md:row-span-1 h-[300px]';
    
//     case 'portrait': 
//     default:
//       // Standard Vertical. Respects the Print Ratio.
//       return 'md:col-span-1 md:row-span-2 h-[600px]';
//   }
// }


//***Above this is good version, lets check below version */

// src/lib/layout.ts
import { Play } from "@/types/schema";

export type CardSize = 'titan' | 'portrait' | 'landscape';

export function getCardSize(play: Play): CardSize {
  // 1. THE EXCEPTION (The Premiere)
  // Only the absolute highest priority item (e.g. 100) gets the Spotlight.
  // This is for "New Releases" or "Admin Focus", not judgment.
  if (play.featured_score === 100) return 'titan';

  // 2. THE GEOMETRY (Form Follows Function)
  // If we lack a poster, we MUST show the video thumbnail.
  // Video thumbnails are 16:9. We respect the frame.
  if (!play.poster_url && play.youtube_id) {
     return 'landscape';
  }

  // 3. THE STANDARD (The Poster)
  // If a poster exists, it was designed for Portrait. We respect the canvas.
  return 'portrait';
}

export function getGridClasses(size: CardSize): string {
  switch (size) {
    case 'titan': 
      // Spans 2x2. The Showstopper.
      return 'md:col-span-2 md:row-span-2 h-[600px]';
    
    case 'landscape': 
      // Spans 2 wide. Respects the Cinematic Ratio.
      return 'md:col-span-2 md:row-span-1 h-[300px]';
    
    case 'portrait': 
    default:
      // Standard Vertical. Respects the Print Ratio.
      return 'md:col-span-1 md:row-span-2 h-[600px]';
  }
}