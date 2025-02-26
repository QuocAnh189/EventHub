export interface ICoupon {
  id: string
  couponId: string
  coverImageUrl: string
  name: string
  description: string
  minQuantity: number
  minPrice: number
  percentageValue: number
  expireDate: string
}
