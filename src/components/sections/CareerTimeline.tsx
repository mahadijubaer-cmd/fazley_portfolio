import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function CareerTimeline() {
  return (
    <section id="experience" className="section journey" aria-labelledby="journey-heading">
      <div className="shell">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Career journey"
            id="journey-heading"
            title="Professional Journey"
            description="A career spanning technical operations, organizational leadership, regulatory responsibility, and strategic energy consultancy."
            inverse
          />
        </AnimatedReveal>
        <ol className="timeline">
          {profile.career.map((entry, index) => (
            <AnimatedReveal as="li" className={`timeline__entry timeline__entry--${index % 2 === 0 ? "left" : "right"}`} key={`${entry.marker}-${entry.organization}`} delay={0.03 * index}>
                <div className="timeline__dot" aria-hidden="true"><span /></div>
                <div className="timeline__card">
                  <p className="timeline__marker">{entry.marker}</p>
                  <h3>{entry.organization}</h3>
                  {entry.role ? <p className="timeline__role">{entry.role}</p> : null}
                  <p>{entry.description}</p>
                </div>
            </AnimatedReveal>
          ))}
        </ol>
        <AnimatedReveal className="industry-feature">
          <div className="industry-feature__image">
            <Image
              src={profile.images.industry.src}
              alt={profile.images.industry.alt}
              width={profile.images.industry.width}
              height={profile.images.industry.height}
              sizes="(max-width: 767px) 100vw, 70vw"
            />
          </div>
          <div className="industry-feature__caption">
            <span aria-hidden="true">Field perspective</span>
            <p>Experience across energy infrastructure and industry operations.</p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
