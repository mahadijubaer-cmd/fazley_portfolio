import { ChartNoAxesCombined, Container, Drill, FileCheck2, HardHat, Network, Search, Warehouse } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

const icons = { Search, Drill, Network, Container, Warehouse, FileCheck2, HardHat, ChartNoAxesCombined };

export function Expertise({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="expertise" className="section expertise" aria-labelledby="expertise-heading">
      <div className="shell">
        <AnimatedReveal><SectionHeading id="expertise-heading" eyebrow={dict.expertise.eyebrow} title={dict.expertise.heading} description={dict.expertise.description} /></AnimatedReveal>
        <div className="expertise__grid">
          {profile.expertise.map((fact, index) => {
            const item = dict.expertise.items[fact.id]; const Icon = icons[fact.icon];
            return <AnimatedReveal className="expertise-card" key={fact.id} delay={(index % 4) * 0.04}><div className="expertise-card__top"><span>{formatDigits(locale, String(index + 1).padStart(2, "0"))}</span><Icon aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.text}</p><span className="expertise-card__rule" aria-hidden="true" /></AnimatedReveal>;
          })}
        </div>
      </div>
    </section>
  );
}
