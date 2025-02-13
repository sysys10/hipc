'use client'

import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk'

export const KakaoMap = () => {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY!
  })
  if (loading) return <div className='w-full h-96 flex items-center justify-center bg-gray-900 text-white'>Loading...</div>
  if (error) return <div className='w-full h-96 flex items-center justify-center bg-gray-900 text-white'>Error...{JSON.stringify(error)}</div>

  return (
    <Map center={{ lat: 37.5559538819672, lng: 127.049281331623 }} style={{ width: '100%', height: '100%' }}>
      <MapMarker position={{ lat: 37.5559538819672, lng: 127.049281331623 }}>
        <div className='p-3 bg-white rounded-lg shadow-lg'>
          <h3 className='font-semibold text-black'>정보시스템학과 학생회실</h3>
          <p className='text-sm text-gray-600'>it/bt관 2xx호</p>
        </div>
      </MapMarker>
    </Map>
  )
}
