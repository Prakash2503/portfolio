"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function useTranslations() {
  return useLocale();
}
