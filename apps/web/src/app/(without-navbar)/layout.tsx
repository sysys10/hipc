export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-1'>{children}</div>
    </div>
  )
}
