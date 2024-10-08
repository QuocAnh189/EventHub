//components
import Spring from '@components/Spring'

//utils
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

//i18n
import { withTranslation } from 'react-i18next'

dayjs.extend(relativeTime)

const placeholder = {
  timestamp: new Date(),
  subcategory: 'Offers',
  text: 'Joined to discount program',
  user: {
    firstName: 'J.',
    lastName: 'Davidson',
    avatar: 'https://placehold.it/100x100'
  }
}

interface Props {
  t: any
  notification: any
  index: number
}

const NotificationItem = (props: Props) => {
  const { t, notification = placeholder, index } = props

  return (
    <Spring className='notification with-border flex gap-2.5' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden'>
        <img src={notification.user.avatar} alt={notification.user.fullName} />
      </div>
      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{notification.user.fullName}</span>
        <p>{notification.text}</p>
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray'>
          <span>{dayjs(notification.timestamp).fromNow()}</span>
          <i className='icon-circle-solid text-[4px]' />
          <span>{notification.subcategory}</span>
        </p>
        <div className='flex gap-2.5'>
          <button className='btn btn--outline size-xs blue'>{t('notification.accept_btn')}</button>
          <button className='btn btn--outline size-xs red'>{t('notification.decline_btn')}</button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('common')(NotificationItem)
