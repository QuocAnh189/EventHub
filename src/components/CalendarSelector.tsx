//components
import RangeDatePicker from '@ui/RangeDatePicker'

interface Props {
  wrapperClass: string
  label?: string
  id: string
  onChange?: any
}

const CalendarSelector = (props: Props) => {
  const { wrapperClass, label = 'Period', id, onChange } = props

  return (
    <div className={`${wrapperClass || ''} flex flex-col gap-2.5 w-full`}>
      <label className='h5 w-fit' htmlFor={id}>
        {label}:
      </label>
      <RangeDatePicker onChange={onChange} id={id} />
    </div>
  )
}

export default CalendarSelector
