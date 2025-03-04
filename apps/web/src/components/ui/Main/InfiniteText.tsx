'use client'

import { motion } from 'framer-motion'

export default function InfiniteText({ text, direction = 'right' }: { text: string; direction?: 'right' | 'left' }) {
  return (
    <motion.div className='overflow-hidden whitespace-nowrap w-full'>
      <div className='relative inline-flex'>
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className='inline-block'
            initial={{ x: direction === 'right' ? index * 500 : -index * 500 }}
            animate={{ x: direction === 'right' ? [index * 500, (index - 10) * 500] : [-index * 500, (index + 10) * 500] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 50,
                ease: 'linear',
                repeatDelay: 0
              }
            }}
          >
            <span className='text-2xl md:text-3xl font-bold text-infosys-purple'>{text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
