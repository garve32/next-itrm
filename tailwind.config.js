import {nextui} from '@nextui-org/theme'
import { Container } from 'postcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui",
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {
      fontSize: {
        tiny: "0.75rem", // text-tiny
        small: "0.75rem", // text-small
        medium: "1rem", // text-medium
        large: "1.125rem", // text-large
      },
    },
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {}, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          background: "#262626",
          foreground: "#ffffff",
        }, // dark theme colors
      },
      // ... custom themes
    },
  })],
}

