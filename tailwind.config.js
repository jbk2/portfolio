/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ["Inter"],
      'jetbrains': ["JetBrains Mono"],
    },
    animationDelay: {
      '0': '0s',
      '1': '1s',
      '2': '2s',
      '3': '3s',
      '4': '4s',
      '5': '5s',
    },
  },
  plugins: [],
}

