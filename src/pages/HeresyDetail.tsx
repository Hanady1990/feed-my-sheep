import { useParams, useNavigate } from "react-router-dom";
import { useHeresy } from "@/hooks/use-supabase-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, ArrowRight, Scale, Shield, BookOpen, Users, ChevronRight } from "lucide-react";
import ContentCard from "@/components/ContentCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HeresyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, language, isRTL } = useLanguage();
  const heresy = useHeresy(slug);

  if (!heresy) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-muted-foreground">{t("heresies.notFound")}</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate("/heresies")}>
          {t("heresies.backToList")}
        </Button>
      </div>
    );
  }

  const name = language === "ar" ? heresy.nameAr : heresy.name;
  const period = language === "ar" ? heresy.periodAr : heresy.period;
  const founder = language === "ar" ? heresy.founderAr : heresy.founder;
  const summary = language === "ar" ? heresy.summaryAr : heresy.summary;
  const councilResponse = language === "ar" ? heresy.councilResponseAr : heresy.councilResponse;
  const keyFigures = language === "ar" ? heresy.keyFiguresAr : heresy.keyFigures;
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 animate-fade-in-up">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate("/heresies")}
        className="mb-4 gap-1.5 text-muted-foreground hover:text-foreground -ms-2"
      >
        <BackArrow className="h-4 w-4" />
        {t("heresies.backToList")}
      </Button>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Scale className="h-5 w-5 text-crimson" />
          <span className="font-body text-xs text-gold uppercase tracking-wider">{period}</span>
        </div>
        <h1 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-2">{name}</h1>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{summary}</p>
      </div>

      {/* Meta cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <ContentCard>
          <div className="flex items-start gap-2.5">
            <Users className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-body text-[11px] text-muted-foreground uppercase tracking-wider mb-0.5">{t("heresies.founder")}</p>
              <p className="font-body text-sm text-foreground">{founder}</p>
            </div>
          </div>
        </ContentCard>
        <ContentCard>
          <div className="flex items-start gap-2.5">
            <Shield className="h-4 w-4 text-crimson mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-body text-[11px] text-muted-foreground uppercase tracking-wider mb-0.5">{t("heresies.councilResponse")}</p>
              <p className="font-body text-sm text-foreground">{councilResponse}</p>
            </div>
          </div>
        </ContentCard>
      </div>

      {/* Defenders */}
      <div className="mb-8">
        <h2 className="font-display text-base tracking-wide text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-gold" />
          {t("heresies.defenders")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {keyFigures.map((figure, i) => (
            <span key={i} className="inline-flex items-center rounded-full border border-gold-light bg-card px-3 py-1 font-body text-xs text-foreground">
              {figure}
            </span>
          ))}
        </div>
      </div>

      <Separator className="mb-8 bg-gold-light" />

      {/* Comparison section */}
      <h2 className="font-display text-lg tracking-wide text-foreground mb-5 text-center">
        {t("heresies.comparison")}
      </h2>

      <div className="space-y-4 mb-8">
        {heresy.points.map((point, index) => {
          const heresyText = language === "ar" ? point.heresyAr : point.heresy;
          const catholicText = language === "ar" ? point.catholicAr : point.catholic;

          return (
            <div key={index} className="rounded-xl border border-border overflow-hidden shadow-scripture">
              {/* Heresy claim */}
              <ContentCard
                className="rounded-none border-0 border-b border-border bg-destructive/5"
                copyText={heresyText}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10 flex-shrink-0 mt-0.5">
                    <Scale className="h-3.5 w-3.5 text-destructive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[10px] text-destructive font-semibold uppercase tracking-wider mb-1">
                      {t("heresies.heresy")}
                    </p>
                    <p className="font-body text-sm text-foreground leading-relaxed">{heresyText}</p>
                  </div>
                </div>
              </ContentCard>

              {/* Arrow connector */}
              <div className="flex justify-center -my-px bg-card">
                <div className="flex h-6 w-6 items-center justify-center">
                  <ChevronRight className={`h-3.5 w-3.5 text-gold rotate-90`} />
                </div>
              </div>

              {/* Catholic teaching */}
              <ContentCard
                className="rounded-none border-0 bg-primary/5"
                copyText={catholicText}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                    <Shield className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[10px] text-primary font-semibold uppercase tracking-wider mb-1">
                      {t("heresies.catholicTeaching")}
                    </p>
                    <p className="font-body text-sm text-foreground leading-relaxed">{catholicText}</p>
                  </div>
                </div>
              </ContentCard>
            </div>
          );
        })}
      </div>

      {/* Catechism references */}
      {heresy.catechismRefs.length > 0 && (
        <div className="mb-6">
          <h3 className="font-display text-sm tracking-wide text-foreground mb-3">
            {t("heresies.catechismRefs")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {heresy.catechismRefs.map((ref) => (
              <button
                key={ref}
                onClick={() => navigate(`/catechism?goto=${ref}`)}
                className="inline-flex items-center rounded-md border border-gold-light bg-card px-2.5 py-1 font-body text-xs text-gold hover:bg-muted transition-colors cursor-pointer"
              >
                §{ref}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeresyDetail;
