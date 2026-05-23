export type ThemeId =
  | "neon-blue"
  | "neon-pink"
  | "matrix-green"
  | "orange-navy"
  | "purple-cyan";

export type ThemeMode = "dark" | "light";

export interface ThemeColors {
  background: string;
  backgroundSecondary: string;
  foreground: string;
  muted: string;
  card: string;
  border: string;
  accent: string;
  accentSecondary: string;
  accentRgb: string;
  accentSecondaryRgb: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  navbar: string;
  glow: string;
  shadow: string;
}

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  /** Preview swatches: [accent, surface] */
  preview: { dark: [string, string]; light: [string, string] };
  dark: ThemeColors;
  light: ThemeColors;
}

export const themes: Record<ThemeId, ThemeConfig> = {
  "neon-blue": {
    id: "neon-blue",
    name: "Neon Blue",
    preview: { dark: ["#00d4ff", "#000000"], light: ["#0284c7", "#f0f9ff"] },
    dark: {
      background: "#000000",
      backgroundSecondary: "#030712",
      foreground: "#f0f9ff",
      muted: "#94a3b8",
      card: "rgba(3, 7, 18, 0.75)",
      border: "rgba(0, 212, 255, 0.15)",
      accent: "#00d4ff",
      accentSecondary: "#38bdf8",
      accentRgb: "0, 212, 255",
      accentSecondaryRgb: "56, 189, 248",
      gradientFrom: "#00d4ff",
      gradientVia: "#0ea5e9",
      gradientTo: "#67e8f9",
      navbar: "rgba(0, 0, 0, 0.55)",
      glow: "rgba(0, 212, 255, 0.35)",
      shadow: "rgba(0, 212, 255, 0.2)",
    },
    light: {
      background: "#f0f9ff",
      backgroundSecondary: "#e0f2fe",
      foreground: "#0c4a6e",
      muted: "#64748b",
      card: "rgba(255, 255, 255, 0.85)",
      border: "rgba(2, 132, 199, 0.2)",
      accent: "#0284c7",
      accentSecondary: "#0ea5e9",
      accentRgb: "2, 132, 199",
      accentSecondaryRgb: "14, 165, 233",
      gradientFrom: "#0369a1",
      gradientVia: "#0284c7",
      gradientTo: "#0ea5e9",
      navbar: "rgba(240, 249, 255, 0.9)",
      glow: "rgba(2, 132, 199, 0.25)",
      shadow: "rgba(2, 132, 199, 0.15)",
    },
  },
  "neon-pink": {
    id: "neon-pink",
    name: "Neon Pink",
    preview: { dark: ["#ff2d95", "#000000"], light: ["#db2777", "#fdf2f8"] },
    dark: {
      background: "#000000",
      backgroundSecondary: "#0a0008",
      foreground: "#fdf2f8",
      muted: "#a1a1aa",
      card: "rgba(10, 0, 8, 0.78)",
      border: "rgba(255, 45, 149, 0.15)",
      accent: "#ff2d95",
      accentSecondary: "#f472b6",
      accentRgb: "255, 45, 149",
      accentSecondaryRgb: "244, 114, 182",
      gradientFrom: "#ff2d95",
      gradientVia: "#ec4899",
      gradientTo: "#fda4af",
      navbar: "rgba(0, 0, 0, 0.55)",
      glow: "rgba(255, 45, 149, 0.35)",
      shadow: "rgba(255, 45, 149, 0.22)",
    },
    light: {
      background: "#fdf2f8",
      backgroundSecondary: "#fce7f3",
      foreground: "#831843",
      muted: "#9d174d",
      card: "rgba(255, 255, 255, 0.88)",
      border: "rgba(219, 39, 119, 0.18)",
      accent: "#db2777",
      accentSecondary: "#ec4899",
      accentRgb: "219, 39, 119",
      accentSecondaryRgb: "236, 72, 153",
      gradientFrom: "#be185d",
      gradientVia: "#db2777",
      gradientTo: "#ec4899",
      navbar: "rgba(253, 242, 248, 0.92)",
      glow: "rgba(219, 39, 119, 0.22)",
      shadow: "rgba(219, 39, 119, 0.12)",
    },
  },
  "matrix-green": {
    id: "matrix-green",
    name: "Matrix Green",
    preview: { dark: ["#00ff41", "#000000"], light: ["#16a34a", "#f0fdf4"] },
    dark: {
      background: "#000000",
      backgroundSecondary: "#020a04",
      foreground: "#f0fdf4",
      muted: "#94a3b8",
      card: "rgba(2, 10, 4, 0.75)",
      border: "rgba(0, 255, 65, 0.12)",
      accent: "#00ff41",
      accentSecondary: "#39ff14",
      accentRgb: "0, 255, 65",
      accentSecondaryRgb: "57, 255, 20",
      gradientFrom: "#00ff41",
      gradientVia: "#22c55e",
      gradientTo: "#86efac",
      navbar: "rgba(0, 0, 0, 0.55)",
      glow: "rgba(0, 255, 65, 0.35)",
      shadow: "rgba(0, 255, 65, 0.2)",
    },
    light: {
      background: "#f0fdf4",
      backgroundSecondary: "#dcfce7",
      foreground: "#14532d",
      muted: "#4b5563",
      card: "rgba(255, 255, 255, 0.88)",
      border: "rgba(22, 163, 74, 0.2)",
      accent: "#16a34a",
      accentSecondary: "#22c55e",
      accentRgb: "22, 163, 74",
      accentSecondaryRgb: "34, 197, 94",
      gradientFrom: "#15803d",
      gradientVia: "#16a34a",
      gradientTo: "#22c55e",
      navbar: "rgba(240, 253, 244, 0.92)",
      glow: "rgba(22, 163, 74, 0.22)",
      shadow: "rgba(22, 163, 74, 0.12)",
    },
  },
  "orange-navy": {
    id: "orange-navy",
    name: "Orange Navy",
    preview: { dark: ["#ff6b35", "#0a1628"], light: ["#ea580c", "#f8fafc"] },
    dark: {
      background: "#0a1628",
      backgroundSecondary: "#0f1f38",
      foreground: "#f8fafc",
      muted: "#94a3b8",
      card: "rgba(15, 31, 56, 0.82)",
      border: "rgba(255, 107, 53, 0.18)",
      accent: "#ff6b35",
      accentSecondary: "#fb923c",
      accentRgb: "255, 107, 53",
      accentSecondaryRgb: "251, 146, 60",
      gradientFrom: "#ff6b35",
      gradientVia: "#f97316",
      gradientTo: "#fdba74",
      navbar: "rgba(10, 22, 40, 0.85)",
      glow: "rgba(255, 107, 53, 0.32)",
      shadow: "rgba(255, 107, 53, 0.18)",
    },
    light: {
      background: "#f8fafc",
      backgroundSecondary: "#e2e8f0",
      foreground: "#0f172a",
      muted: "#64748b",
      card: "rgba(255, 255, 255, 0.9)",
      border: "rgba(234, 88, 12, 0.2)",
      accent: "#ea580c",
      accentSecondary: "#f97316",
      accentRgb: "234, 88, 12",
      accentSecondaryRgb: "249, 115, 22",
      gradientFrom: "#c2410c",
      gradientVia: "#ea580c",
      gradientTo: "#f97316",
      navbar: "rgba(248, 250, 252, 0.92)",
      glow: "rgba(234, 88, 12, 0.2)",
      shadow: "rgba(234, 88, 12, 0.12)",
    },
  },
  "purple-cyan": {
    id: "purple-cyan",
    name: "Purple Cyan",
    preview: { dark: ["#a855f7", "#050510"], light: ["#7c3aed", "#faf5ff"] },
    dark: {
      background: "#050510",
      backgroundSecondary: "#0c0a1f",
      foreground: "#f5f3ff",
      muted: "#a1a1aa",
      card: "rgba(12, 10, 31, 0.8)",
      border: "rgba(168, 85, 247, 0.18)",
      accent: "#a855f7",
      accentSecondary: "#22d3ee",
      accentRgb: "168, 85, 247",
      accentSecondaryRgb: "34, 211, 238",
      gradientFrom: "#a855f7",
      gradientVia: "#8b5cf6",
      gradientTo: "#22d3ee",
      navbar: "rgba(5, 5, 16, 0.85)",
      glow: "rgba(168, 85, 247, 0.35)",
      shadow: "rgba(168, 85, 247, 0.2)",
    },
    light: {
      background: "#faf5ff",
      backgroundSecondary: "#f3e8ff",
      foreground: "#4c1d95",
      muted: "#6b7280",
      card: "rgba(255, 255, 255, 0.88)",
      border: "rgba(124, 58, 237, 0.18)",
      accent: "#7c3aed",
      accentSecondary: "#0891b2",
      accentRgb: "124, 58, 237",
      accentSecondaryRgb: "8, 145, 178",
      gradientFrom: "#6d28d9",
      gradientVia: "#7c3aed",
      gradientTo: "#0891b2",
      navbar: "rgba(250, 245, 255, 0.92)",
      glow: "rgba(124, 58, 237, 0.22)",
      shadow: "rgba(124, 58, 237, 0.12)",
    },
  },
};

