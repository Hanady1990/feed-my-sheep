import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import DesktopSidebar from "./DesktopSidebar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNotificationPopup } from "@/hooks/use-notification-popup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Bell } from "lucide-react";

const AppLayout = () => {
  const { isRTL } = useLanguage();
  const { notification, dismiss } = useNotificationPopup();

  return (
    <div className="min-h-screen bg-background">
      <DesktopSidebar />
      <main className={`pb-20 md:pb-0 ${isRTL ? "md:mr-64" : "md:ml-64"}`}>
        <Outlet />
      </main>
      <BottomNav />

      <Dialog open={!!notification} onOpenChange={(open) => !open && dismiss()}>
        <DialogContent className="max-w-sm rounded-2xl">
          <DialogHeader className="items-center text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <DialogTitle className="text-lg font-bold">
              {notification?.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mt-1">
              {notification?.body}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppLayout;
