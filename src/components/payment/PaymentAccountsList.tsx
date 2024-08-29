import { Image, Spin } from 'antd'
import { IPaymentAccount } from 'interfaces/contents/payment.interface'
import AddPaymentAccountModal from './AddPaymentAccountModal'
import { withTranslation } from 'react-i18next'

export interface IPaymentAccountsListProps {
  onClick?: (account: IPaymentAccount) => void
  accounts: IPaymentAccount[]
  isLoading: boolean
}

const PaymentAccountsList = ({ isLoading, accounts, onClick }: IPaymentAccountsListProps) => {
  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {isLoading ? (
        <Spin spinning={isLoading} />
      ) : (
        accounts &&
        accounts.map((account) => (
          <div
            className='flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-md shadow-lg cursor-pointer hover:bg-slate-100'
            key={account.id}
            onClick={() => onClick && onClick(account)}
          >
            <Image
              fallback='/blank-image.jpg'
              width={200}
              height={200}
              src={account.paymentAccountQRCode}
              preview={false}
              className='object-cover'
              alt='qr-code'
            />
            <Image
              src={account.methodLogo}
              width={132}
              height={74}
              preview={false}
              alt='method-logo'
              className='object-contain'
            />
            <span className='font-medium text-neutral-500'>{account.methodName}</span>
            <span className='font-medium text-neutral-700'>{account.paymentAccountNumber}</span>
          </div>
        ))
      )}
      <AddPaymentAccountModal />
    </div>
  )
}

export default withTranslation('payment')(PaymentAccountsList)
