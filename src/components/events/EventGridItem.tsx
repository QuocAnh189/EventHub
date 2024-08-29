// components
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'
import { IEvent } from 'interfaces/contents/event.interface'

interface IProps {
  event: IEvent
}

export const EventGridItem = (props: IProps) => {
  const { event } = props

  return (
    <NavLink to={`/organization/event/${event.id}`} className='card flex flex-col h-full hover:cursor-pointer'>
      <div className='flex items-start gap-[14px] mb-2.5'>
        <div className='img-wrapper flex flex-1 items-center justify-center'>
          <img src={event.coverImage} alt='Anh Quoc' className='h-[150px]' />
        </div>
      </div>
      <h6 className={`!leading-[1.4] block max-w-[180px] transition hover:text-accent mb-3`}>{event.name}</h6>
      <RatingStars rating={4} />
      <div className='flex flex-col flex-1 gap-1 mt-1.5'>
        <p className='font-heading font-bold text-sm leading-[1.4] text-green'>
          Sales : {event.numberOfSoldTickets || 0}
        </p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
          Favorite : {event.numberOfFavorites || 0}
        </p>
      </div>
    </NavLink>
  )
}
