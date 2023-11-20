/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          light: "#192335",
        },
        secondary: {
          DEFAULT: "#2c71f6",
        },
        accent: {
          DEFAULT: "#37cdbe",
        },
        neutral: {
          DEFAULT: "#3d4451",
        },
        "base-100": {
          DEFAULT: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
