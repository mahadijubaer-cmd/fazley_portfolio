import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fazley-portfolio.vercel.app";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages: { en: baseUrl, bn: `${baseUrl}/bn` } } },
    { url: `${baseUrl}/bn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { en: baseUrl, bn: `${baseUrl}/bn` } } },
  ];
}
