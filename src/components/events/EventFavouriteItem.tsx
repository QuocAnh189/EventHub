// components
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'
import Spring from '@components/Spring'

//interface
import { IEvent } from '@interfaces/contents/event.interface'

//i18n
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  event: IEvent
  index: number
}

const EventFavouriteItem = (props: Props) => {
  const { t, event, index } = props

  return (
    <Spring type='slideUp' index={index}>
      <div className='card flex flex-col h-full hover:cursor-pointer'>
        <div className='flex items-start gap-[14px] mb-2.5'>
          <div className='img-wrapper flex flex-1 items-center justify-center'>
            <img src={event.coverImage} alt='Anh Quoc' className='h-[150px]' />
          </div>
        </div>
        <h6 className='h6 !leading-[1.4] block max-w-[180px] transition hover:text-accent mb-3 truncate'>
          {event.name}
        </h6>
        <RatingStars rating={4} />
        <div className='flex flex-col flex-1 gap-1 mt-1.5'>
          <p className='font-heading font-bold text-sm leading-[1.4] text-green'>{t('item.category')}: Sport</p>
          <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>{t('item.date')}: 31/12/2024</p>
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
