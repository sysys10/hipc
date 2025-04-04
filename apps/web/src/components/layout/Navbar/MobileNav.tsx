'use client'

import { HIPCicon, LogoutButton, ProfileImg, ProfileStats, ThemeToggle } from '@components'
import { NavigationBarLists } from '@constants'
import { useUserStore } from '@stores'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const user = useUserStore((s) => s.user)

  // 메뉴 클릭 핸들러
  const handleMenuClick = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // 컴포넌트 언마운트 시 스크롤 복구
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className='md:hidden'>
      <button onClick={() => setIsOpen(true)} className='md:hidden'>
        <ProfileImg image={user?.image || '/assets/images/HIPC_DEFAULT_PROFILE.png'} width={60} />
      </button>

      {isOpen && <div className='fixed inset-0 bg-black/40 z-40 md:hidden' onClick={() => setIsOpen(false)} />}

      <div
        className={`
          flex flex-col 
          fixed top-0 right-0 h-full w-[80%] bg-background text-text z-50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        {/* 헤더 */}
        <div className='flex items-center justify-between p-4 border-b'>
          <ThemeToggle />
          <button onClick={() => setIsOpen(false)}>
            <HIPCicon name='close' iconClassName='w-10 h-10' />
          </button>
        </div>

        {user && (
          <div className='p-4 border-b pb-10'>
            <ProfileStats user={user} />
          </div>
        )}

        <nav className='overflow-y-auto flex-1 flex flex-col justify-between'>
          <ul className='p-2'>
            {NavigationBarLists.map((item) => (
              <li key={item.name}>
                {item.path ? (
                  <button onClick={() => handleMenuClick(item.path)} className='w-full p-3 text-left hover:bg-background-secondary rounded-lg'>
                    <span>{item.name}</span>
                  </button>
                ) : (
                  <details className='group'>
                    <summary className='flex items-center justify-between p-3 hover:bg-background-secondary rounded-lg cursor-pointer'>
                      <span>{item.name}</span>
                      <HIPCicon name='chevronRight' iconClassName='w-5 h-5 transition-transform group-open:rotate-90' />
                    </summary>
                    <ul className='pl-6 mt-1 space-y-1'>
                      {item.dropdownList?.map((subItem) => (
                        <li key={subItem.name}>
                          <button onClick={() => handleMenuClick(subItem.path)} className='w-full p-2 text-left hover:bg-background-secondary rounded-lg'>
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            ))}
            <li className='p-2 pt-4 border-t'>
              {user ? (
                <LogoutButton />
              ) : (
                <button
                  onClick={() => {
                    router.push('/login?modal=login')
                    setIsOpen(false)
                  }}
                  className='w-full py-2 px-4 bg-background text-text rounded-lg'
                >
                  로그인
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export { MobileNavMenu }
