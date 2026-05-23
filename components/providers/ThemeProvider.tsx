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
  applyThemeToDocument,
  DEFAULT_MODE,
  DEFAULT_THEME,
  getThemeColors,
  isValidThemeId,
  isValidThemeMode,
  MODE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  themes,
  type ThemeColors,
  type ThemeConfig,
  type ThemeId,
  type ThemeMode,
} from "@/lib/themes";

interface ThemeContextType {
  themeId: ThemeId;
  mode: ThemeMode;
  theme: ThemeConfig;
  colors: ThemeColors;
  setTheme: (id: ThemeId) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  isReady: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(DEFAULT_THEME);
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_MODE);
  const [isReady, setIsReady] = useState(false);

  const apply = useCallback((id: ThemeId, m: ThemeMode) => {
    applyThemeToDocument(id, m);
  }, []);

  const setTheme = useCallback(
    (id: ThemeId) => {
      setThemeId(id);
      apply(id, mode);
      localStorage.setItem(THEME_STORAGE_KEY, id);
    },
    [apply, mode]
  );

  const setMode = useCallback(
    (m: ThemeMode) => {
      setModeState(m);
      apply(themeId, m);
      localStorage.setItem(MODE_STORAGE_KEY, m);
    },
    [apply, themeId]
  );

  const toggleMode = useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  useEffect(() => {
    document.documentElement.classList.add("theme-transition");
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const storedMode = localStorage.getItem(MODE_STORAGE_KEY);
    const initialTheme =
      storedTheme && isValidThemeId(storedTheme) ? storedTheme : DEFAULT_THEME;
    const initialMode =
      storedMode && isValidThemeMode(storedMode) ? storedMode : DEFAULT_MODE;
    setThemeId(initialTheme);
    setModeState(initialMode);
    apply(initialTheme, initialMode);
    setIsReady(true);
  }, [apply]);

  const colors = useMemo(() => getThemeColors(themeId, mode), [themeId, mode]);

  const value = useMemo(
    () => ({
      themeId,
      mode,
      theme: themes[themeId],
      colors,
      setTheme,
      setMode,
      toggleMode,
      isReady,
    }),
    [themeId, mode, colors, setTheme, setMode, toggleMode, isReady]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className="theme-transition min-h-screen"
        style={{ visibility: isReady ? "visible" : "hidden" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
