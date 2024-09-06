//hook
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavigateFunction, useNavigate } from 'react-router-dom'

//i18
import { withTranslation } from 'react-i18next'

//component
import { EventCardSearchHome, Loader } from '@components/index'
import Select from '@ui/Select'

//assets
import nature_vid from '@assets/images/event/main.mp4'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'
import { useAppSelector } from '@hooks/useRedux'

//constant
import { EEventStatus } from '@constants/enum.constant'
import { EVENT_CATEGORIES, EVENT_STATUS_OPTIONS, IOptionSelect } from '@constants/options.constant'

//interface
import { IEvent } from 'interfaces/contents/event.interface'
import { ICategory } from '@interfaces/contents'

// utils
import classNames from 'classnames'

const initParam = {
  search: '',
  type: EEventStatus.ALL,
  categoryIds: [],
  takeAll: false,
  size: 10
}

const mock_event: any = {
  name: 'My Event',
  categories: [{ iconImage: null, name: 'Music' }],
  coverImage: null,
  priceRange: { startRange: 100 }
}

const TranslatedSearchHome = ({ t }: any) => {
  const navigate: NavigateFunction = useNavigate()

  const categories = useAppSelector((state) => state.persistedReducer.category.categories)
  const categoriesOptions = categories?.map((category: ICategory) => ({
    value: category.id,
    label: category.name,
    icon: category.iconImage,
    backgroundColor: category.color
  }))

  console.log(categoriesOptions)

  const { register, handleSubmit, setValue, watch } = useForm<any>({
    defaultValues: initParam,
    mode: 'onSubmit'
  })

  const [filter, setFilter] = useState(initParam)
  const { data: events, isFetching, refetch } = useGetEventsQuery(filter)

  console.log(events)

  useEffect(() => {
    console.log(watch())
  }, [])

  useEffect(() => {
    refetch()
  }, [filter])

  const onSubmit = async (data: any) => {
    setFilter(data)
  }

  return (
    <div className='w-[90%] h-[95vh] m-auto'>
      <div className='relative w-full z-[999]'>
        <video autoPlay loop muted className='absolute right-0 top-0 h-auto w-full object-cover z-[-1] rounded-md'>
          <source src={nature_vid} type='video/mp4' />
        </video>
      </div>
      <div className='relative w-full h-[90%] z-[1000]'>
        <div className='w-[500px] h-auto text-white px-[30px] pt-[30px] pb-[100px]'>
          <p className='text-white leading-10 font-extrabold text-[2em]'>{t('search home.title')}</p>
          <p className='text-white mt-2 font-medium text-sm'>{t('search home.sub_title')}</p>
          <button
            className='btn btn-primary mt-6'
            onClick={() => {
              navigate('explore')
            }}
          >
            {t('search home.explore')}
          </button>
        </div>
        <div className='trip_bx relative w-[95%] h-auto m-auto before:absolute before:w-full before:h-[340px] before:rounded-[10px] before:bg-input-border before:z-[-1] before:backdrop-blur-sm'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex items-center justify-center pr-[10px] bg-body rounded-md shadow-md z-[1] absolute -top-10 left-0 h-20'
          >
            <div className='h-full shadow-none px-4 py-2 space-y-1'>
              <h4 className='text-[15px] m-0 font-bold text-header'>{t('search home.event')}</h4>
              <input
                className={classNames('field-input text-header', { 'field-input--error': false })}
                {...register('search')}
                type='text'
                placeholder={t('search home.event_placeholder')}
              />
            </div>
            <div className='w-[200px] h-full shadow-none px-4 py-2 space-y-1'>
              <h4 className='text-[15px] m-0 font-bold text-header'>{t('search home.status')}</h4>
              <Select
                placeholder={t('search home.All')}
                id='status'
                options={EVENT_STATUS_OPTIONS || []}
                onChange={(e: IOptionSelect) => {
                  setValue('type', e.value)
                }}
              />
            </div>
            <div className='w-[200px] h-full shadow-none px-4 py-2 space-y-1'>
              <h4 className='text-[15px] m-0 font-bold text-header'>{t('search home.category')}</h4>
              <Select
                placeholder={t('search home.All')}
                id='category'
                options={EVENT_CATEGORIES}
                onChange={(e: IOptionSelect) => {
                  setValue('IOptionSelect', e.value)
                }}
              />
            </div>
            <button className='btn btn-primary mt-1' type='submit'>
              {t('search home.search')}
            </button>
          </form>
          <div className='relative w-full h-auto m-auto rounded-[10px] pb-5'>
            {isFetching ? (
              <div className='w-full h-full flex items-center justify-center'>
                <Loader />
              </div>
            ) : (
              <div className='w-full h-full pt-20 flex items-center overflow-x-auto overflow-y-hidden pb-4 no-scrollbar'>
                {/* {events?.items?.map((event: IEvent, index: number) => (
                  <EventCardSearchHome key={`event-${index}`} event={event} />
                ))} */}
                {Array(5)
                  .fill(1)
                  .map((_: IEvent, index: number) => (
                    <EventCardSearchHome event={mock_event} key={`event-${index}`} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const SearchHome = withTranslation('home')(TranslatedSearchHome)
