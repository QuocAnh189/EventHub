export interface ICheckoutPayload {
  eventId: string
  userId: string
  tickets: IPayloadTicketItem[]
  couponId: string
  totalPrice: number
  discountPrice: number
  finalPrice: number
  customerName: string
  customerEmail: string
  customerPhone: string
}

export interface IPayloadTicketItem {
  ticketTypeId: string
  name: string
  quantity: number
  price: number
}
