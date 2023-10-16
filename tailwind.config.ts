import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'youtube2': '#303030',
        'backgrounStartRgb': 'rgb(15, 15, 15)',
        'backgrounInput': '#121212',
        'secondaireRgb': '#222222',
        'textInput': 'hsl(0, 100%, 100%, 0.50)',
        'signInColor': '#3ea6ff',
        'signInColorBg': '#263850',
        'iconsColor': 'rgba(255, 255, 255, 0.1)',
        'iconsBorderColor': 'rgba(255, 255, 255, 0.2)',
        'baseYoutube': '#f1f1f1',
        'detailsYoutube': '#aaa',
        'detailsButtonYoutbe': '#272727',
        'detailsButtonYoutbeHover': '#525252',
        'detailsLinks': '#3ea6ff',

      },
      borderRadius: {
        'icons': '10px',
      },
      spacing: {
        '64': '16.5rem',
        '10px': '10px',  
        '18' : '72px', 
        '15': '60px',
        '3.5': '14px',
        '150': '600px',
        '1000': '1700px',
        'video': '56.25%',
      },
      screens: {
        '3xl': '1920px',
        'mobileL': '425px',
    },
    fontSize: {
      'xxs': '.60rem',
     },
     zIndex: {
      '100': '100',
      '90': '90',
    },
    borderWidth: {
      '6': '6px',
    },
    maxWidth: {
      '25': '25rem',
    },
    minWidth: {
      '40': '40rem',
    }
    },
  },
  plugins: [],
}
export default config
