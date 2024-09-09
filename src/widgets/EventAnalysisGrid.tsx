/* eslint-disable react-hooks/exhaustive-deps */

// hooks
import { usePagination } from '@hooks/usePagination'
import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'

// components
import Pagination from '@ui/Pagination'
import EventAnalysisItem from '@components/events/EventAnalysisItem'
import Search from '@ui/Search'

// constants
import { SELLER_SORT_OPTIONS } from '@constants/options.constant'

// utils
import { sortSellers } from '@utils/helpers'

// data placeholder
import sellers from '@db/sellers'

const EventAnalysisGrid = () => {
  const { width } = useWindowSize()
  const [sort] = useState(SELLER_SORT_OPTIONS[0])
  const sortedSellers = sortSellers(sellers, sort.value)
  const pagination: any = usePagination(sortedSellers, width >= 1280 && width < 1536 ? 20 : 18)
  const data = pagination.currentItems()

  useEffect(() => {
    pagination.setCurrentPage(0)
  }, [sort])

  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex justify-end'>
        <Search wrapperClass='lg:w-[326px]' placeholder='Search Event' />
      </div>
      <div
        className='flex-1 grid content-start gap-5 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3 md:gap-[26px]
                 md:mt-[27px] xl:grid-cols-5 2xl:grid-cols-6'
      >
        {data.map((seller: any, index: any) => (
          <EventAnalysisItem key={`${seller.id}-${sort.value}`} seller={seller} index={index} />
        ))}
      </div>
      <Pagination pagination={pagination} />
    </div>
  )
}

export default EventAnalysisGrid
