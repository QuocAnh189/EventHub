import { EPageOrder } from '@constants/enum.constant'

export interface IConversationParams {
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  search?: string
}

export const initConversationParams = {
  page: 1,
  size: 6,
  takeAll: false,
  search: ''
} as IConversationParams

export type JoinChatRoomRequest = {
  eventId: string
  hostId: string
  userId: string
}

export type SendMessageRequest = {
  userId: string
  conversationId: string
  content: string
}

export interface IConservationResponse {
  event: { name: string; coverImage: string }
  eventId: string
  host: { fullName: string; avatar: string }
  hostId: string
  id: string
  userId: string
  user: { fullName: string; avatar: string }
  updatedAt: any
  createdAt: any
}

export interface IParamsConservationUser {
  userId: string
  page: number
  size: number
  takeAll: false
  order: EPageOrder.ASC
}

export const initParamsConversationUser = {
  userId: '',
  page: 1,
  size: 10,
  takeAll: false,
  order: 'ASC'
} as IParamsConservationUser

export interface IParamsConservationHost {
  hostId: string
  page: number
  size: number
  takeAll: boolean
  order: EPageOrder.ASC
}

export const initParamsConversationHost = {
  hostId: '',
  page: 1,
  size: 10,
  takeAll: false,
  order: 'ASC'
} as IParamsConservationHost

export interface IMessageResponse {
  id?: string
  userId: string
  conversationId: string
  content?: string
  audio?: any
  image?: string
  video?: string
  createdAt: Date
  updatedAt?: Date
}
