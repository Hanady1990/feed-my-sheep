import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, BookOpen, Library, Search, ScrollText, Users, Globe, Scale, Heart, Cross, MoreHorizontal, BookText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DesktopSidebar = () => {
  const { t, isRTL } = useLanguage();

  const navItems = [
    { to: "/", icon: Home, label: t("nav.home") },
    { to: "/teachings", icon: BookOpen, label: t("nav.teachings") },
    { to: "/bible", icon: Library, label: t("nav.bible") },
    { to: "/fathers", icon: Users, label: t("nav.fathers") },
    { to: "/papal", icon: ScrollText, label: t("nav.papal") },
    { to: "/vatican", icon: Globe, label: t("nav.vatican") },
    { to: "/heresies", icon: Scale, label: t("nav.heresies") },
    { to: "/social", icon: Heart, label: t("nav.social") },
    { to: "/saints", icon: Cross, label: t("nav.saints") },
    { to: "/search", icon: Search, label: t("nav.search") },
    { to: "/more", icon: MoreHorizontal, label: t("nav.more") },
  ];

  return (
    <aside className={cn(
      "hidden md:flex fixed top-0 h-full w-64 flex-col border-gold-light bg-card/80 backdrop-blur-sm z-40",
      isRTL ? "right-0 border-l" : "left-0 border-r"
    )}>
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gold-light">
        <Cross className="h-6 w-6 text-gold" />
        <h1 className="font-display text-lg tracking-wide text-foreground">{t("app.title")}</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-body transition-all mb-0.5",
                isActive
                  ? "bg-primary/10 text-crimson font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DesktopSidebar;
