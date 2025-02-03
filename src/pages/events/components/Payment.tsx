//hooks
import { useState, useEffect } from 'react'

//component
import ItemTicketPayment from './ItemTicketPayment'
import ModalChooseDiscount from './ModalChooseDiscount'
import ModalCheckout from '@components/payment/ModalCheckout'

//interface
import { ITicketType } from '@interfaces/contents/ticketType.interface'
import { ICoupon } from '@interfaces/contents/coupon.interface'

//i18n
import { withTranslation } from 'react-i18next'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useCreateSessionMutation } from '@redux/apis/payment.api'

//dto
import { ICheckoutPayload } from '@dtos/payment.dto'
import { toast } from 'react-toastify'

interface IProps {
  t: any
  eventId: string
  ticketTypes: ITicketType[]
  coupons: ICoupon[]
}

const Payment = (props: IProps) => {
  const { t, eventId, ticketTypes, coupons } = props

  const [CreateSession, { isLoading }] = useCreateSessionMutation()

  const userId = useAppSelector((state) => state.persistedReducer.user.user.id)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalCheckout, setModalCheckout] = useState<boolean>(false)

  const [activeCoupon, setActiveCoupon] = useState<ICoupon>()
  const [dataCheckout, setDataCheckout] = useState<ICheckoutPayload>({
    eventId,
    userId,
    tickets: [],
    couponId: '',
    totalPrice: 0,
    discountPrice: 0,
    finalPrice: 0,
    customerName: '',
    customerEmail: '',
    customerPhone: ''
  })

  const changeDataCheckout = (name: string, value: any) => {
    setDataCheckout({
      ...dataCheckout,
      [name]: value
    })
  }

  useEffect(() => {
    if (activeCoupon) {
      const discountPrice = Math.floor(dataCheckout.totalPrice * (activeCoupon.percentageValue / 100))
      setDataCheckout({
        ...dataCheckout,
        discountPrice
      })
    }
  }, [dataCheckout.couponId, dataCheckout.totalPrice])

  const handleCheckout = async () => {
    const data = {
      ...dataCheckout,
      finalPrice: dataCheckout.totalPrice - dataCheckout.discountPrice
    }

    try {
      const result = await CreateSession(data).unwrap()
      if (result) {
        // console.log(result.data.checkoutUrl)
        window.location.href = result.data.sessionUrl
      }
    } catch (e: any) {
      toast.error(e.data.message)
    }
  }

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
          <ItemTicketPayment
            key={index}
            ticketType={ticketType}
            tickets={dataCheckout.tickets}
            onChange={(name: string, value: any) => changeDataCheckout(name, value)}
          />
        ))}
      </div>

      <button onClick={() => setModalCheckout(true)} className='btn btn-primary w-full rounded-md'>
        {t('payment.buy')}
      </button>

      {modalCheckout && (
        <ModalCheckout
          customerName={dataCheckout.customerName}
          customerEmail={dataCheckout.customerEmail}
          customerPhone={dataCheckout.customerPhone}
          totalPrice={dataCheckout.totalPrice}
          discountPrice={dataCheckout.discountPrice}
          finalPrice={dataCheckout.totalPrice - dataCheckout.discountPrice}
          modalOpen={modalCheckout}
          setModalOpen={setModalCheckout}
          onSubmit={handleCheckout}
          onChange={(name: string, value: any) => changeDataCheckout(name, value)}
          isLoading={isLoading}
        />
      )}
      {modalOpen && (
        <ModalChooseDiscount
          totalPrice={dataCheckout.totalPrice}
          activeCouponId={dataCheckout.couponId}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          coupons={coupons}
          onChange={(name: string, value: any) => changeDataCheckout(name, value)}
          setActiveCoupon={setActiveCoupon}
        />
      )}
    </div>
  )
}

export default withTranslation('event_detail')(Payment)
