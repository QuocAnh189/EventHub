// components
import { NavLink } from 'react-router-dom'
import Spring from '@components/Spring'
import ReportItem from '@components/ReportItem'
import InfoBtn from '@ui/InfoBtn'
import Submenu from '@ui/Submenu'

// hooks
import { useSubmenu } from '@hooks/useSubmenu'
import { withTranslation } from 'react-i18next'

const data = [
  { dataKey: 'revenue', title: 'Revenue', amount: 176120, trend: 45 },
  { dataKey: 'expense', title: 'Expense', amount: 310452, trend: -12 },
  { dataKey: 'profit', title: 'Profit', amount: 342558, trend: 14.56 }
]

const TotalReport = ({ t }: any) => {
  const { anchorEl, open, handleClick, handleClose } = useSubmenu()

  return (
    <Spring className='card flex flex-col lg:col-span-3 xl:col-span-1'>
      <div>
        <div className='flex items-center justify-between'>
          <h4>{t('total-report.title')}</h4>
          <InfoBtn onClick={handleClick} />
        </div>
        <p className='mt-1.5 mb-4 text-sm md:text-base text-header'>
          {t('total-report.description')} 01/01/2024 - 01/10/2024
        </p>
      </div>
      <div className='flex flex-col flex-1 gap-6 mb-6'>
        {data.map((item, index: number) => (
          <ReportItem key={index} data={item} />
        ))}
      </div>
      <NavLink className='btn btn--primary' to='/organization/dashboard/overview-detail'>
        {t('total-report.more-detail')}
      </NavLink>
      <Submenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div className='flex flex-col items-start gap-5 p-5'>
          <button className='menu-btn subheading-2'>
            <span className='icon-wrapper'>
              <i className='icon icon-share-solid' />
            </span>
            Share
          </button>
          <button className='menu-btn subheading-2'>
            <span className='icon-wrapper'>
              <i className='icon icon-print-solid' />
            </span>
            Print
          </button>
        </div>
      </Submenu>
    </Spring>
  )
}

export default withTranslation('overview')(TotalReport)
