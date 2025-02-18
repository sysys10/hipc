import { AssignStudy } from '@components/ui/Study/AsignStudy'

export default async function StudyAssignPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ name: string }> }) {
  const { id } = await params
  const { name } = await searchParams
  return (
    <div className='min-h-screen w-full mx-auto px-4 py-8'>
      <AssignStudy id={id} name={name} />
    </div>
  )
}
