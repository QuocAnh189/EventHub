//hooks
import { usePagination } from '@hooks/usePagination'
import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'

//components
import EventFavouriteItem from '@components/events/EventFavouriteItem'
import Pagination from '@ui/Pagination'
import Search from '@ui/Search'

//constants
import { SELLER_SORT_OPTIONS } from '@constants/options.constant'

//data placeholder
import { IPagination } from '@interfaces/common.interface'

//interfaces
import { IEvent } from '@interfaces/contents'

//data
import events from '@db/event'

interface Props {
  search_label: string
}

const EventFavouriteGrid = (props: Props) => {
  const { search_label } = props

  const { width } = useWindowSize()
  const [sort] = useState(SELLER_SORT_OPTIONS[0])
  // const sortedSellers: any[] = sortSellers(sellers, sort.value)
  const pagination: IPagination = usePagination(events.length, width >= 1280 && width < 1536 ? 20 : 18)
  // const data = pagination.currentItems()

  useEffect(() => {
    pagination.setCurrentPage(1)
  }, [sort])

  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex justify-end'>
        <Search wrapperClass='lg:w-[326px]' placeholder={search_label} />
      </div>
      <div
        className='flex-1 grid content-start gap-5 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3 md:gap-[26px]
                 md:mt-[27px] xl:grid-cols-5 2xl:grid-cols-6'
      >
        {events.map((event: IEvent, index: number) => (
          <EventFavouriteItem key={`event-${index}-${sort.value}`} event={event} />
        ))}
      </div>
      <Pagination pagination={pagination} />
    </div>
  )
}

export default EventFavouriteGrid
