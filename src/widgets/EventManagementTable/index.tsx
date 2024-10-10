//hooks
import { useCallback, useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'

//components
// import NotData from '@components/NotData'
import CardMyEvent from '@components/events/CardMyEvent'
import ConfirmDialog from '@components/Dialog'
import FilterItem from '@ui/FilterItem'
import Select from '@ui/Select'
import Pagination from '@ui/Pagination'
import Search from '@ui/Search'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

//constants
import {
  EVENT_MANAGEMENT_OPTIONS,
  EVENT_STATUS_OPTIONS,
  EVENT_SELLER_OPTIONS,
  EVENT_SELECT_OPTIONS,
  IOptionSelect
} from '@constants/options.constant'
import { EEventAction, EEventPrivacy } from '@constants/enum.constant'

//data placeholder
import { useAppSelector } from '@hooks/useRedux'

//interface
import { IEvent } from 'interfaces/contents/event.interface'
import { ICategory } from 'interfaces/contents/category.interface'

//component
// import Loader from '@components/Loader'
import { toast } from 'react-toastify'

//types
import { IFilterEvent, IMetadataEventResponse, IParamsEvent } from '@type/event.type'
import { initFilterEvent, initParamsMyEvent } from '@type/event.type'

//redux
import { RootState } from '@redux/store'
import { useMakeEventPublicMutation, useMakeEventPrivateMutation, useDeleteEventMutation } from '@redux/apis/event.api'
// import { useGetEventsByUserIdQuery } from '@redux/apis/user.api'

//i18n
import { withTranslation } from 'react-i18next'

const EventManagement = ({ t }: any) => {
  const categories = useAppSelector((state: RootState) => state.persistedReducer.category.categories)
  // const user = useAppSelector((state: RootState) => state.persistedReducer.user.user)

  const [fetchFilter, setFetchFilter] = useState<IParamsEvent>(initParamsMyEvent)

  const [movePublicEvent, { isLoading: loadingPublic }] = useMakeEventPublicMutation()
  const [movePrivateEvent, { isLoading: loadingPrivate }] = useMakeEventPrivateMutation()
  const [moveTrashEvent, { isLoading: loadingTrash }] = useDeleteEventMutation()

  const [metadata, setMetadata] = useState<IMetadataEventResponse>()
  const [events, setEvents] = useState<IEvent[]>([])
  const [category, setCategory] = useState<EEventPrivacy>(EEventPrivacy.ALL)

  const [checkedAll, setCheckedAll] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [filters, setFilters] = useState<IFilterEvent>(initFilterEvent)
  const [selectedAction, setSelectedAction] = useState<EEventAction>()
  const [eventIds, setEventIds] = useState<any>([])

  // const {
  //   data,
  //   isSuccess,
  //   isFetching: fetchingEvents,
  //   refetch
  // } = useGetEventsByUserIdQuery({
  //   userId: user?.id!,
  //   params: { ...fetchFilter, eventPrivacy: category }
  // })

  const dataByStatus = useCallback(() => {
    if (category === 'ALL') return metadata?.totalCount
    if (category === 'PUBLIC') return metadata?.totalPublic
    if (category === 'PRIVATE') return metadata?.totalPrivate
  }, [metadata?.totalCount, metadata?.totalPublic, metadata?.totalPrivate, category])

  // useEffect(() => {
  //   if (data) {
  //     setEvents(data.items)
  //     setMetadata(data.metadata)
  //   }
  // }, [data])

  useEffect(() => {
    setEvents([])
    setMetadata(undefined)
  }, [category])

  const pagination = usePagination(dataByStatus()!, 4)

  useEffect(() => {
    setFetchFilter({ ...fetchFilter, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setCheckedAll(false)
    // refetch()
  }, [category])

  useEffect(() => {
    setEventIds(checkedAll ? events.map((item) => item.id) : [])
  }, [checkedAll])

  const getQty = (category: any) => {
    switch (category) {
      case 'ALL':
        return metadata?.totalCount

      case 'PUBLIC':
        return metadata?.totalPublic

      case 'PRIVATE':
        return metadata?.totalPrivate

      default:
        break
    }
  }

  const handleFilterSelect = ({ value, label }: IOptionSelect, name: string) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: { value, label }
    }))
  }

  const handleApplyFilters = () => {
    setFetchFilter({ ...fetchFilter, type: filters.status?.value, categoryIds: filters.category.value })
  }

  const handleSelectAction = (e: any) => {
    setOpenDialog(true)
    switch (e.label) {
      case 'Move to Publics':
        setSelectedAction(EEventAction.PUBLIC)
        break

      case 'Move to Privates':
        setSelectedAction(EEventAction.PRIVATE)
        break

      case 'Move to Trash':
        setSelectedAction(EEventAction.TRASH)
        break

      default:
        break
    }
  }

  const handleChecked = (id: string) => {
    if (eventIds.includes(id)) {
      const newEventIds = eventIds.filter((eventId: string) => eventId !== id)
      setEventIds(newEventIds)
    } else {
      setEventIds([...eventIds, id])
    }
  }

  const handleAction = async () => {
    switch (selectedAction) {
      case EEventAction.PUBLIC:
        {
          try {
            if (eventIds.length) {
              const result = await movePublicEvent(eventIds).unwrap()
              if (result) {
                // setCategory(EEventPrivacy.ALL)
                // setFetchFilter({ ...fetchFilter, page: 1 })
                // pagination.goToPage(1)
                // refetch()
                toast.success('Move to public successfully')
                setOpenDialog(false)
              }
            }
          } catch (e) {
            console.log(e)
          }
        }
        break

      case EEventAction.PRIVATE:
        {
          try {
            if (eventIds.length) {
              const result = await movePrivateEvent(eventIds).unwrap()
              if (result) {
                // setCategory(EEventPrivacy.ALL)
                // setFetchFilter({ ...fetchFilter, page: 1 })
                // pagination.goToPage(1)
                // refetch()
                toast.success('Move to private successfully')
                setOpenDialog(false)
              }
            }
          } catch (e) {
            console.log(e)
          }
        }
        break

      case EEventAction.TRASH:
        {
          try {
            if (eventIds.length) {
              const result = await moveTrashEvent(eventIds).unwrap()
              if (result) {
                // setCategory(EEventPrivacy.ALL)
                // setFetchFilter({ ...fetchFilter, page: 1 })
                // pagination.goToPage(1)
                // refetch()
                toast.success('Move to trash successfully')
                setOpenDialog(false)
              }
            }
          } catch (e) {
            console.log(e)
          }
        }
        break

      default:
        break
    }
  }

  // const handleTrashEvents = (id: string | string[]) => {
  //   const newEvents = events.filter((event) => event.id !== id)
  //   if (!newEvents.length) {
  //     setFetchFilter({ ...fetchFilter, page: pagination.maxPage - 1 })
  //     pagination.prev()
  //   }
  //   setEvents(newEvents)
  //   refetch()
  // }

  const handleChangeOption = (value: EEventPrivacy) => {
    setFetchFilter({ ...fetchFilter, page: 1 })
    pagination.goToPage(1)
    setCategory(value)
  }

  const handleRefect = () => {
    // refetch()
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-wrap gap-2 mb-4'>
        <span className='text-header'>{t('management.label_event')}:</span>
        <div>
          {EVENT_MANAGEMENT_OPTIONS.map((option, index: number) => (
            <FilterItem
              type='filter'
              key={`filter-${index}`}
              text={option.label!}
              qty={getQty(option?.value)!}
              value={option?.value}
              active={category}
              onClick={(value) => {
                handleChangeOption(value)
              }}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6'>
          <Select
            options={EVENT_STATUS_OPTIONS}
            value={filters?.status}
            placeholder={t('management.label_status')}
            onChange={(e: IOptionSelect) => handleFilterSelect(e, 'status')}
          />
          <Select
            options={categories.map((category: ICategory) => {
              return { value: category.id, label: category.name }
            })}
            value={filters?.category}
            placeholder={t('management.label_category')}
            onChange={(e: IOptionSelect) => handleFilterSelect(e, 'category')}
          />
          <Select
            options={EVENT_SELLER_OPTIONS}
            value={filters.eventTicketType}
            placeholder={t('management.label_price')}
            onChange={(e: any) => handleFilterSelect(e, 'eventTicketType')}
          />
          <div className='grid grid-cols-2 gap-3'>
            <button className='btn bg-primary flex text-white !gap-[5px]' onClick={handleApplyFilters}>
              {t('management.filter')}
            </button>
            <button
              className='btn btn--outline blue !h-[44px]'
              onClick={() => {
                setFilters(initFilterEvent)
              }}
            >
              {t('management.clear')}
            </button>
          </div>
        </div>
        <Search
          wrapperClass='lg:w-[326px]'
          placeholder={t('management.search_event')}
          onChange={(query: string) => {
            setFetchFilter({ ...fetchFilter, search: query })
          }}
        />
      </div>
      <div className='flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6'>
        <p className='text-header'>
          {' '}
          {t('management.view_events')}: {pagination.showingOf()}
        </p>
        <div className='md:min-w-[280px]'>
          <Select
            options={
              category === 'ALL'
                ? [EVENT_SELECT_OPTIONS[2]]
                : EVENT_SELECT_OPTIONS.filter((item) => item.value !== category)
            }
            placeholder={t('management.select_action')}
            onChange={handleSelectAction}
          />
        </div>
      </div>

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
            label={t('management.select_all')}
          />
        </FormGroup>
      )}

      {/* {fetchingEvents && <Loader />} */}

      {events.length !== 0 && (
        <div className='flex flex-col gap-[22px]'>
          <div className='w-full grid grid-cols-1 lgl:grid-cols-2 gap-10'>
            {events?.map((event, index: number) => (
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

      <div className='flex flex-col gap-[22px]'>
        <div className='w-full grid grid-cols-1 mdl:grid-cols-2 gap-10'>
          {Array(4)
            .fill(1)
            .map((event, index: number) => (
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

      {/* {isSuccess && events.length === 0 && <NotData />} */}

      {openDialog && (
        <ConfirmDialog
          title={`Action Event`}
          description={`Are you sure want ${selectedAction} these events`}
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action='Ok'
          onHandle={handleAction}
          disabled={loadingPublic || loadingPrivate || loadingTrash}
        />
      )}
    </div>
  )
}

export default withTranslation('my_event')(EventManagement)
