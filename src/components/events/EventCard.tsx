//hook
import { useNavigate } from 'react-router-dom'

//icon
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { IEvent } from 'interfaces/contents/event.interface'

//util
import dayjs from 'dayjs'
import { EEventPaymentTicket } from '@constants/enum.constant'

interface ICard {
  event: IEvent
}

const EventCard = (props: ICard) => {
  const { event } = props

  const navigate = useNavigate()

  const handleSelectEvent = () => {
    navigate(`/organization/event/${event.id})`)
  }

  return (
    <div
      className='shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer'
      onClick={handleSelectEvent}
    >
      <div className='overflow-hidden'>
        <img
          loading='lazy'
          src={
            event.coverImage
              ? event.coverImage
              : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
          }
          alt='No image'
          className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
        />
      </div>

      <div className='space-y-4 p-3'>
        <div className='min-h-36'>
          <h1 className='line-clamp-1 font-bold text-xl'>{event.name}</h1>
          <div className='flex items-center gap-2 opacity-70'>
            <FaCalendarAlt />
            <span>{dayjs(event.startTime).format('DD/MM/YYYY dddd hh:mm A').toString()}</span>
          </div>
          <div className='flex items-center gap-2 opacity-70'>
            <IoLocationSharp />
            <span>{event.location}</span>
          </div>
          <p className='line-clamp-2 pt-2'>{event.description}</p>
        </div>
        <div className='flex items-center justify-between border-t-2 py-3 !mt-3'>
          <div className='opacity-70'>
            <p>{event.status}</p>
          </div>
          <div className='text-primary'>
            {event.eventPaymentType === EEventPaymentTicket.PAID ? (
              <p className='text-2xl font-bold'>{event.priceRange.startRange}.000 VND</p>
            ) : (
              <p className='text-2xl font-bold'>{event.eventPaymentType}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
