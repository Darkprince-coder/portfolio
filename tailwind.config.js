/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Epilogue'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Light mode
        canvas: "#F7F4EF",
        paper: "#EFEBE4",
        ink: "#1A1714",
        "ink-2": "#3D3830",
        muted: "#8C8278",
        rule: "#DDD8D0",
        accent: "#C84B2F",
        "accent-light": "#F2E8E4",
        highlight: "#E8B84B",
        // Dark mode palette (midnight forest)
        "dm-bg":      "#0D1117",
        "dm-surface": "#161B22",
        "dm-card":    "#1C2333",
        "dm-border":  "#2D3748",
        "dm-text":    "#E6EDF3",
        "dm-muted":   "#8B949E",
        "dm-subtle":  "#6E7681",
        "dm-accent":  "#FF6B47",
        "dm-amber":   "#F0A500",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        marquee: "marquee 18s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
