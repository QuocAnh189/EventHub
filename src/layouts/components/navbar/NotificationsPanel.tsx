//hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useMeasure from 'react-use-measure'

//components
import NotificationItem from './NotificationItem'
import FilterItem from '@ui/FilterItem'
import DrawerBase from '@ui/DrawerBase'

//constants
import { NOTIFICATION_OPTIONS } from '@constants/options.constant'

//data placeholder
import notifications from '@db/notifications'

//i18n
import { withTranslation } from 'react-i18next'
import { useGetNotificationFollowingsQuery } from '@redux/apis/user.api'
import { INotificationFollowing } from '@interfaces/systems/notification.interface'

const step = 6

interface Props {
  t: any
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const NotificationsPanel = (props: Props) => {
  const { t, open, onOpen, onClose } = props

  const navigate = useNavigate()

  const [headerRef, { height: headerHeight }] = useMeasure()
  const [footerRef, { height: footerHeight }] = useMeasure()
  const [filter, setFilter] = useState<string>('follow')
  const [displayed, setDisplayed] = useState(step)

  const [params, setParams] = useState({ pageSize: 6 })
  const { data: notification_followings } = useGetNotificationFollowingsQuery(params)

  const handleLoadMore = () => {
    setDisplayed(displayed + step)
    setParams({ pageSize: params.pageSize + 6 })
  }

  const getQty = (category: any) => {
    if (category === 'all') return notifications.length
    return notifications.filter((notification: any) => notification.category === category).length
  }

  const handleViewProfile = (id: string) => {
    navigate(`/organization/profile/${id}`)
    onClose()
  }

  return (
    <DrawerBase anchor='right' open={open} onClose={onClose} onOpen={onOpen}>
      <div className='pt-[30px] px-[30px] pb-4' ref={headerRef}>
        <div className='flex justify-between items-center'>
          <h5>{t('notification.title')}</h5>
          <button
            className='text-accent text-lg transition hover:text-red'
            onClick={onClose}
            aria-label='Close notifications panel'
          >
            <i className='icon-circle-xmark-regular' />
          </button>
        </div>
        <div className='flex mt-5'>
          {NOTIFICATION_OPTIONS.map((item: any, index: any) => (
            <FilterItem
              type='notification'
              key={index}
              text={item.label}
              value={item.value}
              active={filter}
              qty={getQty(item.value)}
              onClick={() => setFilter(item.value)}
            />
          ))}
        </div>
      </div>
      <div
        className='h-full overflow-y-auto flex-1'
        style={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
      >
        {filter === 'follow' &&
          notification_followings?.items &&
          notification_followings?.items.map((notification: INotificationFollowing, index: number) => (
            <NotificationItem
              key={`notification-${index}`}
              notification={notification}
              index={index}
              onView={handleViewProfile}
            />
          ))}
      </div>
      <div className='p-[30px]' ref={footerRef}>
        <button
          className='btn btn--primary w-full'
          onClick={handleLoadMore}
          disabled={notification_followings?.items.length === notification_followings?.metadata.totalCount}
        >
          Load More
        </button>
      </div>
    </DrawerBase>
  )
}

export default withTranslation('common')(NotificationsPanel)
