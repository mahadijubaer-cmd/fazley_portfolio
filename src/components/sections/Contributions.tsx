import { ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function Contributions() {
  const featured = profile.contributions.filter((item) => item.featured);
  const remaining = profile.contributions.filter((item) => !item.featured);

  return (
    <section id="contributions" className="section contributions" aria-labelledby="contributions-heading">
      <div className="shell">
        <AnimatedReveal>
          <SectionHeading
            id="contributions-heading"
            eyebrow="Gas-sector record"
            title="Selected Professional Contributions"
            description="Documented contributions spanning organizational performance, regulatory responsibility, infrastructure development, revenue protection, and technical capability."
          />
        </AnimatedReveal>

        <div className="contributions__featured">
          {featured.map((item, index) => (
            <AnimatedReveal className="contribution-feature" key={item.number} delay={index * 0.08}>
              <div className="contribution-feature__top"><span>{item.number}</span><ArrowUpRight aria-hidden="true" /></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </AnimatedReveal>
          ))}
        </div>

        <ol className="contributions__list">
          {remaining.map((item, index) => (
            <AnimatedReveal as="li" className="contribution-row" key={item.number} delay={(index % 3) * 0.035}>
              <span>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.detail}</p></div>
            </AnimatedReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
