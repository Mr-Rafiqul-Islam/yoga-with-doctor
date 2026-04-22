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
        body: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
        headline: ["var(--font-headline)", "ui-sans-serif", "sans-serif"],
        accent: ["var(--font-accent)", "ui-serif", "serif"],
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
        "4xl": "2rem",
      },
      boxShadow: {
        "elevation-sm": "0 4px 12px rgba(0, 0, 0, 0.05)",
        "elevation-md": "0 8px 24px rgba(0, 0, 0, 0.12)",
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 2px 10px rgba(0, 0, 0, 0.03)",
        glow: "0 0 15px rgba(0, 168, 106, 0.3)",
        "glow-error": "0 0 40px 0 rgba(239, 68, 68, 0.15)",
        "glow-gold": "0 0 20px -5px rgba(245, 158, 11, 0.3), 0 10px 10px -5px rgba(245, 158, 11, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "loading-progress": "loading-progress 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "leaf-fall-1": "leaf-fall 8s linear infinite",
        "leaf-fall-2": "leaf-fall 10s linear infinite",
        "leaf-fall-3": "leaf-fall 7s linear infinite",
        "breathe-slow": "breathe 6s ease-in-out infinite",
        "bounce-slight": "bounce-slight 2s ease-in-out infinite",
        "bounce-slow": "bounce-slow 3s infinite",
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
        float: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0.8" },
          "50%": { transform: "translateY(15px) rotate(10deg)", opacity: "1" },
          "100%": { transform: "translateY(0) rotate(0deg)", opacity: "0.8" },
        },
        "leaf-fall": {
          "0%": { transform: "translate(0, -20px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translate(20px, 100px) rotate(45deg)", opacity: "0" },
        },
        "bounce-slight": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      colors: {
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        "primary-variant": "var(--color-primary-variant)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
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

        /* PLID funnel (tokens scoped on .plid-funnel) */
        "on-surface": "rgb(var(--color-on-surface-rgb) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary-rgb) / <alpha-value>)",
        "on-primary-container": "var(--color-on-primary-container)",
        "primary-container": "rgb(var(--color-primary-container-rgb) / <alpha-value>)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "surface-container": "rgb(var(--color-surface-container-rgb) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-container-low-rgb) / <alpha-value>)",
        "surface-container-high": "rgb(var(--color-surface-container-high-rgb) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--color-surface-container-lowest-rgb) / <alpha-value>)",
        outline: "var(--color-outline)",
        "outline-variant": "rgb(var(--color-outline-variant-rgb) / <alpha-value>)",
        "secondary-container": "rgb(var(--color-secondary-container-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
