export interface Member {
  id: string;
  name: string;
  roleStudent: string; // e.g. "Secretary / BS Degree"
  roleArtist: string;  // e.g. "The Visionary / Method Actor"
  image: string;       // URL to photo
  voiceNote: string;   // URL to audio file (mp3/ogg)
  tags: string[];      // e.g. ["Actor", "Writer"]
}

export const TEAM_LIST: Member[] = [
  {
    id: "1",
    name: "Siddharth",
    roleStudent: "Secretary | Diploma Level",
    roleArtist: "The Storyteller | Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    voiceNote: "/audio/siddharth_intro.mp3", // You will need to add real files later
    tags: ["Leadership", "Direction"]
  },
  {
    id: "2",
    name: "Aditi",
    roleStudent: "Data Science Student",
    roleArtist: "The Tragic Heroine",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    voiceNote: "/audio/aditi_intro.mp3",
    tags: ["Actor", "Singer"]
  },
  // Add more team members...
];