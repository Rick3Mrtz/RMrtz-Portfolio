/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      
      spacing: {
        '13': '3.25rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
