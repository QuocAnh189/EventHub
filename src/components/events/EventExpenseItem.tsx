//hook
import { useMemo } from 'react'

// components
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'
import Spring from '@components/Spring'

//interface
import { IMyEventExpense } from '@interfaces/contents/event.interface'

//i18n
import { withTranslation } from 'react-i18next'
import { formatNumber } from '@utils/helpers'

interface IProps {
  t: any
  event: IMyEventExpense
  index: number
}

const EventExpenseItem = (props: IProps) => {
  const { t, event, index } = props

  const totalExpense = useMemo(() => {
    return event.expenses.reduce((acc, expense) => acc + expense.total, 0)
  }, [])

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
            {t('total_sub_expense')} : {event.expenses.length}
          </p>
          <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
            {t('total_expense')} : {formatNumber(totalExpense)} VND
          </p>
        </div>
      </NavLink>
    </Spring>
  )
}

export default withTranslation('my_expense')(EventExpenseItem)
