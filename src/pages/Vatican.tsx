import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useArticles } from "@/hooks/use-supabase-data";
import { getArticlesBySection } from "@/data/articles";
import { Link } from "react-router-dom";

const fallbackNews = [
  { title: "Pope Francis addresses global peace summit in Geneva", date: "March 14, 2026", summary: "The Holy Father called for renewed dialogue between nations and emphasized the Church's role in building bridges of peace." },
  { title: "Vatican announces expanded Jubilee pilgrimage routes", date: "March 12, 2026", summary: "New spiritual pathways across Europe will be open for pilgrims during the extended Jubilee celebrations." },
  { title: "Dicastery for Doctrine publishes guidance on AI ethics", date: "March 10, 2026", summary: "The document addresses the moral implications of artificial intelligence and calls for human-centered technology development." },
  { title: "Synod on Synodality enters final implementation phase", date: "March 8, 2026", summary: "Local churches worldwide begin implementing the recommendations from the global synodal process." },
  { title: "Vatican Library digitizes rare medieval manuscripts", date: "March 5, 2026", summary: "Over 500 illuminated manuscripts from the 9th–14th centuries are now available for public access online." },
];

const VaticanPage = () => {
  const { t, language } = useLanguage();
  const { data: vaticanArticles } = useArticles("vatican");
  const dbList = vaticanArticles && vaticanArticles.length > 0
    ? vaticanArticles
    : getArticlesBySection("vatican");

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("vatican.title")} subtitle={t("vatican.subtitle")} />
      <div className="space-y-3">
        {dbList.map((article) => {
          const meta = article.metadata || {};
          const summary = language === "ar"
            ? meta.summaryAr || meta.summary
            : meta.summary;
          return (
            <Link key={article.id} to={`/article/${article.slug}`}>
              <ContentCard className="cursor-pointer hover:border-gold-light">
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-crimson" />
                  <div className="flex-1">
                    <h3 className="font-body text-sm font-medium text-foreground">
                      {language === "ar" ? article.titleAr : article.title}
                    </h3>
                    {meta.newsDate && (
                      <p className="font-body text-xs text-gold mt-0.5">{meta.newsDate}</p>
                    )}
                    {summary && (
                      <p className="font-body text-xs text-muted-foreground mt-1">{summary}</p>
                    )}
                  </div>
                </div>
              </ContentCard>
            </Link>
          );
        })}
        {dbList.length === 0 && fallbackNews.map((item, i) => (
          <ContentCard key={i} className="cursor-pointer hover:border-gold-light">
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-crimson" />
              <div>
                <h3 className="font-body text-sm font-medium text-foreground">{item.title}</h3>
                <p className="font-body text-xs text-gold mt-0.5">{item.date}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{item.summary}</p>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
};

export default VaticanPage;
