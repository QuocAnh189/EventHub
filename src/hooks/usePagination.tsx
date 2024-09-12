//hook
import { useState } from 'react'

export const usePagination = (totalCount: number, itemsPerPage: number = 10) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const maxPage: number = Math.ceil(totalCount / itemsPerPage)

  const nextPage = (): void => {
    setCurrentPage((currentPage: number) => Math.min(currentPage + 1, maxPage))
  }

  const prevPage = (): void => {
    setCurrentPage((currentPage: number) => Math.max(currentPage - 1, 1))
  }

  const goToPage = (page: number): void => {
    const pageNumber: number = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, maxPage))
  }

  const showingOf = (): JSX.Element => {
    const begin = currentPage * itemsPerPage
    const end = totalCount > itemsPerPage ? begin : totalCount
    return totalCount > 0 ? (
      <>
        <span className='font-semibold'>{end > totalCount ? totalCount : end}</span>/{totalCount}
      </>
    ) : (
      <span />
    )
  }

  return { nextPage, prevPage, goToPage, showingOf, currentPage, setCurrentPage, maxPage }
}
