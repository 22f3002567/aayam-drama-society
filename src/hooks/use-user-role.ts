import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function useUserRole() {
  const [role, setRole] = useState<"secretary" | "manager" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRole() {
      const supabase = createClient();
      
      // 1. Get current user ID
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      // 2. Ask Database for their Role
      const { data } = await supabase
        .from('app_roles')
        .select('role')
        .eq('id', user.id)
        .single();

      setRole(data?.role as "secretary" | "manager" | null);
      setLoading(false);
    }

    fetchRole();
  }, []);

  return { role, loading, isSecretary: role === 'secretary' };
}