/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      height: {
        content: "650px",
      },
    },
  },
  plugins: [],
};
