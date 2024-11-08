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
  invitation: any
  index: number
}

const InvitationItem = (props: Props) => {
  const { t, invitation = placeholder, index } = props

  return (
    <Spring className='notification with-border flex gap-6' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden'>
        <img src={invitation.user.avatar} alt={invitation.user.fullName} />
      </div>
      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{invitation.user.fullName}</span>
        <p>{invitation.text}</p>
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray'>
          <span>{dayjs(invitation.timestamp).fromNow()}</span>
          <i className='icon-circle-solid text-[4px]' />
          <span>{invitation.subcategory}</span>
        </p>
        <div className='flex gap-2.5'>
          <button className='btn btn--outline size-xs blue'>{t('invitation.view_btn')}</button>
          <button className='btn btn--outline size-xs red'>{t('invitation.mark_btn')}</button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('common')(InvitationItem)
