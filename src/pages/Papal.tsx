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

  // Static entries for docs without full articles yet
  const staticDocs = [
    { title: "Deus Caritas Est", pope: "Benedict XVI", year: 2005, type: "Encyclical" },
    { title: "Fratelli Tutti", pope: "Francis", year: 2020, type: "Encyclical" },
    { title: "Fides et Ratio", pope: "John Paul II", year: 1998, type: "Encyclical" },
    { title: "Humanae Vitae", pope: "Paul VI", year: 1968, type: "Encyclical" },
    { title: "Rerum Novarum", pope: "Leo XIII", year: 1891, type: "Encyclical" },
    { title: "Evangelii Gaudium", pope: "Francis", year: 2013, type: "Apostolic Exhortation" },
    { title: "Veritatis Splendor", pope: "John Paul II", year: 1993, type: "Encyclical" },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("papal.title")} subtitle={t("papal.subtitle")} />
      <div className="space-y-3">
        {list.map((article) => (
          <Link key={article.id} to={`/article/${article.slug}`}>
            <ContentCard className="cursor-pointer hover:border-gold-light">
              <div className="flex items-start gap-3">
                <ScrollText className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <div className="flex-1">
                  <h3 className="font-display text-sm tracking-wide text-foreground">
                    {language === "ar" ? article.titleAr : article.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {language === "ar" ? article.subtitleAr : article.subtitle}
                  </p>
                </div>
              </div>
            </ContentCard>
          </Link>
        ))}
        {staticDocs.map((doc) => (
          <ContentCard key={doc.title} className="opacity-75">
            <div className="flex items-start gap-3">
              <ScrollText className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <div className="flex-1">
                <h3 className="font-display text-sm tracking-wide text-foreground">{doc.title}</h3>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {doc.pope} · {doc.year} · {doc.type}
                </p>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
};

export default PapalPage;
