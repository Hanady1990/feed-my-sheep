import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Link } from "react-router-dom";
import { ScrollText, Users, Globe, Scale, Heart, Cross, BookmarkIcon, Share2, Languages, Moon, Sun, Download, Check, BookText, Gamepad2, Bell, BellOff, Loader2, Inbox } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { usePushNotifications } from "@/hooks/use-push-notifications";
import { toast } from "sonner";

const MorePage = () => {
  const { t, language, setLanguage, theme, setTheme } = useLanguage();
  const { canPrompt, promptInstall, isStandalone, showIosGuide, showAndroidGuide, isInstalled } = usePwaInstall();
  const { isSupported: pushSupported, isSubscribed: pushSubscribed, isLoading: pushLoading, permission: pushPermission, subscribe: pushSubscribe, unsubscribe: pushUnsubscribe } = usePushNotifications();

  const handleNotificationToggle = async (enabled: boolean) => {
    if (enabled) {
      const ok = await pushSubscribe(language);
      if (ok) toast.success(t("notifications.enabled"));
      else if (pushPermission === "denied") toast.error(t("notifications.blocked"));
    } else {
      await pushUnsubscribe();
      toast(t("notifications.disabled"));
    }
  };

  const handleInstallClick = async () => {
    if (canPrompt) {
      await promptInstall();
      return;
    }

    if (showIosGuide) {
      toast(t("pwa.iosGuideToast"), {
        description: `${t("pwa.iosGuide")} → ${t("pwa.addToHome")}`,
      });
      return;
    }

    if (showAndroidGuide) {
      toast(t("pwa.androidGuideToast"), {
        description: t("pwa.androidGuide"),
      });
    }
  };

  const moreLinks = [
    { to: "/inbox", icon: Inbox, label: t("more.inbox") },
    { to: "/catechism", icon: BookText, label: t("nav.catechism") },
    { to: "/fathers", icon: Users, label: t("more.fathersLibrary") },
    { to: "/papal", icon: ScrollText, label: t("more.papalDocs") },
    { to: "/vatican", icon: Globe, label: t("more.vaticanNews") },
    { to: "/heresies", icon: Scale, label: t("more.heresiesThought") },
    { to: "/social", icon: Heart, label: t("more.socialTopics") },
    { to: "/saints", icon: Cross, label: t("more.saintsSpirituality") },
    { to: "/games", icon: Gamepad2, label: t("more.games") },
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
        {pushSupported && (
          <ContentCard className="flex items-center gap-3">
            {pushSubscribed ? <Bell className="h-5 w-5 text-gold" /> : <BellOff className="h-5 w-5 text-gold" />}
            <div className="flex-1">
              <span className="font-body text-sm text-foreground">{t("notifications.title")}</span>
              <p className="font-body text-xs text-muted-foreground">{t("notifications.description")}</p>
            </div>
            {pushLoading ? (
              <Loader2 className="ms-auto h-4 w-4 animate-spin text-muted-foreground" />
            ) : (
              <Switch
                className="ms-auto"
                checked={pushSubscribed}
                onCheckedChange={handleNotificationToggle}
                disabled={pushPermission === "denied"}
              />
            )}
          </ContentCard>
        )}
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
        {(canPrompt || showIosGuide || showAndroidGuide) && !isStandalone && !isInstalled && (
          <ContentCard
            className="flex items-center gap-3 cursor-pointer hover:border-gold-light"
            onClick={handleInstallClick}
          >
            <Download className="h-5 w-5 text-gold" />
            <span className="font-body text-sm text-foreground">{t("more.installApp")}</span>
            {showIosGuide && (
              <span className="ms-auto font-body text-xs text-muted-foreground">
                Share → {t("pwa.addToHome")}
              </span>
            )}
            {showAndroidGuide && !showIosGuide && (
              <span className="ms-auto font-body text-xs text-muted-foreground">
                {t("pwa.install")}
              </span>
            )}
          </ContentCard>
        )}
        {(isStandalone || isInstalled) && (
          <ContentCard className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary" />
            <span className="font-body text-sm text-foreground">{t("more.installApp")}</span>
            <span className="ms-auto font-body text-xs text-muted-foreground">{t("more.alreadyInstalled")}</span>
          </ContentCard>
        )}
        <ContentCard className="flex items-center gap-3">
          <Share2 className="h-5 w-5 text-gold" />
          <span className="font-body text-sm text-foreground">{t("more.share")}</span>
        </ContentCard>
      </div>
    </div>
  );
};

export default MorePage;
