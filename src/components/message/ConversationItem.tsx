//hook
import { useContext } from 'react'

//components
import Avatar from './Avatar'

//utils
import formatDate from '@utils/dayjs'

//interface
import { IConversation } from '@interfaces/websockets/conversation.interface'

//redux
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setConversation } from '@redux/slices/conversation.slice'

//context
import { AppSocketContext } from '@contexts/socket_io.context'

interface IProps {
  conversation: IConversation | any
  selectedConversation?: boolean
  online?: boolean
  user_role: boolean
  userId: string
}

const ConversationItem = (props: IProps) => {
  const dispatch = useAppDispatch()

  const { conversation, online, user_role, userId } = props
  const { JoinConversation } = useContext(AppSocketContext)
  const socket = useAppSelector((state) => state.socket.socket)

  const handleJoinConversation = () => {
    if (socket && JoinConversation) {
      JoinConversation(socket, conversation.id)
    }
    dispatch(setConversation(conversation))
  }

  return (
    <div
      onClick={handleJoinConversation}
      className={
        'conversation-item flex items-center p-2 gap-2 text-gray-300 transition-all cursor-pointer border-l-4 hover:bg-black/30 pr-4'
      }
    >
      <Avatar imageUrl={user_role ? conversation.event.coverImageUrl : conversation.user.avatarUrl} online={online} />

      <div className={`flex-1 text-xs max-w-full overflow-hidden opacity-50`}>
        <div className='flex gap-1 justify-between items-center'>
          <h3 className='text-sm font-semibold overflow-hidden text-nowrap text-ellipsis'>
            {user_role ? conversation.event.name : conversation.user.userName}
          </h3>
          {conversation.lastMessage && (
            <span className='text-nowrap'>{formatDate(conversation.lastMessage.createdAt)}</span>
          )}
        </div>
        {conversation.lastMessage && (
          <p className='text-xs text-nowrap overflow-hidden text-ellipsis'>
            {conversation.lastMessage.sender_id === userId
              ? 'You: '
              : `${conversation.organizer?.userName || conversation.user?.userName}: `}
            {conversation.lastMessage.content}
          </p>
        )}
      </div>
    </div>
  )
}

export default ConversationItem
