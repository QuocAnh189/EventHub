export interface MetadataDto {
  currentPage: number
  totalPages: number
  page: number
  takeAll: boolean
  pageSize: number
  totalCount: number
  payloadSize: number
  hasPrevious: boolean
  hasNext: boolean
}
