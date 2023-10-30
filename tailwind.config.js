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
          "400": "#889099"
        },
        whitesmoke: "#f2f2f2",
        primary: {
          "900": "#0f1320",
          "800": "#1e2640"
      },
        ghostwhite: "#edeff6",
        royalblue: "#3c6af6",
        blueviolet: "#8a53ff",
        gray1: "rgba(0, 0, 0, 0.5)",
        darkslategray: "#434343",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      "21xl": "40px",
      "29xl": "48px",
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
