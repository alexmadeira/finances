import 'styles/global.css'
import { roboto } from 'styles/tokens/fonts'
import { twMerge } from 'tailwind-merge'

import { IReactProviderProps } from '@/props'

export default function RootLayout({ children }: IReactProviderProps) {
  return (
    <html lang="pt-br">
      <body className={twMerge('', roboto.variable)}>{children}</body>
    </html>
  )
}
