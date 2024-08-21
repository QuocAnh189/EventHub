export enum EProvider {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook'
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
  fullName: string
  phoneNumber: string
  password: string
}

export const InitSignup = {
  email: '',
  fullName: '',
  phoneNumber: '',
  password: ''
} as SignUpPayload

export interface SignUpPayloadOne {
  email: string
  fullName: string
  phoneNumber: string
}

export const InitSignUpOne = {
  email: '',
  fullName: '',
  phoneNumber: ''
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

export interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export interface IParamsExternalLogin {
  provider: EProvider
  returnUrl: string
}
