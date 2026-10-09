import Image from "next/image";
import { Compass, Gavel, Settings2, UsersRound } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CvDownloads } from "@/components/sections/CvDownloads";
import type { Dictionary, Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

const pillarIcons = [Settings2, Gavel, UsersRound, Compass];

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const image = profile.images.biography;
  const records = [
    [dict.about.record.birth, dict.about.recordValues.birth], [dict.about.record.district, dict.about.recordValues.district],
    [dict.about.record.father, dict.about.recordValues.father], [dict.about.record.mother, dict.about.recordValues.mother],
    [dict.about.record.joined, dict.about.recordValues.joined],
  ];
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="shell">
        <AnimatedReveal><SectionHeading id="about-heading" eyebrow={dict.about.eyebrow} title={dict.about.heading} /></AnimatedReveal>
        <div className="about__grid">
          <AnimatedReveal className="about__portrait" direction="left">
            <Image src={image.src} alt={dict.about.portraitAlt} width={image.width} height={image.height} sizes="(max-width: 767px) 100vw, 38vw" />
            <div className="about__portrait-note"><span>{dict.about.portraitEyebrow}</span><strong>{dict.about.portraitNote}</strong></div>
          </AnimatedReveal>
          <AnimatedReveal className="about__copy" direction="right" delay={0.08}>
            {dict.about.biography.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "about__lead" : undefined}>{paragraph}</p>)}
          </AnimatedReveal>
        </div>
        <div className="about__pillars">
          {dict.about.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return <AnimatedReveal className="pillar" key={pillar.title} delay={index * 0.05}><Icon aria-hidden="true" /><h3>{pillar.title}</h3><p>{pillar.text}</p></AnimatedReveal>;
          })}
        </div>
        <AnimatedReveal className="profile-record">
          <div className="profile-record__heading"><p className="eyebrow">{dict.about.recordEyebrow}</p><h3>{dict.about.recordHeading}</h3></div>
          <dl>{records.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </AnimatedReveal>
        <CvDownloads locale={locale} dict={dict} />
      </div>
    </section>
  );
}
