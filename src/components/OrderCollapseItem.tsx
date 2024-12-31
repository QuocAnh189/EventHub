//components
import Collapse from '@mui/material/Collapse'

//utils
import { getStatusColor } from '@utils/helpers'

//utils
import formatDate from '@utils/dayjs'

interface IProps {
  order?: any
  activeCollapse?: any
  handleCollapse?: any
}

const OrderCollapseItem = (props: IProps) => {
  const { order, activeCollapse, handleCollapse } = props

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[18px]'>
          <div className='img-wrapper w-[40px] h-[40px] flex items-center justify-center shrink-0'>
            <img className='max-w-[30px]' src={order.event.coverImageUrl} alt='anhquoc' />
          </div>
          <span className='h6 hidden truncate xs:inline'>My Event</span>
        </div>
        <div className='flex items-center gap-2.5 shrink-0'>
          <p className='text-sm font-medium'>{formatDate(order.timestamp)}</p>
          <button
            className={`collapse-btn ${activeCollapse === order.quantity ? 'active' : ''}`}
            aria-label='Toggle view'
            onClick={() => handleCollapse(order.quantity)}
          >
            <i className='icon icon-caret-down-solid' />
          </button>
        </div>
      </div>
      <Collapse in={activeCollapse === order.quantity}>
        <table className='basic-table'>
          <tbody>
            <tr>
              <td>Author Name</td>
              <td className='capitalize'>{order.event.creator.userName}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <span
                  className='badge-status'
                  style={{
                    backgroundColor: `var(--${getStatusColor(order.status)})`,
                    width: '100%'
                  }}
                >
                  {order.status}
                </span>
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{order.ticketQuantity}</td>
            </tr>
            <tr>
              <td>Total Price</td>
              <td>{order.totalPrice}</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{order.discountPrice}</td>
            </tr>
            <tr>
              <td>Final Price</td>
              <td>{order.finalPrice}</td>
            </tr>
          </tbody>
        </table>
      </Collapse>
    </div>
  )
}

export default OrderCollapseItem
