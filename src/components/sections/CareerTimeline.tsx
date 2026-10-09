import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizedMarker, type Dictionary, type Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

export function CareerTimeline({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const image = profile.images.industry;
  return (
    <section id="experience" className="section journey" aria-labelledby="journey-heading">
      <div className="shell">
        <AnimatedReveal><SectionHeading id="journey-heading" eyebrow={dict.journey.eyebrow} title={dict.journey.heading} description={dict.journey.description} inverse /></AnimatedReveal>
        <ol className="timeline">
          {profile.career.map((entry, index) => {
            const copy = dict.journey.items[entry.id];
            return (
              <AnimatedReveal as="li" className={`timeline__entry timeline__entry--${index % 2 === 0 ? "left" : "right"}`} key={entry.id} delay={0.03 * index}>
                <div className="timeline__dot" aria-hidden="true"><span /></div>
                <div className="timeline__card">
                  <p className="timeline__marker">{localizedMarker(locale, entry.marker)}</p>
                  <h3>{copy.organization}</h3>{copy.role ? <p className="timeline__role">{copy.role}</p> : null}<p>{copy.description}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </ol>
        <AnimatedReveal className="industry-feature">
          <div className="industry-feature__image"><Image src={image.src} alt={dict.journey.industryAlt} width={image.width} height={image.height} sizes="(max-width: 767px) 100vw, 70vw" /></div>
          <div className="industry-feature__caption"><span aria-hidden="true">{dict.journey.fieldLabel}</span><p>{dict.journey.fieldCaption}</p></div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
