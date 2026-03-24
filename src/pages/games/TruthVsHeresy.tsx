import { useState, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContentCard from "@/components/ContentCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, ShieldCheck, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Statement {
  text: { en: string; ar: string };
  isTruth: boolean;
  explanation: { en: string; ar: string };
}

const statements: Statement[] = [
  {
    text: { en: "Jesus Christ is truly God and truly man.", ar: "يسوع المسيح هو إله حقيقي وإنسان حقيقي." },
    isTruth: true,
    explanation: { en: "This is the Catholic teaching defined at the Council of Chalcedon (451 AD).", ar: "هذا هو التعليم الكاثوليكي المحدد في مجمع خلقيدونية (٤٥١ م)." }
  },
  {
    text: { en: "Jesus was a created being, not eternal with the Father.", ar: "كان يسوع مخلوقًا وليس أزليًّا مع الآب." },
    isTruth: false,
    explanation: { en: "This is the Arian heresy. The Church teaches that the Son is consubstantial with the Father (Nicene Creed).", ar: "هذه بدعة آريوس. تُعلّم الكنيسة أن الابن مساوٍ للآب في الجوهر (قانون نيقية)." }
  },
  {
    text: { en: "Humans can achieve salvation through their own efforts without God's grace.", ar: "يمكن للإنسان تحقيق الخلاص بجهوده الذاتية دون نعمة الله." },
    isTruth: false,
    explanation: { en: "This is the Pelagian heresy. The Church teaches that grace is necessary for salvation.", ar: "هذه بدعة بيلاجيوس. تُعلّم الكنيسة أن النعمة ضرورية للخلاص." }
  },
  {
    text: { en: "The Eucharist is the true Body and Blood of Christ.", ar: "القربان المقدس هو جسد المسيح ودمه الحقيقيان." },
    isTruth: true,
    explanation: { en: "The doctrine of the Real Presence is a core Catholic teaching (CCC §1374).", ar: "عقيدة الحضور الحقيقي هي تعليم كاثوليكي جوهري (ت.م.ك §١٣٧٤)." }
  },
  {
    text: { en: "Mary had other children after Jesus.", ar: "مريم أنجبت أولادًا آخرين بعد يسوع." },
    isTruth: false,
    explanation: { en: "The Catholic Church teaches the perpetual virginity of Mary. The 'brothers' mentioned in Scripture are understood as relatives.", ar: "تُعلّم الكنيسة الكاثوليكية بتولية مريم الدائمة. و'الإخوة' المذكورون في الكتاب المقدس يُفهمون كأقارب." }
  },
  {
    text: { en: "The Pope, when speaking ex cathedra on faith and morals, is infallible.", ar: "البابا عندما يتكلم من على الكرسي الرسولي في شؤون الإيمان والأخلاق يكون معصومًا." },
    isTruth: true,
    explanation: { en: "Papal infallibility was defined at Vatican I (1870) and is a Catholic dogma (CCC §891).", ar: "العصمة البابوية حُدّدت في المجمع الفاتيكاني الأول (١٨٧٠) وهي عقيدة كاثوليكية (ت.م.ك §٨٩١)." }
  },
  {
    text: { en: "Christ had only a divine nature, not a human one.", ar: "كان للمسيح طبيعة إلهية فقط وليس طبيعة بشرية." },
    isTruth: false,
    explanation: { en: "This is the Monophysite heresy. The Church teaches Christ has two natures: divine and human (Council of Chalcedon).", ar: "هذه بدعة الطبيعة الواحدة. تُعلّم الكنيسة أن للمسيح طبيعتين: إلهية وبشرية (مجمع خلقيدونية)." }
  },
  {
    text: { en: "Sacred Tradition and Sacred Scripture together form one sacred deposit of faith.", ar: "التقليد المقدس والكتاب المقدس يشكّلان معًا وديعة إيمان واحدة مقدسة." },
    isTruth: true,
    explanation: { en: "The Catholic Church teaches that both Scripture and Tradition are sources of divine revelation (CCC §80-82).", ar: "تُعلّم الكنيسة أن كلًّا من الكتاب المقدس والتقليد مصدران للوحي الإلهي (ت.م.ك §٨٠-٨٢)." }
  },
  {
    text: { en: "The material world is inherently evil and was created by a lesser god.", ar: "العالم المادي شرير بطبيعته وخلقه إله أدنى." },
    isTruth: false,
    explanation: { en: "This is the Gnostic heresy. The Church teaches that God created all things good (Genesis 1:31, CCC §299).", ar: "هذه بدعة الغنوصية. تُعلّم الكنيسة أن الله خلق كل شيء حسنًا (تكوين ١: ٣١، ت.م.ك §٢٩٩)." }
  },
  {
    text: { en: "Baptism is necessary for salvation.", ar: "المعمودية ضرورية للخلاص." },
    isTruth: true,
    explanation: { en: "The Church teaches that Baptism is the ordinary means of salvation (CCC §1257).", ar: "تُعلّم الكنيسة أن المعمودية هي الوسيلة العادية للخلاص (ت.م.ك §١٢٥٧)." }
  },
  {
    text: { en: "Icons and religious images should be destroyed as they are idolatry.", ar: "يجب تدمير الأيقونات والصور الدينية لأنها عبادة أوثان." },
    isTruth: false,
    explanation: { en: "This is the Iconoclast heresy. The Second Council of Nicaea (787) affirmed the veneration of sacred images.", ar: "هذه بدعة تحطيم الأيقونات. أكد مجمع نيقية الثاني (٧٨٧) تكريم الصور المقدسة." }
  },
  {
    text: { en: "There are three Persons in one God: Father, Son, and Holy Spirit.", ar: "هناك ثلاثة أقانيم في إله واحد: الآب والابن والروح القدس." },
    isTruth: true,
    explanation: { en: "The doctrine of the Holy Trinity is the central mystery of the Christian faith (CCC §234).", ar: "عقيدة الثالوث الأقدس هي السر المركزي للإيمان المسيحي (ت.م.ك §٢٣٤)." }
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

const TruthVsHeresy = () => {
  const { language, t } = useLanguage();
  const [shuffled] = useState(() => shuffleArray(statements));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [finished, setFinished] = useState(false);

  const stmt = shuffled[currentIdx];

  const handleAnswer = useCallback((isTruth: boolean) => {
    if (answer !== null) return;
    setAnswer(isTruth);
    setTotal((p) => p + 1);
    if (isTruth === stmt.isTruth) setScore((p) => p + 1);
  }, [answer, stmt.isTruth]);

  const nextStatement = useCallback(() => {
    if (currentIdx + 1 >= shuffled.length) {
      setFinished(true);
      return;
    }
    setCurrentIdx((p) => p + 1);
    setAnswer(null);
  }, [currentIdx, shuffled.length]);

  const resetGame = useCallback(() => {
    setCurrentIdx(0);
    setAnswer(null);
    setScore(0);
    setTotal(0);
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

      <SectionHeader title={t("games.truthHeresy")} subtitle={`${t("games.question")} ${currentIdx + 1}/${shuffled.length}`} />

      <div className="flex items-center justify-between mb-4">
        <span className="font-body text-sm text-muted-foreground">
          {t("games.score")}: <span className="text-foreground font-semibold">{score}/{total}</span>
        </span>
        <Button variant="ghost" size="sm" onClick={resetGame}>
          <RotateCcw className="h-4 w-4 me-1" /> {t("games.reset")}
        </Button>
      </div>

      <ContentCard gold className="mb-5 text-center">
        <p className="font-body text-lg text-foreground leading-relaxed italic">"{stmt.text[language]}"</p>
      </ContentCard>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={() => handleAnswer(true)}
          disabled={answer !== null}
          className={cn(
            "flex flex-col items-center gap-2 rounded-lg border p-4 transition-all",
            answer === null && "border-border bg-card hover:border-green-500/50 hover:bg-green-500/5 cursor-pointer",
            answer !== null && stmt.isTruth && "border-green-500/50 bg-green-500/10",
            answer === true && !stmt.isTruth && "border-destructive/50 bg-destructive/10",
            answer !== null && !stmt.isTruth && answer !== true && "opacity-50"
          )}
        >
          <ShieldCheck className={cn("h-8 w-8", answer !== null && stmt.isTruth ? "text-green-500" : "text-muted-foreground")} />
          <span className="font-display text-sm">{t("games.truth")}</span>
        </button>
        <button
          onClick={() => handleAnswer(false)}
          disabled={answer !== null}
          className={cn(
            "flex flex-col items-center gap-2 rounded-lg border p-4 transition-all",
            answer === null && "border-border bg-card hover:border-destructive/50 hover:bg-destructive/5 cursor-pointer",
            answer !== null && !stmt.isTruth && "border-crimson/50 bg-crimson/10",
            answer === false && stmt.isTruth && "border-destructive/50 bg-destructive/10",
            answer !== null && stmt.isTruth && answer !== false && "opacity-50"
          )}
        >
          <ShieldAlert className={cn("h-8 w-8", answer !== null && !stmt.isTruth ? "text-crimson" : "text-muted-foreground")} />
          <span className="font-display text-sm">{t("games.heresy")}</span>
        </button>
      </div>

      {answer !== null && (
        <div className="animate-fade-in-up">
          <ContentCard className={cn("mb-4", answer === stmt.isTruth ? "border-green-500/30" : "border-destructive/30")}>
            <p className={cn("font-display text-sm mb-2", answer === stmt.isTruth ? "text-green-500" : "text-destructive")}>
              {answer === stmt.isTruth ? `✓ ${t("games.correct")}` : `✗ ${t("games.incorrect")}`}
            </p>
            <p className="font-body text-sm text-muted-foreground">{stmt.explanation[language]}</p>
          </ContentCard>
          <div className="text-center">
            <Button onClick={nextStatement} className="bg-primary text-primary-foreground">
              {currentIdx + 1 >= shuffled.length ? t("games.seeResults") : t("games.next")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TruthVsHeresy;
