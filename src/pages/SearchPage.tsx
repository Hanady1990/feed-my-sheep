import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const allContent = [
  { title: "The Real Presence in the Eucharist", type: "Teaching", category: "Sacraments" },
  { title: "St. Augustine of Hippo", type: "Church Father", category: "Patristics" },
  { title: "Laudato Si'", type: "Papal Letter", category: "Encyclical" },
  { title: "Arianism", type: "Heresy", category: "Church History" },
  { title: "The Dignity of Human Life", type: "Social Topic", category: "Bioethics" },
  { title: "St. Francis of Assisi", type: "Saint", category: "Spirituality" },
  { title: "Gospel of Matthew", type: "Scripture", category: "New Testament" },
  { title: "Marriage & Family", type: "Social Topic", category: "Moral Theology" },
  { title: "St. Thomas Aquinas", type: "Saint", category: "Theology" },
  { title: "Fides et Ratio", type: "Papal Letter", category: "Encyclical" },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { t, isRTL } = useLanguage();
  const filtered = query.length > 0
    ? allContent.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()) || c.type.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()))
    : allContent;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("search.title")} subtitle={t("search.subtitle")} />
      <div className="relative mb-5">
        <Search className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground ${isRTL ? "right-3" : "left-3"}`} />
        <input
          type="text"
          placeholder={t("search.placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full rounded-lg border border-border bg-card py-2.5 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"}`}
        />
      </div>
      <div className="space-y-2">
        {filtered.map((item, i) => (
          <ContentCard key={i} className="cursor-pointer hover:border-gold-light">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-body text-sm font-medium text-foreground">{item.title}</h3>
                <p className="font-body text-xs text-muted-foreground">{item.type} · {item.category}</p>
              </div>
            </div>
          </ContentCard>
        ))}
        {filtered.length === 0 && (
          <p className="text-center font-body text-sm text-muted-foreground py-8">{t("search.noResults")} "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
