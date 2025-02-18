import { Skeleton } from '@packages/ui/components/skeleton'

export function StudyCardSkeleton() {
  return (
    <div className='bg-white rounded-lg shadow-md bg-background-tertiary text-text overflow-hidden transition-shadow'>
      <Skeleton className='h-60 bg-gray-200 w-full' />
      <div className='p-4'>
        <div className='flex justify-between items-center mb-2'>
          <Skeleton className='h-6 w-32 bg-gray-200' />
          <Skeleton className='h-6 w-16 rounded-full bg-gray-200' />
        </div>
        <Skeleton className='h-4 w-full mb-3 bg-gray-200' />
        <div className='flex justify-between items-center'>
          <Skeleton className='h-4 w-24 bg-gray-200' />
          <Skeleton className='h-4 w-16 bg-gray-200' />
        </div>
        <Skeleton className='h-4 w-32 mt-2 bg-gray-200' />
      </div>
    </div>
  )
}
