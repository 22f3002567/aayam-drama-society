"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Mail, ExternalLink, CheckCircle, XCircle, Clock, Eye, Trash2 } from "lucide-react";
import { updateStatus, deleteSubmission } from "@/app/admin/inbox/actions";
import { Submission, SubmissionStatus } from "@/types/schema";

export default function InboxList({ submissions }: { submissions: any[] }) {
  const [filter, setFilter] = useState<SubmissionStatus | 'all'>('all');

  const filtered = filter === 'all' 
    ? submissions 
    : submissions.filter(s => s.status === filter);

  const handleStatus = async (id: string, status: SubmissionStatus) => {
    await updateStatus(id, status);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Confirm deletion of transmission?")) {
      await deleteSubmission(id);
    }
  };

  if (!submissions?.length) return <div className="p-12 text-center border border-white/5 rounded-xl border-dashed text-white/20 font-mono text-sm">No transmissions received.</div>;

  return (
    <div className="space-y-6">
      
      {/* FILTER TABS */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-lg w-fit">
        {['all', 'pending', 'selected', 'rejected'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-all ${filter === f ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* THE GRID */}
      <div className="grid gap-3">
        {filtered.map((sub) => (
          <div key={sub.id} className="group relative p-5 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-white/10 transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
            
            {/* 1. STATUS INDICATOR */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-colors ${
              sub.status === 'selected' ? 'bg-green-500' : 
              sub.status === 'rejected' ? 'bg-red-900' : 'bg-gold-500/20'
            }`} />

            {/* 2. MAIN INFO */}
            <div className="flex-1 min-w-0">
               <div className="flex items-center gap-3 mb-1">
                 <h3 className="text-white font-medium truncate">{sub.name}</h3>
                 <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono uppercase text-white/40">{sub.type}</span>
                 <span className="text-[9px] font-mono text-white/20">• {formatDistanceToNow(new Date(sub.created_at))} ago</span>
               </div>
               
               <div className="text-sm text-white/50 line-clamp-1 font-mono mb-2">
                 {sub.challenges?.theme || "General Inquiry"}
               </div>

               <p className="text-xs text-white/30 line-clamp-2 leading-relaxed max-w-2xl">
                 {sub.content}
               </p>
               
               {/* LINKS */}
               <div className="flex gap-4 mt-3">
                 <a href={`mailto:${sub.contact_info}`} className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-gold-500 hover:underline">
                    <Mail className="w-3 h-3" /> {sub.contact_info}
                 </a>
                 {sub.portfolio_link && (
                   <a href={sub.portfolio_link} target="_blank" className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-blue-400 hover:underline">
                      <ExternalLink className="w-3 h-3" /> View Asset
                   </a>
                 )}
               </div>
            </div>

            {/* 3. CONTROL DECK */}
            <div className="flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
               {sub.status !== 'selected' && (
                 <button onClick={() => handleStatus(sub.id, 'selected')} title="Select" className="p-2 hover:bg-green-900/20 text-white/20 hover:text-green-500 rounded-lg transition-colors">
                   <CheckCircle className="w-5 h-5" />
                 </button>
               )}
               
               {sub.status !== 'rejected' && (
                 <button onClick={() => handleStatus(sub.id, 'rejected')} title="Reject" className="p-2 hover:bg-red-900/20 text-white/20 hover:text-red-500 rounded-lg transition-colors">
                   <XCircle className="w-5 h-5" />
                 </button>
               )}

               <div className="w-px h-6 bg-white/10 mx-2" />

               <button onClick={() => handleDelete(sub.id)} title="Delete" className="p-2 hover:bg-white/10 text-white/20 hover:text-white rounded-lg transition-colors">
                   <Trash2 className="w-4 h-4" />
               </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}