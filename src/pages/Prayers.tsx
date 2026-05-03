import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePrayers } from "@/hooks/use-prayers";
import { PRAYER_CATEGORIES, type PrayerCategory } from "@/data/prayers";
import { Heart, Flame, Cross, Sparkles, Sun, Wheat, BookOpen } from "lucide-react";

const categoryMeta: Record<PrayerCategory, { icon: any; key: string }> = {
  marian: { icon: Heart, key: "prayers.cat.marian" },
  holy_spirit: { icon: Flame, key: "prayers.cat.holySpirit" },
  rosary: { icon: Sparkles, key: "prayers.cat.rosary" },
  saints: { icon: Cross, key: "prayers.cat.saints" },
  morning_evening: { icon: Sun, key: "prayers.cat.morningEvening" },
  eucharistic: { icon: Wheat, key: "prayers.cat.eucharistic" },
  general: { icon: BookOpen, key: "prayers.cat.general" },
};

const PrayersPage = () => {
  const { t } = useLanguage();
  const { data: prayers = [] } = usePrayers();

  const counts = PRAYER_CATEGORIES.reduce<Record<string, number>>((acc, c) => {
    acc[c] = prayers.filter((p) => p.category === c).length;
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("prayers.title")} subtitle={t("prayers.subtitle")} />
      <div className="grid grid-cols-2 gap-3">
        {PRAYER_CATEGORIES.map((cat) => {
          const Icon = categoryMeta[cat].icon;
          return (
            <Link key={cat} to={`/prayers/${cat}`}>
              <ContentCard gold className="cursor-pointer hover:border-gold h-full">
                <div className="flex flex-col items-center text-center gap-2 py-2">
                  <Icon className="h-7 w-7 text-gold" />
                  <h3 className="font-display text-sm tracking-wide text-foreground">
                    {t(categoryMeta[cat].key)}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground">
                    {counts[cat] || 0} {t("prayers.count")}
                  </p>
                </div>
              </ContentCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PrayersPage;
