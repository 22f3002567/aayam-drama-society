import { createAdminClient } from "@/lib/supabase/admin";
import InboxList from "@/components/admin/inbox/InboxList";
import { Inbox } from "lucide-react";
import { getSubmissions } from "./actions";

export default async function InboxPage() {
  const submissions = await getSubmissions();

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-end border-b border-white/5 pb-6">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2">The Receiver</h1>
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
            Incoming Transmissions • {submissions.length} Unread
          </p>
        </div>
        <div className="p-3 bg-white/5 rounded-full border border-white/10">
          <Inbox className="w-5 h-5 text-gold-500" />
        </div>
      </div>

      {/* LIST */}
      <InboxList submissions={submissions} />
    </div>
  );
}