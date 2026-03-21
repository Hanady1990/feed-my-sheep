import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Cross } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const saints = [
  { name: "St. Francis of Assisi", feast: "October 4", years: "1181–1226", quote: "\"Lord, make me an instrument of your peace.\"" },
  { name: "St. Thérèse of Lisieux", feast: "October 1", years: "1873–1897", quote: "\"Miss no single opportunity of making some small sacrifice.\"" },
  { name: "St. Thomas Aquinas", feast: "January 28", years: "1225–1274", quote: "\"To one who has faith, no explanation is necessary.\"" },
  { name: "St. Teresa of Ávila", feast: "October 15", years: "1515–1582", quote: "\"Christ has no body now but yours.\"" },
  { name: "St. Ignatius of Loyola", feast: "July 31", years: "1491–1556", quote: "\"Go forth and set the world on fire.\"" },
  { name: "St. Catherine of Siena", feast: "April 29", years: "1347–1380", quote: "\"Be who God meant you to be and you will set the world on fire.\"" },
  { name: "St. John Paul II", feast: "October 22", years: "1920–2005", quote: "\"Do not be afraid. Open wide the doors for Christ.\"" },
  { name: "St. Padre Pio", feast: "September 23", years: "1887–1968", quote: "\"Pray, hope, and don't worry.\"" },
];

const SaintsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("saints.title")} subtitle={t("saints.subtitle")} />
      <div className="space-y-3">
        {saints.map((saint) => (
          <ContentCard key={saint.name} gold className="cursor-pointer hover:border-gold">
            <div className="flex items-start gap-3">
              <Cross className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-sm tracking-wide text-foreground">{saint.name}</h3>
                <p className="font-body text-xs text-gold mt-0.5">{saint.years} · Feast: {saint.feast}</p>
                <p className="font-body text-sm italic text-muted-foreground mt-1.5">{saint.quote}</p>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
};

export default SaintsPage;
