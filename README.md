# Rishin Portfolio

Interactive portfolio site for **Rishin S Pradeep** — Senior Data Architect available for remote US contracts.

**Live site:** [https://rishinspradeep.vercel.app](https://rishinspradeep.vercel.app)

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- Tailwind CSS 4
- Deployed on [Vercel](https://vercel.com)

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Project structure

```
app/
  components/   # UI sections (Hero, Services, CaseStudies, etc.)
  data/         # Portfolio content (copy, case studies, FAQ)
  hooks/        # Animation and scroll utilities
  globals.css   # Design system and layout
public/         # Resume PDF, favicon, static assets
```

## Deploy

Push to the connected GitHub repo, or deploy manually:

```bash
pnpm dlx vercel deploy --prod
```
