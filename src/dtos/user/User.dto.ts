import { EGender, EUserStatus } from '@constants/enum.constant'

export interface UserDto {
  id?: string
  userName: string
  email: string
  phoneNumber: string
  dob: string
  fullName: string
  gender: EGender
  bio: string
  avatar: string
  status: EUserStatus
  numberOfFollowers: number
  numberOfFolloweds: number
  numberOfFavourites: number
  numberOfCreatedEvents: number
  roles: string
  createdAt: string
  updatedAt: string
}
