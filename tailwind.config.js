/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    textColor: {
      dark: "#212121",
      white: "#FAFAFA",
      error: "#D86161",
      placeholder: "#7A7A7A",
      primary: "#1597E4",
    },
    placeholderColor: {
      grey: "#1597E4",
    },
    borderColor: {
      grey: "#E6E6E6",
      primary: "#1597E4",
    },
    colors: {
      primary: "#1597E4",
      white: "#FFFFFF",
      grey: "#E6E6E6",
      black: "#000000",
    },
    extend: {
      width: {
        830: "830px",
        577: "577px",
        20: "20px",
      },
      height: {
        564: "564px",
        20: "20px",
      },
      spacing: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
      },
      minWidth: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
