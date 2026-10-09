import { BookOpenCheck } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

export function ProfessionalDevelopment({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section development" aria-labelledby="development-heading">
      <div className="shell development__layout">
        <AnimatedReveal className="development__heading" direction="left"><SectionHeading id="development-heading" eyebrow={dict.development.eyebrow} title={dict.development.heading} description={dict.development.description} /><BookOpenCheck aria-hidden="true" /></AnimatedReveal>
        <ol className="development__list">
          {profile.training.map((fact, index) => { const item = dict.development.items[fact.id]; return <AnimatedReveal as="li" className="development__item" key={fact.id} direction="right" delay={(index % 4) * 0.035}><span>{formatDigits(locale, fact.year)}</span><div><h3>{item.title}</h3><p>{item.provider}</p></div></AnimatedReveal>; })}
        </ol>
      </div>
    </section>
  );
}
