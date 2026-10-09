import { ArrowUpRight, MapPin } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import type { Dictionary } from "@/content/i18n";
import { profile } from "@/content/profile";

export function Contact({ dict }: { dict: Dictionary }) {
  const methods = [
    { label: dict.contact.linkedIn, value: dict.contact.linkedInValue, href: profile.contact.linkedIn },
    { label: dict.contact.facebook, value: dict.contact.facebookValue, href: profile.contact.facebook },
    { label: dict.contact.whatsApp, value: profile.contact.whatsAppDisplay, href: profile.contact.whatsApp },
    { label: dict.contact.portfolio, value: dict.contact.portfolioValue, href: profile.contact.portfolio },
  ];
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact__geometry" aria-hidden="true" />
      <div className="shell contact__inner">
        <AnimatedReveal className="contact__copy" direction="left">
          <p className="eyebrow">{dict.contact.eyebrow}</p><h2 id="contact-heading">{dict.contact.headingFirst} <em>{dict.contact.headingEmphasis}</em></h2>
          <p className="contact__intro">{dict.contact.description}</p><p className="contact__availability">{dict.contact.availability}</p>
        </AnimatedReveal>
        <AnimatedReveal className="contact__details" direction="right" delay={0.1}>
          <div className="contact__location"><MapPin aria-hidden="true" /><div><span>{dict.contact.basedIn}</span><strong>{dict.common.location}</strong></div></div>
          <div className="contact__methods">
            {methods.map((method) => <a key={method.label} href={method.href} target="_blank" rel="noreferrer"><span>{method.label}</span><strong>{method.value}</strong><ArrowUpRight aria-hidden="true" /></a>)}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
