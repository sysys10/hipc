'use client'

import { HIPCicon } from '@/components/common'
import { useRouter, useSearchParams } from 'next/navigation'

import { Input } from '@packages/ui/components/input'

import { StudyList } from './StudyList'
import { StudyTag } from './StudyTag'

export default function StudyContainer() {
  const searchParams = useSearchParams()
  const filter = searchParams.get('filter') || ''
  const router = useRouter()
  return (
    <>
      <div className='flex justify-between items-center mb-8'>
        <div className='flex gap-4 items-end justify-between w-full'>
          <div className='flex gap-2 overflow-x-auto'>
            <StudyTag filter={filter} />
          </div>
          <div className='flex shrink-0 items-center gap-2 max-lg:hidden'>
            <Input placeholder='스터디 검색' className='w-80' onChange={(e) => router.push(`${window.location.pathname}?search=${e.target.value}`)} />
            <HIPCicon name='search' className='w-5 h-5' />
          </div>
        </div>
      </div>

      <StudyList filter={filter} />
    </>
  )
}
