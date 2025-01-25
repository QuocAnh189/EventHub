//hooks
import { useNavigate } from 'react-router-dom'

//components
import RatingStars from '@ui/RatingStars'

//constant
import { EEventPaymentTicket } from '@constants/enum.constant'

//icon
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

//utils
import formatDate from '@utils/dayjs'

//interface
import { ICardEvent } from '@interfaces/contents'

interface IProps {
  event: ICardEvent
}

const EventCard = (props: IProps) => {
  const { event } = props

  const navigate = useNavigate()

  const handleSelectEvent = () => {
    navigate(`/organization/event/${event.id}`)
  }

  return (
    <div
      className='card shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer'
      onClick={handleSelectEvent}
    >
      <div className='overflow-hidden'>
        <img
          loading='lazy'
          src={
            event.coverImageUrl
              ? event.coverImageUrl
              : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
          }
          alt='No image'
          className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
        />
      </div>

      <div className='space-y-4 p-3'>
        <div className='min-h-36'>
          <h1 className='line-clamp-1 font-bold text-xl'>{event.name}</h1>
          <div
            className='flex items-center gap-2 rounded-xl px-2'
            style={{ backgroundColor: event.categories[0].color }}
          >
            <img
              loading='lazy'
              src={
                event.categories[0].iconImageUrl
                  ? event.categories[0].iconImageUrl
                  : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
              }
              alt='No image'
              className='w-[20px] h-[20px] object-cover rounded-full'
            />
            <h6 className='my-2 text-white'>{event.categories[0].name}</h6>
          </div>
          <div className='flex items-center gap-2 opacity-70'>
            <FaCalendarAlt />
            <span>{formatDate(event.startTime)}</span>
          </div>
          <div className='flex items-center gap-2 opacity-70'>
            <IoLocationSharp />
            <span className='line-clamp-1'>{event.location}</span>
          </div>
          <p className='line-clamp-2 pt-2'>{event.description}</p>
        </div>
        <div className='flex items-center justify-between border-t-2 py-3 !mt-3'>
          <RatingStars rating={event.averageRate} />
          <div className='text-primary text-right'>
            {event.eventPaymentType === EEventPaymentTicket.Paid ? (
              <p className='text-2xl font-bold'>{event.ticketTypes[0].price}$</p>
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
