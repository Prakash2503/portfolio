"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const socials = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-lime-500/10 bg-black/40 py-10 pb-28 backdrop-blur-md md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold gradient-text">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-500">Next.js 15 · {year}</p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-400 transition-colors hover:text-lime-400"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
