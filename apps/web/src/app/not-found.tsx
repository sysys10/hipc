'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='text-center space-y-6 max-w-lg'>
        {/* 404 숫자 */}
        <div className='relative'>
          <h1 className='text-9xl font-bold text-gray-200'>404</h1>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-4xl font-bold text-gray-800'>앗!</span>
          </div>
        </div>

        {/* 메시지 */}
        <div className='space-y-2'>
          <h2 className='text-2xl font-semibold text-gray-800'>페이지를 찾을 수 없습니다</h2>
          <p className='text-gray-600'>요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.</p>
        </div>

        {/* 버튼들 */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
          <button
            onClick={() => window.history.back()}
            className='px-6 py-3 bg-white text-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200'
          >
            이전 페이지로
          </button>
          <Link href='/' className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200'>
            홈으로 가기
          </Link>
        </div>

        {/* 추가 도움말 */}
        <div className='mt-12 text-sm text-gray-500'>
          <p>도움이 필요하신가요?</p>
          <Link href='/contact' className='text-blue-600 hover:underline'>
            고객센터 문의하기
          </Link>
        </div>
      </div>
    </div>
  )
}
