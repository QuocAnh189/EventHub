import { PropsWithChildren, useState } from 'react'

//components
import ConversationItem from '@components/message/ConversationItem'
import TextInput from '@ui/TextInput'

//data
import conversation_events from '@db/conversation_event'
import conversation_users from '@db/conversation_user'

const ModalMessage = ({ children }: PropsWithChildren) => {
  const [tabActive, setTabActive] = useState('Event')
  const onSearch = () => {}
  return (
    <div className='main fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden bg-primary-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[6] z-[2000]'>
      <div className='flex-1 w-full flex overflow-hidden'>
        <div className='transition-all w-full sm:w-[220px] bg-slate-300 md:w-[300px] flex flex-col overflow-hidden sm:ml-0'>
          <div className='flex items-center py-2 px-3 text-xl font-medium text-gray-200 hover:text-gray-200'>
            My Conversation
          </div>
          <div role='tablist' className='tabs tabs-boxed px-2'>
            <button
              onClick={() => setTabActive('Event')}
              role='tab'
              className={`tab ${tabActive === 'Event' && 'tab-active'}`}
            >
              Event
            </button>
            <button
              onClick={() => setTabActive('User')}
              role='tab'
              className={`tab ${tabActive === 'User' && 'tab-active'}`}
            >
              User
            </button>
          </div>
          <div className='p-3'>
            <TextInput onKeyUp={onSearch} placeholder='Search conversation' className='w-full' />
          </div>
          <div className='flex-1 overflow-auto'>
            {tabActive === 'Event' &&
              conversation_events.map((conversation, index: number) => (
                <ConversationItem
                  key={`conversation_${index}`}
                  conversation={conversation}
                  online={true}
                  selectedConversation={false}
                />
              ))}

            {tabActive === 'User' &&
              conversation_users.map((conversation, index: number) => (
                <ConversationItem
                  key={`conversation_${index}`}
                  conversation={conversation}
                  online={true}
                  selectedConversation={false}
                />
              ))}
          </div>
        </div>
        <div className='flex-1 flex flex-col overflow-hidden'>{children}</div>
      </div>
    </div>
  )
}

export default ModalMessage
