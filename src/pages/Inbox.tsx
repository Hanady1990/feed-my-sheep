import { useQuery } from "@tanstack/react-query";
import { Bell, Inbox as InboxIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Skeleton } from "@/components/ui/skeleton";

interface NotificationRow {
  id: string;
  title: string;
  body: string;
  language: string;
  created_at: string;
}

const InboxPage = () => {
  const { t, language } = useLanguage();

  const { data, isLoading } = useQuery({
    queryKey: ["notifications-inbox", language],
    queryFn: async (): Promise<NotificationRow[]> => {
      const { data, error } = await supabase
        .from("notifications")
        .select("id, title, body, language, created_at")
        .or(`language.eq.all,language.eq.${language}`)
        .order("created_at", { ascending: false })
        .limit(100);
      if (error) throw error;
      return (data as NotificationRow[]) || [];
    },
    staleTime: 30 * 1000,
  });

  const formatRelative = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return t("inbox.justNow");
    if (mins < 60) return `${mins} ${t("inbox.minutesAgo")}`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} ${t("inbox.hoursAgo")}`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days} ${t("inbox.daysAgo")}`;
    return new Date(iso).toLocaleDateString(language === "ar" ? "ar" : "en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("inbox.title")} subtitle={t("inbox.subtitle")} />

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-xl" />
          ))}
        </div>
      ) : !data || data.length === 0 ? (
        <ContentCard className="flex flex-col items-center justify-center gap-3 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <InboxIcon className="h-7 w-7 text-gold" />
          </div>
          <div>
            <p className="font-display text-base text-foreground">{t("inbox.empty")}</p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {t("inbox.emptyDescription")}
            </p>
          </div>
        </ContentCard>
      ) : (
        <div className="space-y-2">
          {data.map((n) => (
            <ContentCard key={n.id} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Bell className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-sm text-foreground leading-tight">
                    {n.title}
                  </h3>
                  <span className="shrink-0 font-body text-xs text-muted-foreground whitespace-nowrap">
                    {formatRelative(n.created_at)}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-1 break-words">
                  {n.body}
                </p>
              </div>
            </ContentCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default InboxPage;
