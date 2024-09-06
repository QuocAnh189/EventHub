//hook
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useForm } from 'react-hook-form'

//components
import { PageHeader } from '@layouts/components/PageHeader'
import { EventCardExplore } from '@components/events/EventCardExplore'
import SidebarExplore from '@components/SidebarExplore'
import { Loader } from '@components/Loader'
// import NotData from '@components/NotData'
import Search from '@ui/Search'
import Select from '@ui/Select'
import Pagination from '@ui/Pagination'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'

//interfaces vs type
import { IMetadataEventResponse, initParamsEvent } from '@type/event.type'
import { IEvent } from '@interfaces/contents/event.interface'

//i18
import { withTranslation } from 'react-i18next'
import SideBarExploreResponsive from '@components/SideBarExploreResponsive'

const event: any = {
  coverImage: null,
  name: 'My Event',
  startTime: '2022-12-12T12:00:00.000Z',
  location: 'HCM',
  description:
    'This is a description This is a description This is a description This is a description This is a description This is a description This is a description',
  eventPaymentType: 'PAID',
  priceRange: {
    startRange: 100
  }
}

const ExploreScreen = ({ t }: any) => {
  const { watch, setValue } = useForm({
    defaultValues: initParamsEvent
  })

  const { data, isFetching, refetch } = useGetEventsQuery(watch())

  useEffect(() => {
    setValue('page', 1)
  }, [
    watch().type,
    watch().search,
    watch().categoryIds,
    watch().order,
    watch().priceRange?.startRange,
    watch().rates?.length
  ])

  useEffect(() => {
    refetch()
  }, [watch().page])

  const [meta, setMeta] = useState<IMetadataEventResponse>()
  const [events, setEvents] = useState<IEvent[]>([])

  console.log(events)

  useEffect(() => {
    if (data) {
      setMeta(data.metadata)
      setEvents(data?.items)
    }
  }, [data])

  const pagination = usePagination(meta?.totalCount, initParamsEvent.size)

  useEffect(() => {
    setValue('page', pagination.currentPage)
  }, [pagination.currentPage])

  return (
    <div className='w-full'>
      <PageHeader title={t('header.title')} />
      <form className='flex gap-8 py-8'>
        <SidebarExplore watch={watch} setValue={setValue} />
        <div className='relative flex flex-1 flex-col items-center mb-10'>
          <div className='w-full flex items-center justify-between pb-4 px-4 mdl:px-0'>
            <div className='flex items-center gap-2'>
              <p className='text-gray500 inline-block text-header'>{t('sort')}: </p>
              <Select
                placeholder={t('asc')}
                options={[
                  { value: 'ASC', label: t('asc') },
                  { value: 'DESC', label: t('desc') }
                ]}
                onChange={(value: any) => {
                  setValue('order', value.value)
                }}
              />
            </div>

            <Search
              wrapperClass='lg:w-[326px]'
              placeholder={t('search')}
              onChange={(query: string) => {
                setValue('search', query)
              }}
            />
          </div>

          <SideBarExploreResponsive watch={watch} setValue={setValue} />

          {isFetching && (
            <div className='relative w-full h-[300px] flex items-center justify-center'>
              <Loader />
            </div>
          )}

          {!isFetching && (
            <div className='w-full grid xl:grid-cols-2 gap-8 grid-rows-5'>
              {Array(9)
                .fill(1)
                .map((_, index: number) => (
                  <EventCardExplore key={`event-${index}`} event={event} />
                ))}
            </div>
          )}

          {/* {events.length !== 0 && !isFetching ? (
            <div className='w-full grid grid-cols-2 gap-8 grid-rows-5'>
              {Array(9)
                .fill(1)
                .map((_, index: number) => (
                  <EventCardExplore key={`event-${index}`} event={event} />
                ))}
            </div>
          ) : (
            <div className='relative w-full h-[300px] flex items-center justify-center mt-20'>
              <NotData />
            </div>
          )} */}

          <div className='absolute w-full -bottom-20 left-0 right-0 flex items-center justify-center'>
            {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
          </div>
        </div>
      </form>
    </div>
  )
}

export default withTranslation('explore')(ExploreScreen)
