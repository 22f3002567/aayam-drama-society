// src/lib/aura.ts

export interface AuraConfig {
  id: string;
  color: string;
  label: string;
}

export const DEPARTMENT_AURAS: Record<string, AuraConfig> = {
  acting:     { id: 'acting', color: '#ef4444', label: 'The Stage' }, // Red
  scripting:  { id: 'scripting', color: '#eab308', label: 'The Ink' }, // Gold
  direction:  { id: 'direction', color: '#a855f7', label: 'The Vision' }, // Purple
  tech:       { id: 'tech', color: '#3b82f6', label: 'The Code' }, // Blue
  design:     { id: 'design', color: '#ec4899', label: 'The Canvas' }, // Pink
  management: { id: 'management', color: '#10b981', label: 'The Order' }, // Emerald
};

export function getAura(dept: string): AuraConfig {
  return DEPARTMENT_AURAS[dept] || DEPARTMENT_AURAS['management'];
}