'use server'

import Calendar from '@/components/ui/Calendar'
import HIPCFeatures from '@/components/ui/Main/Features'
import InfiniteText from '@/components/ui/Main/InfiniteText'
import Landing from '@components/ui/Main/Landing'
import { Suspense, lazy } from 'react'

const Map = lazy(() => import('@/components/ui/Map/Map'))
const Members = lazy(() => import('@/components/ui/Members'))
const Banner = lazy(() => import('@/components/ui/Main/Banner'))

export default async function Home() {
  return (
    <div className='w-full h-full justify-center items-center cursor-default font-pretendard'>
      <Landing />
      <div className='flex flex-col mx-auto mt-16 md:mt-32 mb-8'>
        <div className='mb-8 space-y-2 md:text-center text-left px-6'>
          <h1 className='md:text-4xl text-3xl font-semibold text-infosys-purple'>Features</h1>
          <p>HIPC는 1일 1 문제 해결을 통해 알고리즘 실력을 향상시키는 것을 목표로 합니다.</p>
        </div>
        <HIPCFeatures />
      </div>
      <div className='mt-8 md:mt-16 space-y-2'>
        <InfiniteText text='Hanyang Infosys ProblemSolving Club' />
        <Banner />
      </div>

      <div className='flex flex-col h-fit max-w-5xl mx-auto min-h-screen mt-10 md:mt-20'>
        <h1 className='md:text-4xl text-3xl md:text-center text-left px-6 font-semibold md:mb-8 mb-2 text-infosys-purple '>스터디원</h1>
        <Suspense fallback={<div />}>
          <Members />
        </Suspense>
      </div>
      <div className='flex flex-col h-screen mt-10 md:mt-20'>
        <h1 className='md:text-4xl text-3xl md:text-center text-left px-8 font-semibold md:mb-8 mb-4 text-infosys-purple'>일정</h1>
        <Suspense fallback={<div />}>
          <Calendar />
        </Suspense>
      </div>
      <div className='flex flex-col mt-20 md:mt-20 mb-20'>
        <Suspense fallback={<div />}>
          <Map />
        </Suspense>
      </div>
    </div>
  )
}
