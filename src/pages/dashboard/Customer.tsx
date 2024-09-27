//layout
import ProtectedLayout from '@layouts/protected'

//components
import PageHeader from '@layouts/components/PageHeader'
import CustomerRetentionRate from '@widgets/CustomerRetentionRate'
import DemographicSegmentation from '@widgets/DemographicSegmentation'
import ConversionRate from '@widgets/ConversionRate'
import CustomersInfobox from '@components/CustomersInfobox'

//i18n
import { withTranslation } from 'react-i18next'

const Customers = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='widgets-grid grid-cols-1 xl:grid-cols-6'>
        <div className='widgets-grid grid-cols-1 md:grid-cols-3 xl:col-span-3'>
          <CustomersInfobox label={t('all')} count={32987} color='green' suffix='' />
          <CustomersInfobox label={t('new')} count={17153} suffix='' iconClass='user-plus-solid' />
          <CustomersInfobox
            label={t('regular')}
            count={7587}
            suffix=''
            color='red'
            iconClass='user-group-crown-solid'
          />
        </div>
        <ConversionRate />
        <CustomerRetentionRate />
        <DemographicSegmentation />
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('customer')(Customers)
