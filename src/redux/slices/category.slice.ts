import { PayloadAction, createSlice } from '@reduxjs/toolkit'

//interface
import { ICategory } from 'interfaces/contents/category.interface'

export const CategorySliceKey = 'category'

type InitialType = {
  categories: ICategory[]
}

const initialState = {
  categories: []
} as InitialType

const categorySlice = createSlice({
  name: CategorySliceKey,
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload
    }
  }
})

export const { setCategories } = categorySlice.actions

const categoryReducer = categorySlice.reducer
export default categoryReducer
