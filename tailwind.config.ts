import { nextui } from '@nextui-org/react'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair-display)'],
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui(
      {
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FACC14",
              foreground: "#000000",
            },
            focus: "#FACC14",
          },
        },
      },
    }
    ),
  ],
};
