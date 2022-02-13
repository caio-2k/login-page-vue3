const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'ManropeRegular', // <-- Manrope is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily,
        extend: {
            colors: {
                brand: {
                    main: '#8759F2',
                    mainSecondary: '#8CC83C',
                    greenOn: '#82BF40',
                    greenOff: '#AAFF6C',
                    blueMain: '#167D85',
                    blueSecondary: '#48A2C5',
                    mainBg: '#F7F8FC',
                    gray: '#F9F9F9',
                    info: '#8296FB',
                    graydark: '#C0BCB0',
                    danger: '#FF3E80',
                    warning: '#E4B52E',
                    burack: '#121214',
                    mainBlack: '#202024'
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
