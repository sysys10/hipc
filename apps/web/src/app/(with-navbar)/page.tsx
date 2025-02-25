'use server'

import Calendar from '@/components/ui/Calendar/Calendar'
import HIPCFeatures from '@/components/ui/Main/Features'
import InfiniteText from '@/components/ui/Main/InfiniteText'
import Landing from '@components/ui/Main/Landing'
import { Suspense, lazy } from 'react'

const Map = lazy(() => import('@/components/ui/Map/Map'))
const Members = lazy(() => import('@/components/ui/Members'))
const AnimatedBanner = lazy(() => import('@/components/ui/Main/AnimatedBanenr'))

export default async function Home() {
  return (
    <div className='w-full h-full justify-center items-center cursor-default'>
      <Landing />
      {/* <GradientText /> */}

      {/* <div className='flex flex-col h-[40rem] px-2 md:px-4 md:h-[50rem] mt-10 md:mt-16'>
        <h1 className='text-3xl text-center font-semibold md:mb-8 mb-4 text-infosys-purple'>HIPC 일정</h1>
        <Suspense fallback={<div />}>
          <CalendarView />
        </Suspense>
      </div> */}
      <div className='flex flex-col mx-auto mt-16 md:mt-32 mb-8'>
        <div className='mb-8 space-y-2'>
          <h1 className='text-4xl text-center font-semibold text-infosys-purple'>Features</h1>
          <p className='text-center'>HIPC는 1일 1 문제 해결을 통해 알고리즘 실력을 향상시키는 것을 목표로 합니다.</p>
        </div>
        <HIPCFeatures />
      </div>
      <InfiniteText text='Hanyang Infosys ProblemSolving Club' />
      <AnimatedBanner />

      <div className='flex flex-col h-screen max-w-5xl mx-auto mt-10 md:mt-20'>
        <h1 className='text-4xl text-center font-semibold md:mb-10 mb-6 text-infosys-purple'>스터디원</h1>
        <Suspense fallback={<div />}>
          <Members />
        </Suspense>
      </div>
      <div className='flex flex-col mt-10 md:mt-20'>
        <h1 className='text-4xl text-center font-semibold md:mb-10 mb-6 text-infosys-purple'>스터디 장소</h1>
        <Suspense fallback={<div />}>
          <Map />
        </Suspense>
      </div>
      <div className='flex flex-col h-screen mt-10 md:mt-20 mb-20'>
        <h1 className='text-4xl text-center font-semibold md:mb-10 mb-6 text-infosys-purple'>일정</h1>
        <Suspense fallback={<div />}>
          <Calendar />
        </Suspense>
      </div>
    </div>
  )
}
