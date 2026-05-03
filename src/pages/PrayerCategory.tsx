import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Link, useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePrayers } from "@/hooks/use-prayers";
import { PRAYER_CATEGORIES, type PrayerCategory } from "@/data/prayers";

const catKey: Record<PrayerCategory, string> = {
  marian: "prayers.cat.marian",
  holy_spirit: "prayers.cat.holySpirit",
  rosary: "prayers.cat.rosary",
  saints: "prayers.cat.saints",
  morning_evening: "prayers.cat.morningEvening",
  eucharistic: "prayers.cat.eucharistic",
  general: "prayers.cat.general",
};

const PrayerCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { t, language } = useLanguage();

  if (!category || !PRAYER_CATEGORIES.includes(category as PrayerCategory)) {
    return <Navigate to="/prayers" replace />;
  }

  const { data: items = [] } = usePrayers(category as PrayerCategory);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t(catKey[category as PrayerCategory])} subtitle={t("prayers.subtitle")} />
      <div className="space-y-3">
        {items.map((p) => (
          <Link key={p.slug} to={`/prayers/${category}/${p.slug}`}>
            <ContentCard gold className="cursor-pointer hover:border-gold mb-3">
              <h3 className="font-display text-sm tracking-wide text-foreground">
                {language === "ar" ? p.titleAr : p.title}
              </h3>
              {(language === "ar" ? p.subtitleAr : p.subtitle) && (
                <p className="font-body text-xs text-gold mt-0.5">
                  {language === "ar" ? p.subtitleAr : p.subtitle}
                </p>
              )}
              <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">
                {language === "ar" ? p.contentAr : p.content}
              </p>
            </ContentCard>
          </Link>
        ))}
        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-8 font-body text-sm">
            {t("prayers.empty")}
          </p>
        )}
      </div>
    </div>
  );
};

export default PrayerCategoryPage;
