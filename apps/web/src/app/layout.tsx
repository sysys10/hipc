import { AuthProvider } from '@components/providers/nextAuthProvider'
import { ThemeProvider } from '@components/providers/themeProvider'
import type { Metadata } from 'next'
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
      weight: '45 920',
      style: 'normal'
    }
  ],
  variable: '--font-pretendar'
})

export const metadata: Metadata = {
  title: 'INFOSYS24',
  icons: {
    icon: '/favicon.svg'
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${pretendard.variable} ${cafe24ssurround.variable} bg-background antialiased min-h-screen`}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
        <ToastContainer className={'text-base'} position='bottom-right' />
        <div id='modal-root' />
      </body>
    </html>
  )
}
