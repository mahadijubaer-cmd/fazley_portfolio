import { GraduationCap } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

export function Education({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const additional = [
    { year: profile.education.hscYear, title: dict.education.hsc, board: dict.education.hscBoard, result: dict.education.hscResult },
    { year: profile.education.sscYear, title: dict.education.ssc, board: dict.education.sscBoard, result: dict.education.sscResult },
  ];
  return (
    <section className="education" aria-labelledby="education-heading">
      <div className="shell education__inner">
        <AnimatedReveal className="education__icon" direction="left"><GraduationCap aria-hidden="true" /></AnimatedReveal>
        <AnimatedReveal className="education__copy" direction="right">
          <p className="eyebrow">{dict.education.eyebrow}</p><h2 id="education-heading">{dict.education.institution} <span>({dict.education.abbreviation})</span></h2>
          <p className="education__qualification"><strong>{dict.education.qualification}</strong><span>{formatDigits(locale, profile.education.bscYear)} · {dict.education.result}</span></p><p>{dict.education.description}</p>
        </AnimatedReveal>
        <AnimatedReveal className="education__earlier">
          {additional.map((item) => <div key={item.year}><span>{formatDigits(locale, item.year)}</span><h3>{item.title}</h3><p>{item.board} · {item.result}</p></div>)}
        </AnimatedReveal>
      </div>
    </section>
  );
}
