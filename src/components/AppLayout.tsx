import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import DesktopSidebar from "./DesktopSidebar";
import { useLanguage } from "@/contexts/LanguageContext";

const AppLayout = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <DesktopSidebar />
      <main className={`pb-20 md:pb-0 ${isRTL ? "md:mr-64" : "md:ml-64"}`}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
