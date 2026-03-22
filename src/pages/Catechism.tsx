import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, Search, BookOpen, Hash } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type TocEntry = {
  range: [number, number];
  name: string;
  arabicName: string;
  level: number;
};

type View = "toc" | "reader" | "search";

const PARTS = [
  { key: "prologue", range: [1, 25] as const, en: "Prologue", ar: "تمهيد" },
  { key: "part1", range: [26, 1065] as const, en: "Part One: The Profession of Faith", ar: "الجزء الأول: الاعتراف بالإيمان" },
  { key: "part2", range: [1066, 1690] as const, en: "Part Two: The Celebration of the Christian Mystery", ar: "الجزء الثاني: الاحتفال بالسرّ المسيحي" },
  { key: "part3", range: [1691, 2557] as const, en: "Part Three: Life in Christ", ar: "الجزء الثالث: الحياة في المسيح" },
  { key: "part4", range: [2558, 2865] as const, en: "Part Four: Christian Prayer", ar: "الجزء الرابع: الصلاة المسيحية" },
];

const CatechismPage = () => {
  const { t, isRTL, language } = useLanguage();
  const Chevron = isRTL ? ChevronLeft : ChevronRight;
  const Back = isRTL ? ArrowRight : ArrowLeft;

  const [view, setView] = useState<View>("toc");
  const [toc, setToc] = useState<TocEntry[]>([]);
  const [paragraphs, setParagraphs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [currentRange, setCurrentRange] = useState<[number, number] | null>(null);
  const [highlightParagraph, setHighlightParagraph] = useState<number | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ num: number; text: string }[]>([]);
  const [searching, setSearching] = useState(false);
  const [gotoNum, setGotoNum] = useState("");

  const highlightRef = useRef<HTMLDivElement>(null);

  // Load TOC
  useEffect(() => {
    fetch("/catechism/toc.json")
      .then(r => r.json())
      .then(setToc)
      .catch(console.error);
  }, []);

  const loadParagraphs = useCallback(async (partKey: string, lang: string) => {
    setLoading(true);
    try {
      const suffix = lang === "ar" ? "ar" : "en";
      const res = await fetch(`/catechism/${partKey}_${suffix}.json`);
      const data = await res.json();
      setParagraphs(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const openPart = useCallback(async (partKey: string, range: [number, number], scrollTo?: number) => {
    await loadParagraphs(partKey, language);
    setCurrentRange(range);
    setHighlightParagraph(scrollTo || null);
    setView("reader");
  }, [loadParagraphs, language]);

  // Navigate to paragraph number
  const goToParagraph = useCallback(async (num: number) => {
    const part = PARTS.find(p => num >= p.range[0] && num <= p.range[1]);
    if (!part) return;
    await openPart(part.key, [...part.range] as [number, number], num);
  }, [openPart]);

  // Search all paragraphs
  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    setSearchResults([]);

    const lang = language === "ar" ? "ar" : "en";
    const query = searchQuery.toLowerCase();
    const results: { num: number; text: string }[] = [];

    for (const part of PARTS) {
      try {
        const res = await fetch(`/catechism/${part.key}_${lang}.json`);
        const data: Record<string, string> = await res.json();
        for (const [num, text] of Object.entries(data)) {
          if (text.toLowerCase().includes(query)) {
            results.push({ num: parseInt(num), text });
            if (results.length >= 200) break;
          }
        }
      } catch { /* skip */ }
      if (results.length >= 200) break;
    }

    results.sort((a, b) => a.num - b.num);
    setSearchResults(results);
    setSearching(false);
  }, [searchQuery, language]);

  // Scroll to highlighted paragraph
  useEffect(() => {
    if (highlightParagraph && highlightRef.current) {
      setTimeout(() => highlightRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
    }
  }, [highlightParagraph, paragraphs]);

  const handleGoTo = () => {
    const num = parseInt(gotoNum);
    if (num >= 1 && num <= 2865) {
      goToParagraph(num);
    }
  };

  // Highlight matching text in search results
  const highlightMatch = (text: string) => {
    if (!searchQuery.trim()) return text;
    const q = searchQuery.trim();
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    const contextStart = Math.max(0, idx - 40);
    const contextEnd = Math.min(text.length, idx + q.length + 80);
    const before = (contextStart > 0 ? "…" : "") + text.slice(contextStart, idx);
    const match = text.slice(idx, idx + q.length);
    const after = text.slice(idx + q.length, contextEnd) + (contextEnd < text.length ? "…" : "");
    return (
      <span>
        {before}
        <mark className="bg-secondary/30 text-foreground font-semibold px-0.5 rounded">{match}</mark>
        {after}
      </span>
    );
  };

  // ── TOC View ──
  if (view === "toc") {
    return (
      <div className="animate-fade-in">
        <SectionHeader title={t("catechism.title")} subtitle={t("catechism.subtitle")} />

        {/* Go to paragraph + Search */}
        <div className="flex gap-2 mb-4">
          <div className="flex gap-1 flex-1">
            <Input
              type="number"
              min={1}
              max={2865}
              placeholder={t("catechism.gotoPlaceholder")}
              value={gotoNum}
              onChange={e => setGotoNum(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleGoTo()}
              className="flex-1"
            />
            <Button size="sm" variant="outline" onClick={handleGoTo}>
              <Hash className="h-4 w-4" />
            </Button>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setView("search")}
            className="gap-1"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">{t("catechism.search")}</span>
          </Button>
        </div>

        {/* Parts */}
        <div className="space-y-2">
          {PARTS.map(part => (
            <button
              key={part.key}
              onClick={() => openPart(part.key, [...part.range] as [number, number])}
              className="w-full flex items-center justify-between rounded-lg border border-border bg-card p-4 text-start transition-all hover:shadow-md active:scale-[0.98]"
            >
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm font-semibold text-foreground leading-snug">
                  {language === "ar" ? part.ar : part.en}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  §{part.range[0]} – §{part.range[1]}
                </p>
              </div>
              <Chevron className="h-4 w-4 text-muted-foreground shrink-0" />
            </button>
          ))}
        </div>

        {/* TOC sections */}
        {toc.length > 0 && (
          <div className="mt-6">
            <h3 className="font-display text-sm font-semibold text-foreground mb-3">{t("catechism.tableOfContents")}</h3>
            <ScrollArea className="h-[400px] rounded-lg border border-border bg-card">
              <div className="p-3 space-y-0.5">
                {toc
                  .filter(entry => entry.level <= 3)
                  .map((entry, i) => (
                  <button
                    key={i}
                    onClick={() => goToParagraph(entry.range[0])}
                    className="w-full text-start rounded px-2 py-1.5 text-xs transition-colors hover:bg-muted active:scale-[0.98]"
                    style={{ paddingInlineStart: `${(entry.level - 1) * 12 + 8}px` }}
                  >
                    <span className={entry.level === 1 ? "font-semibold text-foreground" : "text-muted-foreground"}>
                      {language === "ar" ? entry.arabicName : entry.name}
                    </span>
                    <span className="text-muted-foreground/60 ml-2 tabular-nums">§{entry.range[0]}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    );
  }

  // ── Search View ──
  if (view === "search") {
    return (
      <div className="animate-fade-in">
        <button
          onClick={() => { setView("toc"); setSearchResults([]); setSearchQuery(""); }}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors active:scale-[0.97]"
        >
          <Back className="h-4 w-4" />
          {t("catechism.title")}
        </button>

        <SectionHeader title={t("catechism.search")} subtitle={t("catechism.searchSubtitle")} />

        <form
          onSubmit={e => { e.preventDefault(); handleSearch(); }}
          className="flex gap-2 mb-4"
        >
          <Input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t("catechism.searchPlaceholder")}
            className="flex-1"
          />
          <Button type="submit" size="sm" disabled={searching || !searchQuery.trim()}>
            {searching ? t("catechism.searching") : t("catechism.searchBtn")}
          </Button>
        </form>

        {searching && (
          <p className="text-sm text-muted-foreground animate-pulse">{t("catechism.searching")}</p>
        )}

        {!searching && searchResults.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-2">
              {searchResults.length} {t("catechism.resultsFound")}
              {searchResults.length >= 200 && ` — ${t("catechism.tooMany")}`}
            </p>
            <ScrollArea className="h-[60vh] rounded-lg border border-border bg-card">
              <div className="p-2 space-y-1">
                {searchResults.map(r => (
                  <button
                    key={r.num}
                    onClick={() => goToParagraph(r.num)}
                    className="w-full text-start rounded-md p-3 hover:bg-muted transition-colors active:scale-[0.98]"
                  >
                    <span className="text-xs font-semibold text-primary tabular-nums">§{r.num}</span>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {highlightMatch(r.text)}
                    </p>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        {!searching && searchResults.length === 0 && searchQuery && (
          <p className="text-sm text-muted-foreground">{t("catechism.noResults")}</p>
        )}
      </div>
    );
  }

  // ── Reader View ──
  const currentPart = currentRange ? PARTS.find(p => p.range[0] === currentRange[0]) : null;
  const paragraphNums = Object.keys(paragraphs).map(Number).sort((a, b) => a - b);

  return (
    <div className="animate-fade-in">
      <button
        onClick={() => { setView("toc"); setHighlightParagraph(null); }}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors active:scale-[0.97]"
      >
        <Back className="h-4 w-4" />
        {t("catechism.title")}
      </button>

      {currentPart && (
        <SectionHeader
          title={language === "ar" ? currentPart.ar : currentPart.en}
          subtitle={`§${currentPart.range[0]} – §${currentPart.range[1]}`}
        />
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <BookOpen className="h-8 w-8 text-muted-foreground animate-pulse" />
        </div>
      ) : (
        <div className="space-y-4">
          {paragraphNums.map(num => (
            <div
              key={num}
              ref={num === highlightParagraph ? highlightRef : undefined}
              className={`rounded-lg border p-4 transition-all ${
                num === highlightParagraph
                  ? "border-primary/40 bg-primary/5 shadow-sm"
                  : "border-border bg-card"
              }`}
            >
              <span className="inline-block text-xs font-semibold text-primary tabular-nums mb-1">§{num}</span>
              <p className="font-body text-sm leading-relaxed text-foreground whitespace-pre-line">
                {paragraphs[String(num)]}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Part navigation */}
      {currentPart && (
        <div className="flex justify-between mt-6 gap-2">
          {PARTS.indexOf(currentPart) > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const prev = PARTS[PARTS.indexOf(currentPart) - 1];
                openPart(prev.key, [...prev.range] as [number, number]);
              }}
              className="gap-1"
            >
              <Back className="h-3 w-3" />
              {language === "ar" ? PARTS[PARTS.indexOf(currentPart) - 1].ar.slice(0, 20) : PARTS[PARTS.indexOf(currentPart) - 1].en.slice(0, 20)}…
            </Button>
          )}
          <div className="flex-1" />
          {PARTS.indexOf(currentPart) < PARTS.length - 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const next = PARTS[PARTS.indexOf(currentPart) + 1];
                openPart(next.key, [...next.range] as [number, number]);
              }}
              className="gap-1"
            >
              {language === "ar" ? PARTS[PARTS.indexOf(currentPart) + 1].ar.slice(0, 20) : PARTS[PARTS.indexOf(currentPart) + 1].en.slice(0, 20)}…
              <Chevron className="h-3 w-3" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default CatechismPage;
