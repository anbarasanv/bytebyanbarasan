module.exports = {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [require("daisyui")],
};
