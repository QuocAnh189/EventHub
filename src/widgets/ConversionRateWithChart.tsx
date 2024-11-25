//hooks
import { useSubmenu } from '@hooks/useSubmenu'

//components
import Spring from '@components/Spring'
import InfoBtn from '@ui/InfoBtn'
import Submenu from '@ui/Submenu'
import StatsHighlightTable from '@components/stats-highlight-table'
import GaugeChart from 'react-gauge-chart'
import Counter from '@components/Counter'
import Trend from '@ui/Trend'

//i18n
import { withTranslation } from 'react-i18next'

const ConversionRateWithChart = ({ t }: any) => {
  const { anchorEl, open, handleClick, handleClose } = useSubmenu()

  return (
    <Spring className='card md:col-span-2 lg:col-span-1 2xl:col-span-1'>
      <div className='flex items-center justify-between mb-1.5'>
        <h4 className='h4'>{t('conversion-rate.title')}</h4>
        <InfoBtn onClick={handleClick} />
        <Submenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <div className='py-5 pl-6 pr-8'>
            <p className='text-sm max-w-[160px] mb-2'>{t('conversion-rate.submenu.description')}</p>
            <div className='flex flex-col gap-3'>
              <button className='menu-btn subheading-2'>
                <span className='icon-wrapper'>
                  <i className='icon icon-share-solid' />
                </span>
                {t('conversion-rate.submenu.share')}
              </button>
              <button className='menu-btn subheading-2'>
                <span className='icon-wrapper'>
                  <i className='icon icon-print-solid' />
                </span>
                {t('conversion-rate.submenu.print')}
              </button>
            </div>
          </div>
        </Submenu>
      </div>
      <div className='md:grid grid-cols-[minmax(0,300px)_,minmax(0,1fr)] items-center lg:grid-cols-1 xl:grid-cols-[minmax(0,300px)_,minmax(0,1fr)]'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <StatsHighlightTable data={undefined} />
          <div className='flex flex-col gap-3 xs:flex-row xs:gap-5 md:gap-[28px]'>
            <div className='flex flex-col'>
              <Counter className='h3' num={32547} />
              <span className='label-text mt-1 mb-[6px] text-header'>{t('conversion-rate.regular-customers')}</span>
              <Trend value={14.08} />
            </div>
            <div className='flex flex-col'>
              <Counter className='h3' num={12345} prefix='+' />
              <span className='label-text mt-1 mb-[6px] text-header'>{t('conversion-rate.new-customers')}</span>
              <Trend value={23} />
            </div>
          </div>
        </div>
        <div className='hidden md:block lg:hidden xl:block'>
          <GaugeChart
            id='gauge-chart1'
            nrOfLevels={3}
            colors={['var(--red)', 'var(--yellow)', 'var(--green)']}
            needleColor={'var(--header)'}
            needleBaseColor={'var(--header)'}
            arcWidth={0.1}
            percent={0.68}
            cornerRadius={20}
            animate={false}
            hideText={true}
          />
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('overview_detail')(ConversionRateWithChart)
