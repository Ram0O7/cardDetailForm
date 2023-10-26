/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        input_errors: "hsl(0, 100%, 66%)",
        White: "hsl(0, 0%, 100%)",
        Light_grayish_violet: "hsl(270, 3%, 87%)",
        Dark_grayish_violet: "hsl(279, 6%, 55%)",
        Very_dark_violet: "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
};
