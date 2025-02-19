'use client'

import { LogoutButton, ProfileStats } from '@/components'
import { useMounted } from '@/hooks'
import { useUserStore } from '@/stores'
import { HIPCicon, ThemeToggle } from '@components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Popover, PopoverContent, PopoverTrigger } from '@packages/ui/components/popover'

export function ProfileNav() {
  const router = useRouter()
  const user = useUserStore((state) => state.user)
  const mounted = useMounted()
  return (
    <>
      <div className='flex items-center max-md:hidden gap-x-4 md:gap-x-8 h-full md:border-l border-gray-400 pl-8 w-full'>
        <ThemeToggle />
        {mounted ? (
          user ? (
            <Popover>
              <PopoverTrigger>
                <div className='flex items-center gap-x-2'>
                  <Image src={user?.image || '/assets/images/HIPC_DEFAULT_PROFILE.png'} alt='profile' width={32} height={32} className='rounded-full' />
                  <HIPCicon name='chevronLeft' iconClassName='w-5 h-5 -rotate-90' />
                </div>
              </PopoverTrigger>
              <PopoverContent className='p-0 mt-6 w-[24rem] rounded-xl overflow-hidden bg-background' align='end'>
                <div className='flex flex-col gap-y-4 text-text divide-y divide-border'>
                  <ProfileStats user={user} />
                  <ul className='flex flex-col gap-y-4 p-4'>
                    <li>
                      <Link href='/' className='flex items-center gap-x-2'>
                        <HIPCicon name='home' iconClassName='w-5 h-5' />홈
                      </Link>
                    </li>
                    <li>
                      <Link href='/profile' className='flex items-center gap-x-2'>
                        <HIPCicon name='user' iconClassName='w-5 h-5' />내 프로필
                      </Link>
                    </li>
                    <li>
                      <LogoutButton />
                    </li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className='flex items-center gap-x-2' onClick={() => router.push('/login?modal=login')}>
              <Image src={'/assets/images/HIPC_DEFAULT_PROFILE.png'} alt='profile' width={32} height={32} className='rounded-full' />
              <HIPCicon name='chevronLeft' iconClassName='w-5 h-5 -rotate-90' />
            </div>
          )
        ) : (
          <div className='flex items-center gap-x-2'>
            <Image src={'/assets/images/HIPC_DEFAULT_PROFILE.png'} alt='profile' width={32} height={32} className='rounded-full' />
            <HIPCicon name='chevronLeft' iconClassName='w-5 h-5 -rotate-90' />
          </div>
        )}
      </div>
    </>
  )
}
