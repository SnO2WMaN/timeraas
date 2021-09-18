/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.tsx'],
  darkMode: 'media',
  plugins: [],
  theme: {
    colors: {
      night: {
        1: '#2e3440',
        2: '#3b4252',
        3: '#434c5e',
        4: '#4c566a',
      },
      snow: {
        1: '#d8dee9',
        2: '#e5e9f0',
        3: '#eceff4',
      },
      frost: {
        1: '#8fbcbb',
        2: '#88c0d0',
        3: '#81a1c1',
        4: '#5e81ac',
      },
      aurora: {
        1: '#bf616a',
        2: '#d08770',
        3: '#ebcb8b',
        4: '#a3be8c',
        5: '#b48ead',
      },
    },
    zIndex: {
      0: 0,
      1: 1,
      infinity: 2147483647,
    },
    extend: {
      fontFamily: {
        timeleap: ['Timeleap', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
};
