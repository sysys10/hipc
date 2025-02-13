'use client'

import { ModalPortal } from '@/components/common'
import { EllipsisIcon } from 'lucide-react'
import { useState } from 'react'

import { useSubjects } from '@hooks'

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

export function ClassTable() {
  const {
    filteredSubjects,
    handleSearchSubject,
    handleFilterSubject,
    handleDeleteSubject
  } = useSubjects()
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = (id: string) => {
    const a = confirm('정말 삭제하시겠습니까?')
    if (a) {
      handleDeleteSubject(id)
    }
  }
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div>
      {' '}
      <p className='text-sm mt-4 text-gray-500 font-semibold'>
        전체 과목{' '}
        <span className='text-blue-500'>{filteredSubjects.length}</span>개
      </p>
      <Table className='mt-4 overflow-y-auto max-h-[calc(100vh-4rem-2.5rem)] h-full px-4'>
        <TableHeader>
          <TableRow className='bg-gray-100'>
            <TableHead>id</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>학년</TableHead>
            <TableHead>class</TableHead>
            <TableHead>주제</TableHead>
            <TableHead>강의 계획서</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='overflow-y-auto max-h-[calc(100vh-4rem-2.5rem)] h-full'>
          {filteredSubjects.map((subject, index) => (
            <TableRow key={subject.id} className='h-12'>
              <TableCell className='truncate'>{index + 1}</TableCell>
              <TableCell>{subject.title || 'null'}</TableCell>
              <TableCell>{subject.grade.join(', ') || 'null'}</TableCell>
              <TableCell>{subject.class || 'null'}</TableCell>
              <TableCell>{subject.theme || 'null'}</TableCell>
              <TableCell>{subject.syllabus || 'null'}</TableCell>
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
                        과목 상세보기
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex justify-center w-full h-full cursor-pointer'>
                      <p
                        className='text-red-500'
                        onClick={() => {
                          handleDelete(subject.id)
                        }}
                      >
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
          <p>과목상세보기</p>
        </div>
      </ModalPortal>
    </div>
  )
}
