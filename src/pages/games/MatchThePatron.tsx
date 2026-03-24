import { useState, useCallback, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { saints } from "@/data/saints";
import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateRound(lang: "en" | "ar") {
  const withPatron = saints.filter((s) => s.patronOf && s.patronOf[lang]);
  const selected = shuffleArray(withPatron).slice(0, 4);
  const saintsList = selected.map((s) => ({ slug: s.slug, name: s.name[lang], image: s.image }));
  const patronsList = shuffleArray(selected.map((s) => ({ slug: s.slug, patron: s.patronOf![lang] })));
  return { saintsList, patronsList, pairs: selected };
}

const MatchThePatron = () => {
  const { language, t } = useLanguage();
  const [round, setRound] = useState(() => generateRound(language));
  const [selectedSaint, setSelectedSaint] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [wrong, setWrong] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [totalRounds, setTotalRounds] = useState(0);

  const allMatched = Object.keys(matches).length === round.saintsList.length;

  const handleSaintClick = useCallback((slug: string) => {
    if (matches[slug]) return;
    setSelectedSaint(slug);
    setWrong(null);
  }, [matches]);

  const handlePatronClick = useCallback((patronSlug: string) => {
    if (!selectedSaint) return;
    if (matches[patronSlug] || Object.values(matches).includes(patronSlug)) return;
    
    if (selectedSaint === patronSlug) {
      setMatches((prev) => ({ ...prev, [selectedSaint]: patronSlug }));
      setSelectedSaint(null);
      setScore((p) => p + 1);
    } else {
      setWrong(patronSlug);
      setTimeout(() => setWrong(null), 800);
    }
  }, [selectedSaint, matches]);

  const nextRound = useCallback(() => {
    setRound(generateRound(language));
    setSelectedSaint(null);
    setMatches({});
    setWrong(null);
    setTotalRounds((p) => p + 1);
  }, [language]);

  const resetGame = useCallback(() => {
    setRound(generateRound(language));
    setSelectedSaint(null);
    setMatches({});
    setWrong(null);
    setScore(0);
    setTotalRounds(0);
  }, [language]);

  const matchedPatrons = useMemo(() => new Set(Object.values(matches)), [matches]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link to="/games" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
        <ArrowLeft className="h-4 w-4" /> {t("games.backToGames")}
      </Link>

      <SectionHeader title={t("games.matchPatron")} subtitle={t("games.matchPatron.desc")} />

      <div className="flex items-center justify-between mb-4">
        <span className="font-body text-sm text-muted-foreground">
          {t("games.score")}: <span className="text-foreground font-semibold">{score}</span>
        </span>
        <Button variant="ghost" size="sm" onClick={resetGame}>
          <RotateCcw className="h-4 w-4 me-1" /> {t("games.reset")}
        </Button>
      </div>

      <p className="font-body text-xs text-muted-foreground text-center mb-4">{t("games.matchInstructions")}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Saints column */}
        <div className="space-y-2">
          <h4 className="font-display text-xs uppercase tracking-wider text-gold text-center mb-2">{t("games.saints")}</h4>
          {round.saintsList.map((saint) => (
            <button
              key={saint.slug}
              onClick={() => handleSaintClick(saint.slug)}
              disabled={!!matches[saint.slug]}
              className={cn(
                "w-full flex items-center gap-2 rounded-lg border p-2.5 transition-all text-start",
                matches[saint.slug] && "border-green-500/50 bg-green-500/5 opacity-70",
                !matches[saint.slug] && selectedSaint === saint.slug && "border-gold bg-gold/5 ring-1 ring-gold/30",
                !matches[saint.slug] && selectedSaint !== saint.slug && "border-border bg-card hover:border-gold-light cursor-pointer"
              )}
            >
              <img src={saint.image} alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
              <span className="font-body text-xs text-foreground leading-tight">{saint.name}</span>
              {matches[saint.slug] && <CheckCircle2 className="h-3.5 w-3.5 text-green-500 ms-auto flex-shrink-0" />}
            </button>
          ))}
        </div>

        {/* Patrons column */}
        <div className="space-y-2">
          <h4 className="font-display text-xs uppercase tracking-wider text-crimson text-center mb-2">{t("games.patrons")}</h4>
          {round.patronsList.map((item) => (
            <button
              key={item.slug}
              onClick={() => handlePatronClick(item.slug)}
              disabled={matchedPatrons.has(item.slug)}
              className={cn(
                "w-full rounded-lg border p-2.5 transition-all text-start",
                matchedPatrons.has(item.slug) && "border-green-500/50 bg-green-500/5 opacity-70",
                wrong === item.slug && "border-destructive bg-destructive/10 animate-pulse",
                !matchedPatrons.has(item.slug) && wrong !== item.slug && "border-border bg-card hover:border-crimson/30 cursor-pointer"
              )}
            >
              <span className="font-body text-xs text-foreground leading-tight flex items-center gap-1.5">
                🛡️ {item.patron}
              </span>
              {matchedPatrons.has(item.slug) && <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-1" />}
            </button>
          ))}
        </div>
      </div>

      {allMatched && (
        <div className="text-center animate-fade-in-up">
          <p className="font-display text-sm text-green-500 mb-3">{t("games.allMatched")} 🎉</p>
          <Button onClick={nextRound} className="bg-primary text-primary-foreground">
            {t("games.nextRound")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default MatchThePatron;
