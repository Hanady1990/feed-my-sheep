import { useAdmin } from "@/contexts/AdminContext";
import { supabase } from "@/integrations/supabase/client";
import { useCallback } from "react";

export function useAdminApi() {
  const { password } = useAdmin();

  const call = useCallback(
    async (action: string, table: string, data?: any, id?: string) => {
      const { data: result, error } = await supabase.functions.invoke("admin-auth", {
        body: { password, action, table, data, id },
      });
      if (error) throw new Error(error.message);
      if (result?.error) throw new Error(result.error);
      return result;
    },
    [password]
  );

  const list = (table: string) => call("list", table);
  const create = (table: string, data: any) => call("create", table, data);
  const update = (table: string, id: string, data: any) => call("update", table, data, id);
  const remove = (table: string, id: string) => call("delete", table, undefined, id);

  return { list, create, update, remove };
}
