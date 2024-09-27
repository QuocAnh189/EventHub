//components
import Spring from '@components/Spring'
import ReviewsRateItem from '@components/ReviewsRateItem'

//utils
import { getPercentage } from '@utils/helpers'

interface Props {
  data: any
}

const ReviewsRate = (props: Props) => {
  const { data } = props

  return (
    <Spring className='card min-h-[182px] !py-5 flex flex-col justify-between col-span-2'>
      {data?.map((item: any, index: number) => (
        <ReviewsRateItem key={index} rate={item.rate} value={getPercentage(data, item.value)} />
      ))}
    </Spring>
  )
}

export default ReviewsRate
