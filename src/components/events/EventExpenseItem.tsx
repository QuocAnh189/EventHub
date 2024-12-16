// components
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'
import Spring from '@components/Spring'

//interface
import { IMyEventAnalysis } from '@interfaces/contents/event.interface'

interface Props {
  event: IMyEventAnalysis
  index: number
}

const EventExpenseItem = (props: Props) => {
  const { event, index } = props

  return (
    <Spring type='slideUp' index={index}>
      <NavLink to={`${event.id}`} className='card flex flex-col h-full hover:cursor-pointer'>
        <div className='flex items-start gap-[14px] mb-2.5'>
          <div className='img-wrapper flex flex-1 items-center justify-center'>
            <img src={event.coverImageUrl} alt='Anh Quoc' className='h-[150px]' />
          </div>
        </div>
        <h6 className='!leading-[1.4] block max-w-[180px] transition hover:text-accent mb-3 line-clamp-2 truncate'>
          {event.name}
        </h6>
        <RatingStars rating={event.averageRate || 0} />
        <div className='flex flex-col flex-1 gap-1 mt-1.5'>
          <p className='font-heading font-bold text-sm leading-[1.4] text-green'>
            Total SubExpense : {event.totalSale || 0}
          </p>
          <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
            Total Expense : {event.totalFavourite || 0}
          </p>
        </div>
      </NavLink>
    </Spring>
  )
}

export default EventExpenseItem
