'use client'

import { ModalPortal } from '@/components/common'
import { useUserList } from '@/hooks/useUserList'
import { EllipsisIcon } from 'lucide-react'
import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@packages/ui/components/dropdown-menu'
import { Spinner } from '@packages/ui/components/spinner'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@packages/ui/components/table'

export function UserListTable() {
  const { userList, isLoading } = useUserList()
  const [isOpen, setIsOpen] = useState(false)
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <p className='text-sm mt-4 text-gray-500 font-semibold'>
        전체 사용자 <span className='text-blue-500'>{userList.length}</span>명
      </p>
      <Table className='mt-4 overflow-y-auto max-h-[calc(100vh-4rem-2.5rem)] h-full px-4'>
        <TableHeader>
          <TableRow className='bg-gray-100'>
            <TableHead>id</TableHead>
            <TableHead>이름</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>기타 정보</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='overflow-y-auto max-h-[calc(100vh-4rem-2.5rem)] h-full'>
          {userList.map((user) => (
            <TableRow key={user.id} className='h-12'>
              <TableCell className='w-40'>{user.id}</TableCell>
              <TableCell>{user.name || 'null'}</TableCell>
              <TableCell>{user.email || 'null'}</TableCell>
              <TableCell>
                <p className='text-sky-500 cursor-pointer' onClick={handleOpen}>
                  프로그램 관리
                </p>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisIcon className='h-4' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='rounded-lg'>
                    <DropdownMenuItem className='flex justify-center w-full h-full cursor-pointer'>
                      <p
                        className='text-gray-500 cursor-pointer'
                        onClick={handleOpen}
                      >
                        계정 상세보기
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex justify-center w-full h-full cursor-pointer'>
                      <p className='text-red-500' onClick={handleOpen}>
                        삭제
                      </p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalPortal isOpen={isOpen} handleClose={handleClose}>
        <div>
          <h1>프로그램 관리</h1>
        </div>
      </ModalPortal>
    </div>
  )
}
