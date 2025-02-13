'use client'

import { useMounted } from '@/hooks'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  // 처음 마운트될 때까지 아무것도 렌더링하지 않음

  if (!mounted) {
    // 아이콘과 비슷한 크기의 빈 div를 반환하여 레이아웃 시프트 방지
    return <Moon className='h-6 w-6' />
  }

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='w-6 h-6'>
      {theme === 'dark' ? <Sun className='h-full w-full' /> : <Moon className='h-full w-full' />}
    </button>
  )
}
