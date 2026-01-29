import { EnsembleMember } from "@/types/schema";

// Helper to sort members by their "Narrative Rank"
export function sortEnsembleByDepth(members: EnsembleMember[]) {
  const crown = members.filter(m => m.rank === 'CROWN' || m.rank === 'ZENITH'); // The Vision (First)
  const orbit = members.filter(m => m.rank === 'ORBIT'); // The Architects (Second)
  const cloud = members.filter(m => m.rank === 'CLOUD'); // The Foundation (Last)
  
  return [...crown, ...orbit, ...cloud];
}

// Helper to calculate X/Y offsets so people don't block each other
// giving a "Tunnel" feeling rather than a straight line.
export function getActorPosition(index: number, rank: string) {
    if (rank === 'CROWN') return { x: '0vw', y: '0vh' }; // Center
    
    // Alternating Left/Right for Heads
    if (rank === 'ORBIT') {
        return { 
            x: index % 2 === 0 ? '25vw' : '-25vw', 
            y: index % 3 === 0 ? '-5vh' : '5vh' 
        };
    }
    
    // Scattered Chaos for Core
    // We use a pseudo-random pattern based on index to keep it consistent during SSR
    const randomX = ((index * 37) % 80) - 40; // -40vw to 40vw
    const randomY = ((index * 23) % 60) - 30; // -30vh to 30vh
    return { x: `${randomX}vw`, y: `${randomY}vh` };
}