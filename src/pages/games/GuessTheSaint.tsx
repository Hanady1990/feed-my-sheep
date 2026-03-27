import { useState, useMemo, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { saints as staticSaints } from "@/data/saints";
import { useSaints } from "@/hooks/use-supabase-data";
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
  const shuffled = shuffleArray(saints);
  const correct = shuffled[0];
  const options = shuffleArray([correct, ...shuffled.slice(1, 4)]);
  
  const clues = [
    correct.patronOf?.[lang] ? `🛡️ ${correct.patronOf[lang]}` : null,
    correct.feast?.[lang] ? `📅 ${correct.feast[lang]}` : null,
    correct.sayings?.[0]?.[lang] ? `💬 "${correct.sayings[0][lang]}"` : null,
  ].filter(Boolean) as string[];

  return { correct, options, clues };
}

const GuessTheSaint = () => {
  const { data: dbSaints } = useSaints();
  const saints = dbSaints && dbSaints.length > 0 ? dbSaints : staticSaints;
  const [round, setRound] = useState(() => generateRound(language, staticSaints));
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSelect = useCallback((slug: string) => {
    if (selected) return;
    setSelected(slug);
    setTotal((p) => p + 1);
    if (slug === round.correct.slug) setScore((p) => p + 1);
  }, [selected, round.correct.slug]);

  const nextRound = useCallback(() => {
    setRound(generateRound(language));
    setSelected(null);
  }, [language]);

  const resetGame = useCallback(() => {
    setRound(generateRound(language));
    setSelected(null);
    setScore(0);
    setTotal(0);
  }, [language]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link to="/games" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        {t("games.backToGames")}
      </Link>

      <SectionHeader title={t("games.guessSaint")} subtitle={t("games.guessSaint.desc")} />

      {/* Score */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-body text-sm text-muted-foreground">
          {t("games.score")}: <span className="text-foreground font-semibold">{score}/{total}</span>
        </span>
        <Button variant="ghost" size="sm" onClick={resetGame}>
          <RotateCcw className="h-4 w-4 me-1" /> {t("games.reset")}
        </Button>
      </div>

      {/* Clues */}
      <ContentCard gold className="mb-5">
        <h3 className="font-display text-xs uppercase tracking-wider text-gold mb-3">{t("games.clues")}</h3>
        <div className="space-y-2">
          {round.clues.map((clue, i) => (
            <p key={i} className="font-body text-sm text-foreground">{clue}</p>
          ))}
        </div>
      </ContentCard>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {round.options.map((saint) => {
          const isCorrect = saint.slug === round.correct.slug;
          const isSelected = selected === saint.slug;
          const showResult = selected !== null;

          return (
            <button
              key={saint.slug}
              onClick={() => handleSelect(saint.slug)}
              disabled={!!selected}
              className={cn(
                "flex items-center gap-3 rounded-lg border p-3 text-start transition-all",
                !showResult && "border-border bg-card hover:border-gold-light hover:shadow-scripture cursor-pointer",
                showResult && isCorrect && "border-green-500/50 bg-green-500/10",
                showResult && isSelected && !isCorrect && "border-destructive/50 bg-destructive/10",
                showResult && !isCorrect && !isSelected && "opacity-50"
              )}
            >
              <img src={saint.image} alt="" className="h-10 w-10 rounded-full object-cover flex-shrink-0" />
              <span className="font-body text-sm text-foreground">{saint.name[language]}</span>
              {showResult && isCorrect && <CheckCircle2 className="h-4 w-4 text-green-500 ms-auto flex-shrink-0" />}
              {showResult && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-destructive ms-auto flex-shrink-0" />}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="text-center animate-fade-in-up">
          <p className={cn("font-display text-sm mb-3", selected === round.correct.slug ? "text-green-500" : "text-destructive")}>
            {selected === round.correct.slug ? t("games.correct") : `${t("games.wrong")} ${round.correct.name[language]}`}
          </p>
          <Button onClick={nextRound} className="bg-primary text-primary-foreground">
            {t("games.next")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default GuessTheSaint;
