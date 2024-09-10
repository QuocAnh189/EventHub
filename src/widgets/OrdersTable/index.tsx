// components
import Empty from '@components/Empty'
import Spring from '@components/Spring'
import useOrdersTable from './useOrdersTable'
// import Pagination from '@ui/Pagination'

//styles
import StyledTable from './styles'

//interfaces
import { IPayment } from 'interfaces/contents/payment.interface'

interface Props {
  payments?: IPayment[] | any
  isLoading?: boolean
  onClick?: (order: IPayment) => void
  onChangeStatus?: (order: IPayment) => void
}

const OrdersTable = (props: Props) => {
  const { payments, isLoading, onClick, onChangeStatus } = props
  const [columns]: any = useOrdersTable({ onClick, onChangeStatus })

  return (
    <Spring className='flex flex-col flex-1 w-full'>
      <StyledTable
        loading={isLoading}
        columns={columns || []}
        dataSource={payments}
        pagination={false}
        locale={{
          emptyText: <Empty text='No orders found' />
        }}
        rowKey={(record: any) => record.id}
      />
      {/* {pagination.maxPage > 1 && <Pagination pagination={pagination} />} */}
    </Spring>
  )
}

export default OrdersTable
