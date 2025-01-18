import containerPlugin from "@tailwindcss/container-queries";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgBlack: "#141414",
        bgGray: "#252525",
        primary: "#1e5b1e",
        secondary: "#3aaf3a",
      },
      fontFamily: {
        sansserif: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Geist",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        pressStart: ["PressStart2P"],
        geist: ["Geist"],
        geistBold: ["Geist-bold"],
      },
      screens: {
        large: "1012px",
      },
    },
  },
  plugins: [containerPlugin],
};
