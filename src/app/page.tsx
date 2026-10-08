import { About } from "@/components/sections/About";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { ConsultingApproach } from "@/components/sections/ConsultingApproach";
import { Contributions } from "@/components/sections/Contributions";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Expertise } from "@/components/sections/Expertise";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { ProfessionalDevelopment } from "@/components/sections/ProfessionalDevelopment";
import { profile } from "@/content/profile";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.institution },
    memberOf: { "@type": "Organization", name: "Bakhrabad Gas Distribution Company Limited" },
    sameAs: [profile.contact.linkedIn, profile.contact.facebook],
    ...(siteUrl ? { url: siteUrl } : {}),
    knowsAbout: [
      "Natural gas transmission and distribution",
      "Energy regulation",
      "Energy infrastructure",
      "EPC and EPCM",
      "LNG infrastructure",
      "Energy sector procurement",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Hero />
      <About />
      <CareerTimeline />
      <Contributions />
      <Expertise />
      <Leadership />
      <ConsultingApproach />
      <Education />
      <ProfessionalDevelopment />
      <Gallery />
      <Contact />
    </>
  );
}
