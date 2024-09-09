//hook
import { useEffect, useState } from 'react'

//layout
import ProtectedLayout from '@layouts/protected'

// components
import { PageHeader } from '@layouts/components/PageHeader'
import CustomersInfobox from '@components/CustomersInfobox'
import ReviewsRate from '@widgets/ReviewsRate'
import LatestAcceptedReviews from '@widgets/LatestAcceptedReviews'
import ReviewsScore from '@widgets/ReviewsScore'

//interface vs type
import { IMetadataReviewResponse } from '@type/event.type'
import { IReview } from '@interfaces/contents/review.interface'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetReviewsByUserIdQuery } from '@redux/apis/user.api'

//i18
import { withTranslation } from 'react-i18next'

const Review = ({ t }: any) => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data } = useGetReviewsByUserIdQuery(user?.id!)

  const [average, setAverage] = useState<number>(0)
  const [reviews, setReviews] = useState<IReview[]>()
  const [dataPercent, setDataPercent] = useState<any>([])
  const [metaData, setMetaData] = useState<IMetadataReviewResponse>()

  useEffect(() => {
    if (data) {
      setReviews(data.items)
      setMetaData(data.metadata)
    }
  }, [data])

  const calculationPercent = (rate: number) => {
    const ratesPercent: any = {}
    reviews?.forEach((review) => {
      ratesPercent[rate] = review.rate === rate ? ratesPercent[rate] + 1 || 1 : ratesPercent[rate]
    })
    return ratesPercent[rate] || 0
  }

  useEffect(() => {
    const data = [
      { rate: 1, value: calculationPercent(1) },
      { rate: 2, value: calculationPercent(2) },
      { rate: 3, value: calculationPercent(3) },
      { rate: 4, value: calculationPercent(4) },
      { rate: 5, value: calculationPercent(5) }
    ]
    setDataPercent(data)
  }, [reviews?.length])

  useEffect(() => {
    const calculation = reviews?.reduce((total, currentValue) => {
      return total + currentValue.rate
    }, 0)
    setAverage(Math.floor(calculation! / metaData?.totalCount!))
  }, [reviews?.length])

  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='flex flex-col flex-1 gap-5 md:gap-[26px]'>
        <div className='grid grid-cols-1 gap-y-5 md:gap-y-[26px] xl:grid-cols-6 xl:gap-x-[26px]'>
          <div className='widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4'>
            <ReviewsScore score={average} />
            <CustomersInfobox label={t('middle.total')} count={metaData?.totalCount} color='green' suffix='' />
            <CustomersInfobox label={t('middle.new')} count={25} suffix='%' iconClass='user-plus-solid' />
            <CustomersInfobox
              label={t('middle.regular')}
              count={75}
              suffix='%'
              color='red'
              iconClass='user-group-crown-solid'
            />
          </div>
          <ReviewsRate data={dataPercent} />
        </div>
        {reviews && <LatestAcceptedReviews reviews={reviews!} total={metaData?.totalCount!} />}
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('review')(Review)
