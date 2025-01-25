//hooks
import { useState, useEffect } from 'react'
import { useDebounce } from '@hooks/useDebounce'
import { usePagination } from '@hooks/usePagination'
import { useAppDispatch } from '@hooks/useRedux'

//components
import ModalCreateCoupon from '@pages/coupon/components/ModalCreate'
import CouponCard from '@components/CouponCard'
import Pagination from '@ui/Pagination'
import { toast } from 'react-toastify'

//redux
import { useGetCouponsByCreatedQuery, useDeleteCouponMutation, useCreateCouponMutation } from '@redux/apis/coupon.api'
import { addCoupons } from '@redux/slices/coupon.slice'

//interface
import { ICoupon } from '@interfaces/contents/coupon.interface'
import { ICreateCouponPayload } from '@dtos/coupon.dto'

//i18n
import { withTranslation } from 'react-i18next'

const CouponsGrid = ({ t }: any) => {
  const dispatch = useAppDispatch()
  const [params, setParams] = useState({ page: 1, pageSize: 8, search: '' })
  const [search, setSearch] = useState<string>('')
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data } = useGetCouponsByCreatedQuery(params)
  const [DeleteCoupon, { isLoading: isDeleteLoading }] = useDeleteCouponMutation()
  const [CreateCoupon, { isLoading: isCreateLoading }] = useCreateCouponMutation()

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  const handleDeleteCoupon = async (id: string) => {
    try {
      const result = await DeleteCoupon(id).unwrap()
      if (result) {
        toast.success('Coupon deleted successfully')
        if (data?.items.length === 1) {
          setParams({ ...params, page: pagination.currentPage - 1 })
        }
      }
    } catch (error) {
      console.error(error)
      toast.success('Something went wrong')
    }
  }

  const handleCreateCoupon = async (data: ICreateCouponPayload) => {
    const formData = new FormData()

    for (const key in data) {
      formData.append(key, data[key as keyof ICreateCouponPayload] as string)
    }

    try {
      const result = await CreateCoupon(formData).unwrap()
      if (result) {
        setModalOpen(false)
        dispatch(addCoupons(result))
        toast.success('created successfully')
      }
    } catch (error) {
      console.error(error)
      toast.error('something went wrong')
    }
  }

  return (
    <div className='flex flex-col flex-1 px-4 xl:px-0'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
          <button className='btn btn-primary text-white' onClick={() => setModalOpen(true)}>
            {t('add_new_coupon')} <i className='icon-circle-plus-regular' />
          </button>
          <input
            className='field-input w-full md:w-[300px]'
            type='search'
            placeholder={t('search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className='mt-5 flex flex-col flex-1'>
        <div
          className='flex-1 mb-[35px] grid content-start gap-[26px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3
                             2xl:grid-cols-4'
        >
          {data?.items?.map((item: ICoupon, index: number) => (
            <CouponCard
              key={index}
              index={index}
              coupon={item}
              onDelete={handleDeleteCoupon}
              isDeleteLoading={isDeleteLoading}
            />
          ))}
        </div>
        {pagination && pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>
      <ModalCreateCoupon
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        onCreate={handleCreateCoupon}
        isLoading={isCreateLoading}
      />
    </div>
  )
}

export default withTranslation('coupon')(CouponsGrid)
