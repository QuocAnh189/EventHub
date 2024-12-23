//component
import PageHeader from '@layouts/components/PageHeader'
import ProtectedLayout from '@layouts/protected'
import EventExpenseGrid from '@widgets/EventExpenseGrid'

//i18n
import { withTranslation } from 'react-i18next'

const MyExpense = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <EventExpenseGrid search_label={t('search')} />
    </ProtectedLayout>
  )
}

export default withTranslation('my_expense')(MyExpense)
