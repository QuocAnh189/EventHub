// components
import Collapse from '@mui/material/Collapse'

// utils
import PropTypes from 'prop-types'
import formatDate from '@utils/dayjs'
import { getStatusColor } from '@utils/helpers'

interface IProps {
  transaction: any
  activeCollapse: any
  handleCollapse: any
}
const TransactionCollapseItem = (props: IProps) => {
  const { transaction, activeCollapse, handleCollapse } = props

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[18px]'>
          <div className='img-wrapper w-[40px] h-[40px] flex items-center justify-center shrink-0'>
            <img className='max-w-[30px]' src={transaction.event.coverImageUrl} alt='anhquoc' />
          </div>
          <span className='h6 hidden truncate xs:inline'>My Event</span>
        </div>
        <div className='flex items-center gap-2.5 shrink-0'>
          <p className='text-sm font-medium'>{formatDate(transaction.timestamp)}</p>
          <button
            className={`collapse-btn ${activeCollapse === transaction.quantity ? 'active' : ''}`}
            aria-label='Toggle view'
            onClick={() => handleCollapse(transaction.quantity)}
          >
            <i className='icon icon-caret-down-solid' />
          </button>
        </div>
      </div>
      <Collapse in={activeCollapse === transaction.quantity}>
        <table className='basic-table'>
          <tbody>
            <tr>
              <td>Customer</td>
              <td className='capitalize'>{transaction.customerName}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <span
                  className='badge-status'
                  style={{
                    backgroundColor: `var(--${getStatusColor(transaction.status)})`,
                    width: '100%'
                  }}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{transaction.ticketQuantity}</td>
            </tr>
            <tr>
              <td>Total Price</td>
              <td>{transaction.totalPrice}</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{transaction.discountPrice}</td>
            </tr>
            <tr>
              <td>Final Price</td>
              <td>{transaction.finalPrice}</td>
            </tr>
          </tbody>
        </table>
      </Collapse>
    </div>
  )
}

TransactionCollapseItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  activeCollapse: PropTypes.string.isRequired,
  handleCollapse: PropTypes.func.isRequired
}

export default TransactionCollapseItem
