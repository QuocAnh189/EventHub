// hooks
import { PropsWithChildren } from 'react'
// import { useState } from 'react'
// import useOpenLiveChatAnimation from '@hooks/useOpenLiveChat'

//component
// import MessageIcon from './components/MessageIcon'
// import ModalMessage from './components/ModalMessage'

const ChatLayout = ({ children }: PropsWithChildren) => {
  // const [openLiveChat, setOpenLiveChat] = useState<boolean>(false)
  // const scope = useOpenLiveChatAnimation(openLiveChat)

  // const handleOpenLiveChat = () => {
  //   setOpenLiveChat(!openLiveChat)
  // }

  return (
    <div className='relative min-h-screen bg-body'>
      {/* <div className='menu' ref={scope}>
        <MessageIcon onClick={handleOpenLiveChat} />
        <ModalMessage />
      </div> */}
      {children}
    </div>
  )
}

export default ChatLayout
