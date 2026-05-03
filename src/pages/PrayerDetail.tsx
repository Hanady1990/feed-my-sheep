import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import ShareMenu from "@/components/ShareMenu";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePrayer } from "@/hooks/use-prayers";
import { ArrowLeft } from "lucide-react";

const PrayerDetail = () => {
  const { slug, category } = useParams<{ slug: string; category: string }>();
  const { t, language } = useLanguage();
  const prayer = usePrayer(slug);

  if (!prayer) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-6">
        <p className="text-center text-muted-foreground">{t("prayers.notFound")}</p>
      </div>
    );
  }

  const title = language === "ar" ? prayer.titleAr : prayer.title;
  const subtitle = language === "ar" ? prayer.subtitleAr : prayer.subtitle;
  const content = language === "ar" ? prayer.contentAr : prayer.content;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link
        to={`/prayers/${category || prayer.category}`}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-3"
      >
        <ArrowLeft className="h-3 w-3" /> {t("prayers.back")}
      </Link>
      <SectionHeader title={title} subtitle={subtitle} />
      <ContentCard gold copyText={`${title}\n\n${content}`}>
        <p className="font-body text-base leading-relaxed text-foreground whitespace-pre-line">
          {content}
        </p>
      </ContentCard>
      <div className="mt-4 flex justify-end">
        <ShareMenu title={title} text={content} />
      </div>
    </div>
  );
};

export default PrayerDetail;
