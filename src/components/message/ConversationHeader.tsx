//components
import Avatar from './Avatar'

const ConversationHeader = () => {
  return (
    <div className='p-3 flex justify-between items-center border-b border-slate-700'>
      <div className='flex items-center gap-3'>
        <Avatar imageUrl='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg' />
        <div className=''>
          <h3 className='text-gray-500'>Music With UIT</h3>
          <p className='text-header'>Author: Trần Phước Anh Quốc</p>
        </div>
      </div>
    </div>
  )
}

export default ConversationHeader
