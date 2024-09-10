// components
import Spring from './Spring'
import SubmenuTrigger from '@ui/SubmenuTrigger'
import Trend from '@ui/Trend'
import Submenu from '@ui/Submenu'

// hooks
import { useSubmenu } from '@hooks/useSubmenu'

// utils
import { numFormatter } from '@utils/helpers'

interface Props {
  icon?: string
  color?: string
  label: string
  trend: number
  value: number
}

const RevenueInfobox = (props: Props) => {
  const {
    icon = props.icon || 'diamond',
    color = props.color || 'accent',
    label = props.label || 'Lorem',
    trend,
    value
  } = props
  const { anchorEl, open, handleClick, handleClose } = useSubmenu()

  return (
    <Spring className='card !pr-[18px]'>
      <div className='flex justify-between items-start mb-6'>
        <div className={`badge-icon bg-${color}`}>
          <i className={`icon-${icon} text-[23px] mt-1`} />
        </div>
        <SubmenuTrigger onClick={handleClick} />
      </div>
      <div className='flex justify-between mb-2'>
        <span className='label-text text-header'>{label}</span>
        <Trend value={trend} />
      </div>
      <span className='h3'>{numFormatter(value, 1, '$')}</span>
      <Submenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div className='py-5 pl-6 pr-8'>
          <p className='text-sm max-w-[160px] mb-2'>Pellentesque eget orci at lacus tincidunt maximus</p>
          <div className='flex flex-col gap-3'>
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
        </div>
      </Submenu>
    </Spring>
  )
}

export default RevenueInfobox
