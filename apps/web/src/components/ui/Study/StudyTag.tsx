'use client'

import supabaseClient from '@/utils/supabase/supabase'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Badge } from '@packages/ui/components/badge'
import { Skeleton } from '@packages/ui/components/skeleton'
import cn from '@packages/ui/lib/utils'

export function StudyTag({ filter }: { filter: string }) {
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchTags = async () => {
      try {
        setIsLoading(true)
        const supabase = supabaseClient()
        const { data } = await supabase.from('tags').select('name')
        setTags(data?.map((tag) => tag.name) || [])
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTags()
  }, [])
  const router = useRouter()
  if (isLoading) return Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className='bg-gray-100 w-24 h-6 rounded-3xl' />)
  return tags.map((tag) => (
    <Badge
      variant={'outline'}
      onClick={() => {
        if (filter === tag) {
          router.push(`/study`)
        } else {
          router.push(`/study?filter=${tag}`)
        }
      }}
      className={cn('cursor-pointer  px-4 py-1 text-base text-gray-600 text-nowrap rounded-full', filter === tag && 'bg-black text-white')}
      key={tag}
    >
      {tag}
    </Badge>
  ))
}
