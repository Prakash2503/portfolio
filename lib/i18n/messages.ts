import en from "@/messages/en.json";
import de from "@/messages/de.json";
import ja from "@/messages/ja.json";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/types";

export const messages: Record<Locale, Messages> = { en, de, ja };
