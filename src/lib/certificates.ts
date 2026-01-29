export interface Certificate {
  id: string; // The Unique ID (e.g., AAYAM-2026-X92)
  recipientName: string;
  awardTitle: string; // e.g., "Best Actor"
  eventName: string; // e.g., "Saavan Fest 2025"
  date: string;
  linkedVideoId: string; // Connects to a specific YouTube video (Evidence)
}

// MOCK DATA
export const CERTIFICATE_DATABASE: Certificate[] = [
  {
    id: "AAYAM-2025-001",
    recipientName: "Siddharth",
    awardTitle: "Best Director",
    eventName: "Street Play Competition",
    date: "15 Aug 2025",
    linkedVideoId: "dQw4w9WgXcQ" // Matches a video ID
  },
  // Add more...
];