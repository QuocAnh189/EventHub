//components
import Spring from '@components/Spring'
import { TruncatedText } from './TruncatedText'
import { NavLink } from 'react-router-dom'

//utils
import formatDate from '@utils/dayjs'

//interface
import { IInvitation } from '@interfaces/systems/invitation.interface'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  invitation: IInvitation
  index: number
  onClose: () => void
}

const InvitationItem = (props: IProps) => {
  const { t, invitation, index, onClose } = props

  return (
    <Spring className='notification with-border flex gap-6' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden'>
        <img src={invitation.inviter.avatarUrl} alt={invitation.inviter.fullName} />
      </div>
      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{invitation.inviter.fullName}</span>
        <p>{t('invitation.favourite_text')}</p>
        <TruncatedText className='flex-1 font-bold' text={invitation.event.name} />
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray'>
          <span>{formatDate(invitation.createdAt, '', true)}</span>
          <i className='icon-circle-solid text-[4px]' />
        </p>
        <div className='flex gap-2.5'>
          <NavLink to={`/organization/event/${invitation.event.id}`} className='text-btn' onClick={onClose}>
            {t('invitation.view_event')}
          </NavLink>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('common')(InvitationItem)
