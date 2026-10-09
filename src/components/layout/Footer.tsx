import { ArrowUp, MapPin } from "lucide-react";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div><p className="footer__name">{dict.common.name}</p><p>{dict.common.professionalTitle}</p></div>
        <nav aria-label={dict.controls.footerNavigation}>
          <a href="#about">{dict.navigation.about}</a><a href="#experience">{dict.navigation.experience}</a><a href="#contributions">{dict.navigation.contributions}</a>
          <a href={profile.contact.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
        </nav>
        <div className="footer__location"><MapPin size={17} /><span>{dict.common.location}</span></div>
        <a href="#top" className="to-top" aria-label={dict.controls.backToTop}><ArrowUp /></a>
      </div>
      <div className="shell footer__bottom">
        <p>© {formatDigits(locale, String(new Date().getFullYear()))} {dict.common.name}. {dict.footer.rights}</p>
        <p>{dict.footer.motto}</p>
      </div>
    </footer>
  );
}
