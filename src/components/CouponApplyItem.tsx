//hooks
import useMeasure from 'react-use-measure'

//components
import Spring from './Spring'
import { TruncatedText } from '@layouts/components/navbar/TruncatedText'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'

//util
import formatDate from '@utils/dayjs'
import isExpired from '@utils/compare_date'

interface IProps {
  isExpire: boolean
  coupon: ICoupon
  index: number
  checked: boolean
  onSelect: (id: string) => void
}

const CouponApplyItem = (props: IProps) => {
  const { isExpire, coupon, index, checked, onSelect } = props

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
            <div>
              <h6 className='h6 max-w-[165px] w-full leading-[1.4]' ref={titleRef}>
                <TruncatedText text={coupon.name} width={titleWidth} lines={2} />
              </h6>
              <p>
                Expire:{' '}
                <span className={`px-1 rounded-lg text-white ${isExpired(coupon.expireDate) ? 'bg-red' : 'bg-green'}`}>
                  {formatDate(coupon.expireDate, 'DD/MM/YYYY')}
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className='text-sm flex-1 max-w-[300px]' ref={descriptionRef}>
          <TruncatedText className='text-header' text={coupon.description} width={descriptionWidth} lines={2} />
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center w-12 bg-primary-600 rounded-full'>
            <p className='text-white font-bold'>{coupon.percentageValue}%</p>
          </div>
          <input
            disabled={isExpire}
            onChange={() => {
              onSelect(coupon.id)
            }}
            checked={checked}
            className='w-4 h-4'
            type='checkbox'
            id='weight'
          />
        </div>
      </Spring>
    </>
  )
}

export default CouponApplyItem
