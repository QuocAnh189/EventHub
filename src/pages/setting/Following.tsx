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
import { useGetFollowingByUserIdQuery } from '@redux/apis/user.api'
import { useAppSelector } from '@hooks/useRedux'

//i18n
import { withTranslation } from 'react-i18next'

const Following = ({ t }: any) => {
  const userId: string = useAppSelector((state) => state.persistedReducer.user.user.id)

  const [params, setParams] = useState({ page: 1, pageSize: 8, search: '' })
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data, isLoading } = useGetFollowingByUserIdQuery({ userId, params })

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='flex justify-center'>
        <Spring className='card md:w-3/5 h-screen overflow-y-auto'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
              <h5>{t('my_following')}</h5>
              <input
                className='field-input w-[200px] md:w-[300px]'
                type='search'
                placeholder={t('search')}
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
                    <UserItem
                      key={`follower-${index}`}
                      index={index}
                      user={item}
                      following={true}
                      view_profile_text={t('action.view_profile')}
                      un_follower_text={t('action.unfollow_profile')}
                    />
                  ))}
              </div>
            )}
            {!data?.items && <div className='w-full flex items-center justify-center'>No follower found.</div>}
          </div>
          <div className='mt-4'>{pagination && pagination.maxPage != 1 && <Pagination pagination={pagination} />}</div>
        </Spring>
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('following')(Following)
