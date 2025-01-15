/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#fffcf9",
        black: "#252525",
        "theme-base": {
          100: "#f8f8f8",
          200: "#e0e0e0",
          300: "#bdbdbd",
          400: "#9e9e9e",
          500: "#757575",
          600: "#4f4f4f",
          700: "#333333",
          800: "#212121",
          900: "#121212",
        },
      },
    },
  },
  plugins: [],
};
