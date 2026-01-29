"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import EventSheet from "./EventSheet";

export default function ChronicleToolbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsSheetOpen(true)}
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest hover:bg-gold-500 transition-colors font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
      >
        <Plus className="w-4 h-4" /> Add Event
      </button>

      {/* The Sheet is now controlled by this Client Component */}
      <EventSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
        initialData={null} // null means "Create Mode"
      />
    </>
  );
}