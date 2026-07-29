# Dr. Imran Khan Batezai — Portfolio

A professional portfolio website for **Dr. Imran Khan Batezai** — Ph.D.
Scholar in Education, Research Analyst, Survey Expert, Data Analyst, and
Monitoring & Evaluation professional.

Built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS, and
Framer Motion. Designed to deploy for free on Vercel's Hobby plan with no
paid backend or database.

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Contact form backend:** Next.js Route Handler (`app/api/contact/route.ts`)
  — no database, optional free email delivery via [Resend](https://resend.com)

## Project structure

```
app/
  layout.tsx          Root layout, fonts, SEO metadata, structured data
  page.tsx             Home page — composes every section
  globals.css          Design tokens, base styles, signature timeline CSS
  not-found.tsx         Custom 404 page
  loading.tsx / error.tsx   Route-level loading & error states
  sitemap.ts / robots.ts    SEO routes
  api/contact/route.ts  Contact form API route (validation, honeypot, email)
components/            One component per section (Hero, Experience, ...)
components/ui/         Shared primitives (Container, SectionHeading, ...)
lib/data.ts             All CV content in one place — edit this to update copy
lib/validation.ts       Shared client/server contact form validation
types/index.ts          Shared TypeScript types
public/                 Static assets, incl. Imran-Khan-Batezai-CV.pdf
```

All page content is centralized in `lib/data.ts`. To update any text —
job titles, publications, skills, contact details — edit that one file
rather than hunting through components.

## Getting started locally

Requires Node.js 18.18 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

The site and the contact form both work with **no environment variables
set at all** — the form validates input and logs valid submissions to the
server console. To actually receive contact-form emails, connect a free
provider:

| Variable | Required? | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Optional | API key from a free [Resend](https://resend.com) account |
| `CONTACT_TO_EMAIL` | Optional | Inbox that should receive submissions |
| `CONTACT_FROM_EMAIL` | Optional | Verified "from" address Resend sends as |
| `NEXT_PUBLIC_SITE_URL` | Optional | Used for SEO/Open Graph absolute URLs |

If you'd rather use a different free provider (e.g. Web3Forms, EmailJS,
Formspree), edit the single `fetch` call inside
`app/api/contact/route.ts` — everything else (validation, honeypot, rate
limiting) stays the same.

**Never commit `.env.local` or real API keys.** Only `.env.example` should
be tracked in git.

## The CV download

The "Download CV" button (in the Hero section) links to
`/Imran-Khan-Batezai-CV.pdf`, which lives in `public/` at the project
root. A version generated from this same CV content is included —
replace it any time by dropping in a new file with the same name.
(Note: the CV download button was intentionally removed from the
navbar — it's currently only in the Hero section.)

## Adding a real profile photo

The Hero section is wired to show a real photo automatically. Just add
a photo file named exactly:

```
public/profile.jpg
```

As soon as that file exists, it replaces the placeholder — no code
changes needed. Until then, the site shows a clean, professional
silhouette placeholder instead of a fabricated photo. A square image
(at least 440×440px) works best, since it's cropped into a circle.

## Deploying to Vercel (free Hobby plan)

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the
   repository. Vercel auto-detects Next.js — no build configuration is
   required.
3. Before deploying, add any environment variables you want under
   **Project Settings → Environment Variables** (see table above). These
   are optional; the site builds and runs without them.
4. Click **Deploy**. Vercel runs `npm install` and `npm run build`
   automatically.
5. Once live, set `NEXT_PUBLIC_SITE_URL` to your real Vercel URL (or
   custom domain) and redeploy for accurate SEO/Open Graph metadata.

No database, no paid add-ons, and no server to manage — the contact form
runs as a Vercel serverless function on the free plan.

## Production build

```bash
npm run build
npm run start
```

## Accessibility & performance notes

- Keyboard-navigable throughout, with visible focus states.
- Respects `prefers-reduced-motion`.
- Semantic headings and landmark regions.
- Fonts are self-hosted via `next/font` (no layout shift, no external
  font requests at runtime).
- Images use Next.js's built-in optimization where applicable.

## Content accuracy

All copy on this site is sourced directly from the provided CV. No
statistics, employers, degrees, publications, or awards have been
invented. If you update the CV, update `lib/data.ts` to match — every
section reads from that single file.
