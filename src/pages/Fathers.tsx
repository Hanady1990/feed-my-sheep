import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { getArticlesBySection } from "@/data/articles";
import { Link } from "react-router-dom";

const FathersPage = () => {
  const { t, language } = useLanguage();
  const fathers = getArticlesBySection("fathers");

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("fathers.title")} subtitle={t("fathers.subtitle")} />
      <div className="space-y-3">
        {fathers.map((article) => (
          <Link key={article.id} to={`/article/${article.slug}`}>
            <ContentCard gold className="cursor-pointer hover:border-gold">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-sm tracking-wide text-foreground">
                    {language === "ar" ? article.titleAr : article.title}
                  </h3>
                  <p className="font-body text-xs text-gold mt-0.5">
                    {language === "ar" ? article.subtitleAr : article.subtitle}
                  </p>
                  {article.author && (
                    <p className="font-body text-xs text-muted-foreground mt-1">{article.author}</p>
                  )}
                </div>
              </div>
            </ContentCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FathersPage;
