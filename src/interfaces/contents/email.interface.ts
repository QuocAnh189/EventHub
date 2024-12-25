export interface IEmailContent {
  id: string
  eventId: string
  content: string
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface IEmailAttachment {
  id: string
  emailContentId: string
  attachmentFileName: string
  AttachmentUrl: string
  content: string
  attachmentUrl: string
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}
