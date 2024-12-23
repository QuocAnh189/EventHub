// hooks
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

// components
import Spring from '@components/Spring'
import StyledTable from './styles'
import Pagination from '@ui/Pagination'
import OrderCollapseItem from '@components/OrderCollapseItem'
import Empty from '@components/Empty'

// constants
import { ORDERS_COLUMN_DEFS } from '@constants/columnDefs'

//interfaces
import { IPaymentOrder } from '@interfaces/contents'
import { IPagination } from '@interfaces/common.interface'

interface IProps {
  orders: IPaymentOrder | any
  pagination: IPagination
}

const OrdersTable = (props: IProps) => {
  const { orders, pagination } = props
  const { width } = useWindowSize()
  const [activeCollapse, setActiveCollapse] = useState('')

  useEffect(() => {
    setActiveCollapse('')
  }, [pagination.currentPage, width])

  const handleCollapse = (sku: any) => {
    if (activeCollapse === sku) {
      setActiveCollapse('')
    } else {
      setActiveCollapse(sku)
    }
  }

  return (
    <Spring className='flex flex-col flex-1 w-full'>
      {width >= 768 ? (
        <StyledTable
          columns={ORDERS_COLUMN_DEFS}
          dataSource={orders}
          pagination={false}
          locale={{
            emptyText: <Empty text='No orders found' />
          }}
          rowKey={(record: any) => record.id}
        />
      ) : (
        <div className='flex flex-1 flex-col gap-5 mb-[26px]'>
          {orders.map((order: any) => (
            <OrderCollapseItem
              key={order.id}
              order={order}
              activeCollapse={activeCollapse}
              handleCollapse={handleCollapse}
            />
          ))}
        </div>
      )}
      {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </Spring>
  )
}

export default OrdersTable
