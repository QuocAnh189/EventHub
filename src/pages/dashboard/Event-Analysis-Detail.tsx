//hooks
import { useWindowSize } from 'react-use'

//layout
import ProtectedLayout from '@layouts/protected'

//components
import PageHeader from '@layouts/components/PageHeader'
import EventProfileInfobox from '@components/events/EventProfileInfobox'
import WalletBadge from '@widgets/WalletBadge'
import SaleActivity from '@widgets/SaleActivity'
import PeriodSalesRevenue from '@widgets/PeriodSalesRevenue'
import EventProfilePreview from '@widgets/EventProfilePreview'
import TransactionsInfobox from '@widgets/TransactionsInfobox'
import SalesProfitByCategory from '@widgets/SalesProfitByCategory'

//assets
import credit from '@assets/images/dashboard/credit-card.webp'
import wallet from '@assets/images/dashboard/wallet.webp'

//i18n
import { withTranslation } from 'react-i18next'

const Boxes = ({ t, wrapperClass }: any) => {
  return (
    <div className={`grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-[26px] ${wrapperClass || ''}`}>
      <EventProfileInfobox icon='tax' value={23400} label={t('income')} withCurrency={true} />
      <EventProfileInfobox icon='barcode' color='green' value={234} label={t('new_orders')} withCurrency={true} />
      <EventProfileInfobox icon='tax' color='red' value={123} label={t('expense')} withCurrency={true} />
    </div>
  )
}

const EventAnalysisDetail = ({ t }: any) => {
  const { width } = useWindowSize()

  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='widgets-grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6'>
        <EventProfilePreview />
        <TransactionsInfobox title={t('transaction')} />
        <div className='widgets-grid grid-cols-1 md:col-span-3 md:grid-cols-2'>
          <SaleActivity title={t('sale_activity')} />
          <div className='widgets-grid grid-cols-1'>
            <WalletBadge label={t('total.expense')} value={32100} image={credit} />
            <WalletBadge label={t('total.profit')} value={144100} image={wallet} />
          </div>
        </div>
        <div className='widgets-grid grid-cols-1 md:col-span-3 lg:grid-cols-2 2xl:col-span-6'>
          <PeriodSalesRevenue title={t('period-sales-revenue')} />
          <div className='widgets-grid grid-cols-1'>
            <SalesProfitByCategory
              translate={{
                title: t('sales-profit-by-category.title'),
                review_rate: t('sales-profit-by-category.review_rate'),
                from: t('sales-profit-by-category.from'),
                response: t('sales-profit-by-category.response'),
                view_all_review: t('sales-profit-by-category.view_all_reviews')
              }}
            />
            {(width < 1024 || width >= 1440) && <Boxes t={t} />}
          </div>
        </div>
        {width >= 1024 && width < 1440 && <Boxes t={t} wrapperClass='col-span-3' />}
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('event_analysis_detail')(EventAnalysisDetail)
