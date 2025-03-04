import { KakaoMap } from './KakaoMap'
import { MAP } from './map.constant'

export default async function Map() {
  return (
    <div className='w-full max-w-3xl mx-auto px-4'>
      <div className='w-full aspect-video rounded-lg overflow-hidden shadow-lg'>
        <KakaoMap />
      </div>

      <div className='space-y-6 pt-10'>
        <div>
          <h3 className='text-xl font-bold mb-2'>주소</h3>
          <p className='text-gray-600'>{MAP.address}</p>
          <p className='text-gray-600'>{MAP.place}</p>
        </div>

        <div>
          <h3 className='text-xl font-bold mb-2'>이메일</h3>
          <p className='text-gray-600'>{MAP.email}</p>
        </div>

        <div>
          <h3 className='text-xl font-bold mb-2'>문의하기</h3>
          <p className='text-gray-600'>{MAP.voc}</p>
        </div>
      </div>
    </div>
  )
}
