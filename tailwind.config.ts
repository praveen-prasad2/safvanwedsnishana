import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F0E6",
        gold: {
          DEFAULT: "#C9A962",
          light: "#E8D5A3",
          dark: "#A68B3C",
        },
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        greatVibes: ["var(--font-great-vibes)", "cursive"],
        cormorant: ["var(--font-cormorant)", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        rustic: ["var(--font-rustic)", "cursive"],
        marcellus: ["var(--font-marcellus)", "serif"],
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(201, 169, 98, 0.1)",
        "card-hover":
          "0 35px 60px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(201, 169, 98, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
