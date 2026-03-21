import { Home, BookOpen, Library, Search, MoreHorizontal } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNav = () => {
  const { t } = useLanguage();

  const navItems = [
    { to: "/", icon: Home, label: t("nav.home") },
    { to: "/teachings", icon: BookOpen, label: t("nav.teachings") },
    { to: "/bible", icon: Library, label: t("nav.bible") },
    { to: "/search", icon: Search, label: t("nav.search") },
    { to: "/more", icon: MoreHorizontal, label: t("nav.more") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold-light bg-card/95 backdrop-blur-md safe-area-bottom md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors",
                isActive ? "text-crimson" : "text-muted-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-body text-[11px]">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
