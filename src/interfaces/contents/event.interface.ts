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
  locationPath: string
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

interface ICreator {
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
  coverImageUrl: string
  name: string
  startTime: string
  location: string
  description: string
  eventPaymentType: string
  averageRate: number
  endTime: string
}

export interface ICardSearchHome {
  id: string
  coverImageUrl: string
  name: string
  eventPaymentType: string
  categories: ICategory[]
  averageRate: number
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
