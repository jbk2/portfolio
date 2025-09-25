/** @type {import('tailwindcss').Config} */
export default {
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
      colors: {
        debug: '#ff00ff',
        accent: '#00d7c0',
        deepblue: 'hsla(236, 77%, 20%, 1)',
        brightteal: 'hsla(182, 100%, 42%, 1)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 12s linear infinite',
        'gradient': 'gradient 40s linear infinite',
        'rotate-wave': 'rotate-wave 0.75s linear 1',
        'typing': 'typing 5s steps(40, end) 1',
        'blink-caret': 'blink-caret 0.4s steps(1, end) infinite',
        'projects-in': 'projects-in 0.8s ease-in-out forwards',
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
          to: { transform: 'translateX(-50%)' },
        },
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        'projects-in': {
          '0%': {opacity: 0.7, transform: 'translateY(50px)', gap: '8rem'},
          '100%': {opacity: 1, transform: 'translateY(0px)', gap: '2rem'},
        },
      },
      backgroundImage: {
        'gradient-to-r-from-deep-blue-to-bright-teal': 'linear-gradient(90deg, var(--color-primary-dark) 25%, var(--color-primary-light) 100%)',
        'gradient-to-r-from-bright-teal-to-deep-blue': 'linear-gradient(90deg, var(--color-primary-light) 0%, var(--color-primary-dark) 100%)',
      }
    },
  
  },
  plugins: [],
}