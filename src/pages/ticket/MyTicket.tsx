//component
import PageHeader from '@layouts/components/PageHeader'
import ProtectedLayout from '@layouts/protected'
const MyTicket = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='My Ticket' />
    </ProtectedLayout>
  )
}

export default MyTicket
