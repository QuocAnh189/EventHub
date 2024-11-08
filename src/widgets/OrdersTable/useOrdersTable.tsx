//component
import { Image } from 'antd'

//interface vs type
import { AnyObject } from 'antd/es/_util/type'
import type { ColumnsType } from 'antd/es/table/interface'
import { IPayment, IPaymentEvent, IPaymentMethod } from 'interfaces/contents/payment.interface'

//icons
import { MdOutlineEditCalendar } from 'react-icons/md'

//util
import { getStatusColor } from '@utils/helpers'

//assets
import cashier_default from '@assets/images/payment/cashier.png'

interface Props {
  onClick?: (order: IPayment) => void
  onChangeStatus?: (order: IPayment) => void
}

export default function useOrdersTable({ onClick, onChangeStatus }: Props) {
  const columns: ColumnsType<IPayment | AnyObject> = [
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
      align: 'center',
      render: (event: IPaymentEvent) => (
        <div className='flex items-center gap-4'>
          <Image
            width={50}
            height={50}
            className='object-cover rounded-md'
            alt='event-cover-image'
            preview={false}
            src={event.coverImage}
          ></Image>
          <span>{event.name}</span>
        </div>
      )
    },
    {
      title: 'Customer',
      dataIndex: 'customerName',
      key: 'customerName',
      align: 'center',
      render: (_, payment) => (
        <div className='flex flex-col items-start gap-2'>
          <span>
            <strong>Name: </strong>
            {payment.customerName}
          </span>
          <span>
            {' '}
            <strong>Email: </strong>
            {payment.customerEmail}
          </span>
          <span>
            <strong>Phone: </strong>
            {payment.customerPhone}
          </span>
        </div>
      )
    },
    {
      title: 'Quantity',
      dataIndex: 'ticketQuantity',
      key: 'ticketQuantity',
      align: 'center'
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      align: 'center',
      render: (value) => <span>{value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
      align: 'center',
      render: (value) => <span>{value * 100} %</span>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (value) => (
        <span className='badge-status badge-status--lg' style={{ backgroundColor: `var(--${getStatusColor(value)})` }}>
          {value}
        </span>
      )
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      align: 'center',
      render: (method: IPaymentMethod) => (
        <div className='flex items-center gap-4'>
          <Image
            width={50}
            height={50}
            className='object-contain rounded-md shadow-md'
            alt='event-cover-image'
            preview={false}
            src={method.method.methodLogo || cashier_default}
          />
          <div className='flex flex-col items-start gap-2'>
            <span>{method.method.methodName}</span>
            <span className='font-semibold'>{method.paymentAccountNumber}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Checkout Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center',
      render: (value: Date) => <span>{new Date(value).toDateString()}</span>
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      align: 'center',
      render: (_, order) => (
        <div className='flex justify-center gap-4'>
          <div className='cursor-pointer' onClick={() => onClick && onClick(order as IPayment)}>
            <i className='text-lg leading-none icon icon-pen-to-square-regular' />
          </div>
          {onChangeStatus && (
            <div className='cursor-pointer' onClick={() => onChangeStatus(order as IPayment)}>
              <MdOutlineEditCalendar className='text-lg leading-none icon' />
            </div>
          )}
        </div>
      )
    }
  ]

  return [columns]
}
