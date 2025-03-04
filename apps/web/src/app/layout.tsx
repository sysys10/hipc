import { AuthProvider } from '@components/providers/nextAuthProvider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify'

import '@packages/ui/globals.css'

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
      <body className={`${pretendard.variable} ${cafe24ssurround.variable} bg-background min-h-screen`}>
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer className={'text-base'} position='bottom-right' />
        <div id='modal-root' />
      </body>
    </html>
  )
}
