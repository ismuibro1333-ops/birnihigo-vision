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
        // Official Brand Font (Page 15 of Guidelines)
        display: ["Parkinsans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "#E5E7EB",
        input: "#F3F4F6",
        ring: "#FEA42A", // Deep Saffron for focus states
        background: "#FFFFFF",
        foreground: "#4F3C1C", // Café Noir (Deep Earthy Brown)

        primary: {
          DEFAULT: "#4F3C1C", // Main Corporate Color: Café Noir
          foreground: "#EFE7DC", // White Chocolate text on brown
        },
        secondary: {
          DEFAULT: "#FEA42A", // Brand Secondary: Deep Saffron
          foreground: "#4F3C1C",
        },
        accent: {
          DEFAULT: "#FFD275", // Dandelion Highlight
          foreground: "#4F3C1C",
        },
        muted: {
          DEFAULT: "#EFE7DC", // White Chocolate (Creamy off-white)
          foreground: "#4F3C1C",
        },
        // Direct mapping for Birni-specific utility classes
        birni: {
          brown: "#4F3C1C",    // The rich earthy tone from your video
          orange: "#FEA42A",   // The warm sunset orange
          yellow: "#FFD275",   // The soft highlight yellow
          cream: "#EFE7DC",    // The background/section color
          bronze: "#CD8C24",   // Deep accent color
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#4F3C1C",
        },
        card: {
          DEFAULT: "#FFFFFF",
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
        // Added for the "Scrollytelling" feel Milkias wants
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
} satisfies Config;
