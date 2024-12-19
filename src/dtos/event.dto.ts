import { EEventVisibility, EEventStatus, EEventStyle, EEventPaymentTicket, EPageOrder } from '@constants/enum.constant'
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
  userId: string
  name: string
  description: string
  coverImage: any
  subImageItems: any[]
  startTime: any
  endTime: any
  location: any
  eventCycleType: EEventStyle
  eventPaymentType: EEventPaymentTicket
  isPrivate: boolean
  categoryIds: string[]
  ticketTypeItems: ICreateTicketPayload[]
  reasonItems: string[]
}

export const InitCreateEventPayload = {
  userId: '',
  name: '',
  description: '',
  coverImage: null,
  subImageItems: [],
  startTime: null,
  endTime: null,
  location: '',
  eventCycleType: EEventStyle.Single,
  eventPaymentType: EEventPaymentTicket.Free,
  isPrivate: false,
  categoryIds: [],
  ticketTypeItems: [],
  reasonItems: ['aaa']
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
  status: EEventStatus.All,
  category: null,
  eventTicketType: null
} as IFilterEvent

export interface IParamsEvent {
  status?: EEventStatus
  location?: string | null
  categoryIds: string[]
  eventPrivacy?: EEventVisibility
  page?: number
  pageSize?: number
  takeAll?: boolean
  order?: EPageOrder
  priceRange?: IPriceRange
  search?: string
  rates?: number[]
  orderDesc?: boolean
  minRate?: number
}

export const initParamsMyEvent = {
  location: '',
  eventPrivacy: EEventVisibility.All,
  page: 1,
  pageSize: 4,
  takeAll: false,
  search: '',
  status: EEventStatus.All,
  order: 'ASC',
  orderDesc: false,
  minRate: 0
} as IParamsEvent

export const initParamsEvent = {
  page: 1,
  pageSize: 12,
  orderDesc: false,
  search: '',
  categoryIds: [],
  status: EEventStatus.All,
  minRate: 0
  // type: EEventStatus.All,
  // takeAll: false,
  // search: '',
  // order: 'ASC',
  // priceRange: { startRange: 20, endRange: 1000 },
  // rates: []
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
