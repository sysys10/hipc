import { SubjectForm } from '@/components/ui'

export default function SubjectCreatePage() {
  return (
    <div className='flex flex-col gap-4 h-full'>
      <div className='max-w-4xl mx-auto w-full px-2 md:px-4'>
        <div className='justify-between items-center mt-10'>
          <h1 className='text-2xl font-bold'>과목 생성</h1>
        </div>
        <SubjectForm />
      </div>
    </div>
  )
}
