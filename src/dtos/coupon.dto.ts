export interface ICreateCouponPayload {
  userId: string
  image: any
  name: string
  description: string
  minPrice: number
  minQuantity: number
  percentageValue: number
  expireDate: string
}

export interface IUpdateCouponPayload {
  id: string
  userId: string
  coverImageUrl: string
  image: any
  name: string
  description: string
  minPrice: number
  minQuantity: number
  percentageValue: number
  expireDate: string
}
