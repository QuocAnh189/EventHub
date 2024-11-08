//hooks
import { withTranslation } from 'react-i18next'

//components
import EventCard from '@components/events/EventCard'
import Loader from '@components/Loader'

//constant
import { EEventStatus } from '@constants/enum.constant'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'

//interface
import { IEvent } from 'interfaces/contents/event.interface'

//data
import events_data from '@db/event'

const UpcomingEvents = ({ t }: any) => {
  const { data: events, isFetching } = useGetEventsQuery({ takeAll: false, type: EEventStatus.UPCOMING, size: 6 })

  console.log(events)

  return (
    <div className='w-full dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
      <section data-aos='fade-up' className='container'>
        <h1 className='w-full my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
          {t('upcoming events.title')}
        </h1>
        {isFetching ? (
          <div className='flex h-[250px] items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <div className='grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 gap-4'>
            {/* {events?.items?.map((event: IEvent, index: number) => (
              <EventCard key={`event-${index}`} event={event} />
            ))} */}

            {events_data.slice(3, 9).map((event: IEvent, index: number) => (
              <EventCard key={`event-${index}`} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default withTranslation('home')(UpcomingEvents)
