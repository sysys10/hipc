'use client'

import { motion } from 'framer-motion'

import { StatBox } from './StatBox'

const statsData: {
  title: string
  value: string | number
  unit?: string
  color: 'yellow' | 'blue' | 'green' | 'orange'
  icon?: React.ReactNode
}[] = [
  {
    title: '전체 해결 문제',
    value: 30506,
    unit: '문제',
    color: 'yellow'
  },
  {
    title: '이번 분기 해결',
    value: 1000,
    unit: '문제',
    color: 'blue'
  },
  {
    title: '분기 문제 해결 1위',
    value: 'ys10',
    color: 'green',

    icon: '👑'
  },
  {
    title: '랭크 상승 1위',
    value: 'ys10',
    color: 'orange',
    icon: '📈'
  }
] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const StatGrid = () => {
  return (
    <motion.div className='grid grid-cols-2 gap-4 md:gap-6 max-w-3xl' variants={container} initial='hidden' animate='show'>
      {statsData.map((stat) => (
        <motion.div key={stat.title} variants={item}>
          <StatBox title={stat.title} value={stat.value} unit={stat.unit || ''} variant={stat.color as 'yellow' | 'red' | 'green' | 'blue' | 'orange'} icon={stat.icon} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StatGrid
