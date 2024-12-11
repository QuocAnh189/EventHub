//hooks
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'

//components
import CardMyEvent from '@components/events/CardMyEvent'
import ConfirmDialog from '@components/Dialog'
import FilterItem from '@ui/FilterItem'
import Select from '@ui/Select'
import Pagination from '@ui/Pagination'

//constants
import {
  EVENT_MANAGEMENT_OPTIONS,
  EVENT_STATUS_OPTIONS,
  EVENT_SELLER_OPTIONS,
  EVENT_SELECT_OPTIONS,
  IOptionSelect
} from '@constants/options.constant'
import { EEventAction, EEventPaymentTicket, EEventVisibility, EEventStatus } from '@constants/enum.constant'

//component
import Loader from '@components/Loader'
import { toast } from 'react-toastify'

//redux
import { RootState } from '@redux/store'
import { useAppSelector } from '@hooks/useRedux'
import {
  useMakeEventPublicMutation,
  useMakeEventPrivateMutation,
  useDeleteMultipleEventMutation
} from '@redux/apis/event.api'
import { useGetEventByCreatorQuery } from '@redux/apis/event.api'

//i18n
import { withTranslation } from 'react-i18next'

//interface
import { ICategory } from 'interfaces/contents/category.interface'
import { IPagination } from '@interfaces/common.interface'
import { IMyEvent } from '@interfaces/contents'

interface IStatistics {
  totalAll: number
  totalPublic: number
  totalPrivate: number
}

interface IParamMyEvent {
  search: string
  pageSize: number
  page: number
  categoryIds?: string[]
  paymentType?: EEventPaymentTicket
  visibility?: EEventVisibility
  status?: EEventStatus
}

const initParams = {
  search: '',
  pageSize: 6,
  page: 1
} as IParamMyEvent

const EventManagement = ({ t }: any) => {
  const categories = useAppSelector((state: RootState) => state.persistedReducer.category.categories)

  const [params, setParams] = useState<IParamMyEvent>(initParams)
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data, isFetching } = useGetEventByCreatorQuery(params)

  const [MovePublicEvent, { isLoading: loadingPublic }] = useMakeEventPublicMutation()
  const [MovePrivateEvent, { isLoading: loadingPrivate }] = useMakeEventPrivateMutation()
  const [moveTrashEvents] = useDeleteMultipleEventMutation()

  const [visibility, setVisibility] = useState<EEventVisibility>(EEventVisibility.All)

  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [selectedAction, setSelectedAction] = useState<EEventAction>()
  const [eventIds, setEventIds] = useState<string[]>([])

  const statistic: IStatistics = data?.statistic
  const pagination: IPagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  const getQty = (category: string) => {
    switch (category) {
      case 'All':
        return statistic?.totalAll

      case 'Public':
        return statistic?.totalPublic

      case 'Private':
        return statistic?.totalPrivate

      default:
        break
    }
  }

  const handleSelectAction = (e: any) => {
    if (eventIds.length === 0) {
      toast.error('Please select at least one event')
      return
    }

    setOpenDialog(true)
    switch (e.label) {
      case 'Move to Publics':
        setSelectedAction(EEventAction.Public)
        break

      case 'Move to Privates':
        setSelectedAction(EEventAction.Private)
        break

      case 'Move to Trash':
        setSelectedAction(EEventAction.Trash)
        break

      default:
        break
    }
  }

  const handleChecked = (id: string) => {
    if (eventIds.includes(id)) {
      setEventIds(eventIds.filter((eventId: string) => eventId !== id))
    } else {
      setEventIds([...eventIds, id])
    }
  }

  const handleAction = async () => {
    if (eventIds.length === 0) {
      toast.error('Please select at least one event')
      return
    }

    switch (selectedAction) {
      case EEventAction.Public:
        handleMovePublicEvents(eventIds)
        break

      case EEventAction.Private:
        handleMovePrivateEvents(eventIds)
        break

      case EEventAction.Trash:
        handleTrashEvents(eventIds)
        break

      default:
        break
    }
  }

  const handleMovePublicEvents = async (ids: string[]) => {
    try {
      const result = await MovePublicEvent(ids).unwrap()
      if (result) {
        toast.success('Move to public successfully')
        setOpenDialog(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleMovePrivateEvents = async (ids: string[]) => {
    try {
      const result = await MovePrivateEvent(ids).unwrap()
      if (result) {
        toast.success('Move to private successfully')
        setOpenDialog(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleTrashEvents = async (ids: string[]) => {
    try {
      if (eventIds.length) {
        const result = await moveTrashEvents(ids).unwrap()
        if (result) {
          toast.success('Move events to trash successfully')
          setOpenDialog(false)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-wrap gap-2 mb-4'>
        <span className='text-header'>{t('management.label_event')}:</span>
        <div>
          {EVENT_MANAGEMENT_OPTIONS.map((option: IOptionSelect, index: number) => (
            <FilterItem
              type='filter'
              key={`filter-${index}`}
              text={option.label!}
              qty={getQty(option?.value)!}
              value={option?.value}
              active={visibility}
              onClick={(value) => {
                setVisibility(value)
                setParams({ ...params, visibility: value, page: 1 })
              }}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6'>
          <div>
            <label className='field-label text-sm' htmlFor='startTime'>
              {t('management.label_status')}
            </label>
            <Select
              options={EVENT_STATUS_OPTIONS}
              value={{ value: params.status, label: params.status || 'Status' }}
              placeholder={t('management.label_status')}
              onChange={(e: IOptionSelect) => setParams({ ...params, status: e.value, page: 1 })}
            />
          </div>
          <div>
            <label className='field-label text-sm' htmlFor='startTime'>
              {t('management.label_category')}
            </label>
            <Select
              options={categories.map((category: ICategory) => {
                return { value: category.id, label: category.name }
              })}
              placeholder={t('management.label_category')}
              onChange={(e: IOptionSelect) => setParams({ ...params, categoryIds: [e.value], page: 1 })}
            />
          </div>
          <div>
            <label className='field-label text-sm' htmlFor='startTime'>
              {t('management.label_price')}
            </label>
            <Select
              options={EVENT_SELLER_OPTIONS}
              value={{ value: params.paymentType, label: params.paymentType || 'Price' }}
              onChange={(e: any) => setParams({ ...params, paymentType: e.value, page: 1 })}
            />
          </div>
        </div>

        <input
          className='field-input w-[300px] md:w-[400px]'
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
        <div className='md:min-w-[280px]'>
          <Select
            options={
              visibility === 'All'
                ? [EVENT_SELECT_OPTIONS[2]]
                : EVENT_SELECT_OPTIONS.filter((item) => item.value !== visibility)
            }
            placeholder={t('management.select_action')}
            onChange={handleSelectAction}
          />
        </div>
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
          disabled={loadingPublic || loadingPrivate}
        />
      )}
    </div>
  )
}

export default withTranslation('my_event')(EventManagement)
