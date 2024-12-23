//components
import EventCard from '@components/events/EventCard'
import Loader from '@components/Loader'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'

//interfaces
import { ICardEvent } from '@interfaces/contents/event.interface'

interface IProps {
  title: string
  categoryId: string
}

const EventsRelate = (props: IProps) => {
  const { title, categoryId } = props

  const { data: events, isFetching } = useGetEventsQuery({ pageSize: 3, categoryId: categoryId })

  return (
    <div className='flex flex-col items-center px-[150px] py-8 gap-6'>
      <h1 className='text-header font-bold text-3xl'>{title}</h1>
      {isFetching ? (
        <Loader />
      ) : (
        <div className='grid grid-flow-col auto-cols-fr gap-4'>
          {events?.items.map((event: ICardEvent, index: number) => (
            <EventCard key={`event-${index}`} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}

export default EventsRelate
