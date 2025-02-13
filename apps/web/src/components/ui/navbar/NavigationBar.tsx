import { NavigationBarLists } from '@/constants'
import Link from 'next/link'

import { MobileNavMenu } from './MobileNav'
import { NavProfile } from './ProfileNav'

async function NavigationBar() {
  return (
    <nav className='h-navbar-height fixed top-0 flex w-full bg-background-navbar text-text-navbar z-10'>
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
                  <div className='absolute invisible opacity-0 group-hover:visible bg-background-navbar group-hover:opacity-100 flex flex-col top-[var(--navbar-height)] w-32 transition-opacity duration-300 rounded-b-md'>
                    <div className='flex flex-col w-full'>
                      {item.dropdownList?.map((dropdownItem) => (
                        <div key={dropdownItem.name} className='flex text-sm w-full bg-transparent p-3'>
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
            <NavProfile />
          </div>
        </div>
        <MobileNavMenu />
      </div>
    </nav>
  )
}

export { NavigationBar }
