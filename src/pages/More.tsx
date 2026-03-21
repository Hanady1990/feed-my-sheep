import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Link } from "react-router-dom";
import { ScrollText, Users, Globe, Scale, Heart, Cross, BookmarkIcon, Share2, Languages, Moon, Sun, Download, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { usePwaInstall } from "@/hooks/use-pwa-install";

const MorePage = () => {
  const { t, language, setLanguage, theme, setTheme } = useLanguage();
  const { canPrompt, promptInstall, isStandalone, showIosGuide, isInstalled } = usePwaInstall();

  const moreLinks = [
    { to: "/fathers", icon: Users, label: t("more.fathersLibrary") },
    { to: "/papal", icon: ScrollText, label: t("more.papalDocs") },
    { to: "/vatican", icon: Globe, label: t("more.vaticanNews") },
    { to: "/heresies", icon: Scale, label: t("more.heresiesThought") },
    { to: "/social", icon: Heart, label: t("more.socialTopics") },
    { to: "/saints", icon: Cross, label: t("more.saintsSpirituality") },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("more.title")} subtitle={t("more.subtitle")} />
      <div className="space-y-2 mb-6">
        {moreLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            <ContentCard className="flex items-center gap-3 hover:border-gold-light mb-2">
              <link.icon className="h-5 w-5 text-gold" />
              <span className="font-body text-sm text-foreground">{link.label}</span>
            </ContentCard>
          </Link>
        ))}
      </div>

      <SectionHeader title={t("more.settings")} />
      <div className="space-y-2">
        <ContentCard className="flex items-center gap-3">
          {theme === "dark" ? <Moon className="h-5 w-5 text-gold" /> : <Sun className="h-5 w-5 text-gold" />}
          <span className="font-body text-sm text-foreground">{t("more.darkMode")}</span>
          <Switch
            className="ms-auto"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </ContentCard>
        <ContentCard
          className="flex items-center gap-3 cursor-pointer hover:border-gold-light"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        >
          <Languages className="h-5 w-5 text-gold" />
          <span className="font-body text-sm text-foreground">{t("more.language")}</span>
          <span className="ms-auto rounded-full bg-muted px-3 py-1 font-body text-xs text-muted-foreground">
            {language === "en" ? "العربية" : "English"}
          </span>
        </ContentCard>
        <ContentCard className="flex items-center gap-3">
          <BookmarkIcon className="h-5 w-5 text-gold" />
          <span className="font-body text-sm text-foreground">{t("more.bookmarks")}</span>
          <span className="ms-auto font-body text-xs text-muted-foreground">{t("more.comingSoon")}</span>
        </ContentCard>
        <ContentCard className="flex items-center gap-3">
          <Share2 className="h-5 w-5 text-gold" />
          <span className="font-body text-sm text-foreground">{t("more.share")}</span>
        </ContentCard>
      </div>
    </div>
  );
};

export default MorePage;
