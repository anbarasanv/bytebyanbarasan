const { space } = require("postcss/lib/list");

module.exports = {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    fontFamily: {
      header: ["Outfit", "sans-serif"],
      subheader: ["Fira Sans Condensed", "sans-serif"],
      alegreya: ["Alegreya", "serif"],
      poppins: ["Poppins", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
      firacode: ["Fira Code", "monospace"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [require("daisyui")],
};
