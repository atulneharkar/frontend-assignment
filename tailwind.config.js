/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: { max: "700px" },
      desktop: { min: "701px" },
    }
  },
  plugins: ["tw-elements/dist/plugin"],
};
