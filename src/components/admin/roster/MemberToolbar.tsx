// "use client";

// import { useState } from "react";
// import { UserPlus } from "lucide-react";
// import MemberSheet from "./MemberSheet";

// export default function MemberToolbar() {
//   const [isSheetOpen, setIsSheetOpen] = useState(false);

//   return (
//     <>
//       <button 
//         onClick={() => setIsSheetOpen(true)}
//         className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
//       >
//         <UserPlus className="w-4 h-4 transition-transform group-hover:scale-110" />
//         <span className="font-bold uppercase text-xs tracking-widest">Recruit Member</span>
//       </button>

//       {/* The Sheet in Create Mode (No initialData) */}
//       <MemberSheet 
//         isOpen={isSheetOpen} 
//         onClose={() => setIsSheetOpen(false)} 
//         initialData={null} 
//       />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { UserPlus, Search } from "lucide-react";
import MemberSheet from "./MemberSheet";

export default function MemberToolbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Search Placeholder (Functional in V2) */}
      <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input placeholder="Search Roster..." className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs text-white focus:border-gold-500 outline-none w-64" />
      </div>

      <button 
        onClick={() => setIsSheetOpen(true)}
        className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
      >
        <UserPlus className="w-4 h-4 transition-transform group-hover:scale-110" />
        <span className="font-bold uppercase text-xs tracking-widest">Recruit Member</span>
      </button>

      <MemberSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
        initialData={null} 
      />
    </div>
  );
}