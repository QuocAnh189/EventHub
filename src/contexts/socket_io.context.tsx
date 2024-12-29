import { PropsWithChildren, createContext } from 'react'

//redux
import { useAppDispatch } from '@hooks/useRedux'
import { setSocket } from '@redux/slices/socket.slice'

const AppSocketIOProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch()

  const SocketLogout = (socket: any) => {
    socket.emit('logout')
    dispatch(setSocket(null))
  }

  const SocketFollow = (socket: any, followerId: string, followeeId: string) => {
    socket.emit('follow', {
      follower_id: followerId,
      followee_id: followeeId
    })
  }

  const SocketInvitation = (socket: any, inviteeIds: string[]) => {
    socket.emit('invitation', inviteeIds)
  }

  const JoinConversation = (socket: any, conversationId: string) => {
    socket.emit('join_conversation', conversationId)
  }

  const SocketSendMessage = (socket: any, senderId: string, conversationId: string, message: string) => {
    socket.emit('send_message', {
      sender_id: senderId,
      conversation_id: conversationId,
      message
    })
  }

  return (
    <AppSocketContext.Provider
      value={{ SocketLogout, SocketFollow, JoinConversation, SocketSendMessage, SocketInvitation }}
    >
      {children}
    </AppSocketContext.Provider>
  )
}

export interface AppSocketIOContextProps {
  SocketLogout: (socket: any) => void
  SocketFollow: (socket: any, followerId: string, followeeId: string) => void
  JoinConversation: (socket: any, conversationId: string) => void
  SocketSendMessage: (socket: any, senderId: string, conversationId: string, message: string) => void
  SocketInvitation: (socket: any, inviteeIds: string[]) => void
  handleSendMessage: () => void
}

export const AppSocketContext = createContext<Partial<AppSocketIOContextProps>>({})

export default AppSocketIOProvider
