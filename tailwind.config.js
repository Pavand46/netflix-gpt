// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add custom scrollbar styles
      scrollbarWidth: {
        thin: "thin",
      },
      colors: {
        "scroll-thumb": "#888",
        "scroll-track": "#f1f1f1",
      },
    },
  },
  plugins: [],
};
