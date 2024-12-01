/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 4px 10px 0px rgba(0, 0, 0, 0.3)',
        'full': '0px 0px 10px 6px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        textColor: '#101828',
        primary: '#77dada',
        secondary:'#0d4949',
      },
      backgroundImage: {
        bgPattern: "url('./assets/images/section-background.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}



