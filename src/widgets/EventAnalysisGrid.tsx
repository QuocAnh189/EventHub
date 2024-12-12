//hooks
import { usePagination } from '@hooks/usePagination'
import { useState, useEffect } from 'react'
import { useDebounce } from '@hooks/useDebounce'

//components
import EventAnalysisItem from '@components/events/EventAnalysisItem'
import Pagination from '@ui/Pagination'
import Loader from '@components/Loader'

//interfaces
import { IMyEventAnalysis } from '@interfaces/contents'
import { IPagination } from '@interfaces/common.interface'

//redux
import { useGetEventAnalysisByCreatorQuery } from '@redux/apis/event.api'

interface IParamMyEventAnalysis {
  search: string
  pageSize: number
  page: number
}

const initParams = {
  search: '',
  pageSize: 12,
  page: 1
} as IParamMyEventAnalysis

interface Props {
  search_label: string
}

const EventAnalysisGrid = (props: Props) => {
  const { search_label } = props

  const [params, setParams] = useState(initParams)
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)
  const { data, isFetching } = useGetEventAnalysisByCreatorQuery(params)

  const pagination: IPagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex justify-end'>
        <input
          className='field-input w-[300px] md:w-[300px]'
          type='search'
          placeholder={search_label}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        className='flex-1 grid content-start gap-5 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3 md:gap-[26px]
                 md:mt-[27px] xl:grid-cols-5 2xl:grid-cols-6'
      >
        {isFetching && <Loader />}
        {data?.items.map((event: IMyEventAnalysis, index: number) => (
          <EventAnalysisItem key={`event-${index}`} event={event} index={index} />
        ))}
      </div>
      {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </div>
  )
}

export default EventAnalysisGrid
