import { createContext, useContext, useState, ReactNode } from "react";

interface AdminContextType {
  isAuthenticated: boolean;
  password: string;
  login: (pwd: string) => Promise<boolean>;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("admin_auth") === "true";
  });
  const [password, setPassword] = useState(() => {
    return sessionStorage.getItem("admin_pwd") || "";
  });

  const login = async (pwd: string): Promise<boolean> => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { data, error } = await supabase.functions.invoke("admin-auth", {
        body: { password: pwd, action: "list", table: "articles" },
      });
      if (error) return false;
      if (data?.error) return false;
      setIsAuthenticated(true);
      setPassword(pwd);
      sessionStorage.setItem("admin_auth", "true");
      sessionStorage.setItem("admin_pwd", pwd);
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setPassword("");
    sessionStorage.removeItem("admin_auth");
    sessionStorage.removeItem("admin_pwd");
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, password, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
};
