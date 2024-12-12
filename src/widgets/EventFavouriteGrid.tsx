//hooks
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'
import { toast } from 'react-toastify'

//components
import EventFavouriteItem from '@components/events/EventFavouriteItem'
import Pagination from '@ui/Pagination'

//data placeholder
import { IPagination } from '@interfaces/common.interface'

//interfaces
import { IEventFavorite } from '@interfaces/contents'

// //data
// import events from '@db/event'

//redux
import { useGetFavouriteEventQuery } from '@redux/apis/event.api'
import { useUnfavouriteEventMutation } from '@redux/apis/event.api'

interface Props {
  search_label: string
}

const EventFavouriteGrid = (props: Props) => {
  const { search_label } = props

  const [params, setParams] = useState({ page: 1, pageSize: 12, search: '' })
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data } = useGetFavouriteEventQuery(params)
  const [UnFavouriteEvent, { isLoading }] = useUnfavouriteEventMutation()

  const pagination: IPagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  const handleUnFavouriteEvent = async (id: string) => {
    try {
      const result = await UnFavouriteEvent(id).unwrap()

      if (result) {
        if (data?.items.length === 1 && pagination.currentPage > 1) {
          setParams({ ...params, page: pagination.currentPage - 1 })
        }
        toast.success('Remove event from whist list successfully')
      }
    } catch (e) {
      toast.error('Something went wrong')
      console.log(e)
    }
  }

  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex justify-end'>
        <input
          className='field-input w-[300px]'
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
        {data?.items.map((event: IEventFavorite, index: number) => (
          <EventFavouriteItem
            key={`event-${index}`}
            event={event}
            index={index}
            onRemove={() => handleUnFavouriteEvent(event.id)}
            isLoading={isLoading}
          />
        ))}
      </div>

      {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </div>
  )
}

export default EventFavouriteGrid
