import { ArrowDownRight } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";

export function Leadership({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section leadership" aria-labelledby="leadership-heading">
      <div className="shell leadership__layout">
        <AnimatedReveal className="leadership__intro" direction="left">
          <p className="eyebrow">{dict.leadership.eyebrow}</p><h2 id="leadership-heading">{dict.leadership.headingFirst} <em>{dict.leadership.headingEmphasis}</em></h2>
          <p>{dict.leadership.description}</p><ArrowDownRight aria-hidden="true" />
        </AnimatedReveal>
        <div className="leadership__list">
          {dict.leadership.items.map((item, index) => <AnimatedReveal className="leadership__item" key={item} direction="right" delay={index * 0.035}><span>{formatDigits(locale, String(index + 1).padStart(2, "0"))}</span><h3>{item}</h3></AnimatedReveal>)}
        </div>
      </div>
    </section>
  );
}
