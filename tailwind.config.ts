import { keyframes, animation } from './src/styles/tokens/animations'
import colors from './src/styles/tokens/colors'
import zIndex from './src/styles/tokens/zIndex'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      keyframes,
      animation,
      zIndex,
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
