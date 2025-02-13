'use client'

import { getImageUrlsByNoticeId, getNoticeById } from '@/utils'
import supabase from '@/utils/supabase/supabase'
import { format } from 'date-fns'
import { EyeIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { AspectRatio } from '@packages/ui/components/aspect-ratio'
import { Badge } from '@packages/ui/components/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@packages/ui/components/card'
import { Separator } from '@packages/ui/components/separator'

interface NoticeDetailProps {
  notice: {
    created_at: string
    title: string
    content: string
    isImportant: boolean
    viewCount: number
    likeCount: number
    noticeId: string
  }
  imageUrls: string[]
}

export const NoticeDetail = ({ noticeId }: { noticeId: string }) => {
  const [notice, setNotice] = useState<NoticeDetailProps['notice'] | null>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    async function fetchNotice() {
      try {
        const supabaseClient = supabase()
        const notice = await getNoticeById(supabaseClient, noticeId)
        const imageUrls = await getImageUrlsByNoticeId(supabaseClient, noticeId)
        setNotice(notice)
        setImageUrls(imageUrls)
      } catch (error) {
        console.error('Error fetching notice:', error)
      }
    }
    fetchNotice()
  }, [noticeId])

  console.log('==========imageUrls==========\n', imageUrls)
  if (!notice) return <div>공지사항이 없습니다.</div>

  const formattedDate = format(new Date(notice.created_at), 'yyyy.MM.dd HH:mm')
  const contentLines = notice.content.split('\n')
  return (
    <Card className='max-w-4xl mx-auto my-8'>
      <CardHeader>
        <div className='flex items-center gap-2 mb-2'>
          {notice.isImportant && <Badge variant='destructive'>중요</Badge>}
          <span className='text-sm text-muted-foreground'>{formattedDate}</span>
        </div>
        <CardTitle className='text-2xl font-bold'>{notice.title}</CardTitle>
        <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2'>
          <div className='flex items-center gap-1'>
            <EyeIcon className='w-4 h-4' />
            <span>{notice.viewCount}</span>
          </div>
          <div className='flex items-center gap-1'>
            <ThumbsUpIcon className='w-4 h-4' />
            <span>{notice.likeCount}</span>
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className='pt-6'>
        {/* 이미지 갤러리 */}
        {imageUrls.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
            {imageUrls.map((url, index) => (
              <AspectRatio key={index} ratio={1 / 1}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/image/notice/${notice.noticeId}/${url}`}
                  alt={`공지사항 이미지 ${index + 1}`}
                  className='rounded-md object-cover w-full h-full'
                  fill
                />
              </AspectRatio>
            ))}
          </div>
        )}

        {/* 공지사항 내용 */}
        <div className='whitespace-pre-wrap text-base leading-relaxed'>
          {contentLines.map((line, index) => {
            // URL을 포함한 줄은 링크로 변환
            if (line.includes('http')) {
              const urlMatch = line.match(/(https?:\/\/[^\s]+)/g)
              if (urlMatch) {
                const parts = line.split(/(https?:\/\/[^\s]+)/g)
                return (
                  <p key={index} className='mb-2'>
                    {parts.map((part, i) =>
                      part.match(/(https?:\/\/[^\s]+)/g) ? (
                        <a key={i} href={part} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                          {part}
                        </a>
                      ) : (
                        part
                      )
                    )}
                  </p>
                )
              }
            }
            return (
              <p key={index} className={line.trim() === '' ? 'h-4' : 'mb-2'}>
                {line}
              </p>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
