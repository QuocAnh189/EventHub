// components
import Spring from '@components/Spring'

// utils
import { numFormatter } from '@utils/helpers'
import classNames from 'classnames'

interface Props {
  icon: string
  color: string
  value: number
  label: string
  withCurrency: boolean
}

export const EventProfileInfobox = (props: Props) => {
  const { icon = 'diamond', color = 'accent', value = 0, label = 'Lorem', withCurrency = true } = props
  return (
    <Spring className='card !py-5 !px-[22px] flex items-center gap-3'>
      <div className={`badge-icon bg-${color}`}>
        <i
          className={classNames(`icon-${icon}`, {
            'text-[23px] mt-1': icon === 'diamond',
            'text-lg': icon === 'tax'
          })}
        />
      </div>
      <div className='flex flex-col gap-0.5'>
        <span className='h4'>
          {withCurrency && '$'}
          {numFormatter(value, 1)}
        </span>
        <span className='label-text'>{label}</span>
      </div>
    </Spring>
  )
}

export default EventProfileInfobox
