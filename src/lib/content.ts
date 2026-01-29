import { Mood } from "./constants";

export interface Video {
  id: string;
  title: string;
  youtubeId: string; // The ID from the YouTube URL
  thumbnail: string; // URL to the poster
  mood: string; // Matches the Mood IDs (comedy, drama, etc.)
  duration: string;
  director: string;
  cast: string[];
}

// MOCK DATA: Aayam Repertoire
export const PLAY_LIST: Video[] = [
  {
    id: "1",
    title: "The Last Echo",
    youtubeId: "dQw4w9WgXcQ", // Replace with real Aayam video ID
    thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop",
    mood: "drama",
    duration: "14:20",
    director: "Siddharth",
    cast: ["Rohan", "Priya"]
  },
  {
    id: "2",
    title: "Chai Tapri Talks",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop",
    mood: "comedy",
    duration: "08:45",
    director: "Anjali",
    cast: ["Vikram", "Neha"]
  },
  {
    id: "3",
    title: "Shadows of the Street",
    youtubeId: "LXb3EKWsInQ",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1000&auto=format&fit=crop",
    mood: "street",
    duration: "12:10",
    director: "Rahul",
    cast: ["Group A"]
  },
  // Add more mock data as needed...
];