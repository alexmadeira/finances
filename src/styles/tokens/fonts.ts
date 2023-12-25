import { Roboto_Flex as Roboto } from 'next/font/google'

export const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
})

export const fontFamily = {
  sans: ['var(--font-roboto)'],
}
