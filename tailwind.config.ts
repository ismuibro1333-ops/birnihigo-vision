import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        // STRICT COMPLIANCE: Page 15 of Guidelines
        display: ["Parkinsans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        // --- START OF GREEN LINE SECTION ---
        border: "#E5E7EB", 
        input: "#F3F4F6",
        ring: "#FBBF24", 
        background: "#EFE7DC", // White Chocolate (Page Background)
        foreground: "#4F3C1C", // Café Noir (Main Text)
        primary: {
          DEFAULT: "#4F3C1C", // Café Noir (Brand Primary)
          foreground: "#EFE7DC",
        },
        secondary: {
          DEFAULT: "#FEA42A", // Deep Saffron (Brand Secondary)
          foreground: "#4F3C1C",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F9F5F0", // Off-White
          foreground: "#4F3C1C",
        },
        accent: {
          DEFAULT: "#FFD275", // Dandelion
          foreground: "#4F3C1C",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#4F3C1C",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#4F3C1C",
        },
        // --- CUSTOM BRAND TOKENS ---
        onyx: "#1F2937",
        emerald: "#10B981",
        gold: {
          DEFAULT: "#FEA42A", 
          light: "#FFD275",
        },
        sidebar: {
          DEFAULT: "#FFFFFF",
          foreground: "#4F3C1C",
          primary: "#4F3C1C",
          "primary-foreground": "#EFE7DC",
          accent: "#F3F4F6",
          "accent-foreground": "#4F3C1C",
          border: "#E5E7EB",
          ring: "#FEA42A",
        },
        // --- END OF GREEN LINE SECTION ---
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
