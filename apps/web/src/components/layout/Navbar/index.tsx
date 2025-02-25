'use client'

import { NavigationBarLists } from '@/constants'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

import { MobileNavMenu } from './MobileNav'
import { ProfileNav } from './ProfileNav'

function useYScroll() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return y
}

export default function NavigationBar() {
  const y = useYScroll()
  const navStyle = useMemo(() => (y > 64 ? 'shadow-inset-b bg-white text-black' : 'bg-transparent text-black'), [y])

  return (
    <nav className={`h-navbar-height fixed top-0 flex w-full z-10 ${navStyle}`}>
      <div className='px-6 md:px-10 h-full w-full mx-auto flex justify-between items-center'>
        <div className='flex items-center h-full'>
          <Link href='/' className='relative h-full flex items-center text-2xl md:text-3xl font-bold font-cafe24'>
            HIPC
          </Link>
        </div>
        <div className='flex items-center w-full justify-end'>
          <div className='flex justify-end gap-x-8 px-8 max-md:hidden w-full'>
            {NavigationBarLists.map((item, index) => (
              <div key={index} className='relative cursor-pointer max-w-32 w-full group flex text-lg'>
                <div className={`h-navbar-height w-full flex items-center justify-center whitespace-nowrap group-hover:shadow-inset-b ${item.path ? 'cursor-pointer' : ''}`}>
                  {item.path ? (
                    <Link href={item.path} className='w-full font-semibold h-full flex items-center justify-center'>
                      {item.name}
                    </Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>
                {item?.dropdownList && (
                  <div
                    className={`absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 flex flex-col top-[var(--navbar-height)] w-40 transition-opacity duration-300 rounded-b-md ${navStyle}`}
                  >
                    <div className='flex flex-col w-full'>
                      {item.dropdownList?.map((dropdownItem) => (
                        <div key={dropdownItem.name} className='flex text-sm w-full p-3'>
                          <Link href={dropdownItem.path} className='w-full font-semibold hover:underline'>
                            {dropdownItem.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='cursor-pointer shrink-0'>
            <ProfileNav />
          </div>
        </div>
        <MobileNavMenu />
      </div>
    </nav>
  )
}
