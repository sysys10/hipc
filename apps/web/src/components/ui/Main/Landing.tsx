'use server'

import Image from 'next/image'
import Link from 'next/link'

export default async function Landing() {
  return (
    <div className='min-h-screen relative'>
      <div className='absolute top-0 left-0 w-full h-screen'>
        <Image src='/assets/images/HIPC_BG_EFFECT.svg' loading='eager' fill priority alt='bg-effect' />
      </div>
      <div className='flex md:flex-row pt-40 md:pt-52 flex-col w-full max-w-7xl mx-auto px-2 md:px-6'>
        <div className='w-full'>
          <div className='text-center md:text-start'>
            <h1 className='md:text-[3.5rem] font-extrabold text-4xl mb-6 md:!leading-[60px]'>
              매일 한 걸음씩.
              <br />
              함께 성장하는 알고리즘 커뮤니티.
            </h1>
            <p className='text-base'>Hanyang University Infosys Problem-Solving Club HIPC</p>
            <div className='mt-10 space-x-2'>
              <Link
                href='https://www.acmicpc.net/group/22905'
                target='_blank'
                className='bg-cyan-900 hover:bg-cyan-800 text-white font-semibold transition-colors duration-300 relative px-8 py-3 text-base rounded-md'
              >
                그룹 가입하기
              </Link>
              <Link href='/study' className='bg-black/20 hover:bg-black/30 text-black font-semibold transition-colors duration-300 relative px-8 py-3 text-base rounded-md'>
                스터디 참여
              </Link>
            </div>
          </div>
          {/* <div className='bg-white/40 h-[20rem] absolute right-10 bottom-10 rounded-xl w-[30rem]'>
            <AnimatedCodeEditor />
          </div> */}
          {/* <StatGrid /> */}
        </div>
        <div className='max-w-xl h-96 w-full flex items-center justify-center relative' style={{ minHeight: '384px' }}>
          {/* 이미지에 placeholder와 priority 추가 */}
          <Image src='/assets/icons/HIPC_software.svg' alt='softwares' fill sizes='(max-width: 768px) 100vw, 580px' priority style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className='p-8 mt-8 flex items-center justify-center font-sans'>
        <div className='bg-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10'>
          <div className='text-center'>
            <h3 className='text-gray-800 text-4xl font-extrabold'>
              1.1<span className='text-blue-600'>M+</span>
            </h3>
            <p className='text-gray-500 text-base font-semibold mt-3'>해결한 전체 문제</p>
          </div>
          <div className='text-center'>
            <h3 className='text-gray-800 text-4xl font-extrabold'>
              100<span className='text-blue-600'>K</span>
            </h3>
            <p className='text-gray-500 text-base font-semibold mt-3'>이번 분기 푼 문제 수</p>
          </div>
          <div className='text-center'>
            <h3 className='text-gray-800 text-4xl font-extrabold'>
              100<span className='text-blue-600'>명</span>
            </h3>
            <p className='text-gray-500 text-base font-semibold mt-3'>역대 스터디 인원수</p>
          </div>
          <div className='text-center'>
            <h3 className='text-gray-800 text-4xl font-extrabold'>
              3<span className='text-blue-600'>명</span>
            </h3>
            <p className='text-gray-500 text-base font-semibold mt-3'>현재 스터디 인원수</p>
          </div>
        </div>
      </div>
    </div>
  )
}
