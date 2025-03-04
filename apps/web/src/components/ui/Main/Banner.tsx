import React from 'react'

import { StudyButton } from './StudyButton'

const Banner = async () => {
  return (
    <div className='w-full h-64 relative overflow-hidden rounded-lg bg-gradient-to-br from-[#c2e9fb] to-[#a1c4fd] flex flex-col items-center justify-center pt-4 space-y-4'>
      <div className='text-center text-4xl text-white font-semibold'>HIPC</div>
      <StudyButton />
    </div>
  )
}

export default Banner
