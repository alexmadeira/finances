import 'styles/globals.css'
import { twMerge } from 'tailwind-merge'

import { IReactProviderProps } from '@/props'

import { roboto } from 'styles/tokens/fonts'

export default function RootLayout({ children }: IReactProviderProps) {
  return (
    <html lang="pt-br">
      <body className={twMerge('bg-black', roboto.variable)}>{children}</body>
    </html>
  )
}
