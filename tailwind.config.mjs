/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          1: '#cefa05',
          2: '#eeffa3',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': 'var(--gradient-1)',
        'gradient-2': 'var(--gradient-2)',
        'gradient-3': 'var(--gradient-3)',
        'gradient-4': 'var(--gradient-4)',
        'gradient-5': 'var(--gradient-5)',
        'gradient-6': 'var(--gradient-6)',
        'gradient-7': 'var(--gradient-7)',
        'gradient-8': 'var(--gradient-8)',
      },
    },
  },
  plugins: [],
};
