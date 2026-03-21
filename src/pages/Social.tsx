import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getArticlesBySection } from "@/data/articles";
import { Link } from "react-router-dom";

const SocialPage = () => {
  const { t, language } = useLanguage();
  const socialArticles = getArticlesBySection("social");

  // Static entries for topics without full articles yet
  const staticTopics = [
    { name: "Marriage & Family", desc: "The vocation of marriage, family life, and the domestic church." },
    { name: "Social Justice", desc: "Preferential option for the poor, workers' rights, and common good." },
    { name: "Bioethics", desc: "Moral considerations in medicine, genetics, and end-of-life care." },
    { name: "Technology & Ethics", desc: "The Church's perspective on AI, digital culture, and media." },
    { name: "War & Peace", desc: "Just war theory, pacifism, and the Christian call to peacemaking." },
    { name: "Economic Justice", desc: "Catholic social teaching on economics, distributism, and solidarity." },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("social.title")} subtitle={t("social.subtitle")} />
      <div className="space-y-3">
        {socialArticles.map((article) => (
          <Link key={article.id} to={`/article/${article.slug}`}>
            <ContentCard gold className="cursor-pointer hover:border-gold">
              <div className="flex items-start gap-3">
                <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <div>
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
        {staticTopics.map((topic) => (
          <ContentCard key={topic.name} gold className="opacity-75">
            <div className="flex items-start gap-3">
              <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-sm tracking-wide text-foreground">{topic.name}</h3>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{topic.desc}</p>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
};

export default SocialPage;
