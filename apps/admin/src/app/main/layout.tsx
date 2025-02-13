import { LeftSidebar } from '@/components/ui/navbar/Sidebar'

import { NavigationBar } from '@components/ui'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative max-h-screen h-screen flex overflow-y-auto pt-16 flex-col w-full'>
      <NavigationBar />
      <div className='flex-1 flex shrink-0 h-full'>
        <LeftSidebar />
        <main className='h-full flex-1 overflow-y-auto'>{children}</main>
      </div>
    </div>
  )
}
