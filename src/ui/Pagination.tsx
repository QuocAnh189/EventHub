import classNames from 'classnames'

interface Props {
  pagination: any
}

export const Pagination = (props: Props) => {
  const { pagination } = props

  const groupLeftPage = [...Array(pagination.maxPage)]
    .map((_, index) => index + 1)
    .slice(
      pagination.currentPage >= 5 ? pagination.currentPage - 5 : 0,
      pagination.currentPage >= 5 ? pagination.currentPage : 5
    )

  const groupRightPage = [...Array(pagination.maxPage)]
    .map((_, index) => index + 1)
    .slice(pagination.maxPage - 5, pagination.maxPage)

  return (
    <div className='flex flex-wrap items-center gap-[18px] pb-6 border-b border-input-border'>
      {pagination.currentPage > 1 && (
        <button onClick={pagination.prev} aria-label='Previous page'>
          <i className='icon icon-chevrons-left-solid' />
        </button>
      )}
      <div className='flex flex-wrap gap-2.5'>
        {pagination.maxPage <= 10 ? (
          [...Array(pagination.maxPage)].map((_, i) => {
            return (
              <button
                className={classNames('page-btn subheading-2', { active: i + 1 === pagination.currentPage })}
                key={`{page}-${i + 1}`}
                onClick={() => pagination.goToPage(i + 1)}
                disabled={pagination.currentPage === i + 1}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </button>
            )
          })
        ) : (
          <div className='flex flex-row gap-2'>
            {(groupLeftPage[groupLeftPage.length - 1] < groupRightPage[0] || groupLeftPage.length === 0) &&
              groupLeftPage.map((page, index) => {
                return (
                  <button
                    className={classNames('page-btn subheading-2', { active: page === pagination.currentPage })}
                    key={`page-${index}`}
                    onClick={() => pagination.goToPage(page)}
                    disabled={pagination.currentPage === page}
                    aria-label={`Page ${page}`}
                  >
                    {page}
                  </button>
                )
              })}

            <div className={classNames('page-btn subheading-2')}>...</div>

            {groupRightPage.map((page, index) => {
              return (
                <button
                  className={classNames('page-btn subheading-2', { active: page === pagination.currentPage })}
                  key={`page-${index}`}
                  onClick={() => pagination.goToPage(page)}
                  disabled={pagination.currentPage === page}
                  aria-label={`Page ${page}`}
                >
                  {page}
                </button>
              )
            })}
          </div>
        )}
      </div>
      {pagination.currentPage < pagination.maxPage && (
        <button
          onClick={pagination.next}
          disabled={pagination.currentPage === pagination.maxPage}
          aria-label='Next page'
        >
          <i className='icon icon-chevrons-right-solid' />
        </button>
      )}
    </div>
  )
}
