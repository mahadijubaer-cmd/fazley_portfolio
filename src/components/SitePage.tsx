import { About } from "@/components/sections/About";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { ConsultingApproach } from "@/components/sections/ConsultingApproach";
import { Contact } from "@/components/sections/Contact";
import { Contributions } from "@/components/sections/Contributions";
import { Education } from "@/components/sections/Education";
import { Expertise } from "@/components/sections/Expertise";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { ProfessionalDevelopment } from "@/components/sections/ProfessionalDevelopment";
import { getDictionary, type Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

export function SitePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const structuredData = {
    "@context": "https://schema.org", "@type": "Person", name: profile.name,
    jobTitle: dict.common.professionalTitle,
    address: { "@type": "PostalAddress", addressLocality: profile.location.city, addressCountry: profile.location.country },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Bangladesh University of Engineering and Technology" },
    memberOf: { "@type": "Organization", name: "Bakhrabad Gas Distribution Company Limited" },
    url: profile.contact.portfolio, sameAs: [profile.contact.linkedIn, profile.contact.facebook],
    knowsAbout: ["Natural gas transmission and distribution", "Energy regulation and compliance", "Energy infrastructure", "EPC and EPCM", "LNG infrastructure", "Procurement and international tendering"],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Hero dict={dict} /><About locale={locale} dict={dict} /><CareerTimeline locale={locale} dict={dict} />
      <Contributions locale={locale} dict={dict} /><Expertise locale={locale} dict={dict} /><Leadership locale={locale} dict={dict} />
      <ConsultingApproach locale={locale} dict={dict} /><Education locale={locale} dict={dict} />
      <ProfessionalDevelopment locale={locale} dict={dict} /><Gallery dict={dict} /><Contact dict={dict} />
    </>
  );
}
