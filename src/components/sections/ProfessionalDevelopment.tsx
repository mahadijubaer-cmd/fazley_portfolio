import { BookOpenCheck } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function ProfessionalDevelopment() {
  return (
    <section className="section development" aria-labelledby="development-heading">
      <div className="shell development__layout">
        <AnimatedReveal className="development__heading" direction="left">
          <SectionHeading
            id="development-heading"
            eyebrow="Professional development"
            title="Selected Training & International Exposure"
            description="Formal learning across gas systems, safety, corporate governance, project management, energy technology, and international gas business."
          />
          <BookOpenCheck aria-hidden="true" />
        </AnimatedReveal>
        <ol className="development__list">
          {profile.training.map((item, index) => (
            <AnimatedReveal as="li" className="development__item" key={`${item.year}-${item.title}`} direction="right" delay={(index % 4) * 0.035}>
              <span>{item.year}</span>
              <div><h3>{item.title}</h3><p>{item.provider}</p></div>
            </AnimatedReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
