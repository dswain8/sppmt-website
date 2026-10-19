# Shri Prasanna Pattnaik Memorial Trust - Website

Official website for the Sri Prasanna Pattnaik Memorial Trust, established 2025 in Bhubaneswar, Odisha.

## Tech stack

- **Next.js 16** (React 19) with App Router
- **Tailwind CSS 4** for styling
- **Static site** deployed on Vercel — content and images live in the repo

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Page | Path |
|------|------|
| Homepage | `/` |
| About Us | `/about` |
| Our Founder | `/founder` |
| Activities | `/activities` |
| Scholarship | `/scholarship` |
| Donate (Section 80G) | `/donate` |
| Volunteer | `/volunteer` → `/contact#volunteer` |
| Gallery | `/gallery` |
| Contact | `/contact` |

`/scholarship` redirects to `/activities/education` (applications closed after 30 June).

Old URLs (e.g. `/programs`, `/healthcare`) redirect to the new activity pages.

## Updating content

- **Activity photos**: Add to `public/images/activities/`, then update `src/lib/activities.ts`
- **Page text**: Edit the corresponding `page.tsx` in `src/app/`
- **Bank details / PAN / 80G numbers**: Edit defaults in `src/lib/donation.ts` or set env vars (see `.env.example`)
- **Navigation**: Update `src/components/Navbar.tsx` and `src/components/Footer.tsx`

## Forms (no backend)

- **Donations**: Bank transfer → Google Form on `/donate` → official 80G receipt within 7 working days
- **Google Form URL**: set `DONATION_GOOGLE_FORM_URL` in Vercel / `.env` (see `.env.example`)
- **Volunteers**: Email or phone via `/contact`

## Deploying to Vercel

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com) — auto-detects Next.js
3. Deploy — site goes live at your domain (e.g. sppmt.org)

Optional: add donation env vars in Vercel if bank details or registration numbers change without a code update.
