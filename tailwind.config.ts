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
        background: "#0A0A0A",
        foreground: "#E8E0CC",
        primary: "#0A0A0A",
        accent: "#C9A84C",
        secondary: "#111111",
        border: "#2A2A2A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-noto-sans-arabic)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
