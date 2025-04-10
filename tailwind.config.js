module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-4px, 0)" },
          "50%": { transform: "translate(4px, 0)" },
          "75%": { transform: "translate(-4px, 0)" },
        },
      },
    },
  },
  plugins: [],
};
