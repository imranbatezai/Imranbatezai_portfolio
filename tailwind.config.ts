import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E33",
          light: "#14304D",
          deep: "#081524",
        },
        charcoal: "#1C232B",
        paper: "#F5F6F8",
        slate: {
          DEFAULT: "#56616C",
          light: "#8993A0",
        },
        teal: {
          DEFAULT: "#147D77",
          light: "#1C9C93",
          soft: "#E4F1F0",
        },
        line: "#DDE2E7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
        "dot-grid-dark":
          "radial-gradient(circle, rgba(11,30,51,0.10) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
