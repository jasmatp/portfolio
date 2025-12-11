/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  theme: {
    extend: {
      keyframes: {
        slideSteps: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: `translateX(-${3 * 144}px)` },
        },
      },
      animation: {
        slideSteps: 'slideSteps 24s steps(3) infinite',
      },
      colors: {
        primary: '#4a9fd8',
      }
    },
  },
};
export const plugins = [];
