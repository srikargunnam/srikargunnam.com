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
        // Dark backgrounds
        'dark': '#0a0a0a',
        'dark-2': '#111111',
        'dark-3': '#1a1a1a',
        // Light text
        'light': '#ffffff',
        'light-2': '#e5e5e5',
        'light-3': '#a3a3a3',
        // Accent color (subtle blue/cyan)
        'accent': '#4a9eff',
        'accent-hover': '#6bb0ff',
        // Grey scale for hierarchy
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
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
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

