import { EGender } from '@constants/enum.constant'

export interface IUpdateUserProfilePayload {
  id: string
  avatarUrl: string
  avatar: any
  email: string
  userName: string
  fullName: string
  phoneNumber: string
  gender: EGender
  dob: string
  bio: string
}

export interface IChangePasswordsPayload {
  password: string
  newPassword: string
}
