//hooks
import { withTranslation } from 'react-i18next'

//components
import Loader from '@components/Loader'
import EventCard from '@components/events/EventCard'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'
import { ICardEvent } from '@interfaces/contents'
import { useAppSelector } from '@hooks/useRedux'
import { RootState } from '@redux/store'

const BestEvents = ({ t }: any) => {
  const categoryIds: string[] = useAppSelector((state: RootState) => state.persistedReducer.event.categoryIdsWishlist)

  const { data: events, isFetching } = useGetEventsQuery({ pageSize: 6, categoryIds })

  return (
    <div className='w-full dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
      <section data-aos='fade-up' className='container'>
        <h1 className='h1 my-8 border-l-8 py-2 pl-2  text-primary'>{t('best_events.title')}</h1>
        {isFetching ? (
          <div className='flex h-[250px] items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <div className='grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 gap-4'>
            {events &&
              events.items.map((event: ICardEvent, index: number) => (
                <EventCard key={`event-${index}`} event={event} />
              ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default withTranslation('home')(BestEvents)
