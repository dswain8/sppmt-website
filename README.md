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
| Donate | `/donate` |
| Volunteer | `/volunteer` |
| Gallery | `/gallery` |
| Contact | `/contact` |

Old URLs (e.g. `/programs`, `/healthcare`) redirect to the new activity pages.

## Updating content

- **Activity photos**: Add to `public/images/activities/`, then update `src/lib/activities.ts`
- **Page text**: Edit the corresponding `page.tsx` in `src/app/`
- **Scholarship forms**: Replace files in `public/documents/`
- **Bank details**: Edit defaults in `src/lib/donation.ts` or set env vars (see `.env.example`)
- **Navigation**: Update `src/components/Navbar.tsx` and `src/components/Footer.tsx`

## Forms (no backend)

- **Scholarship**: Download form → submit via WhatsApp (99723 66933)
- **Donations**: Bank transfer → email confirmation to prasannapattnaiktrust@gmail.com
- **Volunteers**: Email or phone via `/volunteer` or `/contact`

## Deploying to Vercel

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com) — auto-detects Next.js
3. Deploy — site goes live at your domain (e.g. sppmt.org)

Optional: add donation env vars in Vercel if bank details change without a code update.
