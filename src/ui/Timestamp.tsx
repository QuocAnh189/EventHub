//util
import dayjs from 'dayjs'

interface Props {
  date: any
  wrapperClass?: string
}

const Timestamp = (props: Props) => {
  const { date, wrapperClass } = props

  return (
    <div className={`flex gap-2 ${wrapperClass || ''}`}>
      <i className='icon icon-clock-solid text-sm -mt-[1px]' />
      <div className='flex flex-col gap-[3px]'>
        <span className='h6 !text-sm !font-semibold'>{dayjs(date).format('DD/MM/YYYY')}</span>
        <span className='font-medium text-sm'>at {dayjs(date).format('hh:mm A')}</span>
      </div>
    </div>
  )
}

export default Timestamp
