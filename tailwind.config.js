module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        left: 'left',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#CCE1F3',
          200: '#99C2E8',
          300: '#66A4DC',
          400: '#3385D1',
          500: '#0067C5',
          600: '#0C5EA8',
          700: '#19548A',
          800: '#254B6D',
          900: '#32414F',
        },
        'light-blue': {
          100: '#E0F5FB',
          200: '#C2EAF7',
          300: '#A3E0F4',
          400: '#85D5F0',
          500: '#66CBEC',
          600: '#5EAEC7',
          700: '#5690A2',
          800: '#4E737C',
          900: '#465557',
        },
      },
    },
  },
  variants: {
    extend: {
      inset: ['group-hover'],
    },
  },
  plugins: [],
}
