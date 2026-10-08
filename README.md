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

Contact details are intentionally unset. Add only approved values to `profile.contact`:

- `email`
- `linkedIn`
- `telephone`

No form delivery is simulated. Until contact details are approved, the site displays a neutral availability message.

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
- LinkedIn URL
- Telephone number, if approved
- Final public domain
- Tenure/status of the board directorship referenced in supplied professional material
