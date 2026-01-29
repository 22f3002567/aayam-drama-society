export type Mood = {
  id: string;
  label: string; // The text shown
  sanskrit: string; // The hidden easter egg
  color: string; // The hex glow
  description: string;
};

export const NAVARASA_MOODS: Mood[] = [
  { 
    id: "all", 
    label: "The Stage", 
    sanskrit: "Sutradhara", 
    color: "#FFFFFF", // White Light
    description: "All dimensions unfolding." 
  },
  { 
    id: "comedy", 
    label: "Comedy", 
    sanskrit: "Hasya", 
    color: "#FBBF24", // Warm Amber
    description: "Laughter, satire, and joy." 
  },
  { 
    id: "drama", 
    label: "Drama", 
    sanskrit: "Karuna", 
    color: "#60A5FA", // Melancholy Blue
    description: "Tragedy and emotional depth." 
  },
  { 
    id: "thriller", 
    label: "Thriller", 
    sanskrit: "Bhayanaka", 
    color: "#A855F7", // Deep Purple
    description: "Suspense, mystery, and fear." 
  },
  { 
    id: "street", 
    label: "Street Play", 
    sanskrit: "Raudra", 
    color: "#EF4444", // Aggressive Red
    description: "Social issues, loud and raw." 
  },
  { 
    id: "musical", 
    label: "Musical", 
    sanskrit: "Shringara", 
    color: "#EC4899", // Romantic Pink
    description: "Rhythm, dance, and melody." 
  },
];