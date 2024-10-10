export interface IEmailAttachment {
  id?: string
  emailContentId: string
  attachmentFileName: string
  AttachmentUrl: string
  content: string
  attachmentUrl: string
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface IEmailContent {
  id?: string
  eventId: string
  content: string
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface IEmailLogger {
  id?: string
  emailContentId: string
  sendEmail: string
  receiveEmail: string
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}
