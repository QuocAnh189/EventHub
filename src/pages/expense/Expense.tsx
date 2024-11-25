//component
import PageHeader from '@layouts/components/PageHeader'
import ProtectedLayout from '@layouts/protected'
const Expense = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Expense' />
    </ProtectedLayout>
  )
}

export default Expense
