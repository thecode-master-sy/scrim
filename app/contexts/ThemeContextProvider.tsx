"use client";
import * as React from "react";

const ThemeContext = React.createContext<{
  theme: string | null;
  toggleTheme: (value?: string) => void;
} | null>(null);

export function useThemeContext() {
  return React.useContext(ThemeContext);
}

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<string | null>(() => {
    if (typeof localStorage !== undefined && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }

    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      return "dark";
    }

    return "light";
  });

  function toggleTheme(value?: string) {
    const toggleValue = theme === "light" ? "dark" : "light";

    const newThemeValue = value ? value : toggleValue;

    localStorage.setItem("theme", newThemeValue);
    setTheme(newThemeValue);
  }

  React.useEffect(() => {
    const root = document.documentElement;

    if (theme == "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
