//hooks
import { useState } from 'react'

//components
// import EditOrderModal from '@components/payment/EditOrderModal'
import OrdersInfobox from '@components/OrdersInfobox'
// import StatusModal from '@components/payment/StatusModal'
import OrdersAverageRate from '@widgets/OrdersAverageRate'
import OrdersTable from '@widgets/OrdersTable'
import Select from '@ui/Select'
import CalendarSelector from '@components/CalendarSelector'

//interface
// import { IPayment } from 'interfaces/contents/payment.interface'

//i18n
import { withTranslation } from 'react-i18next'

// constants
import { PRODUCT_CATEGORIES, ORDER_SORT_OPTIONS } from '@constants/options.constant'

//data
// import payments from '@db/payment'

const Orders = ({ t }: any) => {
  // const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  // const [isOpenStatusModal, setIsOpenStatusModal] = useState<boolean>(false)
  // const [selectedOrder, setSelectedOrder] = useState<IPayment>()

  const [category, setCategory] = useState(PRODUCT_CATEGORIES[0])
  const [sort, setSort] = useState(ORDER_SORT_OPTIONS[0])

  return (
    <>
      <div className='flex flex-col flex-1 gap-5 md:gap-[26px]'>
        <div
          className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[26px] lg:grid-cols-4 lg:items-end
                     xl:grid-cols-6'
        >
          <CalendarSelector wrapperClass='lg:max-w-[275px] lg:col-span-2 xl:col-span-4' id='ordersPeriodSelector' />
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[26px] md:col-span-2'>
            <Select
              value={category}
              options={PRODUCT_CATEGORIES}
              onChange={setCategory}
              placeholder='Product category'
            />
            <Select value={sort} options={ORDER_SORT_OPTIONS} onChange={setSort} placeholder='Default sorting' />
          </div>
        </div>
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
        <OrdersTable category={category} sort={sort} />
      </div>
      {/* {isOpenModal && selectedOrder && (
        <EditOrderModal isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} order={selectedOrder} />
      )}
      {isOpenStatusModal && selectedOrder && (
        <StatusModal isModalOpen={isOpenStatusModal} setIsModalOpen={setIsOpenStatusModal} order={selectedOrder} />
      )} */}
    </>
  )
}

export default withTranslation('order')(Orders)
