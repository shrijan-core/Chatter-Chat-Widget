/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // 1. Colors
    colors: {
      // 1.1. Primary Colors
      'primary-900': '#04294e',
      'primary-800': '#074788',
      'primary-700': '#0a66c2',
      'primary-600': '#1685f3',
      'primary-500': '#3b9df7',
      'primary-400': '#77baf9',
      'primary-300': '#b1d7fb',
      'primary-200': '#d8ebfd',
      'primary-100': '#ecf5fe',
      // 1.2. Neutral colors
      'neutral-900': '#2c2c2c',
      'neutral-800': '#484848',
      'neutral-700': '#7b7b7b',
      'neutral-600': '#a1a1a1',
      'neutral-500': '#c2c2c2',
      'neutral-400': '#d8d8d8',
      'neutral-300': '#f2f2f2',
      'neutral-200': '#f7f7f7',
      'neutral-100': '#fdfdfd',
      //1.3. Error Colors
      'error-900': '#4c0006',
      'error-800': '#670009',
      'error-700': '#ab0614',
      'error-600': '#cd1423',
      'error-500': '#ef2536',
      'error-400': '#ff5866',
      'error-300': '#ffa3ab',
      'error-200': '#ffccd0',
      'error-100': '#fff5f6',
      //1.4. Warning Colors
      'warning-900': '#663c31',
      'warning-500': '#ffc543',
      'warning-300': '#ffe7a8',
      'warning-100': '#fff8e9',
      //1.5. Success Colors
      'success-900': '#183b11',
      'success-500': '#0f9d58',
      'success-300': '#b9e0b8',
      'success-100': '#f1f9ec',
    },
    // 2. Fonts
    fontSize: {
      h1: '3.75rem',
      h2: '3rem',
      h3: '2.5rem',
      h4: '2rem',
      h5: '1.5rem',
      h6: '1.25rem',
      p: '1rem',
      s: '0.875rem',
      vs: '0.75rem',
    },
    // 3. line height
    lineHeight: {
      h1: '72px',
      h2: '60px',
      h3: '52px',
      h4: '44px',
      h5: '32px',
      h6: '28px',
      p: '24px',
      s: '20px',
      vs: '16px',
    },
    // 4. Font weights
    fontWeight: {
      regular: '400',
      'semi-bold': '600',
      bold: '800',
    },
    extend: {
      boxShadow: {
        main: '0px 4px 20px rgba(155, 155, 155, 0.1)',
      },
      screens: {
        xxs: '480px',
        xs: '560px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
