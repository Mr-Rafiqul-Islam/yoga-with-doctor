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
        card: "0 2px 10px rgba(0, 0, 0, 0.03)",
      },
      animation: {
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "loading-progress": "loading-progress 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "loading-progress": {
          "0%": { width: "0%", transform: "translateX(-100%)" },
          "50%": { width: "70%", transform: "translateX(0)" },
          "100%": { width: "0%", transform: "translateX(200%)" },
        },
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
