export interface ICoupon {
  id: string
  coverImageUrl: string
  name: string
  description: string
  minQuantity: number
  minPrice: number
  percentageValue: number
  expireDate: string
}
