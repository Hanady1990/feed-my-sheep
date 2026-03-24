import SectionHeader from "@/components/SectionHeader";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, BookOpen, ShieldCheck, Shuffle, Heart } from "lucide-react";
import ContentCard from "@/components/ContentCard";

const Games = () => {
  const { t } = useLanguage();

  const games = [
    { to: "/games/guess-the-saint", icon: Users, label: t("games.guessSaint"), desc: t("games.guessSaint.desc") },
    { to: "/games/bible-quiz", icon: BookOpen, label: t("games.bibleQuiz"), desc: t("games.bibleQuiz.desc") },
    { to: "/games/truth-vs-heresy", icon: ShieldCheck, label: t("games.truthHeresy"), desc: t("games.truthHeresy.desc") },
    { to: "/games/word-scramble", icon: Shuffle, label: t("games.wordScramble"), desc: t("games.wordScramble.desc") },
    { to: "/games/match-the-patron", icon: Heart, label: t("games.matchPatron"), desc: t("games.matchPatron.desc") },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("games.title")} subtitle={t("games.subtitle")} />
      <div className="space-y-3">
        {games.map((game) => (
          <Link key={game.to} to={game.to}>
            <ContentCard className="flex items-center gap-4 hover:border-gold-light mb-2 cursor-pointer transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                <game.icon className="h-6 w-6 text-crimson" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-sm text-foreground">{game.label}</h3>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{game.desc}</p>
              </div>
            </ContentCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Games;
