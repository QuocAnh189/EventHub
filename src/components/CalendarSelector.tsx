// components
import RangeDatePicker from '@ui/RangeDatePicker'

interface Props {
  wrapperClass: string
  label?: string
  id: string
}

const CalendarSelector = (props: Props) => {
  const { wrapperClass, label = 'Sales period', id } = props

  return (
    <div className={`${wrapperClass || ''} flex flex-col gap-2.5 w-full`}>
      <label className='h5 w-fit' htmlFor={id}>
        {label}:
      </label>
      <RangeDatePicker id={id} value={10} onChange={() => {}} />
    </div>
  )
}

export default CalendarSelector
