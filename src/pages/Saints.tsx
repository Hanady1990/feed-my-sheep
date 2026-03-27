import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Cross } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSaints } from "@/hooks/use-supabase-data";
import { saints as staticSaints } from "@/data/saints";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SaintsPage = () => {
  const { t, language } = useLanguage();
  const { data: saints } = useSaints();
  const list = saints && saints.length > 0 ? saints : staticSaints;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("saints.title")} subtitle={t("saints.subtitle")} />
      <div className="space-y-3">
        {list.map((saint) => (
          <Link key={saint.slug} to={`/saints/${saint.slug}`}>
            <ContentCard gold className="cursor-pointer hover:border-gold mb-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12 rounded-lg border border-gold-light flex-shrink-0">
                  <AvatarImage src={saint.image} alt={saint.name[language]} className="object-cover rounded-lg" />
                  <AvatarFallback className="rounded-lg bg-primary/10">
                    <Cross className="h-5 w-5 text-gold" />
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h3 className="font-display text-sm tracking-wide text-foreground">{saint.name[language]}</h3>
                  <p className="font-body text-xs text-gold mt-0.5">{saint.years} · {saint.feast[language]}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">{saint.bio[language]}</p>
                </div>
              </div>
            </ContentCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SaintsPage;
