export enum EProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook'
}

export interface SignInPayload {
  identity: string
  password: string
}

export const InitLoginPayload = {
  identity: '',
  password: ''
} as SignInPayload

export interface SignUpPayload {
  email: string
  userName: string
  phoneNumber: string
  password: string
  dob: string
}

export const InitSignupPayload = {
  email: '',
  userName: '',
  phoneNumber: '',
  password: ''
} as SignUpPayload

export interface OAuthLoginPayload {
  email: string
  name?: string
  avatar?: string
  phoneNumber?: string
  provider: EProvider
  tokenExpiredDate: Date
}

export interface SignUpPayloadOne {
  email: string
  userName: string
  phoneNumber: string
  dob: string
}

export const InitSignUpPayloadOne = {
  email: '',
  userName: '',
  phoneNumber: '',
  dob: ''
} as SignUpPayloadOne

export interface SignUpPayloadTwo {
  password: string
}

export const InitSignUpPayloadTwo = {
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
