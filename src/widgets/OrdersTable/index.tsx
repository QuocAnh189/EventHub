// components
import Empty from '@components/Empty'
import Spring from '@components/Spring'
// import Pagination from '@ui/Pagination'
import StyledTable from './styles'
import { IPayment } from 'interfaces/contents/payment'
import useOrdersTable from './useOrdersTable'

interface OrdersTableProps {
  payments?: IPayment[]
  isLoading?: boolean
  onClick?: (order: IPayment) => void
  onChangeStatus?: (order: IPayment) => void
}

const OrdersTable = ({ payments, isLoading, onClick, onChangeStatus }: OrdersTableProps) => {
  const [columns] = useOrdersTable({ onClick, onChangeStatus })

  return (
    <Spring className='flex flex-col flex-1 w-full'>
      <StyledTable
        loading={isLoading}
        columns={columns}
        dataSource={payments}
        pagination={false}
        locale={{
          emptyText: <Empty text='No orders found' />
        }}
        rowKey={(record) => record.id}
      />
      {/* {pagination.maxPage > 1 && <Pagination pagination={pagination} />} */}
    </Spring>
  )
}

export default OrdersTable
