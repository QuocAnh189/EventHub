import { EPaymentStatus } from '@constants/enum.constant'

export interface IPayment {
  id: string
  eventId: string
  event: IPaymentEvent
  ticketQuantity: number
  userId: string
  customerName: string
  customerPhone: string
  customerEmail: string
  totalPrice: number
  discount: number
  status: EPaymentStatus
  userPaymentMethodId: string
  paymentMethod: IPaymentMethod
  createdAt: Date
  updatedAt: Date
}

export interface IPaymentAccount {
  id: string
  userId: string
  methodId: string
  methodName: string
  methodLogo: string
  paymentAccountNumber: string
  paymentAccountQRCode?: string
  checkoutContent?: string
}

export interface IPaymentEvent {
  id: string
  coverImage: string
  name: string
  creatorId: string
}

export interface IPaymentMethod {
  id: string
  userId: string
  methodId: string
  method: {
    id: string
    methodName: string
    methodLogo: string
  }
  paymentAccountNumber: string
}
