//hook

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

interface IProps {
  t: any
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  coupons: ICoupon[]
}

const ModalChooseDiscount = (props: IProps) => {
  const { t, modalOpen, setModalOpen, coupons } = props

  const handleSelectCoupon = (id: string) => {
    console.log(id)
  }

  const handleApplyCoupon = async () => {}

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col w-3/5 will-change-transform'>
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
