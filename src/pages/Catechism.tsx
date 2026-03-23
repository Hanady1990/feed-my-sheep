import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, Search, BookOpen, Hash, FolderOpen } from "lucide-react";
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

// Build a tree from flat TOC entries within a given range
type TocNode = TocEntry & { children: TocNode[] };

function buildTree(entries: TocEntry[]): TocNode[] {
  const nodes: TocNode[] = entries.map(e => ({ ...e, children: [] }));
  const stack: TocNode[] = [];
  const roots: TocNode[] = [];

  for (const node of nodes) {
    // Pop stack until we find a parent with lower level
    while (stack.length > 0 && stack[stack.length - 1].level >= node.level) {
      stack.pop();
    }
    if (stack.length > 0) {
      stack[stack.length - 1].children.push(node);
    } else {
      roots.push(node);
    }
    stack.push(node);
  }
  return roots;
}

function getChildrenForRange(toc: TocEntry[], parentRange: [number, number], parentLevel: number): TocEntry[] {
  return toc.filter(entry => {
    if (entry.range[0] === 0 && entry.range[1] === 0) return false; // skip placeholder entries
    // Entry must be within the parent's range
    const withinRange = entry.range[0] >= parentRange[0] && entry.range[1] <= parentRange[1];
    // Entry must be a direct child level
    const isDirectChild = entry.level === parentLevel + 1;
    return withinRange && isDirectChild;
  });
}

