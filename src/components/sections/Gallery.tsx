import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

export function Gallery() {
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-heading">
      <div className="shell">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Professional & personal moments"
            id="gallery-heading"
            title="Beyond the Boardroom"
            description="A restrained glimpse at the person behind the professional perspective."
          />
        </AnimatedReveal>
        <AnimatedReveal delay={0.08}><ImageLightbox items={profile.gallery} /></AnimatedReveal>
      </div>
    </section>
  );
}
