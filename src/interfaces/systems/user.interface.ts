import { EGender } from '@constants/enum.constant'
import { IRole } from './role.interface'

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

export interface IUserInvitation {
  id?: string
  avatarUrl: string
  email: string
  userName: string
}
