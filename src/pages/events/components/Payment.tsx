//hooks
import { useState } from 'react'

//component
import ItemTicketPayment from './ItemTicketPayment'
import ModalChooseDiscount from './ModalChooseDiscount'
import ModalCheckout from '@components/payment/ModalCheckout'

//interface
import { ITicketType } from '@interfaces/contents/ticketType.interface'
import { ICoupon } from '@interfaces/contents/coupon.interface'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  ticketTypes: ITicketType[]
  coupons: ICoupon[]
}

const Payment = (props: IProps) => {
  const { t, ticketTypes, coupons } = props

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalCheckout, setModalCheckout] = useState<boolean>(false)

  return (
    <div className='card flex flex-col gap-3 p-6 rounded-md bg-primary-100 mdl:w-[700px]'>
      <div className='flex items-center justify-between'>
        <h3 className='h3 mb-4 text-2xl font-bold text-black'>{t('payment.title')}</h3>
        <button
          className='text-btn text-error'
          onClick={() => {
            setModalOpen(true)
          }}
        >
          {t('payment.view_discount')}
        </button>
      </div>
      <div className='flex flex-col flex-1 gap-4'>
        {ticketTypes?.map((ticketType, index: number) => (
          <ItemTicketPayment key={index} ticketType={ticketType} />
        ))}
      </div>

      <button onClick={() => setModalCheckout(true)} className='btn btn-primary w-full rounded-md'>
        {t('payment.buy')}
      </button>

      {modalCheckout && <ModalCheckout modalOpen={modalCheckout} setModalOpen={setModalCheckout} />}
      {modalOpen && <ModalChooseDiscount modalOpen={modalOpen} setModalOpen={setModalOpen} coupons={coupons} />}
    </div>
  )
}

export default withTranslation('event_detail')(Payment)
