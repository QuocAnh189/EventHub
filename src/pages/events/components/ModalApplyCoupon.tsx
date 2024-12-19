//hook
import { useState } from 'react'

//component
import ModalBase from '@ui/ModalBase'

//component
import CouponApplyItem from '@components/CouponApplyItem'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { RootState } from '@redux/store'
import { useApplyCouponsMutation } from '@redux/apis/event.api'
import Loading from '@components/Loading'
import { toast } from 'react-toastify'

interface IProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  couponsIds: string[]
  eventId: string
}

const ModalApplyCoupon = (props: IProps) => {
  const { modalOpen, setModalOpen, couponsIds, eventId } = props

  const [couponIdsCurrent, setCouponIdsCurrent] = useState<string[]>(couponsIds)

  const coupons: ICoupon[] = useAppSelector((state: RootState) => state.persistedReducer.coupon.coupons)

  const [ApplyCoupon, { isLoading }] = useApplyCouponsMutation()

  const handleSelectCoupon = (id: string) => {
    if (couponIdsCurrent.includes(id)) {
      const newCouponIdsCurrent = couponIdsCurrent.filter((item) => item !== id)
      setCouponIdsCurrent(newCouponIdsCurrent)
    } else {
      setCouponIdsCurrent([...couponIdsCurrent, id])
    }
  }

  const handleApplyCoupon = async () => {
    try {
      const result = await ApplyCoupon({ eventId, ids: couponIdsCurrent }).unwrap()
      if (result) {
        setModalOpen(false)
        toast.success('Apply coupon successfully')
      }
    } catch (e) {
      console.log(e)
      toast.success('Apply coupon successfully')
    }
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col h-4/5 w-3/5 will-change-transform'>
        <button
          type='button'
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <h6 className='h6'>Apply coupon</h6>
        <div className='flex flex-col h-full justify-end mt-4'>
          <div className='flex-1 h-[1000px] mb-[35px] grid content-start gap-[26px] grid-cols-3 overflow-scroll'>
            {coupons &&
              coupons?.map((item: ICoupon, index: number) => (
                <CouponApplyItem
                  key={index}
                  index={index}
                  coupon={item}
                  checked={couponIdsCurrent.includes(item.id)}
                  onSelect={(id: string) => handleSelectCoupon(id)}
                />
              ))}
          </div>
          <div className='w-full flex justify-end'>
            <button onClick={handleApplyCoupon} className='btn w-20 btn-primary'>
              {isLoading ? <Loading /> : 'Apply'}
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  )
}

export default ModalApplyCoupon
