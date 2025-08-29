/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#010C2A',
        // 'primary': '#19191a',
        'secondary': '#219BE4',
        // 'secondary': '#5081a1',
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
}