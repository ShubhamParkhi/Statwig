/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        midnightblue: {
          "100": "#050038",
          "200": "rgba(5, 0, 56, 0.6)",
        },
        mediumslateblue: "#4262ff",
        deepskyblue: "#52c4ff",
        mediumseagreen: "#11ce8e",
        gray: {
          "100": "rgba(0, 0, 0, 0.2)",
          "200": "rgba(0, 0, 0, 0.25)",
        },
        whitesmoke: "#f2f2f2",
        ghostwhite: "#f1f3fd",
        "primary-900": "#0f1320",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      "21xl": "40px",
      "29xl": "48px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
