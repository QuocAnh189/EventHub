// components
import RatingStars from '@ui/RatingStars'
import SubmenuTrigger from '@ui/SubmenuTrigger'
import { NavLink } from 'react-router-dom'

// utils
import { getCategory, getStatusColor } from '@utils/helpers'

export const ORDERS_COLUMN_DEFS: any = [
  {
    title: '# order',
    dataIndex: 'orderNumber',
    width: '100px',
    render: (text: any) => <span className='subheading-2'>#{text}</span>
  },
  {
    title: 'Product',
    dataIndex: 'product',
    className: 'product-cell',
    render: (product: any) => (
      <div className='flex gap-6'>
        <div className='img-wrapper w-[70px] h-[64px] flex items-center justify-center shrink-0'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='flex-col hidden 2xl:flex'>
          <h5 className='text-sm max-w-[195px] mb-1.5'>{product.name}</h5>
          <div className='flex flex-col gap-1 text-sm'>
            <p>Regular price: ${product.regular_price}</p>
            {product.sale_price && <p>Sale price: ${product.sale_price}</p>}
          </div>
        </div>
      </div>
    ),
    responsive: ['lg']
  },
  {
    title: 'SKU',
    dataIndex: 'sku'
  },
  {
    title: 'Category',
    dataIndex: 'category',
    render: (category: any) => (
      <div className='flex items-center gap-4'>
        <div className={`badge-icon badge-icon--sm bg-${getCategory(category)!.color}`}>
          <i className={`${getCategory(category)!.icon} text-base`} />
        </div>
        <span className='label-text'>{getCategory(category)!.label}</span>
      </div>
    ),
    responsive: ['lg']
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    render: (payment: any) => {
      const status =
        payment.amount === payment.received
          ? 'Fully paid'
          : payment.amount > payment.received && payment.received !== 0
          ? 'Partially paid'
          : 'Unpaid'

      return (
        <div className='flex flex-col'>
          <span className='font-heading font-bold text-header'>
            {status !== 'Fully paid' && `$${payment.received} / from `}${payment.amount}
          </span>
          <span>{status}</span>
        </div>
      )
    }
  },
  {
    title: 'Order Status',
    dataIndex: 'status',
    render: (status: any) => (
      <span className='badge-status badge-status--lg' style={{ backgroundColor: `var(--${getStatusColor(status)})` }}>
        {status}
      </span>
    )
  },
  {
    title: 'Rate',
    dataIndex: 'rating',
    render: (rating: any) => <RatingStars rating={rating} />,
    responsive: ['xl']
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    width: '70px',
    render: () => (
      <div className='flex items-center justify-end gap-11'>
        <NavLink to='/product-editor' aria-label='Edit'>
          <i className='icon icon-pen-to-square-regular text-lg leading-none' />
        </NavLink>
        <SubmenuTrigger />
      </div>
    )
  }
]
