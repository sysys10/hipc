import { Providers } from '@/components/providers'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify'

import '@packages/ui/globals.css'

const pretendard = localFont({
  src: [
    {
      path: '../../../../packages/shared/fonts/pretendard/PretendardVariable.woff2',
      weight: '45 920',
      style: 'normal'
    }
  ],
  variable: '--font-pretendard'
})
const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin'
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${pretendard.variable} antialiased h-screen`}>
        <Providers>
          <ToastContainer position='bottom-right' />
          {children}
        </Providers>
      </body>
    </html>
  )
}
