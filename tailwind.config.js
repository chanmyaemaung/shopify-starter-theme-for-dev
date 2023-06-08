/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./config/*.json",
    "./layout/*.liquid",
    "./locales/*.json",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.json",
    "./templates/customers/*.liquid",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
