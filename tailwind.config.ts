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
        // Official Brand Font from Guidelines (Page 15)
        display: ["Parkinsans", "sans-serif"], 
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "#E5E7EB", 
        input: "#F3F4F6",
        ring: "#FEA42A",   // Deep Saffron
        background: "#FFFFFF", 
        foreground: "#4F3C1C", // Café Noir (Main Brand Text)
        primary: {
          DEFAULT: "#4F3C1C", // Official Primary: Café Noir
          foreground: "#EFE7DC", // White Chocolate for contrast
        },
        secondary: {
          DEFAULT: "#FEA42A", // Official Secondary: Deep Saffron
          foreground: "#4F3C1C",
        },
        accent: {
          DEFAULT: "#FFD275", // Dandelion
          foreground: "#4F3C1C",
        },
        muted: {
          DEFAULT: "#EFE7DC", // White Chocolate
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
        // Quick utility classes for the full palette
        birni: {
          cafe: "#4F3C1C",     // The Deep Brown
          saffron: "#FEA42A",  // The warm Orange-Yellow
          dandelion: "#FFD275",// The bright highlight
          cream: "#EFE7DC",    // The off-white background
          bronze: "#CD8C24",   // The darker gold accent
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
        // Limited to 3 features as per Strategy Map page 1
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
