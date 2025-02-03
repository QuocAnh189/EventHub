import { NavLink } from 'react-router-dom'

//components
import formatDate from '@utils/dayjs'
import RatingStars from '@ui/RatingStars'

//interface
import { ICardEvent } from '@interfaces/contents/event.interface'

//icon
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { BiPurchaseTagAlt } from 'react-icons/bi'

//utils
import { formatNumber } from '@utils/helpers'
import getBasePrice from '@utils/base_price'

interface IProps {
  event: ICardEvent
}

const EventCardExplore = (props: IProps) => {
  const { event } = props

  return (
    <NavLink
      to={`/organization/event/${event.id}`}
      className='card flex flex-row gap-2 h-[200px] items-center rounded-md shadow-lg hover:cursor-pointer'
    >
      <div className='w-1/2 h-full flex flex-1'>
        <img
          loading='lazy'
          src={
            event.coverImageUrl
              ? event.coverImageUrl
              : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
          }
          alt=''
          className='w-full h-full object-cover rounded-l-md'
        />
      </div>
      <div className='flex flex-1 flex-col gap-2'>
        <p className='line-clamp-1 text-2xl text-left text-header'>{event.name}</p>
        <div className='flex items-center gap-2'>
          <FaCalendarAlt size={20} color='var(--header)' />
          <p className='text-header'>{formatDate(event.startTime)}</p>
        </div>
        <div className='flex items-center gap-2 justify-start'>
          <IoLocationSharp size={20} color='var(--header)' />
          <p className='line-clamp-1 text-left text-header'>{event.location}</p>
        </div>

        <div className='flex items-center gap-1'>
          <BiPurchaseTagAlt color='#3D56F0' size='24px' />
          <p className='text-primary text-xl'>{formatNumber(getBasePrice(event.ticketTypes))}</p>
        </div>
        <div className='flex items-center gap-1 label-text leading-none w-[30px] hover:cursor-pointer pb-2'>
          <RatingStars value={event.averageRate} />
        </div>
      </div>
    </NavLink>
  )
}

export default EventCardExplore
