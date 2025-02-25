import { AuthProvider } from '@components/providers/nextAuthProvider'
// import { ThemeProvider } from '@components/providers/themeProvider'
import type { Metadata } from 'next'
import { Black_Han_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify'

import '@packages/ui/globals.css'

// const nanumSquareNeo = localFont({
//   src: [
//     {
//       path: '../../../packages/shared/fonts/nanumgothic/NanumSquareNeo-Variable.woff2',
//       weight: '45 920',
//       style: 'normal'
//     }
//   ],
//   variable: '--font-nanum'
// })

const blackHanSans = Black_Han_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-blackhans'
})
const cafe24ssurround = localFont({
  src: [
    {
      path: '../../../../packages/shared/fonts/cafe24ssurround/Cafe24Ssurround-v2.0.woff2',
      weight: '45 920',
      style: 'normal'
    }
  ],
  variable: '--font-cafe24'
})

const pretendard = localFont({
  src: [
    {
      path: '../../../../packages/shared/fonts/pretendard/PretendardVariable.woff2',
      style: 'normal'
    }
  ],
  variable: '--font-pretendard'
})
const nanumSquareNeo = localFont({
  src: [
    {
      path: '../../../../packages/shared/fonts/nanumgothic/NanumSquareNeo-Variable.woff2',
      weight: '45 920',
      style: 'normal'
    }
  ],
  variable: '--font-nanum'
})
export const metadata: Metadata = {
  title: 'HIPC'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body
        className={`${pretendard.variable} ${blackHanSans.variable} ${nanumSquareNeo.variable} ${cafe24ssurround.variable} font-pretendard bg-background antialiased min-h-screen`}
      >
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer className={'text-base'} position='bottom-right' />
        <div id='modal-root' />
      </body>
    </html>
  )
}
