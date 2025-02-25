// components
import Loading from '@components/Loading'
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'
import Spring from '@components/Spring'

//interface
import { IEventFavorite } from '@interfaces/contents/event.interface'

//i18n
import { withTranslation } from 'react-i18next'

//utils
import formatDate from '@utils/dayjs'

interface IProps {
  t: any
  event: IEventFavorite
  index: number
  onRemove: (id: string) => void
  isLoading: boolean
}

const EventFavouriteItem = (props: IProps) => {
  const { t, event, index, onRemove, isLoading } = props

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
          <div
            className='flex items-center gap-2 rounded-lg px-2'
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
            <h6 className='my-2 text-white truncate'>{event.categories[0].name}</h6>
          </div>
          <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>
            {t('item.date')}: {formatDate(event.startTime, 'DD/MM/YYYY')}
          </p>
        </div>
        <div className='grid grid-cols-2 gap-1.5 mt-4'>
          <NavLink to={`/organization/event/${event.id}`} className='btn btn--outline blue !text-sm'>
            {t('action.view')}
          </NavLink>
          <button onClick={() => onRemove(event.id)} className='btn btn--outline red !text-sm'>
            {isLoading ? <Loading /> : t('action.remove')}
          </button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('my_favourite')(EventFavouriteItem)
