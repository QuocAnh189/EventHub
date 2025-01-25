// hooks
import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'

// components
import Spring from '@components/Spring'
import StyledTable from './styles'
import CalendarSelector from '@components/CalendarSelector'
import Pagination from '@ui/Pagination'
import TransactionCollapseItem from '@components/TransactionCollapseItem'
import Empty from '@components/Empty'

// constants
import { TRANSACTIONS_COLUMN_DEFS } from '@constants/columnDefs'

//redux
import { useGetTransactionsQuery } from '@redux/apis/payment.api'

//i18n
import { withTranslation } from 'react-i18next'

const TransactionsTable = ({ t }: any) => {
  const { width } = useWindowSize()
  const [activeCollapse, setActiveCollapse] = useState('')

  const [search, setSearch] = useState<string>('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const [params, setParams] = useState({ pageSize: 6, page: 1, search: '', startDate: '', endDate: '' })
  const { data } = useGetTransactionsQuery(params)

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  const handleCollapse = (sku: any) => {
    if (activeCollapse === sku) {
      setActiveCollapse('')
    } else {
      setActiveCollapse(sku)
    }
  }

  const handleChangeTime = (e: any) => {
    const startDate = e[0].format('YYYY-MM-DD')
    const endDate = e[1].format('YYYY-MM-DD')
    setParams({ ...params, startDate, endDate })
  }

  return (
    <>
      <div className='flex flex-col gap-4 mb-5 md:flex-row justify-between px-4 xl:px-0'>
        <CalendarSelector
          onChange={(e: any) => {
            handleChangeTime(e)
          }}
          wrapperClass='md:max-w-[275px]'
          id='transactionsDate'
          label={t('label')}
        />
        <div className='flex flex-col-reverse gap-2.5 md:flex-col md:min-w-[220px]'>
          <p className='md:text-right'>
            {t('view_transaction')}: {pagination.showingOf()}
          </p>
          <input
            className='field-input w-full md:w-[300px]'
            type='search'
            placeholder={t('search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {data && (
        <Spring className='flex flex-col flex-1'>
          {width >= 768 ? (
            <StyledTable
              columns={TRANSACTIONS_COLUMN_DEFS || []}
              dataSource={data.items}
              rowKey={(record: any) => record.id}
              locale={{
                emptyText: <Empty text='No transactions found' />
              }}
              pagination={false}
            />
          ) : (
            <div className='flex flex-1 flex-col gap-5 mb-[26px]'>
              {data.items.map((item: any, index: any) => (
                <TransactionCollapseItem
                  key={`${index}`}
                  handleCollapse={handleCollapse}
                  activeCollapse={activeCollapse}
                  transaction={item}
                />
              ))}
            </div>
          )}
          {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </Spring>
      )}
    </>
  )
}

export default withTranslation('transaction')(TransactionsTable)
