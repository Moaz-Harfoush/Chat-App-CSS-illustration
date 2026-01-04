/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gradient-start-primary': 'hsl(293, 70%, 62%)',
        'gradient-start-button': 'hsl(293, 100%, 63%)',
        'gradient-end': 'hsl(264, 100%, 61%)',
        'text-message-sender': 'hsl(276, 55%, 52%)',
        'bg-phone-shadow': 'hsl(271, 36%, 24%)',
        'text-on-dark': 'hsl(0, 0%, 100%)',
        'bg-main-light': 'hsl(300, 33%, 97%)',
        'text-muted': 'hsl(0, 0%, 80%)',
        'text-description': 'hsl(267, 23%, 74%)',
        'bg-message-receiver': 'hsla(0, 0%, 87%, 0.755)',
      }
    },
    screens: {
      'max-lg': {'max': '1024px'},
      'max-md': {'max': '768px'},
    },
  },
  plugins: [],
}

