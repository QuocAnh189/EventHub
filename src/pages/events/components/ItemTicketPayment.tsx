import { ITicketType } from '@interfaces/contents'

//component
import { Divider } from 'antd'
import { QuantityButton } from './ButtonQuantity'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  ticketType: ITicketType
}

const ItemTicketPayment = (props: IProps) => {
  const { t, ticketType } = props
  return (
    <div>
      <div className='flex justify-between'>
        <span className='font-bold text-primary'>{ticketType.name.toUpperCase()}</span>
        {ticketType?.price && ticketType.price > 0 ? (
          <h6 className='h6 text-primary'>{`${ticketType.price}.000 VNĐ`}</h6>
        ) : (
          <h6 className='h6 text-green-darker'>{t('payment.free')}</h6>
        )}
      </div>
      <div className='flex items-center justify-between mt-4'>
        <h6 className='font-bold text-black'>{t('payment.quantity')}</h6>
        <QuantityButton onDecrease={() => {}} onIncrease={() => {}} quantity={10} />
      </div>
      <div className='flex justify-between mt-4'>
        <h6 className='font-bold text-black'>{t('payment.total_amount')}</h6>
        <h6 className='font-bold text-black'>100.000 VND</h6>
      </div>
      <Divider type='horizontal' />
    </div>
  )
}

export default withTranslation('event_detail')(ItemTicketPayment)
