//hook
import { useEffect, useState } from 'react'

//layout
import ProtectedLayout from '@layouts/protected'

//component
import { PageHeader } from '@layouts/components/PageHeader'
import EditOrderModal from '@components/payment/EditOrderModal'
import OrdersTable from '@widgets/OrdersTable'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetPaymentsByUserIdQuery } from '@redux/apis/payment.api'

//interface
import { IPayment } from '@interfaces/contents/payment.interface'

const Payment = () => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data, isFetching, refetch } = useGetPaymentsByUserIdQuery({ userId: user?.id! })

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IPayment>()

  useEffect(() => {
    refetch()
  }, [])

  console.log(data?.items)

  return (
    <ProtectedLayout>
      <PageHeader title='My Orders' />
      <OrdersTable
        payments={data?.items || []}
        isLoading={isFetching}
        onClick={(order: any) => {
          setSelectedOrder(order)
          setIsOpenModal(true)
        }}
      />
      {isOpenModal && selectedOrder && (
        <EditOrderModal isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} order={selectedOrder} />
      )}
    </ProtectedLayout>
  )
}

export default Payment
