// components
import Spring from '@components/Spring'
import LabeledProgressBar from '@components/LabeledProgressBar'
import RatingStars from '@ui/RatingStars'
import { NavLink } from 'react-router-dom'

// utils
import { getPercentage } from '@utils/helpers'

const data_default = [
  { label: 'Positive', value: 80, color: 'green' },
  { label: 'Negative', value: 20, color: 'red' }
]

interface Props {
  translate: any
  data: any
}

const SalesProfitByCategory = (props: Props) => {
  const { translate, data = data_default } = props

  return (
    <Spring className='card flex flex-col'>
      <h5 className='h5 mb-4'>{translate.title}</h5>
      <div className='flex flex-1 flex-col gap-[27px] justify-between'>
        <div className='flex flex-col gap-4'>
          {data.map((item: any, index: number) => (
            <LabeledProgressBar
              key={index}
              label={item.label || item.name}
              value={getPercentage(data, item.value)}
              color={item.color}
              displayValue={`${getPercentage(data, item.value)}%`}
            />
          ))}
        </div>
        <div className='flex flex-col gap-2 sm:flex-row sm:justify-between'>
          <div className='flex flex-col gap-2'>
            <h5>{translate.review_rate}</h5>
            <RatingStars value={3.5} />
          </div>
          <div className='sm:text-right'>
            <p className='text-sm text-header sm:mb-1.5'>
              {translate.from} 324 {translate.response}
            </p>
            <NavLink className='text-btn' to='/reviews'>
              {translate.view_all_review}
            </NavLink>
          </div>
        </div>
      </div>
    </Spring>
  )
}

export default SalesProfitByCategory
