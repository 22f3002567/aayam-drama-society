// "use client";

// import { useState, useEffect } from "react";
// import { Plus, Trash2, Shield, Calendar, Briefcase } from "lucide-react";
// import { getMemberTenures, addTenure, deleteTenure } from "@/app/admin/members/tenure-actions";
// import { toast } from "sonner";

// export default function TenureManager({ memberId }: { memberId: string }) {
//   const [tenures, setTenures] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const loadData = async () => {
//       const data = await getMemberTenures(memberId);
//       setTenures(data);
//       setLoading(false);
//   };

//   useEffect(() => { loadData(); }, [memberId]);

//   const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       const formData = new FormData(e.currentTarget);
//       const res = await addTenure(memberId, formData);
//       if (res.success) {
//           toast.success("Role Assigned");
//           (e.target as HTMLFormElement).reset();
//           loadData();
//       } else {
//           toast.error(res.error);
//       }
//   };

//   const handleDelete = async (id: string) => {
//       if(!confirm("Revoke this role?")) return;
//       await deleteTenure(id);
//       loadData();
//   };

//   if (loading) return <div className="text-xs text-white/30">Loading History...</div>;

//   return (
//     <div className="space-y-8">
        
//         {/* 1. ASSIGN NEW ROLE */}
//         <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
//             <div className="flex items-center gap-2 text-[10px] font-mono text-gold-500 uppercase tracking-widest">
//                 <Shield className="w-3 h-3" /> Assign Tenure
//             </div>
            
//             <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
//                 <input name="year" placeholder="Year (e.g. 2025-2026)" required className="bg-black border border-white/10 rounded p-2 text-xs text-white" />
//                 <input name="role" placeholder="Role (e.g. Secretary)" required className="bg-black border border-white/10 rounded p-2 text-xs text-white" />
                
//                 <select name="rank" className="bg-black border border-white/10 rounded p-2 text-xs text-white">
//                     <option value="CLOUD">CLOUD (Member)</option>
//                     <option value="ORBIT">ORBIT (Head)</option>
//                     <option value="CROWN">CROWN (High Command)</option>
//                     <option value="ZENITH">ZENITH (Faculty)</option>
//                 </select>

//                 <input name="department" placeholder="Dept (e.g. Tech)" className="bg-black border border-white/10 rounded p-2 text-xs text-white" />
                
//                 <div className="col-span-2 flex gap-2">
//                     <input name="sort_order" type="number" placeholder="Priority (1-100)" className="bg-black border border-white/10 rounded p-2 text-xs text-white w-24" />
//                     <button type="submit" className="flex-1 bg-gold-500 text-black text-xs font-bold uppercase rounded hover:bg-white transition-colors">
//                         Add to Timeline
//                     </button>
//                 </div>
//             </form>
//         </div>

//         {/* 2. TENURE HISTORY LIST */}
//         <div className="space-y-2">
//             <h4 className="text-[10px] uppercase tracking-widest text-white/40">Career Timeline</h4>
//             {tenures.length === 0 && <div className="text-white/20 text-xs italic">No active roles. (Artist Only)</div>}
            
//             {tenures.map((t) => (
//                 <div key={t.id} className="flex items-center justify-between p-3 bg-black border border-white/10 rounded hover:border-gold-500/30 transition-colors">
//                     <div className="flex items-center gap-4">
//                         <div className="text-xs font-mono text-gold-500">{t.year}</div>
//                         <div>
//                             <div className="text-sm text-white">{t.role_student}</div>
//                             <div className="text-[10px] text-white/40 uppercase">{t.department} • {t.rank}</div>
//                         </div>
//                     </div>
//                     <button onClick={() => handleDelete(t.id)} className="text-white/20 hover:text-red-500 transition-colors">
//                         <Trash2 className="w-4 h-4" />
//                     </button>
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Shield } from "lucide-react";
import { getMemberTenures, addTenure, deleteTenure } from "@/app/admin/members/tenure-actions";
import { toast } from "sonner";

export default function TenureManager({ memberId }: { memberId: string }) {
  const [tenures, setTenures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
      const data = await getMemberTenures(memberId);
      setTenures(data);
      setLoading(false);
  };

  useEffect(() => { loadData(); }, [memberId]);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const res = await addTenure(memberId, formData);
      if (res.success) {
          toast.success("Timeline Updated");
          (e.target as HTMLFormElement).reset();
          loadData();
      } else {
          toast.error(res.error);
      }
  };

  const handleDelete = async (id: string) => {
      if(!confirm("Remove this role?")) return;
      await deleteTenure(id);
      loadData();
  };

  if (loading) return <div className="text-xs text-white/30">Loading History...</div>;

  return (
    <div className="space-y-8">
        {/* ADD FORM */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono text-gold-500 uppercase tracking-widest">
                <Shield className="w-3 h-3" /> Add History
            </div>
            <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
                <input name="year" placeholder="Year" required className="bg-black border border-white/10 rounded p-2 text-xs text-white" />
                <input name="role" placeholder="Role" required className="bg-black border border-white/10 rounded p-2 text-xs text-white" />
                <select name="rank" className="bg-black border border-white/10 rounded p-2 text-xs text-white">
                    <option value="CLOUD">CLOUD</option>
                    <option value="ORBIT">ORBIT</option>
                    <option value="CROWN">CROWN</option>
                    <option value="ZENITH">ZENITH</option>
                </select>
                <input name="department" placeholder="Dept" className="bg-black border border-white/10 rounded p-2 text-xs text-white" />
                <div className="col-span-2">
                    <button type="submit" className="w-full bg-gold-500 text-black text-xs font-bold uppercase rounded p-2 hover:bg-white transition-colors">Add to Timeline</button>
                </div>
            </form>
        </div>

        {/* LIST */}
        <div className="space-y-2">
            {tenures.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-3 bg-black border border-white/10 rounded">
                    <div>
                        <div className="text-xs font-mono text-gold-500">{t.year}</div>
                        <div className="text-sm text-white">{t.role_student}</div>
                    </div>
                    <button onClick={() => handleDelete(t.id)} className="text-white/20 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                </div>
            ))}
        </div>
    </div>
  );
}