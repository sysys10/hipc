import { CheckIcon, Loader2 } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@packages/ui/components/card'

const CrawlingModal = ({ isOpen, handleClose, crollData }: { isOpen: boolean; handleClose: () => void; crollData: any }) => {
  useEffect(() => {
    if (crollData) {
      setTimeout(() => {
        handleClose()
      }, 3000)
    }
  }, [crollData, handleClose])

  if (!isOpen) return null
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>
      <Card className='w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden'>
        <CardHeader className='border-b'>
          <CardTitle className='text-2xl font-semibold flex items-center gap-3'>
            {crollData?.tier ? (
              <>
                <CheckIcon className='w-6 h-6 text-white bg-green-500 rounded-full p-1' />
                크롤링 완료
              </>
            ) : (
              <>
                <Loader2 className='w-6 h-6 animate-spin text-blue-500' />
                크롤링 진행 중
              </>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent className='p-6 space-y-4'>
          <div className='space-y-4'>
            <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
              <span className='text-gray-600 font-medium'>티어</span>
              <div className='flex items-center gap-2'>
                {crollData?.tier && <Image src={`https://static.solved.ac/tier_small/${crollData?.tier}.svg`} alt='tier' width={20} height={20} />}
                <span className='text-lg font-semibold'>{crollData?.tier || '로딩 중...'}</span>
              </div>
            </div>

            <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
              <span className='text-gray-600 font-medium'>푼 문제 수</span>
              <span className='text-lg font-semibold text-blue-600'>{crollData?.solvedCount || '로딩 중...'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CrawlingModal
