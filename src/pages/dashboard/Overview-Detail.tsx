//layout
import ProtectedLayout from '@layouts/protected'

// components
import { PageHeader } from '@layouts/components/PageHeader'
import PopularTags from '@components/PopularTags'
import RevenueInfobox from '@components/RevenueInfobox'
import CalendarSelector from '@components/CalendarSelector'
import SalesVolumeChart from '@components/SalesVolumeChart'
import WalletBadge from '@widgets/WalletBadge'
import ReferralRate from '@widgets/ReferralRate'
import ProfitPerformance from '@widgets/ProfitPerformance'
import ConversionRateWithChart from '@widgets/ConversionRateWithChart'

//i18n
import { withTranslation } from 'react-i18next'

const OverviewDetail = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div>
        <div className='flex flex-col gap-4 mb-5 md:mb-[26px] md:gap-5 lg:flex-row lg:justify-between'>
          <CalendarSelector wrapperClass='md:max-w-[275px]' id='revenue' label={t('sales-period')} />
          <PopularTags />
        </div>
        <div
          className='widgets-grid grid-cols-1 md:grid-cols-2
                     2xl:grid-cols-[minmax(0,_584px)_minmax(0,_462px)_minmax(0,_1fr)]'
        >
          <SalesVolumeChart title={t('sales-volume')} />
          <div className='widgets-grid grid-cols-1 md:grid-cols-2 md:gap-[26px] md:col-span-2 lg:col-span-1'>
            <RevenueInfobox icon='tax' color='yellow' trend={10} label={`${t('income')} 2023`} value={96100} />
            <RevenueInfobox color='red' trend={78} label={`${t('profit')} 2023`} value={2100} />
            <RevenueInfobox icon='tax' trend={-12} label={`${t('expense')} 2023`} value={396100} />
            <RevenueInfobox color='green' trend={65} label={`${t('revenue')} 2023`} value={80100} />
          </div>
          <ProfitPerformance title={t('profit-performance')} />
          <ConversionRateWithChart />
          <ReferralRate title={t('average-referral-rate.title')} />
          <div className='widgets-grid grid-cols-1 md:row-start-3 md:col-end-3 2xl:row-start-2 2xl:col-end-4'>
            <WalletBadge
              value={176200}
              imgClass='2xl:hidden 4xl:flex'
              label={t('total.balance')}
              image='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
            />
            <WalletBadge
              value={32100}
              imgClass='2xl:hidden 4xl:flex'
              label={t('total.expense')}
              image='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
            />
            <WalletBadge
              value={144100}
              imgClass='2xl:hidden 4xl:flex'
              label={t('total.profit')}
              image='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
            />
          </div>
        </div>
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('overview_detail')(OverviewDetail)
