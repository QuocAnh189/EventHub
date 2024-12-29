export interface IConversation {
  id: string
  event: Event
  organizer?: User
  user: User
  lastMessage: LastMessage
  createdAt: string
  updatedAt: string
}

interface Event {
  id: string
  name: string
  coverImageUrl: string
}

interface User {
  id: string
  email: string
  fullName: string
  userName: string
  avatarUrl: string
}

interface LastMessage {
  senderId: string
  receiverId: string
  content: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export interface IMessage {
  id?: string
  senderId: string
  receiverId: string
  content: string
  createdAt: string
  updatedAt: string
}
