import StudyContainer from '@/components/ui/Study/StudyContainer'
import { Suspense } from 'react'

export default function StudyPage() {
  return (
    <div className='min-h-screen w-full max-w-5xl mx-auto px-4 py-8'>
      <Suspense fallback={<div />}>
        <StudyContainer />
      </Suspense>
    </div>
  )
}
