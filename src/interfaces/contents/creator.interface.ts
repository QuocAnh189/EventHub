import { EGender } from '@constants/enum.constant'

export interface ICreator {
  id?: string
  avatar: string
  userName: string
  email: string
  fullName: string
  phoneNumber: string
  dob: Date
  gender: EGender
}
