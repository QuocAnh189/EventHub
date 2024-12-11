export enum EEventVisibility {
  All = 'All',
  Public = 'Public',
  Private = 'Private'
}

export enum EEventAction {
  All = 'All',
  Public = 'Public',
  Private = 'Private',
  Trash = 'Trash'
}

export enum EEventStatus {
  All = 'All',
  Opening = 'Opening',
  Upcoming = 'Upcoming',
  Closed = 'Closed'
}

export enum EEventType {
  ALL = 'ALL',
  UPCOMING = 'UPCOMING',
  OPENING = 'OPENING',
  CLOSED = 'CLOSED'
}

export enum EEventStyle {
  SINGLE = 'SINGLE',
  RECURRING = 'RECURRING'
}

export enum EEventPaymentTicket {
  Paid = 'Paid',
  Free = 'Free'
}

export enum EGender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

export enum EPageOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum EPaymentMethod {
  BANKING = 'BANKING',
  MOMO = 'MOMO'
}

export enum EPaymentStatus {
  PAID = 'PAID',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
  REJECTED = 'REJECTED'
}

export enum ETicketStatus {
  ACTIVE = 'ACTIVE',
  CHECKEDIN = 'CHECKEDIN',
  INACTIVE = 'INACTIVE'
}

export enum EUserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export enum EFileContainer {
  USERS = 'users',
  EVENTS = 'events',
  CATEGORIES = 'categories',
  BANKS = 'banks',
  PAYMENTS = 'payments',
  MESSAGES = 'messages'
}
