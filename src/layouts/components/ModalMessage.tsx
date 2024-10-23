import { PropsWithChildren } from 'react'

//components
import ConversationItem from '@components/message/ConversationItem'
import TextInput from '@ui/TextInput'

const conversation = {
  image: 'Dinh Khoi',
  name: 'Conversation',
  last_message_date: '2021-09-01T00:00:00.000Z',
  last_message: 'Today i feel so good'
}

const ModalMessage = ({ children }: PropsWithChildren) => {
  const onSearch = () => {}
  return (
    <div className='main fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden bg-primary-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[6] z-[2000]'>
      <div className='flex-1 w-full flex overflow-hidden'>
        <div className='transition-all w-full sm:w-[220px] bg-slate-300 md:w-[300px] flex flex-col overflow-hidden sm:ml-0'>
          <div className='flex items-center py-2 px-3 text-xl font-medium text-gray-200 hover:text-gray-200'>
            My Conversation
          </div>
          <div className='p-3'>
            <TextInput onKeyUp={onSearch} placeholder='Search conversation' className='w-full' />
          </div>
          <div className='flex-1 overflow-auto'>
            {[...Array(15).keys()].map((_, index) => (
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
