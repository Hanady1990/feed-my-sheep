import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSaint } from "@/hooks/use-supabase-data";
import ContentCard from "@/components/ContentCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Quote, BookOpen, Shield, Calendar, Cross } from "lucide-react";

const SaintDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const saint = useSaint(slug);

  if (!saint) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <Cross className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
        <p className="font-body text-muted-foreground">{t("saints.notFound")}</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate("/saints")}>
          <ArrowLeft className="h-4 w-4 me-2" />
          {t("saints.backToList")}
        </Button>
      </div>
    );
  }

  const name = saint.name[language];

  const handleDownloadImage = async () => {
    try {
      const response = await fetch(saint.image);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${saint.slug}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(saint.image, "_blank");
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      {/* Back button */}
      <button
        onClick={() => navigate("/saints")}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-5"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="font-body">{t("saints.backToList")}</span>
      </button>

      {/* Hero: Image + Name */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative group mb-4">
          <img
            src={saint.image}
            alt={name}
            width={240}
            height={300}
            className="rounded-xl border-2 border-gold/30 shadow-scripture object-cover w-60 h-[300px]"
          />
          <button
            onClick={handleDownloadImage}
            className="absolute bottom-2 end-2 p-2 rounded-lg bg-card/90 border border-border opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
            aria-label={t("saints.downloadImage")}
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
        <h1 className="font-display text-xl tracking-wide text-foreground text-center">{name}</h1>
        <div className="flex items-center gap-2 mt-1">
          <Calendar className="h-3.5 w-3.5 text-gold" />
          <p className="font-body text-sm text-gold">{saint.years} · {saint.feast[language]}</p>
        </div>
      </div>

      {/* Patron */}
      <ContentCard gold className="mb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-gold flex-shrink-0" />
          <div>
            <span className="font-display text-xs tracking-wider text-gold uppercase">{t("home.saint.patron")}</span>
            <p className="font-body text-sm text-foreground mt-0.5">{saint.patronOf[language]}</p>
          </div>
        </div>
      </ContentCard>

      {/* Biography */}
      <div className="mb-5">
        <h2 className="font-display text-base tracking-wide text-foreground mb-2 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-crimson" />
          {t("saints.biography")}
        </h2>
        <ContentCard copyText={saint.fullBio[language]}>
          <p className="font-body text-sm leading-relaxed text-muted-foreground">{saint.fullBio[language]}</p>
        </ContentCard>
      </div>

      {/* Sayings */}
      {saint.sayings.length > 0 && (
        <div className="mb-5">
          <h2 className="font-display text-base tracking-wide text-foreground mb-2 flex items-center gap-2">
            <Quote className="h-4 w-4 text-crimson" />
            {t("saints.sayings")}
          </h2>
          <div className="space-y-2">
            {saint.sayings.map((saying, i) => (
              <ContentCard
                key={i}
                gold
                copyText={saying[language]}
                className="border-gold-light/50"
              >
                <div className="flex gap-2">
                  <Quote className="h-3.5 w-3.5 text-gold flex-shrink-0 mt-1" />
                  <p className="font-body text-sm italic text-foreground leading-relaxed">
                    {saying[language]}
                  </p>
                </div>
              </ContentCard>
            ))}
          </div>
        </div>
      )}

      {/* Books & Writings */}
      {saint.books.length > 0 && (
        <div className="mb-5">
          <h2 className="font-display text-base tracking-wide text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-crimson" />
            {t("saints.books")}
          </h2>
          <ContentCard>
            <ul className="space-y-2">
              {saint.books.map((book, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span className="font-body text-sm text-foreground">{book[language]}</span>
                </li>
              ))}
            </ul>
          </ContentCard>
        </div>
      )}
    </div>
  );
};

export default SaintDetail;
