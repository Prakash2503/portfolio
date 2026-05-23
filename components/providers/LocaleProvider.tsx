"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  detectBrowserLocale,
  isValidLocale,
  localeMeta,
  type Locale,
} from "@/lib/i18n/config";
import { messages } from "@/lib/i18n/messages";
import type { Messages } from "@/lib/i18n/types";
import { translate, translateArray } from "@/lib/i18n/translate";

interface LocaleContextType {
  locale: Locale;
  messages: Messages;
  isReady: boolean;
  isSwitching: boolean;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  tArray: (key: string) => string[];
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [isReady, setIsReady] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  const setLocale = useCallback((next: Locale) => {
    if (next === locale) return;

    setIsSwitching(true);
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = localeMeta[next].htmlLang;

    window.setTimeout(() => setIsSwitching(false), 320);
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.add("locale-transition");
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang");
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    const initial =
      langParam && isValidLocale(langParam)
        ? langParam
        : stored && isValidLocale(stored)
          ? stored
          : detectBrowserLocale();
    setLocaleState(initial);
    document.documentElement.lang = localeMeta[initial].htmlLang;
    setIsReady(true);
  }, []);

  const dictionary = messages[locale];

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) =>
      translate(dictionary, key, params),
    [dictionary]
  );

  const tArray = useCallback(
    (key: string) => translateArray(dictionary, key),
    [dictionary]
  );

  const value = useMemo(
    () => ({
      locale,
      messages: dictionary,
      isReady,
      isSwitching,
      setLocale,
      t,
      tArray,
    }),
    [locale, dictionary, isReady, isSwitching, setLocale, t, tArray]
  );

  return (
    <LocaleContext.Provider value={value}>
      <div
        className="locale-transition min-h-screen"
        style={{ visibility: isReady ? "visible" : "hidden" }}
      >
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
