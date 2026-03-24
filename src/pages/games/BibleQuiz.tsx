import { useState, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  question: { en: string; ar: string };
  options: { en: string; ar: string }[];
  correct: number;
  explanation: { en: string; ar: string };
}

const questions: QuizQuestion[] = [
  {
    question: { en: "How many books are in the Catholic Bible?", ar: "كم عدد أسفار الكتاب المقدس الكاثوليكي؟" },
    options: [
      { en: "66", ar: "٦٦" }, { en: "73", ar: "٧٣" }, { en: "70", ar: "٧٠" }, { en: "81", ar: "٨١" }
    ],
    correct: 1,
    explanation: { en: "The Catholic Bible contains 73 books: 46 Old Testament and 27 New Testament.", ar: "يحتوي الكتاب المقدس الكاثوليكي على ٧٣ سفرًا: ٤٦ في العهد القديم و٢٧ في العهد الجديد." }
  },
  {
    question: { en: "Who baptized Jesus in the Jordan River?", ar: "من عمّد يسوع في نهر الأردن؟" },
    options: [
      { en: "Peter", ar: "بطرس" }, { en: "John the Baptist", ar: "يوحنا المعمدان" }, { en: "Andrew", ar: "أندراوس" }, { en: "James", ar: "يعقوب" }
    ],
    correct: 1,
    explanation: { en: "John the Baptist baptized Jesus in the Jordan River (Matthew 3:13-17).", ar: "عمّد يوحنا المعمدان يسوع في نهر الأردن (متى ٣: ١٣-١٧)." }
  },
  {
    question: { en: "Which apostle denied Jesus three times?", ar: "أي رسول أنكر يسوع ثلاث مرات؟" },
    options: [
      { en: "John", ar: "يوحنا" }, { en: "Judas", ar: "يهوذا" }, { en: "Peter", ar: "بطرس" }, { en: "Thomas", ar: "توما" }
    ],
    correct: 2,
    explanation: { en: "Peter denied Jesus three times before the rooster crowed (Luke 22:54-62).", ar: "أنكر بطرس يسوع ثلاث مرات قبل أن يصيح الديك (لوقا ٢٢: ٥٤-٦٢)." }
  },
  {
    question: { en: "What is the first book of the Bible?", ar: "ما هو أول سفر في الكتاب المقدس؟" },
    options: [
      { en: "Exodus", ar: "الخروج" }, { en: "Genesis", ar: "التكوين" }, { en: "Psalms", ar: "المزامير" }, { en: "Matthew", ar: "متى" }
    ],
    correct: 1,
    explanation: { en: "Genesis is the first book, describing creation and the patriarchs.", ar: "التكوين هو السفر الأول، ويصف الخلق والآباء." }
  },
  {
    question: { en: "How many sacraments are there in the Catholic Church?", ar: "كم عدد الأسرار المقدسة في الكنيسة الكاثوليكية؟" },
    options: [
      { en: "5", ar: "٥" }, { en: "6", ar: "٦" }, { en: "7", ar: "٧" }, { en: "9", ar: "٩" }
    ],
    correct: 2,
    explanation: { en: "The seven sacraments: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, Matrimony.", ar: "الأسرار السبعة: المعمودية، التثبيت، القربان، التوبة، مسحة المرضى، الكهنوت، الزواج." }
  },
  {
    question: { en: "Who wrote most of the New Testament epistles?", ar: "من كتب معظم رسائل العهد الجديد؟" },
    options: [
      { en: "Peter", ar: "بطرس" }, { en: "James", ar: "يعقوب" }, { en: "Paul", ar: "بولس" }, { en: "John", ar: "يوحنا" }
    ],
    correct: 2,
    explanation: { en: "St. Paul wrote 13-14 of the 21 epistles in the New Testament.", ar: "كتب القديس بولس ١٣-١٤ من أصل ٢١ رسالة في العهد الجديد." }
  },
  {
    question: { en: "On which mountain did Moses receive the Ten Commandments?", ar: "على أي جبل تلقى موسى الوصايا العشر؟" },
    options: [
      { en: "Mount Carmel", ar: "جبل الكرمل" }, { en: "Mount Sinai", ar: "جبل سيناء" }, { en: "Mount Tabor", ar: "جبل طابور" }, { en: "Mount Zion", ar: "جبل صهيون" }
    ],
    correct: 1,
    explanation: { en: "Moses received the Ten Commandments on Mount Sinai (Exodus 19-20).", ar: "تلقّى موسى الوصايا العشر على جبل سيناء (خروج ١٩-٢٠)." }
  },
  {
    question: { en: "What miracle did Jesus perform at the wedding at Cana?", ar: "ما المعجزة التي صنعها يسوع في عرس قانا؟" },
    options: [
      { en: "Healed a blind man", ar: "شفى أعمى" }, { en: "Turned water into wine", ar: "حوّل الماء إلى خمر" }, { en: "Multiplied loaves", ar: "كثّر الخبز" }, { en: "Walked on water", ar: "مشى على الماء" }
    ],
    correct: 1,
    explanation: { en: "Jesus turned water into wine at the wedding at Cana (John 2:1-11).", ar: "حوّل يسوع الماء إلى خمر في عرس قانا (يوحنا ٢: ١-١١)." }
  },
  {
    question: { en: "Who is the mother of John the Baptist?", ar: "من هي أم يوحنا المعمدان؟" },
    options: [
      { en: "Mary", ar: "مريم" }, { en: "Elizabeth", ar: "أليصابات" }, { en: "Martha", ar: "مرتا" }, { en: "Hannah", ar: "حنّة" }
    ],
    correct: 1,
    explanation: { en: "Elizabeth, wife of Zechariah, was the mother of John the Baptist (Luke 1:5-25).", ar: "أليصابات زوجة زكريا كانت أم يوحنا المعمدان (لوقا ١: ٥-٢٥)." }
  },
  {
    question: { en: "Which Gospel was written first?", ar: "أي إنجيل كُتب أولاً؟" },
    options: [
      { en: "Matthew", ar: "متى" }, { en: "Mark", ar: "مرقس" }, { en: "Luke", ar: "لوقا" }, { en: "John", ar: "يوحنا" }
    ],
    correct: 1,
    explanation: { en: "Most scholars believe the Gospel of Mark was written first, around 65-70 AD.", ar: "يعتقد معظم العلماء أن إنجيل مرقس كُتب أولاً حوالي ٦٥-٧٠ م." }
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const BibleQuiz = () => {
  const { language, t } = useLanguage();
  const [shuffled] = useState(() => shuffleArray(questions));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = shuffled[currentIdx];

  const handleSelect = useCallback((idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) setScore((p) => p + 1);
  }, [selected, q.correct]);

  const nextQuestion = useCallback(() => {
    if (currentIdx + 1 >= shuffled.length) {
      setFinished(true);
      return;
    }
    setCurrentIdx((p) => p + 1);
    setSelected(null);
  }, [currentIdx, shuffled.length]);

  const resetGame = useCallback(() => {
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }, []);

  if (finished) {
    const pct = Math.round((score / shuffled.length) * 100);
    return (
      <div className="mx-auto max-w-2xl px-4 py-6">
        <Link to="/games" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t("games.backToGames")}
        </Link>
        <ContentCard gold className="text-center py-8">
          <h2 className="font-display text-2xl text-foreground mb-2">🏆</h2>
          <p className="font-display text-lg text-foreground mb-1">{t("games.quizComplete")}</p>
          <p className="font-body text-3xl font-bold text-crimson mb-1">{pct}%</p>
          <p className="font-body text-sm text-muted-foreground mb-4">{score}/{shuffled.length} {t("games.correctAnswers")}</p>
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

      <SectionHeader title={t("games.bibleQuiz")} subtitle={`${t("games.question")} ${currentIdx + 1}/${shuffled.length}`} />

      <div className="flex items-center justify-between mb-4">
        <span className="font-body text-sm text-muted-foreground">
          {t("games.score")}: <span className="text-foreground font-semibold">{score}</span>
        </span>
        <Button variant="ghost" size="sm" onClick={resetGame}>
          <RotateCcw className="h-4 w-4 me-1" /> {t("games.reset")}
        </Button>
      </div>

      <ContentCard gold className="mb-5">
        <p className="font-body text-base text-foreground leading-relaxed">{q.question[language]}</p>
      </ContentCard>

      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correct;
          const isSelected = selected === i;
          const showResult = selected !== null;

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={!!selected}
              className={cn(
                "w-full flex items-center gap-3 rounded-lg border p-3.5 text-start transition-all",
                !showResult && "border-border bg-card hover:border-gold-light cursor-pointer",
                showResult && isCorrect && "border-green-500/50 bg-green-500/10",
                showResult && isSelected && !isCorrect && "border-destructive/50 bg-destructive/10",
                showResult && !isCorrect && !isSelected && "opacity-50"
              )}
            >
              <span className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold flex-shrink-0",
                showResult && isCorrect ? "border-green-500 text-green-500" : showResult && isSelected ? "border-destructive text-destructive" : "border-muted-foreground/30 text-muted-foreground"
              )}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="font-body text-sm text-foreground">{opt[language]}</span>
              {showResult && isCorrect && <CheckCircle2 className="h-4 w-4 text-green-500 ms-auto flex-shrink-0" />}
              {showResult && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-destructive ms-auto flex-shrink-0" />}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="animate-fade-in-up">
          <ContentCard className="mb-4">
            <p className="font-body text-sm text-muted-foreground">{q.explanation[language]}</p>
          </ContentCard>
          <div className="text-center">
            <Button onClick={nextQuestion} className="bg-primary text-primary-foreground">
              {currentIdx + 1 >= shuffled.length ? t("games.seeResults") : t("games.next")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BibleQuiz;
