import { withTranslation } from 'react-i18next'

//hook
import { useNavigate } from 'react-router-dom'

//interface
import { IEvent } from 'interfaces/contents/event.interface'

interface IEventCardSearchHome {
  t: any
  event: IEvent
}

const TranslatedEventCardSearchHome = (props: IEventCardSearchHome) => {
  const { t, event } = props
  const navigate = useNavigate()

  const handleViewEvent = () => {
    navigate(`/organization/event/${event.id}`)
  }

  return (
    <div className='p-6 min-w-[300px] h-[180px] shadow-none bg-transparent hover:cursor-pointer hover:bg-body hover:rounded-lg'>
      <h3 className='mt-0 mx-0 mb-[10px] flex items-center gap-2 text-[16px] font-semibold'>
        <p className='truncate text-header'>{event?.name}</p>
        <img
          className='w-5 h-5 ml-[5px] object-cover bg-primary rounded-sm'
          loading='lazy'
          src={
            event?.categories[0]?.iconImage
              ? event?.categories[0]?.iconImage
              : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
          }
          alt=''
        />
      </h3>
      <img
        className='w-full h-4/5 object-cover'
        loading='lazy'
        src={
          event.coverImage
            ? event.coverImage
            : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
        }
        alt=''
      />
      <div className='flex items-center justify-between'>
        <button
          onClick={handleViewEvent}
          className='bg-black text-white rounded-[20px] py-[6px] px-[20px] text-[12px] hover:bg-gray'
        >
          {t('search home.view_event_btn')}
        </button>
        <h5 className='text-[12px] font-medium m-0 mt-1 leading-4'>
          {event?.categories[0]?.name} <br />{' '}
          <span className='text-sm font-bold'>{event.priceRange.startRange}.000 VND</span>
        </h5>
      </div>
    </div>
  )
}

const EventCardSearchHome = withTranslation('home')(TranslatedEventCardSearchHome)

export default EventCardSearchHome
