# Engr. Md. Fazley Alam — Professional Portfolio

A production-ready executive portfolio for Engr. Md. Fazley Alam, Energy Sector Consultant. Built with Next.js App Router, strict TypeScript, Tailwind CSS, Motion, Lucide icons, and optimized `next/image` delivery.

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
```

## Content updates

All biography, career, expertise, image, gallery, and contact information is centralized in `src/content/profile.ts`.

Contact details are managed in `profile.contact`:

- LinkedIn, Facebook, and WhatsApp are configured from the approved links.
- Email and telephone remain unset.

No form delivery is simulated. Approved channels link directly to their respective services.

## Deployment

Deploy to any platform supporting Next.js. Before a public deployment, set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-final-domain.example
```

This value is used for canonical social metadata, `robots.txt`, the sitemap, and Person structured data. Vercel can deploy the project without additional build configuration; other Node hosts should run `npm run build` and `npm start`.

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
- Final public domain

The requested project/domain label is `fazleyalam-portfolio`. A canonical URL should only be configured after the actual hosting hostname is confirmed.
