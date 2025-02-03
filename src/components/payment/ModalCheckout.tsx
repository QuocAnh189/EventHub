//component
import ModalBase from '@ui/ModalBase'
import Loading from '@components/Loading'

//utils
import classNames from 'classnames'
import { formatNumber } from '@utils/helpers'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  customerName: string
  customerEmail: string
  customerPhone: string
  totalPrice: number
  discountPrice: number
  finalPrice: number
  modalOpen: boolean
  onSubmit: () => void
  onChange: (name: string, value: any) => void
  setModalOpen: (value: boolean) => void
  isLoading: boolean
}

const ModalCheckout = (props: IProps) => {
  const {
    t,
    customerName,
    customerEmail,
    customerPhone,
    totalPrice,
    discountPrice,
    finalPrice,
    onSubmit,
    onChange,
    modalOpen,
    setModalOpen,
    isLoading
  } = props

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
              onChange={(e) => onChange('customerName', e.target.value)}
              value={customerName}
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
              onChange={(e) => onChange('customerEmail', e.target.value)}
              value={customerEmail}
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
              onChange={(e) => onChange('customerPhone', e.target.value)}
              value={customerPhone}
            />
          </div>
          <div className='flex items-center justify-between gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='dimensions'>
                {t('checkout.total_price')}
              </label>
              <input
                readOnly
                className={classNames('field-input', { 'field-input--error': false })}
                id='totalPrice'
                value={formatNumber(totalPrice)}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('checkout.discount')}
              </label>
              <input
                readOnly
                className={classNames('field-input', { 'field-input--error': false })}
                id='discount'
                value={formatNumber(discountPrice)}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='weight'>
                {t('checkout.final_price')}
              </label>
              <input
                readOnly
                className={classNames('field-input', { 'field-input--error': false })}
                id='finalPrice'
                value={formatNumber(finalPrice)}
              />
            </div>
          </div>
          <button onClick={onSubmit} className='btn btn-primary hover:bg-primary-300'>
            {isLoading ? <Loading /> : t('checkout.submit')}
          </button>
        </div>
      </div>
    </ModalBase>
  )
}

export default withTranslation('event_detail')(ModalCheckout)
