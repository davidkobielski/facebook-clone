module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerColor: "#242526",
        bodyColor: "#18191a",
        accentColor: "#393a3b",
        mainBlue: "#2d88ff",
      },
      zIndex: {
        '-1': '-1',
      },
      screens: {
        'bmd': '900px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}