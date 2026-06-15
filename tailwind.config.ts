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
        // Paleta Premium Editorial
        cream: "#FAF8F3",
        charcoal: "#0F0F0F",
        stone: "#6B6B6B",
        sand: "#D4B5A0",
        warm: "#F5F0E8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        editorial: ["Georgia", "serif"],
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h2": ["2rem", { lineHeight: "1.3" }],
        "h3": ["1.5rem", { lineHeight: "1.4" }],
        "body": ["1rem", { lineHeight: "1.6", letterSpacing: "0em" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section": "6rem",
        "tight": "2rem",
        "loose": "4rem",
      },
      borderRadius: {
        "subtle": "0.25rem",
        "soft": "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
