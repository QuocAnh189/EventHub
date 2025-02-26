//hook
import { useEffect, useState, useContext } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'

//components
import ModalBase from '@ui/ModalBase'
import Loader from '@components/Loader'
import Pagination from '@ui/Pagination'
import InvitationUserItem from './InvitationUserItem'
import Loading from '@components/Loading'
import { toast } from 'react-toastify'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetFollowerByUserIdQuery, useInvitationUsersMutation } from '@redux/apis/user.api'

//i18n
import { withTranslation } from 'react-i18next'

//context
import { AppSocketContext } from '@contexts/socket_io.context'

interface IProps {
  t: any
  eventId: string
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
}

const ModalInvitation = (props: IProps) => {
  const { t, modalOpen, setModalOpen, eventId } = props

  const userId: string = useAppSelector((state) => state.persistedReducer.user.user.id)

  const { SocketInvitation } = useContext(AppSocketContext)
  const socket = useAppSelector((state) => state.socket.socket)

  const [userIds, setUserIds] = useState<string[]>([])
  const [params, setParams] = useState({ page: 1, pageSize: 10, search: '' })
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 500)

  const { data, isLoading } = useGetFollowerByUserIdQuery({ userId, params })
  const [Invitation, { isLoading: loadingInvite }] = useInvitationUsersMutation()

  const pagination = usePagination(data?.metadata.totalCount, data?.metadata.pageSize)

  useEffect(() => {
    setParams({ ...params, page: pagination.currentPage })
  }, [pagination.currentPage])

  useEffect(() => {
    setParams({ ...params, search: debouncedSearchTerm })
  }, [debouncedSearchTerm])

  const handleChangeUserIds = (id: string) => {
    if (userIds.includes(id)) {
      setUserIds(userIds.filter((uid) => uid !== id))
    } else {
      setUserIds([...userIds, id])
    }
  }

  const handleInvite = async () => {
    try {
      const result = await Invitation({ userIds, eventId }).unwrap()
      if (result) {
        if (SocketInvitation) {
          SocketInvitation(socket, userIds)
        }
        setUserIds([])
        toast.success('Invited successfully')
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to invite users')
    }
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col h-4/5 xl:w-3/5 will-change-transform overflow-y-auto'>
        <button
          className='absolute top-2 right-2 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center justify-between'>
            <h5>{t('invitation.title')}</h5>
            <input
              className='field-input w-[200px] md:w-[300px]'
              type='search'
              placeholder={t('invitation.search_label')}
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
                  <InvitationUserItem
                    key={`follower-${index}`}
                    index={index}
                    user={item}
                    eventId={eventId}
                    checked={userIds.includes(item.id)}
                    text_invited={t('invitation.invited')}
                    onChange={(id: string) => handleChangeUserIds(id)}
                  />
                ))}
            </div>
          )}
        </div>
        <div className='mt-4'>{pagination && pagination.maxPage != 1 && <Pagination pagination={pagination} />}</div>
        <div className='flex items-center justify-end'>
          <button onClick={handleInvite} className='w-20 btn btn-primary'>
            {loadingInvite ? <Loading /> : t('invitation.invite')}
          </button>
        </div>
      </div>
    </ModalBase>
  )
}

export default withTranslation('event_detail')(ModalInvitation)
