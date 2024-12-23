//hooks
import { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react'

//components
import { toast } from 'react-toastify'

//redux
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setSocket } from '@redux/slices/socket.slice'

//socket
import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

const AppSocketProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const [connection, setConnection] = useState<HubConnection>()

  const handleConnectSocket = useRef<(() => Promise<void>) | null>(null)

  useEffect(() => {
    handleConnectSocket.current = async () => {
      const conn = new HubConnectionBuilder()
        .withUrl(`${import.meta.env.VITE_API_URL_SOCKET}/chat`, {
          withCredentials: false,
          transport: HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Debug)
        .build()

      try {
        conn.on('JoinChatRoom', (conversation: any) => {
          console.log('🚀 ~ conn.on ~ conversation:', conversation)
        })

        conn.on('ReceiveMessage', (result: any) => {
          console.log('🚀 ~ conn.on ~ result:', result)
        })

        await conn.start()
        setConnection(conn)
        dispatch(setSocket(conn))
      } catch (err) {
        console.error('Connection failed: ', err)
      }
    }
    handleConnectSocket.current()
    return () => {
      handleConnectSocket.current = null
      connection
        ?.stop()
        .then(() => {
          dispatch(setSocket(null))
          console.log('Disconnected from SignalR')
        })
        .catch((err: any) => console.error('Disconnection failed: ', err))
    }
  }, [user, dispatch])

  const handleJoinChatRoom = async ({ eventId, hostId, userId }: any) => {
    try {
      await connection?.invoke('JoinChatRoom', { eventId, hostId, userId })
    } catch (error: any) {
      console.log(error)
      toast.error(error)
    }
  }

  const handleSendMessage = async ({
    userId,
    conversationId,
    content,
    imageId,
    imageUrl,
    videoId,
    videoUrl,
    audioId,
    audioUrl
  }: any) => {
    try {
      await connection?.invoke('SendMessage', {
        userId,
        conversationId,
        content,
        imageId,
        imageUrl,
        videoId,
        videoUrl,
        audioId,
        audioUrl
      })
      // dispatch(updateMessagesCurrent({ userId, content, conversationId }))
    } catch (error: any) {
      console.error('Error sending message: ', error)
      toast.error(error)
    }
  }

  return (
    <AppSocketContext.Provider
      value={{
        handleJoinChatRoom,
        handleSendMessage,
        connection
      }}
    >
      {children}
    </AppSocketContext.Provider>
  )
}

export interface AppSocketContextProps {
  handleJoinChatRoom: (params: any) => Promise<void>
  handleSendMessage: (params: any) => Promise<void>
  connection: HubConnection
}

export const AppSocketContext = createContext<Partial<AppSocketContextProps>>({})

export default AppSocketProvider
