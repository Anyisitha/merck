/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    screens: {
      "xs": {"max": "638px"},
      "lg": {"min": "1024px"},
      'sm': '640px',
    },
    extend: {
      backgroundImage: {
      },
      boxShadow: {
        "3xl": "6px 0px 5px 5px rgba(0,0,0,0.39);"
      }
    },
  },
  plugins: [],
}
