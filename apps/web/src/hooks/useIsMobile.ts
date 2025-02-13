import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md 브레이크포인트
    }

    // 초기 체크
    checkIsMobile()

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', checkIsMobile)

    // 클린업
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}
export { useIsMobile }
