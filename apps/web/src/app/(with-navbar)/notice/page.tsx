import { getNoticesWithDetails } from '@/services'
import { NoticeTable } from '@components/ui'
import { Suspense } from 'react'

export default async function NoticePage() {
  const notices = await getNoticesWithDetails()

  return (
    <div className='w-full justify-center items-center pt-20 min-h-screen bg-background'>
      <Suspense fallback={<div className='text-center'>Loading notices...</div>}>
        <NoticeTable notices={notices} />
      </Suspense>
    </div>
  )
}

export const dynamic = 'force-dynamic'
