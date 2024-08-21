import { EGender, EUserStatus } from '@constants/enum.constant'

export interface IUser {
  id?: string
  userName: string
  email: string
  phoneNumber: number
  dob: any
  fullName: string
  gender: EGender
  bio: string
  avatar: string
  status: EUserStatus
  numberOfFollowers: number
  numberOfFolloweds: number
  numberOfFavourites: number
  numberOfCreatedEvents: number
  followingIds: string[]
  roles: string[]
  createdAt: Date
  updateAp: Date
}
