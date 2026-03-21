import { useState, useCallback } from "react";
import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, Search, BookOpen, TextSearch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { bibleBooks, oldTestamentIds, newTestamentIds } from "@/data/bible-meta";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import BibleWordSearch from "@/components/BibleWordSearch";

type Verse = { v: number; t: string };
type ChapterData = Record<string, Verse[]>;

type View = "books" | "chapters" | "reader" | "search";

const BiblePage = () => {
  const { t, isRTL } = useLanguage();
  const Chevron = isRTL ? ChevronLeft : ChevronRight;
  const Back = isRTL ? ArrowRight : ArrowLeft;

  const [view, setView] = useState<View>("books");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [chapterData, setChapterData] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(false);
  const [highlightVerse, setHighlightVerse] = useState<number | null>(null);

  // Go-to-verse dialog state
  const [gotoOpen, setGotoOpen] = useState(false);
  const [gotoBook, setGotoBook] = useState<string>("");
  const [gotoChapter, setGotoChapter] = useState<string>("");
  const [gotoVerse, setGotoVerse] = useState<string>("");

  const selectedBook = selectedBookId ? bibleBooks.find(b => b.id === selectedBookId) : null;

  const loadBookData = useCallback(async (bookId: number) => {
    if (chapterData && selectedBookId === bookId) return chapterData;
    setLoading(true);
    try {
      const res = await fetch(`/bible/${bookId}.json`);
      const data: ChapterData = await res.json();
      setChapterData(data);
      setSelectedBookId(bookId);
      return data;
    } finally {
      setLoading(false);
    }
  }, [chapterData, selectedBookId]);

  const openBook = (bookId: number) => {
    setSelectedBookId(bookId);
    setSelectedChapter(null);
    setChapterData(null);
    setHighlightVerse(null);
    setView("chapters");
  };

  const openChapter = async (bookId: number, chapterNum: number, verseNum?: number) => {
    await loadBookData(bookId);
    setSelectedChapter(chapterNum);
    setHighlightVerse(verseNum ?? null);
    setView("reader");
    // Scroll to verse after render
    if (verseNum) {
      setTimeout(() => {
        const el = document.getElementById(`verse-${verseNum}`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  };

  const goBack = () => {
    if (view === "reader") {
      setView("chapters");
      setHighlightVerse(null);
    } else if (view === "chapters") {
      setView("books");
      setSelectedBookId(null);
    } else if (view === "search") {
      setView("books");
    }
  };

  const handleSearchNavigate = (bookId: number, chapter: number, verse: number) => {
    openBook(bookId);
    openChapter(bookId, chapter, verse);
  };

  const handleGoto = async () => {
    const bookId = parseInt(gotoBook);
    const chapter = parseInt(gotoChapter);
    const verse = gotoVerse ? parseInt(gotoVerse) : undefined;
    if (!bookId || !chapter) return;
    setGotoOpen(false);
    openBook(bookId);
    await openChapter(bookId, chapter, verse);
  };

  const selectedGotoBook = gotoBook ? bibleBooks.find(b => b.id === parseInt(gotoBook)) : null;

  const otBooks = bibleBooks.filter(b => oldTestamentIds.includes(b.id));
  const ntBooks = bibleBooks.filter(b => newTestamentIds.includes(b.id));

  // Search/filter for books
  const [bookSearch, setBookSearch] = useState("");
  const filterBooks = (books: typeof bibleBooks) =>
    bookSearch ? books.filter(b => b.name.toLowerCase().includes(bookSearch.toLowerCase())) : books;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      {/* Header with back button and go-to-verse */}
      <div className="flex items-center justify-between mb-2">
        {view !== "books" ? (
          <button onClick={goBack} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Back className="h-4 w-4" />
            {view === "reader" ? selectedBook?.name : t("bible.title")}
          </button>
        ) : (
          <div />
        )}

        <Dialog open={gotoOpen} onOpenChange={setGotoOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs">
              <BookOpen className="h-3.5 w-3.5" />
              {t("bible.goto")}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="font-display">{t("bible.goto")}</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <Select value={gotoBook} onValueChange={(v) => { setGotoBook(v); setGotoChapter(""); setGotoVerse(""); }}>
                <SelectTrigger><SelectValue placeholder={t("bible.selectBook")} /></SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-60">
                    {bibleBooks.map(b => (
                      <SelectItem key={b.id} value={String(b.id)}>{b.name}</SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
              {selectedGotoBook && (
                <Select value={gotoChapter} onValueChange={setGotoChapter}>
                  <SelectTrigger><SelectValue placeholder={t("bible.selectChapter")} /></SelectTrigger>
                  <SelectContent>
                    <ScrollArea className="h-48">
                      {selectedGotoBook.chapters.map(c => (
                        <SelectItem key={c.n} value={String(c.n)}>
                          {t("bible.chapterLabel")} {c.n}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
              )}
              {gotoChapter && (
                <Input
                  type="number"
                  min={1}
                  placeholder={t("bible.verseOptional")}
                  value={gotoVerse}
                  onChange={e => setGotoVerse(e.target.value)}
                />
              )}
              <Button onClick={handleGoto} disabled={!gotoBook || !gotoChapter} className="w-full">
                {t("bible.goButton")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Books List View */}
      {view === "books" && (
        <>
          <SectionHeader title={t("bible.title")} subtitle="Douay-Rheims" />

          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("bible.searchBooks")}
                value={bookSearch}
                onChange={e => setBookSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <h3 className="font-display text-sm uppercase tracking-widest text-gold mb-3">{t("bible.ot")}</h3>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {filterBooks(otBooks).map((book) => (
              <ContentCard
                key={book.id}
                className="cursor-pointer flex items-center justify-between py-3 hover:border-gold-light"
                onClick={() => openBook(book.id)}
              >
                <div>
                  <span className="font-body text-sm text-foreground">{book.name}</span>
                  <span className="block text-[10px] text-muted-foreground">{book.chapters.length} ch.</span>
                </div>
                <Chevron className="h-4 w-4 text-muted-foreground" />
              </ContentCard>
            ))}
          </div>

          <h3 className="font-display text-sm uppercase tracking-widest text-gold mb-3">{t("bible.nt")}</h3>
          <div className="grid grid-cols-2 gap-2">
            {filterBooks(ntBooks).map((book) => (
              <ContentCard
                key={book.id}
                className="cursor-pointer flex items-center justify-between py-3 hover:border-gold-light"
                onClick={() => openBook(book.id)}
              >
                <div>
                  <span className="font-body text-sm text-foreground">{book.name}</span>
                  <span className="block text-[10px] text-muted-foreground">{book.chapters.length} ch.</span>
                </div>
                <Chevron className="h-4 w-4 text-muted-foreground" />
              </ContentCard>
            ))}
          </div>
        </>
      )}

      {/* Chapters View */}
      {view === "chapters" && selectedBook && (
        <>
          <SectionHeader title={selectedBook.name} subtitle={selectedBook.desc.slice(0, 120) + "..."} />

          <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
            {selectedBook.chapters.map((ch) => (
              <button
                key={ch.n}
                onClick={() => openChapter(selectedBook.id, ch.n)}
                className="aspect-square rounded-lg border border-border bg-card flex items-center justify-center text-sm font-body text-foreground hover:border-gold hover:bg-primary/5 transition-colors"
              >
                {ch.n}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Reader View */}
      {view === "reader" && selectedBook && selectedChapter && (
        <>
          <SectionHeader
            title={`${selectedBook.name} ${selectedChapter}`}
            subtitle={selectedBook.chapters.find(c => c.n === selectedChapter)?.title}
          />

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gold border-t-transparent" />
            </div>
          ) : (
            <div className="space-y-0">
              {chapterData?.[String(selectedChapter)]?.map((verse) => (
                <span
                  key={verse.v}
                  id={`verse-${verse.v}`}
                  className={`inline font-body text-[15px] leading-7 text-foreground/90 ${
                    highlightVerse === verse.v
                      ? "bg-gold/20 rounded px-0.5"
                      : ""
                  }`}
                >
                  <sup className="text-[10px] font-semibold text-gold mr-1 select-none">{verse.v}</sup>
                  {verse.t}{" "}
                </span>
              ))}
            </div>
          )}

          {/* Chapter navigation */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              disabled={selectedChapter <= 1}
              onClick={() => openChapter(selectedBook.id, selectedChapter - 1)}
              className="gap-1"
            >
              <Back className="h-4 w-4" />
              {t("bible.chapterLabel")} {selectedChapter - 1}
            </Button>
            <span className="text-xs text-muted-foreground">
              {selectedChapter} / {selectedBook.chapters.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              disabled={selectedChapter >= selectedBook.chapters.length}
              onClick={() => openChapter(selectedBook.id, selectedChapter + 1)}
              className="gap-1"
            >
              {t("bible.chapterLabel")} {selectedChapter + 1}
              <Chevron className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default BiblePage;
