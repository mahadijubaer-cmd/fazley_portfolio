import { ArrowUp, MapPin } from "lucide-react";
import { navigation, profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p>{profile.title}</p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer__location"><MapPin size={17} /><span>{profile.location}</span></div>
        <a href="#top" className="to-top" aria-label="Back to top"><ArrowUp /></a>
      </div>
      <div className="shell footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Energy leadership · Engineering excellence</p>
      </div>
    </footer>
  );
}
