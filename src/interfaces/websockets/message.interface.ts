export enum EEnumMessageType {
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  IMAGE = 'IMAGE'
}

export interface IMessage {
  id?: string
  userId: string
  eventId: string
  conversationId: string
  content: string
  audioFileName: string
  audioUrl: string
  imageFileName: string
  imageUrl: string
  videoFileName: string
  videoUrl: string
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
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
