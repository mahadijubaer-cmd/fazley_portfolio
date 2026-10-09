import { Download, FileText } from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import type { Dictionary, Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

export function CvDownloads({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const options = locale === "bn"
    ? [
        { href: profile.documents.banglaCv, label: dict.cv.bangla, aria: dict.cv.banglaAria, hint: dict.cv.primary },
        { href: profile.documents.englishCv, label: dict.cv.english, aria: dict.cv.englishAria, hint: dict.cv.secondary },
      ]
    : [
        { href: profile.documents.englishCv, label: dict.cv.english, aria: dict.cv.englishAria, hint: dict.cv.primary },
        { href: profile.documents.banglaCv, label: dict.cv.bangla, aria: dict.cv.banglaAria, hint: dict.cv.secondary },
      ];

  return (
    <AnimatedReveal className="cv-downloads">
      <div className="cv-downloads__intro">
        <FileText aria-hidden="true" />
        <div><p className="eyebrow">{dict.cv.eyebrow}</p><h3>{dict.cv.heading}</h3><p>{dict.cv.description}</p></div>
      </div>
      <div className="cv-downloads__actions">
        {options.map((option, index) => (
          <a key={option.href} className={`cv-button${index === 0 ? " cv-button--primary" : ""}`} href={option.href} download aria-label={option.aria}>
            <span><small>{option.hint}</small><strong>{option.label}</strong></span><Download aria-hidden="true" />
          </a>
        ))}
      </div>
    </AnimatedReveal>
  );
}
