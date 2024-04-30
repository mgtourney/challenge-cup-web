/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        'darkPurple': '#2A1739',
        'purple': '#2f1c3d',
        'white': '#D4D0DB'
      },
      fontFamily: {
        'kumbh': 'Kumbh Sans',
      }
    },
  },
  plugins: [],
}

