//components
import ReactMarkdown from 'react-markdown'
import UserAvatar from './UserAvatar'

//dayjs
import dayjs from 'dayjs'
import MessageAttachments from './MessageAttachments'
import MessageOptionsDropdown from './MessageOptionsDropdown'

const MessageItem = ({ message, attachmentClick }: any) => {
  const currentUser: any = {
    id: 1
  }

  return (
    <div className={'chat ' + (message.sender_id === currentUser.id ? 'chat-end' : 'chat-start')}>
      {<UserAvatar user={message.sender} />}

      <div className='chat-header'>
        {message.sender_id === currentUser.id ? message.sender.name : ''}

        <time className='text-xs opacity-50 ml-2'>{dayjs(message.created_at).format('DD/MM h:mm A')}</time>
      </div>

      <div
        className={
          'chat-bubble relative ' + (message.sender_id === currentUser.id ? ' chat-bubble-info' : ' chat-start')
        }
      >
        {message.sender_id === currentUser.id && <MessageOptionsDropdown />}
        <div className='chat-message'>
          <div className='chat-message-content'>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
          <MessageAttachments attachments={message.attachments} attachmentClick={attachmentClick} />
        </div>
      </div>
    </div>
  )
}

export default MessageItem
