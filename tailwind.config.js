/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "vibes":{
          "50": "#0007f5",
          "100": "#0007eb",
          "200": "#0007e1",
          "300": "#0007d7",
          "400": "#0007cd",
          "500": "#0007c3",
          "600": "#0007b9",
          "700": "#0007af",
          "800": "#0007a5",
          "900": "#00079b",
          "950": "#000791"
        },        
      }
    },
  },
  plugins: [],
};
