// styles
import 'swiper/css'

// components
import Spring from '@components/Spring'
import CategoryHeader from '@ui/CategoryHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductGridItem from '@components/EventGridItem'
import { Pagination } from 'swiper/modules'

//interface
import { ICategory } from 'interfaces/contents/category'

//redux
import { useGetEventsQuery } from '@redux/services/eventApi'
import { initParamsEvent } from '@type/event'
import { IEvent } from 'interfaces/contents/event'

interface Props {
  category: ICategory
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
          {events?.items.map((event: IEvent, index: number) => (
            <SwiperSlide className='!h-auto' key={`event-${index}`}>
              <ProductGridItem event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Spring>
  )
}

export default TopEventsByCategories
