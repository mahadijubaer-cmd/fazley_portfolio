import Image from "next/image";
import { ArrowDown, ArrowRight, MoveRight } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import type { Dictionary } from "@/content/i18n";
import { profile } from "@/content/profile";

export function Hero({ dict }: { dict: Dictionary }) {
  const image = profile.images.hero;
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__linework" aria-hidden="true" />
      <div className="shell hero__grid">
        <div className="hero__content">
          <AnimatedReveal><p className="eyebrow hero__eyebrow"><span />{dict.hero.eyebrow}</p></AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <p className="hero__name">{dict.common.name}</p>
            <h1 id="hero-heading">{dict.hero.headlineFirst}<br /><em>{dict.hero.headlineSecond}</em></h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.16}>
            <p className="hero__intro">{dict.hero.introduction}</p>
            <p className="hero__designation">{dict.hero.designation}</p>
          </AnimatedReveal>
          <AnimatedReveal className="hero__actions" delay={0.24}>
            <a className="button button--primary" href="#experience">{dict.hero.explore} <ArrowRight size={17} /></a>
            <a className="button button--text" href="#contact">{dict.hero.discuss} <MoveRight size={19} /></a>
          </AnimatedReveal>
          <AnimatedReveal delay={0.3}><p className="hero__availability"><span aria-hidden="true" />{dict.hero.availability}</p></AnimatedReveal>
        </div>
        <AnimatedReveal className="hero__visual" direction="right" delay={0.1}>
          <div className="hero__image-frame">
            <Image src={image.src} alt={dict.hero.imageAlt} width={image.width} height={image.height} priority sizes="(max-width: 899px) 100vw, 48vw" className="hero__image" />
            <div className="hero__image-shade" aria-hidden="true" />
            <div className="hero__image-caption"><span>{dict.hero.imageCaption}</span><strong>{dict.hero.imageLocation}</strong></div>
          </div>
          <div className="hero__corner-mark" aria-hidden="true" />
        </AnimatedReveal>
      </div>
      <div className="shell hero__footer">
        <div className="hero__highlights" aria-label={dict.hero.experienceLabel}>
          <div><strong>{dict.hero.experienceValue}</strong><span>{dict.hero.experienceLabel}</span></div>
          <div><strong>{dict.hero.leadershipValue}</strong><span>{dict.hero.leadershipLabel}</span></div>
          <div><strong>{dict.hero.energyValue}</strong><span>{dict.hero.energyLabel}</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span>{dict.hero.scroll}</span><ArrowDown size={16} /></a>
      </div>
    </section>
  );
}
