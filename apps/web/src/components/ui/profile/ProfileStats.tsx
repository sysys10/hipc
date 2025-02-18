import Image from 'next/image'
import Link from 'next/link'

import { User } from '@types'

import { Button } from '@packages/ui/components/button'

import { ProfileImg } from '../Auth/ProfileImg'

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
function getTier(tier: number) {
  if (tier === 0) return '언랭크'
  const tierNames = ['브론즈', '실버', '골드', '플래티넘', '다이아몬드', '루비', '마스터']
  const level = 6 - (tier % 5 || 5)
  const tierIndex = Math.floor((tier - 1) / 5)
  return `${tierNames[tierIndex]} ${level}`
}

export function ProfileStats({ user }: { user: User | null }) {
  return (
    <div className='flex flex-col rounded-lg px-4 items-center w-full mx-auto bg-white  transition-shadow duration-300 py-6 space-y-4'>
      <div className='flex items-start space-x-4 w-full px-2 mb-4'>
        <div className='relative'>
          <ProfileImg width={60} image={user?.image || '/assets/images/HIPC_DEFAULT_PROFILE.png'} />
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold text-text-secondary'>{user?.name}</h2>
          <p className='text-sm text-text-tertiary'>{user?.email}</p>
          <div className='flex items-center mt-2 space-x-2'>
            {user?.profile_completed && <Tier tier={user?.boj_tier || 0} size={20} />}
            <span className='text-sm font-medium text-text-secondary'>{user?.profile_completed ? getTier(user?.boj_tier || 0) : ''}</span>
          </div>
        </div>
      </div>
      {!user?.profile_completed ? (
        <Link href='/study' className='w-full flex justify-center'>
          <Button variant='outline' size='full'>
            스터디 참여하기
          </Button>
        </Link>
      ) : (
        <div className='flex flex-col w-full space-y-4 pt-4 px-6 border-t border-border'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col items-center p-3 rounded-lg'>
              <span className='text-2xl font-bold text-infosys-blue'>50</span>
              <span className='text-sm text-gray-600 dark:text-gray-300 text-center'>푼 문제 수</span>
            </div>
            <div className='flex flex-col items-center p-3 rounded-lg'>
              <span className='text-2xl font-bold text-infosys-purple'>20</span>
              <span className='text-sm text-gray-600 dark:text-gray-300 text-center'>이번 분기 문제 수</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileStats
