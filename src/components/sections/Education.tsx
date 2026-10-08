import { GraduationCap } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { profile } from "@/content/profile";

export function Education() {
  return (
    <section className="education" aria-labelledby="education-heading">
      <div className="shell education__inner">
        <AnimatedReveal className="education__icon" direction="left"><GraduationCap aria-hidden="true" /></AnimatedReveal>
        <AnimatedReveal className="education__copy" direction="right">
          <p className="eyebrow">Engineering foundation</p>
          <h2 id="education-heading">{profile.education.institution} <span>({profile.education.abbreviation})</span></h2>
          <p className="education__qualification"><strong>{profile.education.qualification}</strong><span>{profile.education.year} · {profile.education.result}</span></p>
          <p>{profile.education.description}</p>
        </AnimatedReveal>
        <AnimatedReveal className="education__earlier">
          {profile.education.additional.map((item) => (
            <div key={item.year}>
              <span>{item.year}</span>
              <h3>{item.qualification}</h3>
              <p>{item.board} · {item.result}</p>
            </div>
          ))}
        </AnimatedReveal>
      </div>
    </section>
  );
}
