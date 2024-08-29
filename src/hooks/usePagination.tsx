//hook
import { useState } from 'react'

export const usePagination = (totalCount: any, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = Math.ceil(totalCount / itemsPerPage)

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, maxPage))
  }

  const showingOf = () => {
    const begin = currentPage * itemsPerPage
    const end = totalCount > itemsPerPage ? begin : totalCount
    return totalCount > 0 ? (
      <>
        <span className='font-semibold'>{end > totalCount ? totalCount : end}</span>/{totalCount}
      </>
    ) : (
      ''
    )
  }

  return { next, prev, goToPage, showingOf, currentPage, setCurrentPage, maxPage }
}
