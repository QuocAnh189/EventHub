// components
import ProgressBar from '@ui/ProgressBar'

interface Props {
  label: string
  value: any
  displayValue: any
  color: string
  withBar?: boolean
  wrapperClass?: string
}

const LabeledProgressBar = (props: Props) => {
  const { label, value, displayValue, color, withBar = true, wrapperClass } = props

  return (
    <div className={`flex flex-col gap-[5px] ${wrapperClass || ''}`}>
      <div className='flex items-center justify-between'>
        <span className='h6 !text-sm !text-body-text'>{label}</span>
        <span className='text-header h6 !text-sm'>{displayValue}</span>
      </div>
      {withBar && <ProgressBar value={value} color={color} />}
    </div>
  )
}

export default LabeledProgressBar
