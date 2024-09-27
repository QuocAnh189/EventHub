//components
import Spring from '@components/Spring'
import LabeledProgressBar from '@components/LabeledProgressBar'

//i18
import { withTranslation } from 'react-i18next'

const OrdersAverageRate = ({ t }: any) => {
  return (
    <Spring className='card flex flex-col gap-4'>
      <h5>{t('middle.box_one.average_rate')} (%)</h5>
      <div className='flex flex-col gap-2.5'>
        <LabeledProgressBar color='header' label={t('middle.box_one.event_view')} value={87} displayValue='87%' />
        <LabeledProgressBar color='header' label={t('middle.box_one.total_tickets')} value={23} displayValue='23%' />
      </div>
    </Spring>
  )
}

export default withTranslation('order')(OrdersAverageRate)
