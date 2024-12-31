//components
import Spring from '@components/Spring'

//utils
import formatDate from '@utils/dayjs'

//i18n
import { withTranslation } from 'react-i18next'

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

interface IProps {
  t: any
  notification: any
  index: number
}

const NotificationItem = (props: IProps) => {
  const { notification = placeholder, index } = props

  return (
    <Spring className='notification with-border flex gap-6' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden'>
        <img src={notification.user.avatar} alt={notification.user.fullName} />
      </div>
      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{notification.user.fullName}</span>
        <p>{notification.text}</p>
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray'>
          <span>{formatDate(notification.timestamp, '', true)}</span>
          <i className='icon-circle-solid text-[4px]' />
        </p>
        <div className='flex gap-2.5'>
          <button className='text-btn' onClick={() => {}}>
            View Profile
          </button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('common')(NotificationItem)
