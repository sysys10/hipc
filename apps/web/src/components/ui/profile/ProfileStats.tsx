import Image from 'next/image'

import { User } from '@types'

import { ProfileImg } from '../auth/ProfileImg'

export function Tier({ tier, size }: { tier: number; size: number }) {
  return (
    <div className='relative group'>
      <Image
        src={`https://d2gd6pc034wcta.cloudfront.net/tier/${tier}.svg`}
        alt='tier'
        width={size}
        height={size}
        className='transition-transform duration-300 group-hover:scale-110'
      />
    </div>
  )
}

export function ProfileStats({ user }: { user: User | null }) {
  return (
    <div className='flex flex-col rounded-lg items-center w-full mx-auto bg-background transition-shadow duration-300 py-6 space-y-4'>
      {/* Profile Header */}
      <div className='flex items-start space-x-4 w-full px-6'>
        <div className='relative'>
          <ProfileImg width={60} image={user?.image || '/assets/images/HIPC_DEFAULT_PROFILE.png'} />
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold text-text-secondary'>{user?.name}</h2>
          <p className='text-sm text-text-tertiary'>{user?.email}</p>
          <div className='flex items-center mt-2 space-x-2'>
            <Tier tier={15} size={20} />
            <span className='text-sm font-medium text-text-secondary'>골드 1</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='flex flex-col w-full space-y-4 pt-4 px-6 border-t border-border'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col items-center p-3 bg-background-secondary rounded-lg'>
            <span className='text-2xl font-bold text-infosys-blue'>50</span>
            <span className='text-sm text-gray-600 dark:text-gray-300 text-center'>전체 푼 문제 수</span>
          </div>
          <div className='flex flex-col items-center p-3 bg-background-secondary rounded-lg'>
            <span className='text-2xl font-bold text-infosys-purple'>20</span>
            <span className='text-sm text-gray-600 dark:text-gray-300 text-center'>이번 분기 문제</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileStats
