//components

//hooks
import CouponCard from '@components/CouponCard'
import ModalCreateCoupon from '@pages/coupon/components/ModalCreate'
import { useState } from 'react'

const CouponsGrid = () => {
  const [search, setSearch] = useState<string>('')

  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
          <button className='btn btn-primary text-white' onClick={() => setModalOpen(true)}>
            Add New Coupon <i className='icon-circle-plus-regular' />
          </button>
          <input
            className='field-input w-[300px] md:w-[300px]'
            type='search'
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className='mt-5 flex flex-col flex-1'>
        <div
          className='flex-1 mb-[35px] grid content-start gap-[26px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
                             2xl:grid-cols-4'
        >
          <CouponCard index={0} />
          <CouponCard index={1} />
          <CouponCard index={2} />
          <CouponCard index={3} />
          <CouponCard index={4} />
        </div>
        {/* {pagination.maxPage > 1 && <Pagination pagination={pagination} />} */}
      </div>
      <ModalCreateCoupon modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default CouponsGrid
