//components
import Spring from '@components/Spring'
import { NavLink } from 'react-router-dom'

//utils
import formatDate from '@utils/dayjs'

//i18n
import { withTranslation } from 'react-i18next'

//interface
import { INotificationFollowing } from '@interfaces/systems/notification.interface'

interface Props {
  t: any
  notification: INotificationFollowing
  index: number
  onClose: () => void
}

const NotificationItem = (props: Props) => {
  const { t, notification, index, onClose } = props

  return (
    <Spring className='notification with-border flex gap-6' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden'>
        <img src={notification.follower.avatarUrl} alt={notification.follower.fullName} />
      </div>
      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{notification.follower.fullName}</span>
        <p>
          <span>{notification.follower.userName}</span> {t('notification.follow_text')}
        </p>
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray'>
          <span>{formatDate(notification.createdAt, '', true)}</span>
          <i className='icon-circle-solid text-[4px]' />
        </p>
        <div className='flex gap-2.5'>
          <NavLink to={`/organization/profile/${notification.follower.id}`} className='text-btn' onClick={onClose}>
            {t('notification.view_profile')}
          </NavLink>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('common')(NotificationItem)
