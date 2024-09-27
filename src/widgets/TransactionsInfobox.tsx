//components
import Spring from '@components/Spring'
import Trend from '@ui/Trend'

interface Props {
  title: string
  item?: any
  trend?: number
}
const TransactionsInfobox = (props: Props) => {
  const { title, trend = 14.56 } = props

  return (
    <Spring className='card flex flex-row items-center gap-2'>
      <div className='flex justify-between items-start mb-2.5'>
        <div className='badge-icon bg-green'>
          <i className='icon-transfer text-[20px]' />
        </div>
      </div>
      <div>
        <span className='block label-text mb-0.5 text-header'>{title}</span>
        <Trend value={trend} />
      </div>
    </Spring>
  )
}

export default TransactionsInfobox
