export interface IReview {
  id?: string
  userId: string
  fullName: string
  userAvatar: string
  email: string
  eventId: string
  eventName: string
  eventCoverImage: string
  content: string
  rate: number
  createdAt: Date
  updatedAt: Date
}
