'use client'

import { Award, CalendarClock, Code, TrendingUp, Users, Wallet } from 'lucide-react'
import React from 'react'

import FeatureCard from './FeatureCard'

const features = [
  {
    icon: Code,
    title: '일일 알고리즘 도전',
    description: '매일 하나의 알고리즘 문제를 통해 꾸준한 코딩 능력 향상과 문제 해결 스킬을 배양합니다.'
  },
  {
    icon: TrendingUp,
    title: '실력 성장 트래킹',
    description: '개인별 문제 해결 통계를 통해 성장 과정을 시각화하고 장기적인 개발 역량을 향상시킵니다.'
  },
  {
    icon: Wallet,
    title: '동기부여 벌금 시스템',
    description: '미달성 시 1000원의 벌금은 작지만 효과적인 동기부여 장치로 꾸준한 학습을 유도합니다.'
  },
  {
    icon: Users,
    title: '커뮤니티 기반 학습',
    description: '서로의 코드를 리뷰하고 다양한 해결책을 공유하며 함께 성장하는 학습 환경을 제공합니다.'
  },
  {
    icon: Award,
    title: '성취 보상 시스템',
    description: '문제 해결 연속 기록과 효율적인 알고리즘 구현에 대한 보상으로 성취감을 높입니다.'
  },
  {
    icon: CalendarClock,
    title: '유연한 학습 일정',
    description: '각자의 시간에 맞춰 문제를 해결하되, 하루라는 시간 제약으로 학습 규칙성을 유지합니다.'
  }
]
export default function HIPCFeatures() {
  return (
    <div className='flex flex-col items-center justify-start h-full space-y-10 md:space-y-20'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto px-4'>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} idx={index} />
        ))}
      </div>
    </div>
  )
}
