//hooks
import useMeasure from 'react-use-measure'

//components
import Spring from './Spring'
import { TruncatedText } from '@layouts/components/navbar/TruncatedText'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'
import { formatNumber } from '@utils/helpers'

interface IProps {
  coupon: ICoupon
  active: boolean
  index: number
  onSelect: (id: string) => void
}

const DiscountApplyItem = (props: IProps) => {
  const { active, coupon, index, onSelect } = props

  const [titleRef, { width: titleWidth }] = useMeasure()
  const [descriptionRef, { width: descriptionWidth }] = useMeasure()

  return (
    <>
      <Spring className='card flex flex-col gap-4 !pt-5 !px-5 min-h-[182px]' type='slideUp' index={index}>
        <div className='flex flex-1 justify-between items-start'>
          <div className='flex flex-1 items-start gap-3'>
            <div
              className='w-11 h-11 rounded-lg bg-white border border-solid border-input-border flex
                         justify-center items-center'
            >
              <img className='h-9 w-auto' src={coupon.coverImageUrl} alt={coupon.name} />
            </div>
            <h6 className='h6 max-w-[165px] w-full leading-[1.4]' ref={titleRef}>
              <TruncatedText text={coupon.name} width={titleWidth} lines={2} />
            </h6>
          </div>
        </div>
        <p className='text-sm flex-1 max-w-[300px] space-y-2' ref={descriptionRef}>
          <TruncatedText className='text-header' text={coupon.description} width={descriptionWidth} lines={2} />
          <p className='h6'>Min Price: {formatNumber(coupon.minPrice)} VND</p>
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center w-12 bg-primary-600 rounded-full'>
            <p className='text-white font-bold'>{coupon.percentageValue}%</p>
          </div>
          <input
            onChange={() => {
              onSelect(coupon.id)
            }}
            className='w-6 h-6'
            type='radio'
            name='discount'
            checked={active}
          />
        </div>
      </Spring>
    </>
  )
}

export default DiscountApplyItem
