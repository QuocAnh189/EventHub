import {
  EEventPaymentTicket,
  EEventStatus,
  EEventStyle
} from '@constants/enum.constant'
import { IPriceRange } from '@interfaces/systems/price_range.interface'
import { ITicketType } from './ticketType.interface'
import { IUser } from 'interfaces/systems/user.interface'

export interface IEvent {
  id?: string
  creatorId: string
  creator: Partial<IUser>
  creatorName: string
  categories: any[]
  coverImage: string
  subImages: any[]
  name: string
  description: string
  location: string
  priceRange: IPriceRange
  startTime: any
  endTime: any
  eventCycleType: EEventStyle
  eventPaymentType?: EEventPaymentTicket
  isPrivate: boolean
  isTrash: boolean
  ticketTypes: ITicketType[]
  categoryIds: string[] | any
  promotion: number
  numberOfFavorites: number
  isFavorite?: boolean
  numberOfShares: number
  numberOfSoldTickets: number
  averageRating: number
  status: EEventStatus
  reasons: string[]
  createdAt: Date
  updatedAt: Date
}
