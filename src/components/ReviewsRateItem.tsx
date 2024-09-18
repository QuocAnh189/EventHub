//component
import ProgressBar from '@ui/ProgressBar'

interface Props {
  rate?: number
  value?: number
}

const ReviewsRateItem = (props: Props) => {
  const { rate = 0, value = 0 } = props

  return (
    <div className='flex items-center gap-2.5'>
      <span className='flex items-center gap-1 label-text leading-none w-[30px]'>
        {rate} <i className='icon-star-solid text-yellow' />
      </span>
      <div className='flex-1'>
        <ProgressBar value={value || 0} color='yellow' />
      </div>
      <span className='!text-header label-text w-[42px] text-right'>{value || 0}%</span>
    </div>
  )
}

export default ReviewsRateItem
