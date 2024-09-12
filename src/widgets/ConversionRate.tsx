//components
import Spring from '@components/Spring'
import StatsHighlightTable from '@components/stats-highlight-table'
import Counter from '@components/Counter'
import Trend from '@ui/Trend'

//i18n
import { withTranslation } from 'react-i18next'

const ConversionRate = ({ t }: any) => {
  return (
    <Spring className='card xl:col-span-3 2xl:pr-12 2xl:pb-[37px]'>
      <h5 className='mb-[14px]'>{t('conversion_rate.title')}</h5>
      <div
        className='grid gap-6 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-10 md:items-start
                 xl:grid-cols-[minmax(0,260px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(0,300px)_minmax(0,1fr)]'
      >
        <StatsHighlightTable data={undefined} />
        <div className='flex flex-col gap-2.5 md:flex-row md:gap-[26px] lg:justify-end'>
          <div className='flex flex-col'>
            <Counter className='h3' num={32547} />
            <span className='label-text mt-1 mb-[6px] text-header'>
              {t('regular')} <span className='xl:hidden min-[1600px]:inline'>{t('conversion_rate.customers')}</span>
            </span>
            <Trend value={14.08} />
          </div>
          <div className='flex flex-col'>
            <Counter className='h3' num={12345} prefix='+' />
            <span className='label-text mt-1 mb-[6px] text-header'>
              {t('new')} <span className='xl:hidden min-[1600px]:inline'>{t('conversion_rate.customers')}</span>
            </span>
            <Trend value={23} />
          </div>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('customer')(ConversionRate)
