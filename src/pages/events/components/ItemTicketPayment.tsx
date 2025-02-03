//hook
import { useState, useEffect } from 'react'

//interface
import { ITicketType } from '@interfaces/contents'

//component
import { Divider } from 'antd'
import { QuantityButton } from './ButtonQuantity'

//i18n
import { withTranslation } from 'react-i18next'

//util
import { formatNumber } from '@utils/helpers'

interface IProps {
  t: any
  ticketType: ITicketType
  tickets: any[]
  onChange: (name: string, value: any) => void
}

const ItemTicketPayment = (props: IProps) => {
  const { t, ticketType, onChange, tickets } = props

  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)

  useEffect(() => {
    const newTickets = tickets.filter((item: any) => item.ticketTypeId !== ticketType.id)
    if (quantity > 0) {
      newTickets.push({
        ticketTypeId: ticketType.id,
        name: ticketType.name,
        quantity,
        price: ticketType.price
      })
    }

    setTotalPrice(newTickets.reduce((total: number, item: any) => total + item.price * item.quantity, 0))
    onChange('tickets', newTickets)
  }, [quantity])

  useEffect(() => {
    onChange('totalPrice', totalPrice)
  }, [totalPrice])

  return (
    <div>
      <div className='flex justify-between'>
        <span className='font-bold text-primary'>{ticketType.name.toUpperCase()}</span>
        {ticketType?.price && ticketType.price > 0 ? (
          <h6 className='h6 text-primary'>{formatNumber(ticketType.price)} VNĐ</h6>
        ) : (
          <h6 className='h6 text-green-darker'>{t('payment.free')}</h6>
        )}
      </div>
      <div className='flex items-center justify-between mt-4'>
        <h6 className='font-bold text-black'>{t('payment.quantity')}</h6>
        <QuantityButton
          onDecrease={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1)
            }
          }}
          onIncrease={() => {
            setQuantity(quantity + 1)
          }}
          quantity={quantity}
        />
      </div>
      <div className='flex justify-between mt-4'>
        <h6 className='font-bold text-black'>{t('payment.total_amount')}</h6>
        <h6 className='font-bold text-black'>{formatNumber(quantity * ticketType.price)} VNĐ</h6>
      </div>
      <Divider type='horizontal' />
    </div>
  )
}

export default withTranslation('event_detail')(ItemTicketPayment)
