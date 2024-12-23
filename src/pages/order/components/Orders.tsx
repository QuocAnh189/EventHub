//hooks
import { useState, useEffect } from 'react'
import { useDebounce } from '@hooks/useDebounce'
import { usePagination } from '@hooks/usePagination'

//components
import OrdersInfobox from '@components/OrdersInfobox'
import OrdersTable from '@widgets/OrdersTable'
import CalendarSelector from '@components/CalendarSelector'

//redux

//i18n
import { withTranslation } from 'react-i18next'

//redux
import { useGetOrdersQuery } from '@redux/apis/payment.api'

const Orders = ({ t }: any) => {
  const [search, setSearch] = useState<string>('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const [params, setParams] = useState({ pageSize: 6, page: 1, search: '', startDate: '', endDate: '' })

  const { data } = useGetOrdersQuery(params)

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  const handleChangeTime = (e: any) => {
    const startDate = e[0].format('YYYY-MM-DD')
    const endDate = e[1].format('YYYY-MM-DD')
    setParams({ ...params, startDate, endDate })
  }

  return (
    <>
      <div className='flex flex-col flex-1 gap-5 md:gap-[26px]'>
        <div className='w-full flex items-end justify-between'>
          <CalendarSelector
            onChange={(e: any) => {
              handleChangeTime(e)
            }}
            wrapperClass='lg:max-w-[275px] lg:col-span-2 xl:col-span-4'
            id='ordersPeriodSelector'
            label={t('period')}
          />
          <input
            className='field-input w-[300px] md:w-[250px]'
            type='search'
            placeholder={t('search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='w-full grid-cols-1 mb-8 widgets-grid xl:grid-cols-6'>
          <div className='grid-cols-1 widgets-grid md:grid-cols-2 lg:grid-cols-4 xl:col-span-6'>
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
        {data && <OrdersTable orders={data.items} pagination={pagination} />}
      </div>
    </>
  )
}

export default withTranslation('order')(Orders)
