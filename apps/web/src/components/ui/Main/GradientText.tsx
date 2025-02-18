'use client'

import React, { useEffect, useState } from 'react'

import FallingCode from './FallingCode'

const GradientText = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate shape and position based on scroll
  const shape = `${25 + scrollPosition / 20}% ${150 + scrollPosition / 10}%`
  const position = `${50 + scrollPosition / 30}% 50%`

  // Calculate color brightness based on scroll
  const startColor = '#333333'
  const endColor = '#FFFFFF'

  // Calculate interpolation factor (0 to 1) based on scroll position
  const scrollFactor = Math.min(scrollPosition / 1000, 1)

  // Function to interpolate between two hex colors
  const interpolateColor = (start: string, end: string, factor: number) => {
    // Convert hex to RGB
    const startRGB = {
      r: parseInt(start.slice(1, 3), 16),
      g: parseInt(start.slice(3, 5), 16),
      b: parseInt(start.slice(5, 7), 16)
    }
    const endRGB = {
      r: parseInt(end.slice(1, 3), 16),
      g: parseInt(end.slice(3, 5), 16),
      b: parseInt(end.slice(5, 7), 16)
    }

    // Interpolate RGB values
    const resultRGB = {
      r: Math.round(startRGB.r + (endRGB.r - startRGB.r) * factor),
      g: Math.round(startRGB.g + (endRGB.g - startRGB.g) * factor),
      b: Math.round(startRGB.b + (endRGB.b - startRGB.b) * factor)
    }

    // Convert back to hex
    return `#${resultRGB.r.toString(16).padStart(2, '0')}${resultRGB.g.toString(16).padStart(2, '0')}${resultRGB.b.toString(16).padStart(2, '0')}`
  }

  const gradientColor = interpolateColor(startColor, endColor, scrollFactor)

  return (
    <div className='bg-black py-96 relative w-full' style={{ height: '300vh' }}>
      <h1
        className='text-8xl font-bold text-center sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent'
        style={{
          backgroundImage: `radial-gradient(${shape} at ${position}, ${gradientColor}, #1B1B1C)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          display: 'inline-block'
        }}
      >
        하루 한문제씩
      </h1>
      <FallingCode />
    </div>
  )
}

export default GradientText
