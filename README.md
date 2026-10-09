# Engr. Md. Fazley Alam — Professional Portfolio

A production-ready bilingual executive portfolio for Engr. Md. Fazley Alam, Energy Sector Consultant. Built with Next.js App Router, strict TypeScript, Tailwind CSS, Motion, Lucide icons, and optimized `next/image` delivery.

- English: [https://fazley-portfolio.vercel.app/](https://fazley-portfolio.vercel.app/)
- বাংলা: [https://fazley-portfolio.vercel.app/bn](https://fazley-portfolio.vercel.app/bn)
- Appearance: Light, Dark, and operating-system modes with persisted preferences

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
npm run test:visual
npm run test:a11y
npm run test:preferences
```

## Content updates

Dates, financial values, career records, documents, images, and contact links are centralized in `src/content/profile.ts`. Typed English and Bangla visitor-facing copy is centralized in `src/content/i18n.ts`.

Contact details are managed in `profile.contact`:

- LinkedIn, Facebook, and WhatsApp are configured from the approved links.
- Email remains unset; the approved telephone number is exposed only as a WhatsApp contact.

No form delivery is simulated. Approved channels link directly to their respective services.

## Deployment

The production fallback URL is `https://fazley-portfolio.vercel.app`. A different deployment can override it with:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

This value is used for canonical and social metadata, `robots.txt`, and the bilingual sitemap. Vercel can deploy the project without additional build configuration; other Node hosts should run `npm run build` and `npm start`.

## CV downloads

The supplied PDFs are preserved byte-for-byte in `public/documents/`:

| Website URL | File |
| --- | --- |
| `/documents/Fazley_Alam_CV_English.pdf` | English CV |
| `/documents/Fazley_Alam_CV_Bangla.pdf` | Bangla CV |

## Supplied image mapping

| Asset | Usage |
| --- | --- |
| `01-executive-meeting.png` | Homepage hero |
| `02-energy-drilling-site.png` | Career and industry experience |
| `03-professional-indoor.png` | About section |
| `04-architectural-portrait.png` | Gallery |
| `05-mountain-portrait.png` | Gallery |
| `06-city-night-portrait.png` | Gallery |

The original photographs are preserved without facial retouching. Next.js generates appropriately sized modern AVIF/WebP variants at request time.

## Items awaiting confirmation

- Professional email address
- Separate telephone availability, if calls should be enabled in addition to WhatsApp
