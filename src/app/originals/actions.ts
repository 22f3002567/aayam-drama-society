"use server";

import { getPlays } from "@/lib/api";
import { Play, PlayCategory } from "@/types/schema";

export async function fetchMorePlays(page: number, category: PlayCategory | 'all'): Promise<Play[]> {
  return await getPlays(page, 12, category);
}