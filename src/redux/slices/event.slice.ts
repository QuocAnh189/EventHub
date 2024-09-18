import { PayloadAction, createSlice } from '@reduxjs/toolkit'

//interface
import { IEvent } from 'interfaces/contents/event.interface'

export const EventSliceKey = 'event'

type InitialType = {
  library_event: IEvent | null
}

const initialState = {
  library_event: null
} as InitialType

const eventSlice = createSlice({
  name: EventSliceKey,
  initialState,
  reducers: {
    setEvent: (state, action: PayloadAction<IEvent | null>) => {
      state.library_event = action.payload
    }
  }
})

export const { setEvent } = eventSlice.actions

const eventReducer = eventSlice.reducer
export default eventReducer
