'use client'

import { useUserStore } from '@/stores'
import { HIPCicon } from '@components/common/icon/HIPCIcon'
import { signOut } from 'next-auth/react'

export function LogoutButton() {
  const clearUser = useUserStore((state) => state.clearUser)
  const handleLogout = async () => {
    await signOut({
      callbackUrl: '/',
      redirect: true
    })
    clearUser()
  }

  return (
    <button onClick={handleLogout} className='gap-2 flex items-center text-lg font-medium'>
      <HIPCicon name='logout' iconClassName='h-5 w-5' />
      로그아웃
    </button>
  )
}
