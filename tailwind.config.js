/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kaukaz-black': '#000000',
        'kaukaz-white': '#FFFFFF',
        'kaukaz-milk': '#FCFEFD',
        'kaukaz-accent': '#06ACC4',
      },
    },
  },
  plugins: [],
};
