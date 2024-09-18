import { ReactElement } from 'react'

// components
import Spring from './Spring'
import Counter from './Counter'
import SubmenuTrigger from '@ui/SubmenuTrigger'
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  icon: ReactElement
  color?: string
  title?: string
  count?: number
}

const OrdersInfobox = (props: Props) => {
  const { t, icon, color = 'accent', title = 'Lorem ipsum', count = 0 } = props

  return (
    <Spring className='card !pb-5'>
      <div className='flex justify-between items-start'>
        <div className='badge-icon badge-icon--sm' style={{ backgroundColor: `var(--${color})` }}>
          {icon}
        </div>
        <SubmenuTrigger />
      </div>
      <h6 className='mt-[28px] mb-2.5'>
        <span className='xl:hidden 2xl:inline'>{t('middle.order')} </span>
        {title}
      </h6>
      <Counter className='h3' num={count} />
    </Spring>
  )
}

export default withTranslation('order')(OrdersInfobox)
