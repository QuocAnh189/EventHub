//component
import ProtectedLayout from '@layouts/protected'
import PageHeader from '@layouts/components/PageHeader'

const Coupon = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Coupon' />
    </ProtectedLayout>
  )
}

export default Coupon
