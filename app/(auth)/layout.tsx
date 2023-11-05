"use client";
import { useThemeContext } from "../contexts/ThemeContextProvider";
import { cn } from "../lib/utils";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeContext = useThemeContext();
  const layoutStyles = {
    default: "min-h-screen  bg-no-repeat p-4",
    darkmode: "bg-scrim-bg-gradient md:bg-scrim-bg-gradient-desktop",
    lightmode: "bg-background",
  };
  const combinedStyles =
    themeContext?.theme == "dark"
      ? cn(layoutStyles.default, layoutStyles.darkmode)
      : cn(layoutStyles.default, layoutStyles.lightmode);
  return <div className={combinedStyles}>{children}</div>;
}
