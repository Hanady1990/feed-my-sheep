import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getArticlesBySection } from "@/data/articles";
import { Link } from "react-router-dom";

const TeachingsPage = () => {
  const { t, language } = useLanguage();
  const teachings = getArticlesBySection("teachings");

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("teachings.title")} subtitle={t("teachings.subtitle")} />
      <div className="space-y-3">
        {teachings.map((article) => (
          <Link key={article.id} to={`/article/${article.slug}`}>
            <ContentCard gold className="cursor-pointer transition-all hover:border-gold">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-crimson" />
                <div className="flex-1">
                  <h3 className="font-display text-sm tracking-wide text-foreground">
                    {language === "ar" ? article.titleAr : article.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {language === "ar" ? article.subtitleAr : article.subtitle}
                  </p>
                </div>
                {article.readTime && (
                  <span className="rounded-full bg-muted px-2 py-0.5 font-body text-[10px] text-muted-foreground">
                    {article.readTime}
                  </span>
                )}
              </div>
            </ContentCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeachingsPage;
