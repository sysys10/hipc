import { HIPCicon } from '@components/common/icon/HIPCIcon'
import Link from 'next/link'

export function AboutButton() {
  return (
    <Link
      href='/about'
      className='bg-background-secondary text-infosys-purple text-sm md:text-lg flex items-center gap-x-2 hover:bg-background-secondary/80 rounded-md px-2 py-1 font-semibold'
    >
      About Us
      <HIPCicon name='send' iconClassName='w-4 h-4' />
    </Link>
  )
}
