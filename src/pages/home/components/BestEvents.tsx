//hook
import { withTranslation } from 'react-i18next'

//components
import { EventCard, Loader } from '@components/index'

//constant
import { EEventStatus } from '@constants/enum.constant'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'

//interface
import { IEvent } from 'interfaces/contents/event.interface'

const TranslatedBestEvents = ({ t }: any) => {
  const { data: events, isFetching } = useGetEventsQuery({ takeAll: false, type: EEventStatus.UPCOMING, size: 6 })

  return (
    <div className='w-full dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
      <section data-aos='fade-up' className='container'>
        <h1 className='w-full my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
          {t('best events.title')}
        </h1>
        {isFetching ? (
          <div className='flex h-[250px] items-center justify-center'>
            <Loader />
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {events?.items?.map((event: IEvent, index: number) => (
              <EventCard key={`event-${index}`} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export const BestEvents = withTranslation('home')(TranslatedBestEvents)
