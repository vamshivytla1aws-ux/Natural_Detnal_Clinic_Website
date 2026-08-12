/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primaries
        forest: {
          50:  "#EAF0EC",
          100: "#C6D9CB",
          200: "#9DBFA7",
          300: "#74A583",
          400: "#4B8B5F",
          500: "#2A6B46",
          600: "#12372A",   // PRIMARY — deep luxury forest
          700: "#0D2920",
          800: "#091C15",
          900: "#040E0A",
        },
        sage: {
          50:  "#F4F6F2",
          100: "#E4E9DF",
          200: "#C9D3C0",
          300: "#AEBDA1",
          400: "#97A98F",   // BRAND SAGE
          500: "#7A9070",
          600: "#5E7557",
          700: "#465A40",
          800: "#2E3E2A",
          900: "#182114",
        },
        ivory: {
          50:  "#FFFFFF",
          100: "#FAF8F2",   // WARM IVORY — main background
          200: "#F3EFE4",   // SOFT CREAM — secondary background
          300: "#E8E2D4",
          400: "#D8D1BC",
          500: "#C4BCA4",
        },
        champagne: {
          50:  "#FDF8EF",
          100: "#F8EDDA",
          200: "#F0D9A9",
          300: "#E2BF77",
          400: "#C5A66A",   // MUTED GOLD ACCENT — use sparingly
          500: "#A8883E",
          600: "#8A6D2A",
        },
        charcoal: {
          50:  "#F5F5F3",
          100: "#E6E6E2",
          200: "#CCCCC5",
          300: "#A8A89F",
          400: "#6F746D",   // MUTED TEXT
          500: "#4A4E48",
          600: "#2F322D",
          700: "#252824",   // DEEP CHARCOAL — body text
          800: "#181A17",
          900: "#0C0D0B",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans:  ["Manrope", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["5rem",   { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["4rem",   { lineHeight: "1.08", letterSpacing: "-0.022em" }],
        "display-md": ["3.25rem",{ lineHeight: "1.1",  letterSpacing: "-0.018em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.014em" }],
      },
      boxShadow: {
        // Diffuse, forest-tinted — never harsh
        "sm":            "0 2px 8px rgba(18, 55, 42, 0.06)",
        "md":            "0 4px 20px rgba(18, 55, 42, 0.08), 0 1px 4px rgba(18, 55, 42, 0.04)",
        "lg":            "0 12px 40px rgba(18, 55, 42, 0.10), 0 3px 10px rgba(18, 55, 42, 0.05)",
        "xl":            "0 24px 64px rgba(18, 55, 42, 0.12), 0 6px 20px rgba(18, 55, 42, 0.06)",
        "card":          "0 2px 16px rgba(18, 55, 42, 0.07), 0 1px 4px rgba(18, 55, 42, 0.04)",
        "card-hover":    "0 16px 48px rgba(18, 55, 42, 0.13), 0 4px 14px rgba(18, 55, 42, 0.07)",
        "premium":       "0 8px 32px rgba(18, 55, 42, 0.09), 0 2px 8px rgba(18, 55, 42, 0.05)",
        "premium-hover": "0 20px 60px rgba(18, 55, 42, 0.14), 0 6px 18px rgba(18, 55, 42, 0.07)",
        "gold":          "0 4px 20px rgba(197, 166, 106, 0.18)",
        "inner-soft":    "inset 0 1px 3px rgba(18, 55, 42, 0.06)",
      },
      backgroundImage: {
        "gradient-forest":  "linear-gradient(135deg, #040E0A 0%, #12372A 50%, #2A6B46 100%)",
        "gradient-ivory":   "linear-gradient(180deg, #FAF8F2 0%, #F3EFE4 100%)",
        "gradient-sage":    "linear-gradient(135deg, #F4F6F2 0%, #E4E9DF 100%)",
        "gradient-premium": "linear-gradient(180deg, rgba(18, 55, 42, 0) 0%, rgba(18, 55, 42, 0.85) 100%)",
      },
      animation: {
        "reveal-up":   "revealUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "reveal-in":   "revealIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        "float":       "float 7s ease-in-out infinite",
        "pulse-slow":  "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        revealUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%":      { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-premium": "cubic-bezier(0.36, 0, 0.78, 0)",
      },
      borderRadius: {
        "btn":   "10px",
        "card":  "20px",
        "card-lg": "28px",
        "image": "36px",
        "xl":    "1rem",
        "2xl":   "1.5rem",
        "3xl":   "2rem",
        "4xl":   "3rem",
      },
      spacing: {
        "section-sm": "5rem",
        "section-md": "7.5rem",
        "section-lg": "10rem",
      },
    },
  },
  plugins: [],
};

export default config;
