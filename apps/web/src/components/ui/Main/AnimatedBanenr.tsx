import React from 'react'

import { StudyButton } from './StudyButton'

const AnimatedBanner = () => {
  return (
    <div className='w-full h-64 relative overflow-hidden mt-8 md:mt-16 rounded-lg bg-gradient-to-br from-[#c2e9fb] to-[#a1c4fd] flex flex-col items-center justify-center pt-4 space-y-2'>
      <div className='text-center text-5xl text-white font-semibold'>HIPC</div>
      <StudyButton />
    </div>
  )
}

export default AnimatedBanner
