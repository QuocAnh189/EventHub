export enum EEventPrivacy {
  ALL = 'ALL',
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  TRASH = 'TRASH'
}

export enum EEventAction {
  ALL = 'ALL',
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  TRASH = 'TRASH',
  DELETE = 'DELETE'
}

export enum EEventStatus {
  ALL = 'ALL',
  OPENING = 'OPENING',
  UPCOMING = 'UPCOMING',
  CLOSED = 'CLOSED'
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
  PAID = 'PAID',
  FREE = 'FREE'
}

export enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
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
