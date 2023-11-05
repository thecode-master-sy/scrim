"use client";
import * as React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = React.createContext<{
  theme: string;
  setTheme: (value: string) => void;
} | null>(null);

export function useThemeContext() {
  return React.useContext(ThemeContext);
}

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useLocalStorage("theme", () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return "dark";

    return "light";
  });

  React.useEffect(() => {
    const root = document.documentElement;

    if (theme == "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
