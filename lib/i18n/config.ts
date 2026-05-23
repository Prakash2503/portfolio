export const locales = ["en", "de", "ja"] as const;
export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "portfolio-locale";

export const localeMeta: Record<
  Locale,
  { label: string; nativeLabel: string; flag: string; htmlLang: string }
> = {
  en: { label: "English", nativeLabel: "English", flag: "🇬🇧", htmlLang: "en" },
  de: { label: "German", nativeLabel: "Deutsch", flag: "🇩🇪", htmlLang: "de" },
  ja: { label: "Japanese", nativeLabel: "日本語", flag: "🇯🇵", htmlLang: "ja" },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("de")) return "de";
  if (lang.startsWith("ja")) return "ja";
  return "en";
}
