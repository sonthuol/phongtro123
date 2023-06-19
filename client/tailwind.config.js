/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#F5F5F5",
        secondary1: "#1266DD",
        secondary2: "#F73859",
      },
      maxWidth: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
