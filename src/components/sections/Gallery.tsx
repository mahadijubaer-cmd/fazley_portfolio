import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content/i18n";
import { profile } from "@/content/profile";

export function Gallery({ dict }: { dict: Dictionary }) {
  const items = profile.images.gallery.map((item) => ({ ...item, ...dict.gallery.items[item.id] }));
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-heading">
      <div className="shell">
        <AnimatedReveal><SectionHeading id="gallery-heading" eyebrow={dict.gallery.eyebrow} title={dict.gallery.heading} description={dict.gallery.description} /></AnimatedReveal>
        <AnimatedReveal delay={0.08}><ImageLightbox items={items} labels={{ viewer: dict.gallery.viewerLabel, enlarge: dict.gallery.enlarge, close: dict.gallery.close, previous: dict.gallery.previous, next: dict.gallery.next }} /></AnimatedReveal>
      </div>
    </section>
  );
}
