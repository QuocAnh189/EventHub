export interface IInvitation {
  id: string
  inviter: Invitee
  inviteeId: string
  event: IEvent
  createdAt: string
}

interface Invitee {
  id: string
  avatarUrl: string
  fullName: string
}

interface IEvent {
  id: string
  name: string
}
