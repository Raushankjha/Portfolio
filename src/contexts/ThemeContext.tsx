import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const theme = selectedTheme ?? systemTheme;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    preference.addEventListener("change", updateSystemTheme);
    return () => preference.removeEventListener("change", updateSystemTheme);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setSelectedTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
