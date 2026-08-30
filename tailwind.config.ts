import type { Config } from "tailwindcss";

// Design tokens ported from ../design/shared/tokens.css (source of truth:
// ../docs/conventions/theming.md), mapped the same way web/tailwind.config.ts
// maps them. This is landing/'s own independent config — it only carries the
// subset of tokens the marketing site actually uses (no shadcn/ui hsl
// variables or feature-lifecycle status colors, since landing has none of
// those components).
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        niflheim: "#080B11",
        surface: {
          DEFAULT: "#0E131B",
          "01": "#0E131B",
          "02": "#151C26",
          "03": "#1C2531",
        },
        rime: { DEFAULT: "#2A3543", soft: "#1F2937" },
        frost: "#E8EEF4",
        mist: "#9FB0C0",
        shadow: "#5E6E7E",
        bifrost: "#2FD4C6",
        aurora: "#4F9BF0",
        frostfire: "#BFE9EE",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "6px",
        card: "14px",
        panel: "16px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
