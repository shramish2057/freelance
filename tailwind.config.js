/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#81c8fb',
          400: '#41a7f6',
          500: '#1e8aed',
          600: '#0e6ed0',
          700: '#0e58a8',
          800: '#124b8a',
          900: '#143f72',
          950: '#0f2a4b',
        },
        secondary: {
          50: '#effffd',
          100: '#c8fffa',
          200: '#97fdf6',
          300: '#5befee',
          400: '#27d6df',
          500: '#0abbc9',
          600: '#0596a8',
          700: '#0a7886',
          800: '#0f616e',
          900: '#114f5d',
          950: '#07333f',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffeed2',
          200: '#ffd9a4',
          300: '#ffbd6b',
          400: '#ff9732',
          500: '#ff760c',
          600: '#ff5a00',
          700: '#cc3d02',
          800: '#a1300b',
          900: '#82290d',
          950: '#461204',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
    },
  },
  plugins: [],
};