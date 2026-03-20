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
        // As per Page 15 of the Brand Guidelines
        display: ["Parkinsans", "sans-serif"], 
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "#E5E7EB", 
        input: "#F3F4F6",
        ring: "#FEA42A",   // Deep Saffron for focus rings
        background: "#FFFFFF", 
        foreground: "#4F3C1C", // Café Noir for all primary text
        primary: {
          // Official Primary Color: Café Noir (Page 13)
          DEFAULT: "#4F3C1C", 
          foreground: "#EFE7DC", // White Chocolate text on brown for better contrast
        },
        secondary: {
          // Official Secondary Color: Deep Saffron
          DEFAULT: "#FEA42A", 
          foreground: "#4F3C1C",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          // Using White Chocolate for muted backgrounds
          DEFAULT: "#EFE7DC", 
          foreground: "#4F3C1C",
        },
        accent: {
          // Dandelion as the highlight accent
          DEFAULT: "#FFD275", 
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
        // Direct mapping for easy utility use (e.g., bg-birni-saffron)
        birni: {
          cafe: "#4F3C1C",
          saffron: "#FEA42A",
          dandelion: "#FFD275",
          cream: "#EFE7DC",
          bronze: "#CD8C24",
        },
        sidebar: {
          DEFAULT: "#FFFFFF",
          foreground: "#4F3C1C",
          primary: "#4F3C1C",
          "primary-foreground": "#FFFFFF",
          accent: "#FEA42A",
          "accent-foreground": "#4F3C1C",
          border: "#E5E7EB",
          ring: "#FEA42A",
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
