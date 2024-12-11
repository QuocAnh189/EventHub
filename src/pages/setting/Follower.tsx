//hook
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'

//component
import ProtectedLayout from '@layouts/protected'
import PageHeader from '@layouts/components/PageHeader'
import Spring from '@components/Spring'
import UserItem from './components/UserItem'
import Pagination from '@ui/Pagination'
import Loader from '@components/Loader'

//redux
import { useGetFollowerByUserIdQuery } from '@redux/apis/user.api'
import { useAppSelector } from '@hooks/useRedux'

const Follower = () => {
  const userId: string = useAppSelector((state) => state.persistedReducer.user.user.id)

  const [params, setParams] = useState({ page: 1, pageSize: 10, search: '' })
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data, isLoading } = useGetFollowerByUserIdQuery({ userId, params })

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  return (
    <ProtectedLayout>
      <PageHeader title='Follower' />
      <Spring
        className='card flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px]
                xl:row-start-1 xl:col-start-2 xl:col-span-1 mx-[200px]'
      >
        <div className='flex flex-col gap-5'>
          <div className='flex items-center justify-between'>
            <h5>My Follower</h5>
            <input
              className='field-input w-[300px] md:w-[400px]'
              type='search'
              placeholder='Search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <div className='grid gap-4 md:grid-cols-2 md:gap-5'>
              {data?.items &&
                data?.items.map((item: any, index: number) => (
                  <UserItem key={`follower-${index}`} index={index} user={item} />
                ))}
            </div>
          )}
          {!data?.items && <div className='w-full flex items-center justify-center'>No follower found.</div>}
        </div>
        <div>{pagination && pagination.maxPage != 1 && <Pagination pagination={pagination} />}</div>
      </Spring>
    </ProtectedLayout>
  )
}

export default Follower
