import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // From Page 15 of the Guidelines
        display: ["Parkinsans", "sans-serif"], 
        body: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#4F3C1C", // Café Noir (Earthy Brown)
        primary: {
          DEFAULT: "#4F3C1C", // Official Primary
          foreground: "#EFE7DC",
        },
        secondary: {
          DEFAULT: "#FEA42A", // Official Secondary (Deep Saffron)
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
        // Custom Birnihigo palette for easy utility use
        birni: {
          brown: "#4F3C1C",
          orange: "#FEA42A",
          yellow: "#FFD275",
          cream: "#EFE7DC",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
