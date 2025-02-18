import { KakaoMap } from './KakaoMap'

export default function Map() {
  return (
    <div className='w-full max-w-3xl mx-auto px-4'>
      <div className='w-full aspect-video rounded-lg overflow-hidden shadow-lg'>
        <KakaoMap />
      </div>

      <div className='space-y-6 pt-10'>
        <div>
          <h3 className='text-xl font-bold mb-2'>주소</h3>
          <p className='text-gray-600'>[00000]</p>
          <p className='text-gray-600'>서울특별시 성동구 000,</p>
          <p className='text-gray-600'>한양대학교 it/bt관 2xx호, 정보시스템학과 과방</p>
        </div>

        <div>
          <h3 className='text-xl font-bold mb-2'>이메일</h3>
          <p className='text-gray-600'>ys1014@hanyang.ac.kr</p>
        </div>

        <div>
          <h3 className='text-xl font-bold mb-2'>문의하기</h3>
          <p className='text-gray-600'>스터디 개설 혹은 벌금, 기타 문의사항은 이메일로 연락 부탁드립니다.</p>
          <p className='text-gray-600'>채널톡을 이용한다면 더욱 빠르게 답변을 받으실 수 있습니다.</p>
        </div>
      </div>
    </div>
  )
}
