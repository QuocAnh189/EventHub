//hooks
import { useWindowSize } from 'react-use'

//components
import Collapse from '@mui/material/Collapse'
import RatingStars from '@ui/RatingStars'
import SubmenuTrigger from '@ui/SubmenuTrigger'
import { NavLink } from 'react-router-dom'

//utils
import { getStatusColor } from '@utils/helpers'

interface Props {
  order?: any
  activeCollapse?: any
  handleCollapse?: any
}

const OrderCollapseItem = (props: Props) => {
  const { order, activeCollapse, handleCollapse } = props

  const isExtraSmall = useWindowSize().width < 375

  const status =
    order.payment.amount === order.payment.received
      ? 'Fully paid'
      : order.payment.amount > order.payment.received && order.payment.received !== 0
      ? 'Partially paid'
      : 'Unpaid'

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <span className='subheading-2'>#{order.orderNumber}</span>
        <div className='flex items-center gap-4'>
          <button
            className={`collapse-btn ${activeCollapse === order.sku ? 'active' : ''}`}
            aria-label='Toggle view'
            onClick={() => handleCollapse(order.sku)}
          >
            <i className='icon icon-caret-down-solid' />
          </button>
          <NavLink to='/product-editor' aria-label='Edit'>
            <i className='icon icon-pen-to-square-regular' />
          </NavLink>
          <SubmenuTrigger />
        </div>
      </div>
      <Collapse in={activeCollapse === order.sku}>
        <table className='basic-table'>
          <tbody>
            <tr>
              <td colSpan={2}>Product</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className='flex gap-6'>
                  <div className='img-wrapper w-[70px] h-[64px] flex items-center justify-center'>
                    <img src={order.product.image} alt={order.product.name} />
                  </div>
                  <div className='flex flex-col'>
                    <h5 className='text-sm mb-1.5'>{order.product.name}</h5>
                    <div className='flex flex-col gap-1 text-sm text-body-text'>
                      <p>Regular price: ${order.product.regular_price}</p>
                      {order.product.sale_price && <p>Sale price: ${order.product.sale_price}</p>}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>SKU</td>
              <td>{order.sku}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td className='capitalize'>{order.category}</td>
            </tr>
            <tr>
              <td>Payment</td>
              <td>
                <div className='flex flex-col'>
                  <span className='font-heading font-bold text-header'>
                    {status !== 'Fully paid' && `$${order.payment.received} / from `}${order.payment.amount}
                  </span>
                  <span>{status}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td className='capitalize'>
                {isExtraSmall ? (
                  order.status
                ) : (
                  <span
                    className='badge-status badge-status--lg'
                    style={{
                      backgroundColor: `var(--${getStatusColor(order.status)})`,
                      width: '100%'
                    }}
                  >
                    {order.status}
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td>Rate</td>
              <td>
                {isExtraSmall ? (
                  order.rating
                ) : (
                  <div className='flex justify-center'>
                    <RatingStars rating={order.rating} />
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </Collapse>
    </div>
  )
}

export default OrderCollapseItem
