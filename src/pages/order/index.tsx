//layout
import ProtectedLayout from '@layouts/protected'

//component
import PageHeader from '@layouts/components/PageHeader'
import { Tabs } from 'antd'
import Orders from './components/Orders'
import PaymentAccounts from './PaymentAccounts'

//i18n
import { withTranslation } from 'react-i18next'

const TAB_ITEMS = [
  {
    label: 'Orders',
    key: 'ORDERS',
    children: <Orders />
  },
  {
    label: 'Payment Accounts',
    key: 'ACCOUNTS',
    children: <PaymentAccounts />
  }
]

const OrdersPage = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <Tabs defaultActiveKey='1' items={TAB_ITEMS} type='card' className='permissions-tabs' />
    </ProtectedLayout>
  )
}

export default withTranslation('payment')(OrdersPage)
