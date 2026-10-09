"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import type { Dictionary, Locale, ThemeSetting } from "@/content/i18n";

const THEME_KEY = "fazley-theme";
const LOCALE_KEY = "fazley-locale";

export function LanguageToggle({ locale, dict, className = "" }: { locale: Locale; dict: Dictionary; className?: string }) {
  const router = useRouter();

  function selectLocale(next: Locale) {
    if (next === locale) return;
    localStorage.setItem(LOCALE_KEY, next);
    document.cookie = `${LOCALE_KEY}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    const destination = next === "bn" ? "/bn" : "/";
    const visibleSection = [...document.querySelectorAll<HTMLElement>("main section[id]")]
      .find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= window.innerHeight * 0.4 && bounds.bottom > window.innerHeight * 0.4;
      });
    const sectionHash = window.location.hash || (visibleSection ? `#${visibleSection.id}` : "");
    router.push(`${destination}${window.location.search}${sectionHash}`);
  }

  return (
    <div className={`language-toggle ${className}`} role="group" aria-label={dict.controls.languageLabel}>
      <button type="button" onClick={() => selectLocale("en")} aria-pressed={locale === "en"}>English</button>
      <span aria-hidden="true">|</span>
      <button type="button" onClick={() => selectLocale("bn")} aria-pressed={locale === "bn"}>বাংলা</button>
    </div>
  );
}

function applyTheme(setting: ThemeSetting) {
  const dark = setting === "dark" || (setting === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.themeSetting = setting;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

export function ThemeSelector({ dict, className = "" }: { dict: Dictionary; className?: string }) {
  const selectRef = useRef<HTMLSelectElement>(null);

  useLayoutEffect(() => {
    const stored = document.documentElement.dataset.themeSetting;
    const initial: ThemeSetting = stored === "light" || stored === "dark" ? stored : "system";
    if (selectRef.current) selectRef.current.value = initial;
    applyTheme(initial);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => { if (document.documentElement.dataset.themeSetting === "system") applyTheme("system"); };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function update(next: ThemeSetting) {
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  return (
    <label className={`theme-selector ${className}`}>
      <Sun className="theme-icon theme-icon--light" aria-hidden="true" />
      <Moon className="theme-icon theme-icon--dark" aria-hidden="true" />
      <Monitor className="theme-icon theme-icon--system" aria-hidden="true" />
      <span className="sr-only">{dict.controls.appearanceLabel}</span>
      <select ref={selectRef} defaultValue="system" onChange={(event) => update(event.target.value as ThemeSetting)} aria-label={dict.controls.appearanceLabel}>
        <option value="light">{dict.controls.light}</option>
        <option value="dark">{dict.controls.dark}</option>
        <option value="system">{dict.controls.system}</option>
      </select>
    </label>
  );
}
