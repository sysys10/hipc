'use client'

import { useMounted } from '@/hooks'
import { motion } from 'framer-motion'
import React from 'react'

import { StudyButton } from './StudyButton'

const AnimatedBanner = () => {
  const isMounted = useMounted()
  if (!isMounted) return null
  const circles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20, // 20-80px 크기 범위
    x: Math.random() * 100, // 시작 위치 (%)
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15, // 15-40초 애니메이션 시간
    delay: Math.random() * 5
  }))

  // const textVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: 'easeOut'
  //     }
  //   }
  // }

  return (
    <div className='w-full h-64 relative overflow-hidden mt-8 md:mt-16 rounded-lg'>
      <div className='absolute inset-0 bg-gradient-to-br from-[#c2e9fb] to-[#a1c4fd] z-0' />

      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className='absolute rounded-full bg-white opacity-20'
          style={{
            width: circle.size,
            height: circle.size,
            left: `${circle.x}%`,
            top: `${circle.y}%`
          }}
          viewport={{ once: true }}
          whileInView={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{
            duration: circle.duration,
            ease: 'linear',
            repeat: Infinity,
            delay: circle.delay
          }}
        />
      ))}

      <div className='relative z-0 flex flex-col items-center justify-center h-full gap-y-8'>
        <div className='text-center'>
          <motion.div
            className='flex justify-center'
            initial='hidden'
            viewport={{ once: true }}
            whileInView='visible'
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* {letters.map((letter, index) => (
              <motion.div key={index} variants={textVariants} className='inline-block'>
                <span className='text-3xl md:text-5xl font-bold text-white drop-shadow-lg'>{letter}</span>
              </motion.div>
            ))} */}
            <span className='text-5xl font-bold text-white drop-shadow-lg'>HIPC</span>
          </motion.div>
        </div>
        <StudyButton />
      </div>
    </div>
  )
}

export default AnimatedBanner
