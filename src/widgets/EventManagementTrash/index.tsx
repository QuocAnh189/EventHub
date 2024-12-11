//hooks
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'

//components
import Loader from '@components/Loader'
import CardMyEvent from '@components/events/CardMyEvent'
import Pagination from '@ui/Pagination'
import { toast } from 'react-toastify'

//redux
// import { useGetEventsTrashByUserIdQuery } from '@redux/apis/user.api'
import { useGetTrashEventsQuery, useRestoreEventMutation } from '@redux/apis/event.api'

//i18n
import { withTranslation } from 'react-i18next'

//interface vs type
import { IMyEvent } from '@interfaces/contents/event.interface'
import { IPagination } from '@interfaces/common.interface'
import { CircularProgress } from '@mui/material'

interface IParamMyTrashEvent {
  search: string
  pageSize: number
  page: number
}

const initParams = {
  search: '',
  pageSize: 6,
  page: 1
} as IParamMyTrashEvent

const EventManagementTrash = ({ t }: any) => {
  const [params, setParams] = useState<IParamMyTrashEvent>(initParams)
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data, isFetching } = useGetTrashEventsQuery(params)

  const [eventIds, setEventIds] = useState<string[] | any>([])

  const pagination: IPagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  const [RestoreEvents, { isLoading }] = useRestoreEventMutation()

  const handleChecked = (id: string) => {
    if (eventIds.includes(id)) {
      setEventIds(eventIds.filter((eventId: string) => eventId !== id))
    } else {
      setEventIds([...eventIds, id])
    }
  }

  const handleRestoreEvents = async () => {
    if (eventIds.length === 0) {
      toast.error('Please select at least one event')
      return
    }

    try {
      const result = await RestoreEvents(eventIds).unwrap()

      if (result) {
        toast.success('Restore events successfully')
        setEventIds([])
      }
    } catch (e) {
      toast.error('Some thing went wrong')
      console.log(e)
    }
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex items-center justify-between'>
        <button onClick={handleRestoreEvents} className='btn bg-primary flex text-white !gap-[5px]'>
          {isLoading ? <CircularProgress /> : 'Restore'}
        </button>
        <input
          className='field-input w-[300px] md:w-[300px]'
          type='search'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6'>
        <p className='text-header'>
          {t('management.view_events')}: {pagination.showingOf()}
        </p>
      </div>

      <div className='flex flex-col gap-[22px]'>
        {isFetching && <Loader />}
        <div className='w-full grid grid-cols-1 mdl:grid-cols-2 gap-10'>
          {data?.items.map((event: IMyEvent, index: number) => (
            <CardMyEvent
              key={`event-${index}`}
              event={event}
              eventIds={eventIds}
              onChecked={handleChecked}
              index={index}
            />
          ))}
        </div>
        {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>
    </div>
  )
}

export default withTranslation('my_event')(EventManagementTrash)
