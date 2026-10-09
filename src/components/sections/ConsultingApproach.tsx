import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";

export function ConsultingApproach({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="approach" className="section approach" aria-labelledby="approach-heading">
      <div className="shell">
        <AnimatedReveal><SectionHeading id="approach-heading" eyebrow={dict.approach.eyebrow} title={dict.approach.heading} description={dict.approach.description} align="center" /></AnimatedReveal>
        <ol className="approach__steps">
          {dict.approach.items.map((step, index) => <AnimatedReveal as="li" className="approach-step" key={step.title} delay={index * 0.06}><span className="approach-step__number">{formatDigits(locale, String(index + 1).padStart(2, "0"))}</span><div className="approach-step__node" aria-hidden="true"><span /></div><h3>{step.title}</h3><p>{step.text}</p></AnimatedReveal>)}
        </ol>
      </div>
    </section>
  );
}
