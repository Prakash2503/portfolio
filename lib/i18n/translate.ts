import type { Messages } from "@/lib/i18n/types";

type NestedKeyOf<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends string
        ? `${Prefix}${K}`
        : T[K] extends readonly string[]
          ? `${Prefix}${K}`
          : NestedKeyOf<T[K], `${Prefix}${K}.`>;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeyOf<Messages>;

export function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export function translate(
  dictionary: Messages,
  key: string,
  params?: Record<string, string | number>
): string {
  const value = getNestedValue(dictionary, key);

  if (typeof value !== "string") {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Missing translation: ${key}`);
    }
    return key;
  }

  if (!params) return value;

  return Object.entries(params).reduce(
    (str, [k, v]) => str.replaceAll(`{${k}}`, String(v)),
    value
  );
}

export function translateArray(dictionary: Messages, key: string): string[] {
  const value = getNestedValue(dictionary, key);
  if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
    return value as string[];
  }
  return [];
}
