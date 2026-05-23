import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { LocaleFade } from "@/components/LocaleFade";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { CurrentlyAt } from "@/components/CurrentlyAt";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { JsonLd } from "@/components/JsonLd";
import { PageBackground } from "@/components/PageBackground";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LoadingScreen } from "@/components/LoadingScreen";
import { siteConfig } from "@/data/portfolio";
import { DEFAULT_MODE, DEFAULT_THEME, getThemeColors } from "@/lib/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prakash-portfolio.vercel.app";
const defaultColors = getThemeColors(DEFAULT_THEME, DEFAULT_MODE);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | AI Engineer & Full Stack Developer | Chennai`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.tagline} ${siteConfig.role} based in Chennai. B.Tech AI & Data Science. View projects on GitHub @Prakash2503.`,
  keywords: [
    "Prakash S",
    "AI Engineer Chennai",
    "Full Stack Developer",
    "Machine Learning",
    "Computer Vision",
    "Next.js Portfolio",
    "Himitsu Labs",
    "Prakash2503",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | AI Engineer Portfolio`,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} Portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI Engineer Portfolio`,
    description: siteConfig.tagline,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      de: `${siteUrl}?lang=de`,
      ja: `${siteUrl}?lang=ja`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const c = defaultColors;

  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme={DEFAULT_THEME}
      data-mode={DEFAULT_MODE}
      style={
        {
          "--theme-bg": c.background,
          "--theme-bg-secondary": c.backgroundSecondary,
          "--theme-fg": c.foreground,
          "--theme-muted": c.muted,
          "--theme-card": c.card,
          "--theme-border": c.border,
          "--theme-accent": c.accent,
          "--theme-accent-secondary": c.accentSecondary,
          "--theme-accent-rgb": c.accentRgb,
          "--theme-accent-secondary-rgb": c.accentSecondaryRgb,
          "--theme-gradient-from": c.gradientFrom,
          "--theme-gradient-via": c.gradientVia,
          "--theme-gradient-to": c.gradientTo,
          "--theme-navbar": c.navbar,
          "--theme-glow": c.glow,
          "--theme-shadow": c.shadow,
        } as CSSProperties
      }
    >
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <JsonLd />
        <ThemeProvider>
          <LocaleProvider>
            <LoadingScreen />
            <PageBackground />
            <ScrollProgress />
            <AnimatedCursor />
            <Navbar />
            <CurrentlyAt />
            <LocaleFade>
              <main className="relative z-[1] overflow-x-hidden">{children}</main>
              <Footer />
            </LocaleFade>
            <MobileStickyBar />
            <BackToTop />
            <ThemeSwitcher />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
