import { ArrowUpRight } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";
import { profile, type ContributionId } from "@/content/profile";

export function Contributions({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = new Set<ContributionId>(profile.featuredContributionIds);
  const numberFor = (index: number) => formatDigits(locale, String(index + 1).padStart(2, "0"));
  return (
    <section id="contributions" className="section contributions" aria-labelledby="contributions-heading">
      <div className="shell">
        <AnimatedReveal><SectionHeading id="contributions-heading" eyebrow={dict.contributions.eyebrow} title={dict.contributions.heading} description={dict.contributions.description} /></AnimatedReveal>
        <div className="contributions__featured">
          {profile.contributionIds.filter((id) => featured.has(id)).map((id, index) => {
            const item = dict.contributions.items[id];
            return <AnimatedReveal className="contribution-feature" key={id} delay={index * 0.08}><div className="contribution-feature__top"><span>{numberFor(profile.contributionIds.indexOf(id))}</span><ArrowUpRight aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.detail}</p></AnimatedReveal>;
          })}
        </div>
        <ol className="contributions__list">
          {profile.contributionIds.filter((id) => !featured.has(id)).map((id, index) => {
            const item = dict.contributions.items[id];
            return <AnimatedReveal as="li" className="contribution-row" key={id} delay={(index % 3) * 0.035}><span>{numberFor(profile.contributionIds.indexOf(id))}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></AnimatedReveal>;
          })}
        </ol>
      </div>
    </section>
  );
}