export const themeList = Object.values(themes);

export const DEFAULT_THEME: ThemeId = "matrix-green";
export const DEFAULT_MODE: ThemeMode = "dark";

export const THEME_STORAGE_KEY = "portfolio-color-theme";
export const MODE_STORAGE_KEY = "portfolio-color-mode";

export function isValidThemeId(value: string): value is ThemeId {
  return value in themes;
}

export function isValidThemeMode(value: string): value is ThemeMode {
  return value === "dark" || value === "light";
}

export function getThemeColors(themeId: ThemeId, mode: ThemeMode): ThemeColors {
  return themes[themeId][mode];
}

export function applyThemeToDocument(themeId: ThemeId, mode: ThemeMode) {
  const root = document.documentElement;
  const c = getThemeColors(themeId, mode);

  root.setAttribute("data-theme", themeId);
  root.setAttribute("data-mode", mode);
  root.classList.toggle("light", mode === "light");

  root.style.setProperty("--theme-bg", c.background);
  root.style.setProperty("--theme-bg-secondary", c.backgroundSecondary);
  root.style.setProperty("--theme-fg", c.foreground);
  root.style.setProperty("--theme-muted", c.muted);
  root.style.setProperty("--theme-card", c.card);
  root.style.setProperty("--theme-border", c.border);
  root.style.setProperty("--theme-accent", c.accent);
  root.style.setProperty("--theme-accent-secondary", c.accentSecondary);
  root.style.setProperty("--theme-accent-rgb", c.accentRgb);
  root.style.setProperty("--theme-accent-secondary-rgb", c.accentSecondaryRgb);
  root.style.setProperty("--theme-gradient-from", c.gradientFrom);
  root.style.setProperty("--theme-gradient-via", c.gradientVia);
  root.style.setProperty("--theme-gradient-to", c.gradientTo);
  root.style.setProperty("--theme-navbar", c.navbar);
  root.style.setProperty("--theme-glow", c.glow);
  root.style.setProperty("--theme-shadow", c.shadow);

  root.style.setProperty("--color-background", c.background);
  root.style.setProperty("--color-foreground", c.foreground);
  root.style.setProperty("--color-muted", c.muted);
  root.style.setProperty("--color-card", c.card);
  root.style.setProperty("--color-border", c.border);
  root.style.setProperty("--color-accent", c.accent);
  root.style.setProperty("--color-accent-dim", c.accentSecondary);
}
