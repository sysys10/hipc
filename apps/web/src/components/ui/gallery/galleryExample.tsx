'use client'

import { useUserStore } from '@/stores'

export function MasonryGridGallery() {
  const user = useUserStore((state) => state.user)

  return (
    <>
      <div className='grid grid-cols-2 max-w-5xl mx-auto gap-4 md:grid-cols-4 overflow-hidden'>
        <div className='bg-gray-200 h-48'>{user?.email}</div>
      </div>
    </>
  )
}

export default MasonryGridGallery

// 있는 것만 띄우길 원한다면,
