// components
import Timestamp from '@ui/Timestamp'

// utils
import { getStatusColor } from '@utils/helpers'

export const ORDERS_COLUMN_DEFS: any = [
  {
    title: 'Date & Time',
    dataIndex: 'created_at',
    render: (timestamp: any) => (
      <div className='flex items-center justify-center'>
        <Timestamp date={timestamp} />
      </div>
    )
  },
  {
    title: 'Event',
    dataIndex: 'event',
    className: 'product-cell',
    render: (_: any, record: any) => {
      return (
        <div className='flex items-center'>
          {record.event ? (
            <div className='flex items-center gap-[18px]'>
              <div className='img-wrapper w-[60px] h-[60px] flex items-center justify-center shrink-0'>
                <img className='max-w-[50px]' src={record.event.coverImageUrl} alt={record.event.name} />
              </div>
              <span className='hidden lg:inline'>{record.event.name}</span>
            </div>
          ) : (
            'N/A'
          )}
        </div>
      )
    },

    responsive: ['xl']
  },
  {
    title: 'Author',
    dataIndex: 'user',
    className: 'product-cell',
    render: (_: any, record: any) => {
      return (
        <div className='flex items-center'>
          {record.event ? (
            <div className='w-full flex items-center justify-center'>
              <div className='flex w-[150px] items-center gap-[18px]'>
                <div className='img-wrapper w-[40px] h-[40px] flex items-center justify-center shrink-0 rounded-full'>
                  <img
                    className='max-w-[50px]'
                    src={record.event.creator.avatarUrl}
                    alt={record.event.creator.userName}
                  />
                </div>
                <span className='hidden lg:inline'>{record.event.creator.userName}</span>
              </div>
            </div>
          ) : (
            'N/A'
          )}
        </div>
      )
    },

    responsive: ['xl']
  },

  {
    title: 'Order Status',
    dataIndex: 'status',
    render: (status: string) => (
      <div className='w-full flex items-center justify-center'>
        <span className='badge-status badge-status--lg' style={{ backgroundColor: `var(--${getStatusColor(status)})` }}>
          {status}
        </span>
      </div>
    )
  },
  {
    title: 'Quantity',
    dataIndex: 'ticketQuantity',
    responsive: ['xl']
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    render: (totalPrice: number) => {
      return <h1 className='font-heading font-semibold text-header text-center'>{totalPrice} VND</h1>
    }
  },
  {
    title: 'Discount',
    dataIndex: 'discountPrice',
    render: (discountPrice: number) => {
      return <h1 className='font-heading font-semibold text-header text-center'>{discountPrice} VND</h1>
    }
  },
  {
    title: 'Final Price',
    dataIndex: 'finalPrice',
    render: (_: any, record: any) => {
      const total = record.totalPrice - record.discountPrice

      return <h1 className='font-heading font-semibold text-header text-center'>{total} VND</h1>
    }
  }
]

export const TRANSACTIONS_COLUMN_DEFS: any = [
  {
    title: 'Date & Time',
    dataIndex: 'created_at',
    render: (timestamp: any) => (
      <div className='flex items-center justify-center'>
        <Timestamp date={timestamp} />
      </div>
    )
  },
  {
    title: 'Event',
    dataIndex: 'event',
    render: (_: any, record: any) => {
      return (
        <div className='flex items-center'>
          {record.event ? (
            <div className='flex items-center gap-[18px]'>
              <div className='img-wrapper w-[60px] h-[60px] flex items-center justify-center shrink-0'>
                <img className='max-w-[50px]' src={record.event.coverImageUrl} alt={record.event.name} />
              </div>
              <span className='hidden truncate lg:inline'>{record.event.name}</span>
            </div>
          ) : (
            'N/A'
          )}
        </div>
      )
    }
  },
  {
    title: 'Customer',
    dataIndex: 'customerName',
    render: (type: any) => <span className='capitalize'>{type}</span>
  },
  {
    title: 'Method',
    dataIndex: 'method',
    responsive: ['xxl']
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: any) => (
      <div className='w-full flex items-center justify-center'>
        <span className='badge-status' style={{ backgroundColor: `var(--${getStatusColor(status)})` }}>
          {status}
        </span>
      </div>
    )
  },
  {
    title: 'Quantity',
    dataIndex: 'ticketQuantity',
    responsive: ['xl']
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    render: (totalPrice: number) => {
      return <h1 className='font-heading font-semibold text-header text-center'>{totalPrice} VND</h1>
    }
  },
  {
    title: 'Discount',
    dataIndex: 'discountPrice',
    render: (discountPrice: number) => {
      return <h1 className='font-heading font-semibold text-header text-center'>{discountPrice} VND</h1>
    }
  },
  {
    title: 'Final Price',
    dataIndex: 'finalPrice',
    render: (_: any, record: any) => {
      const total = record.totalPrice - record.discountPrice

      return <h1 className='font-heading font-semibold text-header text-center'>{total} VND</h1>
    }
  }
]
