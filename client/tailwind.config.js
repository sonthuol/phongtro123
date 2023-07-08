/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#f5f5f5",
        secondary1: "#1266DD",
        secondary2: "#F73859",
        "overlay-30": "rgba(0,0,0,0.3)",
        "overlay-40": "rgba(0,0,0,0.4)",
        "overlay-70": "rgba(0,0,0,0.7)",
      },
      maxWidth: {
        600: "600px",
        1100: "1100px",
      },
    },
  },
  plugins: [],
};
