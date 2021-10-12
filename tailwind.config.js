module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        headerColor: "#242526",
        bodyColor: "#18191a",
        accentColor: "#393a3b",
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }