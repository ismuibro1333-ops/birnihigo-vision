import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "#E5E7EB", // Clean light gray border
        input: "#F3F4F6",
        ring: "#FBBF24",   // Yellow focus ring
        background: "#FFFFFF", // Pure White Background
        foreground: "#1A1A1A", // Deep Dark Text for readability
        primary: {
          // THIS IS YOUR BRIGHT YELLOW
          DEFAULT: "#FBBF24",
          foreground: "#000000", // Black text on yellow buttons
        },
        secondary: {
          DEFAULT: "#F3F4F6",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F9FAFB",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#FBBF24", // Yellow accents
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        onyx: "#1F2937",
        emerald: "#10B981",
        gold: {
          DEFAULT: "#FBBF24", // Matched to logo1
          light: "#FDE68A",
        },
        sidebar: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
          primary: "#FBBF24",
          "primary-foreground": "#000000",
          accent: "#F3F4F6",
          "accent-foreground": "#1A1A1A",
          border: "#E5E7EB",
          ring: "#FBBF24",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
        "slide-left": "slide-left 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
