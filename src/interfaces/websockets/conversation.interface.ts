export interface Conversation {
  id?: string
  eventId: string
  event: ConversationEvent
  hostId: string
  userId: string
  user: ConversationUser
  lastMessage?: ConversationLastMessage
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface ConversationEvent {
  name: string
  coverImage: string
}

export interface ConversationUser {
  fullName: string
  avatar: string
}

export interface ConversationLastMessage {
  content: string
  senderId: string
}
