import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { CurrentlyAt } from "@/components/CurrentlyAt";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { JsonLd } from "@/components/JsonLd";
import { PageBackground } from "@/components/PageBackground";
import { siteConfig } from "@/data/portfolio";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <JsonLd />
        <ThemeProvider>
          <PageBackground />
          <ScrollProgress />
          <AnimatedCursor />
          <Navbar />
          <CurrentlyAt />
          <main className="relative z-[1] overflow-x-hidden">{children}</main>
          <Footer />
          <MobileStickyBar />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
