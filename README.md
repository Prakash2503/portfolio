# IT Staff Portfolio — AI Engineer & Full Stack Developer

A premium, animated portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Dark/light theme toggle
- Glassmorphism UI with gradient accents
- Particle background & animated cursor
- Scroll progress & back-to-top
- Framer Motion animations (scroll, hover, tilt)
- Fully responsive layout
- SEO metadata
- GitHub stats section

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `data/portfolio.ts` with your:

- Name, email, social links
- Projects, experience, skills
- GitHub username for stats cards

Place your photo at `public/images/profile.jpg` and resume at `public/resume.pdf`.

## Project Structure

```
app/           → Layout & page
components/    → UI & sections
data/          → Portfolio content
lib/           → Utils & animations
public/        → Static assets
styles/        → Global CSS
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL` — your deployed URL (for SEO & Open Graph)
- `WEB3FORMS_ACCESS_KEY` — optional but recommended, from [web3forms.com](https://web3forms.com)

### Contact form → your email

Messages are sent to **prakashkrishnan526@gmail.com**:

1. **Default:** [FormSubmit.co](https://formsubmit.co) — works without any API key. The **first** test message triggers a one-time confirmation email to your inbox; click the link to activate.
2. **Recommended:** Add `WEB3FORMS_ACCESS_KEY` in `.env.local` (and Vercel env vars when deployed) for faster, more reliable delivery.

Test locally after `npm run dev` — submit the contact form once and check your Gmail (including spam).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import at [vercel.com](https://vercel.com) → New Project
3. Add environment variables from `.env.example`
4. Deploy — your portfolio will be live at `*.vercel.app`

Add the live URL to your [LinkedIn](https://www.linkedin.com/in/prakash-s-962b6a25a/) and [GitHub](https://github.com/Prakash2503) profiles.

## Build

```bash
npm run build
npm start
```
