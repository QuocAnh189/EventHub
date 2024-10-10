export interface IFunction {
  id?: string
  name: string
  url: string
  sortOrder: number
  parentId?: string | null
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}
