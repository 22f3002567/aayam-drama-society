// src/lib/audio.ts

// The Singleton Cache
const audioCache: Record<string, HTMLAudioElement> = {};

export const playSound = (type: 'hover' | 'click' | 'hum') => {
  if (typeof window === 'undefined') return;

  // 1. Check Cache
  if (!audioCache[type]) {
    audioCache[type] = new Audio(`/sfx/${type}.mp3`);
    audioCache[type].volume = type === 'hum' ? 0.2 : 0.5;
  }

  const audio = audioCache[type];

  // 2. Reset and Play (Low Latency)
  audio.currentTime = 0;
  audio.play().catch(() => {
    // Silent fail if browser blocks autoplay (common on first load)
  });
};