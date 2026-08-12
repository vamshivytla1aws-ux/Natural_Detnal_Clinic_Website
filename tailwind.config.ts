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
        ivory: {
          50: "#FEFEFE",
          100: "#FAFAF7",
          200: "#F5F5EF",
          300: "#EDEDDF",
          400: "#E0E0CC",
        },
        forest: {
          50: "#EEF4F0",
          100: "#D4E4D9",
          200: "#A9C9B3",
          300: "#7DAE8D",
          400: "#529367",
          500: "#2D6B46",
          600: "#1E3D2F",
          700: "#162D22",
          800: "#0F1E17",
          900: "#070F0B",
        },
        sage: {
          50: "#F2F6F2",
          100: "#E0EAE1",
          200: "#C1D5C3",
          300: "#A2C0A5",
          400: "#83AB87",
          500: "#5A7A5E",
          600: "#4A6A4E",
          700: "#3A5A3E",
          800: "#2A4A2E",
          900: "#1A3A1E",
        },
        mint: {
          50: "#F0F7F0",
          100: "#DDEEDE",
          200: "#BBDDBD",
          300: "#99CC9C",
          400: "#A8C5A0",
          500: "#77BB7B",
          600: "#5AA05E",
        },
        champagne: {
          50: "#FDF9F0",
          100: "#F8F0DC",
          200: "#F1E1B9",
          300: "#E8CC8A",
          400: "#C9A96E",
          500: "#B8963A",
          600: "#9A7D2E",
        },
        charcoal: {
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#9E9E9E",
          400: "#757575",
          500: "#616161",
          600: "#424242",
          700: "#2C2C2C",
          800: "#1A1A1A",
          900: "#0A0A0A",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        "premium": "0 4px 24px rgba(30, 61, 47, 0.08), 0 1px 4px rgba(30, 61, 47, 0.04)",
        "premium-hover": "0 12px 48px rgba(30, 61, 47, 0.16), 0 4px 16px rgba(30, 61, 47, 0.08)",
        "card": "0 2px 16px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 32px rgba(30, 61, 47, 0.14), 0 2px 8px rgba(30, 61, 47, 0.06)",
        "glow": "0 0 24px rgba(90, 122, 94, 0.2)",
        "gold": "0 4px 24px rgba(201, 169, 110, 0.2)",
      },
      backgroundImage: {
        "gradient-forest": "linear-gradient(135deg, #1E3D2F 0%, #2D6B46 50%, #1E3D2F 100%)",
        "gradient-ivory": "linear-gradient(180deg, #FAFAF7 0%, #F5F5EF 100%)",
        "gradient-mint": "linear-gradient(135deg, #EEF4F0 0%, #DDEEDE 100%)",
        "gradient-hero": "linear-gradient(135deg, #0F1E17 0%, #1E3D2F 40%, #2D6B46 100%)",
        "gradient-premium": "linear-gradient(180deg, rgba(30, 61, 47, 0) 0%, rgba(30, 61, 47, 0.8) 100%)",
        "texture-subtle": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A8C5A0' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
