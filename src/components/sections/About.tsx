import Image from "next/image";
import { Compass, Gavel, Settings2, UsersRound } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

const pillars = [
  { icon: Settings2, title: "Technical Expertise", text: "Engineering perspective across complex energy systems." },
  { icon: Gavel, title: "Regulatory Experience", text: "Understanding of oversight, compliance, and policy implementation." },
  { icon: UsersRound, title: "Executive Leadership", text: "Management experience within major energy-sector organizations." },
  { icon: Compass, title: "Strategic Advisory", text: "Practical counsel grounded in technical and operational realities." },
];

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="shell">
        <AnimatedReveal>
          <SectionHeading id="about-heading" eyebrow="Professional profile" title="A Career Dedicated to Energy Infrastructure and Leadership" />
        </AnimatedReveal>
        <div className="about__grid">
          <AnimatedReveal className="about__portrait" direction="left">
            <Image
              src={profile.images.biography.src}
              alt={profile.images.biography.alt}
              width={profile.images.biography.width}
              height={profile.images.biography.height}
              sizes="(max-width: 767px) 100vw, 38vw"
            />
            <div className="about__portrait-note"><span>Professional perspective</span><strong>Technical depth. Strategic clarity.</strong></div>
          </AnimatedReveal>
          <AnimatedReveal className="about__copy" direction="right" delay={0.08}>
            {profile.biography.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "about__lead" : undefined}>{paragraph}</p>)}
          </AnimatedReveal>
        </div>
        <div className="about__pillars">
          {pillars.map((pillar, index) => (
            <AnimatedReveal className="pillar" key={pillar.title} delay={index * 0.05}>
              <pillar.icon aria-hidden="true" />
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal className="profile-record">
          <div className="profile-record__heading">
            <p className="eyebrow">Profile record</p>
            <h3>Biographical details</h3>
          </div>
          <dl>
            {profile.professionalRecord.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </AnimatedReveal>
      </div>
    </section>
  );
}
