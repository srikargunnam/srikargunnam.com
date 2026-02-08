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
        'dark-blue': '#34495e',
        'nav-dark': '#1c2833',
        'nav-border': '#1b2631',
        'section-dark': '#242d39',
        'projects-bg': '#147a78',
        'project-box': '#353456',
        'accent-red': '#ec7063',
        'link-blue': 'rgb(98, 174, 228)',
        'hr-red': '#a82f3a',
        'whitesmoke': 'whitesmoke',
      },
      screens: {
        'sm': '30rem',   // 480px
        'md': '41.25rem', // 660px
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        serif: ['Georgia', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Verdana', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

