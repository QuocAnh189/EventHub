//styles
import 'swiper/css'

//components
import Spring from '@components/Spring'
import EventGridItem from '@components/events/EventGridItem'
import CategoryHeader from '@ui/CategoryHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

//interface
import { ICategory } from 'interfaces/contents/category.interface'

//redux
import { useGetEventsQuery } from '@redux/apis/event.api'
import { initParamsEvent } from '@type/event.type'

//interface
import { IEvent } from '@interfaces/contents/event.interface'

interface Props {
  category: ICategory
}

const event: any = {
  id: 1,
  name: 'Event Name',
  coverImage: 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg',
  numberOfSoldTickets: 100,
  numberOfFavourites: 100
}

const TopEventsByCategories = (props: Props) => {
  const { category } = props

  const { data: events } = useGetEventsQuery({ ...initParamsEvent, categoryIds: [category.id] })

  if (events) {
    console.log(events)
  }

  return (
    <Spring className='flex flex-col gap-5'>
      <CategoryHeader category={category} />
      <div className='w-full'>
        <Swiper
          className='!p-2.5 !-m-2.5'
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={26}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            1536: {
              slidesPerView: 3
            }
          }}
          speed={1300}
          rewind={false}
          loop
        >
          {/* {events?.items.map((event: IEvent, index: number) => (
            <SwiperSlide className='!h-auto' key={`event-${index}`}>
              <EventGridItem event={event} />
            </SwiperSlide>
          ))} */}
          {Array(5)
            .fill(6)
            .map((_: IEvent, index: number) => (
              <SwiperSlide className='!h-auto' key={`event-${index}`}>
                <EventGridItem event={event} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Spring>
  )
}

export default TopEventsByCategories
