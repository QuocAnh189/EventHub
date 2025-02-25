//hooks
import { useEffect, useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useDebounce } from '@hooks/useDebounce'

//components
import EventCardSearchHome from '@components/events/EventCardSearchHome'
import Loader from '@components/Loader'
import Select from '@ui/Select'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'
import { useAppSelector } from '@hooks/useRedux'

//constant
import { EEventStatus } from '@constants/enum.constant'
import { EVENT_STATUS_OPTIONS, IOptionSelect } from '@constants/options.constant'

//interface
import { ICardSearchHome } from 'interfaces/contents/event.interface'
import { ICategory } from '@interfaces/contents'

// utils
import classNames from 'classnames'

//i18
import { withTranslation } from 'react-i18next'

interface IParamsEvents {
  search: string
  status: EEventStatus
  categoryIds: string[]
  size: number
}

const initParam = {
  search: '',
  status: EEventStatus.All,
  categoryIds: [],
  takeAll: false,
  size: 10
} as IParamsEvents

const SearchHome = ({ t }: any) => {
  const navigate: NavigateFunction = useNavigate()

  const categories = useAppSelector((state) => state.persistedReducer.category.categories)
  const categoriesOptions = categories?.map((category: ICategory) => ({
    value: category.id,
    label: category.name,
    icon: category.iconImageUrl,
    backgroundColor: category.color
  }))

  const [params, setParams] = useState(initParam)
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)
  const { data, isFetching } = useGetEventsQuery(params)

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  return (
    <div className='w-[90%] h-[95vh] m-auto'>
      <div className='relative w-full z-[999] min-w-[300px]'>
        <video autoPlay loop muted className='absolute right-0 top-0 h-auto w-full object-cover z-[-1] rounded-md'>
          <source
            src='https://res.cloudinary.com/dadvtny30/video/upload/v1732007926/eventhub/event/rveczhclrpalf03p4vc3.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='relative w-full h-[90%] z-[1000]'>
        <div className='sml:w-[500px] h-auto text-white px-[30px] pt-[30px] pb-[100px]'>
          <p className='sml:text-[2em] text-white sml:leading-10 font-extrabold'>{t('search_home.title')}</p>
          <p className='text-white mt-2 font-medium sml:text-sm'>{t('search_home.sub_title')}</p>
          <button
            className='btn btn-primary mt-6'
            onClick={() => {
              navigate('explore')
            }}
          >
            {t('search_home.explore')}
          </button>
        </div>
        <div className='trip_bx bg-primary-200 relative w-[95%] h-[340px] m-auto before:absolute before:w-full before:rounded-[10px] before:bg-input-border before:z-[-1] before:backdrop-blur-sm rounded-xl'>
          <div className='flex items-center flex-wrap pr-[10px] bg-body rounded-md shadow-md z-[1] absolute -top-10 left-0 lg:h-20'>
            <div className='h-full shadow-none px-4 py-2 space-y-1'>
              <h4 className='text-sm m-0 font-bold text-header'>{t('search_home.event')}</h4>
              <input
                className={classNames('field-input text-header', { 'field-input--error': false })}
                type='text'
                placeholder={t('search_home.event_placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className='lg:w-[200px] h-full shadow-none px-4 py-2 space-y-1'>
              <h4 className='text-[15px] m-0 font-bold text-header'>{t('search_home.status')}</h4>
              <Select
                placeholder={t('search_home.All')}
                id='status'
                options={EVENT_STATUS_OPTIONS || []}
                onChange={(e: IOptionSelect) => {
                  setParams({ ...params, status: e.value })
                }}
              />
            </div>
            <div className='w-[300px] h-full shadow-none px-4 py-2 space-y-1'>
              <h4 className='text-[15px] m-0 font-bold text-header'>{t('search_home.category')}</h4>
              <Select
                placeholder={t('search_home.All')}
                id='category'
                options={categoriesOptions}
                onChange={(e: IOptionSelect) => {
                  setParams({ ...params, categoryIds: [e.value] })
                }}
              />
            </div>
          </div>
          <div className='relative w-full h-full m-auto rounded-[10px] pb-5'>
            {isFetching ? (
              <div className='w-full h-80 flex items-center justify-center'>
                <Loader />
              </div>
            ) : (
              <div className='w-full h-full pt-36 lg:pt-20 flex items-center overflow-x-auto overflow-y-hidden pb-4 no-scrollbar'>
                {data?.items.map((event: ICardSearchHome, index: number) => (
                  <EventCardSearchHome key={`event-${index}`} event={event} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('home')(SearchHome)
