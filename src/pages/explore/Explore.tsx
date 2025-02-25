//hooks
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'

//components
import PageHeader from '@layouts/components/PageHeader'
import Loader from '@components/Loader'
import Select from '@ui/Select'
import Pagination from '@ui/Pagination'
import SidebarExplore from '@components/SidebarExplore'
import EventCardExplore from '@components/events/EventCardExplore'
import SideBarExploreResponsive from '@components/SideBarExploreResponsive'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'

//interfaces
import { initParamsEvent } from '@dtos/event.dto'
import { ICardEvent } from '@interfaces/contents/event.interface'

//i18
import { withTranslation } from 'react-i18next'

const Explore = ({ t }: any) => {
  const [params, setParams] = useState<any>(initParamsEvent)
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data, isFetching } = useGetEventsQuery(params)

  const pagination = usePagination(data?.metadata?.totalCount, data?.metadata?.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  return (
    <div className='w-full'>
      <PageHeader title={t('header.title')} />
      <form className='flex gap-8 py-8'>
        <SidebarExplore params={params} setParams={setParams} />
        <div className='w-full relative flex flex-1 flex-col items-center mb-10 px-4 md:px-0'>
          <div className='w-full flex flex-col md:flex-row md:items-center gap-2 justify-between pb-4 px-4 mdl:px-0'>
            <div className='flex items-center gap-2'>
              <p className='text-gray500 inline-block text-header'>{t('sort')}: </p>
              <Select
                placeholder={t('asc')}
                options={[
                  { value: 'ASC', label: t('asc') },
                  { value: 'DESC', label: t('desc') }
                ]}
                onChange={(value: any) => {
                  setParams({ ...params, orderDesc: value.value === 'ASC' ? false : true })
                }}
              />
            </div>

            <input
              className='field-input w-[300px]'
              type='search'
              placeholder={t('search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <SideBarExploreResponsive params={params} setParams={setParams} />

          {isFetching && (
            <div className='relative w-full h-[300px] flex items-center justify-center'>
              <Loader />
            </div>
          )}

          {!isFetching && (
            <div className='w-full grid xl:grid-cols-2 gap-8 grid-rows-5'>
              {data?.items.map((event: ICardEvent, index: number) => (
                <EventCardExplore key={`event-${index}`} event={event} />
              ))}
            </div>
          )}

          <div className='flex items-center justify-center mt-10'>
            {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
          </div>
        </div>
      </form>
    </div>
  )
}

export default withTranslation('explore')(Explore)
