import { useState } from "react";
import { Download, X, Share } from "lucide-react";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { useLanguage } from "@/contexts/LanguageContext";

const PwaInstallBanner = () => {
  const { canPrompt, promptInstall, isStandalone, showIosGuide, isInstalled } = usePwaInstall();
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem("pwa-banner-dismissed") === "true";
  });

  if (isStandalone || isInstalled || dismissed) return null;
  if (!canPrompt && !showIosGuide) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("pwa-banner-dismissed", "true");
  };

  const handleInstall = async () => {
    const accepted = await promptInstall();
    if (accepted) handleDismiss();
  };

  return (
    <div className="fixed bottom-20 left-3 right-3 z-50 md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <div className="rounded-xl border border-border bg-card p-4 shadow-lg">
        <button
          onClick={handleDismiss}
          className="absolute top-2 end-2 rounded-full p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
            <Download className="h-5 w-5 text-gold" />
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold text-foreground">
              {t("pwa.title")}
            </p>
            {showIosGuide ? (
              <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed">
                {t("pwa.iosGuide")} <Share className="inline h-3 w-3 -mt-0.5" /> → <strong>{t("pwa.addToHome")}</strong>
              </p>
            ) : (
              <>
                <p className="mt-1 font-body text-xs text-muted-foreground">
                  {t("pwa.description")}
                </p>
                <button
                  onClick={handleInstall}
                  className="mt-2 rounded-lg bg-gold px-4 py-1.5 font-body text-xs font-medium text-white active:scale-[0.97] transition-transform"
                >
                  {t("pwa.install")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PwaInstallBanner;
