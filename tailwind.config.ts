/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#fffcf9",
        black: "#252525",
        blue: {
          100: "#E6F4FF",
          200: "#BAE0FF",
          300: "#91CAFF",
          400: "#69B1FF",
          500: "#4096FF",
          600: "#1677FF",
          700: "#0958D9",
          800: "#003EB3",
          900: "#002C8C",
          1000: "#001D66",
        },
        primary: "#1677FF",
        theme: {
          base: {
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
  },
  plugins: [],
};
