import Image from 'next/image'
import Link from 'next/link'

import { CheckButton } from '@packages/ui/components/check'

function NavDropDownMenu() {
  return (
    <div className='relative group'>
      <Link
        href='#'
        className='shrink-0 w-[40px] h-[40px] flex items-center justify-center'
      >
        <Image src='/assets/icons/mypage.svg' alt='MyPage' fill />
      </Link>

      <div className='absolute hidden group-hover:block top-10 right-0 w-40'>
        <div className='h-5'></div>
        <ul className='divide-y divide-gray-200 font-cafe24 text-base bg-background text-center shadow-lg border-2 rounded-lg border-gray-100'>
          <li className='py-3'>
            <Link
              href='/mypage'
              className='block text-gray-400 hover:text-gray-600 cursor-pointer'
            >
              마이 페이지
            </Link>
          </li>
          <li className='py-3'>
            <Link
              href='/manage'
              className='block text-gray-400 hover:text-gray-600 cursor-pointer'
            >
              환경설정
            </Link>
          </li>
          <li className='py-3'>
            <CheckButton variant='filled' size='lg'>
              로그아웃
            </CheckButton>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { NavDropDownMenu }
