'use client'

import React, { useEffect, useState } from 'react'

import cn from '@packages/ui/lib/utils'

const GradientText = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [shape, setShape] = useState({ x: 25, y: 123.22484 })
  const [position, setPosition] = useState({ x: -100, y: 50 })

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)

      const newShapeX = position * 0.05
      const newShapeY = 0 + position * 0.1
      const newPositionX = position * 0.08

      setShape({ x: newShapeX, y: newShapeY })
      setPosition({ x: newPositionX, y: 50 })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const gradientStyle = {
    '--shape': `${shape.x}% ${shape.y}%`,
    '--position': `${position.x}% ${position.y}%`
  }

  return (
    <div className='h-[300vh] bg-black py-20 relative'>
      <div className='sticky top-0 h-lvh w-full'>
        <div className='relative flex h-full w-full flex-col items-center justify-center'>
          <h2
            className={cn('block text-center text-4xl font-bold text-transparent bg-clip-text', `bg-[radial-gradient(var(--shape)_at_var(--position),#FFF,#1B1B1C)]`)}
            style={{
              ...gradientStyle,
              WebkitBackgroundClip: 'text'
            }}
          >
            하루 한문제씩
          </h2>
        </div>
      </div>
    </div>
  )
}

export default GradientText
