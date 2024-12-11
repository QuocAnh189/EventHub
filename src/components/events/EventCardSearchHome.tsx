//hooks
import { useNavigate } from 'react-router-dom'

//interface
import { ICardSearchHome } from 'interfaces/contents/event.interface'

//i18
import { withTranslation } from 'react-i18next'
import { getStatusEventColor } from '@utils/helpers'
import RatingStars from '@ui/RatingStars'
import { EEventPaymentTicket } from '@constants/enum.constant'

interface Props {
  t: any
  event: ICardSearchHome
}

const EventCardSearchHome = (props: Props) => {
  const { event } = props
  const navigate = useNavigate()

  const handleViewEvent = () => {
    navigate(`/organization/event/${event.id}`)
  }

  return (
    <div
      onClick={handleViewEvent}
      className='p-6 min-w-[320px] h-[200px] shadow-none bg-transparent hover:cursor-pointer hover:bg-body hover:rounded-lg'
    >
      <h3 className='mt-0 mx-0 mb-[4px] flex items-center gap-2 text-[16px] font-semibold'>
        <p className='h6 truncate text-header'>{event?.name}</p>
        <img
          style={{ backgroundColor: event.categories[0].iconImageUrl }}
          className='w-5 h-5 ml-[5px] object-cover bg-primary rounded-sm'
          loading='lazy'
          src={
            event?.categories[0]?.iconImageUrl
              ? event?.categories[0]?.iconImageUrl
              : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
          }
          alt=''
        />
      </h3>
      <img
        className='w-full h-4/5 object-cover'
        loading='lazy'
        src={
          event.coverImageUrl
            ? event.coverImageUrl
            : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
        }
        alt=''
      />
      <div className='flex items-center justify-between'>
        <div className=''>
          <span
            className='badge-status badge-status--sm mt-1'
            style={{ backgroundColor: `var(--${getStatusEventColor('Upcoming')})` }}
          >
            {/* {event.status} */}
            Upcomming
          </span>
          <RatingStars rating={event.averageRate} />
        </div>
        <h5 className='text-[12px] font-medium m-0 mt-1 leading-4 text-right'>
          {event?.categories[0]?.name} <br />
          {event.eventPaymentType === EEventPaymentTicket.PAID ? (
            <p className='font-bold text-primary'>100.000 VND</p>
          ) : (
            <p className='font-bold text-primary'>{event.eventPaymentType}</p>
          )}
        </h5>
      </div>
    </div>
  )
}

export default withTranslation('home')(EventCardSearchHome)
