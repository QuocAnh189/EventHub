// components
import Spring from '@components/Spring'
import Trend from '@ui/Trend'

interface Props {
  item?: any
  trend?: number
}
const TransactionsInfobox = (props: Props) => {
  const { trend = 14.56 } = props

  return (
    <Spring className='card flex flex-row items-center gap-2'>
      <div className='flex justify-between items-start mb-2.5'>
        <div className='badge-icon bg-green'>
          <i className='icon-transfer text-[20px]' />
        </div>
      </div>
      <div>
        <span className='block label-text mb-0.5'>Transactions</span>
        <Trend value={trend} />
      </div>
    </Spring>
  )
}

export default TransactionsInfobox
