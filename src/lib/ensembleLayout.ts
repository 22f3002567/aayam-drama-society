// src/lib/ensembleLayout.ts
import { MemberRank } from "@/types/schema";

export type EnsembleSize = 'titan' | 'portrait' | 'standard';

export function getMemberSize(rank: MemberRank): EnsembleSize {
  // 1. THE CROWN (Secretary/Deputy) -> The Titan (2x2)
  if (rank === 'CROWN' || rank === 'ZENITH') return 'titan';

  // 2. THE ORBIT (Heads) -> The Model (Tall 1x2)
  // This conveys "Standing Tall" / Leadership
  if (rank === 'ORBIT') return 'portrait';

  // 3. THE CLOUD (Core) -> Standard (Square 1x1)
  return 'standard';
}

export function getMemberGridClass(size: EnsembleSize): string {
  switch (size) {
    case 'titan': 
      return 'md:col-span-2 md:row-span-2 h-[500px] md:h-[600px]'; // Square-ish
    case 'portrait': 
      return 'md:col-span-1 md:row-span-2 h-[500px] md:h-[600px]'; // Tall
    case 'standard': 
    default:
      return 'md:col-span-1 md:row-span-1 h-[300px]'; // Square
  }
}