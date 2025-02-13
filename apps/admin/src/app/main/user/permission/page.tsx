import { UserListTable } from '@/components/ui/user/useListTable'

export default function PermissionPage() {
  return (
    <div className='flex flex-col gap-4 h-full'>
      <div className='max-w-4xl mx-auto w-full px-2 md:px-4'>
        <div className='justify-between items-center mt-10'>
          <h1 className='text-2xl font-bold'>권한 관리</h1>
        </div>
        <UserListTable />
      </div>
    </div>
  )
}
