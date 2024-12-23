//layout
import ProtectedLayout from '@layouts/protected'

//component
import PageHeader from '@layouts/components/PageHeader'
import TransactionsTable from '@widgets/TransactionsTable'

//i18n
import { withTranslation } from 'react-i18next'

const Transaction = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <TransactionsTable />
    </ProtectedLayout>
  )
}

export default withTranslation('transaction')(Transaction)
