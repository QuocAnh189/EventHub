/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

//component
import { EventCardSearchHome, Loader } from '@components/index'

//assets
import NatureVid from '@assets/images/event/main.mp4'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'
import { useAppSelector } from '@hooks/useRedux'

//constant
import { EEventStatus } from '@constants/enum.constant'
import { EVENT_STATUS_OPTIONS } from '@constants/options.constant'

//interface
import { IEvent } from 'interfaces/contents/event.interface'
import { ICategory } from '@interfaces/contents'

const initParam = {
  search: '',
  type: EEventStatus.ALL,
  categoryIds: [],
  takeAll: false,
  size: 10
}

const TranslatedSearchHome = ({ t }: any) => {
  const navigate = useNavigate()

  const categories = useAppSelector((state) => state.persistedReducer.category.categories)

  const { register, handleSubmit, setValue } = useForm<any>({
    defaultValues: initParam,
    mode: 'onSubmit'
  })

  const [filter, setFilter] = useState(initParam)
  const { data: events, isFetching, refetch } = useGetEventsQuery(filter)

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
          <source src={NatureVid} type='video/mp4' />
        </video>
      </div>
      <div className='relative w-full h-[90%] z-[1000]'>
        <div className='w-[500px] h-auto text-white px-[30px] pt-[30px] pb-[100px]'>
          <p className='text-white leading-10 font-extrabold text-[2em]'>{t('search home.title')}</p>
          <p className='text-[rgb(241, 241, 241)] font-medium text-[14px]'>{t('search home.sub_title')}</p>
          <button
            onClick={() => {
              navigate('explore')
            }}
            className='mt-5 py-[10px] px-[20px] rounded-[20px] bg-primary text-white cursor-pointer hover:bg-primary-500'
          >
            {t('search home.explore')}
          </button>
        </div>
        <div className='trip_bx relative w-[95%] h-auto m-auto  before:absolute before:w-full before:h-[340px] before:rounded-[10px] before:bg-search-home before:z-[-1] before:backdrop-blur-sm'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex items-center justify-center pr-[10px] bg-white rounded-md shadow-md z-[1] absolute -top-10 left-0 h-20'
          >
            <div className='w-[200px] h-full shadow-none p-4'>
              <h4 className='text-[15px] m-0 font-bold text-black'>{t('search home.event')}</h4>
              <input
                {...register('search')}
                className='mt-1 py-2 px-0 border-none outline-none text-md bg-white'
                type='text'
                placeholder={t('search home.event_placeholder')}
              />
            </div>
            <div className='w-[200px] h-full shadow-none p-4'>
              <h4 className='text-[15px] m-0 font-bold text-black'>{t('search home.status')}</h4>
              <select
                {...register('type')}
                className='mt-1 py-2 px-0 border-none outline-none text-md bg-white'
                aria-label='aa'
                defaultValue='ALL'
              >
                {EVENT_STATUS_OPTIONS.map((item, index) => (
                  <option key={`status-${index}`} value={item.value}>
                    {t(`search home.${item.label}`)}
                  </option>
                ))}
              </select>
            </div>
            <div className='w-[200px] h-full shadow-none p-4'>
              <h4 className='text-[15px] m-0 font-bold text-black'>{t('search home.category')}</h4>
              <select
                onChange={(e: any) => {
                  setValue('categoryIds', [e.target.value])
                }}
                className='mt-1 py-2 px-0 border-none outline-none text-md bg-white'
              >
                <option value={[]}>{t('search home.All')}</option>
                {categories.map((category: ICategory, index: number) => (
                  <option key={`category-${index}`} value={category.id}>
                    {t(`search home.categories.${category.name}`)}
                  </option>
                ))}
              </select>
            </div>
            <input
              className='bg-primary text-white border-none outline-none px-5 py-[10px] rounded-[20px] cursor-pointer ml-[10px] hover:bg-primary-500'
              type='submit'
              value={t('search home.search')}
            />
          </form>
          <div className='relative w-full h-auto m-auto top-[30px] rounded-[10px] pb-5'>
            <h4 className='m-0 pt-20 pl-[1.7%]'>{t('search home.events_to_explore')}</h4>
            {isFetching ? (
              <div className='w-full h-[150px] flex items-center justify-center'>
                <Loader />
              </div>
            ) : (
              <div className='w-full h-auto my-0 mx-auto flex items-center overflow-x-auto overflow-y-hidden pb-4 scrollbar-w-none'>
                {events?.items?.map((event: IEvent, index: number) => (
                  <EventCardSearchHome event={event} key={`event-${index}`} />
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
