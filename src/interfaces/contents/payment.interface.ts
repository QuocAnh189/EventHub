import { EPaymentStatus } from '@constants/enum.constant'

export interface IPayment {
  id: string
  userId: string
  eventId: string
  userPaymentMethodId: string
  customerName: string
  customerPhone: string
  customerEmail: string
  event: IPaymentEvent
  totalPrice: number
  discount: number
  ticketQuantity: number
  status: EPaymentStatus
  paymentMethod: IPaymentMethod
  isDeleted: boolean
  deletedAt: Date
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
