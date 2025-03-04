'use client'

import Link from 'next/link'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@packages/ui/components/table'

import useMemberHook from './hooks/useMemberHook'
import { TierToKorean, getTierColor } from './utils'

export default function Members() {
  const { ranking } = useMemberHook()

  return (
    <div className='h-fit w-full px-2 pt-4'>
      <Table className='w-full text-sm whitespace-nowrap overflow-x-auto'>
        <TableHeader>
          <TableRow>
            <TableHead>NO</TableHead>
            <TableHead>아이디</TableHead>
            <TableHead>이름</TableHead>
            <TableHead>푼 문제</TableHead>
            <TableHead>티어</TableHead>
            <TableHead>총 벌금</TableHead>
            <TableHead>납부</TableHead>
            <TableHead>미납</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ranking.map((item, index) => (
            <TableRow key={item.boj_handle}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Link href={`https://www.acmicpc.net/user/${item.boj_handle}`} target='_blank'>
                  {item.boj_handle}
                </Link>
              </TableCell>
              <TableCell>{item.nickname}</TableCell>
              <TableCell>{item.solved_cnt}</TableCell>
              <TableCell className={getTierColor(item.boj_tier)}>{TierToKorean(item.boj_tier)}</TableCell>
              <TableCell>{item.fine}</TableCell>
              <TableCell>{item.paid}</TableCell>
              <TableCell>{item.fine - item.paid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
