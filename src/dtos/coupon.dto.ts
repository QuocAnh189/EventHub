export interface ICreateCouponPayload {
  userId: string
  coverImageUrl: string
  name: string
  description: string
  minPrice: number
  minQuantity: number
  percentageValue: number
  expireDate: string
}
