import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Cross, Heart, Users, Flame, Music, CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Devotion {
  id: string;
  icon: React.ElementType;
  labelKey: string;
  descKey: string;
  link?: string;
  color: string;
}

const devotions: Devotion[] = [
  { id: "bible", icon: BookOpen, labelKey: "daily.bible", descKey: "daily.bible.desc", link: "/bible", color: "text-gold" },
  { id: "rosary", icon: Cross, labelKey: "daily.rosary", descKey: "daily.rosary.desc", color: "text-crimson" },
  { id: "prayer", icon: Heart, labelKey: "daily.prayer", descKey: "daily.prayer.desc", color: "text-gold" },
  { id: "saint", icon: Users, labelKey: "daily.saint", descKey: "daily.saint.desc", link: "/saints", color: "text-crimson" },
  { id: "examine", icon: Flame, labelKey: "daily.examine", descKey: "daily.examine.desc", color: "text-gold" },
  { id: "psalm", icon: Music, labelKey: "daily.psalm", descKey: "daily.psalm.desc", link: "/bible", color: "text-crimson" },
];

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function getStoredChecks(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem("vf-daily-devotions");
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed.date !== getTodayKey()) return {};
    return parsed.checks || {};
  } catch {
    return {};
  }
}

function storeChecks(checks: Record<string, boolean>) {
  localStorage.setItem("vf-daily-devotions", JSON.stringify({ date: getTodayKey(), checks }));
}

const DailyDevotions = () => {
  const { t } = useLanguage();
  const [checks, setChecks] = useState<Record<string, boolean>>(getStoredChecks);

  useEffect(() => {
    storeChecks(checks);
  }, [checks]);

  const toggle = (id: string) => {
    setChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = devotions.filter((d) => checks[d.id]).length;
  const progress = (completedCount / devotions.length) * 100;
  const allDone = completedCount === devotions.length;

  const reset = () => setChecks({});

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-700 ease-out",
              allDone ? "bg-green-500" : "bg-gold"
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-display text-xs tracking-wider text-muted-foreground whitespace-nowrap">
          {completedCount}/{devotions.length}
        </span>
        {completedCount > 0 && (
          <button onClick={reset} className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" aria-label="Reset">
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Celebration */}
      {allDone && (
        <div className="mb-3 rounded-lg border border-green-500/30 bg-green-500/5 p-3 text-center animate-fade-in">
          <p className="font-display text-sm text-green-600 dark:text-green-400 tracking-wide">
            🎉 {t("daily.complete")}
          </p>
        </div>
      )}

      {/* Checklist */}
      <div className="space-y-1.5">
        {devotions.map((d) => {
          const done = !!checks[d.id];
          const Inner = (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle(d.id);
              }}
              className={cn(
                "w-full flex items-center gap-3 rounded-lg border p-3 transition-all text-start",
                done
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-border bg-card hover:border-gold-light hover:shadow-scripture"
              )}
            >
              {/* Check icon */}
              <div className="flex-shrink-0">
                {done ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 animate-scale-in" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground/40" />
                )}
              </div>

              {/* Icon */}
              <d.icon className={cn("h-4 w-4 flex-shrink-0", done ? "text-muted-foreground" : d.color)} />

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "font-body text-sm font-medium transition-all",
                  done ? "line-through text-muted-foreground" : "text-foreground"
                )}>
                  {t(d.labelKey)}
                </p>
                <p className="font-body text-xs text-muted-foreground truncate">
                  {t(d.descKey)}
                </p>
              </div>

              {/* Go link indicator */}
              {d.link && !done && (
                <Link
                  to={d.link}
                  className="flex-shrink-0 text-[10px] font-display tracking-wider text-gold uppercase hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("daily.go")}
                </Link>
              )}
            </button>
          );

          return <div key={d.id}>{Inner}</div>;
        })}
      </div>
    </div>
  );
};

export default DailyDevotions;
