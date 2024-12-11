export interface IReview {
  id: string
  user: IUser
  event: IEvent
  content: string
  rate: number
  isPositive: boolean
  createdAt: string
  updatedAt: string
}

interface IUser {
  id: string
  userName: string
  email: string
  avatarUrl: string
  fullName: string
}

interface IEvent {
  id: string
  name: string
  coverImageUrl: string
}
