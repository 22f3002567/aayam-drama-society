// src/lib/rasa.ts

export type RasaKey = 'all' | 'shringar' | 'hasya' | 'karuna' | 'raudra' | 'veera' | 'bhayanaka' | 'bibhatsa' | 'adbhuta' | 'shanta';

export interface RasaConfig {
  id: RasaKey;
  label: string;
  english: string;
  color: string;
  tags: string[]; // Triggers
}

export const NAVARASA: RasaConfig[] = [
  { 
    id: 'shringar', label: 'Shringar', english: 'Love', color: '#d946ef', 
    tags: ['romance', 'drama', 'love', 'beauty', 'couple'] 
  },
  { 
    id: 'hasya', label: 'Hasya', english: 'Laughter', color: '#facc15', 
    tags: ['comedy', 'satire', 'funny', 'humor', 'standup'] 
  },
  { 
    id: 'karuna', label: 'Karuna', english: 'Sorrow', color: '#60a5fa', 
    tags: ['tragedy', 'sad', 'emotional', 'grief', 'cry'] 
  },
  { 
    id: 'raudra', label: 'Raudra', english: 'Fury', color: '#ef4444', 
    tags: ['thriller', 'action', 'angry', 'rage', 'violence', 'fight'] 
  },
  { 
    id: 'veera', label: 'Veera', english: 'Heroism', color: '#f97316', 
    tags: ['heroic', 'patriotic', 'bold', 'war', 'army', 'brave'] 
  },
  { 
    id: 'bhayanaka', label: 'Bhayanaka', english: 'Terror', color: '#10b981', 
    tags: ['horror', 'dark', 'fear', 'spooky', 'ghost', 'mystery'] 
  },
  { 
    id: 'bibhatsa', label: 'Bibhatsa', english: 'Disgust', color: '#6366f1', 
    tags: ['gritty', 'disturbing', 'gross', 'crime'] 
  },
  { 
    id: 'adbhuta', label: 'Adbhuta', english: 'Wonder', color: '#eab308', 
    tags: ['experimental', 'fantasy', 'sci-fi', 'magic', 'dream', 'surreal'] 
  },
  { 
    id: 'shanta', label: 'Shanta', english: 'Peace', color: '#cbd5e1', 
    tags: ['calm', 'philosophical', 'silent', 'spiritual', 'meditation'] 
  },
];

export const DEFAULT_RASA = NAVARASA[7]; // Adbhuta (Gold)

// THE SMART MATCHER
export function getRasaForPlay(mood: string): RasaConfig {
  if (!mood) return DEFAULT_RASA;
  
  const input = mood.toLowerCase().trim();

  // 1. Direct Match (e.g., Admin typed "Raudra" or "raudra")
  const directMatch = NAVARASA.find(r => r.id === input || r.label.toLowerCase() === input);
  if (directMatch) return directMatch;

  // 2. Tag Match (e.g., Admin typed "Thriller")
  const tagMatch = NAVARASA.find(r => r.tags.includes(input));
  if (tagMatch) return tagMatch;

  // 3. Fallback
  return DEFAULT_RASA;
}

// // src/lib/rasa.ts

// export type RasaKey = 'all' | 'shringar' | 'hasya' | 'karuna' | 'raudra' | 'veera' | 'bhayanaka' | 'bibhatsa' | 'adbhuta' | 'shanta';

// export interface RasaConfig {
//   id: RasaKey;
//   label: string;
//   english: string;
//   color: string;      // The Divine Light Hex
//   tags: string[];     // Mapping to DB tags
// }

// export const NAVARASA: RasaConfig[] = [
//   { id: 'shringar', label: 'Shringar', english: 'Love', color: '#d946ef', tags: ['romance', 'drama', 'love'] },
//   { id: 'hasya', label: 'Hasya', english: 'Laughter', color: '#facc15', tags: ['comedy', 'satire', 'funny'] },
//   { id: 'karuna', label: 'Karuna', english: 'Sorrow', color: '#60a5fa', tags: ['tragedy', 'sad', 'emotional'] },
//   { id: 'raudra', label: 'Raudra', english: 'Fury', color: '#ef4444', tags: ['thriller', 'action', 'angry'] },
//   { id: 'veera', label: 'Veera', english: 'Heroism', color: '#f97316', tags: ['heroic', 'patriotic'] },
//   { id: 'bhayanaka', label: 'Bhayanaka', english: 'Terror', color: '#10b981', tags: ['horror', 'dark', 'fear'] },
//   { id: 'bibhatsa', label: 'Bibhatsa', english: 'Disgust', color: '#6366f1', tags: ['gritty', 'disturbing'] },
//   { id: 'adbhuta', label: 'Adbhuta', english: 'Wonder', color: '#eab308', tags: ['experimental', 'fantasy', 'sci-fi'] },
//   { id: 'shanta', label: 'Shanta', english: 'Peace', color: '#cbd5e1', tags: ['calm', 'philosophical'] },
// ];

// export const DEFAULT_RASA = NAVARASA[7]; // Adbhuta (Gold)

// export function getRasaForPlay(mood: string): RasaConfig {
//   if (!mood) return DEFAULT_RASA;
//   const found = NAVARASA.find(r => r.tags.includes(mood.toLowerCase()));
//   return found || DEFAULT_RASA;
// }

// // src/lib/rasa.ts

// export type RasaKey = 'all' | 'shringar' | 'hasya' | 'karuna' | 'raudra' | 'veera' | 'bhayanaka' | 'bibhatsa' | 'adbhuta' | 'shanta';

