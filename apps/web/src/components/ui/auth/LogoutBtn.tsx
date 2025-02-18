'use client'

import { useUserStore } from '@/stores'
import { HIPCicon } from '@components/common/icon/HIPCIcon'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const clearUser = useUserStore((state) => state.clearUser)
  const router = useRouter()
  const handleLogout = async () => {
    await signOut({ redirect: false })
    clearUser()
    router.back()
  }

  return (
    <button onClick={handleLogout} className='gap-2 flex items-center font-medium'>
      <HIPCicon name='logout' iconClassName='h-5 w-5' />
      로그아웃
    </button>
  )
}
