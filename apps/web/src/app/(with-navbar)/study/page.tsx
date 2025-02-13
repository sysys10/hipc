'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@packages/ui/components/button'
import { Input } from '@packages/ui/components/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@packages/ui/components/select'

const tempStudy = {
  id: '122131445115',
  name: '알고리즘',
  description: '알고리즘 스터디',
  type: 'algorithm',
  startDate: '2025-01-01',
  endDate: '2025-01-20',
  location: '한양대학교',
  membercnt: 10,
  studyThumbnail: '/assets/images/imageNotFound.png'
}

function StudyCard({ study }: { study: typeof tempStudy }) {
  return (
    <Link href={`/study/${study.id}`}>
      <div className='bg-white rounded-lg max-w-screen shadow-md bg-background-tertiary text-text overflow-hidden transition-shadow'>
        <div className='relative w-full h-48'>
          <Image src={study.studyThumbnail} alt={study.name} fill className='object-cover rounded-t-lg' />
        </div>
        <div className='p-4'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-lg font-semibold'>{study.name}</h3>
            <span className='px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-tertiary'>{study.type}</span>
          </div>
          <p className='text-gray-tertiary text-sm mb-3'>{study.description}</p>
          <div className='flex justify-between items-center text-sm text-gray-tertiary'>
            <span>{study.location}</span>
            <span>{study.membercnt}명</span>
          </div>
          <div className='mt-2 text-xs text-gray-tertiary'>
            {study.startDate} ~ {study.endDate}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function StudyPage() {
  return (
    <div className='min-h-screen w-full max-w-5xl mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <div className='flex gap-4'>
          <Select defaultValue='all'>
            <SelectTrigger className='w-20'>
              <SelectValue placeholder='스터디 유형' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              <SelectItem value='algorithm'>알고리즘</SelectItem>
              <SelectItem value='project'>프로젝트</SelectItem>
              <SelectItem value='cs'>CS</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder='스터디 검색' className='w-40' />
        </div>
        <Button>+ 스터디 추가하기</Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <StudyCard study={tempStudy} />
        <StudyCard study={tempStudy} />
        <StudyCard study={tempStudy} />
      </div>
    </div>
  )
}
