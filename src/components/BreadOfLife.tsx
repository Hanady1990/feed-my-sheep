import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { bibleBooks } from "@/data/bible-meta";
import ContentCard from "./ContentCard";
import { Wheat } from "lucide-react";

// Curated list of inspiring verses (bookId, chapter, verse)
const VERSE_POOL = [
  { bookId: 1, ch: 1, v: 1 }, // Genesis 1:1
  { bookId: 24, ch: 1, v: 7 }, // Isaiah 1:7 area
  { bookId: 20, ch: 3, v: 5 }, // Proverbs 3:5
  { bookId: 20, ch: 3, v: 6 },
  { bookId: 22, ch: 4, v: 23 },
  { bookId: 24, ch: 40, v: 31 },
  { bookId: 24, ch: 41, v: 10 },
  { bookId: 25, ch: 29, v: 11 },
  { bookId: 40, ch: 5, v: 14 },
  { bookId: 40, ch: 6, v: 33 },
  { bookId: 40, ch: 7, v: 7 },
  { bookId: 40, ch: 11, v: 28 },
  { bookId: 40, ch: 28, v: 20 },
  { bookId: 42, ch: 1, v: 37 },
  { bookId: 42, ch: 6, v: 31 },
  { bookId: 43, ch: 1, v: 5 },
  { bookId: 50, ch: 3, v: 16 },
  { bookId: 50, ch: 6, v: 35 },
  { bookId: 50, ch: 8, v: 12 },
  { bookId: 50, ch: 10, v: 10 },
  { bookId: 50, ch: 11, v: 25 },
  { bookId: 50, ch: 14, v: 6 },
  { bookId: 50, ch: 14, v: 27 },
  { bookId: 50, ch: 15, v: 5 },
  { bookId: 52, ch: 8, v: 28 },
  { bookId: 52, ch: 8, v: 31 },
  { bookId: 52, ch: 12, v: 2 },
  { bookId: 55, ch: 4, v: 13 },
  { bookId: 59, ch: 4, v: 8 },
  { bookId: 64, ch: 4, v: 8 },
];

interface VerseResult {
  text: string;
  ref: string;
}

const BreadOfLife = () => {
  const { t } = useLanguage();
  const [spinning, setSpinning] = useState(false);
  const [verse, setVerse] = useState<VerseResult | null>(null);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const pickVerse = async () => {
    if (spinning) return;
    setSpinning(true);
    setVerse(null);

    // Spin animation
    const extraSpins = 3 + Math.random() * 3; // 3-6 full rotations
    const newRotation = rotation + extraSpins * 360;
    setRotation(newRotation);

    // Pick random verse
    const pick = VERSE_POOL[Math.floor(Math.random() * VERSE_POOL.length)];

    // Wait for spin animation, then fetch
    await new Promise((r) => setTimeout(r, 2800));

    try {
      const res = await fetch(`/bible/${pick.bookId}.json`);
      const data = await res.json();
      const verses = data[String(pick.ch)];
      const found = verses?.find((v: { v: number; t: string }) => v.v === pick.v);
      const book = bibleBooks.find((b) => b.id === pick.bookId);

      if (found && book) {
        setVerse({
          text: found.t,
          ref: `${book.name} ${pick.ch}:${pick.v}`,
        });
      }
    } catch {
      // fallback
      setVerse({
        text: "For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting.",
        ref: "John 3:16",
      });
    }

    setSpinning(false);
  };

  // Wheel segments colors using theme-compatible approach
  const segments = 12;
  const segAngle = 360 / segments;

  return (
    <div className="text-center">
      {/* Spinning Wheel */}
      <div className="relative mx-auto mb-4 w-48 h-48">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gold/30 shadow-scripture" />

        {/* Rotating wheel */}
        <div
          ref={wheelRef}
          className="absolute inset-2 rounded-full overflow-hidden cursor-pointer"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? "transform 2.8s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
          }}
          onClick={pickVerse}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {Array.from({ length: segments }).map((_, i) => {
              const startAngle = i * segAngle;
              const endAngle = startAngle + segAngle;
              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;
              const x1 = 100 + 100 * Math.cos(startRad);
              const y1 = 100 + 100 * Math.sin(startRad);
              const x2 = 100 + 100 * Math.cos(endRad);
              const y2 = 100 + 100 * Math.sin(endRad);
              const isEven = i % 2 === 0;

              return (
                <path
                  key={i}
                  d={`M100,100 L${x1},${y1} A100,100 0 0,1 ${x2},${y2} Z`}
                  className={isEven ? "fill-gold/20" : "fill-primary/10"}
                  stroke="hsl(var(--gold))"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
              );
            })}
            {/* Cross symbols on segments */}
            {Array.from({ length: segments }).map((_, i) => {
              const midAngle = (i * segAngle + segAngle / 2) * (Math.PI / 180);
              const cx = 100 + 60 * Math.cos(midAngle);
              const cy = 100 + 60 * Math.sin(midAngle);
              return (
                <text
                  key={`t-${i}`}
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-gold"
                  fontSize="14"
                  opacity="0.6"
                >
                  ✝
                </text>
              );
            })}
          </svg>
        </div>

        {/* Center button */}
        <button
          onClick={pickVerse}
          disabled={spinning}
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-card border-2 border-gold shadow-lg flex items-center justify-center z-10 hover:scale-105 transition-transform disabled:opacity-70"
        >
          <Wheat className={`h-6 w-6 text-gold ${spinning ? "animate-pulse" : ""}`} />
        </button>

        {/* Pointer triangle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-20">
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-gold" />
        </div>
      </div>

      {/* Call to action */}
      <p className="font-body text-sm text-muted-foreground mb-3">
        {spinning ? t("breadOfLife.spinning") : t("breadOfLife.tap")}
      </p>

      {/* Revealed verse */}
      {verse && (
        <ContentCard
          gold
          className="animate-fade-in text-center"
          copyText={`${verse.text} — ${verse.ref}`}
        >
          <p className="font-body text-base italic leading-relaxed text-foreground">
            "{verse.text}"
          </p>
          <p className="mt-2 font-display text-xs tracking-widest text-gold uppercase">
            — {verse.ref}
          </p>
        </ContentCard>
      )}
    </div>
  );
};

export default BreadOfLife;
