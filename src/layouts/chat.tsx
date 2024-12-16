/* eslint-disable no-constant-binary-expression */
// hooks
import { PropsWithChildren, useRef } from 'react'
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
import { IMessage } from '@interfaces/contents/conversation.interface'

const ChatLayout = ({ children }: PropsWithChildren) => {
  const loadMoreIntersect = useRef(null)
  const messagesCtrRef = useRef(null)
  const [openLiveChat, setOpenLiveChat] = useState<boolean>(false)
  const scope = useOpenLiveChatAnimation(openLiveChat)

  const handleOpenLiveChat = () => {
    setOpenLiveChat(!openLiveChat)
  }

  const [params] = useState({ pageSize: 10 })
  const conversation = useAppSelector((state) => state.persistedReducer.conversation.conversation)

  const { data } = useGetMessageByConversationIdQuery({ conversationId: conversation.id, params })

  return (
    <div className='relative min-h-screen bg-body'>
      <div className='menu' ref={scope}>
        <MessageIcon onClick={handleOpenLiveChat} />
        <ModalMessage>
          <>
            {false && (
              <div className='flex flex-col gap-8 justify-center items-center text-center h-full opacity-35'>
                <div className='text-2xl md:text-4xl p-16'>Please select conversation to see messages</div>
                <ChatBubbleLeftRightIcon className='w-32 h-32 inline-block' />
              </div>
            )}

            {true && (
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
                      <div className='text-lg text-slate-200'>No messages found</div>
                    </div>
                  )}
                  {data && data.items?.length > 0 && (
                    <div className='flex-1 flex flex-col'>
                      <div ref={loadMoreIntersect} className=''></div>
                      {data.items?.map((message: IMessage, index: number) => (
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

                <MessageInput conversation={[]} />
              </>
            )}
          </>
        </ModalMessage>
      </div>
      {children}
    </div>
  )
}

export default ChatLayout
