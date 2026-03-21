import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bookmark, Share2, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { getArticleBySlug, getRelatedArticles, Article } from "@/data/articles";
import { useState } from "react";
import { toast } from "sonner";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t, isRTL } = useLanguage();
  const [bookmarked, setBookmarked] = useState(false);

  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <h2 className="font-display text-xl text-foreground mb-2">
          {language === "ar" ? "المقال غير موجود" : "Article not found"}
        </h2>
        <Button variant="ghost" onClick={() => navigate(-1)}>
          {language === "ar" ? "العودة" : "Go Back"}
        </Button>
      </div>
    );
  }

  const related = getRelatedArticles(article);
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;
  const title = language === "ar" ? article.titleAr : article.title;
  const subtitle = language === "ar" ? article.subtitleAr : article.subtitle;
  const content = language === "ar" ? article.contentAr : article.content;

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast(bookmarked
      ? (language === "ar" ? "تمت إزالة الإشارة المرجعية" : "Bookmark removed")
      : (language === "ar" ? "تمت إضافة إشارة مرجعية" : "Bookmarked!")
    );
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      await navigator.clipboard.writeText(url);
      toast(language === "ar" ? "تم نسخ الرابط" : "Link copied to clipboard");
    }
  };

  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="font-display text-lg tracking-wide text-foreground mt-8 mb-3">
            {block.replace("## ", "")}
          </h2>
        );
      }
      // Handle bold text within paragraphs
      const parts = block.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="font-body text-sm leading-relaxed text-foreground/90 mb-4">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
            }
            // Handle italic
            const italicParts = part.split(/(\*.*?\*)/g);
            return italicParts.map((ip, k) => {
              if (ip.startsWith("*") && ip.endsWith("*") && !ip.startsWith("**")) {
                return <em key={`${j}-${k}`}>{ip.slice(1, -1)}</em>;
              }
              return ip;
            });
          })}
        </p>
      );
    });
  };

  const sectionPath = (a: Article) => {
    const paths: Record<string, string> = {
      teachings: "/teachings",
      fathers: "/fathers",
      papal: "/papal",
      vatican: "/vatican",
      heresies: "/heresies",
      social: "/social",
      saints: "/saints",
    };
    return paths[a.section] || "/";
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 animate-fade-in-up">
      {/* Back nav */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <BackArrow className="h-4 w-4" />
        <span className="font-body">{language === "ar" ? "رجوع" : "Back"}</span>
      </button>

      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-body text-[11px] font-medium text-primary uppercase tracking-wider">
            {t(`nav.${article.section}`)}
          </span>
          {article.readTime && (
            <span className="font-body text-[11px] text-muted-foreground">
              {article.readTime}
            </span>
          )}
        </div>
        <h1 className="font-display text-2xl tracking-wide text-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-sm text-muted-foreground mt-1.5">{subtitle}</p>
        )}
        {article.author && (
          <p className="font-body text-xs text-gold mt-1">{article.author}</p>
        )}
      </header>

      {/* Action buttons */}
      <div className="flex items-center gap-2 mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={handleBookmark}
          className={bookmarked ? "text-gold border-gold" : ""}
        >
          <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
          <span className="font-body text-xs">
            {bookmarked
              ? (language === "ar" ? "محفوظ" : "Saved")
              : (language === "ar" ? "حفظ" : "Bookmark")
            }
          </span>
        </Button>
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
          <span className="font-body text-xs">
            {language === "ar" ? "مشاركة" : "Share"}
          </span>
        </Button>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-border" />
        <span className="text-gold text-xs">✦</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Article body */}
      <article className="mb-8">
        {renderContent(content)}
      </article>

      {/* Catechism References */}
      {article.catechismRefs.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-4 w-4 text-crimson" />
            <h3 className="font-display text-sm uppercase tracking-widest text-foreground">
              {language === "ar" ? "مراجع التعليم المسيحي" : "Catechism References"}
            </h3>
          </div>
          <div className="space-y-2">
            {article.catechismRefs.map((ref, i) => (
              <ContentCard key={i} className="py-3">
                <div className="flex items-start gap-3">
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-body text-[11px] font-semibold text-primary whitespace-nowrap">
                    {ref.paragraph}
                  </span>
                  <p className="font-body text-xs text-muted-foreground">{ref.text}</p>
                </div>
              </ContentCard>
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      {article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 font-body text-[10px] text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Teachings */}
      {related.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <ExternalLink className="h-4 w-4 text-gold" />
            <h3 className="font-display text-sm uppercase tracking-widest text-foreground">
              {language === "ar" ? "مواضيع ذات صلة" : "Related Teachings"}
            </h3>
          </div>
          <div className="space-y-2">
            {related.map((rel) => (
              <Link key={rel.id} to={`/article/${rel.slug}`}>
                <ContentCard gold className="cursor-pointer hover:border-gold transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm tracking-wide text-foreground">
                        {language === "ar" ? rel.titleAr : rel.title}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {language === "ar" ? rel.subtitleAr : rel.subtitle}
                      </p>
                    </div>
                    <ArrowRight className={`h-4 w-4 text-muted-foreground ${isRTL ? "rotate-180" : ""}`} />
                  </div>
                </ContentCard>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;
