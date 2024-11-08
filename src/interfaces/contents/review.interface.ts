export interface IReview {
  id?: string
  userId: string
  eventId: string
  fullName: string
  userAvatar: string
  email: string
  eventName: string
  eventCoverImage: string
  content: string
  rate: number
  isPositive: boolean
  isDeleted?: boolean
  deletedAt?: Date
  createdAt: Date
  updatedAt: Date
}
