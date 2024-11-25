// components
import Spring from '@components/Spring'
import StyledTable from './styles'
import Pagination from '@ui/Pagination'
import OrderCollapseItem from '@components/OrderCollapseItem'
import Empty from '@components/Empty'

// hooks
import usePaginationBackUp from '@hooks/usePaginationBackup'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

// constants
import { ORDERS_COLUMN_DEFS } from '@constants/columnDefs'

// data placeholder
import orders from '@db/orders'

const OrdersTable = ({ category, sort }: any) => {
  const { width } = useWindowSize()
  const [activeCollapse, setActiveCollapse] = useState('')

  const filteredData = category.value === 'all' ? orders : orders.filter((order) => order.category === category.value)
  const sortedData = () => {
    switch (sort.value) {
      default:
      case 'default':
        return filteredData
      case 'a-z':
        return filteredData.sort((a, b) => a.product.name.localeCompare(b.product.name))
      case 'z-a':
        return filteredData.sort((a, b) => b.product.name.localeCompare(a.product.name))
      case 'rating-high-to-low':
        return filteredData.sort((a, b) => b.rating - a.rating)
      case 'rating-low-to-high':
        return filteredData.sort((a, b) => a.rating - b.rating)
    }
  }

  const pagination: any = usePaginationBackUp(sortedData(), 5)

  // go to first page when period or sort changes and reset active collapse
  useEffect(() => {
    pagination.goToPage(0)
    setActiveCollapse('')
  }, [category, sort])

  // reset active collapse when page or window width changes
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
          dataSource={pagination.currentItems()}
          pagination={false}
          locale={{
            emptyText: <Empty text='No orders found' />
          }}
          rowKey={(record: any) => record.orderNumber}
        />
      ) : (
        <div className='flex flex-1 flex-col gap-5 mb-[26px]'>
          {pagination.currentItems().map((order: any) => (
            <OrderCollapseItem
              key={order.sku}
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
