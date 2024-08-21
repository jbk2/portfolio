/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/index.html"],
  safelist: [
    'animate-typing',
    'animate-blink-caret',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter"],
        'jetbrains': ["JetBrains Mono"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        'gradient': 'gradient 15s linear infinite',
        'rotate-wave': 'rotate-wave 0.75s linear 1',
        'typing': 'typing 5s steps(40, end) 1',
        'blink-caret': 'blink-caret 0.4s steps(1, end) infinite',
      },
      keyframes: {
        'rotate-wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(15deg)' },
        },
        'typing': {
          from: { width: '0' },
          to: { width: '100%'},
        },
        'blink-caret': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'gradient': {
          to: { 'background-position': '200% center' },
        },
      },
    },                             
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

