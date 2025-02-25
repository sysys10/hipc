import { HIPCicon } from '@components/common/icon/HIPCIcon'
import Link from 'next/link'

export function StudyButton() {
  return (
    <Link
      href='/study'
      className='bg-background-secondary text-black text-sm md:text-lg flex items-center gap-x-2 hover:bg-background-secondary/80 rounded-md px-4 py-2 font-semibold'
    >
      지금 지원하기
      <HIPCicon name='send' iconClassName='w-4 h-4' />
    </Link>
  )
}
