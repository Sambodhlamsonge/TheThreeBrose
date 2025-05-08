/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        coffeeBrown: "#6F4E37",
        cream: "#F5F1E9",
        lightBrown: "#D2B48C"
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "12px"
      }
    },
  },
  plugins: [],
}
