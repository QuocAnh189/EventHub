// components
import Search from '@ui/Search'
import AppCard from '@components/AppCard'
import FilterItem from '@ui/FilterItem'
import Pagination from '@ui/Pagination'
import Empty from '@components/Empty'

// hooks
import { useState, useEffect } from 'react'
import { usePagination } from '@hooks/usePagination'

// constants
import { APPS_OPTIONS } from '@constants/options.constant'

// data placeholder
import apps from '@db/apps'

const AppsGrid = () => {
  const [query, setQuery] = useState<string>('')
  const [category, setCategory] = useState<string>('all')

  const getQty = (category: any) => {
    if (category === 'all') return apps.length
    return apps.filter((app) => app.categories.includes(category)).length
  }

  const filteredData = () => {
    return apps
      .filter((app) => app.name.toLowerCase().includes(query.toLowerCase()))
      .filter((app) => (category === 'all' ? true : app.categories.includes(category)))
  }

  const pagination: any = usePagination(filteredData(), 12)
  const data = pagination?.currentItems()

  useEffect(() => {
    pagination.goToPage(0)
  }, [query, category])

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
          <button className='btn btn--primary'>
            Add New Application <i className='icon-circle-plus-regular' />
          </button>
          <Search
            wrapperClass='w-full md:w-[326px]'
            placeholder='Search Application'
            query={query}
            setQuery={setQuery}
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          <span className='text-header'>Applications:</span>
          <div className='flex flex-wrap items-center gap-y-2.5'>
            {APPS_OPTIONS.map((option, index) => (
              <FilterItem
                key={`filter-${index}`}
                text={option.label!}
                qty={getQty(option.value)}
                value={option.value}
                active={category}
                onClick={setCategory}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-5 flex flex-col flex-1'>
        {data.length === 0 ? (
          <Empty />
        ) : (
          <div
            className='flex-1 mb-[35px] grid content-start gap-[26px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
                             2xl:grid-cols-4'
          >
            {data.map((app: any, index: any) => (
              <AppCard key={`item-${index}-${category}-page-${pagination.currentPage}`} index={index} app={app} />
            ))}
          </div>
        )}
        {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>
    </div>
  )
}

export default AppsGrid
