import { ICoupon } from '@interfaces/contents/coupon.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const CouponSliceKey = 'coupon'

type InitialType = {
  coupons: ICoupon[] | null
}

const initialState = {
  coupons: null
} as InitialType

const couponSlice = createSlice({
  name: CouponSliceKey,
  initialState,
  reducers: {
    setCoupons: (state, action: PayloadAction<any | null>) => {
      state.coupons = action.payload
    },

    addCoupons: (state, action: PayloadAction<any | null>) => {
      state.coupons?.push(action.payload)
    }
  }
})

export const { setCoupons, addCoupons } = couponSlice.actions

const couponReducer = couponSlice.reducer
export default couponReducer
