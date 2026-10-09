import type { Metadata, Viewport } from "next";
import { getDictionary, type Locale } from "@/content/i18n";
import { profile } from "@/content/profile";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fazley-portfolio.vercel.app";

export function createMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = locale === "bn" ? "/bn" : "/";
  const pageUrl = `${siteUrl}${path === "/" ? "" : path}`;
  return {
    metadataBase: new URL(siteUrl), title: dict.metadata.title, description: dict.metadata.description,
    applicationName: dict.common.name, authors: [{ name: profile.name }], category: "Professional Services",
    keywords: ["Fazley Alam", "energy sector consultant", "Bangladesh energy consultant", "natural gas infrastructure", "energy regulation", "EPC", "EPCM", "BERC"],
    alternates: { canonical: pageUrl, languages: { en: siteUrl, bn: `${siteUrl}/bn` } }, robots: { index: true, follow: true },
    openGraph: { type: "profile", locale: locale === "bn" ? "bn_BD" : "en_US", url: pageUrl, siteName: dict.common.name, title: dict.metadata.title, description: dict.metadata.description },
    twitter: { card: "summary_large_image", title: dict.metadata.title, description: dict.metadata.description },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F8F7F3" }, { media: "(prefers-color-scheme: dark)", color: "#0B1F33" }], colorScheme: "light dark" };
