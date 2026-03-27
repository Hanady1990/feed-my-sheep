import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { saints as staticSaints, type Saint } from "@/data/saints";
import { articles as staticArticles, type Article } from "@/data/articles";
import { heresies as staticHeresies, type Heresy } from "@/data/heresies";

// ---- Saints ----

function mapDbSaint(row: any): Saint {
  return {
    slug: row.slug,
    name: { en: row.name_en, ar: row.name_ar },
    feast: { en: row.feast_en, ar: row.feast_ar },
    years: row.years || "",
    image: row.image_url || "",
    bio: { en: row.bio_en, ar: row.bio_ar },
    fullBio: { en: row.full_bio_en, ar: row.full_bio_ar },
    sayings: (row.sayings as any[]) || [],
    books: (row.books as any[]) || [],
    patronOf: { en: row.patron_of_en || "", ar: row.patron_of_ar || "" },
  };
}

export function useSaints() {
  return useQuery({
    queryKey: ["saints"],
    queryFn: async (): Promise<Saint[]> => {
      const { data, error } = await supabase
        .from("saints")
        .select("*")
        .order("name_en");
      if (error || !data || data.length === 0) {
        console.warn("Falling back to static saints", error);
        return staticSaints;
      }
      // Merge: use DB data but fall back to static images
      return data.map((row) => {
        const dbSaint = mapDbSaint(row);
        const staticMatch = staticSaints.find((s) => s.slug === dbSaint.slug);
        if (staticMatch && !dbSaint.image) {
          dbSaint.image = staticMatch.image;
        }
        return dbSaint;
      });
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useSaint(slug: string | undefined) {
  const { data: saints } = useSaints();
  const saint = saints?.find((s) => s.slug === slug);
  // Fall back to static if not found in DB result
  if (!saint && slug) {
    return staticSaints.find((s) => s.slug === slug);
  }
  return saint;
}

// ---- Articles ----

function mapDbArticle(row: any): Article {
  return {
    id: row.id,
    slug: row.slug,
    section: row.section,
    title: row.title,
    titleAr: row.title_ar,
    subtitle: row.subtitle || undefined,
    subtitleAr: row.subtitle_ar || undefined,
    author: row.author || undefined,
    date: row.date || undefined,
    readTime: row.read_time || undefined,
    content: row.content,
    contentAr: row.content_ar,
    catechismRefs: (row.catechism_refs as any[]) || [],
    relatedIds: row.related_ids || [],
    tags: row.tags || [],
  };
}

export function useArticles(section?: string) {
  return useQuery({
    queryKey: ["articles", section],
    queryFn: async (): Promise<Article[]> => {
      let query = supabase.from("articles").select("*");
      if (section) query = query.eq("section", section);
      const { data, error } = await query.order("title");
      if (error || !data || data.length === 0) {
        console.warn("Falling back to static articles", error);
        const fallback = section
          ? staticArticles.filter((a) => a.section === section)
          : staticArticles;
        return fallback;
      }
      return data.map(mapDbArticle);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useArticle(slug: string | undefined) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: async (): Promise<Article | undefined> => {
      if (!slug) return undefined;
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error || !data) {
        return staticArticles.find((a) => a.slug === slug);
      }
      return mapDbArticle(data);
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!slug,
  });
}

// ---- Heresies ----

function mapDbHeresy(row: any): Heresy {
  return {
    slug: row.slug,
    name: row.name,
    nameAr: row.name_ar,
    period: row.period || "",
    periodAr: row.period_ar || "",
    founder: row.founder || "",
    founderAr: row.founder_ar || "",
    summary: row.summary,
    summaryAr: row.summary_ar,
    councilResponse: row.council_response || "",
    councilResponseAr: row.council_response_ar || "",
    catechismRefs: row.categorical_refs || [],
    keyFigures: row.key_figures || [],
    keyFiguresAr: row.key_figures_ar || [],
    points: (row.points as any[]) || [],
  };
}

export function useHeresies() {
  return useQuery({
    queryKey: ["heresies"],
    queryFn: async (): Promise<Heresy[]> => {
      const { data, error } = await supabase
        .from("heresies")
        .select("*")
        .order("name");
      if (error || !data || data.length === 0) {
        console.warn("Falling back to static heresies", error);
        return staticHeresies;
      }
      return data.map(mapDbHeresy);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useHeresy(slug: string | undefined) {
  const { data: heresies } = useHeresies();
  const heresy = heresies?.find((h) => h.slug === slug);
  if (!heresy && slug) {
    return staticHeresies.find((h) => h.slug === slug);
  }
  return heresy;
}
