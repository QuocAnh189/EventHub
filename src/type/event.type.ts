import { EEventPrivacy, EEventStatus, EEventStyle, EEventPaymentTicket, EPageOrder } from '@constants/enum.constant'
import { IPriceRange } from 'interfaces/systems/price_range.interface'

export interface ICreateTicketPayload {
  name: string
  quantity: number
  price: number
}

export const InitCreateTicketPayload = {
  name: '',
  quantity: 0,
  price: 0
} as ICreateTicketPayload

export interface ICreateEventPayload {
  id?: string
  creatorId?: string
  name: string
  categoryIds: string[]
  eventCycleType: EEventStyle
  startTime: any
  endTime: any
  location: any
  pathLocation: string
  description: string
  reasons: string[]
  coverImage: any
  eventSubImages: any[]
  eventPaymentType: EEventPaymentTicket
  ticketTypes: ICreateTicketPayload[]
  isPrivate: boolean
}

export const InitCreateEventPayload = {
  name: '',
  categoryIds: [],
  eventCycleType: EEventStyle.SINGLE,
  startTime: null,
  endTime: null,
  location: '',
  pathLocation: '',
  description: '',
  reasons: [],
  coverImage: '',
  eventSubImages: [],
  eventPaymentType: EEventPaymentTicket.FREE,
  ticketTypes: [],
  isPrivate: false
} as ICreateEventPayload

export interface IFavoriteEventPayload {
  eventId: string
  userId: string
}

export interface IReviewEventPayload {
  userId: string
  eventId: string
  content: string
  rate: number
}

export interface IFilterEvent {
  status: any
  category: any
  eventTicketType: any
}

export const initFilterEvent = {
  status: EEventStatus.ALL,
  category: null,
  eventTicketType: null
} as IFilterEvent

export interface IParamsEvent {
  type?: EEventStatus
  location?: string | null
  categoryIds: string[]
  eventPrivacy?: EEventPrivacy
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  priceRange?: IPriceRange
  search?: string
  rates?: number[]
}

export const initParamsMyEvent = {
  type: EEventStatus.ALL,
  location: '',
  eventPrivacy: EEventPrivacy.ALL,
  page: 1,
  size: 4,
  takeAll: false,
  search: '',
  order: 'ASC'
} as IParamsEvent

export const initParamsEvent = {
  page: 1,
  type: EEventStatus.ALL,
  categoryIds: [],
  size: 12,
  takeAll: false,
  search: '',
  order: 'ASC',
  priceRange: { startRange: 20, endRange: 1000 },
  rates: []
} as IParamsEvent

export interface IMetadataEventResponse {
  currentPage: number
  hasNext: boolean
  hasPrevious: boolean
  pageSize: number
  takeAll: boolean
  totalCount: number
  totalPages: number
  totalPrivate: number
  totalPublic: number
  totalTrash: number
}

export interface IParamsReview {
  eventId?: string
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  search?: string
}
export interface IMetadataReviewResponse {
  currentPage?: number
  hasNext?: boolean
  hasPrevious: boolean
  pageSize: number
  takeAll: boolean
  totalCount: number
  totalPages: number
}

export const initParamsReview = {
  page: 1,
  size: 5,
  takeAll: false,
  order: EPageOrder.DESC
} as IParamsReview
