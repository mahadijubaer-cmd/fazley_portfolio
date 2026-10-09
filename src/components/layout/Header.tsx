"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { LanguageToggle, ThemeSelector } from "@/components/ui/PreferenceControls";
import { formatDigits, type Dictionary, type Locale } from "@/content/i18n";

const sectionLinks = [
  ["about", "#about"], ["experience", "#experience"], ["contributions", "#contributions"],
  ["expertise", "#expertise"], ["gallery", "#gallery"],
] as const;

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = sectionLinks.map(([, href]) => document.querySelector(href)).filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(`#${visible.target.id}`);
    }, { rootMargin: "-25% 0px -65%", threshold: [0, 0.25, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [isOpen]);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner shell">
        <a href="#top" className="brand" aria-label={`${dict.common.name}, ${dict.controls.home}`}>
          <span className="brand__mark" aria-hidden="true">FA</span>
          <span className="brand__text"><strong>{dict.common.shortName}</strong><small>{dict.common.professionalTitle}</small></span>
        </a>
        <nav className="desktop-nav" aria-label={dict.controls.primaryNavigation}>
          {sectionLinks.map(([key, href]) => (
            <a key={href} href={href} className={activeSection === href ? "active" : ""}>{dict.navigation[key]}</a>
          ))}
        </nav>
        <div className="header-preferences">
          <LanguageToggle locale={locale} dict={dict} />
          <ThemeSelector dict={dict} />
        </div>
        <a className="header-cta" href="#contact">{dict.header.talk} <ArrowUpRight size={16} /></a>
        <button type="button" className="menu-toggle" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? dict.controls.closeMenu : dict.controls.openMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div id="mobile-navigation" className="mobile-menu" initial={reduceMotion ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            <nav aria-label={dict.controls.primaryNavigation}>
              {sectionLinks.map(([key, href], index) => (
                <a key={href} href={href} onClick={() => setIsOpen(false)}><span>{formatDigits(locale, String(index + 1).padStart(2, "0"))}</span>{dict.navigation[key]}</a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}><span>{formatDigits(locale, "06")}</span>{dict.navigation.contact}</a>
            </nav>
            <div className="mobile-preferences">
              <LanguageToggle locale={locale} dict={dict} />
              <ThemeSelector dict={dict} />
            </div>
            <p>{dict.common.location}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
