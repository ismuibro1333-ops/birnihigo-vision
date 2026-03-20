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
        // Updated to the official brand typeface: Parkinsans
        display: ["Parkinsans", "sans-serif"], 
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "#E5E7EB", 
        input: "#F3F4F6",
        ring: "#FEA42A",   // Official Deep Saffron
        background: "#FFFFFF", 
        foreground: "#4F3C1C", // Official Café Noir (Primary Text)
        primary: {
          DEFAULT: "#4F3C1C", // Official Café Noir
          foreground: "#EFE7DC", // White Chocolate for contrast
        },
        secondary: {
          DEFAULT: "#FEA42A", // Official Deep Saffron
          foreground: "#4F3C1C",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#EFE7DC", // White Chocolate (Earthy Tone)
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
        // Helper classes for you to use in your components
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
