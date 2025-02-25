import { EEventPaymentTicket, EEventStyle } from '@constants/enum.constant'
import { ICategory } from './category.interface'
import { ICoupon } from './coupon.interface'
import { ITicketType } from './ticketType.interface'

export interface IEvent {
  id: string
  creator: ICreator
  name: string
  description: string
  coverImageUrl: string
  location: string
  pathLocation: string
  startTime: string
  endTime: string
  eventCycleType: EEventStyle
  eventPaymentType: EEventPaymentTicket
  isPrivate: boolean
  categories: ICategory[]
  subImages: ISubImage[]
  coupons: ICoupon[]
  ticketTypes: ITicketType[]
  averageRate: number
  reasons: IReason[]
}

export interface ICreator {
  id: string
  avatarUrl: string
  email: string
  fullName: string
  userName: string
}

export interface IReason {
  id: string
  content: string
}

export interface ISubImage {
  id: string
  imageUrl: string
}

export interface ICardEvent {
  id: string
  categories: ICategory[]
  coverImageUrl: string
  name: string
  startTime: string
  location: string
  description: string
  eventPaymentType: string
  averageRate: number
  endTime: string
  ticketTypes: ITicketType[]
}

export interface ICardSearchHome {
  id: string
  coverImageUrl: string
  name: string
  eventPaymentType: string
  categories: ICategory[]
  averageRate: number
  ticketTypes: ITicketType[]
}

export interface IEventFavorite {
  id: string
  name: string
  coverImageUrl: string
  startTime: string
  averageRate: number
  categories: ICategory[]
}

export interface IMyEvent {
  id: string
  name: string
  coverImageUrl: string
  startTime: string
  location: string
  isPrivate: boolean
  deletedAt: any
  coupons: ICoupon[]
}

export interface IMyEventAnalysis {
  id: string
  name: string
  coverImageUrl: string
  averageRate: number
  totalSale: number
  totalFavourite: number
}

export interface IMyEventExpense {
  id: string
  name: string
  coverImageUrl: string
  averageRate: number
  expenses: {
    id: string
    total: number
  }[]
}
