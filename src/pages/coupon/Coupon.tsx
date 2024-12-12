//component
import ProtectedLayout from '@layouts/protected'
import PageHeader from '@layouts/components/PageHeader'
import CouponsGrid from '@widgets/CouponsGrid'

const Coupon = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Coupon' />
      <CouponsGrid />
    </ProtectedLayout>
  )
}

export default Coupon
