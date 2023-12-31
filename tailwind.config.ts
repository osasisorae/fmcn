import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "668px",
      lg: "1160px",
      xl: "1300px",
      "2xl": "1536px",
    },
    colors:{
      "primary-blue":"#120032",
      "primary-success":"#055941",
      grey:"#4242457D",
      "grey-300":"#2B415C",
      white:"#FFFFFF",
      "white-200":"#D9D9D9",
      "grey-200":"#D9D9D9",

    },
    fontFamily:{
      rubik: ['Rubik', 'sans-serif'],
      
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
     backgroundImage:{
      landingBg:"url('/images/landingBg.png')"
     }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
