//hooks
import { useEffect, useState } from 'react'

//layout
import ProtectedLayout from '@layouts/protected'

//components
import PageHeader from '@layouts/components/PageHeader'
import CustomersInfobox from '@components/CustomersInfobox'
import ReviewsRate from '@widgets/ReviewsRate'
import LatestAcceptedReviews from '@widgets/LatestAcceptedReviews'
import ReviewsScore from '@widgets/ReviewsScore'

//i18n
import { withTranslation } from 'react-i18next'

// //data
// import reviews_data from '@db/reviews'

//redux
import { useGetReviewsByCreatedEventsQuery } from '@redux/apis/review.api'

//util
import { usePagination } from '@hooks/usePagination'
import { IPagination } from '@interfaces/common.interface'

type TotalPerNumberRate = {
  rate: number
  value: number
}
interface IStatistics {
  averageRate: number
  totalPositive: number
  totalNegative: number
  totalPerNumberRate: TotalPerNumberRate[]
}

const Review = ({ t }: any) => {
  const [params, setParams] = useState({ pageSize: 10, page: 1 })

  const { data } = useGetReviewsByCreatedEventsQuery(params)

  const pagination: IPagination = usePagination(data?.metadata?.totalCount, data?.metadata.pageSize)
  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  const statistic: IStatistics = data?.statistic

  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='flex flex-col flex-1 gap-5 md:gap-[26px]'>
        <div className='grid grid-cols-1 gap-y-5 md:gap-y-[26px] xl:grid-cols-6 xl:gap-x-[26px]'>
          <div className='widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4'>
            <ReviewsScore score={statistic?.averageRate || 0} />
            <CustomersInfobox
              label={t('middle.total')}
              count={data?.metadata.totalCount || 0}
              color='green'
              suffix=''
            />
            <CustomersInfobox
              label={t('middle.positive')}
              count={Math.round((statistic?.totalPositive * 100) / data?.metadata.totalCount!)}
              suffix='%'
              iconClass='user-plus-solid'
            />
            <CustomersInfobox
              label={t('middle.negative')}
              count={Math.round((statistic?.totalNegative * 100) / data?.metadata.totalCount!)}
              suffix='%'
              color='red'
              iconClass='user-group-crown-solid'
            />
          </div>
          <ReviewsRate data={statistic?.totalPerNumberRate} />
        </div>
        {<LatestAcceptedReviews reviews={data?.items || []} pagination={pagination} />}
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('review')(Review)
