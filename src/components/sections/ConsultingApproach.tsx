import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function ConsultingApproach() {
  return (
    <section id="approach" className="section approach" aria-labelledby="approach-heading">
      <div className="shell">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Consulting approach"
            id="approach-heading"
            title="From Technical Complexity to Strategic Clarity"
            description="A practical framework for engaging with complex energy and infrastructure questions."
            align="center"
          />
        </AnimatedReveal>
        <ol className="approach__steps">
          {profile.approach.map((step, index) => (
            <AnimatedReveal as="li" className="approach-step" key={step.number} delay={index * 0.06}>
                <span className="approach-step__number">{step.number}</span>
                <div className="approach-step__node" aria-hidden="true"><span /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
            </AnimatedReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
