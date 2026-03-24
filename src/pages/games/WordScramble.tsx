import { useState, useCallback, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ScrambleItem {
  words: { en: string[]; ar: string[] };
  reference: { en: string; ar: string };
}

const verses: ScrambleItem[] = [
  { words: { en: ["The", "Lord", "is", "my", "shepherd"], ar: ["الرب", "هو", "راعيَّ"] }, reference: { en: "Psalm 23:1", ar: "مزمور ٢٣: ١" } },
  { words: { en: ["I", "am", "the", "way", "the", "truth", "and", "the", "life"], ar: ["أنا", "هو", "الطريق", "والحق", "والحياة"] }, reference: { en: "John 14:6", ar: "يوحنا ١٤: ٦" } },
  { words: { en: ["For", "God", "so", "loved", "the", "world"], ar: ["لأنه", "هكذا", "أحب", "الله", "العالم"] }, reference: { en: "John 3:16", ar: "يوحنا ٣: ١٦" } },
  { words: { en: ["Be", "still", "and", "know", "that", "I", "am", "God"], ar: ["كُفّوا", "واعلموا", "أني", "أنا", "الله"] }, reference: { en: "Psalm 46:10", ar: "مزمور ٤٦: ١٠" } },
  { words: { en: ["Love", "your", "neighbor", "as", "yourself"], ar: ["أحبب", "قريبك", "كنفسك"] }, reference: { en: "Mark 12:31", ar: "مرقس ١٢: ٣١" } },
  { words: { en: ["In", "the", "beginning", "was", "the", "Word"], ar: ["في", "البدء", "كان", "الكلمة"] }, reference: { en: "John 1:1", ar: "يوحنا ١: ١" } },
  { words: { en: ["Ask", "and", "it", "will", "be", "given", "to", "you"], ar: ["اسألوا", "تُعطَوا"] }, reference: { en: "Matthew 7:7", ar: "متى ٧: ٧" } },
  { words: { en: ["Blessed", "are", "the", "pure", "in", "heart"], ar: ["طوبى", "لأنقياء", "القلب"] }, reference: { en: "Matthew 5:8", ar: "متى ٥: ٨" } },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const WordScramble = () => {
  const { language, t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const verse = verses[currentIdx];
  const correctWords = verse.words[language];

  const [scrambled, setScrambled] = useState<string[]>(() => shuffleArray(correctWords));
  const [placed, setPlaced] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);

  const remaining = useMemo(() => {
    const placedCount: Record<string, number> = {};
    placed.forEach((w) => { placedCount[w] = (placedCount[w] || 0) + 1; });
    
    const result: { word: string; idx: number }[] = [];
    const usedCount: Record<string, number> = {};
    scrambled.forEach((w, i) => {
      usedCount[w] = (usedCount[w] || 0) + 1;
      if ((usedCount[w] || 0) <= (placedCount[w] || 0)) return;
      result.push({ word: w, idx: i });
    });
    return result;
  }, [scrambled, placed]);

  const handleWordClick = useCallback((word: string) => {
    if (solved) return;
    const newPlaced = [...placed, word];
    setPlaced(newPlaced);

    if (newPlaced.length === correctWords.length) {
      const isCorrect = newPlaced.every((w, i) => w === correctWords[i]);
      if (isCorrect) {
        setSolved(true);
        setScore((p) => p + 1);
      }
    }
  }, [placed, solved, correctWords]);

  const handleRemoveWord = useCallback((idx: number) => {
    if (solved) return;
    setPlaced((p) => p.filter((_, i) => i !== idx));
  }, [solved]);

  const handleReset = useCallback(() => {
    setPlaced([]);
    setSolved(false);
    setScrambled(shuffleArray(correctWords));
  }, [correctWords]);

  const nextVerse = useCallback(() => {
    if (currentIdx + 1 >= verses.length) {
      setFinished(true);
      return;
    }
    const nextWords = verses[currentIdx + 1].words[language];
    setCurrentIdx((p) => p + 1);
    setScrambled(shuffleArray(nextWords));
    setPlaced([]);
    setSolved(false);
  }, [currentIdx, language]);

  const resetGame = useCallback(() => {
    setCurrentIdx(0);
    setScore(0);
    setFinished(false);
    setScrambled(shuffleArray(verses[0].words[language]));
    setPlaced([]);
    setSolved(false);
  }, [language]);

  if (finished) {
    const pct = Math.round((score / verses.length) * 100);
    return (
      <div className="mx-auto max-w-2xl px-4 py-6">
        <Link to="/games" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t("games.backToGames")}
        </Link>
        <ContentCard gold className="text-center py-8">
          <h2 className="font-display text-2xl text-foreground mb-2">🏆</h2>
          <p className="font-display text-lg text-foreground mb-1">{t("games.quizComplete")}</p>
          <p className="font-body text-3xl font-bold text-crimson mb-1">{pct}%</p>
          <p className="font-body text-sm text-muted-foreground mb-4">{score}/{verses.length} {t("games.correctAnswers")}</p>
          <Button onClick={resetGame}><RotateCcw className="h-4 w-4 me-1" /> {t("games.playAgain")}</Button>
        </ContentCard>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link to="/games" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
        <ArrowLeft className="h-4 w-4" /> {t("games.backToGames")}
      </Link>

      <SectionHeader title={t("games.wordScramble")} subtitle={`${t("games.question")} ${currentIdx + 1}/${verses.length}`} />

      <div className="flex items-center justify-between mb-4">
        <span className="font-body text-sm text-muted-foreground">
          {t("games.score")}: <span className="text-foreground font-semibold">{score}</span>
        </span>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <RotateCcw className="h-4 w-4 me-1" /> {t("games.reset")}
        </Button>
      </div>

      <ContentCard gold className="mb-4 text-center">
        <p className="font-display text-xs uppercase tracking-wider text-gold mb-1">{t("games.hint")}</p>
        <p className="font-body text-sm text-muted-foreground">{verse.reference[language]}</p>
      </ContentCard>

      {/* Drop zone */}
      <div className={cn(
        "min-h-[60px] rounded-lg border-2 border-dashed p-3 mb-4 flex flex-wrap gap-2 items-center justify-center transition-colors",
        solved ? "border-green-500/50 bg-green-500/5" : "border-border"
      )}>
        {placed.length === 0 && (
          <p className="font-body text-xs text-muted-foreground">{t("games.tapWords")}</p>
        )}
        {placed.map((word, i) => (
          <button
            key={`${word}-${i}`}
            onClick={() => handleRemoveWord(i)}
            className={cn(
              "rounded-md px-3 py-1.5 font-body text-sm transition-all",
              solved ? "bg-green-500/20 text-green-700 dark:text-green-400" : "bg-primary/10 text-foreground hover:bg-destructive/10 cursor-pointer"
            )}
          >
            {word}
          </button>
        ))}
        {solved && <CheckCircle2 className="h-5 w-5 text-green-500 ms-1" />}
      </div>

      {/* Scrambled words */}
      {!solved && (
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {remaining.map(({ word, idx }) => (
            <button
              key={`s-${idx}`}
              onClick={() => handleWordClick(word)}
              className="rounded-md border border-border bg-card px-3 py-1.5 font-body text-sm text-foreground hover:border-gold-light hover:shadow-scripture transition-all cursor-pointer"
            >
              {word}
            </button>
          ))}
        </div>
      )}

      {/* Wrong answer feedback */}
      {!solved && placed.length === correctWords.length && (
        <div className="text-center animate-fade-in-up">
          <p className="font-body text-sm text-destructive mb-2">{t("games.tryAgain")}</p>
          <Button variant="outline" size="sm" onClick={handleReset}>{t("games.reset")}</Button>
        </div>
      )}

      {solved && (
        <div className="text-center animate-fade-in-up">
          <p className="font-display text-sm text-green-500 mb-3">{t("games.correct")} 🎉</p>
          <Button onClick={nextVerse} className="bg-primary text-primary-foreground">
            {currentIdx + 1 >= verses.length ? t("games.seeResults") : t("games.next")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default WordScramble;
