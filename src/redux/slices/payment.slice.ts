import { IPaymentCheckout } from '@interfaces/contents/payment.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const PaymentSliceKey = 'payment'

type InitialType = {
  sessionCheckout: IPaymentCheckout | null
}

const initialState = {
  sessionCheckout: null
} as InitialType

const paymentSlice = createSlice({
  name: PaymentSliceKey,
  initialState,
  reducers: {
    setSessionCheckouts: (state, action: PayloadAction<IPaymentCheckout | null>) => {
      state.sessionCheckout = action.payload
    }
  }
})

export const { setSessionCheckouts } = paymentSlice.actions

const paymentReducer = paymentSlice.reducer
export default paymentReducer
