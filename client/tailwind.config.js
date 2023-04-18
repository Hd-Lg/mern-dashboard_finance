/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        LargeScreen: 'repeat(3, minmax(370px, 1fr)',
      },
      gridTemplateRows: {
        // Simple 10 row grid
        LargeScreen: 'repeat(10, minmax(60px, 1fr))',
      },
    },
  },
  plugins: [],
};
