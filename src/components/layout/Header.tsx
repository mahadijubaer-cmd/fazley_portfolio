"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/content/profile";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -65%", threshold: [0, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner shell">
        <a href="#top" className="brand" aria-label={`${profile.name}, home`}>
          <span className="brand__mark" aria-hidden="true">FA</span>
          <span className="brand__text"><strong>Fazley Alam</strong><small>Energy Sector Consultant</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={activeSection === item.href ? "active" : ""}>{item.label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button type="button" className="menu-toggle" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <nav aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}><span>0{index + 1}</span>{item.label}</a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}><span>06</span>Contact</a>
            </nav>
            <p>{profile.location}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
