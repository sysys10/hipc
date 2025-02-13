'use client'

import Image from 'next/image'

import { useMounted } from '@hooks'

export function ProfileImg({ image, width = 40 }: { image: string; width?: number }) {
  const isMounted = useMounted()
  return (
    <div>
      <Image src={isMounted ? image : '/assets/images/HIPC_DEFAULT_PROFILE.png'} alt='profile' width={width} height={width} className='rounded-full' />
    </div>
  )
}
