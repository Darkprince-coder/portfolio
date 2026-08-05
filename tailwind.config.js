/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Inter'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Light mode
        canvas: "#F4F7FB",
        paper: "#E7EFF9",
        ink: "#111827",
        "ink-2": "#273449",
        muted: "#5E7288",
        rule: "#D9E4F2",
        accent: "#1B6BFF",
        "accent-light": "#E8F0FF",
        highlight: "#9BBEFF",
        // Dark mode palette (navy steel)
        "dm-bg":      "#050F1A",
        "dm-surface": "#0B1730",
        "dm-card":    "#122142",
        "dm-border":  "#2A3C60",
        "dm-text":    "#EAF2FF",
        "dm-muted":   "#8EA5C9",
        "dm-subtle":  "#6E86A9",
        "dm-accent":  "#5FA3FF",
        "dm-amber":   "#8ABEFF",
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
