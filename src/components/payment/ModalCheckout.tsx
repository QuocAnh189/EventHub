//component
import ModalBase from '@ui/ModalBase'

//utils
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

//redux
import { useCheckoutMutation } from '@redux/apis/payment.api'
import Loading from '@components/Loading'

interface IProps {
  t: any
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
}

const ModalCheckout = (props: IProps) => {
  const { t, modalOpen, setModalOpen } = props

  const [Checkout, { isLoading }] = useCheckoutMutation()

  const handleCheckout = async () => {
    const data = {
      email: 'anhquoc18092003@gmail.com',
      line_items: [
        {
          type: 'Vip',
          quantity: 3,
          price: 100
        }
      ]
    }
    try {
      const result = await Checkout(data).unwrap()
      if (result) {
        setModalOpen(false)
        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform'>
        <button
          type='button'
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <h6 className='h6'>{t('checkout.title')}</h6>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              {t('checkout.name_label')}
            </label>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='name'
              placeholder={t('checkout.name_placeholder')}
            />
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              {t('checkout.email_label')}
            </label>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='email'
              placeholder={t('checkout.email_placeholder')}
            />
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              {t('checkout.phone_label')}
            </label>
            <input
              className={classNames('field-input', { 'field-input--error': false })}
              id='phone'
              placeholder={t('checkout.phone_placeholder')}
            />
          </div>
          <div className='flex items-center justify-between gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='dimensions'>
                {t('checkout.total_price')}
              </label>
              <input readOnly className={classNames('field-input', { 'field-input--error': false })} id='totalPrice' />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('checkout.discount')}
              </label>
              <input className={classNames('field-input', { 'field-input--error': false })} id='discount' />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('checkout.final_price')}
              </label>
              <input className={classNames('field-input', { 'field-input--error': false })} id='finalPrice' />
            </div>
          </div>
          <button onClick={handleCheckout} className='btn btn-primary hover:bg-primary-300'>
            {isLoading ? <Loading /> : t('checkout.submit')}
          </button>
        </div>
      </div>
    </ModalBase>
  )
}

export default withTranslation('event_detail')(ModalCheckout)
