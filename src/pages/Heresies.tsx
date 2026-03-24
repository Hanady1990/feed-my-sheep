import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Scale, ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { heresies } from "@/data/heresies";

const HeresiesPage = () => {
  const { t, language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const Chevron = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("heresies.title")} subtitle={t("heresies.subtitle")} />
      <div className="space-y-3">
        {heresies.map((h) => (
          <ContentCard
            key={h.slug}
            className="cursor-pointer hover:border-gold-light active:scale-[0.99] transition-all"
            onClick={() => navigate(`/heresies/${h.slug}`)}
          >
            <div className="flex items-center gap-3">
              <Scale className="h-5 w-5 flex-shrink-0 text-crimson" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-sm tracking-wide text-foreground">
                  {language === "ar" ? h.nameAr : h.name}
                </h3>
                <p className="font-body text-xs text-gold mt-0.5">
                  {language === "ar" ? h.periodAr : h.period}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">
                  {language === "ar" ? h.summaryAr : h.summary}
                </p>
              </div>
              <Chevron className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
};

export default HeresiesPage;
