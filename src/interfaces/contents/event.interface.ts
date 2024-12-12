import { EEventPaymentTicket, EEventStyle } from '@constants/enum.constant'
import { ICategory } from './category.interface'

export interface IEvent {
  id: string
  creator: {
    id: string
    avatarUrl: string
    email: string
    fullName: string
    userName: string
  }
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
  averageRate: number
  reasons: IReason[]
  // ticketTypes: ITicketType[]
  // numberOfFavourites: number
  // numberOfShares: number
  // numberOfSoldTickets: number
  // status: EEventStatus
  // priceRange: IPriceRange
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
}

export interface IMyEventAnalysis {
  id: string
  name: string
  coverImageUrl: string
  averageRate: number
  totalSale: number
  totalFavourite: number
}
