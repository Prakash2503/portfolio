# IT Portfolio — Cyberpunk Theme Studio

A futuristic developer portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**, featuring a fully dynamic multi-theme customization system.

## Features

- **5 preset cyber themes**: Neon Blue, Neon Pink, Matrix Green, Orange Navy, Purple Cyan
- **Multilingual** — English, German (Deutsch), Japanese (日本語) with instant client-side switching
- **Dark + light mode** for every theme (toggle in theme panel or quick sun/moon button)
- **Instant global theming** via CSS variables (backgrounds, text, buttons, cards, glow, gradients, navbar)
- **Floating theme switcher** with color preview circles
- **localStorage persistence** across page refreshes
- **Loading screen**, animated cursor glow, particle/grid background
- **Project filtering** by category (AI/ML, Web, Full Stack)
- Sections: Hero, About, Skills, Experience, Projects, Certifications, Contact, Footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Internationalization

Translations live in `messages/en.json`, `messages/de.json`, and `messages/ja.json`. Use the `useTranslations()` hook:

```tsx
const { t, locale, setLocale } = useTranslations();
t("about.title");
```

Locale is stored in `portfolio-locale`. Browser language is auto-detected on first visit. SEO hreflang alternates: `?lang=en|de|ja`.

## Theme System

Themes are defined in `lib/themes.ts` and applied through `ThemeProvider` (React Context). Theme ID (`portfolio-color-theme`) and mode (`portfolio-color-mode`: `dark` | `light`) persist in localStorage.

## Customize Content

Edit `data/portfolio.ts` for personal info, projects, skills, experience, and certifications.

## Tech Stack

- Next.js App Router
- Tailwind CSS v4
- Framer Motion
- Lucide React
