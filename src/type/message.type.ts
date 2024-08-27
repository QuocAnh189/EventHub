import { EPageOrder } from '@constants/enum.constant'

export interface IMessageParams {
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  search?: string
}

export const initMessageParams = {
  page: 1,
  size: 10,
  takeAll: false,
  search: ''
} as IMessageParams

export interface IMessagePayload {
  userId: string
  conversationId: string
  content: string
}
