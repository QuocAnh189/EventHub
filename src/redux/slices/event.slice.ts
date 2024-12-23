import { PayloadAction, createSlice } from '@reduxjs/toolkit'

//interface
import { IEventFavorite } from 'interfaces/contents/event.interface'

export const EventSliceKey = 'event'

type InitialType = {
  categoryIdsWishlist: string[]
}

const initialState = {
  categoryIdsWishlist: []
} as InitialType

const eventSlice = createSlice({
  name: EventSliceKey,
  initialState,
  reducers: {
    setCategoryIdsWishlist: (state, action: PayloadAction<IEventFavorite[] | null>) => {
      action.payload?.map((item) => {
        item.categories.map((category) => {
          if (!state.categoryIdsWishlist?.includes(category.id)) {
            state.categoryIdsWishlist?.push(category.id)
          }
        })
      })
    }
  }
})

export const { setCategoryIdsWishlist } = eventSlice.actions

const eventReducer = eventSlice.reducer
export default eventReducer
