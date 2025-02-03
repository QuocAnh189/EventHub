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

export interface IPaymentTransaction {
  id: string
  event: {
    name: string
    coverImageUrl: string
  }
  customerName: string
  ticketQuantity: number
  totalPrice: number
  discountPrice: number
  finalPrice: number
  status: EPaymentStatus
  createdAt: string
}

export interface IPaymentOrder {
  id: string
  event: {
    name: string
    coverImageUrl: string
    creator: {
      userName: string
      avatarUrl: string
    }
  }
  ticketQuantity: number
  totalPrice: number
  discountPrice: number
  finalPrice: number
  status: EPaymentStatus
  createdAt: string
}

export interface IPaymentCheckout {
  eventId: string
  userId: string
  couponId: string
  customerEmail: string
  customerPhone: string
  customerName: string
  tickets: any[]
  discountPrice: number
  finalPrice: number
  totalPrice: number
  sessionId: string
  paymentId: string
}
