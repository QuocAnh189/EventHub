import { EEventPaymentTicket, EEventStatus, EEventStyle } from '@constants/enum.constant'
import { ITicketType } from './ticketType.interface'
import { IUser } from 'interfaces/systems/user.interface'

export interface IEvent {
  id?: string
  authorId: string | IUser
  name: string
  coverImageFileName: string
  coverImageUrl: string
  description: string
  startTime: Date
  endTime: Date
  ticketTypes: ITicketType[]
  eventCycleType: EEventStyle
  eventPaymentType: EEventPaymentTicket
  numberOfFavorites: number
  numberOfShares: number
  numberOfSoldTickets: number
  location: string
  promotion: number
  status: EEventStatus
  isPrivate: boolean
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}
