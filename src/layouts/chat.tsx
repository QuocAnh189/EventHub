// hooks
import { PropsWithChildren, useRef, useEffect } from 'react'
import { useState } from 'react'
import useOpenLiveChatAnimation from '@hooks/useOpenLiveChat'

//component
import MessageIcon from './components/MessageIcon'
import ModalMessage from './components/ModalMessage'

//icons
import { ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'
import ConversationHeader from '@components/message/ConversationHeader'
import MessageInput from '@components/message/MessageInput'
import MessageItem from '@components/message/MessageItem'

// //data
// import messages from '@db/messages'

//redux
import { useAppSelector } from '@hooks/useRedux'
import { useGetMessageByConversationIdQuery } from '@redux/apis/conversation.api'

//interface
import { IMessage } from '@interfaces/websockets/conversation.interface'
import { IUser } from '@interfaces/systems'

//i18n
import { withTranslation, WithTranslation } from 'react-i18next'

interface ModalMessageProps extends PropsWithChildren, WithTranslation {}

const ChatLayout = ({ children, t }: ModalMessageProps) => {
  const loadMoreIntersect = useRef(null)
  const messagesCtrRef = useRef(null)
  const [openLiveChat, setOpenLiveChat] = useState<boolean>(false)
  const scope = useOpenLiveChatAnimation(openLiveChat)

  const handleOpenLiveChat = () => {
    setOpenLiveChat(!openLiveChat)
  }

  const [params] = useState({ pageSize: 10 })
  const conversation = useAppSelector((state) => state.persistedReducer.conversation.conversation)
  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)
  const socket = useAppSelector((state) => state.socket.socket)

  const [messages, setMessages] = useState<IMessage[]>([])
  const { data } = useGetMessageByConversationIdQuery({ conversationId: conversation?.id, params })

  useEffect(() => {
    socket?.on('receive_message', (result: any) => {
      const newMessage = {
        senderId: result.sender_id,
        receiverId: conversation?.user?.id || conversation?.organizer?.id,
        content: result.message,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString()
      }
      setMessages((prev) => [...prev, newMessage])
    })
    return () => socket?.off('receive_message')
  }, [socket])

  useEffect(() => {
    if (data && data.items) {
      setMessages(data.items)
    }
  }, [data?.items])

  return (
    <div className='relative min-h-screen bg-body'>
      <div className='menu' ref={scope}>
        <MessageIcon onClick={handleOpenLiveChat} />
        <ModalMessage>
          <>
            {!user && (
              <div className='flex flex-col gap-8 justify-center items-center text-center h-full opacity-35'>
                <div className='text-2xl md:text-4xl p-16'>{t('box_message.right.login_to_chat')}</div>
                <ChatBubbleLeftRightIcon className='w-32 h-32 inline-block' />
              </div>
            )}

            {!conversation && user && (
              <div className='flex flex-col gap-8 justify-center items-center text-center h-full opacity-35'>
                <div className='text-2xl md:text-4xl p-16'>{t('box_message.right.select_conversation')}</div>
                <ChatBubbleLeftRightIcon className='w-32 h-32 inline-block' />
              </div>
            )}

            {conversation && data && user && (
              <>
                <ConversationHeader
                  imageUrl={conversation.event.coverImageUrl}
                  title={conversation.event.name}
                  userFullName={conversation?.user?.fullName}
                  organizerFullName={conversation?.organizer?.fullName}
                />
                <div ref={messagesCtrRef} className='flex-1 overflow-y-auto p-5'>
                  {data && data.items?.length === 0 && (
                    <div className='flex justify-center items-center h-full'>
                      <div className='text-lg text-slate-200'>{t('box_message.right.no_message')}</div>
                    </div>
                  )}
                  {messages && messages?.length > 0 && (
                    <div className='flex-1 flex flex-col'>
                      <div ref={loadMoreIntersect} className=''></div>
                      {messages?.map((message: IMessage, index: number) => (
                        <MessageItem
                          key={index}
                          message={message}

                          // user={auth.user}
                          // attachmentClick={onAttachmentClick}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <MessageInput
                  conversationId={conversation.id}
                  receiverId={conversation?.user?.id || conversation?.organizer?.id}
                />
              </>
            )}
          </>
        </ModalMessage>
      </div>
      {children}
    </div>
  )
}

export default withTranslation('common')(ChatLayout)
