// components
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'
import Spring from '@components/Spring'

//interface
import { IMyEventAnalysis } from '@interfaces/contents/event.interface'

//i18n
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  event: IMyEventAnalysis
  index: number
}

const EventExpenseItem = (props: Props) => {
  const { t, event, index } = props

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
          <p className='font-heading font-bold text-sm leading-[1.4] text-green'>{t('total_sub_expense')} : 3</p>
          <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>{t('total_expense')} : 500</p>
        </div>
      </NavLink>
    </Spring>
  )
}

export default withTranslation('my_expense')(EventExpenseItem)
