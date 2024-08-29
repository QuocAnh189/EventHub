// components
import { Spring } from './Spring'
import { Counter } from './Counter'
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  iconClass?: string
  color?: string
  label?: string
  suffix?: string
  count?: number
}

const TranslatedCustomersInfobox = (props: Props) => {
  const { t, iconClass = 'users-solid', color = 'accent', label = 'All', suffix, count = 0 } = props

  return (
    <Spring className='card flex flex-col justify-center md:items-center'>
      <div className={`badge-icon badge-icon--sm bg-${color}`}>
        <i className={`icon-${iconClass} text-base`} />
      </div>
      <div className='mt-3 mb-4'>
        <Counter className='h2 md:!text-[32px]' num={count} suffix={suffix} />
      </div>
      <h6>
        {label}
        <span className='xl:hidden 4xl:inline'> {t('middle.customers')}</span>
      </h6>
    </Spring>
  )
}

export const CustomersInfobox = withTranslation('review')(TranslatedCustomersInfobox)
