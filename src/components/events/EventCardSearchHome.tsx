//hooks
import { useNavigate } from 'react-router-dom'

//components
import RatingStars from '@ui/RatingStars'

//interface
import { ICardSearchHome } from 'interfaces/contents/event.interface'

//i18
import { withTranslation } from 'react-i18next'

//constant
import { EEventPaymentTicket } from '@constants/enum.constant'

//utils
import getBasePrice from '@utils/base_price'
import { formatNumber } from '@utils/helpers'

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
          <RatingStars rating={event.averageRate} />
        </div>
        <h5 className='text-[12px] font-medium m-0 mt-1 leading-4 text-right'>
          <p className='truncate'>{event?.categories[0]?.name}</p> <br />
          {event.eventPaymentType === EEventPaymentTicket.Paid ? (
            <p className='font-bold text-primary'>{formatNumber(getBasePrice(event.ticketTypes))} VND</p>
          ) : (
            <p className='font-bold text-primary'>{event.eventPaymentType}</p>
          )}
        </h5>
      </div>
    </div>
  )
}

export default withTranslation('home')(EventCardSearchHome)
