export interface ITicket {
  id: string
  ticketNo: string
  customerName: string
  customerEmail: string
  customerPhone: string
  event: IEvent
  ticketType: ITicketType
}

interface IEvent {
  id: string
  name: string
  coverImageUrl: string
}

interface ITicketType {
  id: string
  name: string
  price: number
}
