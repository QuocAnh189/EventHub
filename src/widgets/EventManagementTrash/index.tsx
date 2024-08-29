/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
/* eslint-disable no-duplicate-case */
// hooks
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'

// components
import Select from '@ui/Select'
import CardMyEvent from '@components/event/CardMyEvent'
import Pagination from '@ui/Pagination'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import ConfirmDialog from '@components/Dialog'
import Search from '@ui/Search'
import NotData from '@components/NotData'

// constants
import { EVENT_STATUS_OPTIONS, EVENT_SELLER_OPTIONS, IOptionSelect } from '@constants/options'

// data placeholder
import { useAppSelector } from '@hooks/useRedux'

// interface
import { IEvent } from 'interfaces/contents/event'
import { ICategory } from 'interfaces/contents/category'

//component
import { Loader } from '@components/Loader'

// types
import { IFilterEvent, IMetadataEventReponse, IParamsEvent } from '@type/event'
import { initFilterEvent, initParamsMyEvent } from '@type/event'

//redux
import { RootState } from '@redux/store'
import { useGetEventsTrashByUserIdQuery } from '@redux/services/userApi'
import { useRestoreEventMutation } from '@redux/services/eventApi'
import { toast } from 'react-toastify'

const EventManagementTrash = () => {
  const categories = useAppSelector((state: RootState) => state.persistedReducer.category.categories)
  const user = useAppSelector((state: RootState) => state.persistedReducer.user.user)

  const [fetchFilter, setFetchFilter] = useState<IParamsEvent>(initParamsMyEvent)

  const [metadata, setMetadata] = useState<IMetadataEventReponse>()
  const [events, setEvents] = useState<IEvent[]>([])

  const [checkedAll, setCheckedAll] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [filters, setFilters] = useState<IFilterEvent>(initFilterEvent)
  const [eventIds, setEventIds] = useState<string[]>([])

  const [restoreEvent] = useRestoreEventMutation()
  const {
    data,
    isSuccess,
    isFetching: fetchingEvents,
    refetch
  } = useGetEventsTrashByUserIdQuery({
    userId: user?.id!,
    params: { ...fetchFilter }
  })

  useEffect(() => {
    if (data) {
      setEvents(data.items)
      setMetadata(data.metadata)
    }
  }, [data])

  const pagination = usePagination(metadata?.totalCount, 4)

  useEffect(() => {
    setEventIds(checkedAll ? events.map((item) => item.id) : [])
  }, [checkedAll])

  useEffect(() => {
    setFetchFilter({ ...fetchFilter, page: pagination.currentPage })
  }, [pagination.currentPage])

  const handleFilterSelect = ({ value, label }: IOptionSelect, name: string) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: { value, label }
    }))
  }

  const handleApplyFilters = () => {
    setFetchFilter({ ...fetchFilter, type: filters.status?.value, categoryIds: filters.category.value })
  }

  const handleChecked = (id: string) => {
    if (eventIds.includes(id)) {
      const newEventIds = eventIds.filter((eventId) => eventId !== id)
      setEventIds(newEventIds)
    } else {
      setEventIds([...eventIds, id])
    }
  }

  const handleRestoreEvents = async () => {
    try {
      if (eventIds.length) {
        const result = await restoreEvent(eventIds).unwrap()

        if (result) {
          toast.success('Restore Event successfully')
          refetch()
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleRefect = () => {
    refetch()
  }

  if (fetchingEvents) {
    return <Loader />
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex items-center justify-between'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6'>
          <Select
            options={EVENT_STATUS_OPTIONS}
            value={filters?.status}
            placeholder='Status'
            onChange={(e: IOptionSelect) => handleFilterSelect(e, 'status')}
          />
          <Select
            options={categories.map((category: ICategory) => {
              return { value: category.id, label: category.name }
            })}
            value={filters?.category}
            placeholder='Category'
            onChange={(e: IOptionSelect) => handleFilterSelect(e, 'category')}
          />
          <Select
            options={EVENT_SELLER_OPTIONS}
            value={filters.eventTicketType}
            placeholder='Price'
            onChange={(e: any) => handleFilterSelect(e, 'eventTicketType')}
          />
          <div className='grid grid-cols-2 gap-3'>
            <button className='btn bg-primary flex text-white !gap-[5px]' onClick={handleApplyFilters}>
              Filter
            </button>
            <button
              className='btn btn--outline blue !h-[44px]'
              onClick={() => {
                setFilters(initFilterEvent)
              }}
            >
              Clear
            </button>
          </div>
        </div>

        <Search
          wrapperClass='lg:w-[326px]'
          placeholder='Search Event'
          onChange={(query: string) => {
            setFetchFilter({ ...fetchFilter, search: query })
          }}
        />
      </div>

      <div className='w-full flex items-center justify-between py-4'>
        {events.length !== 0 && (
          <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              sx={{ '& .MuiFormControlLabel-label': { color: 'var(--header)' } }}
              control={
                <Checkbox
                  sx={{ color: 'var(--header)' }}
                  checked={checkedAll}
                  onChange={() => {
                    setCheckedAll(!checkedAll)
                  }}
                />
              }
              label='Select all'
            />
          </FormGroup>
        )}
        <button onClick={handleRestoreEvents} className='btn bg-primary flex text-white !gap-[5px]'>
          Restore
        </button>
      </div>

      {events.length !== 0 && (
        <div className='flex flex-col gap-[22px]'>
          <div className='w-full grid grid-cols-2 gap-10'>
            {events?.map((event, index) => (
              <CardMyEvent
                key={`event-${index}`}
                event={event}
                checkedAll={checkedAll}
                eventIds={eventIds}
                onChecked={handleChecked}
                refect={handleRefect}
              />
            ))}
          </div>
          {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </div>
      )}

      {isSuccess && events.length === 0 && <NotData />}

      {openDialog && (
        <ConfirmDialog
          title={`Action Event`}
          description={`Are you sure want to delete this events`}
          open={openDialog}
          setOpen={(value: any) => {
            setOpenDialog(value)
          }}
          action='Ok'
          onHandle={() => {}}
          disabled={false}
        />
      )}
    </div>
  )
}

export default EventManagementTrash
