/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        todo: "#ffc952",
        progress: "#47b8e0",
        done: "#ff7473",
        main: "#34314c",
      },
    },
  },
  plugins: [],
};
