import { ITicketType } from '@interfaces/contents'

export default function getBasePrice(tickets: ITicketType[]): number {
  const baseTicket = tickets.reduce((min, ticket) => (ticket.price < min.price ? ticket : min))
  return baseTicket.price
}
