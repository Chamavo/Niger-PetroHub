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
        background: {
          primary: '#1A1A1A',
          secondary: '#222222',
          card: '#2A2A2A',
        },
        accent: {
          orange: '#E8501A',
          green: '#3A7D3A',
          'green-light': '#4A9A4A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E8E0CC',
          muted: '#A0A0A0',
        },
        border: '#333333',
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