function getDescendantsAtNextLevel(toc: TocEntry[], parentRange: [number, number], parentLevel: number): TocEntry[] {
  // Find entries within the parent range at any level deeper
  const within = toc.filter(entry => {
    if (entry.range[0] === 0 && entry.range[1] === 0) return false;
    return entry.range[0] >= parentRange[0] && entry.range[1] <= parentRange[1] && entry.level > parentLevel;
  });
  if (within.length === 0) return [];
  
  // Find the minimum level among descendants
  const minLevel = Math.min(...within.map(e => e.level));
  return within.filter(e => e.level === minLevel);
}

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
  
  // Navigation stack for drill-down
  const [navStack, setNavStack] = useState<{ name: string; arabicName: string; range: [number, number]; level: number }[]>([]);

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

  const loadParagraphs = useCallback(async (range: [number, number]) => {
    setLoading(true);
    try {
      const suffix = language === "ar" ? "ar" : "en";
      // Determine which part files to load based on the range
      const neededParts = PARTS.filter(p => p.range[0] <= range[1] && p.range[1] >= range[0]);
      const allData: Record<string, string> = {};
      for (const part of neededParts) {
        const res = await fetch(`/catechism/${part.key}_${suffix}.json`);
        const data = await res.json();
        // Only include paragraphs within our range
        for (const [num, text] of Object.entries(data)) {
          const n = parseInt(num);
          if (n >= range[0] && n <= range[1]) {
            allData[num] = text as string;
          }
        }
      }
      setParagraphs(allData);
    } finally {
      setLoading(false);
    }
  }, [language]);

  // Get current children to display
  const getCurrentChildren = useCallback((): TocEntry[] => {
    if (navStack.length === 0) return [];
    const current = navStack[navStack.length - 1];
    return getDescendantsAtNextLevel(toc, current.range, current.level);
  }, [navStack, toc]);

  const openSection = useCallback(async (entry: { name: string; arabicName: string; range: [number, number]; level: number }, replace = false) => {
    const newStack = replace ? [entry] : [...navStack, entry];
    setNavStack(newStack);
    
    // Check if this entry has children
    const children = getDescendantsAtNextLevel(toc, entry.range, entry.level);
    
    if (children.length === 0) {
      // Leaf node - show paragraphs
      await loadParagraphs(entry.range);
      setCurrentRange(entry.range);
      setHighlightParagraph(null);
      setView("reader");
    } else {
      // Has children - show navigation
      setView("toc");
    }
  }, [navStack, toc, loadParagraphs]);

  const goBack = useCallback(() => {
    if (navStack.length <= 1) {
      setNavStack([]);
      setView("toc");
      return;
    }
    const newStack = navStack.slice(0, -1);
    setNavStack(newStack);
    setView("toc");
  }, [navStack]);

  // Navigate to paragraph number
  const goToParagraph = useCallback(async (num: number) => {
    const part = PARTS.find(p => num >= p.range[0] && num <= p.range[1]);
    if (!part) return;
    
    // Build navigation path from TOC
    const path: TocEntry[] = [];
    // Find the part-level entry
    const partEntry = toc.find(e => e.level === 1 && e.range[0] === part.range[0]);
    if (partEntry) path.push(partEntry);
    
    // Find the deepest leaf that contains this paragraph
    let currentEntries = partEntry ? getDescendantsAtNextLevel(toc, partEntry.range, partEntry.level) : [];
    while (currentEntries.length > 0) {
      const match = currentEntries.find(e => num >= e.range[0] && num <= e.range[1]);
      if (!match) break;
      path.push(match);
      currentEntries = getDescendantsAtNextLevel(toc, match.range, match.level);
    }
    
    // Open the last entry in path as reader
    const target = path[path.length - 1] || { name: part.en, arabicName: part.ar, range: [...part.range] as [number, number], level: 1 };
    setNavStack(path);
    await loadParagraphs(target.range as [number, number]);
    setCurrentRange(target.range as [number, number]);
    setHighlightParagraph(num);
    setView("reader");
  }, [toc, loadParagraphs]);

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
    if (num >= 1 && num <= 2865) goToParagraph(num);
  };

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

  const getLevelStyle = (level: number) => {
    switch (level) {
      case 1: return "font-bold text-base text-foreground";
      case 2: return "font-semibold text-sm text-foreground";
      case 3: return "font-semibold text-sm text-foreground";
      case 4: return "font-medium text-sm text-foreground";
      case 5: return "font-medium text-sm text-muted-foreground";
      default: return "text-sm text-muted-foreground";
    }
  };

  const getLevelIcon = (level: number, hasChildren: boolean) => {
    if (hasChildren) return <FolderOpen className="h-3.5 w-3.5 text-muted-foreground shrink-0" />;
    return <BookOpen className="h-3.5 w-3.5 text-muted-foreground shrink-0" />;
  };

  // Breadcrumb
  const renderBreadcrumb = () => {
    if (navStack.length === 0) return null;
    return (
      <div className="flex items-center gap-1 flex-wrap mb-4">
        <button
          onClick={() => { setNavStack([]); setView("toc"); setHighlightParagraph(null); }}
          className="text-xs text-primary hover:underline transition-colors"
        >
          {t("catechism.title")}
        </button>
        {navStack.map((entry, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">/</span>
            <button
              onClick={() => {
                const newStack = navStack.slice(0, i + 1);
                setNavStack(newStack);
                const children = getDescendantsAtNextLevel(toc, entry.range, entry.level);
                if (children.length > 0) {
                  setView("toc");
                } else {
                  loadParagraphs(entry.range).then(() => {
                    setCurrentRange(entry.range);
                    setHighlightParagraph(null);
                    setView("reader");
                  });
                }
              }}
              className={`text-xs transition-colors max-w-[140px] truncate ${
                i === navStack.length - 1 ? "text-foreground font-medium" : "text-primary hover:underline"
              }`}
              title={language === "ar" ? entry.arabicName : entry.name}
            >
              {language === "ar" ? entry.arabicName : entry.name}
            </button>
          </span>
        ))}
      </div>
    );
  };

  // ── Search View ──
  if (view === "search") {
    return (
      <div className="animate-fade-in px-4 py-6">
        <button
          onClick={() => { setView("toc"); setSearchResults([]); setSearchQuery(""); }}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors active:scale-[0.97]"
        >
          <Back className="h-4 w-4" />
          <span className="font-body">{t("catechism.title")}</span>
        </button>

        <SectionHeader title={t("catechism.search")} subtitle={t("catechism.searchSubtitle")} />

        <form onSubmit={e => { e.preventDefault(); handleSearch(); }} className="flex gap-2 mb-4">
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

        {searching && <p className="text-sm text-muted-foreground animate-pulse">{t("catechism.searching")}</p>}

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
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{highlightMatch(r.text)}</p>
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
  if (view === "reader") {
    const paragraphNums = Object.keys(paragraphs).map(Number).sort((a, b) => a - b);
    const currentEntry = navStack.length > 0 ? navStack[navStack.length - 1] : null;

    return (
      <div className="animate-fade-in">
        <button
          onClick={goBack}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-2 transition-colors active:scale-[0.97]"
        >
          <Back className="h-4 w-4" />
          {t("catechism.back")}
        </button>

        {renderBreadcrumb()}

        {currentEntry && (
          <SectionHeader
            title={language === "ar" ? currentEntry.arabicName : currentEntry.name}
            subtitle={`§${currentEntry.range[0]} – §${currentEntry.range[1]}`}
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
      </div>
    );
  }

  // ── TOC View (with drill-down) ──
  const isRoot = navStack.length === 0;
  const currentEntry = isRoot ? null : navStack[navStack.length - 1];
  const children = isRoot ? [] : getCurrentChildren();

  return (
    <div className="animate-fade-in">
      {!isRoot && (
        <button
          onClick={goBack}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-2 transition-colors active:scale-[0.97]"
        >
          <Back className="h-4 w-4" />
          {t("catechism.back")}
        </button>
      )}

      {renderBreadcrumb()}

      <SectionHeader
        title={isRoot ? t("catechism.title") : (language === "ar" ? currentEntry!.arabicName : currentEntry!.name)}
        subtitle={isRoot ? t("catechism.subtitle") : `§${currentEntry!.range[0]} – §${currentEntry!.range[1]}`}
      />

      {/* Go to paragraph + Search (only at root) */}
      {isRoot && (
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
          <Button size="sm" variant="outline" onClick={() => setView("search")} className="gap-1">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">{t("catechism.search")}</span>
          </Button>
        </div>
      )}

      {/* Root: Show parts */}
      {isRoot && (
        <div className="space-y-2">
          {PARTS.map(part => {
            const partTocEntry = toc.find(e => e.level === 1 && e.range[0] === part.range[0]);
            return (
              <button
                key={part.key}
                onClick={() => openSection({
                  name: partTocEntry?.name || part.en,
                  arabicName: partTocEntry?.arabicName || part.ar,
                  range: [...part.range] as [number, number],
                  level: 1,
                }, true)}
                className="w-full flex items-center justify-between rounded-lg border border-border bg-card p-4 text-start transition-all hover:shadow-md active:scale-[0.98]"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-display text-sm font-semibold text-foreground leading-snug">
                    {language === "ar" ? (partTocEntry?.arabicName || part.ar) : (partTocEntry?.name || part.en)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">§{part.range[0]} – §{part.range[1]}</p>
                </div>
                <Chevron className="h-4 w-4 text-muted-foreground shrink-0" />
              </button>
            );
          })}
        </div>
      )}

      {/* Drill-down: Show children of current entry */}
      {!isRoot && children.length > 0 && (
        <div className="space-y-1.5">
          {/* Option to read all paragraphs in this section */}
          <button
            onClick={async () => {
              await loadParagraphs(currentEntry!.range);
              setCurrentRange(currentEntry!.range);
              setHighlightParagraph(null);
              setView("reader");
            }}
            className="w-full flex items-center gap-3 rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 text-start transition-all hover:bg-primary/10 active:scale-[0.98] mb-2"
          >
            <BookOpen className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm font-medium text-primary">{t("catechism.readAll")}</span>
          </button>

          {children.map((child, i) => {
            const hasSubChildren = getDescendantsAtNextLevel(toc, child.range, child.level).length > 0;
            return (
              <button
                key={i}
                onClick={() => openSection(child)}
                className="w-full flex items-center gap-3 rounded-lg border border-border bg-card p-3.5 text-start transition-all hover:shadow-md active:scale-[0.98]"
              >
                {getLevelIcon(child.level, hasSubChildren)}
                <div className="flex-1 min-w-0">
                  <p className={getLevelStyle(child.level) + " leading-snug"}>
                    {language === "ar" ? child.arabicName : child.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 tabular-nums">§{child.range[0]} – §{child.range[1]}</p>
                </div>
                <Chevron className="h-4 w-4 text-muted-foreground shrink-0" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CatechismPage;
