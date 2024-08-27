export type CheckoutPayload = {
  fullName: string
  phoneNumber: string
  email: string
  eventId: string
  userId: string
  userPaymentMethodId: string
  items: CheckoutItem[]
}

export type CheckoutItem = {
  ticketTypeId: string
  name: string
  price: number
  quantity: number
}

export type CreateBankAccountPayload = {
  userId: string
  accountHolderName: string
  accountNumber: string
}

export type CreatePaymentAccountPayload = {
  userId: string
  methodId: string
  paymentAccountNumber: string
  paymentAccountQRCode: File
  checkoutContent: string
}

export type UpdateOrderPayload = {
  paymentId: string
  customerName: string
  customerEmail: string
  customerPhone: string
}
