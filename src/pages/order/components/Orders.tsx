//hook
import { useState } from 'react'

//components
import EditOrderModal from '@components/payment/EditOrderModal'
import OrdersInfobox from '@components/OrdersInfobox'
import StatusModal from '@components/payment/StatusModal'
import OrdersAverageRate from '@widgets/OrdersAverageRate'
import OrdersTable from '@widgets/OrdersTable'

//interface
import { IPayment } from 'interfaces/contents/payment.interface'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetPaymentsByCreatorIdQuery } from '@redux/apis/payment.api'

//i18n
import { withTranslation } from 'react-i18next'

const payments = [
  {
    event: { coverImage: '', name: 'My Event' },
    customerName: 'Anh Quoc',
    customerEmail: 'anhquoc18092003@gmail..com',
    customerPhone: '0702465814',
    ticketQuantity: 10,
    totalPrice: 500,
    discount: 10,
    status: 'active',
    paymentMethod: {
      method: {
        methodLogo: '',
        methodName: 'Pay Cashier',
        paymentAccountNumber: 'Pay Cashier'
      }
    },
    createdAt: new Date().toISOString()
  }
]

const Orders = ({ t }: any) => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data, isFetching } = useGetPaymentsByCreatorIdQuery({ creatorId: user?.id! })

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenStatusModal, setIsOpenStatusModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IPayment>()

  return (
    <>
      <div>
        <div className='w-full grid-cols-1 mb-8 widgets-grid xl:grid-cols-6'>
          <div className='xl:col-span-2'>
            <OrdersAverageRate />
          </div>
          <div className='grid-cols-1 widgets-grid md:grid-cols-2 lg:grid-cols-4 xl:col-span-4'>
            <OrdersInfobox
              title={t('middle.box_completed.completed')}
              count={2345}
              icon={<i className='icon-check-to-slot-solid' />}
            />
            <OrdersInfobox
              title={t('middle.box_confirmed.confirmed')}
              count={323}
              color='green'
              icon={<i className='icon-list-check-solid' />}
            />
            <OrdersInfobox
              title={t('middle.box_canceled.canceled')}
              count={17}
              color='red'
              icon={<i className='icon-ban-solid' />}
            />
            <OrdersInfobox
              title={t('middle.box_refunded.refunded')}
              count={2}
              color='badge-status-bg'
              icon={<i className='icon-rotate-left-solid' />}
            />
          </div>
        </div>
        <OrdersTable
          payments={data?.items || payments}
          isLoading={isFetching}
          onClick={(order: IPayment) => {
            setSelectedOrder(order)
            setIsOpenModal(true)
          }}
          onChangeStatus={(order: IPayment) => {
            setSelectedOrder(order)
            setIsOpenStatusModal(true)
          }}
        />
      </div>
      {isOpenModal && selectedOrder && (
        <EditOrderModal isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} order={selectedOrder} />
      )}
      {isOpenStatusModal && selectedOrder && (
        <StatusModal isModalOpen={isOpenStatusModal} setIsModalOpen={setIsOpenStatusModal} order={selectedOrder} />
      )}
    </>
  )
}

export default withTranslation('order')(Orders)
