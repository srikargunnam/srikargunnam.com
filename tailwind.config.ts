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
        'black': '#000000',
        'white': '#ffffff',
        'grey-50': '#fafafa',
        'grey-100': '#f5f5f5',
        'grey-200': '#e5e5e5',
        'grey-300': '#d4d4d4',
        'grey-400': '#a3a3a3',
        'grey-500': '#737373',
        'grey-600': '#525252',
        'grey-700': '#404040',
        'grey-800': '#262626',
        'grey-900': '#171717',
      },
      screens: {
        'sm': '30rem',   // 480px
        'md': '41.25rem', // 660px
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'reading': '65ch',
      },
    },
  },
  plugins: [],
};
export default config;

