'use client'

import { HIPCicon } from '@components/common/icon/HIPCIcon'

import { useLogout } from './hooks/useLogout'

export function LogoutButton() {
  const { handleLogout } = useLogout()
  return (
    <button onClick={handleLogout} className='gap-2 flex items-center font-medium'>
      <HIPCicon name='logout' iconClassName='h-5 w-5' />
      로그아웃
    </button>
  )
}
