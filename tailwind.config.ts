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
        forest: {
          50:  "#F4F6F2",
          100: "#E4E9DF",
          200: "#C9D3C0",
          300: "#AEBDA1",
          400: "#97A98F",
          500: "#7A9070",
          600: "#12372A",   // BRAND PRIMARY
          700: "#0E2B21",
          800: "#091D16",
          900: "#05100B",
        },
        sage: {
          50:  "#F5F7F4",
          100: "#E5EBE3",
          200: "#CCD6C9",
          300: "#B0C0AD",
          400: "#98AA91",   // BRAND SAGE
          500: "#7A8E72",
          600: "#5E6E57",
          700: "#44503E",
          800: "#2B3226",
          900: "#141712",
        },
        ivory: {
          50:  "#FFFFFF",
          100: "#FAF8F3",   // WARM IVORY — main background
          200: "#F3EFE5",   // SOFT CREAM — secondary background
          300: "#E6DBC6",
          400: "#D6C7A9",
          500: "#C3B18B",
        },
        champagne: {
          50:  "#FDF8EF",
          100: "#F8EDDA",
          200: "#F0D9A9",
          300: "#E2BF77",
          400: "#C4A66C",   // MUTED CHAMPAGNE
          500: "#A8883E",
          600: "#8A6D2A",
        },
        charcoal: {
          50:  "#F7F7F7",
          100: "#EBECEC",
          200: "#D1D3D2",
          300: "#A3A7A5",
          400: "#6D746F",   // MUTED TEXT
          500: "#4A4F4C",
          600: "#363A38",
          700: "#262A27",   // DEEP CHARCOAL
          800: "#1A1C1A",
          900: "#0D0E0D",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        "sm":            "0 2px 8px rgba(18, 55, 42, 0.04)",
        "md":            "0 4px 16px rgba(18, 55, 42, 0.06), 0 1px 4px rgba(18, 55, 42, 0.03)",
        "lg":            "0 8px 24px rgba(18, 55, 42, 0.08), 0 2px 8px rgba(18, 55, 42, 0.04)",
        "card":          "0 2px 12px rgba(18, 55, 42, 0.05), 0 1px 4px rgba(18, 55, 42, 0.03)",
        "card-hover":    "0 12px 32px rgba(18, 55, 42, 0.08), 0 4px 12px rgba(18, 55, 42, 0.04)",
        "premium":       "0 6px 24px rgba(18, 55, 42, 0.06), 0 2px 8px rgba(18, 55, 42, 0.03)",
        "premium-hover": "0 16px 48px rgba(18, 55, 42, 0.10), 0 6px 16px rgba(18, 55, 42, 0.05)",
      },
      backgroundImage: {
        "gradient-forest":  "linear-gradient(135deg, #091D16 0%, #12372A 50%, #2A6B46 100%)",
        "gradient-ivory":   "linear-gradient(180deg, #FAF8F3 0%, #F3EFE5 100%)",
        "gradient-sage":    "linear-gradient(135deg, #F4F6F2 0%, #E4E9DF 100%)",
        "gradient-premium": "linear-gradient(180deg, rgba(18, 55, 42, 0) 0%, rgba(18, 55, 42, 0.8) 100%)",
      },
      animation: {
        "fade-up":   "fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in":   "fadeIn 0.5s ease-out forwards",
        "float":     "float 7s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      borderRadius: {
        "btn":   "0.5rem",
        "card":  "1.25rem",
        "card-lg": "1.75rem",
        "image": "2rem",
        "xl":    "1rem",
        "2xl":   "1.5rem",
        "3xl":   "2rem",
        "4xl":   "3rem",
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
      },
    },
  },
  plugins: [],
};

export default config;
