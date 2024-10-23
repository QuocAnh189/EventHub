//components
import UserAvatar from './UserAvatar'

//dayjs
import dayjs from 'dayjs'

const ConversationItem = ({ conversation, selectedConversation = null, online = null }: any) => {
  let classes = 'border-transparent'

  if (selectedConversation) {
    if (!selectedConversation.is_group && !conversation.is_group && selectedConversation.id === conversation.id) {
      classes = 'border-blue-500 bg-black/30'
    }
  }

  return (
    <a
      href=''
      className={
        'conversation-item flex items-center p-2 gap-2 text-gray-300 transition-all cursor-pointer border-l-4 hover:bg-black/30 ' +
        classes +
        'pr-4'
      }
    >
      <UserAvatar online={online} />

      <div
        className={
          `flex-1 text-xs max-w-full overflow-hidden` +
          (conversation.is_user && conversation?.blocked_at ? 'opacity-50' : '')
        }
      >
        <div className='flex gap-1 justify-between items-center'>
          <h3 className='text-sm font-semibold overflow-hidden text-nowrap text-ellipsis'>{conversation.name}</h3>
          {conversation.last_message_date && (
            <span className='text-nowrap'>{dayjs(conversation.last_message_date).format('DD/MM HH:mm A')}</span>
          )}
        </div>
        {conversation.last_message && (
          <p className='text-xs text-nowrap overflow-hidden text-ellipsis'>{conversation.last_message}</p>
        )}
      </div>
    </a>
  )
}

export default ConversationItem
