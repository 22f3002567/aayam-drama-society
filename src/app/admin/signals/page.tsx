import { createAdminClient } from "@/lib/supabase/admin";
import { RadioTower, PowerOff, Zap } from "lucide-react";
import { broadcastSignal, killSignal } from "./actions";

export default async function SignalTower() {
  const supabase = createAdminClient();
  
  // Get the Current Active Signal
  const { data: activeSignal } = await supabase
    .from("challenges")
    .select("*")
    .eq("status", "active")
    .single();

  return (
    <div className="max-w-4xl space-y-12">
      
      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-serif text-white mb-2 flex items-center gap-4">
          <RadioTower className="w-8 h-8 text-red-500" />
          Signal Tower
        </h1>
        <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
          Broadcast Control • The Beacon
        </p>
      </div>

      {/* STATUS MONITOR */}
      <div className={`p-8 rounded-2xl border ${activeSignal ? 'bg-red-900/10 border-red-500/50' : 'bg-[#0a0a0a] border-white/10'}`}>
         {activeSignal ? (
            <div className="flex justify-between items-start">
               <div>
                  <span className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest mb-2 animate-pulse">
                     <span className="w-2 h-2 bg-red-500 rounded-full" /> Live Broadcast
                  </span>
                  <h2 className="text-3xl font-serif text-white mb-2">{activeSignal.theme}</h2>
                  <p className="text-white/60 max-w-xl">{activeSignal.brief}</p>
               </div>
               
               <form action={async () => {
                  "use server";
                  await killSignal(activeSignal.id);
               }}>
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest">
                     <PowerOff className="w-4 h-4" /> Kill Signal
                  </button>
               </form>
            </div>
         ) : (
            <div className="text-center py-8 text-white/30">
               <RadioTower className="w-12 h-12 mx-auto mb-4 opacity-20" />
               <p className="font-mono text-sm uppercase tracking-widest">Silence on all frequencies</p>
            </div>
         )}
      </div>

      {/* BROADCAST CONSOLE (Create New) */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8">
         <h3 className="text-xl font-serif text-white mb-6">Initialize New Broadcast</h3>
         
         <form action={broadcastSignal} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Theme / Title</label>
                  <input name="theme" required placeholder="e.g. ECHOES IN THE DARK" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-red-500 outline-none transition-colors" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Deadline</label>
                  <input name="deadline" type="datetime-local" required className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-red-500 outline-none transition-colors" />
               </div>
            </div>
            
            <div className="space-y-2">
               <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Brief / Directive</label>
               <textarea name="brief" required rows={3} placeholder="The instructions for the society..." className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-red-500 outline-none transition-colors resize-none" />
            </div>

            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2">
               <Zap className="w-4 h-4" /> Transmit Signal
            </button>
         </form>
      </div>

    </div>
  );
}