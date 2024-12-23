//layout
import ProtectedLayout from '@layouts/protected'

//components
import PageHeader from '@layouts/components/PageHeader'
import Orders from './components/Orders'
// import PaymentAccounts from './PaymentAccounts'

//i18n
import { withTranslation } from 'react-i18next'

const OrdersPage = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <Orders />
    </ProtectedLayout>
  )
}

export default withTranslation('order')(OrdersPage)
