//components
import Spring from '@components/Spring'
import { TruncatedText } from './TruncatedText'

//utils
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

//interface
import { IInvitation } from '@interfaces/systems/invitation.interface'

//i18n
import { withTranslation } from 'react-i18next'

dayjs.extend(relativeTime)

interface Props {
  t: any
  invitation: IInvitation
  index: number
  onView: (id: string) => void
}

const InvitationItem = (props: Props) => {
  const { invitation, index, onView } = props

  return (
    <Spring className='notification with-border flex gap-6' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden'>
        <img src={invitation.inviter.avatarUrl} alt={invitation.inviter.fullName} />
      </div>
      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{invitation.inviter.fullName}</span>
        <p>Mời bạn thích sự kiện</p>
        <TruncatedText className='flex-1 font-bold' text={invitation.event.name} />
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray'>
          <span>{dayjs(invitation.createdAt).fromNow()}</span>
          <i className='icon-circle-solid text-[4px]' />
        </p>
        <div className='flex gap-2.5'>
          <button
            className='text-btn'
            onClick={() => {
              onView(invitation.event.id)
            }}
          >
            View
          </button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('common')(InvitationItem)
