//hook
import { useNavigate } from 'react-router-dom'

//interface
import { IEvent } from '@interfaces/contents/event.interface'

//icon
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { BiPurchaseTagAlt } from 'react-icons/bi'

//util
import dayjs from 'dayjs'

interface Props {
  event: IEvent
}

export const EventCardExplore = (props: Props) => {
  const { event } = props
  const navigate = useNavigate()

  const handleViewEvent = () => {
    navigate(`/organization/event/${event.id}`)
  }

  return (
    <button
      type='button'
      onClick={handleViewEvent}
      className='flex gap-2 h-[200px] items-center rounded-md shadow-lg hover:cursor-pointer'
    >
      <div className='w-1/2 h-full flex flex-1'>
        <img
          loading='lazy'
          src={
            event.coverImage
              ? event.coverImage
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
          <p className='text-header'>{dayjs(event.startTime).format('DD/MM/YYYY dddd').toString()}</p>
        </div>
        <div className='flex items-center gap-2 justify-start'>
          <IoLocationSharp size={20} color='var(--header)' />
          <p className='line-clamp-1 text-left text-header'>{event.location}</p>
        </div>
        <div className='flex items-center gap-2'>
          <IoMdTime size={20} color='var(--header)' />
          <p className='text-header'>
            {dayjs(event.startTime).format('hh:mm A').toString()} - {dayjs(event.endTime).format('hh:mm A').toString()}
          </p>
        </div>

        <div className='flex items-center gap-1'>
          <BiPurchaseTagAlt color='#3D56F0' size='24px' />
          <p className='text-primary text-xl'>{event.priceRange.startRange}.000 VND</p>
        </div>
        <div className='flex items-center gap-1 label-text leading-none w-[30px] hover:cursor-pointer pb-2'>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <i
              key={`rate-${index}`}
              className={`icon-star-solid text-${item <= event.averageRating ? 'yellow' : 'gray'}`}
            />
          ))}
        </div>
      </div>
    </button>
  )
}
