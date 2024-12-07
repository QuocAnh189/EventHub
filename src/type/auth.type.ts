export enum EProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook'
}

export interface LoginPayload {
  identity: string
  password: string
}

export const InitLogin = {
  identity: '',
  password: ''
} as LoginPayload

export interface OAuthLoginPayload {
  email: string
  name?: string
  avatar?: string
  phoneNumber?: string
  provider: EProvider
  tokenExpiredDate: Date
}

export interface SignUpPayload {
  email: string
  userName: string
  phoneNumber: string
  password: string
  dob: string
}

export const InitSignup = {
  email: '',
  userName: '',
  phoneNumber: '',
  password: ''
} as SignUpPayload

export interface SignUpPayloadOne {
  email: string
  userName: string
  phoneNumber: string
  dob: string
}

export const InitSignUpOne = {
  email: '',
  userName: '',
  phoneNumber: '',
  dob: ''
} as SignUpPayloadOne

export interface SignUpPayloadTwo {
  password: string
}

export const InitSignUpTwo = {
  password: ''
} as SignUpPayloadTwo

export interface ForgotPassPayload {
  email: string
}

export interface ResetPassWordPayload {
  newPassword: string | null
  email: string
  token: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export interface IParamsExternalLogin {
  provider: EProvider
  returnUrl: string
}
