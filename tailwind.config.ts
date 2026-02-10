import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-serif)", "Playfair Display", "serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      fontSize: {
        display: ["2rem", { lineHeight: "1.2" }],
        h1: ["1.5rem", { lineHeight: "1.3" }],
        h2: ["1.25rem", { lineHeight: "1.3" }],
        "body-lg": ["1rem", { lineHeight: "1.5" }],
        "body-md": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
        button: ["0.875rem", { lineHeight: "1" }],
      },
      borderRadius: {
        "radius-sm": "8px",
        "radius-md": "16px",
        "radius-lg": "24px",
        "radius-full": "9999px",
      },
      boxShadow: {
        "elevation-sm": "0 4px 12px rgba(0, 0, 0, 0.05)",
        "elevation-md": "0 8px 24px rgba(0, 0, 0, 0.12)",
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        "primary-variant": "var(--color-primary-variant)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "sage-light": "var(--color-sage-light)",
        "sage-dark": "var(--color-sage-dark)",
        "sage-dark-icon-bg": "var(--color-sage-dark-icon-bg)",
        "sage-dark-title": "var(--color-sage-dark-title)",
        "sage-dark-desc": "var(--color-sage-dark-desc)",
        "primary-on-dark": "var(--color-primary-on-dark)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        foreground: "var(--color-text-primary)",
        muted: "var(--color-text-secondary)",
        error: "var(--color-error)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
export default config;
