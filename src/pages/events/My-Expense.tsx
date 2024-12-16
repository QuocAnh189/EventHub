import PageHeader from '@layouts/components/PageHeader'
import ProtectedLayout from '@layouts/protected'
import EventExpenseGrid from '@widgets/EventExpenseGrid'

const MyExpense = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='My Expense' />
      <EventExpenseGrid search_label='Search Expense' />
    </ProtectedLayout>
  )
}

export default MyExpense
