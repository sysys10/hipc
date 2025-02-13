import { PaginationEllipsis, PaginationItem, PaginationLink } from '@packages/ui/components/pagination'

export const generatePaginationItems = ({ currentPage, totalPages, setCurrentPage }: { currentPage: number; totalPages: number; setCurrentPage: (page: number) => void }) => {
  const items = []
  const maxVisiblePages = 5
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  if (startPage > 1) {
    items.push(
      <PaginationItem key='start'>
        <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
      </PaginationItem>
    )
    if (startPage > 2) {
      items.push(
        <PaginationItem key='ellipsis-start'>
          <PaginationEllipsis />
        </PaginationItem>
      )
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    items.push(
      <PaginationItem key={i}>
        <PaginationLink onClick={() => setCurrentPage(i)} isActive={currentPage === i}>
          {i}
        </PaginationLink>
      </PaginationItem>
    )
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      items.push(
        <PaginationItem key='ellipsis-end'>
          <PaginationEllipsis />
        </PaginationItem>
      )
    }
    items.push(
      <PaginationItem key='end'>
        <PaginationLink onClick={() => setCurrentPage(totalPages)}>{totalPages}</PaginationLink>
      </PaginationItem>
    )
  }

  return items
}
