//components
import UserAvatar from './UserAvatar'

//icons
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

const ConversationHeader = () => {
  return (
    <div className='p-3 flex justify-between items-center border-b border-slate-700'>
      <div className='flex items-center gap-3'>
        <a href='' className='inline-block sm:hidden'>
          <ArrowLeftIcon className='w-6 h-6' />
        </a>

        <UserAvatar />
        <h3 className='text-gray-500'>Tran Phuoc Anh Quoc</h3>
      </div>
    </div>
  )
}

export default ConversationHeader
