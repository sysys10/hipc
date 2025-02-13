'use client'

import { HIPCicon } from '@/components/common'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { NoticeType } from '@types'

import { formatDate } from '@utils'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@packages/ui/components/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@packages/ui/components/carousel'

interface NoticeCarouselProps {
  initialNotices: NoticeType[]
}

function NoticeCarousel({ initialNotices = [] }: NoticeCarouselProps) {
  const [noticeList] = useState<NoticeType[]>(initialNotices)
  const [loading] = useState(!initialNotices.length)
  const [error] = useState<string | null>(null)

  if (loading) return <div className='w-full text-center py-4'>Loading notices...</div>
  if (error) return <div className='w-full text-center py-4 text-red-500'>Error: {error}</div>
  if (!noticeList.length) return <div className='w-full text-center py-4'>No notices available</div>

  return (
    <div className='w-full max-w-5xl mx-auto px-2'>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        <Carousel
          className='w-full'
          opts={{
            align: 'start'
          }}
        >
          <CarouselContent className='flex'>
            {noticeList.map((notice) => (
              <CarouselItem key={notice.noticeId} className='flex sm:basis-1/2 text-black md:basis-1/3'>
                <Card className='rounded-xl overflow-hidden flex flex-col aspect-10/16 bg-background'>
                  <CardContent className='flex flex-col w-full h-full p-0'>
                    <CardHeader className='bg-infosys-purple'>
                      <CardTitle className='text-xl text-white text-center line-clamp-1'>{notice.title}</CardTitle>
                    </CardHeader>
                    <div className='w-full px-2 mx-auto pt-2'>
                      <div className='relative w-full shadow-sm rounded-xl overflow-hidden aspect-16/10'>
                        <Image src={notice.imageUrls?.[0] ?? '/assets/images/imageNotFound.png'} alt={notice.title} fill className='object-cover' />
                      </div>
                    </div>
                    <CardDescription className='flex-1 mt-2 px-3 overflow-y-auto line-clamp-4'>
                      <div className='text-base whitespace-pre-wrap break-words'>
                        {notice.content}
                        <br />
                        <span className='text-xs text-secondary'>
                          {formatDate(notice.created_at)} · {notice.userName}
                        </span>
                      </div>
                    </CardDescription>
                    <CardFooter className='flex shrink-0 flex-col justify-start items-start p-0'>
                      <Link href={`/notice/${notice.noticeId}`} className='w-full flex text-lg bg-gray-50 justify-center py-2 items-center'>
                        자세히보러가기 <HIPCicon name='chevronRight' iconClassName='w-6 h-6' />
                      </Link>
                    </CardFooter>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='static md:absolute transform-none md:transform' />
          <CarouselNext className='static md:absolute transform-none md:transform' />
        </Carousel>
      </div>
    </div>
  )
}

export { NoticeCarousel }
