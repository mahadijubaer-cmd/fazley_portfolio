import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Engr. Md. Fazley Alam | Energy Sector Consultant",
  description:
    "Explore the professional experience and energy consultancy expertise of Engr. Md. Fazley Alam, former Managing Director and former Director (Gas), BERC.",
  applicationName: "Engr. Md. Fazley Alam",
  authors: [{ name: "Engr. Md. Fazley Alam" }],
  keywords: [
    "Fazley Alam",
    "energy sector consultant",
    "Bangladesh energy consultant",
    "natural gas infrastructure",
    "energy regulation",
    "EPC",
    "EPCM",
    "BERC",
  ],
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Engr. Md. Fazley Alam",
    title: "Engr. Md. Fazley Alam | Energy Sector Consultant",
    description:
      "More than 27 years of engineering experience and strategic leadership across Bangladesh's natural gas, infrastructure, and regulatory sectors.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Engr. Md. Fazley Alam — Energy Sector Consultant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Md. Fazley Alam | Energy Sector Consultant",
    description: "Engineering experience. Strategic energy leadership.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  category: "Professional Services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F33",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
