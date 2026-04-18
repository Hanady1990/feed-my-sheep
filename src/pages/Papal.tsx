import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { ScrollText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useArticles } from "@/hooks/use-supabase-data";
import { getArticlesBySection } from "@/data/articles";
import { Link } from "react-router-dom";

const PapalPage = () => {
  const { t, language } = useLanguage();
  const { data: papal } = useArticles("papal");
  const list = papal && papal.length > 0 ? papal : getArticlesBySection("papal");

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("papal.title")} subtitle={t("papal.subtitle")} />
      <div className="space-y-3">
        {list.map((article) => {
          const meta = article.metadata || {};
          const detailParts = [meta.pope, meta.year, meta.docType].filter(Boolean);
          return (
            <Link key={article.id} to={`/article/${article.slug}`}>
              <ContentCard className="cursor-pointer hover:border-gold-light">
                <div className="flex items-start gap-3">
                  <ScrollText className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div className="flex-1">
                    <h3 className="font-display text-sm tracking-wide text-foreground">
                      {language === "ar" ? article.titleAr : article.title}
                    </h3>
                    {detailParts.length > 0 && (
                      <p className="font-body text-xs text-gold mt-0.5">
                        {detailParts.join(" · ")}
                      </p>
                    )}
                    {(language === "ar" ? article.subtitleAr : article.subtitle) && (
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {language === "ar" ? article.subtitleAr : article.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </ContentCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PapalPage;
