import { Footer, NavigationBar } from '@components/ui'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavigationBar />
      <main className='flex-1 mt-navbar-height'>{children}</main>
      <Footer />
    </div>
  )
}
