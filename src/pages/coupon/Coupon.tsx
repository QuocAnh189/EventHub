//component
import ProtectedLayout from '@layouts/protected'
import PageHeader from '@layouts/components/PageHeader'
import CouponsGrid from '@widgets/CouponsGrid'

//i18n
import { withTranslation } from 'react-i18next'

const Coupon = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <CouponsGrid />
    </ProtectedLayout>
  )
}

export default withTranslation('coupon')(Coupon)
