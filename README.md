# Shri Prasanna Pattnaik Memorial Trust - Website

Official website for the Shri Prasanna Pattnaik Memorial Trust, established 2025 in Bhuban, Dhenkanal District, Odisha.

## Tech stack

- **Next.js 16** (React 19) with App Router
- **Tailwind CSS 4** for styling
- **Formspree** for contact/donate/volunteer forms (email-based, free tier)
- **Static site generation** (SSG) for fast loading and free hosting

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Page             | Path               |
|------------------|--------------------|
| Homepage         | `/`                |
| Our Founder      | `/founder`         |
| About Us         | `/about`           |
| Healthcare       | `/healthcare`      |
| Education        | `/education`       |
| Infrastructure   | `/infrastructure`  |
| Community        | `/community`       |
| Gallery          | `/gallery`         |
| Contact          | `/contact`         |
| Donate           | `/donate`          |
| Volunteer        | `/join`            |

## Setting up form submissions

The contact, donate, and volunteer forms use [Formspree](https://formspree.io) (free, 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID (looks like `xyzabcde`)
3. Replace `YOUR_FORMSPREE_ID` in these files:
   - `src/app/contact/ContactForm.tsx`
   - `src/app/donate/DonateForm.tsx`
   - `src/app/join/JoinForm.tsx`

## Deploying to Vercel (recommended)

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" and select your repository
4. Vercel auto-detects Next.js — click "Deploy"
5. Your site is live at `your-project.vercel.app`

### Connecting a custom domain

1. In Vercel dashboard, go to Settings > Domains
2. Add your domain (e.g., `sppmt.org`)
3. Update your domain's DNS records as instructed by Vercel

## Updating content

- **Images**: Replace files in `public/images/`
- **Text content**: Edit the corresponding `page.tsx` file in `src/app/`
- **Trustee details**: Update the `TRUSTEES` array in `src/app/about/page.tsx`
- **Contact info**: Update the Footer component in `src/components/Footer.tsx` and the Contact page
- **Navigation**: Update `NAV_ITEMS` in `src/components/Navbar.tsx`

## Color palette

| Color         | Hex       | Usage                     |
|---------------|-----------|---------------------------|
| Orange        | `#E65100` | Primary buttons, accents  |
| Forest Green  | `#1B5E20` | Headings, footer          |
| Gold          | `#D4A017` | Highlights, borders       |
| Cream         | `#FFF8E7` | Light backgrounds         |
| Navy          | `#1A237E` | Text accents              |
