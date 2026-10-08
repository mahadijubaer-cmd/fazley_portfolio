import { ArrowDownRight } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { profile } from "@/content/profile";

export function Leadership() {
  return (
    <section className="section leadership" aria-labelledby="leadership-heading">
      <div className="shell leadership__layout">
        <AnimatedReveal className="leadership__intro" direction="left">
          <p className="eyebrow">Leadership & governance</p>
          <h2 id="leadership-heading">Leadership Beyond <em>Technical Expertise</em></h2>
          <p>Energy-sector decisions call for an integrated view of engineering, regulation, organizational responsibility, and stakeholder priorities.</p>
          <ArrowDownRight aria-hidden="true" />
        </AnimatedReveal>
        <div className="leadership__list">
          {profile.leadership.map((item, index) => (
            <AnimatedReveal className="leadership__item" key={item} direction="right" delay={index * 0.035}>
              <span>0{index + 1}</span><h3>{item}</h3>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
