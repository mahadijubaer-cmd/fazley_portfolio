import { ArrowUpRight, MapPin } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { profile } from "@/content/profile";

export function Contact() {
  const methods = [
    profile.contact.email ? { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` } : null,
    profile.contact.linkedIn ? { label: "LinkedIn", value: "Professional profile", href: profile.contact.linkedIn } : null,
    profile.contact.telephone ? { label: "Telephone", value: profile.contact.telephone, href: `tel:${profile.contact.telephone}` } : null,
  ].filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact__geometry" aria-hidden="true" />
      <div className="shell contact__inner">
        <AnimatedReveal className="contact__copy" direction="left">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-heading">Let&apos;s Discuss the <em>Future of Energy</em></h2>
          <p>For energy sector advisory engagements, infrastructure discussions, strategic collaboration, and professional inquiries, please get in touch.</p>
        </AnimatedReveal>
        <AnimatedReveal className="contact__details" direction="right" delay={0.1}>
          <div className="contact__location"><MapPin aria-hidden="true" /><div><span>Based in</span><strong>{profile.location}</strong></div></div>
          {methods.length ? (
            <div className="contact__methods">
              {methods.map((method) => (
                <a key={method.label} href={method.href} target={method.label === "LinkedIn" ? "_blank" : undefined} rel={method.label === "LinkedIn" ? "noreferrer" : undefined}>
                  <span>{method.label}</span><strong>{method.value}</strong><ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          ) : (
            <div className="contact__pending">
              <span>Contact details</span>
              <p>Approved professional contact channels will be available here shortly.</p>
            </div>
          )}
        </AnimatedReveal>
      </div>
    </section>
  );
}
