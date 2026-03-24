import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import SaintOfTheDay from "@/components/SaintOfTheDay";
import { BookOpen, Users, ScrollText, Globe, Scale, Heart, Cross, Library } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const quickLinkKeys = [
  { to: "/teachings", icon: BookOpen, labelKey: "link.teachings", color: "text-crimson" },
  { to: "/bible", icon: Library, labelKey: "link.bible", color: "text-gold" },
  { to: "/fathers", icon: Users, labelKey: "link.fathers", color: "text-crimson" },
  { to: "/papal", icon: ScrollText, labelKey: "link.papal", color: "text-gold" },
  { to: "/vatican", icon: Globe, labelKey: "link.vatican", color: "text-crimson" },
  { to: "/saints", icon: Cross, labelKey: "link.saints", color: "text-gold" },
  { to: "/heresies", icon: Scale, labelKey: "link.heresies", color: "text-crimson" },
  { to: "/social", icon: Heart, labelKey: "link.social", color: "text-gold" },
];

const HomePage = () => {
  const { t } = useLanguage();

  const latestNews = [
    { title: t("news.1.title"), date: t("news.1.date") },
    { title: t("news.2.title"), date: t("news.2.date") },
    { title: t("news.3.title"), date: t("news.3.date") },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center animate-fade-in-up">
        <Cross className="mx-auto mb-2 h-8 w-8 text-gold md:hidden" />
        <h1 className="font-display text-2xl tracking-widest text-foreground md:hidden">{t("app.title")}</h1>
        <p className="mt-1 font-body text-sm italic text-muted-foreground">{t("app.subtitle")}</p>
      </div>

      {/* Daily Quote */}
      <ContentCard gold className="mb-5 animate-fade-in-up text-center" style={{ animationDelay: "0.05s" }} copyText={`${t("home.quote.text")} — ${t("home.quote.author")}, ${t("home.quote.source")}`}>
        <p className="font-body text-lg italic text-foreground leading-relaxed">{t("home.quote.text")}</p>
        <p className="mt-2 font-display text-xs tracking-widest text-gold uppercase">— {t("home.quote.author")}</p>
        <p className="font-body text-xs text-muted-foreground">{t("home.quote.source")}</p>
      </ContentCard>

      {/* Daily Gospel */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <SectionHeader title={t("home.dailyGospel")} subtitle={t("home.gospel.ref")} />
        <ContentCard className="mb-5" copyText={`${t("home.gospel.ref")}\n${t("home.gospel.text")}`}>
          <p className="font-body text-base leading-relaxed text-foreground">{t("home.gospel.text")}</p>
        </ContentCard>
      </div>

      {/* Quick Access */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        <SectionHeader title={t("home.explore")} />
        <div className="mb-5 grid grid-cols-4 gap-3">
          {quickLinkKeys.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3 transition-all hover:border-gold-light hover:shadow-scripture"
            >
              <link.icon className={`h-5 w-5 ${link.color}`} />
              <span className="font-body text-[11px] text-muted-foreground text-center leading-tight">{t(link.labelKey)}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Teaching */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <SectionHeader title={t("home.featuredTeaching")} />
        <Link to="/article/the-seven-sacraments">
          <ContentCard gold className="mb-5 cursor-pointer hover:border-gold transition-all">
            <span className="inline-block rounded bg-primary/10 px-2 py-0.5 font-display text-[10px] uppercase tracking-wider text-crimson mb-2">
              {t("home.featured.category")}
            </span>
            <h3 className="font-display text-base text-foreground mb-1">{t("home.featured.title")}</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{t("home.featured.summary")}</p>
          </ContentCard>
        </Link>
      </div>

      {/* Latest Vatican News */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
        <SectionHeader title={t("home.vaticanNews")} />
        <div className="space-y-2">
          {latestNews.map((news, i) => (
            <ContentCard key={i} className="flex items-start justify-between gap-3">
              <div>
                <h4 className="font-body text-sm font-medium text-foreground">{news.title}</h4>
                <p className="font-body text-xs text-muted-foreground">{news.date}</p>
              </div>
              <Globe className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            </ContentCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
