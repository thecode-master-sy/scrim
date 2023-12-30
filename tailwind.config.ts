import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        md: "800px",
        lg: "1200px",
      },
      colors: {
        background: "var(--scrim-background)",
        foreground: "var(--scrim-text-foreground)",
        separator: "var(--scrim-separator-color)",
        border: "var(--scrim-border)",
        scrim: {
          white: "var(--scrim-background-white)",
          sidebar: "var(--scrim-side-bar-color)",
          ash: {
            100: "var(--scrim-neutral-ash)",
          },
          selected: "var(--scrim-nav-indicator)",
          input: {
            bg: "var(--scrim-input-color)",
            border: "var(--scrim-input-border)",
            hover: "var(--scrim-input-border-hover)",
            "bg-dark": "var(--scrim-input-color-dark)",
            "bg-light": "var(--scrim-input-color-dark)",
          },
          background: {
            light: {
              100: "var(--scrim-background-light-100)",
              200: "var(--scrim-background-light-200)",
              300: "var(--scrim-background-light-300)",
              400: "var(--scrim-background-light-400)",
              500: "var(--scrim-background-light-500)",
              600: "var(--scrim-background-light-600)",
            },
          },
          "button-stroke": "var(--scrim-button-stroke)",
          pellet: {
            color: "var(--scrim-pellet-color)",
            border: "var(--scrim-pellet-border)",
            selected: "var(--scrim-pellet-selected-border)"
          },
          overlay: "var(--scrim-overlay-bg)",
          card: {
            bg: "var(--scrim-card-bg)",
            border: "var(--scrim-card-border)"
          }
        },
        primary: {
          dark: "var(--scrim-primary)",
          light: "var(--scrim-primary-light)",
        },
      },
      backgroundImage: {
        "scrim-bg-gradient": "var(--scrim-background-gradient)",
        "scrim-primary-gradient": "var(--scrim-primary-gradient)",
        "scrim-bg-gradient-desktop": "var(--scrim-background-gradient-desktop)",
      },
      fontSize: {
        sm: "var(--fs-small)",
        base: "var(--fs-base)",
        mid: "var(--fs-mid)",
        logo: "var(--fs-logo)",
        lg: "var(--fs-large)",
      },
      boxShadow: {
        "scrim-button-shadow-sm": "var(--scrim-button-shadow-sm)",
        "scrim-button-shadow-md": "var(--scrim-button-shadow-md)",
        "scrim-button-shadow-lg": "var(--scrim-button-shadow-lg)",
      },
    },
  },
  plugins: [],
};
export default config;
