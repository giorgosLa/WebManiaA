const config = {
  plugins: ["@tailwindcss/postcss"],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(59,130,246,0.6)",
          },
          "50%": {
            boxShadow: "0 0 25px 10px rgba(59,130,246,0.2)",
          },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
