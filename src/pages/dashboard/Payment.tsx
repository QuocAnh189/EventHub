//layout
import ProtectedLayout from '@layouts/protected'

//component
import PageHeader from '@layouts/components/PageHeader'

const Payment = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Payment' />
    </ProtectedLayout>
  )
}

export default Payment
