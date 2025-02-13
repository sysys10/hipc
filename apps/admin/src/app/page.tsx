import { LoginForm } from '@/components/common'

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-svh w-full bg-gray-50'>
      <div className='flex-1 flex flex-col items-center justify-center gap-4'>
        <main className='flex shadow-sm flex-col items-center justify-center gap-4 max-w-xl w-full h-[80vh]'>
          <LoginForm />
        </main>
      </div>
    </div>
  )
}
