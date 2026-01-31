import { createAdminClient } from "@/lib/supabase/admin";
import MemberList from "@/components/admin/roster/MemberList";
import MemberToolbar from "@/components/admin/roster/MemberToolbar"; // You need to create this simple button
import { Users } from "lucide-react";

export default async function RosterPage() {
  const supabase = createAdminClient();
  
  // FETCH MEMBERS with their LATEST tenure
  // We sort by tenures.sort_order to keep the Hierarchy visual
  const { data: members } = await supabase
    .from('team_members')
    .select(`
      *,
      tenures (
        role_student,
        department,
        year,
        rank,
        sort_order
      )
    `)
    .order('created_at', { ascending: false }); 
    // Note: Advanced sorting by joined table is complex in Supabase JS.
    // Ideally, we fetch and sort in JS for the Admin view.

  // CLIENT-SIDE SORT (Simulated here for display)
  const sortedMembers = members?.sort((a, b) => {
      const rankA = a.tenures?.[0]?.sort_order || 99;
      const rankB = b.tenures?.[0]?.sort_order || 99;
      return rankA - rankB;
  });

  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-between items-end border-b border-white/5 pb-6">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2 flex items-center gap-4">
            <Users className="w-8 h-8 text-gold-500" />
            The Roster
          </h1>
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
            Hierarchy Control • {sortedMembers?.length || 0} Active Agents
          </p>
        </div>
        <MemberToolbar />
      </div>

      <MemberList members={sortedMembers || []} />
    </div>
  );
}