export default function Loading() {
  return (
    <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center space-y-4">
      {/* The Breathing Line */}
      <div className="w-24 h-[1px] bg-neutral-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gold-500/80 animate-loading-bar" />
      </div>
      
      {/* The Pulse */}
      <div className="text-neutral-700 font-mono text-[9px] uppercase tracking-[0.4em] animate-pulse">
        Initializing Aayam
      </div>
    </div>
  );
}