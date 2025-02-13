'use client'

import { generatePaginationItems } from '@/components/ui'
import { GalleryType } from '@/types'
import { formatDate } from '@/utils'
import Link from 'next/link'
import { useState } from 'react'

import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@packages/ui/components/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@packages/ui/components/table'

const ITEMS_PER_PAGE = 10

export function GalleryTable({ gallery }: { gallery: GalleryType[] }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil((gallery?.length ?? 0) / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentGallery = gallery?.slice(startIndex, endIndex) ?? []

  return (
    <div className='w-full max-w-5xl mx-auto px-2 md:px-3'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[60%]'>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentGallery.map((gallery) => (
            <TableRow key={gallery.galleryId} className='odd:bg-gray-50 h-12'>
              <TableCell>
                <Link href={`/gallery/${gallery.galleryId}`} className='hover:text-blue-600 transition-colors'>
                  {gallery.title}
                </Link>
              </TableCell>
              <TableCell>{gallery.userName}</TableCell>
              <TableCell>{formatDate(gallery.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='flex justify-center my-8'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
            {generatePaginationItems({ currentPage, totalPages, setCurrentPage })}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
