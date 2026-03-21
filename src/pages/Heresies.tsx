import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const heresies = [
  { name: "Arianism", period: "4th century", desc: "Denied the divinity of Christ; condemned at the Council of Nicaea (325).", response: "Nicene Creed" },
  { name: "Pelagianism", period: "5th century", desc: "Denied original sin and the necessity of divine grace for salvation.", response: "Council of Carthage (418)" },
  { name: "Nestorianism", period: "5th century", desc: "Separated the divine and human natures of Christ into two persons.", response: "Council of Ephesus (431)" },
  { name: "Monophysitism", period: "5th century", desc: "Claimed Christ had only one nature (divine), denying His full humanity.", response: "Council of Chalcedon (451)" },
  { name: "Gnosticism", period: "2nd century", desc: "Taught secret knowledge as the path to salvation; rejected the material world.", response: "St. Irenaeus, Against Heresies" },
  { name: "Iconoclasm", period: "8th century", desc: "Opposed the veneration of sacred images and icons.", response: "Second Council of Nicaea (787)" },
  { name: "Albigensianism", period: "12th century", desc: "Dualistic heresy rejecting the goodness of the material world.", response: "Fourth Lateran Council (1215)" },
];

const HeresiesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <SectionHeader title={t("heresies.title")} subtitle={t("heresies.subtitle")} />
      <div className="space-y-3">
        {heresies.map((h) => (
          <ContentCard key={h.name} className="cursor-pointer hover:border-gold-light">
            <div className="flex items-start gap-3">
              <Scale className="mt-0.5 h-5 w-5 flex-shrink-0 text-crimson" />
              <div>
                <h3 className="font-display text-sm tracking-wide text-foreground">{h.name}</h3>
                <p className="font-body text-xs text-gold mt-0.5">{h.period}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{h.desc}</p>
                <p className="font-body text-xs text-foreground mt-1.5">
                  <span className="text-crimson font-medium">{t("heresies.response")}</span> {h.response}
                </p>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
};

export default HeresiesPage;
