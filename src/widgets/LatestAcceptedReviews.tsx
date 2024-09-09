//hooks
import { usePagination } from '@hooks/usePagination'

//components
import Spring from '@components/Spring'
import Review from '@components/Review'
// import NotData from '@components/NotData'
import Pagination from '@ui/Pagination'

// data placeholder
// import reviews from '@db/reviews'

//interface
import { IReview } from 'interfaces/contents/review.interface'

//i18n
import { withTranslation } from 'react-i18next'

const review: any = {
  id: 1,
  userId: '123',
  fullName: 'Tran Phuoc Anh Quoc',
  userAvatar: '',
  email: 'anhquoc18092003@gail.com',
  eventId: '321',
  eventName: 'My Event',
  eventCoverImage: '',
  content: 'I don not like it',
  rate: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}

interface IProps {
  t: any
  reviews: IReview[]
  total: number
}
const LatestAcceptedReviews = (props: IProps) => {
  const { t, reviews, total } = props

  console.log(reviews)

  const pagination: any = usePagination(total, 4)

  return (
    <Spring className='flex flex-1 flex-col gap-[26px]'>
      <div className='card !p-0 flex-1'>
        <div className='flex flex-col p-5 gap-2.5 md:flex-row md:justify-between md:items-center md:px-[26px]'>
          <h5>{t('main.title')}</h5>
        </div>
        <span className='block h-[1px] bg-input-border opacity-60' />
        <div>
          {/* {reviews.length !== 0 ? (
            reviews.map((_: IReview, index: number) => (
              <Review key={`review-${review.id}`} review={review} index={index} />
             
            ))
          ) : (
            <div className='h-[500px]'>
              <NotData />
            </div>
          )} */}
          {Array(10)
            .fill(1)
            .map((_, index) => (
              <Review key={`review-${index}`} review={review} index={index} />
            ))}
        </div>
      </div>
      {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </Spring>
  )
}

export default withTranslation('review')(LatestAcceptedReviews)
