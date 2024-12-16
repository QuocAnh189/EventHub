import { EGender } from '@constants/enum.constant'

export interface IUser {
  id: string
  avatarUrl: string
  email: string
  userName: string
  fullName: string
  phoneNumber: string
  dob: any
  gender: EGender
  bio: string
  totalEvent: number
  totalFollower: number
  totalFollowing: number
  roles: IRole[]
}

export interface IUserFollower {
  id?: string
  avatarUrl: string
  email: string
  userName: string
}

interface IRole {
  id: string
  name: string
}
