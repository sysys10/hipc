import Image from 'next/image'
import Link from 'next/link'

import { NavDropDownMenu } from './NavDropDownMenu'

async function NavigationBar() {
  // const session = await getServerSession()
  return (
    <>
      <nav className='h-navbar-height fixed top-0 left-0 right-0 z-10 grid grid-cols-3 bg-white space-between justify-center drop-shadow-md'>
        <div></div>
        <div className='max-h-full flex items-center justify-center'>
          <Link href='/' className='h-14'>
            <Image
              src='/assets/images/logo_blue.png'
              alt='Logo'
              width={100}
              height={100}
              className='object-contain'
            />
          </Link>
        </div>
        <div className='flex space-x-4 max-h-full justify-end items-center mx-4'>
          <Link
            href='#'
            className='bg-btn-yellow rounded-full shrink-0 p-2 w-[40px] h-[40px] flex items-center justify-center'
          >
            <Image
              src='/assets/icons/bell.svg'
              alt='Notifications'
              width={24}
              height={24}
              className='invert obejct-contain'
            />
          </Link>
          <NavDropDownMenu />
        </div>
      </nav>
    </>
  )
}

export { NavigationBar }
