export enum EEnumMessageType {
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  IMAGE = 'IMAGE'
}

export interface Message {
  id?: string
  userId: string
  conversationId: string
  type: EEnumMessageType
  content?: string
  audio?: any
  image?: string
  video?: string
  createdAt: Date
  updatedAt?: Date
}

export const initMessage = {
  type: EEnumMessageType.TEXT
}

export interface JoinChatRoomParams {
  eventId: string
  hostId: string
  userId: string
}

export interface SendMessageParams {
  userId: string
  conversationId: string
  content?: string
  imageId?: string
  imageUrl?: string
  videoId?: string
  videoUrl?: string
  audioId?: string
  audioUrl?: string
}
