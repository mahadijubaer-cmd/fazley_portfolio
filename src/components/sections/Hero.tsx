import Image from "next/image";
import { ArrowDown, ArrowRight, MoveRight } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__linework" aria-hidden="true" />
      <div className="shell hero__grid">
        <div className="hero__content">
          <AnimatedReveal>
            <p className="eyebrow hero__eyebrow"><span />Energy sector leadership & consulting</p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <p className="hero__name">{profile.name}</p>
            <h1 id="hero-heading">Engineering Experience.<br /><em>Strategic Energy Leadership.</em></h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.16}>
            <p className="hero__intro">{profile.introduction}</p>
            <p className="hero__designation">{profile.designation}</p>
          </AnimatedReveal>
          <AnimatedReveal className="hero__actions" delay={0.24}>
            <a className="button button--primary" href="#experience">Explore my experience <ArrowRight size={17} /></a>
            <a className="button button--text" href="#contact">Discuss an engagement <MoveRight size={19} /></a>
          </AnimatedReveal>
          <AnimatedReveal delay={0.3}>
            <p className="hero__availability"><span aria-hidden="true" />{profile.availability}</p>
          </AnimatedReveal>
        </div>

        <AnimatedReveal className="hero__visual" direction="right" delay={0.1}>
          <div className="hero__image-frame">
            <Image
              src={profile.images.hero.src}
              alt={profile.images.hero.alt}
              width={profile.images.hero.width}
              height={profile.images.hero.height}
              priority
              sizes="(max-width: 899px) 100vw, 48vw"
              className="hero__image"
            />
            <div className="hero__image-shade" aria-hidden="true" />
            <div className="hero__image-caption"><span>Executive perspective</span><strong>Dhaka, Bangladesh</strong></div>
          </div>
          <div className="hero__corner-mark" aria-hidden="true" />
        </AnimatedReveal>
      </div>

      <div className="shell hero__footer">
        <div className="hero__highlights" aria-label="Professional highlights">
          <div><strong>27+</strong><span>Years of experience</span></div>
          <div><strong>Executive</strong><span>Leadership</span></div>
          <div><strong>Energy</strong><span>Regulation & infrastructure</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to discover</span><ArrowDown size={16} /></a>
      </div>
    </section>
  );
}
