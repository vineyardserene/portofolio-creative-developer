module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        perano: {
          '50': '#f2f5fb',
          '100': '#e7ecf8',
          '200': '#d3dbf2',
          '300': '#abb8e4',
          '400': '#9ca6dd',
          '500': '#8389d1',
          '600': '#6a6ac1',
          '700': '#5b59a9',
          '800': '#4a4a89',
          '900': '#41436e',
          '950': '#262640',
        },
        'primary-blue': '#4C5AC2',
        'gray-text': '#6B7280',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ffffff, #4C5AC2)',
      },
      width: {
        'custom-412': '412.46px',
        'card-width': '300px',
      },
      height: {
        'custom-219': '219.68px',
        'card-height': '150px',
      },
      fontFamily: {
        urbanist: ['"Urbanist"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        'hero-title': '3.75rem',
        'experience': '0.75rem',
      },
      spacing: {
        'icon': '20px',
      },
      translate: {
        '-y16': '-4rem',
        '-x24': '-6rem',
      },
      borderRadius: {
        full: '9999px',
      },
    },
  },
  plugins: [require("daisyui")],
};
