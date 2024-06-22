/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "open-sidebar": {
          from: { width: "60px" },
          to: { width: "300px" },
        },
        "close-sidebar": {
          from: { width: "300px" },
          to: { width: "60px" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "open-sidebar": "open-sidebar 0.2s ease-out",
        "close-sidebar": "close-sidebar 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      }
    },
  },
  plugins: [],
}

