'use server'

import ChannelTalk from '@/components/layout/ChannelTalk'
import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'

export default async function RootLayout({ children, modal }: { children: React.ReactNode; modal?: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        {children} {modal}
      </main>
      <ChannelTalk />
      <Footer />
    </div>
  )
}
