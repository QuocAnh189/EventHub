//hook
// import { useState } from 'react'

//component
import ModalBase from '@ui/ModalBase'

//component
import DiscountApplyItem from '@components/DiscountApplyItem'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'

// //redux
// import { useAppSelector } from '@hooks/useRedux'
// import { RootState } from '@redux/store'

interface IProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  coupons: ICoupon[]
}

const ModalChooseDiscount = (props: IProps) => {
  const { modalOpen, setModalOpen, coupons } = props

  const handleSelectCoupon = (id: string) => {
    console.log(id)
  }

  const handleApplyCoupon = async () => {}

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
                <DiscountApplyItem
                  key={index}
                  index={index}
                  coupon={item}
                  onSelect={(id: string) => handleSelectCoupon(id)}
                />
              ))}
          </div>
          <div className='w-full flex justify-end'>
            <button onClick={handleApplyCoupon} className='btn w-20 btn-primary'>
              Apply
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  )
}

export default ModalChooseDiscount
