//components
import Avatar from './Avatar'

interface IProps {
  imageUrl: string
  title: string
  organizerFullName?: string
  userFullName?: string
}
const ConversationHeader = (props: IProps) => {
  const { imageUrl, title, organizerFullName, userFullName } = props
  return (
    <div className='p-3 flex justify-between items-center border-b border-slate-700'>
      <div className='flex items-center gap-3'>
        <Avatar imageUrl={imageUrl} />
        <div className=''>
          <h3 className='text-gray-500'>{title}</h3>
          {organizerFullName && <p className='text-header'>Organizer: {organizerFullName}</p>}
          {userFullName && <p className='text-header'>User: {userFullName}</p>}
        </div>
      </div>
    </div>
  )
}

export default ConversationHeader
