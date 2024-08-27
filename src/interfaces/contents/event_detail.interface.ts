import { EEventStatus } from '@constants/enum.constant'
import { ICategory } from './category.interface'
import { ICreator } from './creator.interface'
import { ILocation } from './location.interface'
import { ITicketType } from './ticketType.interface'
import { IEmailContent } from './email_content.interface'

export interface IEventDetail {
  id?: string
  creatorId: string
  creator: ICreator
  coverImage: string
  name: string
  description: string
  locationId: string
  location: ILocation
  startTime: Date
  endTime: Date
  categories: ICategory[]
  promotion: number
  ticketTypes: ITicketType
  emailContent: IEmailContent
  numberOfFavorites: number
  numberOfShares: number
  numberOfSoldTickets: number
  averageRating: number
  status: EEventStatus
  createdAt: Date
  updatedAt: Date
}
