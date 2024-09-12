/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-bg": "url(./src/resources/bgphoto.jpg)",
      }),

      boxShadow: {
        "custom-black-large": "0px 0px 20px rgba(0, 0, 0, 0.5)", // Większy i ciemniejszy cień
      },
      colors: {
        "custom-color1": "#01073b",
        "custom-green": "#10b981",
        "custom-red": "#ef4444",
      },
    },
  },
  plugins: [],
};
