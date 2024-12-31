//utils
import formatDate from '@utils/dayjs'

interface IProps {
  date: any
  wrapperClass?: string
}

const Timestamp = (props: IProps) => {
  const { date, wrapperClass } = props

  return (
    <div className={`flex gap-2 ${wrapperClass || ''}`}>
      <i className='icon icon-clock-solid text-sm -mt-[1px]' />
      <div className='flex flex-col gap-[3px]'>
        <span className='h6 !text-sm !font-semibold'>{formatDate(date, 'DD/MM/YYYY')}</span>
        <span className='font-medium text-sm'>at {formatDate(date, 'hh:mm A')}</span>
      </div>
    </div>
  )
}

export default Timestamp
