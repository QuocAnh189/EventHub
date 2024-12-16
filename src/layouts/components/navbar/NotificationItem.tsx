//components
import Spring from '@components/Spring'

//utils
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

//i18n
import { withTranslation } from 'react-i18next'

//interface
import { INotificationFollowing } from '@interfaces/systems/notification.interface'

dayjs.extend(relativeTime)

interface Props {
  t: any
  notification: INotificationFollowing
  index: number
  onView: (id: string) => void
}

const NotificationItem = (props: Props) => {
  const { notification, index, onView } = props

  return (
    <Spring className='notification with-border flex gap-6' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden'>
        <img src={notification.follower.avatarUrl} alt={notification.follower.fullName} />
      </div>
      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{notification.follower.fullName}</span>
        <p>
          <span>{notification.follower.userName}</span> đã theo dõi bạn
        </p>
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray'>
          <span>{dayjs(notification.createdAt).fromNow()}</span>
          <i className='icon-circle-solid text-[4px]' />
        </p>
        <div className='flex gap-2.5'>
          <button className='text-btn' onClick={() => onView(notification.follower.id)}>
            View Profile
          </button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('common')(NotificationItem)
