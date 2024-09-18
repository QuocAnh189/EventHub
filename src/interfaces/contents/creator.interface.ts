import { EGender } from '@constants/enum.constant'

export interface ICreator {
  id?: string
  userName: string
  email: string
  phoneNumber: string
  dob: Date
  fullName: string
  gender: EGender
  avatar: string
}
