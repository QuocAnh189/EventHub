//components
import Avatar from './Avatar'

//i18n
import { withTranslation } from 'react-i18next'

interface IProps {
  t: any
  imageUrl: string
  title: string
  organizerFullName?: string
  userFullName?: string
}
const ConversationHeader = (props: IProps) => {
  const { t, imageUrl, title, organizerFullName, userFullName } = props
  return (
    <div className='p-3 flex justify-between items-center border-b border-slate-700 truncate'>
      <div className='flex items-center gap-3'>
        <Avatar imageUrl={imageUrl} />
        <div className=''>
          <h3 className='text-gray-500'>{title}</h3>
          {organizerFullName && (
            <p className='text-header'>
              {t('box_message.right.organizer')}: {organizerFullName}
            </p>
          )}
          {userFullName && (
            <p className='text-header'>
              {t('box_message.right.user')}: {userFullName}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(ConversationHeader)
