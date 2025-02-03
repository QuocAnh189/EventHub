//component
import ModalBase from '@ui/ModalBase'

//component
import DiscountApplyItem from '@components/DiscountApplyItem'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'

// //redux
// import { useAppSelector } from '@hooks/useRedux'
// import { RootState } from '@redux/store'

//i18n
import { withTranslation } from 'react-i18next'
import { useState } from 'react'

interface IProps {
  t: any
  totalPrice: number
  activeCouponId: string
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  coupons: ICoupon[]
  onChange: (name: string, value: any) => void
  setActiveCoupon: (value: ICoupon) => void
}

const ModalChooseDiscount = (props: IProps) => {
  const { t, activeCouponId, modalOpen, setModalOpen, coupons, onChange, setActiveCoupon } = props

  const [selectCouponId, setSelectCouponId] = useState<string>('')

  const handleApplyCoupon = async () => {
    onChange('couponId', selectCouponId)
    const coupon = coupons.find((item) => item.id === selectCouponId)
    setActiveCoupon(coupon!)

    setModalOpen(false)
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col h-4/5 xl:w-3/5 will-change-transform'>
        <button
          type='button'
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <h6 className='h6'>{t('apply_coupon.title')}</h6>
        <div className='flex flex-col h-full justify-end mt-4'>
          <div className='flex-1 h-[1000px] mb-[35px] grid content-start gap-[26px] md:grid-cols-3 overflow-scroll'>
            {coupons &&
              coupons?.map((item: ICoupon, index: number) => (
                <DiscountApplyItem
                  active={selectCouponId === item.id ? selectCouponId === item.id : activeCouponId === item.id}
                  key={index}
                  index={index}
                  coupon={item}
                  onSelect={(id: string) => setSelectCouponId(id)}
                />
              ))}
          </div>
          <div className='w-full flex justify-end'>
            <button onClick={handleApplyCoupon} className='btn w-[120px] btn-primary'>
              {t('apply_coupon.apply')}
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  )
}

export default withTranslation('event_detail')(ModalChooseDiscount)
