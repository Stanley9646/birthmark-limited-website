/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '762px',
      // => @media (min-width: 640px) { ... }

      'md': '1025px',
      // => @media (min-width: 768px) { ... }

      'lg': '1027px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend:{
      colors: {
        dark: '#111111',
      },
      fontFamily:{
          josefin :['Josefin Sans'],
          nunito :['Nunito'],
      }  
    },
  },
  variants: {},
  plugins: [],
}



