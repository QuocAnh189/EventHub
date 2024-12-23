//components
import Spring from '@components/Spring'
import Review from '@components/Review'
import Pagination from '@ui/Pagination'

//interface
import { IReview } from 'interfaces/contents/review.interface'
import { IPagination } from '@interfaces/common.interface'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  reviews: IReview[]
  pagination: IPagination
  search: string
  setSearch: (search: string) => void
}
const LatestAcceptedReviews = (props: IProps) => {
  const { t, reviews, pagination, search, setSearch } = props

  return (
    <Spring className='flex flex-1 flex-col gap-[26px]'>
      <div className='card !p-0 flex-1'>
        <div className='flex flex-col p-5 gap-2.5 md:flex-row md:justify-between md:items-center md:px-[26px]'>
          <h5 className='h5'>{t('main.title')}</h5>
          <input
            className='field-input w-[300px]'
            type='search'
            placeholder={t('search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <span className='block h-[1px] bg-input-border opacity-60' />
        <div>
          {reviews?.map((review: IReview, index: number) => (
            <Review key={`review-${index}`} review={review} index={index} />
          ))}
        </div>
      </div>
      {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </Spring>
  )
}

export default withTranslation('review')(LatestAcceptedReviews)
