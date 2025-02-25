'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { Badge } from '@packages/ui/components/badge'

import { StudyType } from './StudyList'

export function StudyCard({ study }: { study: StudyType }) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        if (study.is_active) {
          router.push(`/assign/${study.id}?name=${study.name}`)
        } else {
          toast.info('스터디 신청 기간이 아닙니다.')
        }
      }}
    >
      <div className='rounded-lg shadow-md cursor-pointer text-text overflow-hidden transition-shadow'>
        <div className='relative max-h-60 aspect-square w-full'>
          {study.imgUrl ? (
            <Image src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${study.imgUrl}`} alt={study.name} fill className='object-cover rounded-t-lg' />
          ) : (
            <div className='w-full h-full bg-gray-200 rounded-t-lg flex items-center justify-center'></div>
          )}
        </div>
        <div className='p-4 space-y-2'>
          <div className='flex gap-2'>
            {study.tags.map((tag) => (
              <Badge key={tag} className='px-2 text-nowrap py-1 rounded-full text-xs bg-background-secondary text-blue-500'>
                {tag}
              </Badge>
            ))}
          </div>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-lg font-semibold'>{study.name}</h3>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-gray-tertiary text-sm'>{study.desc}</p>
            <span className='shrink-0'>{study.member_cnt}명</span>
          </div>
          <div className='mt-2 text-sm text-gray-tertiary'>
            {study.startDate} ~ {study.endDate.slice(5, 10)}
          </div>
        </div>
      </div>
    </div>
  )
}
