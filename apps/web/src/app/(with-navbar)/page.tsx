import { AboutButton, AnimatedCodeEditor, CalendarView, HIPCicon, Map, MasonryGridGallery, StatGrid } from '@/components'
import Link from 'next/link'

import { H0, H1, H2 } from '@packages/ui/components/typography'

export default async function Home() {
  return (
    <div className='w-full h-full justify-center items-center cursor-default bg-background text-text'>
      {/* <div className='min-h-[calc(100vh-var(--navbar-height))] py-10 flex flex-col justify-center relative px-4 bg-gradient-to-br from-[#003B4A] via-[#000814] to-[#003B4A]'> */}
      <div className='min-h-[calc(100vh-var(--navbar-height))] flex flex-col justify-center relative px-4 bg-gradient-to-br from-[var(--main-bg)] via-[#000814] to-[#003B4A]'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-transparent text-center bg-clip-text font-normal bg-gradient-to-br from-white to-sky-200 space-y-2'>
            <H0>
              한양인들을 위한
              <br className='md:hidden' />
              <span className='px-2 text-white'>
                {'{'}
                <span className='text-3xl md:text-4xl px-2 relative -top-0.5 text-orange-300'> PS </span>
                {'}'}
              </span>
              스터디
            </H0>
            <H2>Hanyang Infosys Problem-Solving Club</H2>
          </div>
          <div className='w-full mt-10 mb-12 md:mb-16 md:mt-12 gap-4 flex items-center flex-col sm:flex-row justify-center'>
            <Link
              href='/problem'
              className='hover:bg-white/30 transition-colors duration-300 relative min-w-[80px] px-8 py-2.5 text-base md:text-xl text-white bg-white/40 rounded-md after:absolute after:inset-0 after:bg-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity'
            >
              문제 풀기
            </Link>
            <Link
              href='/study'
              className='hover:bg-white/30 transition-colors duration-300 relative min-w-[80px] px-8 py-2.5 text-base md:text-xl text-white bg-white/40 rounded-md after:absolute after:inset-0 after:bg-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity'
            >
              스터디 참여하기
            </Link>
          </div>
        </div>

        <div className='w-full max-w-5xl mx-auto justify-between grid grid-cols-1 md:grid-cols-2 gap-6'>
          <StatGrid />
          <AnimatedCodeEditor />
        </div>
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2'>
          <a href='#1' className='animate-bounce inline-block'>
            <div className='text-3xl sm:text-4xl lg:text-5xl text-white opacity-60 hover:opacity-100 transition-opacity duration-300'>
              <HIPCicon name='chevronLeft' iconClassName='w-8 h-8 -rotate-90' />
            </div>
          </a>
        </div>
      </div>
      <div className='flex flex-col h-screen mt-10 md:mt-16'>
        <h1 className='text-4xl text-center font-semibold md:mb-8 mb-4 text-infosys-purple'>HIPC 일정</h1>
        <CalendarView />
      </div>
      <div className='flex flex-col mt-10 md:mt-16'>
        <h1 className='text-4xl text-center font-semibold md:mb-10 mb-6 text-infosys-purple'>스터디 장소</h1>
        <Map />
      </div>

      <div className='flex flex-col h-screen mt-8 md:mt-12'>
        <h1 className='text-4xl text-center font-semibold md:mb-8 mb-4 text-infosys-purple'>랭킹</h1>
        <span className='text-base text-center'>구현예정</span>
      </div>

      <div className='w-full h-64 bg-gradient-to-br mt-20 from-infosys-purple to-infosys-blue flex flex-col items-center justify-center gap-y-8'>
        <H1 className='text-center bg-gradient-to-br from-white to-purple-200 bg-clip-text text-transparent'>HIPC</H1>
        <AboutButton />
      </div>

      <div className='flex flex-col h-screen mt-8 md:mt-12'>
        <h1 className='text-4xl text-center font-semibold pb-16 mt-8 text-infosys-purple'>벌금</h1>
        <MasonryGridGallery />
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'
