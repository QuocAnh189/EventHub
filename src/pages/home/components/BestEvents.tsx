//hooks
import { withTranslation } from 'react-i18next'

//components
import Loader from '@components/Loader'
import EventCard from '@components/events/EventCard'

//constant
import { EEventStatus } from '@constants/enum.constant'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'
import { ICardEvent } from '@interfaces/contents'

// //data
// import events_data from '@db/event'

const BestEvents = ({ t }: any) => {
  const { data: events, isFetching } = useGetEventsQuery({ pageSize: 6, type: EEventStatus.Upcoming })

  return (
    <div className='w-full dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
      <section data-aos='fade-up' className='container'>
        <h1 className='h1 my-8 border-l-8 py-2 pl-2  text-primary'>{t('best events.title')}</h1>
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
