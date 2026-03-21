import { useState, useCallback } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { bibleBooks } from "@/data/bible-meta";
import { useLanguage } from "@/contexts/LanguageContext";

type Verse = { v: number; t: string };
type ChapterData = Record<string, Verse[]>;

interface SearchResult {
  bookId: number;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
}

interface BibleWordSearchProps {
  onNavigate: (bookId: number, chapter: number, verse: number) => void;
}

const BibleWordSearch = ({ onNavigate }: BibleWordSearchProps) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = useCallback(async () => {
    const trimmed = query.trim();
    if (trimmed.length < 3) return;

    setSearching(true);
    setResults([]);
    setSearched(true);

    const found: SearchResult[] = [];
    const lowerQuery = trimmed.toLowerCase();

    for (const book of bibleBooks) {
      try {
        const res = await fetch(`/bible/${book.id}.json`);
        const data: ChapterData = await res.json();

        for (const [chapterNum, verses] of Object.entries(data)) {
          for (const verse of verses) {
            if (verse.t.toLowerCase().includes(lowerQuery)) {
              found.push({
                bookId: book.id,
                bookName: book.name,
                chapter: parseInt(chapterNum),
                verse: verse.v,
                text: verse.t,
              });
            }
          }
        }
      } catch {
        // skip unloadable books
      }

      // Update results progressively every 5 books
      if (found.length > 0 && found.length !== results.length) {
        setResults([...found]);
      }
    }

    setResults(found);
    setSearching(false);
  }, [query]);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setSearched(false);
  };

  const highlightMatch = (text: string) => {
    const lowerQuery = query.trim().toLowerCase();
    const idx = text.toLowerCase().indexOf(lowerQuery);
    if (idx === -1) return text;

    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + query.trim().length);
    const after = text.slice(idx + query.trim().length);

    // Show context around match
    const contextStart = Math.max(0, idx - 40);
    const contextEnd = Math.min(text.length, idx + query.trim().length + 80);
    const prefix = contextStart > 0 ? "…" : "";
    const suffix = contextEnd < text.length ? "…" : "";

    return (
      <>
        {prefix}{text.slice(contextStart, idx)}
        <mark className="bg-gold/25 text-foreground rounded px-0.5">{match}</mark>
        {text.slice(idx + query.trim().length, contextEnd)}{suffix}
      </>
    );
  };

  return (
    <div className="space-y-3">
      <form
        onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
        className="flex gap-2"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("bible.searchVerses")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 pr-8"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button type="submit" size="sm" disabled={query.trim().length < 3 || searching}>
          {searching ? <Loader2 className="h-4 w-4 animate-spin" /> : t("bible.searchButton")}
        </Button>
      </form>

      {searching && (
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Loader2 className="h-3 w-3 animate-spin" />
          {t("bible.searching")}
        </p>
      )}

      {searched && !searching && (
        <p className="text-xs text-muted-foreground">
          {results.length} {t("bible.resultsFound")}
        </p>
      )}

      {results.length > 0 && (
        <ScrollArea className="h-[60vh]">
          <div className="space-y-1.5">
            {results.slice(0, 200).map((r, i) => (
              <button
                key={`${r.bookId}-${r.chapter}-${r.verse}-${i}`}
                onClick={() => onNavigate(r.bookId, r.chapter, r.verse)}
                className="w-full text-left rounded-lg border border-border bg-card p-3 hover:border-gold/50 transition-colors"
              >
                <span className="text-xs font-semibold text-gold">
                  {r.bookName} {r.chapter}:{r.verse}
                </span>
                <p className="text-sm text-foreground/80 mt-0.5 leading-relaxed">
                  {highlightMatch(r.text)}
                </p>
              </button>
            ))}
            {results.length > 200 && (
              <p className="text-xs text-muted-foreground text-center py-2">
                {t("bible.tooManyResults")}
              </p>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default BibleWordSearch;
