/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#1a365d",
        "primary-dark": "#1a202c",
        "link-light": "#3b82f6",
        "link-dark": "#60a5fa",
        // ... other colors as needed
      },
    },
  },
  plugins: [import("@tailwindcss/typography")],
};
