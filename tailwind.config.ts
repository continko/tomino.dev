import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "#050508",
        surface: "#0d0d14",
        "surface-2": "#13131e",
        border: "#1e1e2e",
        accent: "#6366f1",
        "accent-2": "#a855f7",
        muted: "#3f3f5a",
        "text-primary": "#e8e8f0",
        "text-secondary": "#8888a8",
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 20% 20%, hsla(240,100%,60%,0.12) 0px, transparent 55%), radial-gradient(at 80% 10%, hsla(270,100%,60%,0.08) 0px, transparent 55%), radial-gradient(at 50% 80%, hsla(220,100%,50%,0.06) 0px, transparent 55%)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
