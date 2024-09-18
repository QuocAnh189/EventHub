import { IUser } from './user.interface'

export interface IAuth {
  user: IUser
  accessToken: string
  refreshToken: string
}
