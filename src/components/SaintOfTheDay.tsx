import { getSaintOfTheDay } from "@/data/saints-of-the-day";
import { useLanguage } from "@/contexts/LanguageContext";
import ContentCard from "@/components/ContentCard";
import { Cross, Quote, Shield } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SaintOfTheDay = () => {
  const { language, t } = useLanguage();
  const saint = getSaintOfTheDay();

  const name = saint.name[language];
  const bio = saint.bio[language];
  const saying = saint.saying[language];
  const feast = saint.feast[language];
  const patronOf = saint.patronOf[language];
  const initials = saint.name.en.replace("St. ", "").split(" ").map(w => w[0]).join("").slice(0, 2);

  const copyText = `${name}\n${saint.years} · ${feast}\n\n${bio}\n\n${saying}\n\n${t("home.saint.patron")}: ${patronOf}`;

  return (
    <ContentCard gold copyText={copyText} className="overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-12 w-12 border-2 border-gold/30">
          {saint.image ? (
            <img src={saint.image} alt={name} className="h-full w-full object-cover" />
          ) : (
            <AvatarFallback className="bg-primary/10 text-crimson font-display text-sm">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base tracking-wide text-foreground truncate">{name}</h3>
          <p className="font-body text-xs text-gold">{saint.years} · {feast}</p>
        </div>
        <Cross className="h-5 w-5 text-gold/40 flex-shrink-0" />
      </div>

      {/* Bio */}
      <p className="font-body text-sm leading-relaxed text-muted-foreground mb-3">{bio}</p>

      {/* Saying */}
      <div className="rounded-md bg-primary/5 border border-gold-light/50 p-3 mb-3">
        <div className="flex gap-2">
          <Quote className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
          <p className="font-body text-sm italic text-foreground leading-relaxed">{saying}</p>
        </div>
      </div>

      {/* Patron */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Shield className="h-3.5 w-3.5 text-gold/60" />
        <span className="font-body">
          <span className="font-semibold text-foreground/70">{t("home.saint.patron")}:</span> {patronOf}
        </span>
      </div>
    </ContentCard>
  );
};

export default SaintOfTheDay;
