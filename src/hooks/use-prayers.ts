import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { prayers as staticPrayers, type Prayer, type PrayerCategory } from "@/data/prayers";

function mapDbPrayer(row: any): Prayer {
  return {
    slug: row.slug,
    category: row.category as PrayerCategory,
    title: row.title,
    titleAr: row.title_ar,
    subtitle: row.subtitle || undefined,
    subtitleAr: row.subtitle_ar || undefined,
    content: row.content,
    contentAr: row.content_ar,
    tags: row.tags || [],
  };
}

export function usePrayers(category?: PrayerCategory) {
  return useQuery({
    queryKey: ["prayers", category ?? "all"],
    queryFn: async (): Promise<Prayer[]> => {
      let q = (supabase as any).from("prayers").select("*");
      if (category) q = q.eq("category", category);
      const { data, error } = await q.order("title");
      if (error || !data || data.length === 0) {
        console.warn("Falling back to static prayers", error);
        return category ? staticPrayers.filter((p) => p.category === category) : staticPrayers;
      }
      return (data as any[]).map(mapDbPrayer);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function usePrayer(slug: string | undefined) {
  const { data: prayers } = usePrayers();
  if (!slug) return undefined;
  return prayers?.find((p) => p.slug === slug) ?? staticPrayers.find((p) => p.slug === slug);
}
