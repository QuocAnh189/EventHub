import { Spin } from 'antd'
import { IPaymentMethod } from '@interfaces/contents/payment.interface'
import { withTranslation } from 'react-i18next'

export interface IPaymentMethodsListProps {
  onClick?: (method: IPaymentMethod) => void
  methods: IPaymentMethod[]
  isLoading: boolean
  selectedItemId: string
}

const PaymentMethodsList = ({ onClick, isLoading, methods, selectedItemId }: IPaymentMethodsListProps) => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {isLoading ? (
        <Spin spinning={isLoading} />
      ) : (
        methods &&
        methods.length &&
        methods.map((method: any) => (
          <div
            className='flex items-center justify-center w-32 h-20 px-8 bg-white rounded-md shadow-lg cursor-pointer hover:!bg-slate-100'
            key={method.id}
            style={{
              backgroundColor: selectedItemId === method.id ? 'rgb(203 213 225)' : 'white'
            }}
            onClick={() => onClick && onClick(method)}
          >
            <img src={method.methodLogo} alt='method-logo' className='object-cover' />
          </div>
        ))
      )}
    </div>
  )
}

export default withTranslation('payment')(PaymentMethodsList)
