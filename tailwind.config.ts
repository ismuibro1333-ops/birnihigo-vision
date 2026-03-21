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
        display: ["Parkinsans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        cafeNoir: "#4F3C1C",
        deepSaffron: "#FEA42A",
        whiteChocolate: "#EFE7DC",
        dandelion: "#FFD275",
        bronze: "#CD8C24",
        border: "#E5E7EB",
        input: "#F3F4F6",
        ring: "#FEA42A",
        background: "#EFE7DC",
        foreground: "#4F3C1C",
        primary: {
          DEFAULT: "#4F3C1C",
          foreground: "#EFE7DC",
        },
        secondary: {
          DEFAULT: "#FEA42A",
          foreground: "#4F3C1C",
        },
        accent: {
          DEFAULT: "#FFD275",
          foreground: "#4F3C1C",
        },
        muted: {
          DEFAULT: "#EFE7DC",
          foreground: "#4F3C1C",
        },
        birni: {
          brown: "#4F3C1C",
          orange: "#FEA42A",
          yellow: "#FFD275",
          cream: "#EFE7DC",
          bronze: "#CD8C24",
        },
        popover: {
          DEFAULT: "#EFE7DC",
          foreground: "#4F3C1C",
        },
        card: {
          DEFAULT: "#F9F5F0",
          foreground: "#4F3C1C",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;