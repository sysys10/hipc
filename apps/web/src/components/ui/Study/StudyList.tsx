'use client'

import supabaseClient from '@/utils/supabase/supabase'
import { useEffect, useState } from 'react'

import { StudyCardSkeleton } from './Skeleton/StudyCardSkeleton'
import { StudyCard } from './StudyCard'

export interface StudyType {
  id: string
  name: string
  tags: string[]
  desc: string
  location: string
  member_cnt: number
  startDate: string
  endDate: string
  imgUrl: string
  is_active: boolean
}

export function StudyList({ filter }: { filter: string }) {
  const [studyList, setStudyList] = useState<StudyType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchStudyList() {
      setIsLoading(true)
      const supabase = await supabaseClient()
      const { data, error } = await supabase.from('study').select('*').order('created_at', { ascending: false })
      if (error) {
        console.error(error)
        return
      }
      setStudyList(data)
      setIsLoading(false)
    }
    fetchStudyList()
  }, [])
  return (
    <>
      {isLoading ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          {Array.from({ length: 6 }).map((_, index) => (
            <StudyCardSkeleton key={index} />
          ))}
        </div>
      ) : filter ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          {studyList
            .filter((study: StudyType) => study.tags.includes(filter))
            .map((study: StudyType) => (
              <StudyCard key={study.id} study={study} />
            ))}
        </div>
      ) : (
        <div className='space-y-4 px-5'>
          <h1 className='text-2xl font-bold'>24-겨울 ~ 25-1학기</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
            {studyList
              .filter((study: StudyType) => study.startDate.startsWith('2025'))
              .map((study: StudyType) => (
                <StudyCard key={study.id} study={study} />
              ))}
          </div>
          <h1 className='text-2xl font-bold pt-6'>24-2학기</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
            {studyList
              .filter((study: StudyType) => study.startDate.startsWith('2024'))
              .map((study: StudyType) => (
                <StudyCard key={study.id} study={study} />
              ))}
          </div>
        </div>
      )}
    </>
  )
}
