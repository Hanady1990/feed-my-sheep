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
    options: [{ en: "66", ar: "٦٦" }, { en: "73", ar: "٧٣" }, { en: "70", ar: "٧٠" }, { en: "81", ar: "٨١" }],
    correct: 1,
    explanation: { en: "The Catholic Bible contains 73 books: 46 Old Testament and 27 New Testament.", ar: "يحتوي الكتاب المقدس الكاثوليكي على ٧٣ سفرًا: ٤٦ في العهد القديم و٢٧ في العهد الجديد." }
  },
  {
    question: { en: "Who baptized Jesus in the Jordan River?", ar: "من عمّد يسوع في نهر الأردن؟" },
    options: [{ en: "Peter", ar: "بطرس" }, { en: "John the Baptist", ar: "يوحنا المعمدان" }, { en: "Andrew", ar: "أندراوس" }, { en: "James", ar: "يعقوب" }],
    correct: 1,
    explanation: { en: "John the Baptist baptized Jesus in the Jordan River (Matthew 3:13-17).", ar: "عمّد يوحنا المعمدان يسوع في نهر الأردن (متى ٣: ١٣-١٧)." }
  },
  {
    question: { en: "Which apostle denied Jesus three times?", ar: "أي رسول أنكر يسوع ثلاث مرات؟" },
    options: [{ en: "John", ar: "يوحنا" }, { en: "Judas", ar: "يهوذا" }, { en: "Peter", ar: "بطرس" }, { en: "Thomas", ar: "توما" }],
    correct: 2,
    explanation: { en: "Peter denied Jesus three times before the rooster crowed (Luke 22:54-62).", ar: "أنكر بطرس يسوع ثلاث مرات قبل أن يصيح الديك (لوقا ٢٢: ٥٤-٦٢)." }
  },
  {
    question: { en: "What is the first book of the Bible?", ar: "ما هو أول سفر في الكتاب المقدس؟" },
    options: [{ en: "Exodus", ar: "الخروج" }, { en: "Genesis", ar: "التكوين" }, { en: "Psalms", ar: "المزامير" }, { en: "Matthew", ar: "متى" }],
    correct: 1,
    explanation: { en: "Genesis is the first book, describing creation and the patriarchs.", ar: "التكوين هو السفر الأول، ويصف الخلق والآباء." }
  },
  {
    question: { en: "How many sacraments are there in the Catholic Church?", ar: "كم عدد الأسرار المقدسة في الكنيسة الكاثوليكية؟" },
    options: [{ en: "5", ar: "٥" }, { en: "6", ar: "٦" }, { en: "7", ar: "٧" }, { en: "9", ar: "٩" }],
    correct: 2,
    explanation: { en: "The seven sacraments: Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, Matrimony.", ar: "الأسرار السبعة: المعمودية، التثبيت، القربان، التوبة، مسحة المرضى، الكهنوت، الزواج." }
  },
  {
    question: { en: "Who wrote most of the New Testament epistles?", ar: "من كتب معظم رسائل العهد الجديد؟" },
    options: [{ en: "Peter", ar: "بطرس" }, { en: "James", ar: "يعقوب" }, { en: "Paul", ar: "بولس" }, { en: "John", ar: "يوحنا" }],
    correct: 2,
    explanation: { en: "St. Paul wrote 13-14 of the 21 epistles in the New Testament.", ar: "كتب القديس بولس ١٣-١٤ من أصل ٢١ رسالة في العهد الجديد." }
  },
  {
    question: { en: "On which mountain did Moses receive the Ten Commandments?", ar: "على أي جبل تلقى موسى الوصايا العشر؟" },
    options: [{ en: "Mount Carmel", ar: "جبل الكرمل" }, { en: "Mount Sinai", ar: "جبل سيناء" }, { en: "Mount Tabor", ar: "جبل طابور" }, { en: "Mount Zion", ar: "جبل صهيون" }],
    correct: 1,
    explanation: { en: "Moses received the Ten Commandments on Mount Sinai (Exodus 19-20).", ar: "تلقّى موسى الوصايا العشر على جبل سيناء (خروج ١٩-٢٠)." }
  },
  {
    question: { en: "What miracle did Jesus perform at the wedding at Cana?", ar: "ما المعجزة التي صنعها يسوع في عرس قانا؟" },
    options: [{ en: "Healed a blind man", ar: "شفى أعمى" }, { en: "Turned water into wine", ar: "حوّل الماء إلى خمر" }, { en: "Multiplied loaves", ar: "كثّر الخبز" }, { en: "Walked on water", ar: "مشى على الماء" }],
    correct: 1,
    explanation: { en: "Jesus turned water into wine at the wedding at Cana (John 2:1-11).", ar: "حوّل يسوع الماء إلى خمر في عرس قانا (يوحنا ٢: ١-١١)." }
  },
  {
    question: { en: "Who is the mother of John the Baptist?", ar: "من هي أم يوحنا المعمدان؟" },
    options: [{ en: "Mary", ar: "مريم" }, { en: "Elizabeth", ar: "أليصابات" }, { en: "Martha", ar: "مرتا" }, { en: "Hannah", ar: "حنّة" }],
    correct: 1,
    explanation: { en: "Elizabeth, wife of Zechariah, was the mother of John the Baptist (Luke 1:5-25).", ar: "أليصابات زوجة زكريا كانت أم يوحنا المعمدان (لوقا ١: ٥-٢٥)." }
  },
  {
    question: { en: "Which Gospel was written first?", ar: "أي إنجيل كُتب أولاً؟" },
    options: [{ en: "Matthew", ar: "متى" }, { en: "Mark", ar: "مرقس" }, { en: "Luke", ar: "لوقا" }, { en: "John", ar: "يوحنا" }],
    correct: 1,
    explanation: { en: "Most scholars believe the Gospel of Mark was written first, around 65-70 AD.", ar: "يعتقد معظم العلماء أن إنجيل مرقس كُتب أولاً حوالي ٦٥-٧٠ م." }
  },
  // Psalms
  {
    question: { en: "How many Psalms are in the Book of Psalms?", ar: "كم عدد المزامير في سفر المزامير؟" },
    options: [{ en: "100", ar: "١٠٠" }, { en: "120", ar: "١٢٠" }, { en: "150", ar: "١٥٠" }, { en: "175", ar: "١٧٥" }],
    correct: 2,
    explanation: { en: "The Book of Psalms contains 150 psalms, traditionally attributed largely to King David.", ar: "يحتوي سفر المزامير على ١٥٠ مزمورًا، تُنسب تقليديًّا في معظمها إلى الملك داود." }
  },
  {
    question: { en: "Which Psalm begins with 'The Lord is my shepherd'?", ar: "أي مزمور يبدأ بـ 'الرب راعيّ'؟" },
    options: [{ en: "Psalm 1", ar: "المزمور ١" }, { en: "Psalm 23", ar: "المزمور ٢٣" }, { en: "Psalm 51", ar: "المزمور ٥١" }, { en: "Psalm 91", ar: "المزمور ٩١" }],
    correct: 1,
    explanation: { en: "Psalm 23 is one of the most beloved psalms, expressing trust in God's providential care.", ar: "المزمور ٢٣ من أشهر المزامير ويعبّر عن الثقة بعناية الله." }
  },
  {
    question: { en: "Which Psalm is known as the great penitential psalm of David?", ar: "أي مزمور يُعرف بمزمور التوبة العظيم لداود؟" },
    options: [{ en: "Psalm 23", ar: "المزمور ٢٣" }, { en: "Psalm 51", ar: "المزمور ٥١" }, { en: "Psalm 119", ar: "المزمور ١١٩" }, { en: "Psalm 100", ar: "المزمور ١٠٠" }],
    correct: 1,
    explanation: { en: "Psalm 51 (Miserere) is David's prayer of repentance after his sin with Bathsheba.", ar: "المزمور ٥١ هو صلاة توبة داود بعد خطيئته مع بتشبع." }
  },
  {
    question: { en: "Which is the longest chapter in the entire Bible?", ar: "ما هو أطول إصحاح في الكتاب المقدس كله؟" },
    options: [{ en: "Genesis 1", ar: "تكوين ١" }, { en: "Psalm 119", ar: "المزمور ١١٩" }, { en: "Isaiah 53", ar: "إشعياء ٥٣" }, { en: "Revelation 22", ar: "رؤيا ٢٢" }],
    correct: 1,
    explanation: { en: "Psalm 119 has 176 verses, each section devoted to a letter of the Hebrew alphabet, praising God's law.", ar: "المزمور ١١٩ يحتوي على ١٧٦ آية، كل قسم مخصص لحرف من الأبجدية العبرية في مدح شريعة الله." }
  },
  // Apostles
  {
    question: { en: "How many apostles did Jesus originally choose?", ar: "كم رسولاً اختار يسوع في البداية؟" },
    options: [{ en: "7", ar: "٧" }, { en: "10", ar: "١٠" }, { en: "12", ar: "١٢" }, { en: "14", ar: "١٤" }],
    correct: 2,
    explanation: { en: "Jesus chose 12 apostles, symbolizing the 12 tribes of Israel (Luke 6:13-16).", ar: "اختار يسوع ١٢ رسولاً رمزًا لأسباط إسرائيل الاثني عشر (لوقا ٦: ١٣-١٦)." }
  },
  {
    question: { en: "Which apostle replaced Judas Iscariot?", ar: "أي رسول حلّ محل يهوذا الإسخريوطي؟" },
    options: [{ en: "Paul", ar: "بولس" }, { en: "Matthias", ar: "متّيا" }, { en: "Barnabas", ar: "برنابا" }, { en: "Timothy", ar: "تيموثاوس" }],
    correct: 1,
    explanation: { en: "Matthias was chosen by lot to replace Judas among the Twelve (Acts 1:26).", ar: "اختير متّيا بالقرعة ليحلّ محل يهوذا بين الاثني عشر (أعمال ١: ٢٦)." }
  },
  {
    question: { en: "Which apostle is called 'the beloved disciple'?", ar: "أي رسول يُدعى 'التلميذ الحبيب'؟" },
    options: [{ en: "Peter", ar: "بطرس" }, { en: "John", ar: "يوحنا" }, { en: "Andrew", ar: "أندراوس" }, { en: "Philip", ar: "فيلبّس" }],
    correct: 1,
    explanation: { en: "John is traditionally identified as the beloved disciple who leaned on Jesus at the Last Supper (John 13:23).", ar: "يُعرّف يوحنا تقليديًّا بأنه التلميذ الحبيب الذي اتكأ على صدر يسوع في العشاء الأخير (يوحنا ١٣: ٢٣)." }
  },
  {
    question: { en: "Which apostle is known as 'Doubting Thomas'?", ar: "أي رسول يُعرف بـ 'توما الشكّاك'؟" },
    options: [{ en: "Bartholomew", ar: "برتلماوس" }, { en: "Thomas", ar: "توما" }, { en: "Simon", ar: "سمعان" }, { en: "Jude", ar: "يهوذا" }],
    correct: 1,
    explanation: { en: "Thomas doubted the Resurrection until he saw and touched Jesus' wounds (John 20:24-29).", ar: "شكّ توما في القيامة حتى رأى ولمس جراح يسوع (يوحنا ٢٠: ٢٤-٢٩)." }
  },
  // Church history
  {
    question: { en: "In what year was the Council of Nicaea held?", ar: "في أي سنة انعقد مجمع نيقية؟" },
    options: [{ en: "225 AD", ar: "٢٢٥ م" }, { en: "325 AD", ar: "٣٢٥ م" }, { en: "451 AD", ar: "٤٥١ م" }, { en: "553 AD", ar: "٥٥٣ م" }],
    correct: 1,
    explanation: { en: "The First Council of Nicaea (325 AD) defined the divinity of Christ and produced the Nicene Creed.", ar: "حدّد مجمع نيقية الأول (٣٢٥ م) ألوهية المسيح وأصدر قانون الإيمان النيقاوي." }
  },
  {
    question: { en: "Who was the first Pope of the Catholic Church?", ar: "من كان أول بابا للكنيسة الكاثوليكية؟" },
    options: [{ en: "Paul", ar: "بولس" }, { en: "Peter", ar: "بطرس" }, { en: "James", ar: "يعقوب" }, { en: "John", ar: "يوحنا" }],
    correct: 1,
    explanation: { en: "St. Peter is considered the first Pope, given the keys of the Kingdom by Jesus (Matthew 16:18-19).", ar: "يُعتبر القديس بطرس أول بابا، إذ أعطاه يسوع مفاتيح الملكوت (متى ١٦: ١٨-١٩)." }
  },
  {
    question: { en: "Which ecumenical council defined the doctrine of the two natures of Christ?", ar: "أي مجمع مسكوني حدّد عقيدة الطبيعتين في المسيح؟" },
    options: [{ en: "Nicaea", ar: "نيقية" }, { en: "Ephesus", ar: "أفسس" }, { en: "Chalcedon", ar: "خلقيدونية" }, { en: "Trent", ar: "ترنت" }],
    correct: 2,
    explanation: { en: "The Council of Chalcedon (451 AD) defined that Christ has two natures, divine and human, in one Person.", ar: "حدّد مجمع خلقيدونية (٤٥١ م) أن للمسيح طبيعتين إلهية وبشرية في أقنوم واحد." }
  },
  {
    question: { en: "What is the name of the creed recited at Mass that professes belief in the Trinity?", ar: "ما اسم قانون الإيمان الذي يُتلى في القداس ويعلن الإيمان بالثالوث؟" },
    options: [{ en: "Apostles' Creed", ar: "قانون الرسل" }, { en: "Nicene Creed", ar: "قانون نيقية" }, { en: "Athanasian Creed", ar: "قانون أثناسيوس" }, { en: "Te Deum", ar: "نشيد التسبيح" }],
    correct: 1,
    explanation: { en: "The Nicene Creed, formulated at Nicaea (325) and Constantinople (381), is professed at every Sunday Mass.", ar: "قانون الإيمان النيقاوي صِيغ في نيقية (٣٢٥) والقسطنطينية (٣٨١) ويُتلى في كل قداس أحد." }
  },
  // Sacraments
  {
    question: { en: "Which sacrament forgives sins committed after Baptism?", ar: "أي سر يغفر الخطايا المرتكبة بعد المعمودية؟" },
    options: [{ en: "Confirmation", ar: "التثبيت" }, { en: "Eucharist", ar: "القربان" }, { en: "Penance (Confession)", ar: "التوبة (الاعتراف)" }, { en: "Anointing of the Sick", ar: "مسحة المرضى" }],
    correct: 2,
    explanation: { en: "The Sacrament of Penance (Confession) reconciles the sinner with God and the Church (CCC §1422).", ar: "سر التوبة (الاعتراف) يُصالح الخاطئ مع الله والكنيسة (ت.م.ك §١٤٢٢)." }
  },
  {
    question: { en: "What does the word 'Eucharist' mean?", ar: "ماذا تعني كلمة 'إفخارستيا'؟" },
    options: [{ en: "Sacrifice", ar: "ذبيحة" }, { en: "Thanksgiving", ar: "شكر" }, { en: "Communion", ar: "مناولة" }, { en: "Blessing", ar: "بركة" }],
    correct: 1,
    explanation: { en: "Eucharist comes from the Greek 'eucharistia' meaning 'thanksgiving' (CCC §1328).", ar: "كلمة إفخارستيا مشتقة من اليونانية وتعني 'الشكر' (ت.م.ك §١٣٢٨)." }
  },
  {
    question: { en: "At what age do Catholics typically receive their First Communion?", ar: "في أي سن يتناول الكاثوليك عادة المناولة الأولى؟" },
    options: [{ en: "5 years old", ar: "٥ سنوات" }, { en: "7 years old", ar: "٧ سنوات" }, { en: "10 years old", ar: "١٠ سنوات" }, { en: "13 years old", ar: "١٣ سنة" }],
    correct: 1,
    explanation: { en: "The age of reason (around 7) is when children typically receive First Communion, as established by Pope Pius X.", ar: "سن التمييز (حوالي ٧ سنوات) هو الوقت الذي يتناول فيه الأطفال المناولة الأولى كما حدّده البابا بيوس العاشر." }
  },
  {
    question: { en: "Which sacrament is received only once and imprints an indelible spiritual mark?", ar: "أي سر يُستقبل مرة واحدة فقط ويطبع علامة روحية لا تُمحى؟" },
    options: [{ en: "Eucharist", ar: "القربان" }, { en: "Penance", ar: "التوبة" }, { en: "Baptism", ar: "المعمودية" }, { en: "Anointing of the Sick", ar: "مسحة المرضى" }],
    correct: 2,
    explanation: { en: "Baptism, Confirmation, and Holy Orders each imprint an indelible character and can be received only once (CCC §1121).", ar: "المعمودية والتثبيت والكهنوت تطبع كل منها طابعًا لا يُمحى ولا تُعاد (ت.م.ك §١١٢١)." }
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
