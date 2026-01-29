import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ELITE UTILITY:
 * Merges Tailwind classes conditionally and resolves conflicts.
 * Example: cn("bg-red-500", isActive && "bg-blue-500") -> "bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}