//hooks
import { useState, useEffect } from 'react'
import { useDebounce } from '@hooks/useDebounce'
import { usePagination } from '@hooks/usePagination'

//components
import TicketGridItem from '@components/TicketGridItem'
import Pagination from '@ui/Pagination'

//interface
import { ITicket } from '@interfaces/contents/ticket.interface'
import { useGetTicketsByCreatedQuery } from '@redux/apis/ticket.api'

//i18n
import { withTranslation } from 'react-i18next'

const TicketsGrid = ({ t }: any) => {
  const [params, setParams] = useState({ page: 1, pageSize: 8, search: '' })
  const [search, setSearch] = useState<string>('')
  const { data } = useGetTicketsByCreatedQuery(params)
  const debouncedSearchTerm = useDebounce(search, 500)

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex justify-end'>
        <input
          className='field-input w-[300px]'
          type='search'
          placeholder={t('search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='grid flex-1 items-start gap-[26px] mt-5 mb-[30px] sm:grid-cols-2 md:grid-cols-3 md:mt-7 lg:grid-cols-4'>
        {data?.items.map((ticket: ITicket, index: number) => (
          <TicketGridItem key={`${index}`} ticket={ticket} index={index} />
        ))}
      </div>
      {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </div>
  )
}

export default withTranslation('my_ticket')(TicketsGrid)
