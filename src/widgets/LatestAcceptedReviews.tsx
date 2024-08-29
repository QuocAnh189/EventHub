// hooks
import { usePagination } from '@hooks/usePagination'

// components
import Spring from '@components/Spring'
import Review from '@components/Review'
import Pagination from '@ui/Pagination'

// data placeholder
// import reviews from '@db/reviews'
import { IReview } from 'interfaces/contents/review'
import NotData from '@components/NotData'
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  reviews: IReview[]
  total: number
}
const LatestAcceptedReviews = (props: IProps) => {
  const { t, reviews, total } = props

  const pagination: any = usePagination(total, 4)

  return (
    <Spring className='flex flex-1 flex-col gap-[26px]'>
      <div className='card !p-0 flex-1'>
        <div className='flex flex-col p-5 gap-2.5 md:flex-row md:justify-between md:items-center md:px-[26px]'>
          <h5>{t('main.title')}</h5>
        </div>
        <span className='block h-[1px] bg-input-border opacity-60' />
        <div>
          {reviews.length !== 0 ? (
            reviews.map((review: IReview, index: number) => (
              <Review key={`review-${review.id}`} review={review} index={index} />
            ))
          ) : (
            <div className='h-[500px]'>
              <NotData />
            </div>
          )}
        </div>
      </div>
      {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </Spring>
  )
}

export default withTranslation('review')(LatestAcceptedReviews)
