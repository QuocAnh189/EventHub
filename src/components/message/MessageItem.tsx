//components
import ReactMarkdown from 'react-markdown'
import Avatar from './Avatar'

//dayjs
import dayjs from 'dayjs'
import MessageAttachments from './MessageAttachments'
import MessageOptionsDropdown from './MessageOptionsDropdown'

//interface
import { IMessage } from '@interfaces/websockets/conversation.interface'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { IUser } from '@interfaces/systems'

interface IProps {
  message: IMessage
}

const MessageItem = (props: IProps) => {
  const { message } = props

  const conversation = useAppSelector((state) => state.persistedReducer.conversation.conversation)
  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  return (
    <div className={'chat ' + (message.senderId === user.id ? 'chat-end' : 'chat-start')}>
      {
        <Avatar
          imageUrl={
            message.senderId === user.id
              ? user.avatarUrl
              : conversation.user?.avatarUrl || conversation.organizer?.avatarUrl
          }
        />
      }

      <div className='chat-header'>
        {message.senderId === user.id ? user.fullName : conversation.user?.fullName || conversation.organizer?.fullName}

        <time className='text-xs opacity-50 ml-2'>{dayjs(message.createdAt).format('DD/MM h:mm A')}</time>
      </div>

      <div className={'chat-bubble relative ' + (message.senderId === user.id ? ' chat-bubble-info' : ' chat-start')}>
        {message.senderId === user.id && <MessageOptionsDropdown />}
        <div className='chat-message'>
          <div className='chat-message-content'>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
          <MessageAttachments attachments={[]} attachmentClick={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default MessageItem
