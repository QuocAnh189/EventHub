// components
import PageHeader from '@layouts/components/PageHeader'
import OrdersAverageRate from '@widgets/OrdersAverageRate'
import OrdersInfobox from '@components/OrdersInfobox'
import OrdersTable from '@widgets/OrdersTable'

// constants
import ProtectedLayout from '@layouts/protected'

//i18n
import { withTranslation } from 'react-i18next'

const Orders = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='flex flex-col flex-1 gap-5 md:gap-[26px]'>
        <div className='w-full widgets-grid grid-cols-1 xl:grid-cols-6'>
          <div className='xl:col-span-2'>
            <OrdersAverageRate />
          </div>
          <div className='widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4'>
            <OrdersInfobox
              title={t('middle.box_completed.completed')}
              count={2345}
              icon={<i className='icon-check-to-slot-solid' />}
            />
            <OrdersInfobox
              title={t('middle.box_confirmed.confirmed')}
              count={323}
              color='green'
              icon={<i className='icon-list-check-solid' />}
            />
            <OrdersInfobox
              title={t('middle.box_canceled.canceled')}
              count={17}
              color='red'
              icon={<i className='icon-ban-solid' />}
            />
            <OrdersInfobox
              title={t('middle.box_refunded.refunded')}
              count={2}
              color='badge-status-bg'
              icon={<i className='icon-rotate-left-solid' />}
            />
          </div>
        </div>
        <OrdersTable />
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('order')(Orders)
