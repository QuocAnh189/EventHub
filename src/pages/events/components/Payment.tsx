//hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//component
import ItemTicketPayment from './ItemTicketPayment'
import ModalChooseDiscount from './ModalChooseDiscount'

//interface
import { ITicketType } from '@interfaces/contents/ticketType.interface'
import { ICoupon } from '@interfaces/contents/coupon.interface'

interface IProps {
  ticketTypes: ITicketType[]
  coupons: ICoupon[]
}

const Payment = (props: IProps) => {
  const { ticketTypes, coupons } = props
  const navigate = useNavigate()

  console.log(coupons)

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div className='card flex flex-col gap-3 p-6 rounded-md bg-primary-100 mdl:w-[700px]'>
      <div className='flex items-center justify-between'>
        <h3 className='h3 mb-4 text-2xl font-bold text-black'>Payment Information</h3>
        <button
          className='text-btn'
          onClick={() => {
            setModalOpen(true)
          }}
        >
          View Discount
        </button>
      </div>
      <div className='flex flex-col flex-1 gap-4'>
        {ticketTypes?.map((ticketType, index: number) => (
          <ItemTicketPayment key={index} ticketType={ticketType} />
        ))}
      </div>

      <button onClick={() => navigate('checkout')} className='btn btn-primary w-full rounded-md'>
        Checkout
      </button>

      {modalOpen && <ModalChooseDiscount modalOpen={modalOpen} setModalOpen={setModalOpen} coupons={coupons} />}
    </div>
  )
}

export default Payment
