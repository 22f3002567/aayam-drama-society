"use client";

import Image from "next/image";

export default function AnimatedBackground({ src }: { src: string }) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black" />
      <div className="relative w-full h-full animate-slow-zoom opacity-30">
          <Image
              src={src}
              alt="Atmosphere"
              fill
              className="object-cover blur-3xl"
              priority
          />
      </div>
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/60" />
      {/* Grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
    </div>
  );
}