// export interface RasaConfig {
//   id: RasaKey;
//   label: string;      // Sanskrit Name
//   english: string;    // English translation
//   color: string;      // The Divine Light Color (Hex)
//   tags: string[];     // Mapping to your DB 'mood' or 'tags'
// }

// export const NAVARASA: RasaConfig[] = [
//   { 
//     id: 'shringar', label: 'Shringar', english: 'Love & Beauty', color: '#d946ef', // Fuchsia
//     tags: ['romance', 'drama', 'love'] 
//   },
//   { 
//     id: 'hasya', label: 'Hasya', english: 'Laughter', color: '#facc15', // Yellow
//     tags: ['comedy', 'satire', 'funny'] 
//   },
//   { 
//     id: 'karuna', label: 'Karuna', english: 'Sorrow', color: '#94a3b8', // Blue-Grey
//     tags: ['tragedy', 'sad', 'emotional'] 
//   },
//   { 
//     id: 'raudra', label: 'Raudra', english: 'Fury', color: '#ef4444', // Red
//     tags: ['thriller', 'action', 'angry'] 
//   },
//   { 
//     id: 'veera', label: 'Veera', english: 'Heroism', color: '#f97316', // Orange
//     tags: ['heroic', 'patriotic', 'bold'] 
//   },
//   { 
//     id: 'bhayanaka', label: 'Bhayanaka', english: 'Terror', color: '#10b981', // Emerald Green (Eerie)
//     tags: ['horror', 'dark', 'fear'] 
//   },
//   { 
//     id: 'bibhatsa', label: 'Bibhatsa', english: 'Disgust', color: '#6366f1', // Indigo/Dark
//     tags: ['gritty', 'disturbing'] 
//   },
//   { 
//     id: 'adbhuta', label: 'Adbhuta', english: 'Wonder', color: '#eab308', // Gold
//     tags: ['experimental', 'fantasy', 'sci-fi'] 
//   },
//   { 
//     id: 'shanta', label: 'Shanta', english: 'Peace', color: '#cbd5e1', // White/Pale
//     tags: ['calm', 'philosophical', 'silent'] 
//   },
// ];

// // Helper to find rasa by tag
// export function getRasaForPlay(mood: string): RasaConfig {
//   const found = NAVARASA.find(r => r.tags.includes(mood.toLowerCase()));
//   return found || NAVARASA[7]; // Default to Adbhuta (Wonder/Gold) if unknown
// }

// // // src/lib/rasa.ts

// // type RasaConfig = {
// //   color: string;   // The glow color (Hex)
// //   label: string;   // The Sanskrit Rasa name (optional display)
// //   border: string;  // Tailwind border class
// //   shadow: string;  // Tailwind shadow class
// // };

// // export const RASA_MAPPING: Record<string, RasaConfig> = {
// //   // 1. SHRINGAR (Love/Beauty) -> Purple/Violet
// //   'romance': { color: '#D946EF', label: 'Shringar', border: 'group-hover:border-fuchsia-500', shadow: 'group-hover:shadow-fuchsia-500/20' },
// //   'drama': { color: '#D946EF', label: 'Shringar', border: 'group-hover:border-fuchsia-500', shadow: 'group-hover:shadow-fuchsia-500/20' },

// //   // 2. HASYA (Laughter) -> White/Bright Yellow
// //   'comedy': { color: '#FACC15', label: 'Hasya', border: 'group-hover:border-yellow-400', shadow: 'group-hover:shadow-yellow-400/20' },

// //   // 3. RAUDRA (Anger/Fury) -> Red
// //   'thriller': { color: '#EF4444', label: 'Raudra', border: 'group-hover:border-red-500', shadow: 'group-hover:shadow-red-500/20' },
// //   'action': { color: '#EF4444', label: 'Raudra', border: 'group-hover:border-red-500', shadow: 'group-hover:shadow-red-500/20' },

// //   // 4. KARUNA (Sorrow) -> Grey/Blue
// //   'tragedy': { color: '#94A3B8', label: 'Karuna', border: 'group-hover:border-slate-400', shadow: 'group-hover:shadow-slate-400/20' },

// //   // 5. BHAYANAKA (Terror) -> Black/Dark Green
// //   'horror': { color: '#10B981', label: 'Bhayanaka', border: 'group-hover:border-emerald-500', shadow: 'group-hover:shadow-emerald-500/20' },
  
// //   // 6. ADBHUTA (Wonder) -> Gold (The Default Aayam State)
// //   'experimental': { color: '#EAB308', label: 'Adbhuta', border: 'group-hover:border-gold-500', shadow: 'group-hover:shadow-gold-500/20' },
// //   'sci-fi': { color: '#EAB308', label: 'Adbhuta', border: 'group-hover:border-gold-500', shadow: 'group-hover:shadow-gold-500/20' },
// // };

// // // Default Fallback (Adbhuta/Gold)
// // const DEFAULT_RASA: RasaConfig = { 
// //   color: '#D4AF37', 
// //   label: 'Rasa', 
// //   border: 'group-hover:border-gold-500', 
// //   shadow: 'group-hover:shadow-gold-500/20' 
// // };

// // export function getRasa(mood: string): RasaConfig {
// //   // Safe check if mood is null/undefined
// //   if (!mood) return DEFAULT_RASA;
// //   const key = mood.toLowerCase();
// //   return RASA_MAPPING[key] || DEFAULT_RASA;
// // }