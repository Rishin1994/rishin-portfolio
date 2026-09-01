# Rishin Portfolio

Interactive portfolio for **Rishin S Pradeep** — Senior Data Architect available for remote US contracts.

**Live site:** [https://rishinspradeep.vercel.app](https://rishinspradeep.vercel.app)

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Deployed on Vercel

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
  components/   # UI sections
  data/         # All marketing copy (portfolio.ts)
  work/         # Case study routes
  about/        # About page
  hooks/        # Animation utilities
public/         # Resume PDF, favicon, future assets
```

## Deploy

```bash
pnpm dlx vercel deploy --prod
```

Or push to `main` once Git is connected in Vercel.
