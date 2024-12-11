// components
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'
import Spring from '@components/Spring'

//interface
import { IEventFavorite } from '@interfaces/contents/event.interface'

//i18n
import { withTranslation } from 'react-i18next'

//util
import dayjs from 'dayjs'

interface Props {
  t: any
  event: IEventFavorite
  index: number
}

const EventFavouriteItem = (props: Props) => {
  const { t, event, index } = props

  return (
    <Spring type='slideUp' index={index}>
      <div className='card flex flex-col h-full hover:cursor-pointer'>
        <div className='flex items-start gap-[14px] mb-2.5'>
          <div className='img-wrapper flex flex-1 items-center justify-center'>
            <img src={event.coverImageUrl} alt='Anh Quoc' className='h-[150px]' />
          </div>
        </div>
        <h6 className='h6 !leading-[1.4] block max-w-[180px] transition hover:text-accent mb-3 truncate'>
          {event.name}
        </h6>
        <RatingStars rating={event.averageRate} />
        <div className='flex flex-col flex-1 gap-1 mt-1.5'>
          <p className='font-heading font-bold text-sm leading-[1.4] text-green'>
            {t('item.category')}: {event.categories[0].name}
          </p>
          <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
            {t('item.date')}: {dayjs(event.startTime).format('DD/MM/YYYY')}
          </p>
        </div>
        <div className='grid grid-cols-2 gap-1.5 mt-4'>
          <NavLink to={`/organization/event/${event.id}`} className='btn btn--outline blue !text-sm'>
            View
          </NavLink>
          <button className='btn btn--outline red !text-sm'>Delete</button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('my_favourite')(EventFavouriteItem)
