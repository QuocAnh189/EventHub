export interface ICoupon {
  id?: string
  name: string
  description: string
  coverImageUrl: string
  percent: number
  expireDate: string
  usageLimit: number
  usageCount: number
}
