//components
import EventCard from '@components/events/EventCard'
import Loader from '@components/Loader'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'

//interfaces
import { IEvent } from '@interfaces/contents/event.interface'

//data
import events_data from '@db/event'

interface Props {
  categoryIds: string[]
}

const EventsRelate = (props: Props) => {
  const { categoryIds } = props

  const { data: events, isFetching } = useGetEventsQuery({ page: 1, categoryIds, takeAll: false, size: 3 })

  console.log(events)

  return (
    <div className='flex flex-col items-center px-[150px] py-8 gap-6'>
      <h1 className='text-header font-bold text-3xl'>Related Events</h1>
      {isFetching ? (
        <Loader />
      ) : (
        <div className='grid grid-flow-col auto-cols-fr gap-4'>
          {/* {events?.items?.map((event: IEvent, index: number) => (
            <EventCard key={`event-${index}`} event={event} />
          ))} */}
          {events_data.slice(0, 3).map((event: IEvent, index: number) => (
            <EventCard key={`event-${index}`} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}

export default EventsRelate
